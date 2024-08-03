<template>
  <div class="container">
    <div class="col-md-12">
      <div class="card" style="box-shadow: 5px 5px #f9d531">
        <div class="card-header">
          <div class="d-flex align-items-center">
            <h4 class="card-title">Imprimer Ordre de paiement</h4>
            <span
              class="badge badge-warning"
              style="cursor: pointer; color: #000"
              @click.prevent="retour1"
              ><i class="fas fa-arrow-alt-circle-left"></i> Retour</span
            >
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
              <td
                style="
                  text-align: center;

                  width: 30%;
                "
              >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <h6 style="font-size: 12px">
                  Ministère des Ressources Animales et Halieutiques<br />
                  ------------------------- <br />
                  DIRECTION DES PRODUCTIONS ANIMALES<br />
                  ------------------------- <br />
                  Fonds d'Aide à la Production Avicole Nationale <br />
                  <img
                    src="../../../../public/csslogin/images/logo1.jpg"
                    width="150px;"
                  />
                  <!-- <span> {{numeroBordereau(bordereau_id)}}</span> -->
                </h6>
                <!-- <img src="/optimisation/skin/img/log3.png" width="80px;"  /> -->
              </td>
              <td
                style="
                  text-align: center;

                  width: 10%;
                "
              >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <img
                  src="../../../../public/assets/img/amoirie.png"
                  width="50px;"
                  style="text-align: center"
                />

                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </td>

              <td
                style="
                  text-align: center;

                  width: 30%;
                "
              >
                <h6 style="font-size: 12px">
                  République de Côte d'Ivoire <br />
                  ------------------------- <br />
                  Union-Discipline-Travail<br />
                  ------------------------- <br /><br /><br />
                  <p style="font-weight: bolder">
                    Abidjan,le {{ retourneDateJour }}
                  </p>
                </h6>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <!-- <img src="/optimisation/skin/img/log3.png" width="80px;"  /> -->
              </td>
            </tr>
          </table>
          <h6 style="text-align: center; font-weight: bolder; font-size: 15px">
            LISTE DU PERSONNEL
          </h6>
          <!-- <h5 style="text-align: right; font-weight: bolder; font-size: 12px">
            MADAME LE CONTROLEUR FINANCIER
          </h5> -->

          <h6 style="text-align: center; font-size: 15px">
            OBJET : {{ libelleBordereau(ordrePaiement_id) }}
          </h6>
          <div class="table-responsive">
            <table class="table table-bordered" id="customers">
              <thead>
                <tr>
                  <th
                    scope="col"
                    style="
                      border: 0.5px solid #000 !important;
                      text-align: center;

                      font-weight: bold;
                    "
                  >
                    N°
                  </th>
                  <th
                    scope="col"
                    style="
                      border: 0.5px solid #000 !important;
                      text-align: center;
                      width: 15%;
                      font-weight: bold;
                    "
                  >
                    MATRICULE
                  </th>
                  <th
                    scope="col"
                    style="
                      border: 0.5px solid #000 !important;
                      text-align: center;
                      width: 70%;
                      font-weight: bold;
                    "
                  >
                    NOM ET PRENOMS
                  </th>
                  <th
                    scope="col"
                    style="
                      border: 0.5px solid #000 !important;
                      text-align: center;
                      width: 25%;
                      font-weight: bold;
                    "
                  >
                    MONTANT
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(item1, index) in gettersListePersonnelOP"
                  :key="item1.id"
                >
                  <td
                    style="
                      width: 10%;
                      border: 0.5px solid #000 !important;
                      text-align: center;
                    "
                  >
                    {{ index + 1 }}
                  </td>
                  <td style="border: 0.5px solid #000 !important">
                    {{ item1.matricule }}
                  </td>
                  <td style="border: 0.5px solid #000 !important">
                    {{ item1.info_personnel }}
                  </td>
                  <td
                    style="text-align: right; border: 1px solid #000 !important"
                  >
                    {{ formatageSommeSansFCFA(parseFloat(item1.montant)) }}
                  </td>
                </tr>
                <tr>
                  <td
                    colspan="3"
                    style="
                      text-align: right;
                      border: 0.5px solid #000 !important;
                    "
                  >
                    TOTAL
                  </td>
                  <td
                    style="
                      text-align: right;
                      border: 0.5px solid #000 !important;
                    "
                  >
                    {{ formatageSommeSansFCFA(parseFloat(TotalOP)) }}
                  </td>
                </tr>
                <!-- <tr
                  v-if="
                    parseFloat(MontantBordereau(bordereau_id)) !=
                    parseFloat(TotalOP)
                  "
                >
                  <td
                    colspan="3"
                    style="
                      text-align: right;
                      border: 0.5px solid #000 !important;
                    "
                  >
                    MONTANT BORDEREAU ( B )
                  </td>
                  <td
                    style="
                      text-align: right;
                      border: 0.5px solid #000 !important;
                    "
                  >
                    {{ formatageSommeSansFCFA(MontantBordereau(bordereau_id)) }}
                  </td>
                </tr>
                <tr
                  v-if="
                    parseFloat(MontantBordereau(bordereau_id)) !=
                    parseFloat(TotalOP)
                  "
                >
                  <td
                    colspan="3"
                    style="
                      text-align: right;
                      border: 0.5px solid #000 !important;
                    "
                  >
                    ECART (C=A-B)
                  </td>
                  <td
                    style="
                      text-align: right;
                      border: 0.5px solid #000 !important;
                      color: red !important;
                    "
                  >
                    {{
                      formatageSommeSansFCFA(
                        parseFloat(TotalOP) -
                          parseFloat(MontantBordereau(bordereau_id))
                      )
                    }}
                  </td>
                </tr>
                <tr
                  v-if="
                    parseFloat(MontantBordereau(bordereau_id)) !=
                    parseFloat(TotalOP)
                  "
                >
                  <td
                    colspan="5"
                    style="text-align: right !important; color: red"
                  >
                    Le montant du bordereau est différent des montants cumulés
                    des OP
                  </td>
                </tr> -->
              </tbody>
            </table>
            <!-- <br /><br /><br /><br /><br />

            <table id="customers" style="text-align: center">
              <tr>
                <td style="text-align: center; width: 40%; font-weight: bold">
                  OBSERVATIONS<br /><br />
                  {{ observation(LibelleObservation(bordereau_id)) }}
                </td>

                <td
                  style="text-align: center; width: 40%; font-weight: bold"
                ></td>
                <td style="text-align: center; width: 100%; font-weight: bold">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  L'ORDONNATEUR<br /><br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </td>
              </tr>
              <tr>
                <td style="text-align: left; width: 40%"><br /><br /><br /></td>
                <td style="text-align: left; width: 40%"><br /><br /><br /></td>
                <td style="text-align: left; width: 40%"></td>
              </tr>
            </table> -->
          </div>
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
      ladate: new Date(),
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
    this.ordrePaiement_id = this.$route.params.id;

    let objet = {
      id: this.ordrePaiement_id,
    };
    this.getListePersonnelOp(objet);

    // this.getInformationBudget();
    // this.getListeOrdrePaiementGlobal();
    // this.getEntreprise();
    // this.getListeFacture();
    // this.getSousBudget();
    // this.getBudgetEclate();
    // this.getBailleur();
    // this.getNatureDepense();
    // this.getNatureEconomique();
    // let objet = {
    //   id: this.activite_id,
    // };
    // this.getBudgetViseParActvite(objet);
    // this.getCompteBancaire();
    // this.getActivite();
    //   this.getExerciceBudgetaire();
    //  // this.getGroupeActivitebudgetNotifie()
    //   this.getDotationNotifie();
  },
  computed: {
    ...mapGetters("Personnel", ["gettersListePersonnelOP"]),
    ...mapGetters("parametrage", [
      "getterActivite",

      "getterCompteBancaire",
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
    retourneDateJour() {
      return (
        this.ladate.getDate() +
        "/" +
        (this.ladate.getMonth() + 1) +
        "/" +
        this.ladate.getFullYear()
      );
    },
    TotalOP() {
      return this.gettersListePersonnelOP
        .filter((item) => item.id_op == this.ordrePaiement_id)
        .reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.montant), 0)
        .toFixed(0);
      // }
    },
    AfficheOPParBordereau() {
      return this.getterListeOPgloba.filter(
        (item) => item.bordereau_id == this.bordereau_id
      );
    },
    disponible() {
      return parseFloat(this.afficheDotaion) - parseFloat(this.cumulEnCours);
    },
    cumulEnCours() {
      return (
        parseFloat(this.cumulAnterieure) + parseFloat(this.montant_prestation)
      );
    },
    libelleBordereau() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettersListePersonnelOP.find(
            (qtreel) => qtreel.id_op == id
          );

          if (qtereel) {
            return qtereel.objet_depense;
          }
          return 0;
        }
      };
    },
    MontantBordereau() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettersListePersonnelOP.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.montant;
          }
          return 0;
        }
      };
    },
    typeBordereau() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettersListePersonnelOP.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.statut;
          }
          return 0;
        }
      };
    },
    numeroBordereau() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettersListePersonnelOP.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.numero_dossier;
          }
          return 0;
        }
      };
    },
    LibelleObservation() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettersListePersonnelOP.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.observation;
          }
          return 0;
        }
      };
    },
  },
  methods: {
    ...mapActions("parametrage", [
      "getSousBudget",
      "getInformationBudget",
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
      "getCompteBancaire",
    ]),
    ...mapActions("Personnel", ["getListePersonnelOp"]),
    retour1() {
      window.history.back();
    },
    retour() {
      if (this.typeBordereau(this.bordereau_id) == 2) {
        this.$router.push({
          name: "InformationBordereau",
        });
      } else if (this.typeBordereau(this.bordereau_id) == 3) {
        this.$router.push({
          name: "InformationBordereauOPDirect",
        });
      } else if (this.typeBordereau(this.bordereau_id) == 5) {
        this.$router.push({
          name: "InformationBordereauOPAnnulation",
        });
      } else if (this.typeBordereau(this.bordereau_id) == 4) {
        this.$router.push({
          name: "InformationBordereauOPDefinitif",
        });
      }
    },
    observation($id) {
      if ($id == 1) {
        return "Pour Information";
      } else if ($id == 2) {
        return "Pour Visa et Retour";
      } else if ($id == 3) {
        return "pour Visa";
      } else if ($id == 4) {
        return "Pour Attribution";
      } else if ($id == 5) {
        return "Pour Prise en compte";
      } else if ($id == 6) {
        return "Pour Observation";
      } else if ($id == 7) {
        return "Pour Differé";
      } else if ($id == 8) {
        return "Pour Rejet";
      } else {
        return "";
      }
    },
    formatageSomme: formatageSomme,
    formatageSommeSansFCFA: formatageSommeSansFCFA,
    genererEnPdf4() {
      this.$htmlToPaper("printMe45");
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
