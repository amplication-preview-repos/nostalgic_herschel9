import { Module } from "@nestjs/common";
import { HistoricalStockDataModuleBase } from "./base/historicalStockData.module.base";
import { HistoricalStockDataService } from "./historicalStockData.service";
import { HistoricalStockDataController } from "./historicalStockData.controller";
import { HistoricalStockDataResolver } from "./historicalStockData.resolver";

@Module({
  imports: [HistoricalStockDataModuleBase],
  controllers: [HistoricalStockDataController],
  providers: [HistoricalStockDataService, HistoricalStockDataResolver],
  exports: [HistoricalStockDataService],
})
export class HistoricalStockDataModule {}
