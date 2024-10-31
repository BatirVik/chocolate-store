export interface Option {
  label: string;
  value: string;
}

export interface SortData {
  options: Option[];
  defaultOptionIndex: number;
}

export enum SortOption {
  NEW_TO_OLD,
  OLD_TO_NEW,
  LOW_TO_HIGH,
  HIGH_TO_LOW,
}

export interface ProductData {
  priceCents: number;
  name: string;
  description: string | null;
}
export type CheckboxData = Option;

export interface FilterData {
  priceFrom?: number;
  priceTo?: number;
  checkboxGroups: { [groupName: string]: CheckboxData[] };
}
