import { Entity , Column , ObjectIdColumn } from "typeorm";
import { ObjectID , ObjectId } from "mongodb";

@Entity()
export class Review {
    @ObjectIdColumn()
    id?: ObjectID;

    @Column()
    comment: string;

    @Column()
    score: number;

    @Column()
    courseID: ObjectID;
}

export default Review;