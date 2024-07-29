<template>
  <div class="container">
    <div class="col-md-12">
      <div class="card" style="box-shadow: 5px 5px #f9d531">
        <div class="card-header">
          <div class="page-header">
            <h6 class="fw-bold mb-3">Liste Budgets Visé</h6>
            <ul class="breadcrumbs mb-3">
              <li class="nav-home">
                <a href="#">
                  <i class="icon-home"></i>
                </a>
              </li>
              <li class="separator">
                <i class="icon-arrow-right"></i>
              </li>
              <li class="nav-item">
                <a href="#">Gestion budgétaire</a>
              </li>
              <li class="separator">
                <i class="icon-arrow-right"></i>
              </li>
              <li class="nav-item">
                <a href="#">Budget Visé</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-bordered border-primary">
              <thead>
                <tr>
                  <th
                    scope="col"
                    style="
                      text-align: center;
                      border: 1px solid #000 !important;
                    "
                  >
                    Numéro
                  </th>
                  <th
                    scope="col"
                    style="
                      text-align: center;
                      border: 1px solid #000 !important;
                    "
                  >
                    Activité
                  </th>

                  <th
                    scope="col"
                    style="
                      text-align: center;
                      border: 1px solid #000 !important;
                    "
                  >
                    Total (FCFA)
                  </th>
                  <th
                    scope="col"
                    style="
                      text-align: center;
                      border: 1px solid #000 !important;
                    "
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item1, index) in getterActivite" :key="item1.id">
                  <td style="border: 1px solid #000 !important">
                    {{ index + 1 }}
                  </td>
                  <td style="width: 55%; border: 1px solid #000 !important">
                    {{ item1.code }}-{{ item1.libelle }}
                  </td>
                  <td
                    style="text-align: right; border: 1px solid #000 !important"
                  >
                    {{ formatageSommeSansFCFA(parseFloat(52)) }}
                  </td>
                  <td style="border: 1px solid #000 !important">
                    <span
                      class="badge bg-dark"
                      style="cursor: pointer"
                      @click.prevent="voirBudgett(item1.id)"
                      >Budget</span
                    >
                    <span
                      class="badge bg-info"
                      style="cursor: pointer"
                      @click.prevent="voirSousBudget(item1.id)"
                      >Composante</span
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <!-- modal de modification -->

    <!-- modal de modification -->
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import moment from "moment";
// import { ModelListSelect } from "vue-search-select";
import {
  formatageSomme,
  formatageSommeSansFCFA,
} from "../../Repositories/Repository";
export default {
  //   components: { ModelListSelect },
  data() {
    return {
      ajouterNatureDepense: {
        activite_id: "",
        dotation: "",
      },
      modNatureDepense: {
        activite_id: "",
        dotation: "",
      },

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
    this.getActivite();
    //this.getExerciceBudgetaire();
    //  // this.getGroupeActivitebudgetNotifie()
    // this.getDotationNotifie();
  },
  computed: {
    ...mapGetters("parametrage", [
      "getterActivite",
      "getterExerciceBudgetaire",
      "getterDotationNotifie",
      "getterGrpeActiviteBudgetNotifie",
    ]),
    AfficheMontantBudget($id) {
      return this.getterListeBudgetEclate
        .filter((item) => item.activite_id == $id)
        .reduce(
          (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation_total),
          0
        )
        .toFixed(0);
    },
    libelleActivite() {
      let collet = [];
      this.getterActivite.filter((item) => {
        let data = {
          id: item.id,
          libelle: item.code.concat("  ", item.libelle),
        };
        collet.push(data);
        //}
      });
      return collet;
    },
    libelleActiviteTableau() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.getterActivite.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.code.concat(" - ", qtereel.libelle);
          }
          return 0;
        }
      };
    },
    listeBudgetNotifie() {
      return (id) => {
        if (id != null && id != "") {
          return this.getterDotationNotifie.filter(
            (qtreel) => qtreel.activite_id == id
          );
        }
      };
    },
    exerciceBudgetaire() {
      //   return (id) => {
      //     if (id != null && id != "") {
      const qtereel = this.getterExerciceBudgetaire.find(
        (qtreel) => qtreel.encours == 1
      );

      if (qtereel) {
        return qtereel.annee;
      }
      return 0;
      //     }
      //   };
    },
  },
  methods: {
    ...mapActions("parametrage", [
      "getActivite",
      "getExerciceBudgetaire",
      "getDotationNotifie",
      "ajouterDotationNotifie",
      "modifierDotationNotifie",
      "supprimerDotationNotifie",
      "getGroupeActivitebudgetNotifie",
    ]),
    voirSousBudget(id,id1) {
      this.$router.push({
        name: "afficheBudgetDesComposante",
        params: { id: id , id1: id1},
      });
    },
  voirBudgett(id) {
      this.$router.push({
        name: "afficheBudgetViseParActivite",
        params: { id: id},
      });
    },
    AfficheModalModification(id) {
      this.modNatureDepense = this.getterDotationNotifie.find(
        (items) => items.id == id
      );
    },
    EnregistrerSection() {
      var objetDirect1 = {
        activite_id: this.ajouterNatureDepense.activite_id,
        dotation: this.ajouterNatureDepense.dotation,
        exercice: this.exerciceBudgetaire,
      };

      this.ajouterDotationNotifie(objetDirect1);
      this.ajouterNatureDepense = {
        activite_id: "",
        dotation: "",
      };
    },

    modificationSection() {
      var objetDirect1 = {
        id: this.modNatureDepense.id,

        activite_id: this.modNatureDepense.activite_id,
        dotation: this.modNatureDepense.dotation,
        exercice: this.exerciceBudgetaire,
      };

      this.modifierDotationNotifie(objetDirect1);
      this.modNatureDepense = {};
    },
    formatageSomme: formatageSomme,
    formatageSommeSansFCFA: formatageSommeSansFCFA,
    formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },
  },
};
</script>
