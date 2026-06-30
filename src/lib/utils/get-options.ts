import type { OptionType } from "../../types/option-type";

const getOptions = (
  list: any[],
  label: string,
  value: string,
): OptionType[] => {
  return list.map((item) => ({
    label: String(item[label]),
    value: item[value],
  }));
};

export default getOptions;
