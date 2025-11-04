type FetchParams = Parameters<typeof fetch>;

/**
 * Fetch with timeout support
 * From crm_demo - useful for API calls that need timeout protection
 */
export async function fetchWithTimeout(
  resource: string,
  options: FetchParams[1] & { timeout?: number } = {},
) {
  const { timeout = 2000 } = options;

  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  const response = await fetch(resource, {
    ...options,
    signal: controller.signal,
  });
  clearTimeout(id);

  return response;
}

