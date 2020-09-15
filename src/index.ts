import express from ".";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

import { todoRouter } from "./routes/todos";
import errorMiddleware from "./middleware/error.middleware";
import options from "./swagger-config";
import logger from "./middleware/logging.middleware";

const app = express();
app.use(helmet());
app.use(morgan('dev'));
app.use(cors())
app.use(express.json());

app.use("/todos", todoRouter);
app.use(errorMiddleware)

const specs = swaggerJsdoc(options);
app.use("/docs", swaggerUi.serve);
app.get("/docs", swaggerUi.setup(specs, {
    explorer: true
}));

const port = 3000;

app.get("/", (req, res) => {
    logger.log({
        level: 'warn',
        message: 'hello nurse!'
    });
    logger.log('info', 'Pass a message and this works', {
        additional: 'properties',
        are: 'passed along'
    });
    res.send("Hello world!");
})

app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
})