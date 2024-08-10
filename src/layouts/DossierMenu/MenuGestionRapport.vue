<template>
  <div class="sidebar" data-background-color="dark">
    <logo></logo>
    <div class="sidebar-wrapper scrollbar scrollbar-inner">
      <div class="sidebar-content">
        <ul class="nav nav-secondary">
          <!-- <li class="nav-item active">
                <a
                  data-bs-toggle="collapse"
                  href="#dashboard"
                  class="collapsed"
                  aria-expanded="false"
                >
                  <i class="fas fa-home"></i>
                  <p>Dashboard</p>
                  <span class="caret"></span>
                </a>
                <div class="collapse" id="dashboard">
                  <ul class="nav nav-collapse">
                    <li>
                      <a href="../demo1/index.html">
                        <span class="sub-item">Dashboard 1</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li> -->
          <li class="nav-section">
            <span class="sidebar-mini-icon">
              <i class="fa fa-ellipsis-h"></i>
            </span>
            <h4 class="text-section">GESTION DES RAPPORTS</h4>
          </li>
          <!-- <li class="nav-item">
            <a
              class="nav-link collapsed"
              href=""
              @click.prevent="activedOptionMenu('')"
            >
              <i class="fas fa-arrow-right"></i>

              <p>Etat du budget</p>
            </a>
          </li> -->
          <!-- <li class="nav-item">
            <a
              class="nav-link collapsed"
              href=""
              @click.prevent="activedOptionMenu('ExecutionBailleur')"
            >
              <i class="fas fa-arrow-right"></i>

              <p>Execution par bailleur</p>
            </a>
          </li> -->
          <li class="nav-item">
            <a
              class="nav-link collapsed"
              href=""
              @click.prevent="activedOptionMenu('ExecutionParLigne')"
            >
              <i class="fas fa-arrow-right"></i>

              <p>Exécution par Ligne</p>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link collapsed"
              href=""
              @click.prevent="activedOptionMenu('listeOpProvisoire')"
            >
              <i class="fas fa-arrow-right"></i>

              <p>Etat des OP Provisoire</p>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link collapsed"
              href=""
              @click.prevent="activedOptionMenu('')"
            >
              <i class="fas fa-arrow-right"></i>

              <p>Situation Par Composante</p>
            </a>
          </li>
          <!-- <li class="nav-item">
            <a
              class="nav-link collapsed"
              href=""
              @click.prevent="activedOptionMenu('')"
            >
              <i class="fas fa-arrow-right"></i>

              <p>Etat Sur les OP</p>
            </a>
          </li> -->
           <li class="nav-item">
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
      "getterUtilisateur",
      "champVide",
      "error",
      "errorMessage",
      "getterLoader",
    ]),
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
