<template>
  <div class="container">
    <div class="col-md-12">
      <div class="card" style="box-shadow: 5px 5px #f9d531">
        <div class="card-header">
          <div class="d-flex align-items-center">
            <h4 class="card-title">Imprimer Ordre de Mission</h4>
            <span
              class="badge badge-warning"
              style="cursor: pointer; color: #000"
              @click.prevent="pagePrecedent"
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
                  /><br />
                  <span style="font-weight: bolder">
                    N°{{ numeroBordereau(id_mission) }}</span
                  >
                </h6>
                <!-- <img src="/optimisation/skin/img/log3.png" width="80px;"  /> -->
              </td>
              <!-- <td
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
              </td> -->

              <td
                style="
                  text-align: center;

                  width: 40%;
                "
              >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <h6 style="font-size: 12px">
                  République de Côte d'Ivoire <br />
                  ------------------------- <br />
                  Union-Discipline-Travail
                </h6>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <br /><br /><br /><br />
                <p style="font-weight: bolder">
                  Abidjan,le {{ retourneDateJour }}
                </p>
                <!-- <img src="/optimisation/skin/img/log3.png" width="80px;"  /> -->
              </td>
            </tr>
          </table>
          <h2 style="text-align: center !important; font-size: 20px !important">
            ORDRE DE MISSION
          </h2>

          <table class="table table-bordered border-primary" id="customers">
            <thead>
              <tr>
                <th></th>
                <td>
                  <span style="font-size: 12px !important; font-weight: bold"
                    >LE COORDONNATEUR DU PROGRAMME D'APPUI A</span
                  ><br /><span
                    style="font-size: 12px !important; font-weight: bold"
                    >LA PRODUCTION AVICOLE NATIONALE</span
                  >
                </td>
              </tr>
            </thead>
            <thead>
              <tr>
                <th
                  style="
                    font-size: 13px;
                    font-weight: bold;
                    color: #000;
                    width: 50%;
                    text-align: left !important;
                  "
                  title=""
                >
                  <span style="font-size: 13px !important"
                    >DONNE L'ORDRE À
                    {{ civilite }}
                  </span>
                </th>

                <td
                  style="
                    font-size: 12px;

                    color: #000;
                    text-align: left;
                    text-transform: uppercase;
                    line-height: 300% !important;
                  "
                >
                  : {{ nom_personnel }}
                </td>
              </tr>

              <tr>
                <th
                  style="
                    font-size: 13px;
                    font-weight: bold;
                    color: #000;
                    width: 50%;
                    line-height: 200%;
                    text-align: left !important;
                  "
                  title=""
                >
                  <span style="text-align: center !important; font-size: 13px"
                    >FONCTION
                  </span>
                </th>

                <td
                  style="
                    font-size: 12px;

                    color: #000;
                    text-align: left;
                    text-transform: uppercase;
                    line-height: 300% !important;
                  "
                >
                  : {{ fonction }}
                </td>
              </tr>

              <tr>
                <th
                  style="
                    font-size: 13px;
                    font-weight: bold;
                    color: #000;
                    width: 50%;
                    line-height: 200%;
                    text-align: left !important;
                  "
                  title=""
                >
                  <span style="font-size: 13px !important">MATRICULE </span>
                </th>

                <td
                  style="
                    font-size: 12px;
                    text-transform: uppercase;
                    color: #000;
                    text-align: left;
                    line-height: 300% !important;
                  "
                >
                  : {{ matricule }}
                </td>
              </tr>

              <tr>
                <th
                  style="
                    font-size: 13px;
                    font-weight: bold;
                    color: #000;
                    width: 50%;
                    line-height: 200%;
                    text-align: left !important;
                  "
                  title=""
                >
                  <span style="font-size: 13px !important"
                    >DE SE RENDRE EN MISSION A
                  </span>
                </th>

                <td
                  style="
                    font-size: 12px;
                    text-transform: uppercase;
                    color: #000;
                    text-align: left;
                    line-height: 300% !important;
                  "
                >
                  : {{ lieu_ordre_mission }}
                </td>
              </tr>

              <tr>
                <th
                  style="
                    font-size: 13px;
                    font-weight: bold;
                    color: #000;
                    width: 50%;
                    line-height: 200%;
                    text-align: left !important;
                  "
                  title=""
                >
                  <span style="font-size: 13px !important"
                    >OBJET DE LA MISSION
                  </span>
                </th>

                <td
                  style="
                    font-size: 12px;
                    text-transform: uppercase;
                    color: #000;
                    text-align: left;
                    line-height: 300% !important;
                  "
                >
                  : {{ objet_depense }}
                </td>
              </tr>

              <tr>
                <th
                  style="
                    font-size: 13px;
                    font-weight: bold;
                    color: #000;
                    width: 50%;
                    line-height: 200%;
                    text-align: left !important;
                  "
                  title=""
                >
                  <span style="font-size: 13px !important"
                    >MOYEN DE TRANSPORT
                  </span>
                </th>

                <td
                  style="
                    font-size: 13px;
                    text-transform: uppercase;
                    color: #000;
                    text-align: left;
                    line-height: 300% !important;
                  "
                >
                  : {{ moyen_transport }}
                </td>
              </tr>

              <tr>
                <th
                  style="
                    font-size: 13px;
                    font-weight: bold;
                    color: #000;
                    width: 50%;
                    line-height: 200%;
                    text-align: left !important;
                  "
                  title=""
                >
                  <span style="font-size: 13px !important"
                    >NOMBRE DE JOURS
                  </span>
                </th>

                <td
                  style="
                    font-size: 12px;
                    text-transform: uppercase;
                    color: #000;
                    text-align: left;
                    line-height: 300% !important;
                  "
                >
                  : {{ duree }}
                </td>
              </tr>

              <tr>
                <th
                  style="
                    font-size: 13px;
                    font-weight: bold;
                    color: #000;
                    width: 50%;
                    line-height: 200%;
                    text-align: left !important;
                  "
                  title=""
                >
                  <span style="font-size: 13px !important"
                    >DATE DE DEPART
                  </span>
                </th>

                <td
                  style="
                    font-size: 12px;
                    text-transform: uppercase;
                    color: #000;
                    text-align: left;
                    line-height: 300% !important;
                  "
                >
                  : {{ formaterDate(date_depart) }}
                </td>
              </tr>

              <tr>
                <th
                  style="
                    font-size: 13px;
                    font-weight: bold;
                    color: #000;
                    width: 50%;
                    line-height: 200%;
                    text-align: left !important;
                  "
                  title=""
                >
                  <span style="font-size: 13px !important"
                    >DATE DE RETOUR
                  </span>
                </th>

                <td
                  style="
                    font-size: 12px;
                    line-height: 300% !important;
                    color: #000;
                    text-align: left;
                  "
                >
                  : {{ formaterDate(date_retour) }}
                </td>
              </tr>

              <tr>
                <th
                  style="
                    font-size: 13px;
                    font-weight: bold;
                    color: #000;
                    width: 50%;
                    line-height: 200%;
                    text-align: left !important;
                  "
                  title=""
                >
                  <span style="font-size: 13px !important"
                    >NATURE ECONOMIQUE
                  </span>
                </th>

                <td
                  style="
                    font-size: 12px;
                    text-transform: uppercase;
                    color: #000;
                    text-align: left;
                    line-height: 300% !important;
                  "
                >
                  : {{ nature_economique }}
                </td>
              </tr>
            </thead>
          </table>
          <br /><br />
          <table id="customers" style="text-align: center">
            <tr>
              <td
                style="text-align: center; width: 40%; font-weight: bold"
              ></td>
              <td
                style="text-align: center; width: 40%; font-weight: bold"
              ></td>
              <td style="text-align: center; width: 100%; font-weight: bold">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                COORDONNATEUR
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </td>
            </tr>
            <tr>
              <td style="text-align: left; width: 40%"></td>
              <td style="text-align: left; width: 40%"><br /><br /></td>

              <td style="text-align: center; width: 40%">
                <br /><br /><br />{{ nomCoordo }}
              </td>
              <br />
            </tr>

            <tr>
              <td
                style="
                  text-align: center;
                  font-size: 12px !important;
                  font-weight: bold;
                "
                colspan="3"
              >
                <span style="text-decoration-line: overline !important"
                  >Programme d'Appui à la Production Avicole Nationale</span
                ><br />
                <span
                  >COCODY-II Plateaux-Quartier Polyclinique.Tel : 27-22-41-13-79
                  / 27-22-54-38-78 BP V 185 Abidjan</span
                ><br />
                <span>papan.mirah@yahoo.com</span>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import moment from "moment";
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
      ladate: new Date(),
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
    this.id_mission = this.$route.params.id;
    this.getOrdreMission();
    this.getSignataire();
  },
  computed: {
    ...mapGetters("Personnel", [
      "getterNatureDepense",
      "gettersOrdreMissionParUser",
      "gettersOrdreMission",
      "gettersOrdreMission",
      "gettersPersonnel",
      "gettersPersonnelParUtilisateur",
      "gettersPersonnelParActivite",
      "gettersFonction",
      "gettersService",
      "gettersSituationMatrimonial",
      "gettersEmploi",
      "gettersNatureContrat",
      "gettersDiplome",
      "gettersTypeIndemnite",
      "gettersTypePiece",
      "gettersDetailDepensePerso",
    ]),
    ...mapGetters("parametrage", [
      "getterActivite",
      "gettersSignataire",
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
    numeroBordereau() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettersOrdreMission.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.numero_mission;
          }
          return 0;
        }
      };
    },
    nomCoordo() {
      //   return (id) => {
      //     if (id != null && id != "") {
      const qtereel = this.gettersSignataire.find((qtreel) => qtreel.code == 0);

      if (qtereel) {
        return qtereel.nom_signataire;
      }
      return 0;
      //     }
      //   };
    },
    civilite() {
      //   return (id) => {
      //     if (id != null && id != "") {
      const qtereel = this.gettersOrdreMission.find(
        (qtreel) => qtreel.id == this.id_mission
      );

      if (qtereel) {
        return qtereel.civilite;
      }
      return 0;
      //     }
      //   };
    },
    nom_personnel() {
      //   return (id) => {
      //     if (id != null && id != "") {
      const qtereel = this.gettersOrdreMission.find(
        (qtreel) => qtreel.id == this.id_mission
      );

      if (qtereel) {
        return qtereel.personnel;
      }
      return 0;
      //     }
      //   };
    },
    fonction() {
      //   return (id) => {
      //     if (id != null && id != "") {
      const qtereel = this.gettersOrdreMission.find(
        (qtreel) => qtreel.id == this.id_mission
      );

      if (qtereel) {
        return qtereel.fonction;
      }
      return 0;
      //     }
      //   };
    },
    matricule() {
      //   return (id) => {
      //     if (id != null && id != "") {
      const qtereel = this.gettersOrdreMission.find(
        (qtreel) => qtreel.id == this.id_mission
      );

      if (qtereel) {
        return qtereel.matricule;
      }
      return 0;
      //     }
      //   };
    },
    lieu_ordre_mission() {
      //   return (id) => {
      //     if (id != null && id != "") {
      const qtereel = this.gettersOrdreMission.find(
        (qtreel) => qtreel.id == this.id_mission
      );

      if (qtereel) {
        return qtereel.lieu_ordre_mission;
      }
      return 0;
      //     }
      //   };
    },

    objet_depense() {
      //   return (id) => {
      //     if (id != null && id != "") {
      const qtereel = this.gettersOrdreMission.find(
        (qtreel) => qtreel.id == this.id_mission
      );

      if (qtereel) {
        return qtereel.objet_depense;
      }
      return 0;
      //     }
      //   };
    },

    moyen_transport() {
      //   return (id) => {
      //     if (id != null && id != "") {
      const qtereel = this.gettersOrdreMission.find(
        (qtreel) => qtreel.id == this.id_mission
      );

      if (qtereel) {
        return qtereel.moyen_transport;
      }
      return 0;
      //     }
      //   };
    },
    duree() {
      //   return (id) => {
      //     if (id != null && id != "") {
      const qtereel = this.gettersOrdreMission.find(
        (qtreel) => qtreel.id == this.id_mission
      );

      if (qtereel) {
        return qtereel.duree;
      }
      return 0;
      //     }
      //   };
    },

    date_depart() {
      //   return (id) => {
      //     if (id != null && id != "") {
      const qtereel = this.gettersOrdreMission.find(
        (qtreel) => qtreel.id == this.id_mission
      );

      if (qtereel) {
        return qtereel.date_depart;
      }
      return 0;
      //     }
      //   };
    },

    date_retour() {
      //   return (id) => {
      //     if (id != null && id != "") {
      const qtereel = this.gettersOrdreMission.find(
        (qtreel) => qtreel.id == this.id_mission
      );

      if (qtereel) {
        return qtereel.date_retour;
      }
      return 0;
      //     }
      //   };
    },
    nature_economique() {
      //   return (id) => {
      //     if (id != null && id != "") {
      const qtereel = this.gettersOrdreMission.find(
        (qtreel) => qtreel.id == this.id_mission
      );

      if (qtereel) {
        return qtereel.nature_economique;
      }
      return 0;
      //     }
      //   };
    },
  },
  methods: {
    ...mapActions("parametrage", [
      "getSousBudget",
      "getSignataire",
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
    ...mapActions("Personnel", [
      "getService",
      "supprimerOrdreMissionUser",
      "getOrdreMissionUser",
      "getOrdreMission",
      "AjouterOrdreMission",
      "ModifierOrdreMission",
      "supprimerOrdreMission",
      "getPersonnelParActivite",
      "getDetailDepensePersonnel",
      "getPersonnelUtilisateur",
      "getPersonnel",
      "supprimerPersonnel",
      "supprimerPersonnelParUser",
      "getFonction",
      "getEmploi",
      "getNatureContrat",
      "getSituationMatrimonial",
      "getDiplome",
      "ModifierPersonnel",
      "getTypeIndemnite",
      "getTypePiece",

      "AjouterPersonnel",
    ]),
    pagePrecedent() {
      window.history.back();
    },
    formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
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
