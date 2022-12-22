<template>
    <div class="conteinerHome">
        <div class="navbarclass" >
            <Barranav/>
        </div>
        <div class="exibir">
            <editarFunc/>
        </div>
        <exit-app/>
   </div>
</template>


<script>
import Cookies from 'js-cookie'
import editarFunc from '~/components/editarFunc.vue'
export default {
    name:"editar",
    components:{ editarFunc, },
    data(){
        return{
            idFunc:this.$route.params.id,
        }
    },
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