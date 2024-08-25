import { SortOrder } from "../../util/SortOrder";

export type RealTimeNewsOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  sentiment?: SortOrder;
  source?: SortOrder;
  symbolField?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
