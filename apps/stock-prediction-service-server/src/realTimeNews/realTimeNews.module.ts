import { Module } from "@nestjs/common";
import { RealTimeNewsModuleBase } from "./base/realTimeNews.module.base";
import { RealTimeNewsService } from "./realTimeNews.service";
import { RealTimeNewsController } from "./realTimeNews.controller";
import { RealTimeNewsResolver } from "./realTimeNews.resolver";

@Module({
  imports: [RealTimeNewsModuleBase],
  controllers: [RealTimeNewsController],
  providers: [RealTimeNewsService, RealTimeNewsResolver],
  exports: [RealTimeNewsService],
})
export class RealTimeNewsModule {}
