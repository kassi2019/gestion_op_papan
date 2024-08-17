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
            <h4 class="text-section">PARAMETRE GENERAUX</h4>
          </li>
          <li class="nav-item">
            <a
              class="nav-link collapsed"
              href=""
              @click.prevent="activedOptionMenu('ExerciceBudgetaire')"
            >
              <i class="fas fa-arrow-right"></i>

              <p>Exercice Budgétaire</p>
            </a>
          </li>

          <li class="nav-item">
            <a data-bs-toggle="collapse" href="#forms">
              <i class="fas fa-book-reader"></i>
              <p>Information sur Structure</p>
              <span class="caret"></span>
            </a>
            <div class="collapse" id="forms">
              <ul class="nav nav-collapse">
                <li>
                  <a href="" @click.prevent="activedOptionMenu('Section')">
                    <span class="sub-item">Section</span>
                  </a>
                </li>
                <li>
                  <a href="" @click.prevent="activedOptionMenu('Activite')">
                    <span class="sub-item">Activité</span>
                  </a>
                </li>
                <li>
                  <a href="" @click.prevent="activedOptionMenu('projet')">
                    <span class="sub-item">Création du projet</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li class="nav-item">
            <a data-bs-toggle="collapse" href="#sidebarLayouts">
              <i class="fas fa-cog"></i>
              <p>Information sur Bailleur</p>
              <span class="caret"></span>
            </a>
            <div class="collapse" id="sidebarLayouts">
              <ul class="nav nav-collapse">
                <li>
                  <a
                    href=""
                    @click.prevent="activedOptionMenu('typeFinancement')"
                  >
                    <span class="sub-item">Type de financement</span>
                  </a>
                </li>
                <li>
                  <a href="" @click.prevent="activedOptionMenu('bailleur')">
                    <span class="sub-item">Source de financement</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>

          <li class="nav-item">
            <a
              class="nav-link collapsed"
              href=""
              @click.prevent="activedOptionMenu('autreTaux')"
            >
              <i class="fas fa-arrow-right"></i>

              <p>Taux TVA</p>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link collapsed"
              href=""
              @click.prevent="activedOptionMenu('signataire')"
            >
              <i class="fas fa-arrow-right"></i>

              <p>Signataire</p>
            </a>
          </li>
          <li class="nav-item">
            <a data-bs-toggle="collapse" href="#base">
              <i class="fas fa-cog"></i>
              <p>Information sur Entréprise</p>
              <span class="caret"></span>
            </a>
            <div class="collapse" id="base">
              <ul class="nav nav-collapse">
                <li>
                  <a
                    href=""
                    @click.prevent="activedOptionMenu('SecteurActivite')"
                  >
                    <span class="sub-item">Secteur Activité</span>
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    @click.prevent="activedOptionMenu('FormeJuridique')"
                  >
                    <span class="sub-item">Forme juridique</span>
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    @click.prevent="activedOptionMenu('RegimeImpossition')"
                  >
                    <span class="sub-item">Régime Impossition</span>
                  </a>
                </li>
                <li>
                  <a href="" @click.prevent="activedOptionMenu('Banque')">
                    <span class="sub-item">Banque</span>
                  </a>
                </li>
                <li>
                  <a href="" @click.prevent="activedOptionMenu('Entreprise')">
                    <span class="sub-item">Création entreprise</span>
                  </a>
                </li>

                <!-- <li>
                      <a href="components/panels.html">
                        <span class="sub-item">Panels</span>
                      </a>
                    </li>
                    <li>
                      <a href="components/notifications.html">
                        <span class="sub-item">Notifications</span>
                      </a>
                    </li>
                    <li>
                      <a href="components/sweetalert.html">
                        <span class="sub-item">Sweet Alert</span>
                      </a>
                    </li>
                    <li>
                      <a href="components/font-awesome-icons.html">
                        <span class="sub-item">Font Awesome Icons</span>
                      </a>
                    </li>
                    <li>
                      <a href="components/simple-line-icons.html">
                        <span class="sub-item">Simple Line Icons</span>
                      </a>
                    </li> -->
                <!-- <li>
                      <a href="components/typography.html">
                        <span class="sub-item">Typography</span>
                      </a>
                    </li> -->
              </ul>
            </div>
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
            <h4 class="text-section">PARAMETRE GENERAUX</h4>
          </li>
          <li class="nav-item" v-if="AfficherSousMenuExerciceBudgétaire == 63 && rolePerso_id != 1">
            <a
              class="nav-link collapsed"
              href=""
              @click.prevent="activedOptionMenu('ExerciceBudgetaire')"
            >
              <i class="fas fa-arrow-right"></i>

              <p>Exercice Budgétaire</p>
            </a>
          </li>

          <li class="nav-item" v-if="AfficherSousMenuInformationStructure == 64 && rolePerso_id != 1">
            <a data-bs-toggle="collapse" href="#forms">
              <i class="fas fa-book-reader"></i>
              <p>Information sur Structure</p>
              <span class="caret"></span>
            </a>
            <div class="collapse" id="forms">
              <ul class="nav nav-collapse">
                <li>
                  <a href="" @click.prevent="activedOptionMenu('Section')">
                    <span class="sub-item">Section</span>
                  </a>
                </li>
                <li>
                  <a href="" @click.prevent="activedOptionMenu('Activite')">
                    <span class="sub-item">Activité</span>
                  </a>
                </li>
                <li>
                  <a href="" @click.prevent="activedOptionMenu('projet')">
                    <span class="sub-item">Création du projet</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li class="nav-item" v-if="AfficherSousMenuInformationBailleur == 65 && rolePerso_id != 1">
            <a data-bs-toggle="collapse" href="#sidebarLayouts">
              <i class="fas fa-cog"></i>
              <p>Information sur Bailleur</p>
              <span class="caret"></span>
            </a>
            <div class="collapse" id="sidebarLayouts">
              <ul class="nav nav-collapse">
                <li>
                  <a
                    href=""
                    @click.prevent="activedOptionMenu('typeFinancement')"
                  >
                    <span class="sub-item">Type de financement</span>
                  </a>
                </li>
                <li>
                  <a href="" @click.prevent="activedOptionMenu('bailleur')">
                    <span class="sub-item">Source de financement</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>

          <li class="nav-item" v-if="AfficherSousMenuTauxTVA == 66 && rolePerso_id != 1">
            <a
              class="nav-link collapsed"
              href=""
              @click.prevent="activedOptionMenu('autreTaux')"
            >
              <i class="fas fa-arrow-right"></i>

              <p>Taux TVA</p>
            </a>
          </li>
          <li class="nav-item" v-if="AfficherSousMenuSignataire == 67 && rolePerso_id != 1"> 
            <a
              class="nav-link collapsed"
              href=""
              @click.prevent="activedOptionMenu('signataire')"
            >
              <i class="fas fa-arrow-right"></i>

              <p>Signataire</p>
            </a>
          </li>
          <li class="nav-item" v-if="AfficherSousMenuInformationEntréprise == 68 && rolePerso_id != 1">
            <a data-bs-toggle="collapse" href="#base">
              <i class="fas fa-cog"></i>
              <p>Information sur Entréprise</p>
              <span class="caret"></span>
            </a>
            <div class="collapse" id="base">
              <ul class="nav nav-collapse">
                <li>
                  <a
                    href=""
                    @click.prevent="activedOptionMenu('SecteurActivite')"
                  >
                    <span class="sub-item">Secteur Activité</span>
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    @click.prevent="activedOptionMenu('FormeJuridique')"
                  >
                    <span class="sub-item">Forme juridique</span>
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    @click.prevent="activedOptionMenu('RegimeImpossition')"
                  >
                    <span class="sub-item">Régime Impossition</span>
                  </a>
                </li>
                <li>
                  <a href="" @click.prevent="activedOptionMenu('Banque')">
                    <span class="sub-item">Banque</span>
                  </a>
                </li>
                <li>
                  <a href="" @click.prevent="activedOptionMenu('Entreprise')">
                    <span class="sub-item">Création entreprise</span>
                  </a>
                </li>

                <!-- <li>
                      <a href="components/panels.html">
                        <span class="sub-item">Panels</span>
                      </a>
                    </li>
                    <li>
                      <a href="components/notifications.html">
                        <span class="sub-item">Notifications</span>
                      </a>
                    </li>
                    <li>
                      <a href="components/sweetalert.html">
                        <span class="sub-item">Sweet Alert</span>
                      </a>
                    </li>
                    <li>
                      <a href="components/font-awesome-icons.html">
                        <span class="sub-item">Font Awesome Icons</span>
                      </a>
                    </li>
                    <li>
                      <a href="components/simple-line-icons.html">
                        <span class="sub-item">Simple Line Icons</span>
                      </a>
                    </li> -->
                <!-- <li>
                      <a href="components/typography.html">
                        <span class="sub-item">Typography</span>
                      </a>
                    </li> -->
              </ul>
            </div>
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
     AfficherSousMenuInformationEntréprise() {
      // return (id) => {
      //   if (id != null && id != "") {
      const qtereel = this.getterPermission.find(
        (qtreel) => qtreel.utilisateur_id == this.nameUserid && qtreel.sous_menu==68
      );

      if (qtereel) {
        return qtereel.sous_menu;
      }
      return 0;
      //   }
      // };
    },
    AfficherSousMenuSignataire() {
      // return (id) => {
      //   if (id != null && id != "") {
      const qtereel = this.getterPermission.find(
        (qtreel) => qtreel.utilisateur_id == this.nameUserid && qtreel.sous_menu==67
      );

      if (qtereel) {
        return qtereel.sous_menu;
      }
      return 0;
      //   }
      // };
    },
AfficherSousMenuTauxTVA() {
      // return (id) => {
      //   if (id != null && id != "") {
      const qtereel = this.getterPermission.find(
        (qtreel) => qtreel.utilisateur_id == this.nameUserid && qtreel.sous_menu==66
      );

      if (qtereel) {
        return qtereel.sous_menu;
      }
      return 0;
      //   }
      // };
    },
    AfficherSousMenuInformationBailleur() {
      // return (id) => {
      //   if (id != null && id != "") {
      const qtereel = this.getterPermission.find(
        (qtreel) => qtreel.utilisateur_id == this.nameUserid && qtreel.sous_menu==65
      );

      if (qtereel) {
        return qtereel.sous_menu;
      }
      return 0;
      //   }
      // };
    },
 AfficherSousMenuInformationStructure() {
      // return (id) => {
      //   if (id != null && id != "") {
      const qtereel = this.getterPermission.find(
        (qtreel) => qtreel.utilisateur_id == this.nameUserid && qtreel.sous_menu==64
      );

      if (qtereel) {
        return qtereel.sous_menu;
      }
      return 0;
      //   }
      // };
    },
     AfficherSousMenuExerciceBudgétaire() {
      // return (id) => {
      //   if (id != null && id != "") {
      const qtereel = this.getterPermission.find(
        (qtreel) => qtreel.utilisateur_id == this.nameUserid && qtreel.sous_menu==63
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
