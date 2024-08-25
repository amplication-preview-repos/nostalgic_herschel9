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
import { RealTimeSocialMediaWhereUniqueInput } from "./RealTimeSocialMediaWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { RealTimeSocialMediaUpdateInput } from "./RealTimeSocialMediaUpdateInput";

@ArgsType()
class UpdateRealTimeSocialMediaArgs {
  @ApiProperty({
    required: true,
    type: () => RealTimeSocialMediaWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => RealTimeSocialMediaWhereUniqueInput)
  @Field(() => RealTimeSocialMediaWhereUniqueInput, { nullable: false })
  where!: RealTimeSocialMediaWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => RealTimeSocialMediaUpdateInput,
  })
  @ValidateNested()
  @Type(() => RealTimeSocialMediaUpdateInput)
  @Field(() => RealTimeSocialMediaUpdateInput, { nullable: false })
  data!: RealTimeSocialMediaUpdateInput;
}

export { UpdateRealTimeSocialMediaArgs as UpdateRealTimeSocialMediaArgs };
