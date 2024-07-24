<template>
  <div class="container">
    <div class="col-md-12">
      <div class="card" style="box-shadow: 5px 5px #f9d531">
        <div class="card-header">
          <div class="page-header">
            <h6 class="fw-bold mb-3">Mdification</h6>
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
                <a href="#">Gestion budgétaire</a>
              </li>
              <li class="separator">
                <i class="icon-arrow-right"></i>
              </li>
              <li class="nav-item">
                <a href="#">Modification Budgétaire</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="card-body">
          <FormWizard @on-complete="onComplete" color="#e67e22">
            <TabContent title="MODIFICATION BUDGETAIRE" icon="ti-pencil-alt2">
              <div class="row">
                <div class="col-lg-12">
                  <form class="row g-3">
                    <div class="col-3">
                      <label class="form-label">Exercice</label>
                      <input
                        type="text"
                        class="form-control"
                        readonly
                        :value="exerciceBudgetaire"
                        style="border: 1px solid #000 !important"
                      />
                    </div>
                    <div class="col-9">
                      <label class="form-label"
                        >Unité Opérationnelle
                        <span
                          style="
                            color: red !important;
                            font-size: 15px !important;
                          "
                          >*</span
                        ></label
                      >

                      <model-list-select
                        :list="getterProjet"
                        v-model="unite_operationnelle_id"
                        option-value="id"
                        option-text="nom_projet"
                        placeholder="select item"
                        style="border: 1px solid #000"
                      >
                      </model-list-select>
                      <span
                        style="color: red"
                        v-if="unite_operationnelle_id == 0"
                        >Ce champs est obligatoire!
                      </span>
                    </div>
                    <div class="col-6">
                      <label class="form-label"
                        >Activité
                        <span
                          style="
                            color: red !important;
                            font-size: 15px !important;
                          "
                          >*</span
                        ></label
                      >
                      <model-list-select
                        :list="libelleActivite"
                        v-model="activite_id"
                        option-value="id"
                        option-text="libelle"
                        placeholder="select item"
                        style="border: 1px solid #000"
                      >
                      </model-list-select>
                      <span style="color: red" v-if="activite_id == 0"
                        >Ce champs est obligatoire!
                      </span>
                    </div>
                    <div class="col-6">
                      <label class="form-label">Sous budget</label>
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
                    <div class="col-9">
                      <label class="form-label"
                        >Nature économique
                        <span
                          style="
                            color: red !important;
                            font-size: 15px !important;
                          "
                          >*</span
                        ></label
                      >
                      <model-list-select
                        :list="AfficheNatureEconomique"
                        v-model="economique_id"
                        option-value="id"
                        option-text="objet"
                        placeholder="select item"
                        style="border: 1px solid #000"
                      >
                      </model-list-select>
                      <span style="color: red" v-if="economique_id == 0"
                        >Ce champs est obligatoire!
                      </span>
                    </div>
                    <div class="col-3">
                      <label class="form-label">Nature de depense</label>
                      <input
                        type="text"
                        class="form-control"
                        style="border: 1px solid #000 !important"
                        :value="libelleNatureDepense"
                        readonly
                      />
                    </div>
                    <div class="col-3">
                      <label class="form-label"
                        >Type financement
                        <span
                          style="
                            color: red !important;
                            font-size: 15px !important;
                          "
                          >*</span
                        ></label
                      >
                      <model-list-select
                        :list="AfficheTypeFinancement"
                        v-model="type_financement_id"
                        option-value="id"
                        option-text="objet"
                        placeholder="select item"
                        style="border: 1px solid #000"
                      >
                      </model-list-select>
                      <span style="color: red" v-if="type_financement_id == 0"
                        >Ce champs est obligatoire!
                      </span>
                    </div>
                    <div class="col-9">
                      <label class="form-label"
                        >Source de financement
                        <span
                          style="
                            color: red !important;
                            font-size: 15px !important;
                          "
                          >*</span
                        ></label
                      >
                      <model-list-select
                        :list="AfficheSourceFinancement"
                        v-model="source_financement_id"
                        option-value="id"
                        option-text="objet"
                        placeholder="select item"
                        style="border: 1px solid #000"
                      >
                      </model-list-select>
                      <span style="color: red" v-if="source_financement_id == 0"
                        >Ce champs est obligatoire!
                      </span>
                    </div>
                    <div class="col-4">
                      <label for="inputNanme4" class="form-label"
                        >Dotation Actuelle (A)</label
                      >
                      <money3 class="form-control" style=""></money3>
                    </div>

                    <div class="col-4">
                      <label for="inputNanme4" class="form-label"
                        >Variation(D)</label
                      >
                      <money3 class="form-control" style=""></money3>
                    </div>
                    <div class="col-4">
                      <label for="inputNanme4" class="form-label"
                        >Nouveau montant actuel (E=)</label
                      >
                      <money3 class="form-control" style=""></money3>
                    </div>
                  </form>
                </div>
              </div>
            </TabContent>
            <TabContent title="VERIFICATION DU BUDGET" icon="ti-search">
              <div class="col-12">
                <label class="form-label"
                  >Activité
                  <span
                    style="color: red !important; font-size: 15px !important"
                  ></span
                ></label>
                <model-list-select
                  :list="libelleActivite"
                  v-model="activite_id"
                  option-value="id"
                  option-text="libelle"
                  placeholder="select item"
                  style="border: 1px solid #000"
                >
                </model-list-select>
              </div>
              <br />
              <table class="table table-bordered border-primary">
                <thead>
                  <tr style="border: 1px solid #000 !important">
                    <!-- <th scope="col">#</th> -->
                    <!-- <th scope="col">N</th> -->
                    <th
                      scope="col"
                      style="
                        text-align: center;
                        border: 1px solid #000 !important;
                      "
                    >
                      Nature economique{{ activite_id }}
                    </th>
                    <th
                      scope="col"
                      style="
                        text-align: center;
                        border: 1px solid #000 !important;
                      "
                    >
                      type financement
                    </th>
                    <th
                      scope="col"
                      style="
                        text-align: center;
                        border: 1px solid #000 !important;
                      "
                    >
                      Bailleur
                    </th>
                    <th
                      scope="col"
                      style="
                        text-align: center;
                        border: 1px solid #000 !important;
                      "
                    >
                      nature depense
                    </th>
                    <th
                      scope="col"
                      style="
                        text-align: center;
                        border: 1px solid #000 !important;
                      "
                    >
                      Dotation Actuelle
                    </th>
                    <th
                      scope="col"
                      style="
                        text-align: center;
                        border: 1px solid #000 !important;
                      "
                    >
                      Report
                    </th>
                    <th
                      scope="col"
                      style="
                        text-align: center;
                        border: 1px solid #000 !important;
                      "
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item1 in afficheBudgetParActivite" :key="item1.id">
                    <td style="width: 40%; border: 1px solid #000 !important">
                      {{ afficheNatureEconomique(item1.ligneeconomique_id) }}
                    </td>
                    <td style="width: 10%; border: 1px solid #000 !important">
                      {{ afficheTypeFinancement(item1.type_financement_id) }}
                    </td>
                    <td style="width: 20%; border: 1px solid #000 !important">
                      {{
                        afficheSourceFinancement(item1.source_financement_id)
                      }}
                    </td>
                    <td style="width: 10%; border: 1px solid #000 !important">
                      {{ afficheGrandeNature(item1.nature_depense_id) }}
                    </td>
                    <td
                      style="
                        width: 10%;
                        text-align: right;
                        border: 1px solid #000 !important;
                      "
                    >
                      {{
                        formatageSommeSansFCFA(
                          parseFloat(item1.dotation_actuelle)
                        )
                      }}
                    </td>
                    <td
                      style="
                        width: 15%;
                        text-align: right;
                        border: 1px solid #000 !important;
                      "
                    >
                      {{
                        formatageSommeSansFCFA(
                          parseFloat(item1.dotation_report)
                        )
                      }}
                    </td>
                    <td
                      style="
                        width: 15%;
                        text-align: right;
                        border: 1px solid #000 !important;
                      "
                    >
                      <span
                        class="badge rounded-pill bg-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#largeModal1"
                        style="cursor: pointer"
                        @click.prevent="AfficheModalModification(item1.id)"
                        >Modifier</span
                      >
                      <!-- <span
                      class="badge bg-danger"
                      style="cursor: pointer"
                      @click.prevent="supprimerDotationNotifie(item1.id)"
                      >Supprimer</span
                    > -->
                    </td>
                  </tr>
                </tbody>
              </table>
            </TabContent>
            <TabContent title="IMPRIMER BUDGET PRIMITIF" icon="ti-printer">
              <table class="table table-bordered border-primary">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      style="
                        text-align: center;
                        border: 1px solid #000 !important;
                      "
                    >
                      Numéro
                    </th>
                    <th
                      scope="col"
                      style="
                        text-align: center;
                        border: 1px solid #000 !important;
                      "
                    >
                      Activité
                    </th>

                    <th
                      scope="col"
                      style="
                        text-align: center;
                        border: 1px solid #000 !important;
                      "
                    >
                      Total (FCFA)
                    </th>
                    <th
                      scope="col"
                      style="
                        text-align: center;
                        border: 1px solid #000 !important;
                      "
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item1, index) in getterActivite" :key="item1.id">
                    <td style="border: 1px solid #000 !important">
                      {{ index + 1 }}
                    </td>
                    <td style="width: 55%; border: 1px solid #000 !important">
                      {{ item1.code }}-{{ item1.libelle }}
                    </td>
                    <td
                      style="
                        text-align: right;
                        border: 1px solid #000 !important;
                      "
                    >
                      {{
                        formatageSommeSansFCFA(
                          parseFloat(AfficheMontantBudget(item1.id))
                        )
                      }}
                    </td>
                    <td style="border: 1px solid #000 !important">
                      <span
                        class="badge bg-dark"
                        style="cursor: pointer"
                        @click.prevent="voirBudgett(item1.id)"
                        >Budget</span
                      >
                      <span
                        class="badge bg-info"
                        style="cursor: pointer"
                        @click.prevent="voirSousBudget(item1.id)"
                        >Composante</span
                      >
                    </td>
                  </tr>
                </tbody>
              </table>
            </TabContent>
          </FormWizard>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
// import moment from "moment";
import { ModelListSelect } from "vue-search-select";
import { FormWizard, TabContent } from "vue3-form-wizard";

//  import { required} from  'vuelidate/lib/validators'

import {
  formatageSomme,
  formatageSommeSansFCFA,
} from "../Repositories/Repository";
export default {
  components: {
    ModelListSelect,
    FormWizard,
    TabContent,
  },
  data() {
    return {
      TableauDossier: [],
      ModifierBudget: {},

      type_financement_id: 0,
      source_financement_id: 0,
      economique_id: 0,
      activite_id: 0,
      unite_operationnelle_id: 0,
      nature_depense_id: 0,
      sous_budget_id: 0,
      global: 0,
      autreRessource: 0,
      ressourcePropre: 0,
      report: 0,
      notifie: 0,
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
    this.dossier_id = this.$route.params.id;
    this.getExerciceBudgetaire();
    this.getActivite();
    this.getNatureEconomique();
    this.getSousBudget();
    this.getProjet();
    this.getNatureDepense();
    this.getTypeFinancement();
    this.getBailleur();
    this.getDotationNotifie();
    this.getDotationReport();
    this.getDotationRessourcePropre();
    this.getDotationAutreRessource();
    this.getBudgetEclate();

    //   // this.getDotationNotifie();
  },
  validations: {
    // economique_id: { required },
    // activite_id: { required },
    // unite_operationnelle_id: { required },
    // nature_depense_id: { required },
    // FormDataDossier: {
    //   dotation_report: { required },
    //   dotation_actuelle: { required },
    //   type_financement_id: { required },
    //   source_financement_id: { required },
    // },
  },
  computed: {
    ...mapGetters("parametrage", [
      "getterProjet",
      "getterActivite",
      "getterBudgetViseParActivite",
      "getterTypeFinancement",
      "getterExerciceBudgetaire",
      "getterDotationNotifie",
      "getterNatureEconomique",

      "getterNatureDepense",
      "getterSousBudget",
      "getterBailleur",
      "getterDotationReport",
      "getterDotationRessourcePropre",
      "getterDotationAutreRessource",
      "getterListeBudgetEclate",
    ]),

    libelleNatureDepense() {
      if (this.sous_budget_id == 0 && this.activite_id != 0) {
        // return (id) => {
        //   if (id != null && id != "") {
        const qtereel = this.getterBudgetViseParActivite.find(
          (qtreel) =>
            qtreel.ligneeconomique_id == this.economique_id &&
            qtreel.type_financement_id == this.type_financement_id &&
            qtreel.source_financement_id == this.source_financement_id &&
            qtreel.actuelle == 1
        );

        if (qtereel) {
          return this.afficheNatureDepense(qtereel.nature_depense_id);
        }
        return 0;
        //   }
        // };
      } else {
        // return (id) => {
        //   if (id != null && id != "") {
        const qtereel = this.getterBudgetViseParActivite.find(
          (qtreel) =>
            qtreel.ligneeconomique_id == this.economique_id &&
            qtreel.sous_budget_id == this.sous_budget_id &&
            qtreel.type_financement_id == this.type_financement_id &&
            qtreel.source_financement_id == this.source_financement_id &&
            qtreel.actuelle == 1
        );

        if (qtereel) {
          return this.afficheNatureDepense(qtereel.nature_depense_id);
        }
        return 0;
        //   }
        // };
      }
    },
    AfficheTypeFinancement() {
      let collet = [];
      this.GroupeParTypeFinancement.filter((item) => {
        // if (item.activite_id == this.activite_id)
        {
          let data = {
            id: item,
            objet: this.libelleTypeFinancement(item),
          };
          collet.push(data);
        }
      });
      return collet;
    },
    libelleTypeFinancement() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.getterTypeFinancement.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.libelle;
          }
          return 0;
        }
      };
    },
    libelleSourceFinancement() {
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
    AfficheSourceFinancement() {
      let collet = [];
      this.GroupeParSourceFinancement.filter((item) => {
        // if (item.activite_id == this.activite_id)
        {
          let data = {
            id: item,
            objet: this.libelleSourceFinancement(item),
          };
          collet.push(data);
        }
      });
      return collet;
    },
    GroupeParSourceFinancement() {
      // return (id) => {
      if (this.sous_budget_id == 0 && this.activite_id != 0) {
        let objet = this.getterBudgetViseParActivite.filter(
          (item) =>
            item.activite_id == this.activite_id &&
            item.ligneeconomique_id == this.economique_id &&
            item.type_financement_id == this.type_financement_id &&
            item.actuelle == 1
        );
        //  let vm=this
        let array_exercie = [];
        if (objet.length > 0) {
          objet.forEach(function (val) {
            array_exercie.push(val.source_financement_id);
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
            item.ligneeconomique_id == this.economique_id &&
            item.type_financement_id == this.type_financement_id &&
            item.actuelle == 1
        );
        //  let vm=this
        let array_exercie = [];
        if (objet.length > 0) {
          objet.forEach(function (val) {
            array_exercie.push(val.source_financement_id);
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
    GroupeParTypeFinancement() {
      // return (id) => {
      if (this.sous_budget_id == 0 && this.activite_id != 0) {
        let objet = this.getterBudgetViseParActivite.filter(
          (item) =>
            item.activite_id == this.activite_id &&
            item.ligneeconomique_id == this.economique_id &&
            item.actuelle == 1
        );
        //  let vm=this
        let array_exercie = [];
        if (objet.length > 0) {
          objet.forEach(function (val) {
            array_exercie.push(val.type_financement_id);
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
            item.ligneeconomique_id == this.economique_id &&
            item.actuelle == 1
        );
        //  let vm=this
        let array_exercie = [];
        if (objet.length > 0) {
          objet.forEach(function (val) {
            array_exercie.push(val.type_financement_id);
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
    afficheNatureDepense() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.getterNatureDepense.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.code.concat(" ", qtereel.libelle);
          }
          return 0;
        }
      };
    },
    AfficheNatureEconomique() {
      let collet = [];
      this.GroupeParNatureEconomique.filter((item) => {
        // if (item.activite_id == this.activite_id)
        {
          let data = {
            id: item,
            objet: this.afficheNatureEconomique(item),
          };
          collet.push(data);
        }
      });
      return collet;
    },
    GroupeParNatureEconomique() {
      // return (id) => {
      if (this.sous_budget_id == 0 && this.activite_id != 0) {
        let objet = this.getterBudgetViseParActivite.filter(
          (item) => item.activite_id == this.activite_id && item.actuelle == 1
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
            item.sous_budget_id == this.sous_budget_id && item.actuelle == 1
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
    afficheGrandeNature() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.getterNatureDepense.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.libelle;
          }
          return 0;
        }
      };
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
    afficheTypeFinancement() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.getterTypeFinancement.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.libelle;
          }
          return 0;
        }
      };
    },

    AfficheBailleurParType() {
      if (this.FormDataDossier.type_financement_id == 4) {
        let collet = [];
        this.getterBailleur.filter((item) => {
          if (
            item.type_financement_id == this.FormDataDossier.type_financement_id
          ) {
            let data = {
              id: item.id,
              libelle: item.libelle,
            };
            collet.push(data);
          }
        });
        return collet;
      } else {
        let collet = [];
        this.getterBailleur.filter((item) => {
          if (item.type_financement_id == 0) {
            let data = {
              id: item.id,
              libelle: item.libelle,
            };
            collet.push(data);
          }
        });
        return collet;
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
    libelleActivite() {
      let collet = [];
      this.getterActivite.filter((item) => {
        let data = {
          id: item.id,
          libelle: item.code.concat("  ", item.libelle),
        };
        collet.push(data);
        //}
      });
      return collet;
    },
    libelleNatureEconomique() {
      let collet = [];
      this.getterNatureEconomique.filter((item) => {
        let data = {
          id: item.id,
          libelle: item.code.concat("  ", item.libelle),
        };
        collet.push(data);
        //}
      });
      return collet;
    },
  },
  methods: {
    onComplete() {
      // alert("Yay. Done!");
    },
    ...mapActions("parametrage", [
      "getActivite",
      "getBudgetViseParActvite",
      "getSousBudget",
      "getBudgetEclate",
      "getDotationRessourcePropre",
      "getTypeFinancement",
      "getBailleur",
      "getProjet",
      "getNatureDepense",
      "getExerciceBudgetaire",
      "getDotationNotifie",
      "getDotationReport",
      "getNatureEconomique",
      "ajouterBudgetEclate",
      "getDotationAutreRessource",
    ]),

    voirBudgett(id) {
      this.$router.push({
        name: "VoirBudgetEclate",
        params: { id: id },
      });
    },
    voirSousBudget(id) {
      this.$router.push({
        name: "AfficheSousBudgetEclate",
        params: { id: id },
      });
    },
    AfficheMontantBudget($id) {
      return this.getterListeBudgetEclate
        .filter((item) => item.activite_id == $id)
        .reduce(
          (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation_total),
          0
        )
        .toFixed(0);
    },
    AfficheModalModification(id) {
      this.ModifierBudget = this.getterListeBudgetEclate.find(
        (items) => items.id == id
      );
    },
    formatageSomme: formatageSomme,
    formatageSommeSansFCFA: formatageSommeSansFCFA,
    deletePartieRequerante(item) {
      if (item > -1) {
        this.TableauDossier.splice(item, 1);
      }
    },
  },
  watch: {
    activite_id: function (value) {
      let objet = {
        id: value,
      };
      this.getBudgetViseParActvite(objet);
      //this.getOpParActvite(objet);
    },
  },
};
</script>
<style scoped>
@import url("https://cdn.jsdelivr.net/gh/lykmapipo/themify-icons@0.1.2/css/themify-icons.css");
.form-control {
  border: 1px solid #000 !important;
  color: #000;
  font-weight: bold;
}
</style>
