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
      return "რუსთავის ავტ. ბაზრობა"
    case 23:
      return "გზაში საქ.-სკენ"
    default:
      return "საქართველო"
  }
}
