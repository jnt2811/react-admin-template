import { InputNumber as AntInputNumber } from "antd";

export const InputNumber = ({ formatCurrency = false, ...props }) => {
  if (formatCurrency) {
    props.formatter = (value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    props.parser = (value) => value.replace(/\$\s?|(,*)/g, "");
  }

  return <AntInputNumber {...props} />;
};
