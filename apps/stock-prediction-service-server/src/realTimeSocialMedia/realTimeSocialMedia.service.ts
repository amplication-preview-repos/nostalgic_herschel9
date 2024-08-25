import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RealTimeSocialMediaServiceBase } from "./base/realTimeSocialMedia.service.base";

@Injectable()
export class RealTimeSocialMediaService extends RealTimeSocialMediaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
