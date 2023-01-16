<template>
    <div class="conteinerFunc">
            <div class="divisao one">
                <div class="principal">
                    <label>NOME :<input type="text" v-model="nome"></label>
                    <label>CPF :<input type="number" v-model="cpf"></label>
                    <label>RG :<input type="number" v-model="rg"></label>
                </div>
                
            </div>
            <div class="divisao two">
                <button @click="cadastrarFunc()" class="green">CADASTRAR</button>
                <button @click="cancelar()" class="red">CANCELAR</button>
            </div>

            <div class="terceira">
                <div class="title">
                        <h3>DISCRIÇÃO</h3>
                </div> 
                <div class="descricao">
                    <div class="oneDiv">
                        <label>CARGO :<input type="text" v-model="cargo"></label>
                        <label>DATA DE INICIO :<input type="date" v-model="data"></label>
                        <label>NIS :<input type="number" v-model="nis"></label>
                    </div>
                    <div class="oneDiv">
                        <label>ENDEREÇO :<input type="text" v-model="endereco"></label>
                        <label>CIDADE :<input type="text" v-model="cidade"></label>
                        <label>SALARIO :<input type="number" v-model="salario"></label>
                    </div>
                </div>
                <div class="textFuncionario">
                   <label>Sobre o Funcionario :<textarea v-model="info"></textarea></label> 
                </div>
            </div>
    </div>
</template>


<script>
import Cookies from 'js-cookie';
import axios from 'axios';
export default {
    name:'edit',
    data(){
        return{
            TrabFun:{},
            idFunc:this.$route.params.id,
            nome:'',
            cpf:'',
            rg:'',
            cargo:'',
            data:'',
            nis:'',
            endereco:'',
            cidade:'', 
            salario:'',
            info:''
        }
    },methods:{
        cancelar(){
            this.$router.push('/home')
        },
        getCookie(name) {
            let cookie
            cookie = Cookies.get(name)
            return cookie;
        },
        cadastrarFunc(){
            let bodi = {
            nameFunc:this.nome.toLocaleUpperCase(),
            salarioFunc:this.salario,
            cpfFunc:this.cpf,
            rgFunc:this.rg,
            cargoFunc:this.cargo.toUpperCase(),
            dataInicioFunc:this.data,
            nisFunc:this.nis,
            endereçoFunc:this.endereco.toUpperCase(),
            cidadeFunc:this.cidade.toUpperCase(),
            textInfoFunc:this.info.toUpperCase()
        }
        axios.put('https://api-teste-lucas.onrender.com/fun/'+this.idFunc, bodi,{
        headers:{
            Authorization: 'Bearer '+ this.getCookie("tkn")}})
         .then((res)=>{
            if(res.status == 200){
                this.$router.push({ name: 'fun', params: { id: res.data.funcionario._id }})
            }
         })
         .catch(function (error) {
            console.error(error);
         });
        }
    },mounted(){
        axios.get('https://api-teste-lucas.onrender.com/fun/'+ this.idFunc,{
            headers:{ Authorization: 'Bearer '+ this.getCookie("tkn")}})
         .then((res)=>{
            this.nome = res.data.funcionarios.nameFunc;
            this.salario = res.data.funcionarios.salarioFunc;
            this.cpf = res.data.funcionarios.cpfFunc;
            this.rg = res.data.funcionarios.rgFunc;
            this.cargo = res.data.funcionarios.cargoFunc;
            this.data = res.data.funcionarios.dataInicioFunc;
            this.nis = res.data.funcionarios.nisFunc;
            this.endereco = res.data.funcionarios.endereçoFunc
            this.cidade = res.data.funcionarios.cidadeFunc;
            this.info = res.data.funcionarios.textInfoFunc;
         })
         .catch((e)=> console.log(e));
        }
    }
</script>


<style scoped>

.conteinerFunc{
    margin-top: 25px;
    border-radius: 20px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    background:#007094;
    min-height: 75vh;
}
input{
    border-radius: 20px;
    border: none;
    margin: 5px;
    height: 25px;
    text-align: center;
}
.one{
    margin-left: 20px;
    margin-top: 20px;
    width: 60%;
    color: white;
    display: flex;
    font-family: 'Poppins';
}
.principal{
    display: flex;
    flex-direction: column;
}
.principal label{
    padding: 10px 0 10px 0;
}
.principal label input{
    width: 200px;
}
.two{
    width: 29%;
    justify-content: flex-end;    
}
.two button{
    height:30px;
    width: 130px;
    border-radius:20px;
    border: none;
    color: white;
    margin-top: 25px;
    font-family: 'Poppins';
    cursor: pointer;
}
.two .red{
    background: #8E0A0A;
    margin-right: 30px;
}
.two .green{
    background: #00821D;
    margin-right: 30px;
}
.terceira{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    flex-direction: column;
    justify-content: space-around;
    font-family: 'Poppins';
    color: white;
}
.title{
    text-align: center;
}
.descricao{ 
    display: flex;
    font-size: 17px;
    align-items: center;
    justify-content: center;
}
.oneDiv{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
}
.textFuncionario{
    height: 35%;
    width: 85%;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
}
.textFuncionario p {
    color: black;
    text-align: left;
    margin: 10px;
}
textarea{
    height: 70%;
    width: 100%;
    border-radius: 20px;
    font-family: "Poppins";
    font-size: 16px;
    text-align: center;
}
@media (max-width: 900px) {
    .conteinerFunc{
        height: 100vh;
    }
    .one {
        font-size: 14px;
    }
    .one h3,p{
        margin-left: 10px;
    }
    .title{
        font-size: 15px;
    }
    .descricao{
        font-size: 15px;
    }
    .terceira{
        flex-direction: column;
    }
}
</style>