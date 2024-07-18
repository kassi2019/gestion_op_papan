<template>
  <div class="container">
    <div class="col-md-12">
      <div class="card" style="box-shadow: 5px 5px #f9d531">
        <div class="card-header">
          <div class="page-header">
            <h6 class="fw-bold mb-3">Saisir Ordre Paiement</h6>
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
                <a href="#">OP Provisoire</a>
              </li>
            </ul>
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
                SAISIR ORDRE DE PAIEMENT
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
                SAISIR FACTURE
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
                VERIFICATION ORDRE PAIEMENT
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
                    <legend style="text-decoration: underline">
                      Information sur Ordre de paiement
                    </legend>
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
                        :list="getterBudgetViseGroupeParActivite"
                        v-model="unite_operationnelle_id"
                        option-value="unite_operationnelle_id"
                        option-text="nom_projet"
                        placeholder="select item"
                        style="border: 1px solid #000"
                      >
                      </model-list-select>
                      unite_operationnelle_id
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
                        :list="getterBudgetViseGroupeParActivite"
                        v-model="activite_id"
                        option-value="activite_id"
                        option-text="plan_activite"
                        placeholder="select item"
                        style="border: 1px solid #000"
                      >
                      </model-list-select>
                    </div>
                    <div class="col-6">
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
                    <div class="col-6">
                      <label class="form-label"
                        >Nom du Bénéficiaire
                        <span
                          style="
                            color: red !important;
                            font-size: 15px !important;
                          "
                          >*</span
                        ></label
                      >
                      <model-list-select
                        :list="AfficheEntreprise"
                        v-model="entreprise_id"
                        option-value="id"
                        option-text="objet"
                        placeholder="select item"
                        style="border: 1px solid #000"
                      >
                      </model-list-select>
                    </div>
                    <div class="col-3">
                      <label class="form-label">Adresse</label>
                      <input
                        type="text"
                        class="form-control"
                        readonly
                        :value="AdresseEntreprise(entreprise_id)"
                        style="border: 1px solid #000 !important"
                      />
                    </div>
                    <div class="col-3">
                      <label class="form-label"
                        >Numéro compte contribuable</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        readonly
                        style="border: 1px solid #000 !important"
                        :value="ccEntreprise(entreprise_id)"
                      />
                    </div>
                    <div class="col-12">
                      <label class="form-label"
                        >Objet de la depense
                        <span
                          style="
                            color: red !important;
                            font-size: 15px !important;
                          "
                          >*</span
                        ></label
                      >
                      <input
                        type="text"
                        class="form-control"
                        style="border: 1px solid #000 !important"
                        v-model="objet_depense"
                      />
                    </div>
                    <div class="col-6">
                      <label class="form-label"
                        >Numéro de ordre de paiement
                        <span
                          style="
                            color: red !important;
                            font-size: 15px !important;
                          "
                          >*</span
                        ></label
                      >
                      <input
                        type="text"
                        class="form-control"
                        style="border: 1px solid #000 !important"
                        v-model="numero_ordre_paiement"
                      />
                    </div>
                    <div class="col-6">
                      <label class="form-label"
                        >Montant des préstations
                        <span
                          style="
                            color: red !important;
                            font-size: 15px !important;
                          "
                          >*</span
                        ></label
                      >

                      <money3
                        class="form-control"
                        v-bind="config"
                        v-model="montant_prestation"
                      ></money3>
                    </div>
                    <legend style="text-decoration: underline">
                      Information sur la dotation
                    </legend>
                    <div class="col-9">
                      <label class="form-label"
                        >Nature économique / Imputation
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
                        v-model="nature_economique_id"
                        option-value="id"
                        option-text="objet"
                        placeholder="select item"
                        style="border: 1px solid #000"
                      >
                      </model-list-select>
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
                      <label class="form-label">Type financement  <span
                          style="
                            color: red !important;
                            font-size: 15px !important;
                          "
                          >*</span
                        ></label>

                      <model-list-select
                        :list="AfficheTypeFinancement"
                        v-model="type_financement_id"
                        option-value="id"
                        option-text="objet"
                        placeholder="select item"
                        style="border: 1px solid #000"
                      >
                      </model-list-select>
                    </div>
                    <div class="col-9">
                      <label class="form-label">Source de financement  <span
                          style="
                            color: red !important;
                            font-size: 15px !important;
                          "
                          >*</span
                        ></label>

                      <model-list-select
                        :list="AfficheSourceFinancement"
                        v-model="source_financement_id"
                        option-value="id"
                        option-text="objet"
                        placeholder="select item"
                        style="border: 1px solid #000"
                      >
                      </model-list-select>
                    </div>
                    <div class="col-6">
                      <label class="form-label">Dotation ( A )</label>

                      <money3
                        class="form-control"
                        v-bind="config"
                        :model-value="afficheDotaion"
                        readonly
                      ></money3>
                    </div>
                    <div class="col-3">
                      <label class="form-label"
                        >Cumul Dépense Antérieure ( B )</label
                      >

                      <money3
                        class="form-control"
                        v-bind="config"
                        v-model="cumul_anterieure"
                      ></money3>
                    </div>
                    <div class="col-3">
                      <label class="form-label">Dépense en Cours ( C )</label>

                      <money3
                        class="form-control"
                        v-bind="config"
                        v-model="montant_prestation"
                        readonly
                      ></money3>
                    </div>
                    <div class="col-6">
                      <label class="form-label"
                        >Cumul Dépense en Cours ( D = B + C )</label
                      >

                      <money3
                        class="form-control"
                        v-bind="config"
                        :model-value="CumulDepense"
                        readonly
                      ></money3>
                    </div>
                    <div class="col-6">
                      <label class="form-label">Disponible ( E = A - D )</label>

                      <money3
                        class="form-control"
                        style="border: 1px solid #000 !important"
                        v-bind="config"
                        :model-value="disponible"
                        readonly
                      ></money3>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              <div class="row">
                <div class="col-lg-12">
                  <form class="row g-3">
                    <div class="col-3">
                      <label class="form-label">Numéro de la facture</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="numero_facture"
                      />
                    </div>
                    <div class="col-3">
                      <label class="form-label">Date de la facture</label>
                      <input
                        type="date"
                        class="form-control"
                        v-model="date_facture"
                      />
                    </div>
                    <div class="col-3">
                      <label class="form-label">Montant de la facture</label>
                      <money3
                        class="form-control"
                        v-bind="config"
                        v-model="montant_facture"
                      ></money3>
                    </div>
                    <div class="col-3">
                      <label class="form-label"
                        >Montant de la facture saisie</label
                      >
                      <money3
                        class="form-control"
                        v-bind="config"
                        readonly
                        v-model="montant_prestation"
                      ></money3>
                    </div>
                    <div class="col-12">
                      <label class="form-label">Désignation</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="FormDataDossier.designation"
                      />
                    </div>
                    <div class="col-3">
                      <label class="form-label">Quantité</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="FormDataDossier.quantite"
                      />
                    </div>
                    <div class="col-3">
                      <label class="form-label">Prix Unitaire</label>
                      <money3
                        class="form-control"
                        v-bind="config"
                        v-model="FormDataDossier.prix_unitaire"
                      ></money3>
                    </div>
                    <div class="col-3">
                      <label class="form-label">Montant HT</label>
                      <money3
                        class="form-control"
                        v-bind="config"
                        :model-value="MontantHt"
                        readonly
                      ></money3>
                    </div>
                    <div class="col-3">
                      <label class="form-label">Exonéré de la TVA 18%</label>
                      <select
                        class="form-select form-control"
                        id="defaultSelect"
                        style="border: 1px solid #000 !important"
                        v-model="FormDataDossier.exonere"
                      >
                        <option></option>
                        <option value="0">Oui</option>
                        <option value="1">Non</option>
                      </select>
                    </div>
                    <!-- <div class="col-3">
                      <label class="form-label">Autre(s) Taxe(s)</label>
                      <select
                        class="form-select form-control"
                        id="defaultSelect"
                        style="border: 1px solid #000 !important"
                      >
                        <option></option>
                      </select>
                    </div> -->
                    <!-- <div class="col-3">
                      <label class="form-label">Type de Forfait</label>
                      <select
                        class="form-select form-control"
                        id="defaultSelect"
                        style="border: 1px solid #000 !important"
                      >
                        <option></option>
                        <option value="0">Oui</option>
                        <option value="1">Non</option>
                      </select>
                    </div> -->
                    <div class="col-3">
                      <label class="form-label">Taux (%)</label>
                      <select
                        class="form-select form-control"
                        id="defaultSelect"
                        style="border: 1px solid #000 !important"
                        v-model="FormDataDossier.taux"
                      >
                        <option></option>
                        <option
                          v-for="item in AfficheEnFonctionExenere"
                          :key="item.id"
                          :value="item.taux"
                        >
                          {{ item.taux }}
                        </option>
                      </select>
                    </div>
                    <!-- <div class="col-3">
                      <label class="form-label">NET Commerciale HT</label>
                      <money3
                        class="form-control"
                        v-bind="config"
                        v-model="montant_prestation"
                      ></money3>
                    </div> -->
                    <div class="col-3">
                      <label class="form-label">Montant Tva</label>
                      <money3
                        class="form-control"
                        v-bind="config"
                        :model-value="montantTva"
                        readonly
                      ></money3>
                    </div>
                    <div class="col-3">
                      <label class="form-label">Montant TTC</label>
                      <money3
                        class="form-control"
                        v-bind="config"
                        :model-value="MontantTTC"
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
              <br />
              <div class="table-responsive">
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <!-- <th scope="col">#</th> -->
                      <!-- <th scope="col">N</th> -->
                      <!-- <th scope="col" style="text-align: center">N°</th> -->
                      <th scope="col" style="text-align: center">
                        Désignation
                      </th>
                      <th scope="col" style="text-align: center">Quantité</th>
                      <th scope="col" style="text-align: center">
                        Prix unitaire
                      </th>
                      <th scope="col" style="text-align: center">Montant HT</th>
                      <!-- <th scope="col" style="text-align: center">Rémise</th>
                      <th scope="col" style="text-align: center">Addition</th>
                      <th scope="col" style="text-align: center">
                        Net Commerciale HT
                      </th> -->
                      <th scope="col" style="text-align: center">Taux</th>
                      <th scope="col" style="text-align: center">
                        Montant TVA
                      </th>
                      <th scope="col" style="text-align: center">
                        Montant TTC
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(item1, index) in TableauDossier"
                      :key="item1.id"
                    >
                      <td style="width: 45%">
                        {{ item1.designation }}
                      </td>
                      <td style="width: 10%">
                        {{ item1.quantite }}
                      </td>
                      <td style="width: 10%; text-align: right">
                        {{
                          formatageSommeSansFCFA(
                            parseFloat(item1.prix_unitaire)
                          )
                        }}
                      </td>
                      <td style="width: 10%; text-align: right">
                        {{
                          formatageSommeSansFCFA(parseFloat(item1.montant_ht))
                        }}
                      </td>
                      <td style="width: 15%; text-align: right">
                        {{ formatageSommeSansFCFA(parseFloat(item1.taux)) }}
                      </td>
                      <td style="width: 15%; text-align: right">
                        {{
                          formatageSommeSansFCFA(parseFloat(item1.montant_tva))
                        }}
                      </td>
                      <td style="width: 15%; text-align: right">
                        {{
                          formatageSommeSansFCFA(parseFloat(item1.montant_ttc))
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
            </div>
            <div
              class="tab-pane fade"
              id="pills-contact"
              role="tabpanel"
              aria-labelledby="pills-contact-tab"
            >
              <div class="table-responsive">
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th>N°</th>
                      <th>Activite</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(item, index) in GroupeActiviteOPDirect"
                      :key="item"
                    >
                      <td style="border: 1px solid #000">{{ index + 1 }}</td>
                      <td style="border: 1px solid #000">
                        {{ afficheLibelleActivite(item) }}
                      </td>

                      <td style="border: 1px solid #000">
                        <span
                          class="badge badge-black"
                          style="cursor: pointer"
                          @click.prevent="AfficheVentilationBudget(item)"
                          >Voir OP Provisoire</span
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
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
// import moment from "moment";
import { ModelListSelect } from "vue-search-select";
import { Money3Component } from "v-money3";
import {
  formatageSomme,
  formatageSommeSansFCFA,
} from "../Repositories/Repository";
export default {
  components: { money3: Money3Component, ModelListSelect },
  data() {
    return {
      TableauDossier: [],
      ModifierBudget: {},
      FormDataDossier: {
        designation: "",
        quantite: 0,
        prix_unitaire: 0,
        exonere: 0,
        taux: 0,
      },
      objet_depense: "",
      activite_id: 0,
      unite_operationnelle_id: 0,
      nature_depense_id: 0,
      entreprise_id: 0,
      sous_budget_id: 0,
      type_financement_id: 0,
      source_financement_id: 0,
      numero_ordre_paiement: "",
      nature_economique_id: 0,
      type_ordre_paiement: 0,
      montant_prestation: 0,
      cumul_anterieure: 0,
      montant_facture: 0,
      date_facture: "",
      numero_facture: 0,

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
    // this.dossier_id = this.$route.params.id;
    this.getExerciceBudgetaire();
    this.getActivite();
    this.getSousBudget();
    this.getEntreprise();
    this.getBudgetEclateViseGroupeParActivte();
    // this.getNatureEconomique();
    // this.getProjet();
    this.getNatureDepense();
    this.getTypeFinancement();
    this.getBailleur();
    this.getTaux();
    this.getActiviteOp();
    // this.getDotationNotifie();
    // this.getDotationReport();
    // this.getDotationRessourcePropre();
    // this.getDotationAutreRessource();
    // this.getBudgetEclate();

    //   // this.getDotationNotifie();
  },
  computed: {
    ...mapGetters("parametrage", [
      "getterProjet",
      "getterActiviteSurOP",
      "getterTaux",
      "getterBudgetViseParActivite",
      "getterBudgetViseGroupeParActivite",
      "getterActivite",
      "getterTypeFinancement",
      "getterExerciceBudgetaire",
      "getterDotationNotifie",
      "getterNatureEconomique",
      "getterEntreprise",
      "getterNatureDepense",
      "getterSousBudget",
      "getterBailleur",
      "getterDotationReport",
      "getterDotationRessourcePropre",
      "getterDotationAutreRessource",
      "getterListeBudgetEclate",
    ]),
    afficheLibelleActivite() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.getterActiviteSurOP.find(
            (qtreel) => qtreel.activite_id == id
          );

          if (qtereel) {
            return qtereel.activite_libelle;
          }
          return 0;
        }
      };
    },
    GroupeActiviteOPDirect() {
      // return (id) => {

      let objet = this.getterActiviteSurOP.filter(
        (item) => item.type_ordre_paiement == 1
      );
      //  let vm=this
      let array_exercie = [];
      if (objet.length > 0) {
        objet.forEach(function (val) {
          array_exercie.push(val.activite_id);
        });
        let unique = [...new Set(array_exercie)];

        if (unique.length == 0) {
          return [];
        }
        return unique.sort((a, b) => (a.unique > b.unique ? 1 : -1));
      }
      return [];
      // };
    },
    MontantTTC() {
      return parseFloat(this.MontantHt) + parseFloat(this.montantTva);
    },
    montantTva() {
      const val = parseFloat(
        (parseFloat(this.MontantHt) * parseFloat(this.FormDataDossier.taux)) /
          100
      );

      if (val) {
        return parseFloat(val).toFixed(0);
      }

      return 0;
    },
    AfficheEnFonctionExenere() {
      if (this.exonere == 0) {
        return this.getterTaux.filter((item) => item.encours != 1);
      } else {
        return this.getterTaux;
      }
    },
    MontantHt() {
      return (
        parseFloat(this.FormDataDossier.quantite) *
        parseFloat(this.FormDataDossier.prix_unitaire)
      );
    },
    disponible() {
      return parseFloat(this.afficheDotaion) - parseFloat(this.CumulDepense);
    },
    CumulDepense() {
      return (
        parseFloat(this.cumul_anterieure) + parseFloat(this.montant_prestation)
      );
    },
    afficheDotaion() {
      if (this.sous_budget_id == 0 && this.activite_id != 0) {
        // return (id) => {
        //     if (id != null && id != "") {
        const qtereel = this.getterBudgetViseParActivite.find(
          (qtreel) =>
            qtreel.ligneeconomique_id == this.nature_economique_id &&
            qtreel.type_financement_id == this.type_financement_id &&
            qtreel.source_financement_id == this.source_financement_id &&
            qtreel.nature_depense_id == this.NatureDepense_id &&
            qtreel.actuelle == 1
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
            qtreel.nature_depense_id == this.NatureDepense_id &&
            qtreel.sous_budget_id == this.sous_budget_id &&
            qtreel.actuelle == 1
        );

        if (qtereel) {
          return qtereel.dotation_total;
        }
        return 0;
      }
    },

    NatureDepense_id() {
      if (this.sous_budget_id == 0 && this.activite_id != 0) {
        // return (id) => {
        //   if (id != null && id != "") {
        const qtereel = this.getterBudgetViseParActivite.find(
          (qtreel) =>
            qtreel.ligneeconomique_id == this.nature_economique_id &&
            qtreel.type_financement_id == this.type_financement_id &&
            qtreel.source_financement_id == this.source_financement_id &&
            qtreel.actuelle == 1
        );

        if (qtereel) {
          return qtereel.nature_depense_id;
        }
        return 0;
        //   }
        // };
      } else {
        // return (id) => {
        //   if (id != null && id != "") {
        const qtereel = this.getterBudgetViseParActivite.find(
          (qtreel) =>
            qtreel.ligneeconomique_id == this.nature_economique_id &&
            qtreel.sous_budget_id == this.sous_budget_id &&
            qtreel.type_financement_id == this.type_financement_id &&
            qtreel.source_financement_id == this.source_financement_id &&
            qtreel.actuelle == 1
        );

        if (qtereel) {
          return qtereel.nature_depense_id;
        }
        return 78;
        //   }
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
    libelleNatureDepense() {
      if (this.sous_budget_id == 0 && this.activite_id != 0) {
        // return (id) => {
        //   if (id != null && id != "") {
        const qtereel = this.getterBudgetViseParActivite.find(
          (qtreel) =>
            qtreel.ligneeconomique_id == this.nature_economique_id &&
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
            qtreel.ligneeconomique_id == this.nature_economique_id &&
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
            item.ligneeconomique_id == this.nature_economique_id &&
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
            item.ligneeconomique_id == this.nature_economique_id &&
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
    GroupeParTypeFinancement() {
      // return (id) => {
      if (this.sous_budget_id == 0 && this.activite_id != 0) {
        let objet = this.getterBudgetViseParActivite.filter(
          (item) =>
            item.activite_id == this.activite_id &&
            item.ligneeconomique_id == this.nature_economique_id &&
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
            item.ligneeconomique_id == this.nature_economique_id &&
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
    AdresseEntreprise() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.getterEntreprise.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.adresse;
          }
          return 0;
        }
      };
    },
    ccEntreprise() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.getterEntreprise.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.numero_cc;
          }
          return 0;
        }
      };
    },
    AfficheEntreprise() {
      let collet = [];
      this.getterEntreprise.filter((item) => {
        // if (item.activite_id == this.activite_id)
        {
          let data = {
            id: item.id,
            objet: item.numero_cc.concat(" ", item.raison_sociale),
          };
          collet.push(data);
        }
      });
      return collet;
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
        parseFloat(this.MontantNotifie) + parseFloat(this.MontantReport)
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
      "getActivite",
      "getActiviteOp",
      "getTaux",
      "getSousBudget",
      "getBudgetViseParActvite",
      "getBudgetEclateViseGroupeParActivte",
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
      "getEntreprise",
      "ajouterOrdrePaiement",
    ]),
    AfficheVentilationBudget(id) {
      this.$router.push({
        name: "AfficheOpActivite",
        params: { id: id },
      });
    },
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
    ajouterPartieRequerante() {
      var nouvelObjet12 = {
        ...this.FormDataDossier,
        designation: this.FormDataDossier.designation,
        quantite: this.FormDataDossier.quantite,
        prix_unitaire: this.FormDataDossier.prix_unitaire,
        montant_ht: this.MontantHt,
        taux: this.FormDataDossier.taux,
        montant_tva: this.montantTva,
        montant_ttc: this.MontantTTC,
      };
      this.TableauDossier.push(nouvelObjet12);

      this.FormDataDossier = {
        designation: "",
        quantite: 0,
        prix_unitaire: 0,
        exonere: 0,
        taux: 0,
      };
    },

    enregistrementSansTypeFiancement2() {
      var nouvelObjettrsor = {
        exercice: this.exerciceBudgetaire,
        unite_operationnelle_id: this.unite_operationnelle_id,
        activite_id: this.activite_id,

        sous_budget_id: this.sous_budget_id,

        entreprise_id: this.entreprise_id,

        objet_depense: this.objet_depense,

        numero_ordre_paiement: this.numero_ordre_paiement,
        type_ordre_paiement: 1,
        montant_prestation: this.montant_prestation,
        nature_economique_id: this.nature_economique_id,
        nature_depense_id: this.NatureDepense_id,
        type_financement_id: this.type_financement_id,
        source_financement_id: this.source_financement_id,
        cumul_anterieure: this.cumul_anterieure,
        numero_facture: this.numero_facture,
        date_facture: this.date_facture,
        FormDataDossier: this.TableauDossier,
      };

      this.ajouterOrdrePaiement(nouvelObjettrsor);

      (this.TableauDossier = []),
        (this.FormDataDossier.designation = ""),
        (this.FormDataDossier.quantite = ""),
        (this.FormDataDossier.prix_unitaire = 0),
        (this.FormDataDossier.exonere = 0);
      this.FormDataDossier.taux = 0;
      (this.objet_depense = ""),
        (this.activite_id = 0),
        (this.unite_operationnelle_id = 0),
        (this.nature_depense_id = 0),
        (this.entreprise_id = 0),
        (this.sous_budget_id = 0),
        (this.type_financement_id = 0),
        (this.source_financement_id = 0),
        (this.numero_ordre_paiement = ""),
        (this.nature_economique_id = 0),
        (this.type_ordre_paiement = 0),
        (this.montant_prestation = 0),
        (this.cumul_anterieure = 0),
        (this.montant_facture = 0),
        (this.date_facture = ""),
        (this.numero_facture = 0);
    },
  },
  watch: {
    activite_id: function (value) {
      let objet = {
        id: value,
      };
      this.getBudgetViseParActvite(objet);
    },
  },
};
</script>
<style scoped>
.form-control {
  border: 1px solid #000 !important;
  color: #000 !important;
  font-weight: 900 !important;
}
</style>
