function countHours(year, holidays) {
    let hours = 0

    holidays.map(holiday => {
        let month = holiday.split('/')[0]-1
        let day = holiday.split('/')[1]
        let date = new Date(year, month, day).getDay()

        if (date != 0 & date != 6) {
            hours += 2
        }
    })

    return hours
}

console.log(countHours(2023, ['01/06', '04/01', '12/25']))