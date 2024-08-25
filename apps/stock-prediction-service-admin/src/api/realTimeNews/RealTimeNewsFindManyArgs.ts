import { RealTimeNewsWhereInput } from "./RealTimeNewsWhereInput";
import { RealTimeNewsOrderByInput } from "./RealTimeNewsOrderByInput";

export type RealTimeNewsFindManyArgs = {
  where?: RealTimeNewsWhereInput;
  orderBy?: Array<RealTimeNewsOrderByInput>;
  skip?: number;
  take?: number;
};
