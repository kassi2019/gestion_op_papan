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
                <a href="#">Gestion Personnel</a>
              </li>
              <li class="separator">
                <i class="icon-arrow-right"></i>
              </li>
              <li class="nav-item">
                <a href="#">OP Provisoire Personnel</a>
              </li>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

              <li class="nav-item">
                <span
                  class="badge badge-warning"
                  style="cursor: pointer; color: #000"
                  @click.prevent="retour"
                  ><i class="fas fa-arrow-alt-circle-left"></i> Retour</span
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="card-body">
          <FormWizard color="#1D702D">
            <TabContent title="SAISIR OP PROVISOIRE" icon="icon-note">
              <FormWizard @on-complete="onComplete" color="#e67e22">
                <TabContent title="PROJET" icon="ti-home">
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
                            :list="getterBudgetViseGroupeParActivite"
                            v-model="unite_operationnelle_id"
                            option-value="unite_operationnelle_id"
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
                            :list="getterBudgetViseGroupeParActivite"
                            v-model="activite_id"
                            option-value="activite_id"
                            option-text="plan_activite"
                            placeholder="select item"
                            style="border: 1px solid #000"
                          >
                          </model-list-select>
                          <span style="color: red" v-if="activite_id == 0"
                            >Ce champs est obligatoire!
                          </span>
                        </div>
                        <div class="col-6">
                          <label class="form-label"
                            >Composante
                            <span
                              style="
                                color: red !important;
                                font-size: 15px !important;
                              "
                              >*</span
                            ></label
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
                          <span style="color: red" v-if="sous_budget_id == 0"
                            >Ce champs est obligatoire!
                          </span>
                        </div>
                      </form>
                    </div>
                  </div>
                </TabContent>
                <TabContent title="ORDRE PAIEMENT" icon="ti-write">
                  <div class="row">
                    <div class="col-lg-12">
                      <form class="row g-3">
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
                          <span style="color: red" v-if="objet_depense == 0"
                            >Ce champs est obligatoire!
                          </span>
                        </div>
                        <div class="col-6">
                          <label class="form-label"
                            >Numéro de ordre de paiement
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            style="border: 1px solid #000 !important"
                            :value="automatiseNumeroOP"
                            readonly
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
                          <span
                            style="color: red"
                            v-if="montant_prestation == 0"
                            >Ce champs est obligatoire!
                          </span>
                          <span style="color: red" v-if="montant_prestation < 0"
                            >le Montant doit être positif
                          </span>
                        </div>
                       
                      </form>
                    </div>
                  </div>
                </TabContent>
                <TabContent title="BAILLEUR" icon="fas fa-hands-helping">
                  <div class="row">
                    <div class="col-lg-12">
                      <form class="row g-3">
                         <div class="col-12">
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
                          <span
                            style="color: red"
                            v-if="nature_economique_id == 0"
                            >Ce champs est obligatoire!
                          </span>
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
                          <span
                            style="color: red"
                            v-if="type_financement_id == 0"
                            >Ce champs est obligatoire!
                          </span>
                        </div>
                        <div class="col-6">
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
                          <span
                            style="color: red"
                            v-if="source_financement_id == 0"
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
                      </form>
                    </div>
                  </div>
                </TabContent>
                <TabContent
                  title="DOTATION"
                  icon="fas fa-calculator"
                >
                  <div class="row">
                    <div class="col-lg-12">
                      <form class="row g-3">
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
                            :model-value="afficheMontantCumul"
                            readonly
                          ></money3>
                        </div>
                        <div class="col-3">
                          <label class="form-label"
                            >Dépense en Cours ( C )</label
                          >

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
                          <label class="form-label"
                            >Disponible ( E = A - D )</label
                          >

                          <money3
                            class="form-control"
                            style="border: 1px solid #000 !important"
                            v-bind="config"
                            :model-value="disponible"
                            readonly
                          ></money3>
                        </div>
                        <div class="col-6">
                          <label for="inputNanme4" class="form-label"
                            >Décision</label
                          >
                          <select
                            class="form-select"
                            style="border: 1px solid #000"
                            v-model="decision_cf"
                          >
                            <option selected></option>
                            <option :value="1">Visé</option>
                            <option :value="2">Visé avec observation</option>
                            <option :value="3">Différé</option>
                            <option :value="4">Réjetté</option>
                          </select>
                        </div>
                        <div class="col-6">
                          <label for="inputNanme4" class="form-label"
                            >Date décision</label
                          >
                          <input
                            type="date"
                            class="form-control"
                            style="border: 1px solid #000"
                            v-model="date_decision"
                          />
                        </div>
                      </form>
                    </div></div
                ></TabContent>
                <TabContent title="SAISIR PERSONNEL" icon="fas fa-user-friends">
                  <div class="row">
                    <div class="col-lg-12">
                      <form class="row g-3">
                        <div class="col-3">
                          <label class="form-label"
                            >Type dépense
                            <span
                              style="
                                color: red !important;
                                font-size: 15px !important;
                              "
                              >*</span
                            ></label
                          >
                          <model-list-select
                            :list="gettersTypeIndemnite"
                            v-model="FormDataDossier.type_depense_id"
                            option-value="id"
                            option-text="libelle"
                            placeholder="select item"
                            style="border: 1px solid #000"
                          >
                          </model-list-select>
                          <!-- <span
                      style="color: red"
                      v-if="FormDataDossier.type_indemnite_id == 0"
                      >Ce champs est obligatoire!
                    </span> -->
                        </div>
                        <div class="col-6">
                          <label class="form-label"
                            >Personnel
                            <span
                              style="
                                color: red !important;
                                font-size: 15px !important;
                              "
                              >*</span
                            ></label
                          >
                          <model-list-select
                            :list="gettersPersonnelParActivite"
                            v-model="FormDataDossier.personnel_id"
                            option-value="id"
                            option-text="nom_prenoms"
                            placeholder="select item"
                            style="border: 1px solid #000"
                          >
                          </model-list-select>
                          <span
                            style="color: red"
                            v-if="FormDataDossier.personnel_id == 0"
                            >Ce champs est obligatoire!
                          </span>
                        </div>
                        <div class="col-3">
                          <label class="form-label"
                            >Montant
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
                            v-model="FormDataDossier.montant"
                          ></money3>
                          <span
                            style="color: red"
                            v-if="FormDataDossier.montant == 0"
                            >Ce champs est obligatoire!
                          </span>
                          <span
                            style="color: red"
                            v-if="FormDataDossier.montant < 0"
                            >le Montant doit être positif
                          </span>
                        </div>
                        <div class="col-11">
                          <span
                            v-if="
                              CumulMontantAutreMontant != montant_prestation
                            "
                            style="color: red"
                          >
                            Le cumul des paiments est différent du montant de la
                            préstation
                          </span>
                        </div>
                        <div class="col-1">
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
                          <th
                            scope="col"
                            style="
                              text-align: center;
                              border: 1px solid #000 !important;
                            "
                          >
                            Type dépense
                          </th>
                          <th
                            scope="col"
                            style="
                              text-align: center;
                              border: 1px solid #000 !important;
                            "
                          >
                            Personnel
                          </th>

                          <th
                            scope="col"
                            style="
                              text-align: center;
                              border: 1px solid #000 !important;
                            "
                          >
                            Montant
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="item in TableauDossier" :key="item.id">
                          <td style="border: 1px solid #000 !important">
                            {{
                              afficheLibelleTypeDepense(item.type_depense_id)
                            }}
                          </td>
                          <td style="border: 1px solid #000 !important">
                            {{ affichePersonnel(item.personnel_id) }}
                          </td>
                          <td
                            style="
                              text-align: right;
                              border: 1px solid #000 !important;
                            "
                          >
                            {{
                              formatageSommeSansFCFA(parseFloat(item.montant))
                            }}
                          </td>
                          <td style="border: 1px solid #000 !important">
                            <span
                              class="badge bg-danger"
                              style="cursor: pointer"
                              @click.prevent="deletePartieRequerante(index)"
                              ><i class="fas fa-archive"></i> Supprimer</span
                            >
                          </td>
                        </tr>
                        <tr>
                          <td
                            colspan="2"
                            style="
                              text-align: right;
                              border: 1px solid #000 !important;
                            "
                          >
                            TOTAL
                          </td>
                          <td
                            style="
                              text-align: right;
                              border: 1px solid #000 !important;
                            "
                          >
                            {{
                              formatageSommeSansFCFA(
                                parseFloat(CumulMontantAutreMontant)
                              )
                            }}
                          </td>
                        </tr>
                        <tr>
                          <td colspan="3"></td>
                          <td colspan="">
                            <button
                              v-if="
                                unite_operationnelle_id == 0 ||
                                activite_id == 0 ||
                                type_financement_id == 0 ||
                                sous_budget_id == 0 ||
                                source_financement_id == 0 ||
                                nature_economique_id == 0 ||
                                montant_prestation == 0 ||
                                objet_depense == 0 ||
                                montant_prestation < 0
                              "
                              disabled
                              type="button"
                              class="btn btn-success"
                              @click.prevent="
                                enregistrementSansTypeFiancement2()
                              "
                            >
                              Enregistrer
                            </button>
                            <button
                              v-else
                              type="button"
                              class="btn btn-success"
                              @click.prevent="
                                enregistrementSansTypeFiancement2()
                              "
                            >
                              Enregistrer
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </TabContent>
              </FormWizard>
            </TabContent>
            <TabContent
              title="LISTE OP DU BORDEREAU"
              icon="icon-list"
              color="#000"
              >
              <div class="table-responsive">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>Numero OP</th>
                  <th>Objet dépense</th>
                  <th>Montant</th>
                  <th>nature économique</th>
                  <th>Bénéficiaire</th>
                  <th>Décision</th>
                  <th>Date Décision</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in afficheListeOPprovisoire" :key="item.id">
                  <td style="border: 1px solid #000">
                    {{ item.numero_ordre_paiement }}
                  </td>
                  <td style="border: 1px solid #000" class="text-break">
                    {{ item.objet_depense }}
                  </td>
                  <td style="border: 1px solid #000; text-align: right">
                    {{
                      formatageSommeSansFCFA(
                        parseFloat(item.montant_prestation)
                      )
                    }}
                  </td>
                  <td style="border: 1px solid #000">
                    {{ item.nature_economique }}
                  </td>
                  <td style="border: 1px solid #000">
                    {{ item.beneficiaire }}
                  </td>
                  <td style="border: 1px solid #000">
                    <span
                      v-if="item.decision == 1"
                      class="badge badge-success"
                      style="cursor: pointer; text-align: center"
                      >{{ afficheDecision(item.decision) }}</span
                    >
                    <span
                      v-if="item.decision == 2"
                      class="badge badge-success"
                      style="cursor: pointer"
                      >{{ afficheDecision(item.decision) }}</span
                    >
                    <span
                      v-if="item.decision == 3"
                      class="badge badge-warning"
                      style="cursor: pointer"
                      >{{ afficheDecision(item.decision) }}</span
                    >
                    <span
                      v-if="item.decision == 4"
                      class="badge badge-danger"
                      style="cursor: pointer"
                      >{{ afficheDecision(item.decision) }}</span
                    >
                  </td>
                  <td style="border: 1px solid #000">
                    {{ formaterDate(item.date_decision) }}
                  </td>
                  <td style="border: 1px solid #000">
                    <div class="btn-group" role="group" aria-label="Basic mixed styles example">
 <span
                        title="Modifier"
                         class="badge bg-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#largeModal1"
                        style="cursor: pointer"
                        @click.prevent="AfficheModalModification(item.id)"
                      ><i class="fas fa-edit"></i> Modifier</span>
                      <span
                        title="Supprimer"
                         class="badge bg-danger"
                        
                        style="cursor: pointer;"
                        @click.prevent="supprimerInformationBudget(item.id)"
                      ><i class="fas fa-archive"></i> Supprimer</span>
                      <span
                      
                        title="Voir Personnel"
                         class="badge bg-info"
                        style="cursor: pointer; color: #000;
                          font-weight: bolder;"
                        @click.prevent="fonctionImprimerListePersonnel(item.id)"
                        ><i class="fas fa-user-friends" style="color: #000"> Imprimer Personnel</i
                        > </span
                      >

                     

                      <span
                       
                        title="Imprimer OP"
                         class="badge bg-warning"
                        style="
                          cursor: pointer;
                          color: #000;
                          font-weight: bolder;
                        "
                        @click.prevent="
                          fonctionImprimerPersonnel(item.id)
                        "
                      >
                        <i class="fas fa-print" style="color: #000"></i>
                        Imprimer OP</span
                      >
                    </div>
                   
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
              </TabContent
            >
          </FormWizard>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { FormWizard, TabContent } from "vue3-form-wizard";
//import RecapBordereauPersoProv from "./RecapBordereauPersoProv.vue";
import moment from "moment";
import { ModelListSelect } from "vue-search-select";
import { Money3Component } from "v-money3";

import {
  formatageSomme,
  formatageSommeSansFCFA,
} from "../../../Repositories/Repository";
export default {
  components: {
    money3: Money3Component,
    ModelListSelect,
    FormWizard,
    TabContent,
    //  RecapBordereauPersoProv,
    // RecapBordereau,
  },
  data() {
    return {
      type_indemnite_id: 0,
      personnel_id: 0,
      montant: 0,
      TableauDossier: [],
      ModifierBudget: {},
      FormDataDossier: {
        personnel_id: "",
        montant: 0,
        type_depense_id: 0,
      },
      FormDataDossierMod: {
        designation: "",
        quantite: 0,
        prix_unitaire: 0,
        exonere: 0,
      },
      decision_cf: 0,
      date_decision: "",
      autre_taux: 0,
      compte_id: "",
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
    this.bordereau_id = this.$route.params.id;
    this.getExerciceBudgetaire();
    this.getActivite();
    this.getSousBudget();
    this.getEntreprise();
    this.getBudgetEclateViseGroupeParActivte();
    this.getNatureEconomique();
    this.getTypeIndemnite();
    this.getNatureDepense();
    this.getTypeFinancement();
    this.getBailleur();
    this.getTaux();
    this.getActiviteOp();
    this.getCompteBancaire();
    this.getListeOrdrePaiementGlobal();
     this.getListeOrdrePaiementPersonnnelParUtilisateur();
    // this.getDotationNotifie();
    // this.getDotationReport();
    // this.getDotationRessourcePropre();
    // this.getDotationAutreRessource();
    // this.getBudgetEclate();

    //   // this.getDotationNotifie();
  },
  computed: {
    ...mapGetters("Personnel", [
      "getterNatureDepense",
      "gettersPersonnelParUtilisateur",
      "gettersPersonnel",
      "gettersFonction",
      "gettersService",
      "gettersSituationMatrimonial",
      "gettersEmploi",
      "gettersNatureContrat",
      "gettersDiplome",
      "gettersTypeIndemnite",
      "gettersTypePiece",
      "gettersDetailDepensePerso",
      "gettersPersonnelParActivite",
    ]),
    ...mapGetters("parametrage", [
      "getterProjet","getterOpPersonnelParUser",
      "getterCompteBancaire",
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
      "getterListeOPgloba",
      "getterOpParActivite",
    ]),
    afficherTypeDepense() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.getterOpPersonnelParUser.find(
            (qtreel) => qtreel.bordereau_id == id
          );

          if (qtereel) {
            return qtereel.type_depense;
          }
          return "8";
        }
      };
    },
afficheListeOPprovisoire() {
      return this.getterOpPersonnelParUser.filter(
        (item) =>
          item.bordereau_id == this.bordereau_id && item.type_ordre_paiement == 1
      );
    },
    taillerTableau() {
      return this.TableauDossier.length;
    },
    CumulMontantAutreMontant() {
      return this.TableauDossier.filter(
        (item) => item.numero_ordre_paiement == this.automatiseNumeroOP
      )
        .reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.montant), 0)
        .toFixed(0);
    },
    CumulMontanttva() {
      return this.TableauDossier.filter(
        (item) => item.numero_ordre_paiement == this.automatiseNumeroOP
      )
        .reduce(
          (prec, cur) => parseFloat(prec) + parseFloat(cur.montant_tva),
          0
        )
        .toFixed(0);
    },
    CumulMontantHT() {
      return this.TableauDossier.filter(
        (item) => item.numero_ordre_paiement == this.automatiseNumeroOP
      )
        .reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.montant_ht), 0)
        .toFixed(0);
    },
    CumulMontantSaisi() {
      return this.TableauDossier.filter(
        (item) => item.numero_ordre_paiement == this.automatiseNumeroOP
      )
        .reduce(
          (prec, cur) => parseFloat(prec) + parseFloat(cur.montant_ttc),
          0
        )
        .toFixed(0);
    },
    MontantTTCMod() {
      return (
        parseFloat(this.afficheAutreMontantMod) +
        parseFloat(this.montantTvaMod) +
        parseFloat(this.MontantHtMod)
      );
    },
    MontantTTC() {
      return (
        parseFloat(this.afficheAutreMontant) +
        parseFloat(this.montantTva) +
        parseFloat(this.MontantHt)
      );
    },
    montantTvaMod() {
      const val = parseFloat(
        (parseFloat(this.MontantHtMod) * parseFloat(this.AfficheTauxTVAMod)) /
          100
      );

      if (val) {
        return parseFloat(val).toFixed(0);
      }

      return 0;
    },

    montantTva() {
      const val = parseFloat(
        (parseFloat(this.MontantHt) * parseFloat(this.AfficheTauxTVA)) / 100
      );

      if (val) {
        return parseFloat(val).toFixed(0);
      }

      return 0;
    },

    afficheAutreMontantMod() {
      return (
        (parseFloat(this.FormDataDossierMod.autre_taux) / 100) *
        parseFloat(this.MontantHtMod)
      );
    },
    afficheAutreMontant() {
      if (this.FormDataDossier.type_forfait == "taux") {
        return (parseFloat(this.autre_taux) / 100) * parseFloat(this.MontantHt);
      } else {
        return parseFloat(this.MontantHt) + parseFloat(this.autre_taux);
      }
    },

    AfficheTauxTVAMod() {
      if (this.FormDataDossierMod.exonere == 1) {
        return 0;
      } else {
        // return (id) => {
        //   if (id != null && id != "") {
        const qtereel = this.getterTaux.find((qtreel) => qtreel.encours == 1);

        if (qtereel) {
          return qtereel.taux;
        }
        return 0;
        //   }
        // };
      }
    },
    AfficheTauxTVA() {
      if (this.FormDataDossier.exonere == 0) {
        return 0;
      } else {
        // return (id) => {
        //   if (id != null && id != "") {
        const qtereel = this.getterTaux.find((qtreel) => qtreel.encours == 1);

        if (qtereel) {
          return qtereel.taux;
        }
        return 0;
        //   }
        // };
      }
    },
    automatiseNumeroOP() {
      return (
        "00" +
        "" +
        (this.getterListeOPgloba.length + 1) +
        "/" +
        "PA" +
        "/" +
        this.exerciceBudgetaire
      );
    },
    afficheMontantCumul() {
      if (this.sous_budget_id == 0 && this.activite_id != 0) {
        // return (id) => {
        //     if (id != null && id != "") {
        return this.getterOpParActivite
          .filter(
            (qtreel) =>
              (qtreel.nature_economique_id == this.nature_economique_id &&
                qtreel.type_financement_id == this.type_financement_id &&
                qtreel.source_financement_id == this.source_financement_id &&
                qtreel.nature_depense_id == this.NatureDepense_id &&
                qtreel.annulation == 0 &&
                qtreel.type_ordre_paiement == 2) ||
              (qtreel.nature_economique_id == this.nature_economique_id &&
                qtreel.type_financement_id == this.type_financement_id &&
                qtreel.source_financement_id == this.source_financement_id &&
                qtreel.nature_depense_id == this.NatureDepense_id &&
                qtreel.annulation == 0 &&
                qtreel.type_ordre_paiement == 4)
          )
          .reduce(
            (prec, cur) =>
              parseFloat(prec) + parseFloat(cur.montant_prestation),
            0
          )
          .toFixed(0);
      } else {
        return this.getterOpParActivite
          .filter(
            (qtreel) =>
              (qtreel.nature_economique_id == this.nature_economique_id &&
                qtreel.type_financement_id == this.type_financement_id &&
                qtreel.source_financement_id == this.source_financement_id &&
                qtreel.nature_depense_id == this.NatureDepense_id &&
                qtreel.sous_budget_id == this.sous_budget_id &&
                qtreel.annulation == 0 &&
                qtreel.type_ordre_paiement == 4) ||
              (qtreel.nature_economique_id == this.nature_economique_id &&
                qtreel.type_financement_id == this.type_financement_id &&
                qtreel.source_financement_id == this.source_financement_id &&
                qtreel.nature_depense_id == this.NatureDepense_id &&
                qtreel.sous_budget_id == this.sous_budget_id &&
                qtreel.annulation == 0 &&
                qtreel.type_ordre_paiement == 2)
          )
          .reduce(
            (prec, cur) =>
              parseFloat(prec) + parseFloat(cur.montant_prestation),
            0
          )
          .toFixed(0);
      }
    },
    afficheCompteBancaire() {
      let collet = [];
      this.getterCompteBancaire.filter((item) => {
        if (item.entreprise_id == this.entreprise_id) {
          let data = {
            id: item.id,
            numero_compte: item.numero_compte,
          };
          collet.push(data);
        }
      });
      return collet;
    },

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
    afficheLibelleTypeDepense() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettersTypeIndemnite.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.libelle;
          }
          return 0;
        }
      };
    },
    affichePersonnel() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettersPersonnelParActivite.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.nom_prenoms;
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

    AfficheEnFonctionExenere() {
      if (this.exonere == 0) {
        return this.getterTaux.filter((item) => item.encours != 1);
      } else {
        return this.getterTaux;
      }
    },

    MontantHtMod() {
      return (
        parseFloat(this.FormDataDossierMod.quantite) *
        parseFloat(this.FormDataDossierMod.prix_unitaire)
      );
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
        parseFloat(this.afficheMontantCumul) +
        parseFloat(this.montant_prestation)
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
    ...mapActions("Personnel", [
      "getService",
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
      "getBudgetViseParActvite",
      "AjouterPersonnel",
    ]),
    ...mapActions("parametrage", [
      "getActivite","getListeOrdrePaiementPersonnnelParUtilisateur",
      "getListeOrdrePaiementGlobal",
      "getCompteBancaire",
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
      "AjouterOpPersonnel",
      "getOpParActvite",
    ]),
     fonctionImprimerListePersonnel(id) {
      this.$router.push({
        name: "ImprimerPersonnelOP",
        params: { id: id },
      });
    },
    fonctionImprimerPersonnel(id) {
      this.$router.push({
        name: "ImprimerOpPersonnel",
        params: { id: id },
      });
    },
     formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },
    retour() {
      this.$router.push({
        name: "InfoBordOpProvisoirePerso",
      });
    },
    // retour() {
    //   window.history.back();
    // },
    AfficheModalModificationFacture(id) {
      this.FormDataDossierMod = this.TableauDossier.find(
        (items) => items.nombre == id
      );
    },
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

        personnel_id: this.FormDataDossier.personnel_id,
        montant: this.FormDataDossier.montant,
        type_depense_id: this.FormDataDossier.type_depense_id,
        numero_ordre_paiement: this.automatiseNumeroOP,
      };
      this.TableauDossier.push(nouvelObjet12);

      this.FormDataDossier = {
        personnel_id: "",
        montant: 0,
        type_depense_id: "",
      };
    },

    enregistrementSansTypeFiancement2() {
      var nouvelObjettrsor = {
        exercice: this.exerciceBudgetaire,
        unite_operationnelle_id: this.unite_operationnelle_id,
        activite_id: this.activite_id,
        sous_budget_id: this.sous_budget_id,
        entreprise_id: this.entreprise_id,
        compte_id: this.compte_id,
        objet_depense: this.objet_depense,
        numero_ordre_paiement: this.automatiseNumeroOP,
        type_ordre_paiement: 1,
        montant_prestation: this.montant_prestation,
        nature_economique_id: this.nature_economique_id,
        nature_depense_id: this.NatureDepense_id,
        type_financement_id: this.type_financement_id,
        source_financement_id: this.source_financement_id,
        cumul_anterieure: this.afficheMontantCumul,
        numero_facture: this.numero_facture,
        date_facture: this.date_facture,
        decision_cf: this.decision_cf,
        date_decision: this.date_decision,
        bordereau_id: this.bordereau_id,
        FormDataDossier: this.TableauDossier,
      };

      this.AjouterOpPersonnel(nouvelObjettrsor);

      (this.TableauDossier = []),
        (this.FormDataDossier.type_depense_id = ""),
        (this.FormDataDossier.personnel_id = ""),
        (this.FormDataDossier.montant = 0),
        (this.objet_depense = ""),
        (this.activite_id = 0),
        (this.unite_operationnelle_id = 0),
        (this.nature_depense_id = 0),
        (this.sous_budget_id = 0),
        (this.type_financement_id = 0),
        (this.source_financement_id = 0),
        (this.nature_economique_id = 0),
        (this.type_ordre_paiement = 0),
        (this.montant_prestation = 0),
        (this.cumul_anterieure = 0);
    },
  },
  watch: {
    activite_id: function (value) {
      let objet = {
        id: value,
      };
      this.getBudgetViseParActvite(objet);
      this.getOpParActvite(objet);
      this.getPersonnelParActivite(objet);
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
