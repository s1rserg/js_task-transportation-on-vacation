/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RENT_COST = 40;
  const MID_TERM = 3;
  const MID_TERM_DISCOUNT = 20;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;

  if (days >= LONG_TERM) {
    return days * RENT_COST - LONG_TERM_DISCOUNT;
  }

  if (days >= MID_TERM) {
    return days * RENT_COST - MID_TERM_DISCOUNT;
  }

  return days * RENT_COST;
}

module.exports = calculateRentalCost;
