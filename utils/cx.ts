// generate classnames function that joins array of strings together and undefined values are ignored
export const cx = (...args: any[]) => {
  return args.filter(Boolean).join(" ")
}
