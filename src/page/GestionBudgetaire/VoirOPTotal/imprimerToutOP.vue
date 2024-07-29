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
                  @click.prevent="retour(id_dossier)"
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
                    src="../../../../public/csslogin/images/logo1.jpg"
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
          <h3 style="text-align: center; border: 1px solid #000">
            ORDRE DE PAIEMENT DEPENSE
          </h3>
          <table
            id="customers"
            style="text-align: center; border: 1px solid #000; width: 100%"
          >
            <thead>
              <tr>
                <th
                  style="
                    font-size: 12px;
                    font-weight: bold;
                    color: #000;
                    width: 10%;
                    text-align: left;
                    line-height: 200%;
                  "
                  title=""
                >
                  EXERCICE
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span
                    style="text-align: center !important; line-height: normal"
                    >:</span
                  >
                </th>

                <td
                  style="
                    font-size: 16px;
                    font-weight: bold;
                    color: #000;
                    text-align: left;
                  "
                >
                  {{ exerciceBudgetaire }}
                </td>
              </tr>
            </thead>

            <thead>
              <tr style="text-align: center; border: 1px solid #000 !important">
                <th
                  style="
                    font-size: 12px;
                    font-weight: bold;
                    color: #000;
                    width: 40%;
                    text-align: left;
                    line-height: 200%;
                  "
                  title=""
                >
                  NUMERO DE ORDRE PAIEMENT
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                    style="text-align: center !important; line-height: normal"
                    >:</span
                  >
                </th>
                <td
                  style="
                    font-size: 16px;
                    font-weight: bold;
                    color: #000;
                    text-align: left;
                  "
                >
                  {{ numero_ordre_paiement }}
                </td>
              </tr>
            </thead>
            <thead>
              <tr style="text-align: center; border: 1px solid #000 !important">
                <th
                  style="
                    font-size: 12px;
                    font-weight: bold;
                    color: #000;
                    width: 10%;
                    text-align: left;
                    line-height: 200%;
                  "
                  title=""
                >
                  NOM DU BENEFICIAIRE
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                    style="text-align: center !important; line-height: normal"
                    >:</span
                  >
                </th>
                <td
                  style="
                    font-size: 16px;
                    font-weight: bold;
                    color: #000;
                    text-align: left;
                  "
                >
                  {{ beneficiaire }}
                </td>
              </tr>
            </thead>
            <thead>
              <tr style="text-align: center; border: 1px solid #000 !important">
                <th
                  style="
                    font-size: 12px;
                    font-weight: bold;
                    color: #000;
                    width: 10%;
                    text-align: left;
                    line-height: 200%;
                  "
                  title=""
                >
                  ADRESSE
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                    style="text-align: center !important; line-height: normal"
                    >:</span
                  >
                </th>
                <td
                  style="
                    font-size: 16px;
                    font-weight: bold;
                    color: #000;
                    text-align: left;
                  "
                >
                  {{ beneficiaire_adresse }}
                </td>
              </tr>
            </thead>

            <thead>
              <tr style="text-align: center; border: 1px solid #000 !important">
                <th
                  style="
                    font-size: 12px;
                    font-weight: bold;
                    color: #000;
                    width: 10%;
                    text-align: left;
                    line-height: 200%;
                  "
                  title=""
                >
                  OBJET DE LA DEPENSE
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                    style="text-align: center !important; line-height: normal"
                    >:</span
                  >
                </th>
                <td
                  style="
                    font-size: 14px;
                    font-weight: bold;
                    color: #000;
                    text-align: left;
                  "
                  class="text-break"
                >
                  {{ objetDepense }}
                </td>
              </tr>
            </thead>
            <thead>
              <tr style="text-align: center; border: 1px solid #000 !important">
                <th
                  style="
                    font-size: 12px;
                    font-weight: bold;
                    color: #000;
                    width: 10%;
                    text-align: left;
                    line-height: 200%;
                  "
                  title=""
                >
                  N° COMPTE CONTRIBUABLE
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                    style="text-align: center !important; line-height: normal"
                    >:</span
                  >
                </th>
                <td
                  style="
                    font-size: 16px;
                    font-weight: bold;
                    color: #000;
                    text-align: left;
                  "
                >
                  {{ beneficiaire_numero_cc }}
                </td>
              </tr>
            </thead>
            <thead>
              <tr style="text-align: center; border: 1px solid #000 !important">
                <th
                  style="
                    font-size: 12px;
                    font-weight: bold;
                    color: #000;
                    width: 10%;
                    text-align: left;
                    line-height: 200%;
                  "
                  title=""
                >
                  MONTANT DES PRESTATIONS
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                    style="text-align: center !important; line-height: normal"
                    >:</span
                  >
                </th>
                <td
                  style="
                    font-size: 16px;
                    font-weight: bold;
                    color: #000;
                    text-align: left;
                  "
                >
                  {{ formatageSomme(parseFloat(montant_prestation)) }}
                </td>
              </tr>
            </thead>
            <thead>
              <tr style="text-align: center; border: 1px solid #000 !important">
                <th
                  style="
                    font-size: 12px;
                    font-weight: bold;
                    color: #000;
                    width: 10%;
                    text-align: left;
                    line-height: 200%;
                  "
                  title=""
                >
                  N° COMPTE BANCAIRE &nbsp;&nbsp;&nbsp;<span
                    style="text-align: center !important; line-height: normal"
                    >:</span
                  >
                </th>
                <td
                  style="
                    font-size: 16px;
                    font-weight: bold;
                    color: #000;
                    text-align: left;
                  "
                >
                  {{ rib_compte(id_compte) }}
                </td>
              </tr>
            </thead>
            <thead>
              <tr style="text-align: center; border: 1px solid #000 !important">
                <th
                  style="
                    font-size: 12px;
                    font-weight: bold;
                    color: #000;
                    width: 10%;
                    text-align: left;
                    line-height: 200%;
                  "
                  title=""
                >
                  N°FACTURE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span
                    style="text-align: center !important; line-height: normal"
                    >:</span
                  >
                </th>
                <td
                  style="
                    font-size: 16px;
                    font-weight: bold;
                    color: #000;
                    text-align: left;
                  "
                >
                  {{ listeFactureopt }}
                </td>
              </tr>
            </thead>
            <thead>
              <tr style="text-align: center; border: 1px solid #000 !important">
                <th
                  style="
                    font-size: 12px;
                    font-weight: bold;
                    color: #000;
                    width: 10%;
                    text-align: left;
                    line-height: 200%;
                  "
                  title=""
                >
                  COMPOSANTE
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span
                    style="text-align: center !important; line-height: normal"
                    >:</span
                  >
                </th>
                <td
                  style="
                    font-size: 16px;
                    font-weight: bold;
                    color: #000;
                    text-align: left;
                  "
                >
                  {{ libellesousbudget }}
                </td>
              </tr>
            </thead>
            <thead>
              <tr style="text-align: center; border: 1px solid #000 !important">
                <th
                  style="
                    font-size: 12px;
                    font-weight: bold;
                    color: #000;
                    width: 10%;
                    text-align: left;
                    line-height: 200%;
                  "
                  title=""
                >
                  IMPUTATION
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span
                    style="text-align: center !important; line-height: normal"
                    >:</span
                  >
                </th>
                <td
                  style="
                    font-size: 16px;
                    font-weight: bold;
                    color: #000;
                    text-align: left;
                  "
                >
                  {{ imputation }}
                </td>
              </tr>
            </thead>
            <thead>
              <tr style="text-align: center; border: 1px solid #000 !important">
                <th
                  style="
                    font-size: 12px;
                    font-weight: bold;
                    color: #000;
                    width: 10%;
                    text-align: left;
                    line-height: 200%;
                  "
                  title=""
                >
                  DOTATION
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span
                    style="text-align: center !important; line-height: normal"
                    >:</span
                  >
                </th>
                <td
                  style="
                    font-size: 16px;
                    font-weight: bold;
                    color: #000;
                    text-align: left;
                  "
                >
                  {{ formatageSomme(parseFloat(afficheDotaion)) }}
                </td>
              </tr>
            </thead>
            <thead>
              <tr style="text-align: center; border: 1px solid #000 !important">
                <th
                  style="
                    font-size: 12px;
                    font-weight: bold;
                    color: #000;
                    width: 10%;
                    text-align: left;
                    line-height: 200%;
                  "
                  title=""
                >
                  CUMUL DEPENSE ANTERIEURE
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                    style="text-align: center !important; line-height: normal"
                    >:</span
                  >
                </th>
                <td
                  style="
                    font-size: 16px;
                    font-weight: bold;
                    color: #000;
                    text-align: left;
                  "
                >
                  {{ formatageSomme(parseFloat(cumulAnterieure)) }}
                </td>
              </tr>
            </thead>
            <thead>
              <tr style="text-align: center; border: 1px solid #000 !important">
                <th
                  style="
                    font-size: 12px;
                    font-weight: bold;
                    color: #000;
                    width: 10%;
                    text-align: left;
                    line-height: 200%;
                  "
                  title=""
                >
                  DEPENSES EN COURS
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                    style="text-align: center !important; line-height: normal"
                    >:</span
                  >
                </th>
                <td
                  style="
                    font-size: 16px;
                    font-weight: bold;
                    color: #000;
                    text-align: left;
                  "
                >
                  {{ formatageSomme(parseFloat(montant_prestation)) }}
                </td>
              </tr>
            </thead>
            <thead>
              <tr style="text-align: center; border: 1px solid #000 !important">
                <th
                  style="
                    font-size: 12px;
                    font-weight: bold;
                    color: #000;
                    width: 10%;
                    text-align: left;
                    line-height: 200%;
                  "
                  title=""
                >
                  CUMUL DEPENSE EN COURS
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                    style="text-align: center !important; line-height: normal"
                    >:</span
                  >
                </th>
                <td
                  style="
                    font-size: 16px;
                    font-weight: bold;
                    color: #000;
                    text-align: left;
                  "
                >
                  {{ formatageSomme(parseFloat(cumulEnCours)) }}
                </td>
              </tr>
            </thead>
            <thead>
              <tr style="text-align: center; border: 1px solid #000 !important">
                <th
                  style="
                    font-size: 12px;
                    font-weight: bold;
                    color: #000;
                    width: 10%;
                    text-align: left;
                    line-height: 200%;
                  "
                  title=""
                >
                  SOLDE A NOUVEAU
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                    style="text-align: center !important; line-height: normal"
                    >:</span
                  >
                </th>
                <td
                  style="
                    font-size: 16px;
                    font-weight: bold;
                    color: #000;
                    text-align: left;
                  "
                >
                  {{ formatageSomme(parseFloat(disponible)) }}
                </td>
              </tr>
            </thead>
          </table>
          <table
            id="customers"
            style="text-align: center; border: 1px solid #000"
          >
            <tr>
              <td
                style="
                  border: 1px solid #000 !important;
                  text-align: center;
                  width: 40%;
                  font-weight: bold;
                "
              >
                SIGNATURES
              </td>
              <td
                style="
                  border: 1px solid #000 !important;
                  text-align: center;
                  width: 40%;
                  font-weight: bold;
                "
              >
                CACHET ET DATE
              </td>
              <td
                style="
                  border: 1px solid #000 !important;
                  text-align: center;
                  width: 100%;
                  font-weight: bold;
                "
              >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                OBSERVATIONS
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </td>
            </tr>
            <tr>
              <td
                style="
                  border: 1px solid #000 !important;
                  text-align: left;
                  width: 40%;
                "
              >
                Approbation et signature de l'Ordonnateur <br /><br /><br />
              </td>
              <td
                style="
                  border: 1px solid #000 !important;
                  text-align: left;
                  width: 40%;
                "
              >
                DATE <br /><br /><br />
              </td>
              <td
                style="
                  border: 1px solid #000 !important;
                  text-align: left;
                  width: 40%;
                "
              ></td>
            </tr>
            <tr>
              <td
                style="
                  border: 1px solid #000 !important;
                  text-align: left;
                  width: 40%;
                "
              >
                Visa du contrôleur Financier <br /><br /><br />
              </td>
              <td
                style="
                  border: 1px solid #000 !important;
                  text-align: left;
                  width: 40%;
                "
              >
                DATE <br /><br /><br />
              </td>
              <td
                style="
                  border: 1px solid #000 !important;
                  text-align: left;
                  width: 40%;
                "
              ></td>
            </tr>
            <tr>
              <td
                style="
                  border: 1px solid #000 !important;
                  text-align: left;
                  width: 40%;
                "
              >
                Approbation et Signature du Regisseur d'Avances
                <br /><br /><br />
              </td>
              <td
                style="
                  border: 1px solid #000 !important;
                  text-align: left;
                  width: 40%;
                "
              >
                DATE <br /><br /><br />
              </td>
              <td
                style="
                  border: 1px solid #000 !important;
                  text-align: left;
                  width: 40%;
                "
              ></td>
            </tr>
            <tr>
              <td
                style="
                  border: 1px solid #000 !important;
                  text-align: left;
                  width: 40%;
                "
              >
                Acquis Libératoire <br /><br /><br />
              </td>
              <td
                style="
                  border: 1px solid #000 !important;
                  text-align: left;
                  width: 40%;
                "
              >
                DATE <br /><br /><br />
              </td>
              <td
                style="
                  border: 1px solid #000 !important;
                  text-align: left;
                  width: 40%;
                "
              ></td>
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
    this.id_dossier = this.$route.params.id1;
    this.getListeOrdrePaiementGlobal();
    this.getEntreprise();
    this.getListeFacture();
    this.getSousBudget();
    // this.getBudgetEclate();
    // this.getBailleur();
    // this.getNatureDepense();
    this.getNatureEconomique();
    let objet = {
      id: this.activite_id,
    };
    this.getBudgetViseParActvite(objet);
    this.getCompteBancaire();
    // this.getActivite();
    //   this.getExerciceBudgetaire();
    //  // this.getGroupeActivitebudgetNotifie()
    //   this.getDotationNotifie();
  },
  computed: {
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
    typeOrdrePaiement() {
      //   return (id) => {
      //     if (id != null && id != "") {
      const qtereel = this.getterListeOPgloba.find(
        (qtreel) => qtreel.id == this.Activite_id
      );

      if (qtereel) {
        return qtereel.type_ordre_paiement;
      }
      return 0;
      //     }
      //   };
    },
    disponible() {
      return parseFloat(this.afficheDotaion) - parseFloat(this.cumulEnCours);
    },
    cumulEnCours() {
      return (
        parseFloat(this.cumulAnterieure) + parseFloat(this.montant_prestation)
      );
    },
    rib_compte() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.getterCompteBancaire.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.numero_compte;
          }
          return 0;
        }
      };
    },
    id_compte() {
      //   return (id) => {
      //     if (id != null && id != "") {
      const qtereel = this.getterListeOPgloba.find(
        (qtreel) => qtreel.id == this.Activite_id
      );

      if (qtereel) {
        return qtereel.compte_id;
      }
      return 0;
      //     }
      //   };
    },
    cumulAnterieure() {
      //   return (id) => {
      //     if (id != null && id != "") {
      const qtereel = this.getterListeOPgloba.find(
        (qtreel) => qtreel.id == this.Activite_id
      );

      if (qtereel) {
        return qtereel.cumul_anterieure;
      }
      return 0;
      //     }
      //   };
    },
    afficheDotaion() {
      if (this.sousbudget_id == 0 && this.activite_id != 0) {
        // return (id) => {
        //     if (id != null && id != "") {
        const qtereel = this.getterBudgetViseParActivite.find(
          (qtreel) =>
            qtreel.ligneeconomique_id == this.nature_economique_id &&
            qtreel.type_financement_id == this.type_financement_id &&
            qtreel.source_financement_id == this.source_financement_id &&
            qtreel.nature_depense_id == this.nature_depense_id
        );

        if (qtereel) {
          return qtereel.dotation_total;
        }
        return 0;
        //   }
        // };
      } else {
        const qtereel = this.getterBudgetViseParActivite.find(
          (qtreel) =>
            qtreel.ligneeconomique_id == this.nature_economique_id &&
            qtreel.type_financement_id == this.type_financement_id &&
            qtreel.source_financement_id == this.source_financement_id &&
            qtreel.nature_depense_id == this.nature_depense_id &&
            qtreel.sous_budget_id == this.sousbudget_id
        );

        if (qtereel) {
          return qtereel.dotation_total;
        }
        return 0;
      }
    },
    nature_economique_id() {
      //   return (id) => {
      //     if (id != null && id != "") {
      const qtereel = this.getterListeOPgloba.find(
        (qtreel) => qtreel.id == this.Activite_id
      );

      if (qtereel) {
        return qtereel.nature_economique_id;
      }
      return 0;
      //     }
      //   };
    },
    nature_depense_id() {
      //   return (id) => {
      //     if (id != null && id != "") {
      const qtereel = this.getterListeOPgloba.find(
        (qtreel) => qtreel.id == this.Activite_id
      );

      if (qtereel) {
        return qtereel.nature_depense_id;
      }
      return 0;
      //     }
      //   };
    },
    type_financement_id() {
      //   return (id) => {
      //     if (id != null && id != "") {
      const qtereel = this.getterListeOPgloba.find(
        (qtreel) => qtreel.id == this.Activite_id
      );

      if (qtereel) {
        return qtereel.type_financement_id;
      }
      return 0;
      //     }
      //   };
    },
    source_financement_id() {
      //   return (id) => {
      //     if (id != null && id != "") {
      const qtereel = this.getterListeOPgloba.find(
        (qtreel) => qtreel.id == this.Activite_id
      );

      if (qtereel) {
        return qtereel.source_financement_id;
      }
      return 0;
      //     }
      //   };
    },
    activite_id() {
      //   return (id) => {
      //     if (id != null && id != "") {
      const qtereel = this.getterListeOPgloba.find(
        (qtreel) => qtreel.id == this.Activite_id
      );

      if (qtereel) {
        return qtereel.activite_id;
      }
      return 0;
      //     }
      //   };
    },
    imputation() {
      //   return (id) => {
      //     if (id != null && id != "") {
      const qtereel = this.getterListeOPgloba.find(
        (qtreel) => qtreel.id == this.Activite_id
      );

      if (qtereel) {
        return qtereel.nature_economique;
      }
      return 0;
      //     }
      //   };
    },
    sousbudget_id() {
      //   return (id) => {
      //     if (id != null && id != "") {
      const qtereel = this.getterListeOPgloba.find(
        (qtreel) => qtreel.id == this.Activite_id
      );

      if (qtereel) {
        return qtereel.sous_budget_id;
      }
      return 0;
      //     }
      //   };
    },
    libellesousbudget() {
      //   return (id) => {
      //     if (id != null && id != "") {
      const qtereel = this.getterSousBudget.find(
        (qtreel) => qtreel.id == this.sousbudget_id
      );

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0;
      //     }
      //   };
    },
    ActiviteFacture_id() {
      //   return (id) => {
      //     if (id != null && id != "") {
      const qtereel = this.getterFacture.find(
        (qtreel) => qtreel.ordre_paiement_id == this.Activite_id
      );

      if (qtereel) {
        return 1;
      }
      return 0;
      //     }
      //   };
    },
    listeFactureopt() {
      if (this.ActiviteFacture_id == 1) {
        //   return (id) => {
        //     if (id != null && id != "") {
        const qtereel = this.getterFacture.find(
          (qtreel) => qtreel.ordre_paiement_id == this.Activite_id
        );

        if (qtereel) {
          return qtereel.numero_facture.concat(" du ", this.formaterDate(qtereel.date_facture));
        }
        return 0;
        //     }
        //   };
      } else {
        //   return (id) => {
        //     if (id != null && id != "") {
        const qtereel = this.getterFacture.find(
          (qtreel) => qtreel.ordre_paiement_def_id == this.Activite_id
        );

        if (qtereel) {
          return qtereel.numero_facture_definitve.concat(
            " du ",
            this.formaterDate(qtereel.date_facture_definitve)
          );
        }
        return 0;
        //     }
        //   };
      }
    },
    exerciceBudgetaire() {
      //   return (id) => {
      //     if (id != null && id != "") {
      const qtereel = this.getterListeOPgloba.find(
        (qtreel) => qtreel.id == this.Activite_id
      );

      if (qtereel) {
        return qtereel.exercice;
      }
      return 0;
      //     }
      //   };
    },
    numero_ordre_paiement() {
      //   return (id) => {
      //     if (id != null && id != "") {
      const qtereel = this.getterListeOPgloba.find(
        (qtreel) => qtreel.id == this.Activite_id
      );

      if (qtereel) {
        return qtereel.numero_ordre_paiement;
      }
      return 0;
      //     }
      //   };
    },
    objetDepense() {
      //   return (id) => {
      //     if (id != null && id != "") {
      const qtereel = this.getterListeOPgloba.find(
        (qtreel) => qtreel.id == this.Activite_id
      );

      if (qtereel) {
        return qtereel.objet_depense;
      }
      return 0;
      //     }
      //   };
    },
    montant_prestation() {
      //   return (id) => {
      //     if (id != null && id != "") {
      const qtereel = this.getterListeOPgloba.find(
        (qtreel) => qtreel.id == this.Activite_id
      );

      if (qtereel) {
        return qtereel.montant_prestation;
      }
      return 0;
      //     }
      //   };
    },
    beneficiaire() {
      //   return (id) => {
      //     if (id != null && id != "") {
      const qtereel = this.getterListeOPgloba.find(
        (qtreel) => qtreel.id == this.Activite_id
      );

      if (qtereel) {
        return qtereel.beneficiaire;
      }
      return 0;
      //     }
      //   };
    },

    beneficiaire_id() {
      //   return (id) => {
      //     if (id != null && id != "") {
      const qtereel = this.getterListeOPgloba.find(
        (qtreel) => qtreel.id == this.Activite_id
      );

      if (qtereel) {
        return qtereel.entreprise_id;
      }
      return 0;
      //     }
      //   };
    },
    beneficiaire_adresse() {
      //   return (id) => {
      //     if (id != null && id != "") {
      const qtereel = this.getterEntreprise.find(
        (qtreel) => qtreel.id == this.beneficiaire_id
      );

      if (qtereel) {
        return qtereel.adresse;
      }
      return 0;
      //     }
      //   };
    },
    beneficiaire_numero_cc() {
      //   return (id) => {
      //     if (id != null && id != "") {
      const qtereel = this.getterEntreprise.find(
        (qtreel) => qtreel.id == this.beneficiaire_id
      );

      if (qtereel) {
        return qtereel.numero_cc;
      }
      return 0;
      //     }
      //   };
    },
  },
  methods: {
    ...mapActions("parametrage", [
      "getSousBudget",
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
    retour(id) {
    
        this.$router.push({
        name: "listeToutOP",
        params: { id: id},
      });
      
      
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
