import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const HistoricalStockDataShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="close" source="close" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="date" source="date" />
        <TextField label="high" source="high" />
        <TextField label="ID" source="id" />
        <TextField label="low" source="low" />
        <TextField label="open" source="open" />
        <TextField label="symbol" source="symbolField" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="volume" source="volume" />
      </SimpleShowLayout>
    </Show>
  );
};
