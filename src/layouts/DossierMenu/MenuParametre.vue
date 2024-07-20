<template>
  <div class="sidebar" data-background-color="dark">
    <logo></logo>
    <div class="sidebar-wrapper scrollbar scrollbar-inner">
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
            <a
              class="nav-link collapsed"
              href=""
              @click.prevent="activedOptionMenu('Section')"
            >
              <i class="fas fa-arrow-right"></i>

              <p>Section</p>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link collapsed"
              href=""
              @click.prevent="activedOptionMenu('typeFinancement')"
            >
              <i class="fas fa-arrow-right"></i>

              <p>Type de financement</p>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link collapsed"
              href=""
              @click.prevent="activedOptionMenu('bailleur')"
            >
              <i class="fas fa-arrow-right"></i>

              <p>Bailleur</p>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link collapsed"
              href=""
              @click.prevent="activedOptionMenu('Activite')"
            >
              <i class="fas fa-arrow-right"></i>

              <p>Activité</p>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link collapsed"
              href=""
              @click.prevent="activedOptionMenu('projet')"
            >
              <i class="fas fa-arrow-right"></i>

              <p>Création du projet</p>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link collapsed"
              href=""
              @click.prevent="activedOptionMenu('Banque')"
            >
              <i class="fas fa-arrow-right"></i>

              <p>Banque</p>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link collapsed"
              href=""
              @click.prevent="activedOptionMenu('Entreprise')"
            >
              <i class="fas fa-arrow-right"></i>

              <p>Création entreprise</p>
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
