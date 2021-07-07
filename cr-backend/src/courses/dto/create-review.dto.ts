import { ObjectID } from "mongodb";
import { IsInt, IsNotEmpty } from "class-validator";

export class CreateReviewDto {
    @IsNotEmpty()
    comment: string;

    @IsInt()
    score: number;

    courseID?: ObjectID;
}