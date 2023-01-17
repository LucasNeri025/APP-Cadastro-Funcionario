<template>
    <div class="conteiner"> 
        <div class="tabela">
            <div class="cabeçalho">
                <ul>
                    <li>NOME FUNCIONARIOS</li>
                    <LI>CARGO</LI>
                    <li class="disable">SALARIO</li>
                    <li class="disable">CPF</li>
                    <li class="disable">RG</li>
                </ul>
            </div>
             <div v-for="(funcio, index) in funcionariosDele" :key="index" class="listafunc blue">
                <nuxt-link class="nuxt" :to="{ name: 'fun', params: { id: funcio._id }}"> 
                    <ul>
                        <li v-text="funcio.nameFunc"></li>
                        <li v-text="funcio.cargoFunc"></li>
                        <li class="disable" v-text="funcio.salarioFunc"></li>
                        <li class="disable" v-text="funcio.cpfFunc"></li>
                        <li class="disable" v-text="funcio.rgFunc"></li>
                    </ul>
                </nuxt-link>
            </div>           
        </div>
    </div>
</template>

<script>
import axios from "axios";
import Cookies from 'js-cookie'
export default {
    name:'listfucionario',
    data(){
        return{
            funcionariosDele:{},
        }
    },
    methods:{
        getCookie(name) {
            let cookie
            cookie = Cookies.get(name)
            return cookie;
        }
    },
    mounted(){
        axios.get('https://api-teste-lucas.onrender.com/fun',{
            headers:{
            Authorization: 'Bearer '+ this.getCookie("tkn")}})
        .then((response)=>{
            this.funcionariosDele = response.data.funcionarios
        })
        .catch((e)=> console.log(e));
        }
}
</script>


<style scoped>
/*                 ESTILO CONTEINER COMPONENTE                              */
.conteiner{
    width: 80vw;
}
.tabela{
    width: 100%;
}
/*                 ESTILO CABEÇALHO TABELA                             */
.cabeçalho{
    background: white;
    height: 80px;
    border-radius: 20px;
}
.cabeçalho ul{
    display: flex;
    list-style: none;
    justify-content: space-evenly;
    transform: translateY(100%);
}
.cabeçalho ul li {
    font-family: 'Poppins', sans-serif;
}

/*                 ESTILO TABELA FUNCIONARIO                              */
.listafunc{
    height: 80px;
    border-radius: 20px;
    margin-top:8px;
}
.nuxt{
    list-style: none;
    text-decoration: none;
}
.nuxt ul {
    display: flex;
    list-style: none;
    justify-content: space-evenly;
    transform: translateY(100%);
}
.nuxt ul li {
    font-family: 'Poppins', sans-serif;
    color: white;
}

/*                 Color lista funcionario                              */
.white{
    background: white;
}
.blue{
    background: #007094;
}

/*                 MideaQuery                              */

@media (max-width: 900px) {
    .conteiner{
        width: 90vw;
    }
    .disable{
        display: none;
    }
}
</style>