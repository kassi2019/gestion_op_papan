<template>
  <div class="container">
    <div class="col-md-12">
       
      <div class="card" style="box-shadow: 5px 5px #f9d531">
        <div class="card-header">
          <div class="d-flex align-items-center">
            <h4 class="card-title">Imprimer Ordre de paiement</h4>
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
                  DIRECTION DES PRODUCTIONS ANIMALES<br />
                  ------------------------- <br />
                  Fonds d'Aide à la Production Avicole Nationale <br />
                  <img
                    src="../../../../public/csslogin/images/logo1.jpg"
                    width="150px;"
                  /><br /><br />
                  N°
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/24
                  MIRAH-PAPAN/KL
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
                  
                  width: 40%;
                "
              >
                <h6 style="font-size: 12px">
                  République de Côte d'Ivoire <br />
                  ------------------------- <br />
                  Union-Discipline-Travail<br />
                  ------------------------- <br /><br /><br /><br />
                  <p style="font-weight: bolder">Abidjan,le</p>
                </h6>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <!-- <img src="/optimisation/skin/img/log3.png" width="80px;"  /> -->
              </td>
            </tr>
          </table>
          <h6 style="text-align: center; font-weight: bolder; font-size: 15px">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; SOIT
            TRANSMIS
          </h6>
          <h5 style="text-align: right; font-weight: bolder; font-size: 15px">
            MADAME LE CONTROLEUR FINANCIER
          </h5>
          <h6 style="text-align: center">
            OBJET :{{ libelleBordereau(bordereau_id) }}
          </h6>
          <div class="table-responsive">
            <table
              class="table table-bordered"
              id="customers"
              style="border: 1px solid #000"
            >
              <thead>
                <tr>
                  <th
                    scope="col"
                    style="
                      border: 1px solid #000 !important;
                      text-align: center;
                      
                      font-weight: bold;
                    "
                  >
                    N°
                  </th>
                  <th
                    scope="col"
                    style="
                      border: 1px solid #000 !important;
                      text-align: center;
                      width: 10%;
                      font-weight: bold;
                    "
                  >
                    N°OP
                  </th>
                  <th
                    scope="col"
                    style="
                      border: 1px solid #000 !important;
                      text-align: center;
                      width: 80%;
                      font-weight: bold;
                    "
                  >
                  
                    Libelle
                  </th>
                  <th
                    scope="col"
                    style="
                      border: 1px solid #000 !important;
                      text-align: center;
                      width: 20%;
                      font-weight: bold;
                    "
                  >
                    Montant
                  </th>
                  
                 
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item1,index) in AfficheOPParBordereau" :key="item1.id">
                    <td style="width: 10%;border: 1px solid #000 !important;">{{ index+1 }}</td>
                  <td style="border: 1px solid #000 !important;">
                    {{ item1.numero_ordre_paiement }}
                  </td>
                  <td style="border: 1px solid #000 !important;">
                    {{ item1.objet_depense }}
                  </td>
                  <td style=" text-align: right;border: 1px solid #000 !important;">
                    {{ formatageSommeSansFCFA(parseFloat(item1.montant_prestation)) }}
                  </td>
                 
                </tr>
              </tbody>
            </table>
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
    this.bordereau_id = this.$route.params.id;
    this.getInformationBudget();
     this.getListeOrdrePaiementGlobal();
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
    ...mapGetters("parametrage", [
      "getterActivite",
      "getterInformationBudget",
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
      AfficheOPParBordereau() {
        return this.getterListeOPgloba.filter(item=>item.bordereau_id==this.bordereau_id)
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
          const qtereel = this.getterInformationBudget.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.libelle;
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
