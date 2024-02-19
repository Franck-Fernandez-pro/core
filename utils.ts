export function yearsDifference(referenceDate: Date) {
  const currentDate = new Date();
  const yearsDifference =
    (currentDate.getTime() - referenceDate.getTime()) /
    (1000 * 60 * 60 * 24 * 365.25);

  return Math.floor(yearsDifference);
}
