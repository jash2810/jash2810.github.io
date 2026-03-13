const MONTHS = {
  jan: 0,
  january: 0,
  feb: 1,
  february: 1,
  mar: 2,
  march: 2,
  apr: 3,
  april: 3,
  may: 4,
  jun: 5,
  june: 5,
  jul: 6,
  july: 6,
  aug: 7,
  august: 7,
  sep: 8,
  sept: 8,
  september: 8,
  oct: 9,
  october: 9,
  nov: 10,
  november: 10,
  dec: 11,
  december: 11
};

function isPresent(value) {
  if (value == null) return true;
  if (value instanceof Date) return false;
  if (typeof value !== "string") return false;
  const v = value.trim().toLowerCase();
  return v === "" || v === "present" || v === "current" || v === "now";
}

function parseYearMonth(value) {
  if (value == null) return null;
  if (value instanceof Date) {
    return { year: value.getUTCFullYear(), month: value.getUTCMonth(), day: value.getUTCDate() };
  }
  if (typeof value === "number") return { year: value, month: 0, day: 1 };
  if (typeof value !== "string") return null;

  const trimmed = value.trim();
  if (!trimmed) return null;

  const iso = trimmed.match(/^(\d{4})(?:-(\d{2})(?:-(\d{2}))?)?$/);
  if (iso) {
    const year = Number(iso[1]);
    const month = iso[2] ? Number(iso[2]) - 1 : 0;
    const day = iso[3] ? Number(iso[3]) : 1;
    if (!Number.isFinite(year) || month < 0 || month > 11 || day < 1 || day > 31) return null;
    return { year, month, day };
  }

  const words = trimmed.replace(/\s+/g, " ").split(" ");
  if (words.length === 2) {
    const monthKey = words[0].toLowerCase();
    const year = Number(words[1]);
    const month = MONTHS[monthKey];
    if (month == null || !Number.isFinite(year)) return null;
    return { year, month, day: 1 };
  }

  return null;
}

function toUtcDate(value, { endOfMonth } = {}) {
  if (isPresent(value)) return new Date();
  const p = parseYearMonth(value);
  if (!p) return null;
  const day = endOfMonth ? new Date(Date.UTC(p.year, p.month + 1, 0)).getUTCDate() : p.day ?? 1;
  return new Date(Date.UTC(p.year, p.month, day));
}

function formatMonthYearUtc(date) {
  return new Intl.DateTimeFormat("en-US", { month: "short", year: "numeric", timeZone: "UTC" }).format(
    date,
  );
}

function formatPoint(value) {
  if (isPresent(value)) return "Present";
  const p = parseYearMonth(value);
  if (!p) return "";
  if (typeof value === "string" && /^\d{4}$/.test(value.trim())) return value.trim();
  return formatMonthYearUtc(new Date(Date.UTC(p.year, p.month, 1)));
}

export function formatDateLabel(value) {
  return formatPoint(value);
}

export function formatRange(start, end) {
  const a = formatPoint(start);
  const b = formatPoint(end);
  if (!a && !b) return "";
  if (a && !b) return `${a} – Present`;
  if (!a && b) return b;
  return `${a} – ${b}`;
}

export function formatDuration(start, end) {
  const startYearOnly = typeof start === "string" && /^\d{4}$/.test(start.trim());
  const endYearOnly = typeof end === "string" && /^\d{4}$/.test(end.trim());

  if (startYearOnly && (endYearOnly || isPresent(end))) {
    const startYear = Number(start.trim());
    const endYear = endYearOnly ? Number(end.trim()) : new Date().getUTCFullYear();
    const years = endYear - startYear;
    if (years > 0) return `${years} yr${years === 1 ? "" : "s"}`;
  }

  const startDate = toUtcDate(start);
  if (!startDate) return "";

  const endDate = isPresent(end) ? new Date() : toUtcDate(end, { endOfMonth: true });
  if (!endDate) return "";

  let months =
    (endDate.getUTCFullYear() - startDate.getUTCFullYear()) * 12 +
    (endDate.getUTCMonth() - startDate.getUTCMonth());

  if (endDate.getUTCDate() >= startDate.getUTCDate()) months += 1;
  if (months <= 0) return "";

  const years = Math.floor(months / 12);
  const remMonths = months % 12;

  const parts = [];
  if (years) parts.push(`${years} yr${years === 1 ? "" : "s"}`);
  if (remMonths) parts.push(`${remMonths} mo${remMonths === 1 ? "" : "s"}`);
  if (!parts.length) return "1 mo";
  return parts.join(" ");
}
