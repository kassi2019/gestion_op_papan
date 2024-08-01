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
            <h4 class="text-section">GESTION DU PERSONNEL</h4>
          </li>
          <li class="nav-item">
            <a data-bs-toggle="collapse" href="#base">
              <i class="fas fa-cog"></i>
              <p>Parametre Personnel</p>
              <span class="caret"></span>
            </a>
            <div class="collapse" id="base">
              <ul class="nav nav-collapse">
                <li>
                  <a href="" @click.prevent="activedOptionMenu('Fonction')">
                    <span class="sub-item">Fonction</span>
                  </a>
                </li>
                <li>
                  <a href="" @click.prevent="activedOptionMenu('Service')">
                    <span class="sub-item">Service</span>
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    @click.prevent="activedOptionMenu('NatureContrat')"
                  >
                    <span class="sub-item">Nature Contrat</span>
                  </a>
                </li>
                <li>
                  <a href="" @click.prevent="activedOptionMenu('Emploi')">
                    <span class="sub-item">Emploi</span>
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    @click.prevent="activedOptionMenu('TypeIndemnite')"
                  >
                    <span class="sub-item">Type dépense</span>
                  </a>
                </li>
                <li>
                  <a href="" @click.prevent="activedOptionMenu('Diplome')">
                    <span class="sub-item">Diplôme</span>
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    @click.prevent="activedOptionMenu('SituationMatrimonial')"
                  >
                    <span class="sub-item">Situation Matrimonial</span>
                  </a>
                </li>
                <li>
                  <a href="" @click.prevent="activedOptionMenu('TypePiece')">
                    <span class="sub-item">Type de piece</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li class="nav-item">
            <a
              class="nav-link collapsed"
              href=""
              @click.prevent="activedOptionMenu('SaisirContratPersonnel')"
            >
              <i class="fas fa-arrow-right"></i>

              <p>Saisir Contrat personnel</p>
            </a>
          </li>
<li class="nav-item">
            <a
              class="nav-link collapsed"
              href=""
              @click.prevent="activedOptionMenu('ListeDuPersonnel')"
            >
              <i class="fas fa-arrow-right"></i>

              <p>Voir Personnel</p>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link collapsed"
              href=""
              @click.prevent="activedOptionMenu('ListeDuPersonnel')"
            >
              <i class="fas fa-arrow-right"></i>

              <p>Ordre de Mission</p>
            </a>
          </li>
          <li class="nav-item">
            <a data-bs-toggle="collapse" href="#forms">
              <i class="fas fa-book-reader"></i>
              <p>Salaire et Indemnité</p>
              <span class="caret"></span>
            </a>
            <div class="collapse" id="forms">
              <ul class="nav nav-collapse">
                <li>
                  <a
                    href=""
                    @click.prevent="activedOptionMenu('InfoBordOpProvisoirePerso')"
                  >
                    <span class="sub-item">OP Provisoire</span>
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    @click.prevent="
                      activedOptionMenu('InfoBordOpDirectPerso')
                    "
                  >
                    <span class="sub-item">OP Direct</span>
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    @click.prevent="
                      activedOptionMenu('InformationBordereauOPAnnulation')
                    "
                  >
                    <span class="sub-item">OP Annulation</span>
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    @click.prevent="
                      activedOptionMenu('InformationBordereauOPDefinitif')
                    "
                  >
                    <span class="sub-item">OP Définitif</span>
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    @click.prevent="activedOptionMenu('infoBordereauTotalOpPerso')"
                  >
                    <span class="sub-item">Voir ordre paiement</span>
                  </a>
                </li>
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
