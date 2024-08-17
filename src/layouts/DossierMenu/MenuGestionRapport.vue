<template>
  <div class="sidebar" data-background-color="dark">
    <logo></logo>

    <div class="sidebar-wrapper scrollbar scrollbar-inner" v-if="rolePerso_id == 1">
      <div class="sidebar-content">
        <ul class="nav nav-secondary">
          <li class="nav-section">
            <span class="sidebar-mini-icon">
              <i class="fa fa-ellipsis-h"></i>
            </span>
            <h4 class="text-section">GESTION DES RAPPORTS</h4>
          </li>

          <li
            class="nav-item"
           
          >
            <a
              class="nav-link collapsed"
              href=""
              @click.prevent="activedOptionMenu('ExecutionParLigne')"
            >
              <i class="fas fa-arrow-right"></i>

              <p>Exécution par Ligne</p>
            </a>
          </li>
          <li
            class="nav-item"
           
          >
            <a
              class="nav-link collapsed"
              href=""
              @click.prevent="activedOptionMenu('listeOpProvisoire')"
            >
              <i class="fas fa-arrow-right"></i>

              <p>Etat des OP Provisoire</p>
            </a>
          </li>
          <li
            class="nav-item"
            
          >
            <a
              class="nav-link collapsed"
              href=""
              @click.prevent="activedOptionMenu('situationComposante')"
            >
              <i class="fas fa-arrow-right"></i>

              <p>Situation Par Composante</p>
            </a>
          </li>
          <li
            class="nav-item"
           
          >
            <a
              class="nav-link collapsed"
              href=""
              @click.prevent="activedOptionMenu('EtatPersonnel')"
            >
              <i class="fas fa-arrow-right"></i>

              <p>Situation sur le personnel</p>
            </a>
          </li>
          <li
            class="nav-item"
            
          >
            <a
              class="nav-link collapsed"
              href=""
              @click.prevent="activedOptionMenu('')"
            >
              <i class="fas fa-arrow-right"></i>

              <p>Situation des missions</p>
            </a>
          </li>
          <li
            class="nav-item"
           
          >
            <a
              class="nav-link collapsed"
              href=""
              @click.prevent="activedOptionMenu('VerifierFacture')"
            >
              <i class="fas fa-arrow-right"></i>

              <p>Vérification facture</p>
            </a>
          </li>
       
        </ul>
      </div>
    </div>

    <div class="sidebar-wrapper scrollbar scrollbar-inner" v-else>
      <div class="sidebar-content">
        <ul class="nav nav-secondary">
         
          <li class="nav-section">
            <span class="sidebar-mini-icon">
              <i class="fa fa-ellipsis-h"></i>
            </span>
            <h4 class="text-section">GESTION DES RAPPORTS</h4>
          </li>
         
          <li
            class="nav-item"
            v-if="AfficherSousMenuExécutionparLigne == 17 && rolePerso_id != 1"
          >
            <a
              class="nav-link collapsed"
              href=""
              @click.prevent="activedOptionMenu('ExecutionParLigne')"
            >
              <i class="fas fa-arrow-right"></i>

              <p>Exécution par Ligne</p>
            </a>
          </li>
          <li
            class="nav-item"
            v-if="AfficherSousMenuEtatdesOPProvisoire == 18 && rolePerso_id != 1"
          >
            <a
              class="nav-link collapsed"
              href=""
              @click.prevent="activedOptionMenu('listeOpProvisoire')"
            >
              <i class="fas fa-arrow-right"></i>

              <p>Etat des OP Provisoire</p>
            </a>
          </li>
          <li
            class="nav-item"
            v-if="AfficherSousMenuSituationParComposante == 19 && rolePerso_id != 1"
          >
            <a
              class="nav-link collapsed"
              href=""
              @click.prevent="activedOptionMenu('situationComposante')"
            >
              <i class="fas fa-arrow-right"></i>

              <p>Situation Par Composante</p>
            </a>
          </li>
          <li
            class="nav-item"
            v-if="AfficherSousMenuSituationsurpersonnel == 20 && rolePerso_id != 1"
          >
            <a
              class="nav-link collapsed"
              href=""
              @click.prevent="activedOptionMenu('EtatPersonnel')"
            >
              <i class="fas fa-arrow-right"></i>

              <p>Situation sur le personnel</p>
            </a>
          </li>
          <li
            class="nav-item"
            v-if="AfficherSousMenuSituationmissions == 21 && rolePerso_id != 1"
          >
            <a
              class="nav-link collapsed"
              href=""
              @click.prevent="activedOptionMenu('')"
            >
              <i class="fas fa-arrow-right"></i>

              <p>Situation des missions</p>
            </a>
          </li>
          <li
            class="nav-item"
            v-if="AfficherSousMenuVérificationfacture == 22 && rolePerso_id != 1"
          >
            <a
              class="nav-link collapsed"
              href=""
              @click.prevent="activedOptionMenu('VerifierFacture')"
            >
              <i class="fas fa-arrow-right"></i>

              <p>Vérification facture</p>
            </a>
          </li>
          <!-- <li class="nav-item">
            <a
              class="nav-link collapsed"
              href=""
              @click.prevent="activedOptionMenu('projet')"
            >
              <i class="fas fa-arrow-right"></i>

              <p>Création du projet</p>
            </a>
          </li> -->
          <!-- <li class="nav-item">
            <a
              class="nav-link collapsed"
              href=""
              @click.prevent="activedOptionMenu('Entreprise')"
            >
              <i class="fas fa-arrow-right"></i>

              <p>Création entreprise</p>
            </a>
          </li> -->
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
      "loader",
      "getterPermission",
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
     AfficherSousMenuExécutionparLigne() {
      // return (id) => {
      //   if (id != null && id != "") {
      const qtereel = this.getterPermission.find(
        (qtreel) => qtreel.utilisateur_id == this.nameUserid && qtreel.sous_menu==17
      );

      if (qtereel) {
        return qtereel.sous_menu;
      }
      return 0;
      //   }
      // };
    },
     AfficherSousMenuEtatdesOPProvisoire() {
      // return (id) => {
      //   if (id != null && id != "") {
      const qtereel = this.getterPermission.find(
        (qtreel) => qtreel.utilisateur_id == this.nameUserid && qtreel.sous_menu==18
      );

      if (qtereel) {
        return qtereel.sous_menu;
      }
      return 0;
      //   }
      // };
    },
    AfficherSousMenuSituationParComposante() {
      // return (id) => {
      //   if (id != null && id != "") {
      const qtereel = this.getterPermission.find(
        (qtreel) => qtreel.utilisateur_id == this.nameUserid && qtreel.sous_menu==19
      );

      if (qtereel) {
        return qtereel.sous_menu;
      }
      return 0;
      //   }
      // };
    },
    AfficherSousMenuSituationsurpersonnel() {
      // return (id) => {
      //   if (id != null && id != "") {
      const qtereel = this.getterPermission.find(
        (qtreel) => qtreel.utilisateur_id == this.nameUserid && qtreel.sous_menu==20
      );

      if (qtereel) {
        return qtereel.sous_menu;
      }
      return 0;
      //   }
      // };
    },
    AfficherSousMenuSituationmissions() {
      // return (id) => {
      //   if (id != null && id != "") {
      const qtereel = this.getterPermission.find(
        (qtreel) => qtreel.utilisateur_id == this.nameUserid && qtreel.sous_menu==21
      );

      if (qtereel) {
        return qtereel.sous_menu;
      }
      return 0;
      //   }
      // };
    },
     AfficherSousMenuVérificationfacture() {
      // return (id) => {
      //   if (id != null && id != "") {
      const qtereel = this.getterPermission.find(
        (qtreel) => qtreel.utilisateur_id == this.nameUserid && qtreel.sous_menu==22
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
