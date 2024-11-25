    import express from "express";
    import multer from "multer";
    import cors from "cors";
    import { listarPosts, postarNovopost, uploadImagem, atualizarNovoPost} from "../controllers/PostsControllers.js"
   
    const corsOptions = {
      origin: "http://localhost:8000",
      OptionsSucessStatus: 200
    }

    const storage = multer.diskStorage({
      destination: function (req, file, cb) {
          cb(null, 'uploads/');
      },
      filename: function (req, file, cb) {
          cb(null, file.originalname);
      }
  })
  
  const upload = multer({ dest: "./uploads" , storage})
    const routes = (app) => {
      app.use(cors(corsOptions))

        // Configura a aplicação para analisar dados JSON em corpos de requisições
      app.use(express.json());

      app.get("/posts", listarPosts);
      app.post("/posts", postarNovopost)
      app.post("/upload", upload.single("imagem"), uploadImagem)
      app.put("/upload/:id",atualizarNovoPost)
    };

      // Define uma rota para lidar com requisições GET para a URL "/posts"
    

      export default routes;