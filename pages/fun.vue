<template>
   <div class="conteinerHome">
        <div class="navbarclass" >
            <Barranav/>
        </div>
        <div class="exibir">
            <exibirfunc/>
        </div>
        <exit-app/>
   </div>
</template>



<script>

import Cookies from 'js-cookie'
import exibirfunc from '~/components/exibirfunc.vue'
export default {
  components: { exibirfunc },
    name:'fun',
    mounted(){
        let cookie;
        cookie = Cookies.get('tkn')
        if(cookie == undefined){
            return this.$router.push('/')
        }
    }

    
}
</script>



<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
*{
    padding: 0;
    margin: 0;
}
body{
    background: #242424;
}
.conteinerHome{
    display: flex;
    align-items: center;
    flex-direction: column;
}
.navbarclass{
    margin-top: 25px;
}
.exibir{
    width: 80%;
}
@media (max-width: 900px){
    .exibir{
    width: 90%;
}
}

</style>