import { RealTimeSocialMedia as TRealTimeSocialMedia } from "../api/realTimeSocialMedia/RealTimeSocialMedia";

export const REALTIMESOCIALMEDIA_TITLE_FIELD = "platform";

export const RealTimeSocialMediaTitle = (
  record: TRealTimeSocialMedia
): string => {
  return record.platform?.toString() || String(record.id);
};
