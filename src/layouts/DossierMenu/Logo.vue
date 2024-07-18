<template>
<div>
       <div class="sidebar-logo " >
          <!-- Logo Header --><br/><br/>
          <div class="logo-header card-body" data-background-color="dark">
             
            <a href="index.html" class="logo card-body" >
             
              <img
                src="../../../public/csslogin/images/logo4.png"
                alt="navbar brand"
                class="navbar-brand"
                height="150px"
                width="190px"
                
              />
            </a>
            <!-- <div class="nav-toggle">
              <button class="btn btn-toggle toggle-sidebar">
                <i class="gg-menu-right"></i>
              </button>
              <button class="btn btn-toggle sidenav-toggler">
                <i class="gg-menu-left"></i>
              </button>
            </div>
            <button class="topbar-toggler more">
              <i class="gg-more-vertical-alt"></i>
            </button> -->
          </div>
          <!-- End Logo Header -->
        </div>
</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";


//    import TheFooTer from './TheFooTer.vue'
export default {
  name: "App",
  components: {
    
  },
  data() {
    return {
      isChange: false,
      isChange2: false,
      id_module: "",
    };
  },
  created() {
    //  this.identifiant = this.$route.params.id;
    this.id_module = localStorage.getItem("module_app");
  },
  computed: {
    ...mapGetters("Utilisateurs", [
      "loader",
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
      "login",
      "getUtilisateur",
      "logoutUser",
      "getProfileUsers",
      "getUsers",
    ]),
  },
};
</script>

<style>
img {


}
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
