<template>
  <div class="container">
    <div class="col-md-12">
      <div class="card" style="box-shadow: 5px 5px  #f9d531;">
        <div class="card-header">
          <div class="page-header">
            <h6 class="fw-bold mb-3">Eclatement</h6>
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
                <a href="#">Eclatement du budget</a>
              </li>
            </ul>
          </div>
          <div class="d-flex align-items-center">
            <!-- <h4 class="card-title">Eclatement du budget</h4> -->
          </div>
        </div>
        <div class="card-body">
          <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                SAISIR BUDGET
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                VERIFICATION DU BUDGET
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="pills-contact-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-contact"
                type="button"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
              >
                IMPRIMER LE BUDGET
              </button>
            </li>
          </ul>
          <div class="tab-content" id="pills-tabContent">
            <div
              class="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
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
                        style="border: 1px solid #000"
                      />
                    </div>
                    <div class="col-9">
                      <label class="form-label"
                        >Unité Opérationnelle</label
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
                    </div>
                     <div class="col-6">
                      <label class="form-label">Activité</label>
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
                     <div class="col-6">
                      <label class="form-label"
                        >Sous budget</label
                      >
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
                     <div class="col-3">
                      <label class="form-label">Budget Notifié ( A )</label>
                      
                      <money3
                        v-model="FormDataDossier.doatation_report"
                        class="form-control"
                        style="border: 1px solid #000 !important"
                        v-bind="config"
                        readonly
                        :value="MontantNotifie"
                      ></money3>
                    </div>
                    <div class="col-3">
                      <label class="form-label">Budget Réport ( B )</label>
                     
                      <money3
                        v-model="FormDataDossier.doatation_report"
                        class="form-control"
                        style="border: 1px solid #000 !important"
                        v-bind="config"
                        readonly
                        :value="MontantReport"
                      ></money3>
                    </div>

                    <div class="col-6">
                      <label class="form-label"
                        >Budget global ( E = A + B)</label
                      >

                      <!-- <input
                        type="text"
                        class="form-control"
                        readonly
                        :value="TotalGlobal"
                        style="background-color: #dcdcdc; font-weight: bolder"
                      /> -->
                       <money3
                        v-model="FormDataDossier.doatation_report"
                        class="form-control"
                        style="border: 1px solid #000 !important"
                        v-bind="config"
                        readonly
                        :value="TotalGlobal"
                      ></money3>
                    </div>
                     <div class="col-3">
                      <label class="form-label"
                        >Nature dépense</label
                      >
                      <model-list-select
                        :list="getterNatureDepense"
                        v-model="nature_depense_id"
                        option-value="id"
                        option-text="libelle"
                        placeholder="select item"
                        style="border: 1px solid #000"
                      >
                      </model-list-select>
                    </div>
                    <div class="col-9">
                      <label class="form-label">Nature économique</label>
                      <model-list-select
                        :list="getterNatureEconomique"
                        v-model="economique_id"
                        option-value="id"
                        option-text="libelle_code"
                        placeholder="select item"
                        style="border: 1px solid #000"
                      >
                      </model-list-select>
                    </div>
                    <div class="col-3">
                      <label class="form-label">Type financement</label>
                      <model-list-select
                        :list="getterTypeFinancement"
                        v-model="FormDataDossier.type_financement_id"
                        option-value="id"
                        option-text="libelle"
                        placeholder="select item"
                        style="border: 1px solid #000"
                      >
                      </model-list-select>
                    </div>
                    <div class="col-9">
                      <label class="form-label">Source de financement</label>
                      <model-list-select
                        :list="getterBailleur"
                        v-model="FormDataDossier.source_financement_id"
                        option-value="id"
                        option-text="libelle"
                        placeholder="select item"
                        style="border: 1px solid #000"
                      >
                      </model-list-select>
                    </div>
                    <div class="col-6">
                      <label class="form-label"
                        >Dotation Actuelle</label
                      >
<money3
                        v-model="FormDataDossier.dotation_actuelle"
                        class="form-control"
                        style="border: 1px solid #000 !important"
                        v-bind="config"
                      ></money3>
                      
                      
                    </div>
                    <div class="col-3">
                      <label class="form-label">Dotation réport</label>

                 
                      <money3
                        v-model="FormDataDossier.doatation_report"
                        class="form-control"
                        style="border: 1px solid #000 !important"
                        v-bind="config"
                      ></money3>
                    </div>
                    <div class="col-3">
                      <br />
                      <button
                        type="button"
                        class="btn btn-primary"
                        @click.prevent="ajouterPartieRequerante()"
                      >
                        Ajouter
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <br/>
               <table class="table table-bordered border-primary">
                <thead>
                  <tr>
                    <!-- <th scope="col">#</th> -->
                    <!-- <th scope="col">N</th> -->
                    <th scope="col" style="text-align: center">
                      Type financement
                    </th>
                    <th scope="col" style="text-align: center">
                      Source financement
                    </th>
                    <th scope="col" style="text-align: center">
                      Dotation actuelle (FCFA)
                    </th>
                    <th scope="col" style="text-align: center">
                      Autre dotation (FCFA)
                    </th>
                    <th scope="col" style="text-align: center">Total (FCFA)</th>
                    <th scope="col" style="text-align: center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item1, index) in TableauDossier" :key="item1.id">
                    <td style="width: 10%">
                      {{ afficheTypeFinancement(item1.type_financement_id) }}
                    </td>
                    <td style="width: 45%">
                      {{
                        afficheSourceFinancement(item1.source_financement_id)
                      }}
                    </td>
                    <td style="width: 10%; text-align: right">
                      {{
                        formatageSommeSansFCFA(
                          parseFloat(item1.dotation_actuelle)
                        )
                      }}
                    </td>
                    <td style="width: 10%; text-align: right">
                      {{
                        formatageSommeSansFCFA(
                          parseFloat(item1.doatation_report)
                        )
                      }}
                    </td>
                    <!-- <td style="width: 10%; text-align: right">
                      {{
                        formatageSommeSansFCFA(
                          parseFloat(item1.doatation_report)
                        )
                      }}
                    </td> -->
                    <td style="width: 15%; text-align: right">
                      {{
                        formatageSommeSansFCFA(parseFloat(item1.doatation_report)+parseFloat(item1.dotation_actuelle))
                      }}
                    </td>
                    <td>
                      <span
                        class="badge bg-danger"
                        style="cursor: pointer"
                        @click.prevent="deletePartieRequerante(index)"
                        >Supprimer</span
                      >
                    </td>
                  </tr>
                  <tr>
                    <td colspan="5"></td>
                    <td colspan="">
                      <button
                        type="button"
                        class="btn btn-success"
                        @click.prevent="enregistrementSansTypeFiancement2()"
                      >
                        Enregistrer
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div
              class="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              <table class="table table-bordered border-primary">
              <thead>
                <tr style="border :1px solid #000 !important">
                  <!-- <th scope="col">#</th> -->
                  <!-- <th scope="col">N</th> -->
                  <th scope="col" style="text-align: center;border :1px solid #000 !important">
                    Nature economique{{ activite_id }}
                  </th>
                  <th scope="col" style="text-align: center;border :1px solid #000 !important">
                    type financement
                  </th>
                  <th scope="col" style="text-align: center;border :1px solid #000 !important">Bailleur</th>
                  <th scope="col" style="text-align: center;border :1px solid #000 !important">nature depense</th>
                  <th scope="col" style="text-align: center;border :1px solid #000 !important">
                    Dotation Actuelle
                  </th>
                  <th scope="col" style="text-align: center;border :1px solid #000 !important">Report</th>
                  <th scope="col" style="text-align: center;border :1px solid #000 !important">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item1 in afficheBudgetParActivite" :key="item1.id">
                  <td style="width: 40%;border :1px solid #000 !important">
                    {{ afficheNatureEconomique(item1.ligneeconomique_id) }}
                  </td>
                  <td style="width: 10%;border :1px solid #000 !important">
                    {{ afficheTypeFinancement(item1.type_financement_id) }}
                  </td>
                  <td style="width: 20%;border :1px solid #000 !important">
                    {{ afficheSourceFinancement(item1.source_financement_id) }}
                  </td>
                  <td style="width: 10%;border :1px solid #000 !important">
                    {{ afficheGrandeNature(item1.nature_depense_id) }}
                  </td>
                  <td style="width: 10%; text-align: right;border :1px solid #000 !important">
                    {{
                      formatageSommeSansFCFA(
                        parseFloat(item1.dotation_actuelle)
                      )
                    }}
                  </td>
                  <td style="width: 15%; text-align: right;border :1px solid #000 !important">
                    {{
                      formatageSommeSansFCFA(parseFloat(item1.doatation_report))
                    }}
                  </td>
                  <td style="width: 15%; text-align: right;border :1px solid #000 !important">
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
            </div>
            <div
              class="tab-pane fade"
              id="pills-contact"
              role="tabpanel"
              aria-labelledby="pills-contact-tab"
            >
              <table class="table table-bordered border-primary">
              <thead>
                <tr>
                  <th scope="col" style="text-align: center;border :1px solid #000 !important">Numéro</th>
                  <th scope="col" style="text-align: center;border :1px solid #000 !important">Activité</th>

                  <th scope="col" style="text-align: center;border :1px solid #000 !important">Total (FCFA)</th>
                  <th scope="col" style="text-align: center;border :1px solid #000 !important">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item1, index) in getterActivite" :key="item1.id">
                  <td style="border :1px solid #000 !important">{{ index + 1 }}</td>
                  <td style="width: 55%;border :1px solid #000 !important">
                    {{ item1.code }}-{{ item1.libelle }}
                  </td>
<td style="text-align: right;border :1px solid #000 !important">{{ formatageSommeSansFCFA(parseFloat(AfficheMontantBudget(item1.id))) }}</td>
                  <td style="border :1px solid #000 !important">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
// import moment from "moment";
import { ModelListSelect } from "vue-search-select";

import {
  formatageSomme,
  formatageSommeSansFCFA,
} from "../Repositories/Repository";
export default {
  components: { ModelListSelect},
  data() {
    return {
      TableauDossier: [],
      ModifierBudget: {},
      FormDataDossier: {
        doatation_report: 0,
        dotation_actuelle: 0,
        type_financement_id: 0,
        source_financement_id: 0,
      },
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
  computed: {
    ...mapGetters("parametrage", [
      "getterProjet",
      "getterActivite",
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

    
    afficheBudgetParActivite() {
      return this.getterListeBudgetEclate.filter(
        (item) => item.activite_id == this.activite_id
      );
    },
    ResultatDotation() {
      if (
        this.FormDataDossier.dotation_actuelle == 0 &&
        this.FormDataDossier.doatation_report == 0
      ) {
        return 0;
      } else {
        return parseFloat(
          parseFloat(this.FormDataDossier.dotation_actuelle) +
            parseFloat(this.FormDataDossier.doatation_report)
        );
      }
    },
    TotalGlobal() {
      return (
        parseFloat(this.MontantNotifie) +
        parseFloat(this.MontantReport)
        // +
        // parseFloat(this.MontantRessourcePropre) +
        // parseFloat(this.MontantAutreRessource)
      );
    },
    MontantAutreRessource() {
      return this.getterDotationAutreRessource
        .filter((item) => item.activite_id == this.activite_id)
        .reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.dotation), 0)
        .toFixed(0);
    },
    MontantRessourcePropre() {
      return this.getterDotationRessourcePropre
        .filter((item) => item.activite_id == this.activite_id)
        .reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.dotation), 0)
        .toFixed(0);
    },
    MontantReport() {
      return this.getterDotationReport
        .filter(
          (item) =>
            item.activite_id == this.activite_id &&
            item.exercice == this.exerciceBudgetaire - 1
        )
        .reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.dotation), 0)
        .toFixed(0);
    },
    MontantNotifie() {
      return this.getterDotationNotifie
        .filter((item) => item.activite_id == this.activite_id)
        .reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.dotation), 0)
        .toFixed(0);
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
    ...mapActions("parametrage", [
      "getActivite","getSousBudget",
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
        .reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.dotation_total), 0)
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
    ajouterPartieRequerante() {
      // this.$v.FormDataDossier.$touch();
      // if (this.$v.FormDataDossier.$error) {
      //   return;
      // }
      //  console.log(this.partie.motif_partie_id)
      var nouvelObjet12 = {
        ...this.FormDataDossier,
        type_financement_id: this.FormDataDossier.type_financement_id,
        source_financement_id: this.FormDataDossier.source_financement_id,
        ligneeconomique_id: this.economique_id,
        dotation_total: this.ResultatDotation,
      };
      this.TableauDossier.push(nouvelObjet12);

      this.FormDataDossier = {
        doatation_report: 0,
        dotation_actuelle: 0,

        type_financement_id: 0,
        source_financement_id: 0,
      };
    },

    enregistrementSansTypeFiancement2() {
      var nouvelObjettrsor = {
        annebudgetaire: this.exerciceBudgetaire,
        unite_operationnelle_id: this.unite_operationnelle_id,
        activite_id: this.activite_id,

        section_id: this.activite_id,

        sous_budget_id: this.sous_budget_id,

        nature_depense_id: this.nature_depense_id,

        dossier_id: this.dossier_id,

        FormDataDossier: this.TableauDossier,
      };

      this.ajouterBudgetEclate(nouvelObjettrsor);

      (this.TableauDossier = []),
        (this.FormDataDossier.type_financement_id = ""),
        (this.FormDataDossier.source_financement_id = ""),
        (this.FormDataDossier.dotation_actuelle = 0),
        (this.FormDataDossier.doatation_report = 0);
    },
  },
  // watch: {
  //   activite_id: function (value) {
  //     let objet = {
  //       id: value
  //     };
  //     this.getAfficherDotation(objet)
  //   }
  // },
};
</script>
<!-- <style scoped>
.form-control {
  border: 1px solid #000;
}
</style> -->
