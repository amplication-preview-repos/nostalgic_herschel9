import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { PredictionService } from "./prediction.service";
import { StockSymbolInput } from "./StockSymbolInput";
import { StockPredictionOutput } from "./StockPredictionOutput";

@swagger.ApiTags("predictions")
@common.Controller("predictions")
export class PredictionController {
  constructor(protected readonly service: PredictionService) {}

  @common.Post("/predict")
  @swagger.ApiOkResponse({
    type: StockPredictionOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async PredictStockPrice(
    @common.Body()
    body: StockSymbolInput
  ): Promise<StockPredictionOutput> {
        return this.service.PredictStockPrice(body);
      }
}
