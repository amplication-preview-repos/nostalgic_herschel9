import { Injectable } from "@nestjs/common";
import { StockSymbolInput } from "./StockSymbolInput";
import { StockPredictionOutput } from "./StockPredictionOutput";

@Injectable()
export class PredictionService {
  constructor() {}
  async PredictStockPrice(args: StockSymbolInput): Promise<StockPredictionOutput> {
    throw new Error("Not implemented");
  }
}
