import dotenv from "dotenv";
import fs from "fs";

dotenv.config();




const abrirFicheiro:any = () => {
    const jsonData:any = fs.readFileSync(process.env.DATABASE_URL + '')
    //console.log( JSON.parse(jsonData)['1465']['username'] )
    return JSON.parse(jsonData) 
}

const gravarDados = (dados:any) => {
    const stringifyData:any = JSON.stringify(dados)
    fs.writeFileSync(process.env.DATABASE_URL + '', stringifyData)
}

export const inserirDados:any = (req:any, res:any) => {


    const contas = abrirFicheiro();

    const id = Math.floor(10000 + Math.random() * 9999);    
    
    const user = {
        id:id,
        dados:req.body
    }

    contas['user'][contas['user'].length] = user; 

    gravarDados( contas );


    return res.json("inserido com sucesso");

}

export const lerDados:any = (_:any,res:any) => {

    
    const contas:any = abrirFicheiro();

    if(!contas){
        return res.json("Sem usuarios");
    }

    return res.json(contas)
}

export const atualizarDados:any = (req:any,res:any) => {
    const conta = abrirFicheiro();

    fs.readFile(process.env.DATABASE_URL + '', 'utf8', (err:any, data:any):any => {
        const id = req.params['id'];
        
       
        conta['user'].map((data:any,i:any) => {
            if(data['id'] == id){
                const user = {
                    id:id,
                    dados:req.body
                }
                conta['user'][i] = user
            }
        })

        gravarDados(conta);
        res.json({msg:"Sucesso"})
      });

}


export const apagarDados:any = (req:any,res:any) => {
    fs.readFile(process.env.DATABASE_URL + '', 'utf8', (err:any, data:any) => {
        var conta = abrirFicheiro()
        const id = req.params['id'];
        
        conta['user'].map((data:any,i:any) => {
            if(data['id'] == id){
                conta['user'].splice(i,1);
            }
        })

        gravarDados(conta);
        res.json(`${id} apagado com sucesso`)
      });
}


export const lerUsuario:any = (req:any,res:any) => {
    const conta = abrirFicheiro();
    let user:any = [];
    conta['user'].map((data:any) => {
        if(req.params['id'] == data['id']){
            user = data;
        }
    })

    return res.json(user);
}