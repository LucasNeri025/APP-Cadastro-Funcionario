<template>
    <div class="conteiner">
        <ul>
            <li><nuxt-link class="clique" to="/home">LISTA DE FUNCIONARIOS</nuxt-link></li>
            <LI>LOGO</LI>
            <li><nuxt-link class="clique" to="/cadastro">CADASTRAR FUNCIONARIOS</nuxt-link></li>
        </ul>
    </div>
</template>


<script>
export default {
    name:'navbar'    
}
</script>

<style scoped>
.conteiner{
    height: 80px;
    width: 80vw;
    background: #007094;
    border-radius: 20px;
    display: flex;
    align-items: center;
}
.conteiner ul {
    display: flex;
    justify-content: space-around;
    list-style: none;
    width: 100%;
}
.conteiner ul li {
    color: white;
    font-family: 'Poppins', sans-serif;
    cursor: pointer;
    font-size: 16px;
}
.clique{
    color: white;
    text-decoration: none;
    list-style: none;
}
@media (max-width: 900px) {
    .conteiner{
        width: 90vw;
    }
    .conteiner ul li{
        display: flex;
        flex-wrap: wrap;
        text-align: center;
        font-size: 15px;
        
    }
}
</style>