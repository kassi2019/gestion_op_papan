<template>
  <div class="container">
    <div class="col-md-12">
      <div class="card" style="box-shadow: 5px 5px #f9d531">
        <div class="card-header">
          <div class="page-header">
            <h6 class="fw-bold mb-3">vérification de la facture</h6>
            <ul class="breadcrumbs mb-3">
              <li class="nav-home">
                <a href="#">
                  <i class="icon-home"></i>
                </a>
              </li>
              <li class="separator">
                <i class="icon-arrow-right"></i>
              </li>
              <li class="nav-item">
                <a href="#">GESTION DES RAPPORT</a>
              </li>
              <li class="separator">
                <i class="icon-arrow-right"></i>
              </li>
              <li class="nav-item">
                <a href="#">Facture</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="card-body">
             <FormWizard color="#1D702D">
            <TabContent
              title="FACTURE EN COURS"
              icon="fas fa-walking"
            >
            <div class="table-responsive">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th colspan="6" style="border:1px solid #000 !important"></th>
                  <th colspan="3" style="text-align: center !important;border:1px solid #000 !important">
                    PERIODE DE VALIDATION DE LA FACTURE CHEZ LE CF
                  </th>
                  <th colspan="3" style="text-align: center !important;border:1px solid #000 !important">
                    PERIODE DE PAIEMENT CHEZ L'AGENT COMPTABLE PRINCIPAL ( ACP)
                  </th>
                  <th style="text-align: center !important;border:1px solid #000 !important">TOTAL DUREE</th>
                </tr>
                <tr>
                  <th scope="col" style="border:1px solid #000 !important;text-align: center">N°</th>

                  <th scope="col" style="border:1px solid #000 !important;text-align: center">N°OP</th>
                  <th scope="col" style="border:1px solid #000 !important;text-align: center">N°FACTURE</th>
                  <th scope="col" style="border:1px solid #000 !important;text-align: center">OBJET</th>
                  <th scope="col" style="border:1px solid #000 !important;text-align: center">MONTANT OP</th>
                  <th scope="col" style="border:1px solid #000 !important;text-align: center">DATE FACTURE</th>
                  <th scope="col" style="border:1px solid #000 !important;text-align: center">DATE decision</th>
                  <th scope="col" style="border:1px solid #000 !important;text-align: center">DATE DU JOUR</th>
                  <th scope="col" style="border:1px solid #000 !important;text-align: center">DUREE(jrs)(A)</th>
                 

                  <th scope="col" style="border:1px solid #000 !important;text-align: center">DATE COMPTA</th>
                  <th scope="col" style="border:1px solid #000 !important;text-align: center">DATE DU JOUR</th>
                  <th scope="col" style="border:1px solid #000 !important;text-align: center">DUREE(jrs)(B)</th>
                  <th scope="col" style="border:1px solid #000 !important;text-align: center">DUREE de vie facture(jrs)(C=A+B)</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(item, index) in gettersVerificationFactureEncours"
                  :key="item.id"
                >
                  <td style="border:1px solid #000 !important">{{ index + 1 }}</td>
                  <td style="border:1px solid #000 !important">{{ item.numero_ordre_paiement }}</td>
                  <td style="border:1px solid #000 !important">{{ item.numero_facture }}</td>
                  <td style="border:1px solid #000 !important">{{ item.objet_depense }}</td>
                  <td style="text-align: right;border:1px solid #000 !important">
                    {{
                      formatageSommeSansFCFA(
                        parseFloat(item.montant_prestation)
                      )
                    }}
                  </td>
                  <td style="border:1px solid #000 !important">{{ formaterDate(item.date_enregistrement_facture) }}</td>
                  <td style="border:1px solid #000 !important">{{ formaterDate(item.date_decision) }}</td>
                  <td style="border:1px solid #000 !important">{{ formaterDate(DateJours) }}</td>
                  <td style="border:1px solid #000 !important;text-align: center">
                    {{
                      DureContrat(
                        item.date_enregistrement_facture,
                        DateJours,
                        item.date_decision
                      )
                    }}
                  </td>

                  
                  <td style="border:1px solid #000 !important">{{ formaterDate(item.date_paiement) }}</td>
                  <td style="border:1px solid #000 !important">{{ formaterDate(DateJours) }}</td>
                  <td v-if="item.date_decision == null" style="border:1px solid #000 !important"></td>
                  <td v-else style="border:1px solid #000 !important;text-align: center">
                    {{
                      DureContrat(item.date_decision, DateJours, item.date_paiement)
                    }}
                  </td>
                  <td style="border:1px solid #000 !important;text-align: center" key=""
                  v-if="(DureContrat(item.date_decision, DateJours, item.date_paiement)+DureContrat(
                        item.date_enregistrement_facture,
                        DateJours,
                        item.date_decision
                      ))<=30"
                  >
                    {{
                      DureContrat(item.date_decision, DateJours, item.date_paiement)+DureContrat(
                        item.date_enregistrement_facture,
                        DateJours,
                        item.date_decision
                      )
                    }}
                  </td>
                  <td style="border:1px solid #000 !important;text-align: center;background-color:red" v-else>
                    {{
                      DureContrat(item.date_decision, DateJours, item.date_paiement)+DureContrat(
                        item.date_enregistrement_facture,
                        DateJours,
                        item.date_decision
                      )
                    }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
            </TabContent>
            <TabContent
              title="FACTURE ACHEVE"
              icon="fas fa-blind"
            >
            <div class="table-responsive">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th colspan="6" style="border:1px solid #000 !important"></th>
                  <th colspan="3" style="text-align: center !important;border:1px solid #000 !important">
                    PERIODE DE VALIDATION DE LA FACTURE CHEZ LE CF
                  </th>
                  <th colspan="3" style="text-align: center !important;border:1px solid #000 !important">
                    PERIODE DE PAIEMENT CHEZ L'AGENT COMPTABLE PRINCIPAL ( ACP)
                  </th>
                  <th style="text-align: center !important;border:1px solid #000 !important">TOTAL DUREE</th>
                </tr>
                <tr>
                  <th scope="col" style="border:1px solid #000 !important;text-align: center">N°</th>

                  <th scope="col" style="border:1px solid #000 !important;text-align: center">N°OP</th>
                  <th scope="col" style="border:1px solid #000 !important;text-align: center">N°FACTURE</th>
                  <th scope="col" style="border:1px solid #000 !important;text-align: center">OBJET</th>
                  <th scope="col" style="border:1px solid #000 !important;text-align: center">MONTANT OP</th>
                  <th scope="col" style="border:1px solid #000 !important;text-align: center">DATE FACTURE</th>
                  <th scope="col" style="border:1px solid #000 !important;text-align: center">DATE decision</th>
                  <th scope="col" style="border:1px solid #000 !important;text-align: center">DATE DU JOUR</th>
                  <th scope="col" style="border:1px solid #000 !important;text-align: center">DUREE(jrs)(A)</th>
                 

                  <th scope="col" style="border:1px solid #000 !important;text-align: center">DATE COMPTA</th>
                  <th scope="col" style="border:1px solid #000 !important;text-align: center">DATE DU JOUR</th>
                 <th scope="col" style="border:1px solid #000 !important;text-align: center">DUREE(jrs)(B)</th>
                  <th scope="col" style="border:1px solid #000 !important;text-align: center">DUREE de vie facture(jrs)(C=A+B)</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(item, index) in gettersVerificationFactureAcheve"
                  :key="item.id"
                >
                  <td style="border:1px solid #000 !important">{{ index + 1 }}</td>
                  <td style="border:1px solid #000 !important">{{ item.numero_ordre_paiement }}</td>
                  <td style="border:1px solid #000 !important">{{ item.numero_facture }}</td>
                  <td style="border:1px solid #000 !important">{{ item.objet_depense }}</td>
                  <td style="text-align: right;border:1px solid #000 !important">
                    {{
                      formatageSommeSansFCFA(
                        parseFloat(item.montant_prestation)
                      )
                    }}
                  </td>
                  <td style="border:1px solid #000 !important">{{ formaterDate(item.date_enregistrement_facture) }}</td>
                  <td style="border:1px solid #000 !important">{{ formaterDate(item.date_decision) }}</td>
                  <td style="border:1px solid #000 !important">{{ formaterDate(DateJours) }}</td>
                  <td style="border:1px solid #000 !important;text-align: center">
                    {{
                      DureContrat(
                        item.date_enregistrement_facture,
                        DateJours,
                        item.date_decision
                      )
                    }}
                  </td>

                 
                  <td style="border:1px solid #000 !important">{{ formaterDate(item.date_paiement) }}</td>
                  <td style="border:1px solid #000 !important">{{ formaterDate(DateJours) }}</td>
                  <td v-if="item.date_decision == null" style="border:1px solid #000 !important"></td>
                  <td v-else style="border:1px solid #000 !important;text-align: center">
                    {{
                      DureContrat(item.date_decision, DateJours, item.date_paiement)
                    }}
                  </td>
                  <td style="border:1px solid #000 !important;text-align: center" key=""
                  v-if="(DureContrat(item.date_decision, DateJours, item.date_paiement)+DureContrat(
                        item.date_enregistrement_facture,
                        DateJours,
                        item.date_decision
                      ))<=30"
                  >
                    {{
                      DureContrat(item.date_decision, DateJours, item.date_paiement)+DureContrat(
                        item.date_enregistrement_facture,
                        DateJours,
                        item.date_decision
                      )
                    }}
                  </td>
                  <td style="border:1px solid #000 !important;text-align: center;background-color:red" v-else>
                    {{
                      DureContrat(item.date_decision, DateJours, item.date_paiement)+DureContrat(
                        item.date_enregistrement_facture,
                        DateJours,
                        item.date_decision
                      )
                    }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
            </TabContent>
            </FormWizard>
          
        </div>
      </div>
    </div>
    <!-- modal de modification -->
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import moment from "moment";
import { formatageSommeSansFCFA } from "../Repositories/Repository";
import { FormWizard, TabContent } from "vue3-form-wizard";
export default {
  name: "TodoItem",
  components: {FormWizard,TabContent},
  data() {
    return {
      ajouterNatureDepense: {
        code: "",
        libelle: "",
      },
      modNatureDepense: {
        code: "",
        libelle: "",
      },
    };
  },
  created() {
      this.getVerificationFactureEncours();
    this.getVerificationFactureAcheve()
  },
  computed: {
    ...mapGetters("parametrage", ["gettersVerificationFactureEncours","gettersVerificationFactureAcheve"]),
    DateJours() {
      let date = new Date();
      let aaaa = date.getFullYear();
      let gg = date.getDate();
      let mm = date.getMonth() + 1;
      let moi;
      let jour;
      if (gg < 10) {
        jour = "0" + gg;
      } else {
        jour = gg;
      }
      if (mm < 10) {
        moi = "0" + mm;
      } else {
        moi = mm;
      }
      let cur_day = aaaa + "-" + moi + "-" + jour;
      return cur_day;
      // return cur_day + " " + hours + ":" + minutes + ":" + seconds;
    },
  },
  methods: {
    ...mapActions("parametrage", ["getVerificationFactureEncours",'getVerificationFactureAcheve']),

    DureContrat($id, $id1, $id3) {
      if ($id3 == null) {
        if ($id1 == "" && $id == "") return null;
        var dateR = new Date($id1).getTime();
        var dateD = new Date($id).getTime();
        var diffTime = dateR - dateD;

        var diffJours = diffTime / (1000 * 3600 * 24);
        if (isNaN(diffJours)) return null;

        if (parseFloat(diffJours) < 0) return "durée invalide";

        return diffJours;
      } else {
        if ($id3 == "" && $id == "") return null;
        var dateR1 = new Date($id3).getTime();
        var dateD1 = new Date($id).getTime();
        var diffTime1 = dateR1 - dateD1;

        var diffJours1 = diffTime1 / (1000 * 3600 * 24);
        if (isNaN(diffJours1)) return null;

        if (parseFloat(diffJours1) < 0) return "durée invalide";

        return diffJours1;
      }
    },

    AfficheModalModification(id) {
      this.modNatureDepense = this.gettersFonction.find(
        (items) => items.id == id
      );
    },
    EnregistrerSection() {
      var objetDirect1 = {
        libelle: this.ajouterNatureDepense.libelle,
      };

      this.AjouterFonction(objetDirect1);
      this.ajouterNatureDepense = {
        libelle: "",
      };
    },

    modificationSection() {
      var objetDirect1 = {
        id: this.modNatureDepense.id,

        libelle: this.modNatureDepense.libelle,
      };

      this.ModifierFonction(objetDirect1);
      this.modNatureDepense = {};
    },
    formatageSommeSansFCFA: formatageSommeSansFCFA,
    formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },
  },
};
</script>
