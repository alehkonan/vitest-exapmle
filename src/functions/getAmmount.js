/**
 *
 * @param {Number} amount the amount of coins to format
 * @returns a formatted string
 */

export function formatMoney(amount) {
  return Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(amount / 100);
}
