import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  SelectInput,
} from "react-admin";

export const RealTimeNewsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <DateTimeInput label="date" source="date" />
        <SelectInput
          source="sentiment"
          label="sentiment"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="source" source="source" />
        <TextInput label="symbol" source="symbolField" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
