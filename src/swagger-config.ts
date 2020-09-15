export default {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: "TODOTSt",
            version: "1.0.0",
            description:
                "An example TODO project in Typescript and Express",
            license: {
                name: "MIT",
                url: "https://choosealicense.com/licenses/mit/"
            },
            contact: {
                name: "JD McCormack",
                url: "https://jdmccormack.com",
                email: "me@jdmccormack.com"
            }
        },
        servers: [
            {
                url: "http://localhost:3000/"
            }
        ]
    },
    apis: ["./src/models/Todo.ts", "./src/routes/todos.ts"]
};