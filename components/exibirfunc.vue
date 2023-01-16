<template>
    <div class="conteinerFunc">
            <div class="divisao one">
                <div class="fotoFunc">
                     
                </div>
                <div>
                    <h3>{{TrabFun.nameFunc}}</h3>
                    <p>CPF: {{TrabFun.cpfFunc}}</p>
                    <p>RG: {{TrabFun.rgFunc}}</p>
                </div>
                
            </div>

            <div class="divisao two">
                <button @click="modificar" class="green">MODIFICAR</button>
                <button @click="modal == false ? modal=true : modal=false" class="red">DELETAR</button>
            </div>

            <div class="terceira">
                <div class="title">
                        <h3>DISCRIÇÃO</h3>
                </div> 
                <div class="descricao">
                    <div>
                        <p>CARGO: {{TrabFun.cargoFunc}}</p>
                        <p>DATA  DE INICIO : {{ TrabFun.dataInicioFunc }}</p>
                        <p>NUMERO NIS : {{TrabFun.nisFunc}}</p>
                    </div>
                    <div>
                        <p>ENDEREÇO: {{TrabFun.endereçoFunc}}</p>
                        <p>CIDADE: {{ TrabFun.cidadeFunc }}</p>
                        <p>SALARIO: {{ TrabFun.salarioFunc }} </p>
                    </div>
                </div>
                <div class="textFuncionario">
                    <textarea disabled v-model="TrabFun.textInfoFunc"></textarea>
                </div>
            </div>
            <ModalDelete @fecharModal="activeModal" v-show="modal"/>
        </div>
</template>


<script>
import modalDelete from '~/components/modalDelete.vue'
import Cookies from 'js-cookie'
import axios from "axios";
export default {
    name:'exibirfunc',
    components: { modalDelete },
    data(){
        return{
            TrabFun:{},
            idFunc:this.$route.params.id,
            modal:false,
        }
    },
    methods:{
        modificar(){
            this.$router.push({ name: 'editar', params: { id: this.TrabFun._id }})
        },
        activeModal(){
            this.modal == false ? this.modal=true : this.modal=false
        },
        getCookie(name) {
            let cookie
            cookie = Cookies.get(name)
            return cookie;
        }
    },
    mounted(){
        axios.get('https://api-teste-lucas.onrender.com/fun/'+ this.idFunc,{
            headers:{ Authorization: 'Bearer '+ this.getCookie("tkn")}})
         .then((response)=>{
            this.TrabFun = response.data.funcionarios
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
.divisao{
    display: flex;
    flex-wrap: wrap;
    width: 50%;
   
}
.fotoFunc{
    margin: 20px;
    width: 150px;
    height: 200px;
    background: white;
    border-radius: 20px;
    text-align: center;
    color: black !important;
}
.one{
    color: white;
    display: flex;
    font-family: 'Poppins';
}
.one h3 {
    margin-top: 40px;
    border: 1px;
}
.two{
    display: flex;
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
    max-height: 40vh;
    height: 40vh;
    justify-content: space-around;
    font-family: 'Poppins';
    color: white;
    position: relative;
}
.title{
    text-align: center;
}
.descricao{ 
    display: flex;
    justify-content: space-around ;
    font-size: 17px;
}
.textFuncionario{
    height: 35%;
    width: 85%;
    background: white;
    border-radius: 20px;
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
    height: 100%;
    width: 100%;
    border-radius: 20px;
    font-family: "Poppins";
    font-size: 16px;
    text-align: center;
}
@media (max-width: 900px) {
    .divisao{
        max-height: 100%;
    }
    .two{       
        width: 50%;
        display: block;
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
        flex-direction: column;
        
    }
}
</style>