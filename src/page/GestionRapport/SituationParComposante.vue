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
          <!-- <div class="d-flex align-items-center">
            <span
              style="cursor: pointer"
              class="badge rounded-pill bg-primary"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
              >Recherche</span
            >
          </div> -->
        </div>
        <div class="card-body" id="printMe45">
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
            SITUATION D'EXECUTION PAR COMPOSANTE
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
                      background-color: #faec7f !important;
                      font-size: 9px !important;
                    "
                  >
                    N°
                  </th>
                  <th
                    scope="col"
                    style="
                      text-align: center;
                      background-color: #faec7f !important;
                      width: 50%;
                      font-size: 9px !important;
                    "
                  >
                    COMPOSANTE
                  </th>
                  <th
                    scope="col"
                    style="
                      text-align: center;
                      background-color: #faec7f !important;
                      width: 20%;
                      font-size: 9px !important;
                    "
                  >
                    BUDGET INITIAL(A)
                  </th>
                  <th
                    scope="col"
                    style="
                      text-align: center;
                      background-color: #faec7f !important;
                      font-size: 9px !important;
                    "
                  >
                    BUDGET ACTUEL(B)
                  </th>
                  <th
                    scope="col"
                    style="
                      text-align: center;
                      background-color: #faec7f !important;
                      font-size: 9px !important;
                    "
                  >
                    EXECUTION (OP DIRECT + OP DEFINITIF)(C)
                  </th>
                  <th
                    scope="col"
                    style="
                      text-align: center;
                      background-color: #faec7f !important;
                      font-size: 9px !important;
                    "
                  >
                    EXECUTION PROVISOIRE(D)
                  </th>
                  <th
                    scope="col"
                    style="
                      text-align: center;
                      background-color: #faec7f !important;
                      font-size: 9px !important;
                    "
                  >
                    TAUX EXECUTION (E=(C/B)*100)(%)
                  </th>
                  <th
                    scope="col"
                    style="
                      text-align: center;
                      background-color: #faec7f !important;
                      font-size: 9px !important;
                    "
                  >
                    DISPONIBLE 1 (F=B-C)
                  </th>
                  <th
                    scope="col"
                    style="
                      text-align: center;
                      background-color: #faec7f !important;
                      font-size: 9px !important;
                    "
                  >
                    DISPONIBLE 2 (G =B-(C+D))
                  </th>
                  <th
                    scope="col"
                    style="
                      text-align: center;
                      background-color: #faec7f !important;
                      font-size: 9px !important;
                    "
                  >
                    NBRE OP (DEFINITIF ET DIRECT)
                  </th>
                  <th
                    scope="col"
                    style="
                      text-align: center;
                      background-color: #faec7f !important;
                      font-size: 9px !important;
                    "
                  >
                    NBRE OP (PROVISOIRE NON REGULARSE)
                  </th>
                </tr>
              </thead>
              <tbody v-for="item in groupeParActivite" :key="item">
                <tr>
                  <td colspan="11" style="text-align: center">
                    {{ libellePlan(item) }}
                  </td>
                </tr>
                <tr
                  v-for="(data, index) in afficherSousBudget(item)"
                  :key="data.id"
                >
                  <td>{{ index + 1 }}</td>
                  <td>{{ data.composante }}</td>

                  <td style="text-align: right">
                    {{ data.montant_initial }}
                  </td>
                  <td style="text-align: right">
                    {{
                      formatageSommeSansFCFA(parseFloat(data.montant_actuelle))
                    }}
                  </td>
                  <td style="text-align: right">
                    {{
                      formatageSommeSansFCFA(
                        parseFloat(data.execution_definitif)
                      )
                    }}
                  </td>

                  <td style="text-align: right">
                    {{
                      formatageSommeSansFCFA(
                        parseFloat(data.execution_provisoire)
                      )
                    }}
                  </td>

                  <td style="text-align: right">
                    {{ parseFloat(data.taux) }}
                  </td>
                  <td style="text-align: right">
                    {{ formatageSommeSansFCFA(parseFloat(data.disponible1)) }}
                  </td>
                  <td style="text-align: right">
                    {{ formatageSommeSansFCFA(parseFloat(data.disponible2)) }}
                  </td>
                  <td style="text-align: right">
                    {{ data.nbre_op_definitif }}
                  </td>
                  <td style="text-align: right">
                    {{ data.nbre_op_provisoire }}
                  </td>
                </tr>
                <tr>
                  <td
                    colspan="2"
                    style="
                      text-align: right;
                      background-color: #e2ad3b !important;
                    "
                  >
                    TOTAL
                  </td>
                  <td
                    style="
                      text-align: right;
                      background-color: #e2ad3b !important;
                    "
                  >
                    {{
                      formatageSommeSansFCFA(
                        parseFloat(Totalmontant_initial(item))
                      )
                    }}
                  </td>
                  <td
                    style="
                      text-align: right;
                      background-color: #e2ad3b !important;
                    "
                  >
                    {{
                      formatageSommeSansFCFA(
                        parseFloat(Totalmontant_actuelle(item))
                      )
                    }}
                  </td>
                  <td
                    style="
                      text-align: right;
                      background-color: #e2ad3b !important;
                    "
                  >
                    {{
                      formatageSommeSansFCFA(
                        parseFloat(Totalexecution_definitif(item))
                      )
                    }}
                  </td>
                  <td
                    style="
                      text-align: right;
                      background-color: #e2ad3b !important;
                    "
                  >
                    {{
                      formatageSommeSansFCFA(
                        parseFloat(Totalexecution_provisoire(item))
                      )
                    }}
                  </td>
                  <td
                    style="
                      text-align: right;
                      background-color: #e2ad3b !important;
                    "
                  >
                    {{
                      (
                        (parseFloat(Totalexecution_definitif(item)) /
                          parseFloat(Totalmontant_actuelle(item))) *
                        100
                      ).toFixed(2)
                    }}
                  </td>
                  <td
                    style="
                      text-align: right;
                      background-color: #e2ad3b !important;
                    "
                  >
                    {{
                      formatageSommeSansFCFA(parseFloat(Totaldisponible1(item)))
                    }}
                  </td>
                  <td
                    style="
                      text-align: right;
                      background-color: #e2ad3b !important;
                    "
                  >
                    {{
                      formatageSommeSansFCFA(parseFloat(Totaldisponible2(item)))
                    }}
                  </td>
                  <td
                    style="
                      text-align: right;
                      background-color: #e2ad3b !important;
                    "
                  >
                    {{ parseFloat(Totalnbre_op_provisoire(item)) }}
                  </td>
                  <td
                    style="
                      text-align: right;
                      background-color: #e2ad3b !important;
                    "
                  >
                    {{ parseFloat(Totalnbre_op_definitif(item)) }}
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
// import { ModelListSelect } from "vue-search-select";
import moment from "moment";

import {
  formatageSomme,
  formatageSommeSansFCFA,
} from "../Repositories/Repository";
export default {
  components: {
    // ModelListSelect,
  },
  data() {
    return {
      globalOptions: {
        name: "_blank",
        specs: ["fullscreen=yes", "titlebar=yes", "scrollbars=yes"],
        styles: [
          "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
          "https://unpkg.com/kidlat-css/css/kidlat.css",
          "./landscape.css", // must be the path of your public folder
        ],
        timeout: 1000,
        autoClose: true,
        windowTitle: window.document.title, // whatever's the window title of the opener
      },
      localLandScapeOptions: {
        styles: [
          "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
          "https://unpkg.com/kidlat-css/css/kidlat.css",
          "./landscape.css", // must be the path of your public folder
        ],
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
    //  this.getActivite();
    this.getRapportSituationParComposante();
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
    ...mapGetters("Rapport", ["gettersSituationParComposante"]),

    afficherSousBudget() {
      return (id) => {
        if (id != null && id != "") {
          return this.gettersSituationParComposante.filter(
            (qtreel) => qtreel.activite_id == id
          );
        }
      };
    },
    libellePlan() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettersSituationParComposante.find(
            (qtreel) => qtreel.activite_id == id
          );

          if (qtereel) {
            return qtereel.plan_activite;
          }
          return 0;
        }
      };
    },
    groupeParActivite() {
      // return (id) => {

      let objet = this.gettersSituationParComposante;
      //  let vm=this
      let array_exercie = [];
      if (objet.length > 0) {
        objet.forEach(function (val) {
          array_exercie.push(val.activite_id);
        });
        let unique = [...new Set(array_exercie)];
        console.log(unique);
        if (unique.length == 0) {
          return [];
        }
        return unique.sort((a, b) => (a.unique > b.unique ? 1 : -1));
      }
      return [];
      // };
    },
  },
  methods: {
    ...mapActions("Rapport", ["getRapportSituationParComposante"]),
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
    Totalmontant_initial($id) {
      return this.gettersSituationParComposante
        .filter((item) => item.activite_id == $id)
        .reduce(
          (prec, cur) => parseFloat(prec) + parseFloat(cur.montant_initial),
          0
        )
        .toFixed(0);
    },
    Totalmontant_actuelle($id) {
      return this.gettersSituationParComposante
        .filter((item) => item.activite_id == $id)
        .reduce(
          (prec, cur) => parseFloat(prec) + parseFloat(cur.montant_actuelle),
          0
        )
        .toFixed(0);
    },
    Totalexecution_definitif($id) {
      return this.gettersSituationParComposante
        .filter((item) => item.activite_id == $id)
        .reduce(
          (prec, cur) => parseFloat(prec) + parseFloat(cur.execution_definitif),
          0
        )
        .toFixed(0);
    },
    Totalexecution_provisoire($id) {
      return this.gettersSituationParComposante
        .filter((item) => item.activite_id == $id)
        .reduce(
          (prec, cur) =>
            parseFloat(prec) + parseFloat(cur.execution_provisoire),
          0
        )
        .toFixed(0);
    },
    Totaldisponible1($id) {
      return this.gettersSituationParComposante
        .filter((item) => item.activite_id == $id)
        .reduce(
          (prec, cur) => parseFloat(prec) + parseFloat(cur.disponible1),
          0
        )
        .toFixed(0);
    },
    Totaldisponible2($id) {
      return this.gettersSituationParComposante
        .filter((item) => item.activite_id == $id)
        .reduce(
          (prec, cur) => parseFloat(prec) + parseFloat(cur.disponible2),
          0
        )
        .toFixed(0);
    },
    Totalnbre_op_provisoire($id) {
      return this.gettersSituationParComposante
        .filter((item) => item.activite_id == $id)
        .reduce(
          (prec, cur) => parseFloat(prec) + parseFloat(cur.nbre_op_provisoire),
          0
        )
        .toFixed(0);
    },
    Totalnbre_op_definitif($id) {
      return this.gettersSituationParComposante
        .filter((item) => item.activite_id == $id)
        .reduce(
          (prec, cur) => parseFloat(prec) + parseFloat(cur.nbre_op_definitif),
          0
        )
        .toFixed(0);
    },
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
          "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
          "https://unpkg.com/kidlat-css/css/kidlat.css",
        ],
      };
      // this.$htmlToPaper("printMe45,localOptions)
      this.$htmlToPaper("printMe45", localOptions);
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
