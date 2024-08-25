import * as graphql from "@nestjs/graphql";
import { HistoricalStockDataResolverBase } from "./base/historicalStockData.resolver.base";
import { HistoricalStockData } from "./base/HistoricalStockData";
import { HistoricalStockDataService } from "./historicalStockData.service";

@graphql.Resolver(() => HistoricalStockData)
export class HistoricalStockDataResolver extends HistoricalStockDataResolverBase {
  constructor(protected readonly service: HistoricalStockDataService) {
    super(service);
  }
}
