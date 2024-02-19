export function yearsDifference(referenceDate: Date) {
  const currentDate = new Date();
  const timeDifferenceInMilliseconds =
    (currentDate.getTime() - referenceDate.getTime()) /
    (1000 * 60 * 60 * 24 * 365.25);

  return timeDifferenceInMilliseconds;
}
