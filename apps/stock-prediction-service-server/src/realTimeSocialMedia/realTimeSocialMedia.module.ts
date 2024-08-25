import { Module } from "@nestjs/common";
import { RealTimeSocialMediaModuleBase } from "./base/realTimeSocialMedia.module.base";
import { RealTimeSocialMediaService } from "./realTimeSocialMedia.service";
import { RealTimeSocialMediaController } from "./realTimeSocialMedia.controller";
import { RealTimeSocialMediaResolver } from "./realTimeSocialMedia.resolver";

@Module({
  imports: [RealTimeSocialMediaModuleBase],
  controllers: [RealTimeSocialMediaController],
  providers: [RealTimeSocialMediaService, RealTimeSocialMediaResolver],
  exports: [RealTimeSocialMediaService],
})
export class RealTimeSocialMediaModule {}
