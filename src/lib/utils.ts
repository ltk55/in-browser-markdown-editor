function formatDisplayDate(inputDate: string) {
  const dateParts = inputDate.split("-");
  const day = parseInt(dateParts[0], 10);
  const month = parseInt(dateParts[1], 10);
  const year = parseInt(dateParts[2], 10);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  if (month < 1 || month > 12) {
    return "Invalid date";
  }

  const formattedDate = `${day} ${monthNames[month - 1]} ${year}`;

  return formattedDate;
}

export { formatDisplayDate };
