/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { HistoricalStockDataWhereUniqueInput } from "./HistoricalStockDataWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { HistoricalStockDataUpdateInput } from "./HistoricalStockDataUpdateInput";

@ArgsType()
class UpdateHistoricalStockDataArgs {
  @ApiProperty({
    required: true,
    type: () => HistoricalStockDataWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => HistoricalStockDataWhereUniqueInput)
  @Field(() => HistoricalStockDataWhereUniqueInput, { nullable: false })
  where!: HistoricalStockDataWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => HistoricalStockDataUpdateInput,
  })
  @ValidateNested()
  @Type(() => HistoricalStockDataUpdateInput)
  @Field(() => HistoricalStockDataUpdateInput, { nullable: false })
  data!: HistoricalStockDataUpdateInput;
}

export { UpdateHistoricalStockDataArgs as UpdateHistoricalStockDataArgs };
