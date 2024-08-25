import { HistoricalStockDataWhereInput } from "./HistoricalStockDataWhereInput";
import { HistoricalStockDataOrderByInput } from "./HistoricalStockDataOrderByInput";

export type HistoricalStockDataFindManyArgs = {
  where?: HistoricalStockDataWhereInput;
  orderBy?: Array<HistoricalStockDataOrderByInput>;
  skip?: number;
  take?: number;
};
