export interface SelectOptions {
  label: string
  value: string
}

export const ForRentOptions: SelectOptions[] = [
  { label: "იყიდება", value: "0" },
  { label: "ქირავდება", value: "1" },
]
export const SortOrderOptions = [
  { label: "თარიღი კლებადი", value: "1" },
  { label: "თარიღი ზრდადი", value: "2" },
  { label: "ფასი კლებადი", value: "3" },
  { label: "ფასი ზრდადი", value: "4" },
  { label: "გარბენი კლებადი", value: "5" },
  { label: "გარბენი ზრდადი", value: "6" },
]

/*
1h, 2h, 3h, 1d, 2d, 3d, 1w, 2w, 3w
*/

export const PeriodOptions = [
  { label: "ბოლო 1 საათი", value: "1h" },
  { label: "ბოლო 2 საათი", value: "2h" },
  { label: "ბოლო 3 საათი", value: "3h" },
  { label: "ბოლო 1 დღე", value: "1d" },
  { label: "ბოლო 2 დღე", value: "2d" },
  { label: "ბოლო 3 დღე", value: "3d" },
  { label: "ბოლო 1 კვირა", value: "1w" },
  { label: "ბოლო 2 კვირა", value: "2w" },
  { label: "ბოლო 3 კვირა", value: "3w" },
]
