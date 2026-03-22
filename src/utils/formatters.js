/**
 * Utility functions for handling data from GitHub Api
 */


// Format the ISO 8601 date strings from GitHub into human-readable date
export function formatDate(isoString) {
  if (!isoString) return "Unknown date";

  return new Date(isoString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

// Format numbers from GitHub to strings for consistency
export function formatCount(num) {
  if (typeof num !== "number") return "0";
  return String(num);
}

// Ensure received URL has a protocol prefix
export function ensureProtocol(url) {
  if (!url) return "";
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  return "https://" + url;
}