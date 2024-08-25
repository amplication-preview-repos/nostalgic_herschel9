import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { HistoricalStockDataServiceBase } from "./base/historicalStockData.service.base";

@Injectable()
export class HistoricalStockDataService extends HistoricalStockDataServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
