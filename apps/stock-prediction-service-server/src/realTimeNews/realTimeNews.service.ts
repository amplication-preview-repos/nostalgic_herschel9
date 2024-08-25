import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RealTimeNewsServiceBase } from "./base/realTimeNews.service.base";

@Injectable()
export class RealTimeNewsService extends RealTimeNewsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
