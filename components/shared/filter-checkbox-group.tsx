import FilterCheckbox, {
  Props as Item,
} from "@/components/shared/filter-checkbox";

interface Props {
  title: string;
  items: Item[];
  className?: string;
  onChange?: (values: string[]) => void;
}

export default function FilterCheckboxGroup({ className, ...props }: Props) {
  const checkboxes = props.items.map((item, index) => (
    <li key={index} className="flex flex-col gap-2">
      <FilterCheckbox
        text={item.text}
        checked={item.checked}
        value={item.value}
        endAdornment={item.endAdornment}
        onCheckedChange={item.onCheckedChange}
      />
    </li>
  ));
  return (
    <div className={className}>
      <b>{props.title}</b>
      <ul>{checkboxes}</ul>
    </div>
  );
}
