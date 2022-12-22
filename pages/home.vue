<template>
    <div class="conteinerHome">
       <div class="navbarclass">
           <barranav/>
       </div>
        <div class="listfuncionarioclass">
            <listfuncionario/>
        </div>
        <exit-app/>
    </div>
</template>


<script>
import Cookies from 'js-cookie'
import Barranav from '~/components/barranav.vue'
import listfuncionario from '~/components/listfuncionario.vue'
export default {
  components: { listfuncionario, Barranav},
    name:'home',
    data(){
        return{
            
        }
    },
    mounted(){
        let cookie;
        cookie = Cookies.get('tkn')
        if(cookie == undefined){
            return this.$router.push('/')
        }
    },
    methods:{
        
    },
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
.listfuncionarioclass{
    margin-top: 25px;
}
</style>