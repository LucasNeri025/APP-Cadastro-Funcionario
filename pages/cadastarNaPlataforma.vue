<template>
    <div class="conteiner">
      <CadastrarNaPlat/>
    </div>
  </template>
  
  <script>
import CadastrarNaPlat from '~/components/cadastrarNaPlat.vue';

  export default {
    name: "cadastarNaPlataforma",
    components: { CadastrarNaPlat }
}
  </script>
  
  
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
  body{
    background: #242424;
  }
  
  
  </style>