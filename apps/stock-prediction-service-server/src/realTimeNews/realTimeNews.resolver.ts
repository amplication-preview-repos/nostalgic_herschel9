import * as graphql from "@nestjs/graphql";
import { RealTimeNewsResolverBase } from "./base/realTimeNews.resolver.base";
import { RealTimeNews } from "./base/RealTimeNews";
import { RealTimeNewsService } from "./realTimeNews.service";

@graphql.Resolver(() => RealTimeNews)
export class RealTimeNewsResolver extends RealTimeNewsResolverBase {
  constructor(protected readonly service: RealTimeNewsService) {
    super(service);
  }
}
