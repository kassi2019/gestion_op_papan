<template>
  <div class="sidebar" data-background-color="dark">
    <logo></logo>

<div class="sidebar-wrapper scrollbar scrollbar-inner" v-if="rolePerso_id==1">
      <div class="sidebar-content">
        <ul class="nav nav-secondary">
          <li class="nav-item" >
            <a
              class="nav-link collapsed"
              href=""
              @click.prevent="activedOptionMenu('roleUtilisateur')"
            >
              <i class="fas fa-file"></i>

              <p>Role</p>
            </a>
          </li>
          <li class="nav-item" >
            <a
              class="nav-link collapsed"
              href=""
              @click.prevent="activedOptionMenu('Utilisateur')"
            >
              <i class="fas fa-file"></i>

              <p>Utilisateur</p>
            </a>
          </li>
          <li class="nav-item" >
            <a
              class="nav-link collapsed"
              href=""
              @click.prevent="activedOptionMenu('PermissionUtilisateur')"
            >
              <i class="fas fa-file"></i>

              <p>Permission</p>
            </a>
          </li>
        </ul>
      </div>
    </div>


    <div class="sidebar-wrapper scrollbar scrollbar-inner" v-else>
      <div class="sidebar-content">
        <ul class="nav nav-secondary">
          <li class="nav-item" v-if="AfficherSousMenurole==60 && rolePerso_id!=1">
            <a
              class="nav-link collapsed"
              href=""
              @click.prevent="activedOptionMenu('roleUtilisateur')"
            >
              <i class="fas fa-file"></i>

              <p>Role</p>
            </a>
          </li>
          <li class="nav-item" v-if="AfficherSousMenuutilisateur==61 && rolePerso_id!=1">
            <a
              class="nav-link collapsed"
              href=""
              @click.prevent="activedOptionMenu('Utilisateur')"
            >
              <i class="fas fa-file"></i>

              <p>Utilisateur</p>
            </a>
          </li>
          <li class="nav-item" v-if="AfficherSousMenupermission==62 && rolePerso_id!=1">
            <a
              class="nav-link collapsed"
              href=""
              @click.prevent="activedOptionMenu('PermissionUtilisateur')"
            >
              <i class="fas fa-file"></i>

              <p>Permission</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <!-- End Sidebar -->
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import logo from "./Logo.vue";
export default {
  name: "app",
  components: { logo },
  props: {
    source: String,
  },

  data() {
    return {
      user: {
        email: "",
        password: "",
      },

      mydata: false,
    };
  },

  created() {
    //this.getUtilisateur();
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
     nameUserid() {
      let objLinea = localStorage.getItem("User");
      let objJson = JSON.parse(objLinea);
      return objJson.id;
    },
     rolePerso_id() {
      let objLinea = localStorage.getItem("User");
      let objJson = JSON.parse(objLinea);
      return objJson.role_id;
    },
    AfficherSousMenu() {
      // return (id) => {
      //   if (id != null && id != "") {
      const qtereel = this.getterPermission.find(
        (qtreel) => qtreel.utilisateur_id == this.nameUserid
      );

      if (qtereel) {
        return qtereel.sous_menu;
      }
      return 0;
      //   }
      // };
    },
    AfficherSousMenurole() {
      // return (id) => {
      //   if (id != null && id != "") {
      const qtereel = this.getterPermission.find(
        (qtreel) => qtreel.utilisateur_id == this.nameUserid && qtreel.sous_menu==60
      );

      if (qtereel) {
        return qtereel.sous_menu;
      }
      return 0;
      //   }
      // };
    },
    AfficherSousMenupermission() {
      // return (id) => {
      //   if (id != null && id != "") {
      const qtereel = this.getterPermission.find(
        (qtreel) => qtreel.utilisateur_id == this.nameUserid && qtreel.sous_menu==62
      );

      if (qtereel) {
        return qtereel.sous_menu;
      }
      return 0;
      //   }
      // };
    },
    AfficherSousMenuutilisateur() {
      // return (id) => {
      //   if (id != null && id != "") {
      const qtereel = this.getterPermission.find(
        (qtreel) => qtreel.utilisateur_id == this.nameUserid && qtreel.sous_menu==61
      );

      if (qtereel) {
        return qtereel.sous_menu;
      }
      return 0;
      //   }
      // };
    },
  },

  methods: {
    ...mapActions("Utilisateurs", ["login", "getUtilisateur"]),
    activedOptionMenu(route_name) {
      this.$router.push({
        name: route_name,
      });
    },

    ParametreGeneraux(id) {
      this.$router.push({
        name: "PageAccueil",
        params: { id: id },
      });
    },
  },
  watch: {
    dialog(val) {
      if (!val) return;

      setTimeout(() => (this.dialog = false), 4000);
    },
  },
};
</script>
<style scoped></style>
