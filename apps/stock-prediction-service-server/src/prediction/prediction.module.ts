import { Module } from "@nestjs/common";
import { PredictionService } from "./prediction.service";
import { PredictionController } from "./prediction.controller";
import { PredictionResolver } from "./prediction.resolver";

@Module({
  controllers: [PredictionController],
  providers: [PredictionService, PredictionResolver],
  exports: [PredictionService],
})
export class PredictionModule {}
