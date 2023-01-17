<template>
    <div class="conteiner">
        <div class="topo unselectable" >
            <h2>Sitema cadastro<br>Empresa</h2>
            
        </div>

        <div class="conteinerLogin">
            <form method="POST">
                <label>NOME</label>
                <input required v-model="text3" type="text"/>
                <label>EMAIL</label>
                <input required v-model="text" type="text"/>
                <label>SENHA</label>
                <input required v-model="text2" type="password"/>
                <button @click.prevent="verifyLogin" type="submit">CADASTRAR</button>
            </form>
            <a v-show="incorrect" class="error" href="">EMAIL E SENHA PRECISA CONTER MAIS DE 06 CARACTERES</a>
        </div>
        
    </div>
</template>

<script>
import Cookies from 'js-cookie'
export default {
    name:'cadastrarNaPlat',
    data(){
        return{
            text:"",
            text2:'',
            text3:'',
            incorrect:false,
        }
    },
   methods:{
        verifyLogin(){
            this.incorrect = false;
            if(this.text == '' || this.text.length < 6 ){ 
                this.incorrect = true 
                return
            }
            if(this.text2 == '' || this.text2.length < 6 ){ 
                this.incorrect = true 
                return
            }
            if(this.text3 == '' || this.text3.length < 3 ){ 
                this.incorrect = true 
                return
            }
            this.login()
        },
       login(){
            this.$axios.$post('https://api-teste-lucas.onrender.com/auth/register',{
                name:this.text3,
                email:this.text,
	            password:this.text2,
            })
            .then(res=>{ this.setCookie(res.token)})
            .catch(e => this.incorrect = true)
        },
        setCookie(param){   
            Cookies.set('tkn', param,{ expires: 1, path: '' })
            this.$router.push('home')
        }
    }
}
</script>

<style scoped>


.conteiner{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.topo{
    background:#007094;
    height: 120px;
    width: 315px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    margin-top: 25px;
}
.topo h2 {
    font-family: 'Poppins', sans-serif;
    color: white;
    font-size: 25px;
    text-align: center;
    font-weight: 400;
}
.conteinerLogin{
    height: 550px;
    width: 380px;
    background: #007094;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 25px;
}
.conteinerLogin form {
    display: flex;
    flex-direction: column;
    font-family: 'Poppins', sans-serif;
    color: white;
    font-size: 18px;
    margin-top: 40px;
}
.conteinerLogin form label{
    text-align: left;
}
.conteinerLogin form input{
    height: 60px;
    width: 320px;
    border-radius: 20px;
    border: none;
    background: #D9D9D9;
    margin: 0 0 30px 0;
    color:#000;
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
}
.conteinerLogin form button{
    height: 70px;
    width: 150px;
    border-radius: 20px;
    border: none;
    font-size: 18px;
    transform: translateX(62.5%);
}
.conteinerLogin form button:hover{
    transition: .3s;
    border: 1px solid black;
}

.conteinerLogin a {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    color:white;
    text-decoration: none;
    margin-top: 20px;
    text-align: center;
}
.error{
    color:red !important;
}

.unselectable {
    -webkit-user-select: none;
    -webkit-touch-callout: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
</style>