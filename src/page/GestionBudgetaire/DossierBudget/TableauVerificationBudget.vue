<template>
  <div class="container">
    ddddddddddddddddddddddddddddddddd
    <div class="col-md-12">
      <div class="card" style="box-shadow: 5px 5px #f9d531">
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-bordered border-primary">
              <thead>
                <tr style="border: 1px solid #000 !important">
                  <!-- <th scope="col">#</th> -->
                  <!-- <th scope="col">N</th> -->
                  <th
                    scope="col"
                    style="
                      text-align: center;
                      border: 1px solid #000 !important;
                    "
                  >
                    Nature economique{{ id_dossier }}
                  </th>
                  <th
                    scope="col"
                    style="
                      text-align: center;
                      border: 1px solid #000 !important;
                    "
                  >
                    type financement
                  </th>
                  <th
                    scope="col"
                    style="
                      text-align: center;
                      border: 1px solid #000 !important;
                    "
                  >
                    Bailleur
                  </th>
                  <th
                    scope="col"
                    style="
                      text-align: center;
                      border: 1px solid #000 !important;
                    "
                  >
                    nature depense
                  </th>
                  <th
                    scope="col"
                    style="
                      text-align: center;
                      border: 1px solid #000 !important;
                    "
                  >
                    Dotation Actuelle
                  </th>
                  <th
                    scope="col"
                    style="
                      text-align: center;
                      border: 1px solid #000 !important;
                    "
                  >
                    Report
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
                <!-- <tr v-for="item1 in afficheBudgetParActivite" :key="item1.id">
                  <td style="width: 40%; border: 1px solid #000 !important">
                    {{ afficheNatureEconomique(item1.ligneeconomique_id) }}
                  </td>
                  <td style="width: 10%; border: 1px solid #000 !important">
                    {{ afficheTypeFinancement(item1.type_financement_id) }}
                  </td>
                  <td style="width: 20%; border: 1px solid #000 !important">
                    {{ afficheSourceFinancement(item1.source_financement_id) }}
                  </td>
                  <td style="width: 10%; border: 1px solid #000 !important">
                    {{ afficheGrandeNature(item1.nature_depense_id) }}
                  </td>
                  <td
                    style="
                      width: 10%;
                      text-align: right;
                      border: 1px solid #000 !important;
                    "
                  >
                    {{
                      formatageSommeSansFCFA(
                        parseFloat(item1.dotation_actuelle)
                      )
                    }}
                  </td>
                  <td
                    style="
                      width: 15%;
                      text-align: right;
                      border: 1px solid #000 !important;
                    "
                  >
                    {{
                      formatageSommeSansFCFA(parseFloat(item1.dotation_report))
                    }}
                  </td>
                  <td
                    style="
                      width: 15%;
                      text-align: right;
                      border: 1px solid #000 !important;
                    "
                  >
                    <span
                      class="badge rounded-pill bg-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#largeModal1"
                      style="cursor: pointer"
                      @click.prevent="AfficheModalModification(item1.id)"
                      >Modifier</span
                    >
                    <span
                      class="badge bg-danger"
                      style="cursor: pointer"
                      @click.prevent="supprimerDotationNotifie(item1.id)"
                      >Supprimer</span
                    >
                  </td>
                </tr> -->
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <!-- modal de modification -->

    <!-- modal de modification -->

    <div class="modal fade" id="largeModal1" tabindex="-1">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Modifier Buddget Report</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="col-12">
                <label for="inputNanme4" class="form-label">Exercice</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputNanme4"
                  :value="exerciceBudgetaire"
                  style="border: 1px solid #000; background-color: #dcdcdc"
                  readonly
                />
              </div>
              <div class="col-12">
                <label class="form-label">Activité</label>
                <model-list-select
                  :list="libelleActivite"
                  v-model="modNatureDepense.activite_id"
                  option-value="id"
                  option-text="libelle"
                  placeholder="select item"
                  style="border: 1px solid #000"
                >
                </model-list-select>
              </div>
              <div class="col-12">
                <label for="inputNanme4" class="form-label">Dotation</label>

                <money3
                  v-bind="config"
                  v-model="modNatureDepense.dotation"
                  class="form-control"
                  id="inputNanme4"
                  style="border: 1px solid #000"
                ></money3>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              @click.prevent="this.getDotationReport()"
            >
              Fermer
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click.prevent="modificationSection()"
              data-bs-dismiss="modal"
            >
              Modifier
            </button>
          </div>
        </div>
      </div>
    </div>
  
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import moment from "moment";
import { ModelListSelect } from "vue-search-select";
import {
  formatageSomme,
  formatageSommeSansFCFA,
} from "../../Repositories/Repository";
export default {
  components: { ModelListSelect },
  data() {
    return {
      ajouterReport: {
        activite_id: 0,
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
     props:["id_dossier"],
  created() {
    this.getActivite();
    this.getExerciceBudgetaire();
    // this.getGroupeActivitebudgetReport();
    this.getDotationReport();
  },
  computed: {
     ...mapGetters("parametrage", [
      "getterProjet",
      "getterActivite",
      "getterTypeFinancement",
      "getterExerciceBudgetaire",
      "getterDotationNotifie",
      "getterNatureEconomique",

      "getterNatureDepense",
      "getterSousBudget",
      "getterBailleur",
      "getterDotationReport",
      "getterDotationRessourcePropre",
      "getterDotationAutreRessource",
      "getterListeBudgetEclate",
    ]),
     afficheGrandeNature() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.getterNatureDepense.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.libelle;
          }
          return 0;
        }
      };
    },

    afficheNatureEconomique() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.getterNatureEconomique.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.libelle_code;
          }
          return 0;
        }
      };
    },
    afficheSourceFinancement() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.getterBailleur.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.libelle;
          }
          return 0;
        }
      };
    },
    afficheTypeFinancement() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.getterTypeFinancement.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.libelle;
          }
          return 0;
        }
      };
    },
afficheBudgetParActivite() {
      return this.getterListeBudgetEclate.filter(
        (item) => item.dossier_id == this.id_dossier
      );
    },
   
    exerciceBudgetaire() {
      //   return (id) => {
      //     if (id != null && id != "") {
      const qtereel = this.getterExerciceBudgetaire.find(
        (qtreel) => qtreel.encours == 1
      );

      if (qtereel) {
        return qtereel.annee - 1;
      }
      return 0;
      //     }
      //   };
    },
  },
  methods: {
     ...mapActions("parametrage", [
      "getActivite",
      "getSousBudget",
      "getBudgetEclate",
      "getDotationRessourcePropre",
      "getTypeFinancement",
      "getBailleur",
      "getProjet",
      "getNatureDepense",
      "getExerciceBudgetaire",
      "getDotationNotifie",
      "getDotationReport",
      "getNatureEconomique",
      "ajouterBudgetEclate",
      "getDotationAutreRessource",
    ]),

    actualisation() {
      // this.getGroupeActivitebudgetReport();
      this.getDotationReport();
    },
    AfficheModalModification(id) {
      this.modNatureDepense = this.getterDotationReport.find(
        (items) => items.id == id
      );
    },
    EnregistrerSection() {
      var objetDirect1 = {
        activite_id: this.ajouterReport.activite_id,
        dotation: this.ajouterReport.dotation,
        exercice: this.exerciceBudgetaire,
      };

      this.ajouterDotationReport(objetDirect1);

      this.ajouterReport = {
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

      this.modifierDotationReport(objetDirect1);
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
