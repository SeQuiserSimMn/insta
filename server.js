    // Importa o framework Express.js para criar aplicações web
    import express from "express";
    import routes from "./src/routes/postsRoutes.js";

    // Cria uma instância de uma aplicação Express
    const app = express();
    app.use(express.static("uploads"))
    routes(app)
    // Inicia o servidor, ouvindo por requisições na porta 3000
    app.listen(3000, () => {
    console.log("servidor pronto.");
    });

