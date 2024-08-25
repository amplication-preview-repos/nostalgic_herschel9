import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { HistoricalStockDataController } from "../historicalStockData.controller";
import { HistoricalStockDataService } from "../historicalStockData.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  close: 42.42,
  createdAt: new Date(),
  date: new Date(),
  high: 42.42,
  id: "exampleId",
  low: 42.42,
  open: 42.42,
  symbolField: "exampleSymbolField",
  updatedAt: new Date(),
  volume: 42,
};
const CREATE_RESULT = {
  close: 42.42,
  createdAt: new Date(),
  date: new Date(),
  high: 42.42,
  id: "exampleId",
  low: 42.42,
  open: 42.42,
  symbolField: "exampleSymbolField",
  updatedAt: new Date(),
  volume: 42,
};
const FIND_MANY_RESULT = [
  {
    close: 42.42,
    createdAt: new Date(),
    date: new Date(),
    high: 42.42,
    id: "exampleId",
    low: 42.42,
    open: 42.42,
    symbolField: "exampleSymbolField",
    updatedAt: new Date(),
    volume: 42,
  },
];
const FIND_ONE_RESULT = {
  close: 42.42,
  createdAt: new Date(),
  date: new Date(),
  high: 42.42,
  id: "exampleId",
  low: 42.42,
  open: 42.42,
  symbolField: "exampleSymbolField",
  updatedAt: new Date(),
  volume: 42,
};

const service = {
  createHistoricalStockData() {
    return CREATE_RESULT;
  },
  historicalStockDataItems: () => FIND_MANY_RESULT,
  historicalStockData: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("HistoricalStockData", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: HistoricalStockDataService,
          useValue: service,
        },
      ],
      controllers: [HistoricalStockDataController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /historicalStockData", async () => {
    await request(app.getHttpServer())
      .post("/historicalStockData")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        date: CREATE_RESULT.date.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /historicalStockData", async () => {
    await request(app.getHttpServer())
      .get("/historicalStockData")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          date: FIND_MANY_RESULT[0].date.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /historicalStockData/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/historicalStockData"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /historicalStockData/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/historicalStockData"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        date: FIND_ONE_RESULT.date.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /historicalStockData existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/historicalStockData")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        date: CREATE_RESULT.date.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/historicalStockData")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
