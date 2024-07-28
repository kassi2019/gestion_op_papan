<template>
  <div class="container">
    <div class="col-md-12">
      <div class="card" style="box-shadow: 5px 5px #f9d531">
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
          <table class="table table-bordered border-primary">
            <tr>
              <td style="text-align: center; border: 1px solid #000 !important">
                <h6 style="font-size: 12px">
                  Ministère des Ressources Animales et Halieutiques<br />
                  ------------------------- <br />
                  Fonds d'Aide à la Production Avicole Nationale <br />
                  <img
                    src="../../../../public/csslogin/images/logo1.jpg"
                    width="80px;"
                  />
                </h6>
                <!-- <img src="/optimisation/skin/img/log3.png" width="80px;"  /> -->
              </td>
              <td style="text-align: center; border: 1px solid #000 !important">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <img
                  src="../../../../public/assets/img/amoirie.png"
                  width="70px;"
                />
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
                <th
                  colspan="9"
                  style="text-align: center; border: 1px solid #000 !important"
                >
                  {{ afficheLibelleActivite(Activite_id) }}
                </th>
              </tr>
              <br />
              <tr>
                <th
                  style="
                    text-align: center;
                    font-size: 14px;
                    border: 1px solid #000 !important;
                  "
                  colspan="9"
                >
                  BUDGET DE MODIFICATION
                </th>
              </tr>

              <tr style="text-align: center; border: 1px solid #000 !important">
                <th
                  style="text-align: center; border: 1px solid #000 !important"
                  colspan="3"
                >
                  Destination
                </th>
                <th
                  colspan=""
                  style="text-align: center; border: 1px solid #000 !important"
                >
                  Dotation Initiale
                </th>
                <th
                  colspan=""
                  style="text-align: center; border: 1px solid #000 !important"
                >
                  Modification
                </th>

                <th
                  colspan=""
                  style="text-align: center; border: 1px solid #000 !important"
                >
                  Budget Actuel
                </th>
              </tr>
            </thead>
            <tbody v-for="data in afficheSousBudgetParActivite" :key="data.id">
              <tr>
                <td colspan="6" style="text-align: center">
                  {{ data.libelle }}
                </td>
              </tr>

              <!-- POUR BIENS ET SERVICE -->
              <tr
                style="border: 1px solid #000 !important; text-align: center"
                v-for="item1 in GroupeNatureEconomiqueBiensService(data.id)"
                :key="item1"
              >
                <td colspan="3" style="border: 1px solid #000 !important">
                  {{ afficheNatureEconomique(item1) }}
                </td>

                <td
                  style="text-align: right; border: 1px solid #000 !important"
                >
                  {{
                    formatageSommeSansFCFA(
                      parseFloat(
                        MontantInitialParLigneBiensService(item1, data.id)
                      )
                    )
                  }}
                </td>
                <td
                  style="text-align: right; border: 1px solid #000 !important"
                >
                  {{
                    formatageSommeSansFCFA(
                      parseFloat(
                        MontantVariationParLigneBiensService(
                          item1,

                          data.id
                        )
                      )
                    )
                  }}
                </td>
                <td
                  style="text-align: right; border: 1px solid #000 !important"
                >
                  {{
                    formatageSommeSansFCFA(
                      parseFloat(
                        MontantActuelleParLigneBiensService(item1, data.id)
                      )
                    )
                  }}
                </td>
              </tr>
              <tr>
                <td
                  style="
                    background-color: powderblue;
                    text-align: right;
                    border: 1px solid #000 !important;
                  "
                  colspan="3"
                >
                  Sous Total {{ LibelleGrandeNatureBiensService }}
                </td>
                <td
                  style="
                    background-color: powderblue;
                    text-align: right;
                    border: 1px solid #000 !important;
                  "
                >
                  {{
                    formatageSommeSansFCFA(
                      parseFloat(TotalInitialBienService(data.id))
                    )
                  }}
                </td>
                <td
                  style="
                    background-color: powderblue;
                    text-align: right;
                    border: 1px solid #000 !important;
                  "
                >
                  {{
                    formatageSommeSansFCFA(
                      parseFloat(TotalModificationBailleurBienService(data.id))
                    )
                  }}
                </td>
                <td
                  style="
                    background-color: powderblue;
                    text-align: right;
                    border: 1px solid #000 !important;
                  "
                >
                  {{
                    formatageSommeSansFCFA(
                      parseFloat(TotalDotationBailleurBiensService(data.id))
                    )
                  }}
                </td>
              </tr>

              <!-- POUR PERSONNEL -->
              <tr
                style="border: 1px solid #000 !important; text-align: center"
                v-for="item1 in GroupeNatureEconomiquePersonnel(data.id)"
                :key="item1"
              >
                <td colspan="3" style="border: 1px solid #000 !important">
                  {{ afficheNatureEconomique(item1) }}
                </td>

                <td
                  style="text-align: right; border: 1px solid #000 !important"
                >
                  {{
                    formatageSommeSansFCFA(
                      parseFloat(
                        MontantInitialParLignePersonnel(item1, data.id)
                      )
                    )
                  }}
                </td>
                <td
                  style="text-align: right; border: 1px solid #000 !important"
                >
                  {{
                    formatageSommeSansFCFA(
                      parseFloat(
                        MontantVariationParLignePersonnel(
                          item1,

                          data.id
                        )
                      )
                    )
                  }}
                </td>
                <td
                  style="text-align: right; border: 1px solid #000 !important"
                >
                  {{
                    formatageSommeSansFCFA(
                      parseFloat(
                        MontantActuelleParLignePersonnel(item1, data.id)
                      )
                    )
                  }}
                </td>
              </tr>
              <tr>
                <td
                  style="
                    background-color: powderblue;
                    text-align: right;
                    border: 1px solid #000 !important;
                  "
                  colspan="3"
                >
                  Sous Total {{ LibelleGrandeNaturepersonnel }}
                </td>
                <td
                  style="
                    background-color: powderblue;
                    text-align: right;
                    border: 1px solid #000 !important;
                  "
                >
                  {{
                    formatageSommeSansFCFA(
                      parseFloat(TotalInitialPersonnel(data.id))
                    )
                  }}
                </td>
                <td
                  style="
                    background-color: powderblue;
                    text-align: right;
                    border: 1px solid #000 !important;
                  "
                >
                  {{
                    formatageSommeSansFCFA(
                      parseFloat(TotalModificationPersonnel(data.id))
                    )
                  }}
                </td>
                <td
                  style="
                    background-color: powderblue;
                    text-align: right;
                    border: 1px solid #000 !important;
                  "
                >
                  {{
                    formatageSommeSansFCFA(
                      parseFloat(TotalDotationPersonnel(data.id))
                    )
                  }}
                </td>
              </tr>

              <!-- 2 grande nature -->

              <!-- 3- bien service -->

              <!-- transfert -->
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
} from "../../Repositories/Repository";
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
    this.dossier_id = this.$route.params.id1;
    this.getSousBudget();
    this.getBudgetEclate();
    this.getBailleur();
    this.getNatureDepense();
    this.getNatureEconomique();
    this.getActivite();
    this.getBudgetModifierEnProjet();
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
      "gettersBudgetModifierEnProjet",
      "getterExerciceBudgetaire",
      "getterDotationNotifie",

      "getterNatureDepense",
    ]),

    TotalDotationBailleur() {
      return this.gettersBudgetModifierEnProjet
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
      return (id) => {
        let objet = this.gettersBudgetModifierEnProjet.filter(
          (item) =>
            this.afficheCodeNatureDepense(item.nature_depense_id) == 4 &&
            item.sous_budget_id == id
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
      };
    },
    GroupeNatureEconomiquePersonnel() {
      return (id) => {
        let objet = this.gettersBudgetModifierEnProjet.filter(
          (item) =>
            this.afficheCodeNatureDepense(item.nature_depense_id) == 1 &&
            item.sous_budget_id == id
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
      };
    },
    GroupeBailleur() {
      // return (id) => {

      let objet = this.gettersBudgetModifierEnProjet;
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
      return this.gettersBudgetModifierEnProjet
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
      return (id) => {
        let objet = this.gettersBudgetModifierEnProjet.filter(
          (item) =>
            this.afficheCodeNatureDepense(item.nature_depense_id) == 2 &&
            item.sous_budget_id == id
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
      };
    },

    // transfert
    TotalDotationBailleurTransfert() {
      return this.gettersBudgetModifierEnProjet
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
      return this.gettersBudgetModifierEnProjet
        .filter((item) => item.activite_id == this.Activite_id)
        .reduce(
          (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation_total),
          0
        )
        .toFixed(0);
    },
    GroupeNatureEconomiqueTransfert() {
      // return (id) => {

      let objet = this.gettersBudgetModifierEnProjet.filter(
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
      "getBudgetModifierEnProjet",
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
    TotalDotationPersonnel($id2) {
      if (this.afficheIdDossierTotal($id2) == 1) {
        return this.gettersBudgetModifierEnProjet
          .filter(
            (item) =>
              item.activite_id == this.Activite_id &&
              this.afficheCodeNatureDepense(item.nature_depense_id) == 1 &&
              item.modifier_id == this.dossier_id &&
              item.sous_budget_id == $id2
          )
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation_total),
            0
          )
          .toFixed(0);
      } else {
        return this.gettersBudgetModifierEnProjet
          .filter(
            (item) =>
              item.activite_id == this.Activite_id &&
              this.afficheCodeNatureDepense(item.nature_depense_id) == 1 &&
              item.sous_budget_id == $id2
          )
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation_total),
            0
          )
          .toFixed(0);
      }
    },
    TotalDotationBailleurBiensService($id2) {
      if (this.afficheIdDossierTotal($id2) == 1) {
        return this.gettersBudgetModifierEnProjet
          .filter(
            (item) =>
              item.activite_id == this.Activite_id &&
              this.afficheCodeNatureDepense(item.nature_depense_id) == 2 &&
              item.dossier_id == this.dossier_id &&
              item.sous_budget_id == $id2
          )
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation_total),
            0
          )
          .toFixed(0);
      } else {
        return this.gettersBudgetModifierEnProjet
          .filter(
            (item) =>
              item.activite_id == this.Activite_id &&
              this.afficheCodeNatureDepense(item.nature_depense_id) == 2 &&
              item.sous_budget_id == $id2
          )
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation_total),
            0
          )
          .toFixed(0);
      }
    },
    genererEnPdf4() {
      this.$htmlToPaper("printMe45");
    },

    // 2 personnel

    // POUR PERSONNEL

    TotalModificationPersonnel($id2) {
      if (this.afficheIdDossierTotal($id2) == 1) {
        return this.gettersBudgetModifierEnProjet
          .filter(
            (item) =>
              item.activite_id == this.Activite_id &&
              this.afficheCodeNatureDepense(item.nature_depense_id) == 1 &&
              item.dossier_id == this.dossier_id &&
              item.sous_budget_id == $id2
          )
          .reduce(
            (prec, cur) =>
              parseFloat(prec) + parseFloat(cur.dotation_variation),
            0
          )
          .toFixed(0);
      } else {
        return this.gettersBudgetModifierEnProjet
          .filter(
            (item) =>
              item.activite_id == this.Activite_id &&
              this.afficheCodeNatureDepense(item.nature_depense_id) == 1 &&
              item.sous_budget_id == $id2
          )
          .reduce(
            (prec, cur) =>
              parseFloat(prec) + parseFloat(cur.dotation_variation),
            0
          )
          .toFixed(0);
      }
    },
    afficheIdDossierTotal($id2) {
      const qtereel = this.gettersBudgetModifierEnProjet.find(
        (qtreel) =>
          qtreel.modifier_id == this.dossier_id &&
          qtreel.activite_id == this.Activite_id &&
          qtreel.sous_budget_id == $id2
      );

      if (qtereel) {
        return 1;
      }

      return 0;
    },
    TotalInitialPersonnel($id2) {
      if (this.afficheIdDossier($id2) == 1) {
        return this.gettersBudgetModifierEnProjet
          .filter(
            (item) =>
              item.activite_id == this.Activite_id &&
              this.afficheCodeNatureDepense(item.nature_depense_id) == 1 &&
              item.modifier_id == this.dossier_id &&
              item.sous_budget_id == $id2
          )
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation_total),
            0
          )
          .toFixed(0);
      } else {
        return this.gettersBudgetModifierEnProjet
          .filter(
            (item) =>
              item.activite_id == this.Activite_id &&
              this.afficheCodeNatureDepense(item.nature_depense_id) == 1 &&
              item.sous_budget_id == $id2
          )
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation_total),
            0
          )
          .toFixed(0);
      }
    },

    MontantInitialParLignePersonnel($id, $id2) {
      if (this.afficheIdDossier($id, $id2) == 1) {
        return this.gettersBudgetModifierEnProjet
          .filter(
            (item) =>
              item.activite_id == this.Activite_id &&
              item.ligneeconomique_id == $id &&
              this.afficheCodeNatureDepense(item.nature_depense_id) == 1 &&
              item.sous_budget_id == $id2 &&
              item.modifier_id == this.dossier_id
          )
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation_total),
            0
          )
          .toFixed(0);
      } else {
        return this.gettersBudgetModifierEnProjet
          .filter(
            (item) =>
              item.activite_id == this.Activite_id &&
              item.ligneeconomique_id == $id &&
              this.afficheCodeNatureDepense(item.nature_depense_id) == 1 &&
              item.sous_budget_id == $id2
          )
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation_total),
            0
          )
          .toFixed(0);
      }
    },

    MontantVariationParLignePersonnel($id, $id2) {
      return this.gettersBudgetModifierEnProjet
        .filter(
          (item) =>
            item.activite_id == this.Activite_id &&
            item.ligneeconomique_id == $id &&
            this.afficheCodeNatureDepense(item.nature_depense_id) == 1 &&
            item.sous_budget_id == $id2 &&
            item.dossier_id == this.dossier_id
        )
        .reduce(
          (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation_variation),
          0
        )
        .toFixed(0);
    },
    MontantActuelleParLignePersonnel($id, $id2) {
      if (this.afficheIdDossier($id, $id2) == 1) {
        return this.gettersBudgetModifierEnProjet
          .filter(
            (item) =>
              item.activite_id == this.Activite_id &&
              item.ligneeconomique_id == $id &&
              this.afficheCodeNatureDepense(item.nature_depense_id) == 1 &&
              item.sous_budget_id == $id2 &&
              item.dossier_id == this.dossier_id
          )
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation_total),
            0
          )
          .toFixed(0);
      } else {
        return this.gettersBudgetModifierEnProjet
          .filter(
            (item) =>
              item.activite_id == this.Activite_id &&
              item.ligneeconomique_id == $id &&
              this.afficheCodeNatureDepense(item.nature_depense_id) == 1 &&
              item.sous_budget_id == $id2
          )
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation_total),
            0
          )
          .toFixed(0);
      }
    },
    // 2 biens service
    TotalModificationBailleurBienService($id2) {
      if (this.afficheIdDossierTotal($id2) == 1) {
        return this.gettersBudgetModifierEnProjet
          .filter(
            (item) =>
              item.activite_id == this.Activite_id &&
              this.afficheCodeNatureDepense(item.nature_depense_id) == 2 &&
              item.dossier_id == this.dossier_id &&
              item.sous_budget_id == $id2
          )
          .reduce(
            (prec, cur) =>
              parseFloat(prec) + parseFloat(cur.dotation_variation),
            0
          )
          .toFixed(0);
      } else {
        return this.gettersBudgetModifierEnProjet
          .filter(
            (item) =>
              item.activite_id == this.Activite_id &&
              this.afficheCodeNatureDepense(item.nature_depense_id) == 2 &&
              item.sous_budget_id == $id2
          )
          .reduce(
            (prec, cur) =>
              parseFloat(prec) + parseFloat(cur.dotation_variation),
            0
          )
          .toFixed(0);
      }
    },
    TotalInitialBienService($id2) {
      if (this.afficheIdDossierTotal($id2) == 1) {
        return this.gettersBudgetModifierEnProjet
          .filter(
            (item) =>
              item.activite_id == this.Activite_id &&
              this.afficheCodeNatureDepense(item.nature_depense_id) == 2 &&
              item.modifier_id == this.dossier_id &&
              item.sous_budget_id == $id2
          )
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation_total),
            0
          )
          .toFixed(0);
      } else {
        return this.gettersBudgetModifierEnProjet
          .filter(
            (item) =>
              item.activite_id == this.Activite_id &&
              this.afficheCodeNatureDepense(item.nature_depense_id) == 2 &&
              item.sous_budget_id == $id2
          )
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation_total),
            0
          )
          .toFixed(0);
      }
    },
    MontantParLigneBiensService($id, $id1) {
      return this.gettersBudgetModifierEnProjet
        .filter(
          (item) =>
            item.activite_id == this.Activite_id &&
            item.ligneeconomique_id == $id &&
            this.afficheCodeNatureDepense(item.nature_depense_id) == 2 &&
            item.sous_budget_id == $id1
        )
        .reduce(
          (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation_total),
          0
        )
        .toFixed(0);
    },
    afficheIdDossier($id, $id2) {
      const qtereel = this.gettersBudgetModifierEnProjet.find(
        (qtreel) =>
          qtreel.modifier_id == this.dossier_id &&
          qtreel.activite_id == this.Activite_id &&
          qtreel.ligneeconomique_id == $id &&
          qtreel.sous_budget_id == $id2
      );

      if (qtereel) {
        return 1;
      }

      return 0;
    },
    MontantInitialParLigneBiensService($id, $id2) {
      if (this.afficheIdDossier($id, $id2) == 1) {
        return this.gettersBudgetModifierEnProjet
          .filter(
            (item) =>
              item.activite_id == this.Activite_id &&
              item.ligneeconomique_id == $id &&
              this.afficheCodeNatureDepense(item.nature_depense_id) == 2 &&
              item.sous_budget_id == $id2 &&
              item.modifier_id == this.dossier_id
          )
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation_total),
            0
          )
          .toFixed(0);
      } else {
        return this.gettersBudgetModifierEnProjet
          .filter(
            (item) =>
              item.activite_id == this.Activite_id &&
              item.ligneeconomique_id == $id &&
              this.afficheCodeNatureDepense(item.nature_depense_id) == 2 &&
              item.sous_budget_id == $id2
          )
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation_total),
            0
          )
          .toFixed(0);
      }
    },

    MontantVariationParLigneBiensService($id, $id2) {
      return this.gettersBudgetModifierEnProjet
        .filter(
          (item) =>
            item.activite_id == this.Activite_id &&
            item.ligneeconomique_id == $id &&
            this.afficheCodeNatureDepense(item.nature_depense_id) == 2 &&
            item.sous_budget_id == $id2 &&
            item.dossier_id == this.dossier_id
        )
        .reduce(
          (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation_variation),
          0
        )
        .toFixed(0);
    },
    MontantActuelleParLigneBiensService($id, $id2) {
      if (this.afficheIdDossier($id, $id2) == 1) {
        return this.gettersBudgetModifierEnProjet
          .filter(
            (item) =>
              item.activite_id == this.Activite_id &&
              item.ligneeconomique_id == $id &&
              this.afficheCodeNatureDepense(item.nature_depense_id) == 2 &&
              item.sous_budget_id == $id2 &&
              item.dossier_id == this.dossier_id
          )
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation_total),
            0
          )
          .toFixed(0);
      } else {
        return this.gettersBudgetModifierEnProjet
          .filter(
            (item) =>
              item.activite_id == this.Activite_id &&
              item.ligneeconomique_id == $id &&
              this.afficheCodeNatureDepense(item.nature_depense_id) == 2 &&
              item.sous_budget_id == $id2
          )
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation_total),
            0
          )
          .toFixed(0);
      }
    },

    Retour() {
      this.$router.push({ name: "VentilationBudget" });
    },

    formatageSomme: formatageSomme,
    formatageSommeSansFCFA: formatageSommeSansFCFA,
    // formaterDate(date) {
    //   return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    // },
  },
};
</script>
