import express, {Request, Response} from "../.";
import {Todo, Todos} from "../models/Todo";
import {plainToClass} from "class-transformer";
import {validate, ValidationError} from "class-validator";
import validationMiddleware from "../middleware/validation.middleware";

export const todoRouter = express.Router();

/**
 * @swagger
 * tags:
 *  name: Todos
 *  description: Todo Management Tool
 */

const todos: Todos = {
    "1": {
        "title": "TODO 1",
        "description": "DO Stuff",
    },
    "2": {
        "title": "TODO 2",
        "description": "DO Stuff",
    },
    "3": {
        "title": "TODO 3",
        "description": "DO Stuff",
    }

};

/**
 * @swagger
 * path:
 *  /todos:
 *      get:
 *        summary: Get all Todos
 *        tags: [Todos]
 *        responses:
 *            "200":
 *              description: List of all Todos
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Todo'
 */
todoRouter.get('/', (req: Request, res: Response) => {
    res.send(todos);
});

/**
 * @swagger
 * path:
 *  /todos/{id}:
 *      get:
 *        summary: Get a single Todo by ID
 *        parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
 *            required: true
 *            description: Numeric ID of the TODO to get
 *        tags: [Todos]
 *        responses:
 *            "200":
 *              description: List of all Todos
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Todo'
 */
todoRouter.get('/:id', (req: Request, res: Response) => {
    const id: string = req.params.id;
    if (id in todos) {
        res.send(todos[id]);
    } else {
        return res.status(404).send("Invalid ID");
    }
});

todoRouter.post("/", validationMiddleware(Todo), (req: Request, res: Response) => {
    const id: string = "4"
    todos[id] = req.body;
    res.status(201).send("Created with id 4");
});

todoRouter.put("/:id", (req: Request, res: Response) => {
    res.status(500).send("Route Not Built");

});

todoRouter.delete("/:id", (req: Request, res: Response) => {
    res.status(500).send("Route Not Built");
});
