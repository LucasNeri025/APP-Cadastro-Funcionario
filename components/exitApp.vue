<template>
    <div @click="exit" class="conteiner">
        <p>SAIR DO APP</p>
    </div>
</template>



<script>
import Cookies from 'js-cookie'
export default {
    name:'exitApp',
    methods:{
        exit(){
            Cookies.remove('tkn');
            this.$router.push('/')
        }
    }  
}
</script>


<style scoped>
.conteiner{
    position: fixed;
    height: 55px;
    width: 55px;
    background: #6e6e6e;
    color: white;
    border-radius: 20px;
    bottom: 10px;
    right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
p{
    font-family: 'Poppins';
    font-size: 12px;
    text-align: center;
}
</style>