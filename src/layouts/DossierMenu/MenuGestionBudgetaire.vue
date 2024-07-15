<template>
<div class="sidebar" data-background-color="dark">
        <div class="sidebar-logo">
          <!-- Logo Header -->
          <div class="logo-header" data-background-color="dark">
            <a href="index.html" class="logo">
              <img
                src="assets/img/kaiadmin/logo_light.svg"
                alt="navbar brand"
                class="navbar-brand"
                height="20"
              />
            </a>
            <div class="nav-toggle">
              <button class="btn btn-toggle toggle-sidebar">
                <i class="gg-menu-right"></i>
              </button>
              <button class="btn btn-toggle sidenav-toggler">
                <i class="gg-menu-left"></i>
              </button>
            </div>
            <button class="topbar-toggler more">
              <i class="gg-more-vertical-alt"></i>
            </button>
          </div>
          <!-- End Logo Header -->
        </div>
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
                <h4 class="text-section">GESTION BUDGETAIRE</h4>
              </li>
              <li class="nav-item">
                <a data-bs-toggle="collapse" href="#base">
                  <i class="fas fa-cog"></i>
                  <p>Parametre Budget</p>
                  <span class="caret"></span>
                </a>
                <div class="collapse" id="base">
                  <ul class="nav nav-collapse">
                    <li>
                      <a href="" @click.prevent="activedOptionMenu('NatureDepense')">
                        <span class="sub-item">Nature dépense</span>
                      </a>
                    </li>
                    <li>
                      <a href="" @click.prevent="activedOptionMenu('NatureEconomique')">
                        <span class="sub-item">Nature économique</span>
                      </a>
                    </li>
                    <li>
                      <a href="" @click.prevent="activedOptionMenu('sousBudget')">
                        <span class="sub-item">Sous budget / Composante</span>
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
              <li class="nav-item">
                <a data-bs-toggle="collapse" href="#sidebarLayouts">
                  <i class="far fa-money-bill-alt"></i>
                  <p>Gestion Budget</p>
                  <span class="caret"></span>
                </a>
                <div class="collapse" id="sidebarLayouts">
                  <ul class="nav nav-collapse">
                    <li>
                      <a href="" @click.prevent="activedOptionMenu('BudgetNotifie')">
                        <span class="sub-item">Budget notifié</span>
                      </a>
                    </li>
                    <li>
                      <a href="" @click.prevent="activedOptionMenu('BudgetReport')">
                        <span class="sub-item">Budget réport</span>
                      </a>
                    </li>
                    <li>
                      <a href="" @click.prevent="activedOptionMenu('Budget')">
                        <span class="sub-item">Eclater budget</span>
                      </a>
                    </li>
                     <li>
                      <a href="" @click.prevent="activedOptionMenu('')">
                        <span class="sub-item">Modifier budget</span>
                      </a>
                    </li>
                     <li>
                      <a href="" @click.prevent="activedOptionMenu('')">
                        <span class="sub-item">Consulter budget visé</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <!-- <li class="nav-item">
                <a href="../../documentation/index.html">
                  <i class="fas fa-file"></i>
                  <p>Modification budget</p>
                  <span class="badge badge-secondary">1</span>
                </a>
              </li> -->
<li class="nav-item">
                <a data-bs-toggle="collapse" href="#forms">
                  <i class="fas fa-book-reader"></i>
                  <p>Exécution du budget</p>
                  <span class="caret"></span>
                </a>
                <div class="collapse" id="forms">
                  <ul class="nav nav-collapse">
                    <li>
                      <a href=""  @click.prevent="activedOptionMenu('OrdrePaiementProvisoire')">
                        <span class="sub-item">OP Provisoire</span>
                      </a>
                    </li>
                     <li>
                      <a href="../forms/forms.html">
                        <span class="sub-item">OP Direct</span>
                      </a>
                    </li>
                     <li>
                      <a href="../forms/forms.html">
                        <span class="sub-item">OP Annulation</span>
                      </a>
                    </li>
                     <li>
                      <a href="../forms/forms.html">
                        <span class="sub-item">OP Définitif</span>
                      </a>
                    </li>
                    <li>
                      <a href="../forms/forms.html">
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
export default {
  name: "app",
    components: {},
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
