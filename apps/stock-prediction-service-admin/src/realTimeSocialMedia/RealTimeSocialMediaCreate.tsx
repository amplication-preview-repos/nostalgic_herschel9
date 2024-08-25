import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  SelectInput,
} from "react-admin";

export const RealTimeSocialMediaCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <DateTimeInput label="date" source="date" />
        <TextInput label="platform" source="platform" />
        <SelectInput
          source="sentiment"
          label="sentiment"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="symbol" source="symbolField" />
      </SimpleForm>
    </Create>
  );
};
