<template>
    <div class="conteiner center">
        <div class="divText">
            <h4>DESEJA REALMENTE DELETAR O FUNCIONARIO ?</h4>
        </div>
        <div class="divBtn">
            <button @click="deleteok()">SIM</button>
            <button @click="$emit('fecharModal')">NAO</button>
        </div>
    </div>
</template>

<script>
import Cookies from 'js-cookie';
import axios from "axios";
export default {
    name:'modalDelete',
    emits:['fecharModal'],
    data(){
        return{
            idFunc:this.$route.params.id
        }
    },methods:{
        deleteok(){

            axios.delete('https://api-teste-lucas.onrender.com/fun/'+this.idFunc,{
            headers:{
            Authorization: 'Bearer '+ this.getCookie("tkn")}})
            .then((res)=>{
             if(res.status == 200) return this.$router.push('home')
            })
            .catch((e)=> console.log(e));
        },
        getCookie(name) {
            let cookie
            cookie = Cookies.get(name)
            return cookie;
        }
    }
}
</script>

<style scoped>

.center {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 250px;
  height: 250px;
  transform: translate(-50%, -50%);
  background: #242424;
  border-radius: 20px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  animation: entrada .8s;
}
.center h4{
    font-family: 'Poppins';
    color: white;
}
.center button {
    margin-top: 10%;
    border: none;
    width: 70px;
    height: 40px;
    font-family: 'Poppins';
    color: rgb(0, 0, 0);
    border-radius: 20px;
    background: rgb(255, 255, 255);
    
}
@keyframes entrada{
    to{
        opacity: 1;
    }
    from{
        top: 0px;        
        opacity: 0;
    }
}
</style>