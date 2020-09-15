import {IsString, Length} from "class-validator";

/**
 * @swagger
 * components:
 *  schemas:
 *      Todo:
 *          type: object
 *          required:
 *              - title
 *              - description
 *          properties:
 *              title:
 *                  type: string
 *                  description: The heading of the todo.
 *              description:
 *                  type: string
 *                  description: Additional details about the todo.
 *          example:
 *              title: Get Groceries
 *              description: I need to go to the store to get groceries.
 */
export class Todo {
    @IsString()
    title: string;
    @IsString()
    @Length(1, 256)
    description: string;

    constructor(title: string, description: string) {
        this.title = title;
        this.description = description;
    }
}

export interface Todos {
    [key: string]: Todo
}