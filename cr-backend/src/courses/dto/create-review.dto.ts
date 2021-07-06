import { ObjectID } from "mongodb";

export class CreateReviewDto {
    comment: string;
    score: number;
    courseID?: ObjectID;
}