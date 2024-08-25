import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ObjectType("StockPredictionOutputObject")
class StockPredictionOutput {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    symbol!: string;

    @Field(() => [Number])
    @ApiProperty({
        required: true,
        type: () => [Number]
    })
    @Type(() => Number)
    predictedPrices!: number;
}

export { StockPredictionOutput as StockPredictionOutput };