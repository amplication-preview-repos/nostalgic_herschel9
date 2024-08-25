import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RealTimeNewsService } from "./realTimeNews.service";
import { RealTimeNewsControllerBase } from "./base/realTimeNews.controller.base";

@swagger.ApiTags("realTimeNews")
@common.Controller("realTimeNews")
export class RealTimeNewsController extends RealTimeNewsControllerBase {
  constructor(protected readonly service: RealTimeNewsService) {
    super(service);
  }
}
