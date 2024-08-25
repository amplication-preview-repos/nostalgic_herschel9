import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RealTimeSocialMediaService } from "./realTimeSocialMedia.service";
import { RealTimeSocialMediaControllerBase } from "./base/realTimeSocialMedia.controller.base";

@swagger.ApiTags("realTimeSocialMedias")
@common.Controller("realTimeSocialMedias")
export class RealTimeSocialMediaController extends RealTimeSocialMediaControllerBase {
  constructor(protected readonly service: RealTimeSocialMediaService) {
    super(service);
  }
}
