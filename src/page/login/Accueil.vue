<template>
  <div>
    <TheHeader></TheHeader>
    <br /><br /><br /><br /><br /><br /><br />
    <div
      class="row"
      style="background-image: url(../../../public/csslogin/images/font.jpg)"
    >
      <div class="col-md-4">
        <div
          v-if="AfficherModuleParametre != 6 && rolePerso_id != 1"
          class="card card-secondary bg-secondary-gradient"
          style="
            border-radius: 25px 100px 50px;
            border-color: #fff !important;
            border-style: solid;
            box-shadow: 15px -10px #f9d531;
            width: 80%;
            cursor: pointer;
          "
          data-bs-toggle="modal"
          data-bs-target="#largeModal"
        >
          <div class="card-body curves-shadow">
            <i class="fas fa-cogs" style="font-size: 50px"></i>
            <h2 class="op-8">Paramétres Généraux</h2>
            <!-- <div class="pull-right">
              <h3 class="fw-bold op-8">70%</h3>
            </div> -->
          </div>
        </div>
        <div
          v-else
          class="card card-secondary"
          style="
            border-radius: 25px 100px 50px;
            border-color: #fff !important;
            border-style: solid;
            box-shadow: 15px -10px #f9d531;
            cursor: pointer;
            width: 80%;
          "
          @click="ParametreGeneraux(1)"
        >
          <div class="card-body skew-shadow">
            <i class="fas fa-cogs" style="font-size: 50px"></i>
            <h2 class="op-8" @click="ParametreGeneraux(1)">
              Paramétres Généraux
            </h2>
            <!-- <div class="pull-right">
              <h3 class="fw-bold op-8">88%</h3>
            </div> -->
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div
          v-if="AfficherModuleBudget != 2 && rolePerso_id != 1"
          class="card card-secondary bg-secondary-gradient"
          style="
            border-radius: 25px 100px 50px;
            border-color: #fff !important;
            border-style: solid;
            box-shadow: 15px -10px #f9d531;
            width: 80%;
            cursor: pointer;
          "
          data-bs-toggle="modal"
          data-bs-target="#largeModal"
        >
          <div class="card-body bubble-shadow">
            <i class="fas fa-money-bill-wave" style="font-size: 50px"></i>
            <h2
              class="op-8"
              data-bs-toggle="modal"
              data-bs-target="#largeModal"
            >
              Gestion Budgétaire
            </h2>
          </div>
        </div>

        <div
          v-else
          class="card card-secondary bg-secondary-gradient"
          style="
            border-radius: 25px 100px 50px;
            border-color: #fff !important;
            border-style: solid;
            box-shadow: 15px -10px #f9d531;
            width: 80%;
            cursor: pointer;
          "
          @click="ParametreGeneraux(2)"
        >
          <div class="card-body bubble-shadow">
            <i class="fas fa-money-bill-wave" style="font-size: 50px"></i>
            <h2 class="op-8" @click="ParametreGeneraux(2)">
              Gestion Budgétaire
            </h2>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div
          v-if="AfficherModulePersonnel != 4 && rolePerso_id != 1"
          class="card card-secondary bg-secondary-gradient"
          style="
            border-radius: 25px 100px 50px;
            border-color: #fff !important;
            border-style: solid;
            box-shadow: 15px -10px #f9d531;
            width: 80%;
            cursor: pointer;
          "
          data-bs-toggle="modal"
          data-bs-target="#largeModal"
        >
          <div class="card-body curves-shadow">
            <i class="icon-people" style="font-size: 50px"></i>
            <h2 class="op-8">Gestion du Personnel</h2>
            <!-- <div class="pull-right">
              <h3 class="fw-bold op-8">70%</h3>
            </div> -->
          </div>
        </div>

        <div
          v-else
          class="card card-secondary bg-secondary-gradient"
          style="
            border-radius: 25px 100px 50px;
            border-color: #fff !important;
            border-style: solid;
            box-shadow: 15px -10px #f9d531;
            width: 80%;
            cursor: pointer;
          "
          @click="ParametreGeneraux(3)"
        >
          <div class="card-body curves-shadow">
            <i class="icon-people" style="font-size: 50px"></i>
            <h2 class="op-8" @click="ParametreGeneraux(3)">
              Gestion du Personnel
            </h2>
            <!-- <div class="pull-right">
              <h3 class="fw-bold op-8">70%</h3>
            </div> -->
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4">
        <div
          v-if="AfficherModuleRapport != 5 && rolePerso_id != 1"
          class="card card-secondary bg-secondary-gradient"
          style="
            border-radius: 25px 100px 50px;
            border-color: #fff !important;
            border-style: solid;
            box-shadow: 15px -10px #f9d531;
            width: 80%;
            cursor: pointer;
          "
          data-bs-toggle="modal"
          data-bs-target="#largeModal"
        >
          <div class="card-body curves-shadow">
            <i class="icon-docs" style="font-size: 50px"></i>
            <h2 class="op-8">Gestion des Rapports</h2>
            <!-- <div class="pull-right">
              <h3 class="fw-bold op-8">70%</h3>
            </div> -->
          </div>
        </div>

        <div
          v-else
          class="card card-secondary"
          style="
            border-radius: 25px 100px 50px;
            border-color: #fff !important;
            border-style: solid;
            box-shadow: 15px -10px #f9d531;
            width: 80%;
            cursor: pointer;
          "
          @click="ParametreGeneraux(4)"
        >
          <div class="card-body skew-shadow">
            <i class="icon-docs" style="font-size: 50px"></i>
            <h2 class="op-8" @click="ParametreGeneraux(4)">
              Gestion des Rapports
            </h2>
            <!-- <div class="pull-right">
              <h3 class="fw-bold op-8">88%</h3>
            </div> -->
          </div>
        </div>
      </div>
      <!-- <div class="col-md-4">
                <div class="card card-secondary bg-secondary-gradient">
                  <div class="card-body bubble-shadow">
                    <h1>188</h1>
                    <h5 class="op-8">Total Sales</h5>
                    <div class="pull-right">
                      <h3 class="fw-bold op-8">25%</h3>
                    </div>
                  </div>
                </div>
              </div> -->
      <div class="col-md-4">
        <div
          v-if="AfficherModuleUtilisateur != 7 && rolePerso_id != 1"
          class="card card-secondary bg-secondary-gradient"
          style="
            border-radius: 25px 100px 50px;
            border-color: #fff !important;
            border-style: solid;
            box-shadow: 15px -10px #f9d531;
            width: 80%;
            cursor: pointer;
          "
          data-bs-toggle="modal"
          data-bs-target="#largeModal"
        >
          <div class="card-body bubble-shadow">
            <i class="icon-user" style="font-size: 50px"></i>
            <h2
              class="op-8"
              data-bs-toggle="modal"
              data-bs-target="#largeModal"
            >
              Gestion Utilisateurs
            </h2>
          </div>
        </div>

        <div
          v-else
          class="card card-secondary bg-secondary-gradient"
          style="
            border-radius: 25px 100px 50px;
            border-color: #fff !important;
            border-style: solid;
            box-shadow: 15px -10px #f9d531;
            width: 80%;
            cursor: pointer;
          "
          @click="ParametreGeneraux(5)"
        >
          <div class="card-body curves-shadow">
            <i class="icon-user" style="font-size: 50px"></i>
            <h2 class="op-8" @click="ParametreGeneraux(5)">
              Gestion Utilisateurs
            </h2>
            <!-- <div class="pull-right">
              <h3 class="fw-bold op-8">70%</h3>
            </div> -->
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="largeModal" tabindex="-1" data-bs-backdrop="static" aria-labelledby="staticBackdropLabel">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title"></h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <h3 style="text-align: center">
              VOUS N'AVEZ PAS ACCES A CE MODULE
              <p>VEUILLEZ CONTACTER L'ADMINITRATEUR SVP ? </p>
            </h3>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Fermer
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheHeader from "../../layouts/TheHeader.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "app",
  components: { TheHeader },
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
    this.getPermission();
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
     rolePerso_id() {
      let objLinea = localStorage.getItem("User");
      let objJson = JSON.parse(objLinea);
      return objJson.role_id;
    },
    nameUserid() {
      let objLinea = localStorage.getItem("User");
      let objJson = JSON.parse(objLinea);
      return objJson.id;
    },
    AfficherModule() {
      // return (id) => {
      //   if (id != null && id != "") {
      const qtereel = this.getterPermission.find(
        (qtreel) => qtreel.utilisateur_id == this.nameUserid
      );

      if (qtereel) {
        return qtereel.module_id;
      }
      return 0;
      //   }
      // };
    },

    AfficherModuleParametre() {
      // return (id) => {
      //   if (id != null && id != "") {
      const qtereel = this.getterPermission.find(
        (qtreel) => qtreel.utilisateur_id == this.nameUserid && qtreel.module_id==6
      );

      if (qtereel) {
        return qtereel.module_id;
      }
      return 0;
      //   }
      // };
    },
     AfficherModuleBudget() {
      // return (id) => {
      //   if (id != null && id != "") {
      const qtereel = this.getterPermission.find(
        (qtreel) => qtreel.utilisateur_id == this.nameUserid && qtreel.module_id==2
      );

      if (qtereel) {
        return qtereel.module_id;
      }
      return 0;
      //   }
      // };
    },
     AfficherModulePersonnel() {
      // return (id) => {
      //   if (id != null && id != "") {
      const qtereel = this.getterPermission.find(
        (qtreel) => qtreel.utilisateur_id == this.nameUserid && qtreel.module_id==4
      );

      if (qtereel) {
        return qtereel.module_id;
      }
      return 0;
      //   }
      // };
    },
    AfficherModuleRapport() {
      // return (id) => {
      //   if (id != null && id != "") {
      const qtereel = this.getterPermission.find(
        (qtreel) => qtreel.utilisateur_id == this.nameUserid && qtreel.module_id==5
      );

      if (qtereel) {
        return qtereel.module_id;
      }
      return 0;
      //   }
      // };
    },
    AfficherModuleUtilisateur() {
      // return (id) => {
      //   if (id != null && id != "") {
      const qtereel = this.getterPermission.find(
        (qtreel) => qtreel.utilisateur_id == this.nameUserid && qtreel.module_id==7
      );

      if (qtereel) {
        return qtereel.module_id;
      }
      return 0;
      //   }
      // };
    },
  },

  methods: {
    ...mapActions("Utilisateurs", ["login", "getUtilisateur", "getPermission"]),

    ParametreGeneraux($id) {
      localStorage.setItem("module_app", $id);
      this.$router.push({
        name: "PageAccueil",
        params: { id: $id },
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
