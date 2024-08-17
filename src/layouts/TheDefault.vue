<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <div>
   
    <MenuGestionBudgetaire
      v-if="id_module == 2"
      :isChange2="isChange2"
    ></MenuGestionBudgetaire>
    <MenuParametre v-if="id_module == 1" :isChange2="isChange2"></MenuParametre>
     <MenuUtilisateur v-if="id_module == 5" :isChange2="isChange2"></MenuUtilisateur>
     <MenuGestionRapport  v-if="id_module == 4" :isChange2="isChange2"></MenuGestionRapport>
  <MenuGestionPersonnel  v-if="id_module == 3" :isChange2="isChange2"></MenuGestionPersonnel>

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
import { mapGetters, mapActions } from "vuex";
import MenuGestionBudgetaire from "./DossierMenu/MenuGestionBudgetaire.vue";
import MenuParametre from "./DossierMenu/MenuParametre.vue";
import MenuUtilisateur from "./DossierMenu/MenuUtilisateur.vue";
import MenuGestionRapport from "./DossierMenu/MenuGestionRapport.vue";
import MenuGestionPersonnel from "./DossierMenu/MenuGestionPersonnel.vue";
//  import TheNavBar from './TheNavBar.vue'
import TheHeader from "./TheHeader.vue";

//    import TheFooTer from './TheFooTer.vue'
export default {
  name: "App",
  components: {
    MenuGestionBudgetaire,
    TheHeader,
    MenuParametre,
    MenuUtilisateur,
    MenuGestionRapport,
    MenuGestionPersonnel

    //  TheFooTer
  },
  data() {
    return {
      isChange: false,
      isChange2: false,
      id_module: "",
    };
  },
  created() {
    this.getPermission();
    //  this.identifiant = this.$route.params.id;
    this.id_module = localStorage.getItem("module_app");
  },
  computed: {
    ...mapGetters("Utilisateurs", [
      "loader","getterPermission",
      "getterUtilisateur",
      "champVide",
      "error",
      "errorMessage",
      "getterLoader",
    ]),

    nameUser() {
      let objLinea = localStorage.getItem("User");
      let objJson = JSON.parse(objLinea);
      return objJson.name;
      // if (!this.getterUserStore) return "JUSTICE";

      // let objet = this.getterUserStore;
      // return objet.name;
    },
  },
  methods: {
    ...mapActions("Utilisateurs", [
      "login","getPermission",
      "getUtilisateur",
      "logoutUser",
      "getProfileUsers",
      "getUsers",
    ]),
  },
};
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
