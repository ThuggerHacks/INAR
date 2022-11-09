const express:any = require("express");
const fs:any = require("fs");

const app = express();
app.use(express.json())


//funcao para inserir dados
app.post("/criar",function(req:any,res:any){

    //abrir arquivo escolas.json
    const dados:any = fs.readFileSync("escolas.json");
    //converter os dados em json
    let escolas = JSON.parse(dados);
    //encontrar um id aleatorio
    let id = Math.floor(Math.random()*99999);
    //atribuir o id encontrado 
    escolas[id] = req.body;
    //escrever os dados no arquivo
    fs.writeFileSync("escolas.json",JSON.stringify(escolas));
    return res.json(escolas);

   
});

//funcao para mostrar
app.get("/ver",function(req:any,res:any){

    //abrir o ficheiro e ler os dados
    const dados:any = fs.readFileSync("escolas.json");
    //converter em json
    const escolas = JSON.parse(dados);
    //retornar a resposta
    return res.json(escolas)
})


//funcao para atualizar
app.put("/atualizar/:id",function(req:any,res:any){

    //pegar id do parametro da url
    const id = req.params.id;
    //abrir ficheiro escolas.json
    const dados:any = fs.readFileSync("escolas.json");
    //converter os dados em json
    const escolas = JSON.parse(dados);
    //procurar a escola com o id da url
    escolas[id] = req.body;
    //escrever os novos dados no arquivo
    fs.writeFileSync("escolas.json",JSON.stringify(escolas));

    //retornar os dados
    return res.json(escolas);


})

//funcao para apagar
app.delete("/apagar/:id",function(req:any,res:any){
    //pegar id do parametro da url
    const id = req.params.id;
    //ler o ficheiro escolas.json
    const dados:any = fs.readFileSync("escolas.json");
    //converter os dados em json
    const escolas = JSON.parse(dados);
    //apagar o dado com o id que foi passado via parametro
    delete escolas[id];
    //escrever os novos dados no arquivo escolas.json
    fs.writeFileSync("escolas.json",JSON.stringify(escolas));
     
    //retornar uma mensagem do sucesso
    return res.json({msg:"Apagado com sucesso"});
})


app.listen(5500, function(){
    console.log("Servidor conectado!");
});