import express from "express"
import fs from "fs";
import * as path from 'path'


const app = express();
app.use(express.json());


const USERS_PATH = "./json/users.json";
const POSTS_PATH = "./json/posts.json";

app.listen(process.env.PORT || 5000, ()=>{
    console.log("API rodando.");
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});



async function readJson(path){
    try{
        let json = await JSON.parse(await fs.promises.readFile(path, () => {}));
        return json;
    }catch(err){
        return {status: "error", msg: "Erro ao carregar Json", err};
    }
};

if (process.env.NODE_ENV === 'production') {
    // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
    // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

//app.get("/", async (req, res) => {
//    
//    try{
//        
//        res.send("Aplicação rodando.");
//        res.end();
//
//    }catch(err){
//        res.send("Erro interno. ", err);
//    }
//});

app.get("/users", async (req, res) => {
    
    try{
        let users = await readJson(USERS_PATH);

        if(users != false) {
            res.send(users.users)
        }else{
            res.send("Nenhum usuário encontrado.");
        }
        
        res.end();

    }catch(err){
        res.send("Erro interno. ", err);
    }
});

app.get("/posts", async (req, res) => {
    
    try{
        let posts = await readJson(POSTS_PATH);

        if(posts != false) {
            posts = posts.posts.slice(0,20)
            res.send(posts)
        }else{
            res.send("Nenhum post encontrado.");
        }
        
        res.end();

    }catch(err){
        res.send("Erro interno. ", err);
    }
});

app.get("/posts/:id", async (req, res) => {
    
    try{
        let posts = await readJson(POSTS_PATH);

        let id = req.params.id;

        if(posts != false) {
            var filtered = posts.posts.filter(el => el.user.id == id);
            res.send(filtered)
        }else{
            res.send("Registro não encontrado.");
        }
        
        res.end();

    }catch(err){
        res.send("Erro interno. ", err);
    }
});
