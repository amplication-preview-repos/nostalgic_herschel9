import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type RealTimeNewsWhereInput = {
  content?: StringNullableFilter;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  sentiment?: "Option1";
  source?: StringNullableFilter;
  symbolField?: StringNullableFilter;
  title?: StringNullableFilter;
};
