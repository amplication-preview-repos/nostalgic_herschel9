import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const HistoricalStockDataCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="close" source="close" />
        <DateTimeInput label="date" source="date" />
        <NumberInput label="high" source="high" />
        <NumberInput label="low" source="low" />
        <NumberInput label="open" source="open" />
        <TextInput label="symbol" source="symbolField" />
        <NumberInput step={1} label="volume" source="volume" />
      </SimpleForm>
    </Create>
  );
};
