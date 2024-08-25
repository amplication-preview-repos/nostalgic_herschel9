import { RealTimeSocialMediaWhereInput } from "./RealTimeSocialMediaWhereInput";
import { RealTimeSocialMediaOrderByInput } from "./RealTimeSocialMediaOrderByInput";

export type RealTimeSocialMediaFindManyArgs = {
  where?: RealTimeSocialMediaWhereInput;
  orderBy?: Array<RealTimeSocialMediaOrderByInput>;
  skip?: number;
  take?: number;
};
