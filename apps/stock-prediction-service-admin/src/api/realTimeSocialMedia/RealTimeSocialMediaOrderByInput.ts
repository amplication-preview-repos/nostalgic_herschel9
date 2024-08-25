import { SortOrder } from "../../util/SortOrder";

export type RealTimeSocialMediaOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  platform?: SortOrder;
  sentiment?: SortOrder;
  symbolField?: SortOrder;
  updatedAt?: SortOrder;
};
