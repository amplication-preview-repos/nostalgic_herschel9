import { RealTimeNews as TRealTimeNews } from "../api/realTimeNews/RealTimeNews";

export const REALTIMENEWS_TITLE_FIELD = "title";

export const RealTimeNewsTitle = (record: TRealTimeNews): string => {
  return record.title?.toString() || String(record.id);
};
