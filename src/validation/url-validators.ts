/**
 * URL validation utilities
 * Copied from crm_demo for shared use across all applications
 */

const LINKEDIN_URL_REGEX = /^http(?:s)?:\/\/(?:www\.)?linkedin.com\//;

/**
 * Validates if a URL is a valid LinkedIn URL
 * @param url - The URL to validate
 * @returns Error message if invalid, undefined if valid
 */
export const isLinkedinUrl = (url: string) => {
  if (!url) return;
  try {
    // Parse the URL to ensure it is valid
    const parsedUrl = new URL(url);
    if (!parsedUrl.href.match(LINKEDIN_URL_REGEX)) {
      return "URL must be from linkedin.com";
    }
  } catch {
    // If URL parsing fails, return false
    return "Must be a valid URL";
  }
};

/**
 * Validates if a string is a valid URL
 * @param url - The URL to validate
 * @returns Error message if invalid, undefined if valid
 */
export const isUrl = (url: string) => {
  if (!url) return;
  const UrlRegex = new RegExp(
    /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([-.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i,
  );
  if (!UrlRegex.test(url)) {
    return "Must be a valid URL";
  }
};
