import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const HistoricalStockDataEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="close" source="close" />
        <DateTimeInput label="date" source="date" />
        <NumberInput label="high" source="high" />
        <NumberInput label="low" source="low" />
        <NumberInput label="open" source="open" />
        <TextInput label="symbol" source="symbolField" />
        <NumberInput step={1} label="volume" source="volume" />
      </SimpleForm>
    </Edit>
  );
};
