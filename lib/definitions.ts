export interface Option {
  label: string;
  value: string;
}

export interface SortData {
  options: Option[];
  defaultOptionIndex: number;
}

export interface ProductData {
  price: number;
  name: string;
  description: string;
}
export type CheckboxData = Option;

export interface FilterData {
  priceFrom?: number;
  priceTo?: number;
  checkboxGroups: { [groupName: string]: CheckboxData[] };
}
