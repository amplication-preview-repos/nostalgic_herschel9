import * as graphql from "@nestjs/graphql";
import { StockSymbolInput } from "./StockSymbolInput";
import { StockPredictionOutput } from "./StockPredictionOutput";
import { PredictionService } from "./prediction.service";

export class PredictionResolver {
  constructor(protected readonly service: PredictionService) {}

  @graphql.Mutation(() => StockPredictionOutput)
  async PredictStockPrice(
    @graphql.Args()
    args: StockSymbolInput
  ): Promise<StockPredictionOutput> {
    return this.service.PredictStockPrice(args);
  }
}
