interface SchemaOption {
    name: string;
    value: number
    label: string;
    children?: React.Component;
  }
  
export interface OptionTabsProps {
    options: Array<SchemaOption>;
}