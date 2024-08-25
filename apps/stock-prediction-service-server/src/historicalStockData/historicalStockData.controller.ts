import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { HistoricalStockDataService } from "./historicalStockData.service";
import { HistoricalStockDataControllerBase } from "./base/historicalStockData.controller.base";

@swagger.ApiTags("historicalStockData")
@common.Controller("historicalStockData")
export class HistoricalStockDataController extends HistoricalStockDataControllerBase {
  constructor(protected readonly service: HistoricalStockDataService) {
    super(service);
  }
}
