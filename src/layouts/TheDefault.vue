<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
<div>
  <MenuGestionBudgetaire></MenuGestionBudgetaire>
  <div class="main-panel">
    <TheHeader></TheHeader>
  <div class="container">
<slot />
  </div>

  </div>

  <!-- <div class="main-panel">
    

  

<TheFooTer></TheFooTer> -->
  </div>


<!-- </div> -->
</template>

<script>
 import MenuGestionBudgetaire from './DossierMenu/MenuGestionBudgetaire.vue'
//  import TheNavBar from './TheNavBar.vue'
import TheHeader from './TheHeader.vue'

//    import TheFooTer from './TheFooTer.vue'
export default {
  name: 'App',
  components: {
     MenuGestionBudgetaire,
    TheHeader,
   
    //  TheFooTer
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
