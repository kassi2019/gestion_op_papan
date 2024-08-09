<template>
  <div >
    <TheHeader></TheHeader>
    <br /><br /><br /><br /><br /><br /><br />
    <div class="row" style="background-image: url(../../../public/csslogin/images/font.jpg)">
      <div class="col-md-4">
        <div
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
            <i class="fas fa-cogs" style="  font-size: 50px;"></i>
            <h2 class="op-8" @click="ParametreGeneraux(1)">Paramétres Généraux</h2>
            <!-- <div class="pull-right">
              <h3 class="fw-bold op-8">88%</h3>
            </div> -->
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div
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
             <i class="fas fa-money-bill-wave" style="  font-size: 50px;"></i>
            <h2 class="op-8" @click="ParametreGeneraux(2)">
              Gestion Budgétaire
            </h2>
            <!-- <div class="pull-right">
              <h3 class="fw-bold op-8">25%</h3>
            </div> -->
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div
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
             <i class="icon-people" style="  font-size: 50px;"></i>
            <h2 class="op-8" @click="ParametreGeneraux(3)">Gestion du Personnel</h2>
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
             <i class="icon-docs" style="  font-size: 50px;"></i>
            <h2 class="op-8"  @click="ParametreGeneraux(4)">Gestion des Rapports</h2>
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
             <i class="icon-user" style="  font-size: 50px;"></i>
            <h2 class="op-8"  @click="ParametreGeneraux(5)">Gestion Utilisateurs</h2>
            <!-- <div class="pull-right">
              <h3 class="fw-bold op-8">70%</h3>
            </div> -->
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
