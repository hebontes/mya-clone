export const convertNumberToEngine = (number: number) => {
  return number.toString().slice(0, 1) + "." + number.toString().slice(1, 2)
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
