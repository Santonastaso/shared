import { formatRelative } from "date-fns";

/**
 * RelativeDate Component
 * Displays a date as a relative time string (e.g., "2 days ago")
 * From crm_demo
 */
export function RelativeDate({ date }: { date: string }) {
  return formatRelative(new Date(date), new Date());
}
