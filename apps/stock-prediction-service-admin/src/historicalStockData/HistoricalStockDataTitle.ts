import { HistoricalStockData as THistoricalStockData } from "../api/historicalStockData/HistoricalStockData";

export const HISTORICALSTOCKDATA_TITLE_FIELD = "symbolField";

export const HistoricalStockDataTitle = (
  record: THistoricalStockData
): string => {
  return record.symbolField?.toString() || String(record.id);
};
