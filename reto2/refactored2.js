function countHours(year, holidays) {
    return holidays
        .map(holiday => new Date(
            Date.parse(`${year}-${holiday}`)))
        .filter(date => date.getDay() > 0)
        .filter(date => date.getDay() < 6)
        .length * 2
}

console.log(countHours(2023, ['01/06', '04/01', '12/25']))
