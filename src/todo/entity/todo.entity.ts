import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export type todoState = "notStarted" | "expected" | "completed"

@Entity()
export class Todo extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: "varchar"})
    title: string

    @Column({
        type: "enum",
        enum: ["notStarted", "expected", "completed"],
        default: "notStarted"
    })
    state: todoState
}