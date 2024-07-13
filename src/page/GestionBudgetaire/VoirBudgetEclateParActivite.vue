<template>
  <div class="container">
   
    <div class="col-md-12">
      <div class="card">
        <div class="card-header">
          <div class="d-flex align-items-center">
            <h4 class="card-title">Présentation du budget par Activité</h4>
           <span
            class="badge rounded-pill bg-primary"
            style="cursor: pointer"
            @click.prevent="genererEnPdf4()"
            >Exporter en Pdf</span
          >
          </div>
        </div>
        <div class="card-body" id="printMe45" ref="table">
          <!-- Modal -->
         <table class="table table-bordered border-primary" >
        <tr>
          <td style="text-align: center; border: 1px solid #000 !important">
            <h6 style="font-size: 12px">
              Ministère des Ressources Animales et Halieutiques<br />
              ------------------------- <br />
              Fonds d'Aide à la Production Avicole Nationale <br />
              <img src="../../../public/csslogin/images/logo1.jpg" width="80px;" />
            </h6>
            <!-- <img src="/optimisation/skin/img/log3.png" width="80px;"  /> -->
          </td>
          <td style="text-align: center; border: 1px solid #000 !important">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <img src="../../../public/assets/img/amoirie.png" width="70px;" />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </td>

          <td style="text-align: center; border: 1px solid #000 !important">
            <h6 style="font-size: 12px">
              République de Côte d'Ivoire <br />
              ------------------------- <br />
              Union-Discipline-Travail
            </h6>
            <!-- <img src="/optimisation/skin/img/log3.png" width="80px;"  /> -->
          </td>
        </tr>
      </table>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th colspan="7" style="text-align: center; border: 1px solid #000 !important">
              {{ afficheLibelleActivite(Activite_id) }}
            </th>
          </tr>
          <br />
          <tr>
            <th
              style="
                text-align: center;
                font-size: 14px;
                border: 1px solid #000 !important
              "
              colspan="7"
            >
              BUDGET INITIAL
            </th>
          </tr>
          <tr style="text-align: center; border: 1px solid #000 !important">
            <th style="text-align: center; border: 1px solid #000 !important">
              Nature économique
            </th>
            <th colspan="2" style="text-align: center; border: 1px solid #000 !important">
              Report
            </th>
            <th colspan="2" style="text-align: center; border: 1px solid #000 !important">
              Notifié
            </th>
            <th colspan="2" style="text-align: center; border: 1px solid #000 !important">
              Dotation globale
            </th>
          </tr>
          <tr>
            <!-- <th scope="col">#</th> -->
            <!-- <th scope="col">N</th> -->
            <th
              scope="col"
              style="text-align: center; border: 1px solid #000 !important"
            ></th>
            <th
              scope="col"
              style="text-align: center; border: 1px solid #000 !important"
              v-for="item in GroupeBailleur"
              :key="item"
              colspan=""
            >
              {{ afficheSourceFinancement(item) }}
            </th>
            <!-- <th
              scope="col"
              style="text-align: center"
              v-for="item in GroupeBailleur"
              :key="item"
              colspan=""
            >
              Total
            </th> -->
            <th
              scope="col"
              style="text-align: center; border: 1px solid #000 !important"
              v-for="item in GroupeBailleur"
              :key="item"
              colspan=""
            >
              {{ afficheSourceFinancement(item) }}
            </th>

            <th
              scope="col"
              style="text-align: center; border: 1px solid #000 !important"
            ></th>
            <!-- <th scope="col" style="text-align: center">Action</th> -->
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item1 in GroupeNatureEconomiqueInvestissements"
            :key="item1"
          >
            <td style="width: 50%; border: 1px solid #000 !important">
              {{ afficheNatureEconomique(item1) }}
            </td>

            <td
              style="width: 30%; text-align: right; border: 1px solid #000 !important"
              v-for="item in GroupeBailleur"
              :key="item"
            >
              {{
                formatageSommeSansFCFA(
                  parseFloat(MontantReportParLigneInvestissements(item1, item))
                )
              }}
            </td>
            <!-- <td style="width: 60%" v-for="item in GroupeBailleur" :key="item">
              {{ TotalReportParLigneInvestissements(item1) }}
            </td> -->
            <td
              style="width: 20%; text-align: right; border: 1px solid #000 !important"
              v-for="item in GroupeBailleur"
              :key="item"
            >
              {{
                formatageSommeSansFCFA(
                  parseFloat(MontantNotifieParLigneInvestissements(item1, item))
                )
              }}
            </td>
            <td style="text-align: right; border: 1px solid #000 !important">
              {{
                formatageSommeSansFCFA(
                  parseFloat(MontantParLigneInvestissements(item1))
                )
              }}
            </td>
            <!-- <td>
              <span class="badge bg-dark" style="cursor: pointer">Budget</span>
            </td> -->
          </tr>
          <tr>
            <td
              style="
                background-color: powderblue;
                text-align: right;
                border: 1px solid #000 !important;
              "
            >
              Sous Total {{ LibelleGrandeNatureInverssement }}
            </td>
            <td
              style="
                background-color: powderblue;
                text-align: right;
                border: 1px solid #000 !important;
              "
              v-for="item in GroupeBailleur"
              :key="item"
            >
              {{
                formatageSommeSansFCFA(parseFloat(TotalReportBailleur(item)))
              }}
            </td>
            <td
              style="background-color: powderblue; text-align: right;border: 1px solid #000 !important"
              v-for="item in GroupeBailleur"
              :key="item"
            >
              {{
                formatageSommeSansFCFA(parseFloat(TotalNotifierBailleur(item)))
              }}
            </td>
            <td style="background-color: powderblue; text-align: right;border: 1px solid #000 !important">
              {{ formatageSommeSansFCFA(parseFloat(TotalDotationBailleur)) }}
            </td>
          </tr>

          <!-- 2 grande nature -->

          <tr v-for="item1 in GroupeNatureEconomiquePersonnel" :key="item1">
            <td style="width: 50%; border: 1px solid #000 !important">
              {{ afficheNatureEconomique(item1) }}
            </td>

            <td
              style="width: 30%; text-align: right; border: 1px solid #000 !important"
              v-for="item in GroupeBailleur"
              :key="item"
            >
              {{
                formatageSommeSansFCFA(
                  parseFloat(MontantReportParLignePersonnel(item1, item))
                )
              }}
            </td>
            <!-- <td style="width: 60%" v-for="item in GroupeBailleur" :key="item">
              {{ TotalReportParLigneInvestissements(item1) }}
            </td> -->
            <td
              style="width: 20%; text-align: right; border: 1px solid #000 !important"
              v-for="item in GroupeBailleur"
              :key="item"
            >
              {{
                formatageSommeSansFCFA(
                  parseFloat(MontantNotifieParLignePersonnel(item1, item))
                )
              }}
            </td>
            <td style="text-align: right; border: 1px solid #000 !important">
              {{
                formatageSommeSansFCFA(
                  parseFloat(MontantParLignePersonnel(item1))
                )
              }}
            </td>
            <!-- <td>
              <span class="badge bg-dark" style="cursor: pointer">Budget</span>
            </td> -->
          </tr>
          <tr>
            <td
              style="
                background-color: powderblue;
                text-align: right;
                border: 1px solid #000 !important;
              "
            >
              Sous Total {{ LibelleGrandeNaturepersonnel }}
            </td>
            <td
              style="
                background-color: powderblue;
                text-align: right;
                border: 1px solid #000 !important;
              "
              v-for="item in GroupeBailleur"
              :key="item"
            >
              {{
                formatageSommeSansFCFA(
                  parseFloat(TotalReportBailleurPersonnel(item))
                )
              }}
            </td>
            <td
              style="background-color: powderblue; text-align: right;border: 1px solid #000 !important"
              v-for="item in GroupeBailleur"
              :key="item"
            >
              {{
                formatageSommeSansFCFA(
                  parseFloat(TotalNotifierBailleurPersonnel(item))
                )
              }}
            </td>
            <td style="background-color: powderblue; text-align: right;border: 1px solid #000 !important">
              {{
                formatageSommeSansFCFA(
                  parseFloat(TotalDotationBailleurPersonnel)
                )
              }}
            </td>
          </tr>
          <!-- 3- bien service -->
          <tr v-for="item1 in GroupeNatureEconomiqueBiensService" :key="item1">
            <td style="width: 50%; border: 1px solid #000 !important">
              {{ afficheNatureEconomique(item1) }}
            </td>

            <td
              style="width: 30%; text-align: right; border: 1px solid #000 !important"
              v-for="item in GroupeBailleur"
              :key="item"
            >
              {{
                formatageSommeSansFCFA(
                  parseFloat(MontantReportParLigneBiensService(item1, item))
                )
              }}
            </td>
            <!-- <td style="width: 60%" v-for="item in GroupeBailleur" :key="item">
              {{ TotalReportParLigneInvestissements(item1) }}
            </td> -->
            <td
              style="width: 20%; text-align: right; border: 1px solid #000 !important"
              v-for="item in GroupeBailleur"
              :key="item"
            >
              {{
                formatageSommeSansFCFA(
                  parseFloat(MontantNotifieParLigneBiensService(item1, item))
                )
              }}
            </td>
            <td style="text-align: right; border: 1px solid #000 !important">
              {{
                formatageSommeSansFCFA(
                  parseFloat(MontantParLigneBiensService(item1))
                )
              }}
            </td>
            <!-- <td>
              <span class="badge bg-dark" style="cursor: pointer">Budget</span>
            </td> -->
          </tr>
          <tr>
            <td
              style="
                background-color: powderblue;
                text-align: right;
                border: 1px solid #000 !important;
              "
            >
              Sous Total {{ LibelleGrandeNatureBiensService }}
            </td>
            <td
              style="
                background-color: powderblue;
                text-align: right;
                border: 1px solid #000 !important;
              "
              v-for="item in GroupeBailleur"
              :key="item"
            >
              {{
                formatageSommeSansFCFA(
                  parseFloat(TotalReportBailleurBienService(item))
                )
              }}
            </td>
            <td
              style="background-color: powderblue; text-align: right;border: 1px solid #000 !important"
              v-for="item in GroupeBailleur"
              :key="item"
            >
              {{
                formatageSommeSansFCFA(
                  parseFloat(TotalNotifierBailleurBienService(item))
                )
              }}
            </td>
            <td style="background-color: powderblue; text-align: right;border: 1px solid #000 !important">
              {{
                formatageSommeSansFCFA(
                  parseFloat(TotalDotationBailleurBiensService)
                )
              }}
            </td>
          </tr>
          <!-- transfert -->
          <tr v-for="item1 in GroupeNatureEconomiqueTransfert" :key="item1">
            <td style="width: 50%; border: 1px solid #000 !important">
              {{ afficheNatureEconomique(item1) }}
            </td>

            <td
              style="width: 30%; text-align: right; border: 1px solid #000 !important"
              v-for="item in GroupeBailleur"
              :key="item"
            >
              {{
                formatageSommeSansFCFA(
                  parseFloat(MontantReportParLigneTransfert(item1, item))
                )
              }}
            </td>
            <!-- <td style="width: 60%" v-for="item in GroupeBailleur" :key="item">
              {{ TotalReportParLigneInvestissements(item1) }}
            </td> -->
            <td
              style="width: 20%; text-align: right; border: 1px solid #000 !important"
              v-for="item in GroupeBailleur"
              :key="item"
            >
              {{
                formatageSommeSansFCFA(
                  parseFloat(MontantNotifieParLigneTransfert(item1, item))
                )
              }}
            </td>
            <td style="text-align: right; border: 1px solid #000 !important">
              {{
                formatageSommeSansFCFA(
                  parseFloat(MontantParLigneTransfert(item1))
                )
              }}
            </td>
            <!-- <td>
              <span class="badge bg-dark" style="cursor: pointer">Budget</span>
            </td> -->
          </tr>
          <tr>
            <td
              style="
                background-color: powderblue;
                text-align: right;
                border: 1px solid #000 !important;
              "
            >
              Sous Total {{ LibelleGrandeNatureTransfert }}
            </td>
            <td
              style="
                background-color: powderblue;
                text-align: right;
                border: 1px solid #000 !important;
              "
              v-for="item in GroupeBailleur"
              :key="item"
            >
              {{
                formatageSommeSansFCFA(
                  parseFloat(TotalReportBailleurTransfert(item))
                )
              }}
            </td>
            <td
              style="background-color: powderblue; text-align: right;border: 1px solid #000 !important"
              v-for="item in GroupeBailleur"
              :key="item"
            >
              {{
                formatageSommeSansFCFA(
                  parseFloat(TotalNotifierBailleurTransfert(item))
                )
              }}
            </td>
            <td style="background-color: powderblue; text-align: right;border: 1px solid #000 !important">
              {{
                formatageSommeSansFCFA(
                  parseFloat(TotalDotationBailleurTransfert)
                )
              }}
            </td>
          </tr>
          <tr>
            <td style="background-color: #006d80; color: aliceblue;border: 1px solid #000 !important">
              TOTAL GLOBAL
            </td>
            <td  v-for="item in GroupeBailleur"
              :key="item" style="background-color: #006d80; text-align: right;border: 1px solid #000 !important;color: aliceblue">{{ formatageSommeSansFCFA(
                  parseFloat(totalGlobalReport(item))) }}</td>
              <td  v-for="item in GroupeBailleur"
              :key="item" style="background-color: #006d80; text-align: right;border: 1px solid #000 !important;color: aliceblue">{{formatageSommeSansFCFA(
                  parseFloat(totalGlobalNotifie(item)))  }}</td>
              <td style="background-color: #006d80; text-align: right;border: 1px solid #000 !important;color: aliceblue">{{formatageSommeSansFCFA(
                  parseFloat(totalGlobal))}}</td>
            
          </tr>
        </tbody>
      </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
// import moment from "moment";
import {
  formatageSomme,
  formatageSommeSansFCFA,
} from "../Repositories/Repository";
export default {
  components: {},
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
    this.Activite_id = this.$route.params.id;
    // this.getSousBudget();
    this.getBudgetEclate();
    this.getBailleur();
    this.getNatureDepense();
    this.getNatureEconomique();
    this.getActivite();
    //   this.getExerciceBudgetaire();
    //  // this.getGroupeActivitebudgetNotifie()
    //   this.getDotationNotifie();
  },
  computed: {
    ...mapGetters("parametrage", [
      "getterActivite",
      "getterBailleur",
      "getterNatureEconomique",
      "getterSousBudget",
      "getterListeBudgetEclate",
      "getterExerciceBudgetaire",
      "getterDotationNotifie",

      "getterNatureDepense",
    ]),
    TotalDotationBailleur() {
      return this.getterListeBudgetEclate
        .filter(
          (item) =>
            item.activite_id == this.Activite_id &&
            this.afficheCodeNatureDepense(item.nature_depense_id) == 4
        )
        .reduce(
          (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation_total),
          0
        )
        .toFixed(0);
    },
    LibelleGrandeNatureInverssement() {
      const qtereel = this.getterNatureDepense.find(
        (qtreel) => qtreel.code == 4
      );

      if (qtereel) {
        return qtereel.libelle;
      }

      return "";
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

    afficheLibelleActivite() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.getterActivite.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.libelle;
          }
          return 0;
        }
      };
    },
    afficheCodeNatureDepense() {
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
    GroupeNatureEconomiqueInvestissements() {
      // return (id) => {

      let objet = this.getterListeBudgetEclate.filter(
        (item) => this.afficheCodeNatureDepense(item.nature_depense_id) == 4
      );
      //  let vm=this
      let array_exercie = [];
      if (objet.length > 0) {
        objet.forEach(function (val) {
          array_exercie.push(val.ligneeconomique_id);
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
    GroupeNatureEconomiquePersonnel() {
      // return (id) => {

      let objet = this.getterListeBudgetEclate.filter(
        (item) => this.afficheCodeNatureDepense(item.nature_depense_id) == 1
      );
      //  let vm=this
      let array_exercie = [];
      if (objet.length > 0) {
        objet.forEach(function (val) {
          array_exercie.push(val.ligneeconomique_id);
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
    GroupeBailleur() {
      // return (id) => {

      let objet = this.getterListeBudgetEclate;
      //  let vm=this
      let array_exercie = [];
      if (objet.length > 0) {
        objet.forEach(function (val) {
          array_exercie.push(val.source_financement_id);
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
    afficheSousBudgetParActivite() {
      return this.getterSousBudget.filter(
        (item) => item.activite_id == this.Activite_id
      );
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

    // 2-presonnel
    TotalDotationBailleurPersonnel() {
      return this.getterListeBudgetEclate
        .filter(
          (item) =>
            item.activite_id == this.Activite_id &&
            this.afficheCodeNatureDepense(item.nature_depense_id) == 1
        )
        .reduce(
          (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation_total),
          0
        )
        .toFixed(0);
    },
    LibelleGrandeNaturepersonnel() {
      const qtereel = this.getterNatureDepense.find(
        (qtreel) => qtreel.code == 1
      );

      if (qtereel) {
        return qtereel.libelle;
      }

      return "";
    },

    // 3 biens service

    TotalDotationBailleurBiensService() {
      return this.getterListeBudgetEclate
        .filter(
          (item) =>
            item.activite_id == this.Activite_id &&
            this.afficheCodeNatureDepense(item.nature_depense_id) == 2
        )
        .reduce(
          (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation_total),
          0
        )
        .toFixed(0);
    },
    LibelleGrandeNatureBiensService() {
      const qtereel = this.getterNatureDepense.find(
        (qtreel) => qtreel.code == 2
      );

      if (qtereel) {
        return qtereel.libelle;
      }

      return "";
    },
    GroupeNatureEconomiqueBiensService() {
      // return (id) => {

      let objet = this.getterListeBudgetEclate.filter(
        (item) => this.afficheCodeNatureDepense(item.nature_depense_id) == 2
      );
      //  let vm=this
      let array_exercie = [];
      if (objet.length > 0) {
        objet.forEach(function (val) {
          array_exercie.push(val.ligneeconomique_id);
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

    // transfert
    TotalDotationBailleurTransfert() {
      return this.getterListeBudgetEclate
        .filter(
          (item) =>
            item.activite_id == this.Activite_id &&
            this.afficheCodeNatureDepense(item.nature_depense_id) == 3
        )
        .reduce(
          (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation_total),
          0
        )
        .toFixed(0);
    },
    LibelleGrandeNatureTransfert() {
      const qtereel = this.getterNatureDepense.find(
        (qtreel) => qtreel.code == 3
      );

      if (qtereel) {
        return qtereel.libelle;
      }

      return "";
    },
     totalGlobal() {
      return this.getterListeBudgetEclate
        .filter(
          (item) =>
            item.activite_id == this.Activite_id
        )
        .reduce(
          (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation_total),
          0
        )
        .toFixed(0);
    },
    GroupeNatureEconomiqueTransfert() {
      // return (id) => {

      let objet = this.getterListeBudgetEclate.filter(
        (item) => this.afficheCodeNatureDepense(item.nature_depense_id) == 3
      );
      //  let vm=this
      let array_exercie = [];
      if (objet.length > 0) {
        objet.forEach(function (val) {
          array_exercie.push(val.ligneeconomique_id);
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
    ...mapActions("parametrage", [
      "getSousBudget",
      "getBailleur",
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
    genererEnPdf4() {
      this.$htmlToPaper("printMe45");
    },

     totalGlobalReport($id1) {
      return this.getterListeBudgetEclate
        .filter(
          (item) =>
            item.activite_id == this.Activite_id &&
            
            item.source_financement_id == $id1 
        )
        .reduce(
          (prec, cur) => parseFloat(prec) + parseFloat(cur.doatation_report),
          0
        )
        .toFixed(0);
    },
    totalGlobalNotifie($id1) {
      return this.getterListeBudgetEclate
        .filter(
          (item) =>
            item.activite_id == this.Activite_id &&
            
            item.source_financement_id == $id1 
        )
        .reduce(
          (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation_actuelle),
          0
        )
        .toFixed(0);
    },
    
    TotalNotifierBailleur($id1) {
      return this.getterListeBudgetEclate
        .filter(
          (item) =>
            item.activite_id == this.Activite_id &&
            item.source_financement_id == $id1 &&
            this.afficheCodeNatureDepense(item.nature_depense_id) == 4
        )
        .reduce(
          (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation_actuelle),
          0
        )
        .toFixed(0);
    },
    TotalReportBailleur($id1) {
      return this.getterListeBudgetEclate
        .filter(
          (item) =>
            item.activite_id == this.Activite_id &&
            item.source_financement_id == $id1 &&
            this.afficheCodeNatureDepense(item.nature_depense_id) == 4
        )
        .reduce(
          (prec, cur) => parseFloat(prec) + parseFloat(cur.doatation_report),
          0
        )
        .toFixed(0);
    },
    MontantParLigneInvestissements($id) {
      return this.getterListeBudgetEclate
        .filter(
          (item) =>
            item.activite_id == this.Activite_id &&
            item.ligneeconomique_id == $id &&
            this.afficheCodeNatureDepense(item.nature_depense_id) == 4
        )
        .reduce(
          (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation_total),
          0
        )
        .toFixed(0);
    },
    TotalReportParLigneInvestissements($id) {
      return this.getterListeBudgetEclate
        .filter(
          (item) =>
            item.activite_id == this.Activite_id &&
            item.ligneeconomique_id == $id &&
            this.afficheCodeNatureDepense(item.nature_depense_id) == 4
        )
        .reduce(
          (prec, cur) => parseFloat(prec) + parseFloat(cur.doatation_report),
          0
        )
        .toFixed(0);
    },
    MontantReportParLigneInvestissements($id, $id1) {
      return this.getterListeBudgetEclate
        .filter(
          (item) =>
            item.activite_id == this.Activite_id &&
            item.ligneeconomique_id == $id &&
            item.source_financement_id == $id1 &&
            this.afficheCodeNatureDepense(item.nature_depense_id) == 4
        )
        .reduce(
          (prec, cur) => parseFloat(prec) + parseFloat(cur.doatation_report),
          0
        )
        .toFixed(0);
    },
    MontantNotifieParLigneInvestissements($id, $id1) {
      return this.getterListeBudgetEclate
        .filter(
          (item) =>
            item.activite_id == this.Activite_id &&
            item.ligneeconomique_id == $id &&
            item.source_financement_id == $id1 &&
            this.afficheCodeNatureDepense(item.nature_depense_id) == 4
        )
        .reduce(
          (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation_actuelle),
          0
        )
        .toFixed(0);
    },
    // 2 personnel
    TotalNotifierBailleurPersonnel($id1) {
      return this.getterListeBudgetEclate
        .filter(
          (item) =>
            item.activite_id == this.Activite_id &&
            item.source_financement_id == $id1 &&
            this.afficheCodeNatureDepense(item.nature_depense_id) == 1
        )
        .reduce(
          (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation_actuelle),
          0
        )
        .toFixed(0);
    },
    TotalReportBailleurPersonnel($id1) {
      return this.getterListeBudgetEclate
        .filter(
          (item) =>
            item.activite_id == this.Activite_id &&
            item.source_financement_id == $id1 &&
            this.afficheCodeNatureDepense(item.nature_depense_id) == 1
        )
        .reduce(
          (prec, cur) => parseFloat(prec) + parseFloat(cur.doatation_report),
          0
        )
        .toFixed(0);
    },
    MontantReportParLignePersonnel($id, $id1) {
      return this.getterListeBudgetEclate
        .filter(
          (item) =>
            item.activite_id == this.Activite_id &&
            item.ligneeconomique_id == $id &&
            item.source_financement_id == $id1 &&
            this.afficheCodeNatureDepense(item.nature_depense_id) == 1
        )
        .reduce(
          (prec, cur) => parseFloat(prec) + parseFloat(cur.doatation_report),
          0
        )
        .toFixed(0);
    },
    MontantNotifieParLignePersonnel($id, $id1) {
      return this.getterListeBudgetEclate
        .filter(
          (item) =>
            item.activite_id == this.Activite_id &&
            item.ligneeconomique_id == $id &&
            item.source_financement_id == $id1 &&
            this.afficheCodeNatureDepense(item.nature_depense_id) == 1
        )
        .reduce(
          (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation_actuelle),
          0
        )
        .toFixed(0);
    },
    MontantParLignePersonnel($id) {
      return this.getterListeBudgetEclate
        .filter(
          (item) =>
            item.activite_id == this.Activite_id &&
            item.ligneeconomique_id == $id &&
            this.afficheCodeNatureDepense(item.nature_depense_id) == 1
        )
        .reduce(
          (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation_total),
          0
        )
        .toFixed(0);
    },
    // 2 biens service
    TotalNotifierBailleurBienService($id1) {
      return this.getterListeBudgetEclate
        .filter(
          (item) =>
            item.activite_id == this.Activite_id &&
            item.source_financement_id == $id1 &&
            this.afficheCodeNatureDepense(item.nature_depense_id) == 2
        )
        .reduce(
          (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation_actuelle),
          0
        )
        .toFixed(0);
    },
    TotalReportBailleurBienService($id1) {
      return this.getterListeBudgetEclate
        .filter(
          (item) =>
            item.activite_id == this.Activite_id &&
            item.source_financement_id == $id1 &&
            this.afficheCodeNatureDepense(item.nature_depense_id) == 2
        )
        .reduce(
          (prec, cur) => parseFloat(prec) + parseFloat(cur.doatation_report),
          0
        )
        .toFixed(0);
    },
    MontantParLigneBiensService($id) {
      return this.getterListeBudgetEclate
        .filter(
          (item) =>
            item.activite_id == this.Activite_id &&
            item.ligneeconomique_id == $id &&
            this.afficheCodeNatureDepense(item.nature_depense_id) == 2
        )
        .reduce(
          (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation_total),
          0
        )
        .toFixed(0);
    },
    MontantNotifieParLigneBiensService($id, $id1) {
      return this.getterListeBudgetEclate
        .filter(
          (item) =>
            item.activite_id == this.Activite_id &&
            item.ligneeconomique_id == $id &&
            item.source_financement_id == $id1 &&
            this.afficheCodeNatureDepense(item.nature_depense_id) == 2
        )
        .reduce(
          (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation_actuelle),
          0
        )
        .toFixed(0);
    },
    MontantReportParLigneBiensService($id, $id1) {
      return this.getterListeBudgetEclate
        .filter(
          (item) =>
            item.activite_id == this.Activite_id &&
            item.ligneeconomique_id == $id &&
            item.source_financement_id == $id1 &&
            this.afficheCodeNatureDepense(item.nature_depense_id) == 2
        )
        .reduce(
          (prec, cur) => parseFloat(prec) + parseFloat(cur.doatation_report),
          0
        )
        .toFixed(0);
    },

    /// transfert
    TotalNotifierBailleurTransfert($id1) {
      return this.getterListeBudgetEclate
        .filter(
          (item) =>
            item.activite_id == this.Activite_id &&
            item.source_financement_id == $id1 &&
            this.afficheCodeNatureDepense(item.nature_depense_id) == 3
        )
        .reduce(
          (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation_actuelle),
          0
        )
        .toFixed(0);
    },
    TotalReportBailleurTransfert($id1) {
      return this.getterListeBudgetEclate
        .filter(
          (item) =>
            item.activite_id == this.Activite_id &&
            item.source_financement_id == $id1 &&
            this.afficheCodeNatureDepense(item.nature_depense_id) == 3
        )
        .reduce(
          (prec, cur) => parseFloat(prec) + parseFloat(cur.doatation_report),
          0
        )
        .toFixed(0);
    },
    MontantParLigneTransfert($id) {
      return this.getterListeBudgetEclate
        .filter(
          (item) =>
            item.activite_id == this.Activite_id &&
            item.ligneeconomique_id == $id &&
            this.afficheCodeNatureDepense(item.nature_depense_id) == 3
        )
        .reduce(
          (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation_total),
          0
        )
        .toFixed(0);
    },
    MontantNotifieParLigneTransfert($id, $id1) {
      return this.getterListeBudgetEclate
        .filter(
          (item) =>
            item.activite_id == this.Activite_id &&
            item.ligneeconomique_id == $id &&
            item.source_financement_id == $id1 &&
            this.afficheCodeNatureDepense(item.nature_depense_id) == 3
        )
        .reduce(
          (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation_actuelle),
          0
        )
        .toFixed(0);
    },
    MontantReportParLigneTransfert($id, $id1) {
      return this.getterListeBudgetEclate
        .filter(
          (item) =>
            item.activite_id == this.Activite_id &&
            item.ligneeconomique_id == $id &&
            item.source_financement_id == $id1 &&
            this.afficheCodeNatureDepense(item.nature_depense_id) == 3
        )
        .reduce(
          (prec, cur) => parseFloat(prec) + parseFloat(cur.doatation_report),
          0
        )
        .toFixed(0);
    },
    Retour() {
      this.$router.push({ name: "VentilationBudget" });
    },

    AfficheMontantBudget($id) {
      return this.getterListeBudgetEclate
        .filter((item) => item.sous_budget_id == $id)
        .reduce(
          (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation_total),
          0
        )
        .toFixed(0);
    },
    formatageSomme: formatageSomme,
    formatageSommeSansFCFA: formatageSommeSansFCFA,
    // formaterDate(date) {
    //   return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    // },
  },
};
</script>
