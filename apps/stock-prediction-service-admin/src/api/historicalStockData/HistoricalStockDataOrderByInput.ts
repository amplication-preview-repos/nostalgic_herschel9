import { SortOrder } from "../../util/SortOrder";

export type HistoricalStockDataOrderByInput = {
  close?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  high?: SortOrder;
  id?: SortOrder;
  low?: SortOrder;
  open?: SortOrder;
  symbolField?: SortOrder;
  updatedAt?: SortOrder;
  volume?: SortOrder;
};
