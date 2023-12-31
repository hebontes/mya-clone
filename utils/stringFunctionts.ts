import moment from "moment"

export const convertNumberToEngine = (number: number) => {
  const result = (number / 1000).toFixed(1)
  return result
}

export const getGearType = (gear_type_id: number) => {
  switch (gear_type_id) {
    case 1:
      return "მექანიკა"
    case 2:
      return "ავტომატიკა"
    case 3:
      return "ტიპტრონიკი"
    case 4:
      return "ვარიატორი"
    default:
      return "ავტომატიკა"
  }
}

export const getFuelType = (fuel_type_id: number) => {
  switch (fuel_type_id) {
    case 2:
      return "ბენზინი"
    case 3:
      return "დიზელი"
    case 6:
      return "ჰიბრიდი"
    case 7:
      return "ელექტრო"
    case 8:
      return "ბუნებრივი გაზი"
    case 9:
      return "თხევადი გაზი"
    case 10:
      return "დატ. ჰიბრიდი"
    case 12:
      return "წყალბადი"
    default:
      return "ბენზინი"
  }
}

export const getLocation = (location_id: number) => {
  switch (location_id) {
    case 2:
      return "თბილისი"
    case 3:
      return "ქუთაისი"
    case 4:
      return "ბათუმი"
    case 7:
      return "ფოთი"
    case 15:
      return "რუსთავი"
    case 30:
      return "რუსთავის ავტო."
    case 23:
      return "გზაში საქ.-სკენ"
    case 59:
      return "მარნეული"
    default:
      return "საქართველო"
  }
}

export const getRecentlyDate = (date: string) => {
  const currentDate = moment()
  const diff = moment(date).diff(currentDate)
  const duration = moment.duration(diff)
  const minutes = Math.abs(duration.asMinutes())
  const hours = Math.abs(duration.asHours())
  const days = Math.abs(duration.asDays())
  const months = Math.abs(duration.asMonths())

  if (minutes < 60) {
    return `${Math.round(minutes)} წუთის წინ`
  }
  if (hours < 24) {
    return `${Math.round(hours)} საათის წინ`
  }
  if (days < 30) {
    return `${Math.round(days)} დღის წინ`
  }
  if (months < 12) {
    return `${Math.round(months)} თვის წინ`
  }
  return `${Math.round(months / 12)} წლის წინ`
}
