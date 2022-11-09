class No {
    constructor(dados){
        this.filhos = [];
        this.pai = null;
        this.dados = dados;
    }
}

class Arvore{
    constructor(){
        this.root = null;
    }

    adicionarFilho(dados){
        if(this.root == null){
            this.root = new No(dados);
        }else{
            this.root.pai = this.root;
            this.root.filhos.push(dados);
        }
    }

    mostrarTodos(){
        console.log(this.root);
    }

    apagarFilho(pos){
        
        if(this.root !=null) {
            this.root.filhos.splice(pos,1)
            return this.root;
        }else{
            console.log("error ao apagar")
        }
    }

    atualizarFilho(pos,dados){
        
        if(this.root != null){
            this.root.filhos[pos].dados = dados;
        }
    }
}




const arvore1 = new Arvore();

arvore1.adicionarFilho("Dispositivos");


const arvore2 = new Arvore();
arvore2.adicionarFilho("Laptops");
arvore2.adicionarFilho({marca:"DELL",preco:500});
arvore2.adicionarFilho({marca:"LENOVO",preco:250});
arvore2.adicionarFilho({marca:"HP",preco:200});
arvore1.adicionarFilho(arvore2);

const arvore3 = new Arvore();
arvore3.adicionarFilho("Celulares");
arvore3.adicionarFilho({marca:"Iphone",preco:1000});
arvore3.adicionarFilho({marca:"Samsung",preco:200});
arvore3.adicionarFilho({marca:"Tecno",preco:150});
arvore1.adicionarFilho(arvore3);

arvore1.atualizarFilho(1,"Cameras");

arvore1.mostrarTodos();
