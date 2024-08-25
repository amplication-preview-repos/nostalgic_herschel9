import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type HistoricalStockDataWhereInput = {
  close?: FloatNullableFilter;
  date?: DateTimeNullableFilter;
  high?: FloatNullableFilter;
  id?: StringFilter;
  low?: FloatNullableFilter;
  open?: FloatNullableFilter;
  symbolField?: StringNullableFilter;
  volume?: IntNullableFilter;
};
