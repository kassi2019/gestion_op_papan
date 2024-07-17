<template>
  <div class="container">
    {{ GroupeParNatureEconomique }}
    <div class="col-md-12">
      <div class="card" style="box-shadow: 5px 5px #f9d531">
        <div class="card-header">
          <div class="d-flex align-items-center">
            <h4 class="card-title">Imprimer Exécution</h4>
            <span
              class="badge rounded-pill bg-primary"
              style="cursor: pointer"
              @click.prevent="genererEnPdf4()"
              >Exporter en Pdf</span
            >
          </div>
          <div class="d-flex align-items-center">
            <span
              style="cursor: pointer"
              class="badge rounded-pill bg-primary"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
              >Recherche</span
            >
          </div>
        </div>
        <div class="card-body" id="printMe45" ref="table">
          <!-- Modal -->
          <table class="table table-bordered border-primary">
            <tr>
              <td
                style="
                  text-align: center;
                  border: 1px solid #000 !important;
                  width: 40%;
                "
              >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <h6 style="font-size: 12px">
                  Ministère des Ressources Animales et Halieutiques<br />
                  ------------------------- <br />
                  Fonds d'Aide à la Production Avicole Nationale <br />
                  <img
                    src="../../../public/csslogin/images/logo1.jpg"
                    width="150px;"
                  />
                </h6>
                <!-- <img src="/optimisation/skin/img/log3.png" width="80px;"  /> -->
              </td>
              <td
                style="
                  text-align: center;
                  border: 1px solid #000 !important;
                  width: 20%;
                "
              >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <img
                  src="../../../public/assets/img/amoirie.png"
                  width="50px;"
                  style="text-align: center"
                />

                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </td>

              <td
                style="
                  text-align: center;
                  border: 1px solid #000 !important;
                  width: 40%;
                "
              >
                <h6 style="font-size: 12px">
                  République de Côte d'Ivoire <br />
                  ------------------------- <br />
                  Union-Discipline-Travail
                </h6>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <!-- <img src="/optimisation/skin/img/log3.png" width="80px;"  /> -->
              </td>
            </tr>
          </table>
          <h3 style="text-align: center; border: 1px solid #000">EXECUTION</h3>
        </div>
      </div>
    </div>

    <!-- fenetre de recherche -->
    <div
      class="offcanvas offcanvas-end"
      tabindex="-1"
      id="offcanvasRight"
      aria-labelledby="offcanvasRightLabel"
    >
      <div class="offcanvas-header">
        <h5 id="offcanvasRightLabel">Recherche</h5>
        <button
          type="button"
          class="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">
        <form>
          <div class="col-12">
            <label class="form-label">Activité</label>
            <model-list-select
              :list="getterBudgetViseGroupeParActivite"
              v-model="activite_id"
              option-value="activite_id"
              option-text="plan_activite"
              placeholder="select item"
              style="border: 1px solid #000"
            >
            </model-list-select>
          </div>
          <div class="col-12">
            <label class="form-label">Composante</label>
            <model-list-select
              :list="libelleSousBudget"
              v-model="sous_budget_id"
              option-value="id"
              option-text="libelle"
              placeholder="select item"
              style="border: 1px solid #000"
            >
            </model-list-select>
          </div>
          <br />
          <div class="d-flex align-items-center">
            <span
              style="cursor: pointer"
              
               class="badge rounded-pill bg-primary"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
              >Recherche</span
            >
             <span
              style="cursor: pointer"
              class="badge rounded-pill bg-primary"
              @click="videChamps()"
              >Vider</span
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { ModelListSelect } from "vue-search-select";
// import moment from "moment";
import {
  formatageSomme,
  formatageSommeSansFCFA,
} from "../Repositories/Repository";
export default {
  components: { ModelListSelect },
  data() {
    return {
      activite_id: 0,
      sous_budget_id: 0,
      config: {
        prefix: "",
        suffix: "",
        thousands: ",",
        decimal: ".",
        precision: 0,
        disableNegative: false,
        disabled: false,
        min: null,
        max: null,
        allowBlank: false,
        minimumNumberOfCharacters: 0,
        shouldRound: true,
        focusOnRight: false,
      },
    };
  },
  created() {
    this.getBudgetEclateViseGroupeParActivte();
    this.getSousBudget();
  },
  computed: {
    ...mapGetters("parametrage", [
      "getterActivite",
      "getterBudgetViseGroupeParActivite",
      "getterListeOPgloba",
      "getterBailleur",
      "getterNatureEconomique",
      "getterEntreprise",
      "getterSousBudget",
      "getterListeBudgetEclate",
      "getterExerciceBudgetaire",
      "getterDotationNotifie",
      "getterFacture",
      "getterBudgetViseParActivite",
      "getterNatureDepense",
    ]),

    GroupeParNatureEconomique() {
      // return (id) => {
      if (this.sous_budget_id == 0 && this.activite_id != 0) {
        let objet = this.getterBudgetViseParActivite.filter(
          (item) => item.activite_id == this.activite_id
        );
        //  let vm=this
        let array_exercie = [];
        if (objet.length > 0) {
          objet.forEach(function (val) {
            array_exercie.push(val.ligneeconomique_id);
          });
          let unique = [...new Set(array_exercie)];

          if (unique.length == 0) {
            return [];
          }
          return unique.sort((a, b) => (a.unique > b.unique ? 1 : -1));
        }
        return [];
        // };
      } else {
        let objet = this.getterBudgetViseParActivite.filter(
          (item) => item.sous_budget_id == this.sous_budget_id
        );
        //  let vm=this
        let array_exercie = [];
        if (objet.length > 0) {
          objet.forEach(function (val) {
            array_exercie.push(val.ligneeconomique_id);
          });
          let unique = [...new Set(array_exercie)];

          if (unique.length == 0) {
            return [];
          }
          return unique.sort((a, b) => (a.unique > b.unique ? 1 : -1));
        }
        return [];
        // };
      }
    },
    libelleSousBudget() {
      let collet = [];
      this.getterSousBudget.filter((item) => {
        if (item.activite_id == this.activite_id) {
          let data = {
            id: item.id,
            libelle: item.libelle,
          };
          collet.push(data);
        }
      });
      return collet;
    },
  },
  methods: {
    ...mapActions("parametrage", [
      "getSousBudget",
      "getBudgetEclateViseGroupeParActivte",
      "getListeOrdrePaiementGlobal",
      "getBailleur",
      "getEntreprise",
      "getListeFacture",
      "getBudgetViseParActvite",
      "getNatureEconomique",
      "getActivite",
      "getNatureDepense",
      "getExerciceBudgetaire",
      "getDotationNotifie",
      "ajouterDotationNotifie",
      "modifierDotationNotifie",
      "supprimerDotationNotifie",
      "getGroupeActivitebudgetNotifie",
      "getBudgetEclate",
    ]),
    formatageSomme: formatageSomme,
    formatageSommeSansFCFA: formatageSommeSansFCFA,
      videChamps() {
        this.sous_budget_id = 0
      return this.activite_id = 0;
    },
    genererEnPdf4() {
      this.$htmlToPaper("printMe45");
    },
  },
  watch: {
    activite_id: function (value) {
      let objet = {
        id: value,
      };
      this.getBudgetViseParActvite(objet);
    },
  },
};
</script>

<style scoped>
#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td,
#customers th {
  padding: 8px;
}
</style>
