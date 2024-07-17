<template>
  <div class="container">
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
        <div
          class="card-body"
          id="printMe45"
          ref="table"
          style="border: 1px solid #000"
        >
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
          <h6 style="text-align: center; border: 1px solid #000">
            EXECUTION PAR NATURE ECONOMIQUE
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
                      border: 1px solid #000 !important;
                      width: 50%;
                      font-size: 10px !important;
                    "
                  >
                    Nature économique
                  </th>
                  <th
                    scope="col"
                    style="
                      text-align: center;
                      border: 1px solid #000 !important;

                      font-size: 10px !important;
                    "
                  >
                    Budget Initial ( A )
                  </th>
                  <th
                    scope="col"
                    style="
                      text-align: center;
                      border: 1px solid #000 !important;

                      font-size: 10px !important;
                    "
                  >
                    Budget Actuel ( B )
                  </th>
                  <th
                    scope="col"
                    style="
                      text-align: center;
                      border: 1px solid #000 !important;

                      font-size: 10px !important;
                    "
                  >
                    Montant Exécute (Direct+Définitif)( C )
                  </th>
                  <th
                    scope="col"
                    style="
                      text-align: center;
                      border: 1px solid #000 !important;

                      font-size: 10px !important;
                    "
                  >
                    Montant OP Provisoire(D)
                  </th>
                  <th
                    scope="col"
                    style="
                      text-align: center;
                      border: 1px solid #000 !important;

                      font-size: 10px !important;
                    "
                  >
                    Taux Exécution (E=(C/D)*100) (%)
                  </th>
                  <th
                    scope="col"
                    style="
                      text-align: center;
                      border: 1px solid #000 !important;

                      font-size: 10px !important;
                    "
                  >
                    Disponible1 (F=B-C)
                  </th>
                  <th
                    scope="col"
                    style="
                      text-align: center;
                      border: 1px solid #000 !important;

                      font-size: 10px !important;
                    "
                  >
                    Disponible2 (G =B-(C +D))
                  </th>
                </tr>
              </thead>
              <tbody v-if="activite_id != 0">
                <tr>
                  <td colspan="8" style="border: 1px solid #000 !important">
                    Activité : {{ libelleActiviteTableau(activite_id) }}
                  </td>
                </tr>
                <tr v-if="sous_budget_id != 0">
                  <td colspan="8" style="border: 1px solid #000 !important">
                    Composante : {{ libellleSousBudget(sous_budget_id) }}
                  </td>
                </tr>
                <tr
                  v-for="item1 in GroupeParNatureEconomiqueBienService"
                  :key="item1"
                >
                  <td style="border: 1px solid #000 !important">
                    {{ LibelleNatureEconomique(item1) }}
                  </td>
                  <td
                    style="
                      border: 1px solid #000 !important;
                      text-align: right !important;
                    "
                  >
                    {{
                      formatageSommeSansFCFA(
                        parseFloat(AfficherBudgetInitialBienService(item1))
                      )
                    }}
                  </td>
                  <td
                    style="
                      border: 1px solid #000 !important;
                      text-align: right !important;
                    "
                  >
                    {{
                      formatageSommeSansFCFA(
                        parseFloat(AfficherBudgetActuelBiensService(item1))
                      )
                    }}
                  </td>
                  <td
                    style="
                      border: 1px solid #000 !important;
                      text-align: right !important;
                    "
                  >
                    {{
                      formatageSommeSansFCFA(
                        parseFloat(
                          MontantExecuteOpDirectetDefBienService(item1)
                        )
                      )
                    }}
                  </td>
                  <td
                    style="
                      border: 1px solid #000 !important;
                      text-align: right !important;
                    "
                  >
                    {{
                      formatageSommeSansFCFA(
                        parseFloat(
                          MontantExecuteOpProvisoireBienService(item1)
                        )
                      )
                    }}
                  </td>
                  <td
                    style="
                      border: 1px solid #000 !important;
                      text-align: right !important;
                    "
                  >
                    {{ afficheTauxExecution(item1) }}
                  </td>
                  <td
                    style="
                      border: 1px solid #000 !important;
                      text-align: right !important;
                    "
                  >
                    {{ formatageSommeSansFCFA(parseFloat(afficheDisponible(item1))) }}
                  </td>
                  <td
                    style="
                      border: 1px solid #000 !important;
                      text-align: right !important;
                    "
                  >
                    {{ formatageSommeSansFCFA(parseFloat(afficheDisponible2(item1))) }}
                  </td>
                </tr>
                <tr>
                  <td
                    style="
                      border: 1px solid #000 !important;
                      text-align: right !important;
                      background-color: #c79f4b !important;
                    "
                  >
                    Sous Total Biens et Service
                  </td>
                  <td
                    style="
                      border: 1px solid #000 !important;
                      text-align: right !important;
                      background-color: #c79f4b !important;
                    "
                  >
                    {{
                      formatageSommeSansFCFA(
                        parseFloat(TotalInitialBienService)
                      )
                    }}
                  </td>
                  <td
                    style="
                      border: 1px solid #000 !important;
                      text-align: right !important;
                      background-color: #c79f4b !important;
                    "
                  >
                    {{
                      formatageSommeSansFCFA(
                        parseFloat(TotalActuelBiensService)
                      )
                    }}
                  </td>
                  <td
                    style="
                      border: 1px solid #000 !important;
                      text-align: right !important;
                      background-color: #c79f4b !important;
                    "
                  >
                     {{
                      formatageSommeSansFCFA(
                        parseFloat(TotalExecuteOpDirectetDefBienService)
                      )
                    }}
                  </td>
                  <td
                    style="
                      border: 1px solid #000 !important;
                      text-align: right !important;
                      background-color: #c79f4b !important;
                    "
                  >
                    5
                  </td>
                  <td
                    style="
                      border: 1px solid #000 !important;
                      text-align: right !important;
                      background-color: #c79f4b !important;
                    "
                  >
                    3
                  </td>
                  <td
                    style="
                      border: 1px solid #000 !important;
                      text-align: right !important;
                      background-color: #c79f4b !important;
                    "
                  >
                    3
                  </td>
                  <td
                    style="
                      border: 1px solid #000 !important;
                      text-align: right !important;
                      background-color: #c79f4b !important;
                    "
                  >
                    3
                  </td>
                </tr>
                <tr
                  v-for="item1 in GroupeParNatureEconomiquePersonnel"
                  :key="item1"
                >
                  <td style="border: 1px solid #000 !important">
                    {{ LibelleNatureEconomique(item1) }}
                  </td>
                  <td
                    style="
                      border: 1px solid #000 !important;
                      text-align: right !important;
                    "
                  >
                    {{
                      formatageSommeSansFCFA(
                        parseFloat(AfficherBudgetInitialPersonnel(item1))
                      )
                    }}
                  </td>
                  <td
                    style="
                      border: 1px solid #000 !important;
                      text-align: right !important;
                    "
                  >
                    {{
                      formatageSommeSansFCFA(
                        parseFloat(AfficherBudgetActuelPersonnel(item1))
                      )
                    }}
                  </td>
                  <td
                    style="
                      border: 1px solid #000 !important;
                      text-align: right !important;
                    "
                  >
                    {{ item1 }}
                  </td>
                  <td
                    style="
                      border: 1px solid #000 !important;
                      text-align: right !important;
                    "
                  >
                    {{ item1 }}
                  </td>
                  <td
                    style="
                      border: 1px solid #000 !important;
                      text-align: right !important;
                    "
                  >
                    {{ item1 }}
                  </td>
                  <td
                    style="
                      border: 1px solid #000 !important;
                      text-align: right !important;
                    "
                  >
                    {{ item1 }}
                  </td>
                  <td
                    style="
                      border: 1px solid #000 !important;
                      text-align: right !important;
                    "
                  >
                    {{ item1 }}
                  </td>
                </tr>
                <tr>
                  <td
                    style="
                      border: 1px solid #000 !important;
                      text-align: right !important;
                      background-color: #c79f4b !important;
                    "
                  >
                    Sous Total Personnel
                  </td>
                  <td
                    style="
                      border: 1px solid #000 !important;
                      text-align: right !important;
                      background-color: #c79f4b !important;
                    "
                  >
                    {{
                      formatageSommeSansFCFA(parseFloat(TotalInitialPersonnel))
                    }}
                  </td>
                  <td
                    style="
                      border: 1px solid #000 !important;
                      text-align: right !important;
                      background-color: #c79f4b !important;
                    "
                  >
                    {{
                      formatageSommeSansFCFA(parseFloat(TotalActuelPersonnel))
                    }}
                  </td>
                  <td
                    style="
                      border: 1px solid #000 !important;
                      text-align: right !important;
                      background-color: #c79f4b !important;
                    "
                  >
                    3
                  </td>
                  <td
                    style="
                      border: 1px solid #000 !important;
                      text-align: right !important;
                      background-color: #c79f4b !important;
                    "
                  >
                    3
                  </td>
                  <td
                    style="
                      border: 1px solid #000 !important;
                      text-align: right !important;
                      background-color: #c79f4b !important;
                    "
                  >
                    3
                  </td>
                  <td
                    style="
                      border: 1px solid #000 !important;
                      text-align: right !important;
                      background-color: #c79f4b !important;
                    "
                  >
                    3
                  </td>
                  <td
                    style="
                      border: 1px solid #000 !important;
                      text-align: right !important;
                      background-color: #c79f4b !important;
                    "
                  >
                    3
                  </td>
                </tr>
                <tr
                  v-for="item1 in GroupeParNatureEconomiqueTransfert"
                  :key="item1"
                >
                  <td style="border: 1px solid #000 !important">
                    {{ LibelleNatureEconomique(item1) }}
                  </td>
                  <td
                    style="
                      border: 1px solid #000 !important;
                      text-align: right !important;
                    "
                  >
                    {{
                      formatageSommeSansFCFA(
                        parseFloat(AfficherBudgetInitialTransferts(item1))
                      )
                    }}
                  </td>
                  <td
                    style="
                      border: 1px solid #000 !important;
                      text-align: right !important;
                    "
                  >
                    {{
                      formatageSommeSansFCFA(
                        parseFloat(AfficherBudgetActuelTransferts(item1))
                      )
                    }}
                  </td>
                  <td
                    style="
                      border: 1px solid #000 !important;
                      text-align: right !important;
                    "
                  >
                    {{ item1 }}
                  </td>
                  <td
                    style="
                      border: 1px solid #000 !important;
                      text-align: right !important;
                    "
                  >
                    {{ item1 }}
                  </td>
                  <td
                    style="
                      border: 1px solid #000 !important;
                      text-align: right !important;
                    "
                  >
                    {{ item1 }}
                  </td>
                  <td
                    style="
                      border: 1px solid #000 !important;
                      text-align: right !important;
                    "
                  >
                    {{ item1 }}
                  </td>
                  <td
                    style="
                      border: 1px solid #000 !important;
                      text-align: right !important;
                    "
                  >
                    {{ item1 }}
                  </td>
                </tr>
                <tr>
                  <td
                    style="
                      border: 1px solid #000 !important;
                      text-align: right !important;
                      background-color: #c79f4b !important;
                    "
                  >
                    Sous Total Transfert
                  </td>
                  <td
                    style="
                      border: 1px solid #000 !important;
                      text-align: right !important;
                      background-color: #c79f4b !important;
                    "
                  >
                    {{
                      formatageSommeSansFCFA(parseFloat(TotalActuelTransferts))
                    }}
                  </td>
                  <td
                    style="
                      border: 1px solid #000 !important;
                      text-align: right !important;
                      background-color: #c79f4b !important;
                    "
                  >
                    2
                  </td>
                  <td
                    style="
                      border: 1px solid #000 !important;
                      text-align: right !important;
                      background-color: #c79f4b !important;
                    "
                  >
                    {{
                      formatageSommeSansFCFA(parseFloat(TotalActuelTransferts))
                    }}
                  </td>
                  <td
                    style="
                      border: 1px solid #000 !important;
                      text-align: right !important;
                      background-color: #c79f4b !important;
                    "
                  >
                    3
                  </td>
                  <td
                    style="
                      border: 1px solid #000 !important;
                      text-align: right !important;
                      background-color: #c79f4b !important;
                    "
                  >
                    3
                  </td>
                  <td
                    style="
                      border: 1px solid #000 !important;
                      text-align: right !important;
                      background-color: #c79f4b !important;
                    "
                  >
                    3
                  </td>
                  <td
                    style="
                      border: 1px solid #000 !important;
                      text-align: right !important;
                      background-color: #c79f4b !important;
                    "
                  >
                    3
                  </td>
                </tr>
                <tr
                  v-for="item1 in GroupeParNatureEconomiqueInvestissement"
                  :key="item1"
                >
                  <td style="border: 1px solid #000 !important">
                    {{ LibelleNatureEconomique(item1) }}
                  </td>
                  <td
                    style="
                      border: 1px solid #000 !important;
                      text-align: right !important;
                    "
                  >
                    {{
                      formatageSommeSansFCFA(
                        parseFloat(AfficherBudgetInitialInvestissements(item1))
                      )
                    }}
                  </td>
                  <td
                    style="
                      border: 1px solid #000 !important;
                      text-align: right !important;
                    "
                  >
                    {{
                      formatageSommeSansFCFA(
                        parseFloat(AfficherBudgetActuelInvestissements(item1))
                      )
                    }}
                  </td>
                  <td
                    style="
                      border: 1px solid #000 !important;
                      text-align: right !important;
                    "
                  >
                    {{ item1 }}
                  </td>
                  <td
                    style="
                      border: 1px solid #000 !important;
                      text-align: right !important;
                    "
                  >
                    {{ item1 }}
                  </td>
                  <td
                    style="
                      border: 1px solid #000 !important;
                      text-align: right !important;
                    "
                  >
                    {{ item1 }}
                  </td>
                  <td
                    style="
                      border: 1px solid #000 !important;
                      text-align: right !important;
                    "
                  >
                    {{ item1 }}
                  </td>
                  <td
                    style="
                      border: 1px solid #000 !important;
                      text-align: right !important;
                    "
                  >
                    {{ item1 }}
                  </td>
                </tr>
                <tr>
                  <td
                    style="
                      border: 1px solid #000 !important;
                      text-align: right !important;
                      background-color: #c79f4b !important;
                    "
                  >
                    Sous Total Investissement
                  </td>
                  <td
                    style="
                      border: 1px solid #000 !important;
                      text-align: right !important;
                      background-color: #c79f4b !important;
                    "
                  >
                    {{
                      formatageSommeSansFCFA(
                        parseFloat(TotalActuelInvestissements)
                      )
                    }}
                  </td>
                  <td
                    style="
                      border: 1px solid #000 !important;
                      text-align: right !important;
                      background-color: #c79f4b !important;
                    "
                  >
                    {{
                      formatageSommeSansFCFA(
                        parseFloat(TotalActuelInvestissements)
                      )
                    }}
                  </td>
                  <td
                    style="
                      border: 1px solid #000 !important;
                      text-align: right !important;
                      background-color: #c79f4b !important;
                    "
                  >
                    3
                  </td>
                  <td
                    style="
                      border: 1px solid #000 !important;
                      text-align: right !important;
                      background-color: #c79f4b !important;
                    "
                  >
                    3
                  </td>
                  <td
                    style="
                      border: 1px solid #000 !important;
                      text-align: right !important;
                      background-color: #c79f4b !important;
                    "
                  >
                    3
                  </td>
                  <td
                    style="
                      border: 1px solid #000 !important;
                      text-align: right !important;
                      background-color: #c79f4b !important;
                    "
                  >
                    3
                  </td>
                  <td
                    style="
                      border: 1px solid #000 !important;
                      text-align: right !important;
                      background-color: #c79f4b !important;
                    "
                  >
                    3
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
    this.getNatureDepense();
    this.getNatureEconomique();
    this.getListeOrdrePaiementGlobal();
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

    LibelleNatureEconomique() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.getterNatureEconomique.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.code.concat(" ", qtereel.libelle);
          }
          return 0;
        }
      };
    },
    codeNatureDepense() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.getterNatureDepense.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.code;
          }
          return 0;
        }
      };
    },
    libellleSousBudget() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.getterSousBudget.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.libelle;
          }
          return 0;
        }
      };
    },
    libelleActiviteTableau() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.getterBudgetViseGroupeParActivite.find(
            (qtreel) => qtreel.activite_id == id
          );

          if (qtereel) {
            return qtereel.plan_activite;
          }
          return 0;
        }
      };
    },
    GroupeParNatureEconomiqueBienService() {
      // return (id) => {
      if (this.sous_budget_id == 0 && this.activite_id != 0) {
        let objet = this.getterBudgetViseParActivite.filter(
          (item) =>
            item.activite_id == this.activite_id &&
            this.codeNatureDepense(item.nature_depense_id) == 2
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
          (item) =>
            item.sous_budget_id == this.sous_budget_id &&
            this.codeNatureDepense(item.nature_depense_id) == 2
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
    GroupeParNatureEconomiquePersonnel() {
      // return (id) => {
      if (this.sous_budget_id == 0 && this.activite_id != 0) {
        let objet = this.getterBudgetViseParActivite.filter(
          (item) =>
            item.activite_id == this.activite_id &&
            this.codeNatureDepense(item.nature_depense_id) == 1
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
          (item) =>
            item.sous_budget_id == this.sous_budget_id &&
            this.codeNatureDepense(item.nature_depense_id) == 1
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
    GroupeParNatureEconomiqueTransfert() {
      // return (id) => {
      if (this.sous_budget_id == 0 && this.activite_id != 0) {
        let objet = this.getterBudgetViseParActivite.filter(
          (item) =>
            item.activite_id == this.activite_id &&
            this.codeNatureDepense(item.nature_depense_id) == 3
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
          (item) =>
            item.sous_budget_id == this.sous_budget_id &&
            this.codeNatureDepense(item.nature_depense_id) == 3
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
    GroupeParNatureEconomiqueInvestissement() {
      // return (id) => {
      if (this.sous_budget_id == 0 && this.activite_id != 0) {
        let objet = this.getterBudgetViseParActivite.filter(
          (item) =>
            item.activite_id == this.activite_id &&
            this.codeNatureDepense(item.nature_depense_id) == 4
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
          (item) =>
            item.sous_budget_id == this.sous_budget_id &&
            this.codeNatureDepense(item.nature_depense_id) == 4
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

    // debut : permettre d afficher le montant total initial par nature economique pour la depense biens service //
    TotalInitialBienService() {
      if (this.sous_budget_id == 0 && this.activite_id != 0) {
        return this.getterBudgetViseParActivite
          .filter(
            (item) =>
              this.codeNatureDepense(item.nature_depense_id) == 2 &&
              item.initial == 1
          )
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation_total),
            0
          )
          .toFixed(0);
      } else {
        return this.getterBudgetViseParActivite
          .filter(
            (item) =>
              this.codeNatureDepense(item.nature_depense_id) == 2 &&
              item.sous_budget_id == this.sous_budget_id &&
              item.initial == 1
          )
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation_total),
            0
          )
          .toFixed(0);
      }
    },
    //fin
    // debut : permettre d afficher le montant total actuel par nature economique pour la depense du biens service //
    TotalActuelBiensService() {
      if (this.sous_budget_id == 0 && this.activite_id != 0) {
        return this.getterBudgetViseParActivite
          .filter(
            (item) =>
              this.codeNatureDepense(item.nature_depense_id) == 2 &&
              item.actuelle == 1
          )
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation_total),
            0
          )
          .toFixed(0);
      } else {
        return this.getterBudgetViseParActivite
          .filter(
            (item) =>
              this.codeNatureDepense(item.nature_depense_id) == 2 &&
              item.sous_budget_id == this.sous_budget_id &&
              item.actuelle == 1
          )
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation_total),
            0
          )
          .toFixed(0);
      }
    },
    // fin

    // debut : permettre d afficher le montant total initial par nature economique pour la depense personnel //
    TotalInitialPersonnel() {
      if (this.sous_budget_id == 0 && this.activite_id != 0) {
        return this.getterBudgetViseParActivite
          .filter(
            (item) =>
              this.codeNatureDepense(item.nature_depense_id) == 1 &&
              item.initial == 1
          )
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation_total),
            0
          )
          .toFixed(0);
      } else {
        return this.getterBudgetViseParActivite
          .filter(
            (item) =>
              this.codeNatureDepense(item.nature_depense_id) == 1 &&
              item.sous_budget_id == this.sous_budget_id &&
              item.initial == 1
          )
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation_total),
            0
          )
          .toFixed(0);
      }
    },
    //fin
    // debut : permettre d afficher le montant total actuel par nature economique pour la depense Personnel //
    TotalActuelPersonnel() {
      if (this.sous_budget_id == 0 && this.activite_id != 0) {
        return this.getterBudgetViseParActivite
          .filter(
            (item) =>
              this.codeNatureDepense(item.nature_depense_id) == 1 &&
              item.actuelle == 1
          )
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation_total),
            0
          )
          .toFixed(0);
      } else {
        return this.getterBudgetViseParActivite
          .filter(
            (item) =>
              this.codeNatureDepense(item.nature_depense_id) == 1 &&
              item.sous_budget_id == this.sous_budget_id &&
              item.actuelle == 1
          )
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation_total),
            0
          )
          .toFixed(0);
      }
    },
    // fin

    // debut : permettre d afficher le montant total initial par nature economique pour la depense Transferts //
    TotalInitialTransferts() {
      if (this.sous_budget_id == 0 && this.activite_id != 0) {
        return this.getterBudgetViseParActivite
          .filter(
            (item) =>
              this.codeNatureDepense(item.nature_depense_id) == 3 &&
              item.initial == 1
          )
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation_total),
            0
          )
          .toFixed(0);
      } else {
        return this.getterBudgetViseParActivite
          .filter(
            (item) =>
              this.codeNatureDepense(item.nature_depense_id) == 3 &&
              item.sous_budget_id == this.sous_budget_id &&
              item.initial == 1
          )
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation_total),
            0
          )
          .toFixed(0);
      }
    },
    //fin
    // debut : permettre d afficher le montant total actuel par nature economique pour la depense Transferts //
    TotalActuelTransferts() {
      if (this.sous_budget_id == 0 && this.activite_id != 0) {
        return this.getterBudgetViseParActivite
          .filter(
            (item) =>
              this.codeNatureDepense(item.nature_depense_id) == 3 &&
              item.actuelle == 1
          )
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation_total),
            0
          )
          .toFixed(0);
      } else {
        return this.getterBudgetViseParActivite
          .filter(
            (item) =>
              this.codeNatureDepense(item.nature_depense_id) == 3 &&
              item.sous_budget_id == this.sous_budget_id &&
              item.actuelle == 1
          )
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation_total),
            0
          )
          .toFixed(0);
      }
    },
    // fin

    // debut : permettre d afficher le montant total initial par nature economique pour la depense Investissements //
    TotalInitialInvestissements() {
      if (this.sous_budget_id == 0 && this.activite_id != 0) {
        return this.getterBudgetViseParActivite
          .filter(
            (item) =>
              this.codeNatureDepense(item.nature_depense_id) == 4 &&
              item.initial == 1
          )
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation_total),
            0
          )
          .toFixed(0);
      } else {
        return this.getterBudgetViseParActivite
          .filter(
            (item) =>
              this.codeNatureDepense(item.nature_depense_id) == 4 &&
              item.sous_budget_id == this.sous_budget_id &&
              item.initial == 1
          )
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation_total),
            0
          )
          .toFixed(0);
      }
    },
    //fin
    // debut : permettre d afficher le montant total actuel par nature economique pour la depense Investissements //
    TotalActuelInvestissements() {
      if (this.sous_budget_id == 0 && this.activite_id != 0) {
        return this.getterBudgetViseParActivite
          .filter(
            (item) =>
              this.codeNatureDepense(item.nature_depense_id) == 4 &&
              item.actuelle == 1
          )
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation_total),
            0
          )
          .toFixed(0);
      } else {
        return this.getterBudgetViseParActivite
          .filter(
            (item) =>
              this.codeNatureDepense(item.nature_depense_id) == 4 &&
              item.sous_budget_id == this.sous_budget_id &&
              item.actuelle == 1
          )
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation_total),
            0
          )
          .toFixed(0);
      }
    },
      // fin

      
       // debut : permettre d afficher total executer direct et definitif par nature economique pour la depense biens service //
    TotalExecuteOpDirectetDefBienService() {
      if (this.sous_budget_id == 0 && this.activite_id != 0) {
        return this.getterOpParActivite
          .filter(
            (item) =>
              (this.codeNatureDepense(item.nature_depense_id) == 2 &&
                
                item.type_ordre_paiement == 2) ||
              (this.codeNatureDepense(item.nature_depense_id) == 2 &&
                
                item.type_ordre_paiement == 4)
          )
          .reduce(
            (prec, cur) =>
              parseFloat(prec) + parseFloat(cur.montant_prestation),
            0
          )
          .toFixed(0);
      } else {
        return this.getterOpParActivite
          .filter(
            (item) =>
              (
                this.codeNatureDepense(item.nature_depense_id) == 2 &&
                item.sous_budget_id == this.sous_budget_id &&
                item.type_ordre_paiement == 2) ||
              (
                this.codeNatureDepense(item.nature_depense_id) == 2 &&
                item.sous_budget_id == this.sous_budget_id &&
                item.type_ordre_paiement == 4)
          )
          .reduce(
            (prec, cur) =>
              parseFloat(prec) + parseFloat(cur.montant_prestation),
            0
          )
          .toFixed(0);
      }
    },

      // fin
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
      "getOpParActvite",
    ]),
    formatageSomme: formatageSomme,
      formatageSommeSansFCFA: formatageSommeSansFCFA,

      // DEBUT AFFICHER LE TAUX EXECUTION PAR NATIRE ECONOMIQUE
      afficheTauxExecution($id) {
          return ((parseFloat(this.MontantExecuteOpDirectetDefBienService($id)) / parseFloat(this.AfficherBudgetActuelBiensService($id))) * 100).toFixed(2);
},
      // FIN
      // DEBUT  AFFICHER DISPONIBLE 1
  afficheDisponible($id) {
          return (parseFloat(this.AfficherBudgetActuelBiensService($id))-parseFloat(this.MontantExecuteOpDirectetDefBienService($id)));
},
      // FIN
// DEBUT  AFFICHER DISPONIBLE 2
  afficheDisponible2($id) {
          return (parseFloat(this.AfficherBudgetActuelBiensService($id))-(parseFloat(this.MontantExecuteOpDirectetDefBienService($id))+parseFloat(this.MontantExecuteOpProvisoireBienService($id))));
},
      // FIN
    // debut : permettre d afficher le montant executer direct et definitif par nature economique pour la depense biens service //
    MontantExecuteOpDirectetDefBienService($id) {
      if (this.sous_budget_id == 0 && this.activite_id != 0) {
        return this.getterOpParActivite
          .filter(
            (item) =>
              (this.codeNatureDepense(item.nature_depense_id) == 2 &&
                item.nature_economique_id == $id &&
                item.type_ordre_paiement == 2) ||
              (this.codeNatureDepense(item.nature_depense_id) == 2 &&
                item.nature_economique_id == $id &&
                item.type_ordre_paiement == 4)
          )
          .reduce(
            (prec, cur) =>
              parseFloat(prec) + parseFloat(cur.montant_prestation),
            0
          )
          .toFixed(0);
      } else {
        return this.getterOpParActivite
          .filter(
            (item) =>
              (item.nature_economique_id == $id &&
                this.codeNatureDepense(item.nature_depense_id) == 2 &&
                item.sous_budget_id == this.sous_budget_id &&
                item.type_ordre_paiement == 2) ||
              (item.nature_economique_id == $id &&
                this.codeNatureDepense(item.nature_depense_id) == 2 &&
                item.sous_budget_id == this.sous_budget_id &&
                item.type_ordre_paiement == 4)
          )
          .reduce(
            (prec, cur) =>
              parseFloat(prec) + parseFloat(cur.montant_prestation),
            0
          )
          .toFixed(0);
      }
    },

      // fin
    // debut : permettre d afficher le montant executer OP PROVISOIRE par nature economique pour la depense biens service //
    MontantExecuteOpProvisoireBienService($id) {
      if (this.sous_budget_id == 0 && this.activite_id != 0) {
        return this.getterOpParActivite
          .filter(
            (item) =>
              (this.codeNatureDepense(item.nature_depense_id) == 2 &&
                item.nature_economique_id == $id &&
                item.type_ordre_paiement == 1 && item.regularisation == 0 ) 
          )
          .reduce(
            (prec, cur) =>
              parseFloat(prec) + parseFloat(cur.montant_prestation),
            0
          )
          .toFixed(0);
      } else {
        return this.getterOpParActivite
          .filter(
            (item) =>
              (item.nature_economique_id == $id &&
                this.codeNatureDepense(item.nature_depense_id) == 2 &&
                item.sous_budget_id == this.sous_budget_id &&
                item.type_ordre_paiement == 1 && item.regularisation == 0 ) 
          )
          .reduce(
            (prec, cur) =>
              parseFloat(prec) + parseFloat(cur.montant_prestation),
            0
          )
          .toFixed(0);
      }
    },

    // fin
    // debut : permettre d afficher le montant initial par nature economique pour la depense biens service //
    AfficherBudgetInitialBienService($id) {
      if (this.sous_budget_id == 0 && this.activite_id != 0) {
        return this.getterBudgetViseParActivite
          .filter(
            (item) =>
              this.codeNatureDepense(item.nature_depense_id) == 2 &&
              item.ligneeconomique_id == $id &&
              item.initial == 1
          )
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation_total),
            0
          )
          .toFixed(0);
      } else {
        return this.getterBudgetViseParActivite
          .filter(
            (item) =>
              item.ligneeconomique_id == $id &&
              this.codeNatureDepense(item.nature_depense_id) == 2 &&
              item.sous_budget_id == this.sous_budget_id &&
              item.initial == 1
          )
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation_total),
            0
          )
          .toFixed(0);
      }
    },

    // fin
    // debut : permettre d afficher le montant actuel par nature economique pour la depense du biens service //
    AfficherBudgetActuelBiensService($id) {
      if (this.sous_budget_id == 0 && this.activite_id != 0) {
        return this.getterBudgetViseParActivite
          .filter(
            (item) =>
              this.codeNatureDepense(item.nature_depense_id) == 2 &&
              item.ligneeconomique_id == $id &&
              item.actuelle == 1
          )
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation_total),
            0
          )
          .toFixed(0);
      } else {
        return this.getterBudgetViseParActivite
          .filter(
            (item) =>
              item.ligneeconomique_id == $id &&
              this.codeNatureDepense(item.nature_depense_id) == 2 &&
              item.sous_budget_id == this.sous_budget_id &&
              item.actuelle == 1
          )
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation_total),
            0
          )
          .toFixed(0);
      }
    },
    // fin

    // debut : permettre d afficher le montant initial par nature economique pour la depense Personnel //
    AfficherBudgetInitialPersonnel($id) {
      if (this.sous_budget_id == 0 && this.activite_id != 0) {
        return this.getterBudgetViseParActivite
          .filter(
            (item) =>
              this.codeNatureDepense(item.nature_depense_id) == 1 &&
              item.ligneeconomique_id == $id &&
              item.initial == 1
          )
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation_total),
            0
          )
          .toFixed(0);
      } else {
        return this.getterBudgetViseParActivite
          .filter(
            (item) =>
              item.ligneeconomique_id == $id &&
              this.codeNatureDepense(item.nature_depense_id) == 1 &&
              item.sous_budget_id == this.sous_budget_id &&
              item.initial == 1
          )
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation_total),
            0
          )
          .toFixed(0);
      }
    },

    // fin
    // debut : permettre d afficher le montant actuel par nature economique pour la depense du Personnel //
    AfficherBudgetActuelPersonnel($id) {
      if (this.sous_budget_id == 0 && this.activite_id != 0) {
        return this.getterBudgetViseParActivite
          .filter(
            (item) =>
              this.codeNatureDepense(item.nature_depense_id) == 1 &&
              item.ligneeconomique_id == $id &&
              item.actuelle == 1
          )
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation_total),
            0
          )
          .toFixed(0);
      } else {
        return this.getterBudgetViseParActivite
          .filter(
            (item) =>
              item.ligneeconomique_id == $id &&
              this.codeNatureDepense(item.nature_depense_id) == 1 &&
              item.sous_budget_id == this.sous_budget_id &&
              item.actuelle == 1
          )
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation_total),
            0
          )
          .toFixed(0);
      }
    },
    // fin
    // debut : permettre d afficher le montant initial par nature economique pour la depense Transferts //
    AfficherBudgetInitialTransferts($id) {
      if (this.sous_budget_id == 0 && this.activite_id != 0) {
        return this.getterBudgetViseParActivite
          .filter(
            (item) =>
              this.codeNatureDepense(item.nature_depense_id) == 3 &&
              item.ligneeconomique_id == $id &&
              item.initial == 1
          )
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation_total),
            0
          )
          .toFixed(0);
      } else {
        return this.getterBudgetViseParActivite
          .filter(
            (item) =>
              item.ligneeconomique_id == $id &&
              this.codeNatureDepense(item.nature_depense_id) == 3 &&
              item.sous_budget_id == this.sous_budget_id &&
              item.initial == 1
          )
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation_total),
            0
          )
          .toFixed(0);
      }
    },

    // fin
    // debut : permettre d afficher le montant actuel par nature economique pour la depense du Transferts //
    AfficherBudgetActuelTransferts($id) {
      if (this.sous_budget_id == 0 && this.activite_id != 0) {
        return this.getterBudgetViseParActivite
          .filter(
            (item) =>
              this.codeNatureDepense(item.nature_depense_id) == 3 &&
              item.ligneeconomique_id == $id &&
              item.actuelle == 1
          )
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation_total),
            0
          )
          .toFixed(0);
      } else {
        return this.getterBudgetViseParActivite
          .filter(
            (item) =>
              item.ligneeconomique_id == $id &&
              this.codeNatureDepense(item.nature_depense_id) == 3 &&
              item.sous_budget_id == this.sous_budget_id &&
              item.actuelle == 1
          )
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation_total),
            0
          )
          .toFixed(0);
      }
    },
    // fin

    // debut : permettre d afficher le montant initial par nature economique pour la depense Investissements //
    AfficherBudgetInitialInvestissements($id) {
      if (this.sous_budget_id == 0 && this.activite_id != 0) {
        return this.getterBudgetViseParActivite
          .filter(
            (item) =>
              this.codeNatureDepense(item.nature_depense_id) == 4 &&
              item.ligneeconomique_id == $id &&
              item.initial == 1
          )
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation_total),
            0
          )
          .toFixed(0);
      } else {
        return this.getterBudgetViseParActivite
          .filter(
            (item) =>
              item.ligneeconomique_id == $id &&
              this.codeNatureDepense(item.nature_depense_id) == 4 &&
              item.sous_budget_id == this.sous_budget_id &&
              item.initial == 1
          )
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation_total),
            0
          )
          .toFixed(0);
      }
    },

    // fin
    // debut : permettre d afficher le montant actuel par nature economique pour la depense du Investissements //
    AfficherBudgetActuelInvestissements($id) {
      if (this.sous_budget_id == 0 && this.activite_id != 0) {
        return this.getterBudgetViseParActivite
          .filter(
            (item) =>
              this.codeNatureDepense(item.nature_depense_id) == 4 &&
              item.ligneeconomique_id == $id &&
              item.actuelle == 1
          )
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation_total),
            0
          )
          .toFixed(0);
      } else {
        return this.getterBudgetViseParActivite
          .filter(
            (item) =>
              item.ligneeconomique_id == $id &&
              this.codeNatureDepense(item.nature_depense_id) == 4 &&
              item.sous_budget_id == this.sous_budget_id &&
              item.actuelle == 1
          )
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation_total),
            0
          )
          .toFixed(0);
      }
    },
    // fin
    videChamps() {
      this.sous_budget_id = 0;
      return (this.activite_id = 0);
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
      this.getOpParActvite(objet);
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
