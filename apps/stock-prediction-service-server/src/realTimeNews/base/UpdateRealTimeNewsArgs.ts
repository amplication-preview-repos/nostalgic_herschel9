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
import { RealTimeNewsWhereUniqueInput } from "./RealTimeNewsWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { RealTimeNewsUpdateInput } from "./RealTimeNewsUpdateInput";

@ArgsType()
class UpdateRealTimeNewsArgs {
  @ApiProperty({
    required: true,
    type: () => RealTimeNewsWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => RealTimeNewsWhereUniqueInput)
  @Field(() => RealTimeNewsWhereUniqueInput, { nullable: false })
  where!: RealTimeNewsWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => RealTimeNewsUpdateInput,
  })
  @ValidateNested()
  @Type(() => RealTimeNewsUpdateInput)
  @Field(() => RealTimeNewsUpdateInput, { nullable: false })
  data!: RealTimeNewsUpdateInput;
}

export { UpdateRealTimeNewsArgs as UpdateRealTimeNewsArgs };
