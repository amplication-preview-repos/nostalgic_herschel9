import * as graphql from "@nestjs/graphql";
import { RealTimeSocialMediaResolverBase } from "./base/realTimeSocialMedia.resolver.base";
import { RealTimeSocialMedia } from "./base/RealTimeSocialMedia";
import { RealTimeSocialMediaService } from "./realTimeSocialMedia.service";

@graphql.Resolver(() => RealTimeSocialMedia)
export class RealTimeSocialMediaResolver extends RealTimeSocialMediaResolverBase {
  constructor(protected readonly service: RealTimeSocialMediaService) {
    super(service);
  }
}
