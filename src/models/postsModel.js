    import 'dotenv/config';   
     // Importa a função para conectar ao banco de dados (provavelmente definida em dbConfig.js)
    import conectarAoBanco from "../config/dbConfig.js";
    import { ObjectId } from "mongodb";
    // Estabelece uma conexão com o banco de dados usando a função importada
    // e a string de conexão obtida da variável de ambiente
    const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);


// Função assíncrona para buscar todos os posts do banco de dados
    export async function getTodosPosts() {
    // Obtém o banco de dados "bck" da conexão
    const db = conexao.db("bck");
    // Obtém a coleção "posts" dentro do banco de dados
    const colecao = db.collection("posts");
    // Executa uma consulta para encontrar todos os documentos na coleção e retorna um array com os resultados
    return colecao.find().toArray();
  }

  export async function criarPost(novoPost) {
    const db = conexao.db("bck");
    const colecao = db.collection("posts");
    return colecao.insertOne(novoPost)
  }

  export async function atualizarPost(id, novoPost) {
    const db = conexao.db("bck");
    const colecao = db.collection("posts");
    const objID = ObjectId.createFromHexString(id)
    return colecao.updateOne({_id: new ObjectId(objID)}, {$set:novoPost})
  }
 