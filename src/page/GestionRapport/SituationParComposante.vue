<template>
  <div class="container">
    <div class="col-md-12">
      <div class="card" style="box-shadow: 5px 5px #f9d531">
        <div class="card-header">
          <div class="d-flex align-items-center">
            <h4 class="card-title">Imprimer OP par composante</h4>
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
        <div
          class="card-body"
          id="printMe45"
     
         
        >
          <!-- Modal -->
          <table class="table table-bordered border-primary">
            <tr>
              <td
                style="
                  text-align: center;

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
          <h6 style="text-align: center; border: 0.5px solid #000">
            LISTE DES ORDRES DE PAIEMENT
          </h6>

          <div class="table-responsive">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <!-- <th scope="col">#</th> -->
                  <!-- <th scope="col">N</th> -->
                  <th
                    scope="col"
                    style="
                      text-align: center;

                      font-size: 10px !important;
                    "
                  >
                    N°OP
                  </th>
                  <th
                    scope="col"
                    style="
                      text-align: center;

                      width: 50%;
                      font-size: 10px !important;
                    "
                  >
                    OBJET DEPENSE
                  </th>
                  <th
                    scope="col"
                    style="
                      text-align: center;

                      width: 20%;
                      font-size: 10px !important;
                    "
                  >
                    BENEFICIAIRE
                  </th>
                  <th
                    scope="col"
                    style="
                      text-align: center;

                      font-size: 10px !important;
                    "
                  >
                    MONTANT
                  </th>
                  <th
                    scope="col"
                    style="
                      text-align: center;

                      font-size: 10px !important;
                    "
                  >
                    DATE DECISION
                  </th>
                  <th
                    scope="col"
                    style="
                      text-align: center;

                      font-size: 10px !important;
                    "
                  >
                    DECISION
                  </th>
                  <th
                    scope="col"
                    style="
                      text-align: center;

                      font-size: 10px !important;
                    "
                  >
                    N°FACTURE
                  </th>
                  <!-- <th
                    scope="col"
                    style="
                      text-align: center;
                      

                      font-size: 10px !important;
                    "
                  >
                    Disponible2 (G =B-(C +D))
                  </th> -->
                </tr>
              </thead>
              <tbody v-for="data in AfficherParComposante" :key="data.id">
                <tr style="font-size: 10px !important">
                  <td colspan="7" style="text-align: center">
                    {{ data.libelle }}
                  </td>
                </tr>
                <tr
                  v-for="data1 in AfficheOPParComposante(data.id)"
                  :key="data1.id"
                >
                  <td>{{ data1.numero_ordre_paiement }}</td>
                  <td>{{ data1.objet_depense }}</td>
                  <td>{{ data1.entreprise }}</td>
                  <td style="text-align: right">
                    {{
                      formatageSommeSansFCFA(
                        parseFloat(data1.montant_prestation)
                      )
                    }}
                  </td>
                  <td>{{ formaterDate(data1.date_decision) }}</td>
                  <td>{{ afficheDecision(data1.decision_cf) }}</td>
                  <td>
                    {{ data1.numero_facture }} du
                    {{ formaterDate(data1.date_facture) }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
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
              :list="afficheActivite"
              v-model="activite_id"
              option-value="id"
              option-text="libelle"
              placeholder="select item"
              style="border: 0.5px solid #000"
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
              style="border: 0.5px solid #000"
            >
            </model-list-select>
          </div>
          <div class="col-12">
            <label class="form-label">Type depense</label>
            <model-list-select
              :list="typeDepense"
              v-model="type_depense_id"
              option-value="id"
              option-text="libelle"
              placeholder="select item"
              style="border: 0.5px solid #000"
            >
            </model-list-select>
          </div>
          <div class="col-12">
            <label class="form-label">Type Ordre Paiement</label>
            <model-list-select
              :list="typeOrdrePaiement"
              v-model="type_ordre_paiement_id"
              option-value="id"
              option-text="libelle"
              placeholder="select item"
              style="border: 0.5px solid #000"
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
import moment from "moment";

import {
  formatageSomme,
  formatageSommeSansFCFA,
} from "../Repositories/Repository";
export default {
  components: {
    ModelListSelect,
  },
  data() {
    return {
      globalOptions: {
            name: '_blank',
            specs: [
              'fullscreen=yes',
              'titlebar=yes',
              'scrollbars=yes'
            ],
            styles: [
              'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
              'https://unpkg.com/kidlat-css/css/kidlat.css',
              './landscape.css', // must be the path of your public folder
            ],
            timeout: 1000,
            autoClose: true,
            windowTitle: window.document.title, // whatever's the window title of the opener
          },
          localLandScapeOptions: {
            styles: [
              'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
              'https://unpkg.com/kidlat-css/css/kidlat.css',
              './landscape.css', // must be the path of your public folder
            ]
          },
      typeDepense: [
        {
          id: "0",
          libelle: "OP AUTRE DEPENSE",
        },
        {
          id: "1",
          libelle: "OP PERSONNEL",
        },
      ],
      typeOrdrePaiement: [
        {
          id: "1",
          libelle: "OP Provisoire",
        },
        {
          id: "2",
          libelle: "OP Direct",
        },
        {
          id: "3",
          libelle: "OP Annulation",
        },
        {
          id: "4",
          libelle: "OP Définitif",
        },
      ],
      activite_id: 0,
      sous_budget_id: 0,
      type_ordre_paiement_id: 0,
      type_depense_id: 0,
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
    // this.getBudgetEclateViseGroupeParActivte();
    this.getSousBudget();
    this.getActivite();
    this.getRapportOp();
    // this.getNatureDepense();
    // this.getNatureEconomique();
    // this.getListeOrdrePaiementGlobal();
  },
  computed: {
    ...mapGetters("parametrage", [
      "getterActivite",
      "getterOpParActivite",
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
    ...mapGetters("Rapport", ["gettersListeOPRapport"]),
    AfficherParComposante() {
      if (this.activite_id != 0 && this.sous_budget_id == 0) {
        return this.getterSousBudget.filter(
          (item) => item.activite_id == this.activite_id
        );
      } else {
        return this.getterSousBudget.filter(
          (item) => item.id == this.sous_budget_id
        );
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
    afficheActivite() {
      let collet = [];
      this.getterActivite.filter((item) => {
        // if (item.activite_id == this.activite_id) {
        let data = {
          id: item.id,
          libelle: item.code.concat(" ", item.libelle),
        };
        collet.push(data);
        // }
      });
      return collet;
    },
  },
  methods: {
    ...mapActions("Rapport", ["getRapportOp"]),
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
      "getOpParActvite",
    ]),
    afficheDecision($id) {
      if ($id == 1) {
        return "Visé";
      } else if ($id == 2) {
        return "Visé avec observation";
      } else if ($id == 3) {
        return "Différé";
      } else if ($id == 4) {
        return "Réjetté";
      } else {
        return "En attente";
      }
    },
    AfficheOPParComposante(id) {
      if (
        this.activite_id != 0 &&
        this.sous_budget_id == 0 &&
        this.type_ordre_paiement_id == 0 &&
        this.type_depense_id == 0
      ) {
        return this.gettersListeOPRapport.filter(
          (item) =>
            item.activite_id == this.activite_id && item.sous_budget_id == id
        );
      } else if (
        this.activite_id != 0 &&
        this.sous_budget_id != 0 &&
        this.type_ordre_paiement_id == 0 &&
        this.type_depense_id == 0
      ) {
        return this.gettersListeOPRapport.filter(
          (item) =>
            item.activite_id == this.activite_id && item.sous_budget_id == id
        );
      } else if (
        this.activite_id != 0 &&
        this.sous_budget_id != 0 &&
        this.type_ordre_paiement_id != 0 &&
        this.type_depense_id == 0
      ) {
        return this.gettersListeOPRapport.filter(
          (item) =>
            item.activite_id == this.activite_id &&
            item.sous_budget_id == id &&
            item.type_ordre_paiement == this.type_ordre_paiement_id
        );
      } else if (
        this.activite_id != 0 &&
        this.sous_budget_id != 0 &&
        this.type_ordre_paiement_id == 0 &&
        this.type_depense_id != 0
      ) {
        return this.gettersListeOPRapport.filter(
          (item) =>
            item.activite_id == this.activite_id &&
            item.sous_budget_id == id &&
            item.type_depense == this.type_depense_id
        );
      } else if (
        this.activite_id != 0 &&
        this.sous_budget_id != 0 &&
        this.type_ordre_paiement_id != 0 &&
        this.type_depense_id != 0
      ) {
        return this.gettersListeOPRapport.filter(
          (item) =>
            item.activite_id == this.activite_id &&
            item.sous_budget_id == id &&
            item.type_depense == this.type_depense_id &&
            item.type_ordre_paiement == this.type_ordre_paiement_id
        );
      } else if (
        this.activite_id != 0 &&
        this.sous_budget_id == 0 &&
        this.type_ordre_paiement_id != 0 &&
        this.type_depense_id == 0
      ) {
        return this.gettersListeOPRapport.filter(
          (item) =>
            item.activite_id == this.activite_id &&
            item.sous_budget_id == id &&
            item.type_ordre_paiement == this.type_ordre_paiement_id
        );
      } else if (
        this.activite_id != 0 &&
        this.sous_budget_id == 0 &&
        this.type_ordre_paiement_id == 0 &&
        this.type_depense_id != 0
      ) {
        return this.gettersListeOPRapport.filter(
          (item) =>
            item.activite_id == this.activite_id &&
            item.sous_budget_id == id &&
            item.type_depense == this.type_depense_id
        );
      } else {
        return 0;
      }
    },
    formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },
    formatageSomme: formatageSomme,
    formatageSommeSansFCFA: formatageSommeSansFCFA,

    videChamps() {
      this.sous_budget_id = 0;
      return (this.activite_id = 0);
    },
    genererEnPdf4() {
      const localOptions = {
            styles: [
              'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
              'https://unpkg.com/kidlat-css/css/kidlat.css'
             
            ]
          };
     // this.$htmlToPaper("printMe45,localOptions)
      this.$htmlToPaper('printMe45', localOptions);

      
    },

  },
  watch: {
    activite_id: function (value) {
      let objet = {
        id: value,
      };
      this.getBudgetViseParActvite(objet);
      this.getOpParActvite(objet);
    },
  },
};
</script>

<style scoped>

/* #customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td,
#customers th {
  padding: 8px;
} */
</style>
