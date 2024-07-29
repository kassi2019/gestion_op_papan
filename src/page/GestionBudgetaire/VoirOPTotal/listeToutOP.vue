<template>
  <div class="container">
    <div class="col-md-12">
      <div class="card" style="box-shadow: 5px 5px #f9d531">
        <div class="card-header">
          <div class="page-header">
            <h6 class="fw-bold mb-3">Ordre paiement</h6>
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
                <a href="#">Liste des OP</a>
              </li>

               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
                  @click.prevent="retour(dossier_id)"
                  ><i class="fas fa-arrow-alt-circle-left"></i> Retour</span
                >
              </li>
            </ul>
          </div>
          <!-- <div class="d-flex align-items-center">
            
            <span
              class="badge badge-primary"
              style="cursor: pointer"
              data-bs-toggle="modal"
              data-bs-target="#largeModal"
              >Ajouter</span
            >
          </div> -->
        </div>
        <div class="card-body">
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
                  <td style="border: 1px solid #000">
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
                      v-if="item.decision_cf == 1"
                      class="badge badge-success"
                      style="cursor: pointer; text-align: center"
                      >{{ afficheDecision(item.decision_cf) }}</span
                    >
                    <span
                      v-if="item.decision_cf == 2"
                      class="badge badge-success"
                      style="cursor: pointer"
                      >{{ afficheDecision(item.decision_cf) }}</span
                    >
                    <span
                      v-if="item.decision_cf == 3"
                      class="badge badge-warning"
                      style="cursor: pointer"
                      >{{ afficheDecision(item.decision_cf) }}</span
                    >
                    <span
                      v-if="item.decision_cf == 4"
                      class="badge badge-danger"
                      style="cursor: pointer"
                      >{{ afficheDecision(item.decision_cf) }}</span
                    >
                  </td>
                  <td style="border: 1px solid #000">
                    {{ formaterDate(item.date_decision) }}
                  </td>
                  <td style="border: 1px solid #000">
                    <!-- <span
                      class="badge badge-black"
                      style="cursor: pointer"
                      @click.prevent="AfficheVentilationBudget(item.id)"
                      >Saisir budget</span
                    > -->
                    <span
                      title="Modifier"
                      class="fas fa-edit"
                      data-bs-toggle="modal"
                      data-bs-target="#largeModal1"
                      style="cursor: pointer; color: blue"
                      @click.prevent="AfficheModalModification(item.id)"
                    ></span>
                    <span
                      title="Supprimer"
                      class="fas fa-archive"
                      style="cursor: pointer; color: red"
                      @click.prevent="supprimerInformationBudget(item.id)"
                    ></span>
                    <span
                      title="Voir facture"
                      class="fas fa-eye"
                      style="cursor: pointer; color: #006d80"
                      @click.prevent="supprimerInformationBudget(item.id)"
                    ></span>
                    <span
                      title="Imprimer OP"
                      class="fas fa-print"
                      style="cursor: pointer; color: #77abd6"
                      @click.prevent="fonctionImprimer(item.id,dossier_id)"
                    ></span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <!-- modal de modification -->

    <div
      class="modal fade"
      id="largeModal1"
      tabindex="-1"
      data-bs-backdrop="static"
      data-keyboard="false"
    >
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Modifier Ordre Paiement</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="row">
                <div class="col-3">
                  <label for="inputNanme4" class="form-label">Exercice</label>
                  <input
                    type="text"
                    class="form-control"
                    :value="exerciceBudgetaire"
                    style="
                      border: 1px solid #000 !important;
                      background-color: #dcdcdc !important;
                    "
                    readonly
                  />
                </div>
                <div class="col-9">
                  <label class="form-label">Unité Opérationnelle</label>

                  <model-list-select
                    :list="getterBudgetViseGroupeParActivite"
                    v-model="modNatureDepense.unite_operationnelle_id"
                    option-value="unite_operationnelle_id"
                    option-text="nom_projet"
                    placeholder="select item"
                    style="border: 1px solid #000"
                  >
                  </model-list-select>
                </div>
                <div class="col-12">
                  <label class="form-label">Activité</label>
                  <model-list-select
                    :list="getterBudgetViseGroupeParActivite"
                    v-model="modNatureDepense.activite_id"
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
                    v-model="modNatureDepense.sous_budget_id"
                    option-value="id"
                    option-text="libelle"
                    placeholder="select item"
                    style="border: 1px solid #000"
                  >
                  </model-list-select>
                </div>
                <div class="col-6">
                  <label class="form-label">Nom du Bénéficiaire</label>
                  <model-list-select
                    :list="AfficheEntreprise"
                    v-model="modNatureDepense.entreprise_id"
                    option-value="id"
                    option-text="objet"
                    placeholder="select item"
                    style="border: 1px solid #000"
                  >
                  </model-list-select>
                </div>
                <div class="col-6">
                  <label class="form-label">Adresse</label>
                  <input
                    type="text"
                    class="form-control"
                    readonly
                    :value="AdresseEntreprise(modNatureDepense.entreprise_id)"
                    style="border: 1px solid #000 !important"
                  />
                </div>
                <div class="col-6">
                  <label class="form-label">Numéro compte contribuable</label>
                  <input
                    type="text"
                    class="form-control"
                    readonly
                    style="border: 1px solid #000 !important"
                    :value="ccEntreprise(modNatureDepense.entreprise_id)"
                  />
                </div>
                <div class="col-12">
                  <label class="form-label">Objet de la depense</label>
                  <input
                    type="text"
                    class="form-control"
                    style="border: 1px solid #000 !important"
                    v-model="modNatureDepense.objet_depense"
                  />
                </div>
                <div class="col-6">
                  <label class="form-label">Numéro de ordre de paiement</label>
                  <input
                    type="text"
                    class="form-control"
                    style="border: 1px solid #000 !important"
                    v-model="modNatureDepense.numero_ordre_paiement"
                  />
                </div>
                <div class="col-6">
                  <label class="form-label">Montant des préstations</label>

                  <money3
                    class="form-control"
                    v-bind="config"
                    v-model="modNatureDepense.montant_prestation"
                    style="border: 1px solid #000 !important"
                  ></money3>
                </div>
                <div class="col-9">
                  <label class="form-label"
                    >Nature économique / Imputation</label
                  >
                  <model-list-select
                    :list="AfficheNatureEconomique"
                    v-model="modNatureDepense.nature_economique_id"
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
                  <label class="form-label">Type financement</label>

                  <model-list-select
                    :list="AfficheTypeFinancement"
                    v-model="modNatureDepense.type_financement_id"
                    option-value="id"
                    option-text="objet"
                    placeholder="select item"
                    style="border: 1px solid #000"
                  >
                  </model-list-select>
                </div>
                <div class="col-9">
                  <label class="form-label">Source de financement</label>

                  <model-list-select
                    :list="AfficheSourceFinancement"
                    v-model="modNatureDepense.source_financement_id"
                    option-value="id"
                    option-text="objet"
                    placeholder="select item"
                    style="border: 1px solid #000"
                  >
                  </model-list-select>
                </div>
                <div class="col-6">
                  <label for="inputNanme4" class="form-label">Décision</label>
                  <select
                    class="form-select"
                    style="border: 1px solid #000"
                    v-model="modNatureDepense.decision_cf"
                  >
                    <option selected></option>
                    <option :value="1">Visé</option>
                    <option :value="2">Visé avec observation</option>
                    <option :value="0">En attente</option>
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
                    v-model="modNatureDepense.date_decision"
                  />
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              @click.prevent="this.getActivite()"
            >
              Fermer
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click.prevent="modificationOrdrePaiement()"
              data-bs-dismiss="modal"
            >
              Modifier
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="largeModal" tabindex="-1">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Ajouter budget global</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="col-12">
                <label for="inputNanme4" class="form-label">Exercice</label>
                <input
                  type="text"
                  class="form-control"
                  :value="exerciceBudgetaire"
                  style="
                    border: 1px solid #000 !important;
                    background-color: #dcdcdc !important;
                    color: #000 !important;
                  "
                  readonly
                />
              </div>
              <div class="col-12">
                <label for="inputNanme4" class="form-label"
                  >Libelle du budget</label
                >
                <input
                  type="text"
                  class="form-control"
                  style="border: 1px solid #000"
                  v-model="ajouterNatureDepense.libelle"
                />
              </div>
              <div class="col-12">
                <label for="inputNanme4" class="form-label"
                  >Dotation global budget</label
                >
                <money3
                  v-model="ajouterNatureDepense.dotation"
                  class="form-control"
                  v-bind="config"
                  style="border: 1px solid #000"
                ></money3>
                <!-- <input
                  type="text"
                  class="form-control"
                  v-model="ajouterNatureDepense.dotation"
                  style="background-color: #dcdcdc; font-weight: bolder"
                /> -->
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Fermer
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click.prevent="EnregistrerSection()"
            >
              Enregistrer
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import moment from "moment";
import { ModelListSelect } from "vue-search-select";
// import { Money3Component } from "v-money3";
import { formatageSommeSansFCFA } from "../../Repositories/Repository";
export default {
  components: { ModelListSelect },
  data() {
    return {
      ajouterNatureDepense: {
        dotation: "",
        libelle: "",
      },

      modNatureDepense: {
        activite_id: 0,
        unite_operationnelle_id: 0,
        sous_budget_id: 0,
        objet_depense: "",
        nature_depense_id: 0,
        entreprise_id: 0,
        type_financement_id: 0,
        source_financement_id: 0,
        numero_ordre_paiement: "",
        nature_economique_id: 0,
        type_ordre_paiement: 0,
        montant_prestation: 0,
        cumul_anterieure: 0,
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
    this.dossier_id = this.$route.params.id;

    this.getListeOrdrePaiementGlobal();
    this.getBudgetEclateViseGroupeParActivte();
    this.getSousBudget();
    this.getEntreprise();
    this.getTypeFinancement();
    this.getBailleur();
    this.getNatureDepense();
    this.getNatureEconomique();
    this.getBudgetVise();

    // if (this.modNatureDepense.activite_id != 0  ) {

    // }
    // this.getExerciceBudgetaire();
    // this.getInformationBudget();
  },
  computed: {
    ...mapGetters("parametrage", [
      "getterActivite",
      "getterSousBudget",
      "getterListeOPgloba",
      "getterExerciceBudgetaire",
      "getterInformationBudget",
      "getterBudgetViseGroupeParActivite",
      "getterEntreprise",
      "getterBudgetViseParActivite",
      "getterNatureEconomique",
      "getterNatureDepense",
      "getterBailleur",
      "getterTypeFinancement",
      "getterAfficheBudgetVise",
    ]),

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
      if (
        this.modNatureDepense.sous_budget_id == 0 &&
        this.modNatureDepense.activite_id != 0
      ) {
        let objet = this.getterBudgetViseParActivite.filter(
          (item) =>
            item.activite_id == this.modNatureDepense.activite_id &&
            item.ligneeconomique_id ==
              this.modNatureDepense.nature_economique_id &&
            item.type_financement_id ==
              this.modNatureDepense.type_financement_id
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
            item.sous_budget_id == this.modNatureDepense.sous_budget_id &&
            item.ligneeconomique_id ==
              this.modNatureDepense.nature_economique_id &&
            item.type_financement_id ==
              this.modNatureDepense.type_financement_id
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
      if (
        this.modNatureDepense.sous_budget_id == 0 &&
        this.modNatureDepense.activite_id != 0
      ) {
        let objet = this.getterBudgetViseParActivite.filter(
          (item) =>
            item.activite_id == this.modNatureDepense.activite_id &&
            item.ligneeconomique_id ==
              this.modNatureDepense.nature_economique_id
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
            item.sous_budget_id == this.modNatureDepense.sous_budget_id &&
            item.ligneeconomique_id ==
              this.modNatureDepense.nature_economique_id
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

    libelleNatureDepense() {
      if (
        this.modNatureDepense.sous_budget_id == 0 &&
        this.modNatureDepense.activite_id != 0
      ) {
        // return (id) => {
        //   if (id != null && id != "") {
        const qtereel = this.getterBudgetViseParActivite.find(
          (qtreel) =>
            qtreel.ligneeconomique_id ==
              this.modNatureDepense.nature_economique_id &&
            qtreel.type_financement_id ==
              this.modNatureDepense.type_financement_id &&
            qtreel.source_financement_id ==
              this.modNatureDepense.source_financement_id
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
            qtreel.ligneeconomique_id ==
              this.modNatureDepense.nature_economique_id &&
            qtreel.sous_budget_id == this.modNatureDepense.sous_budget_id &&
            qtreel.type_financement_id ==
              this.modNatureDepense.type_financement_id &&
            qtreel.source_financement_id ==
              this.modNatureDepense.source_financement_id
        );

        if (qtereel) {
          return this.afficheNatureDepense(qtereel.nature_depense_id);
        }
        return 0;
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
    AfficheNatureEconomique() {
      let collet = [];
      this.GroupeParNatureEconomique.filter((item) => {
        // if (item.activite_id == this.activite_id)
        {
          let data = {
            id: item,
            objet: this.NatureEconomique(item),
          };
          collet.push(data);
        }
      });
      return collet;
    },
    GroupeParNatureEconomique() {
      // return (id) => {
      if (
        this.modNatureDepense.sous_budget_id == 0 &&
        this.modNatureDepense.activite_id != 0
      ) {
        let objet = this.getterBudgetViseParActivite.filter(
          (item) => item.activite_id == this.modNatureDepense.activite_id
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
          (item) => item.sous_budget_id == this.modNatureDepense.sous_budget_id
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
    NatureEconomique() {
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
        if (item.activite_id == this.modNatureDepense.activite_id) {
          let data = {
            id: item.id,
            libelle: item.libelle,
          };
          collet.push(data);
        }
      });
      return collet;
    },
    afficheListeOPprovisoire() {
      return this.getterListeOPgloba.filter(
        (item) => item.bordereau_id == this.dossier_id
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
  },
  methods: {
    ...mapActions("parametrage", [
      "getActivite",
      "modifierOrdrePaiement",
      "getNatureEconomique",
      "getListeOrdrePaiementGlobal",
      "getBudgetEclateViseGroupeParActivte",
      "ajouterInformationBudget",
      "modifierInformationBudget",
      "supprimerInformationBudget",
      "getExerciceBudgetaire",
      "getInformationBudget",
      "getTypeFinancement",
      "getBailleur",
      "getProjet",
      "getNatureDepense",
      "getEntreprise",
      "getSousBudget",
      "getBudgetViseParActvite",
      "getBudgetVise",
      "getBudgetEclateViseGroupeParActivte",
      "getBudgetEclate",
      "getDotationRessourcePropre",
      "getTypeFinancement",
      "getBailleur",
      "getProjet",
      "getNatureDepense",
    ]),
retour() {
      this.$router.push({
        name: "infoBordereauTotal",
      });
    },
    modificationOrdrePaiement() {
      var objetDirect1 = {
        id: this.modNatureDepense.id,
        exercice: this.modNatureDepense.exercice,
        unite_operationnelle_id: this.modNatureDepense.unite_operationnelle_id,
        activite_id: this.modNatureDepense.activite_id,
        sous_budget_id: this.modNatureDepense.sous_budget_id,
        entreprise_id: this.modNatureDepense.entreprise_id,
        objet_depense: this.modNatureDepense.objet_depense,
        numero_ordre_paiement: this.modNatureDepense.numero_ordre_paiement,
        type_ordre_paiement: this.modNatureDepense.type_ordre_paiement,
        montant_prestation: this.modNatureDepense.montant_prestation,
        nature_economique_id: this.modNatureDepense.nature_economique_id,
        nature_depense_id: this.modNatureDepense.nature_depense_id,
        type_financement_id: this.modNatureDepense.type_financement_id,
        source_financement_id: this.modNatureDepense.source_financement_id,
        cumul_anterieure: this.modNatureDepense.cumul_anterieure,
        date_decision: this.modNatureDepense.date_decision,
        decision_cf: this.modNatureDepense.decision_cf,
      };

      this.modifierOrdrePaiement(objetDirect1);
      this.modNatureDepense = {};
    },
    AfficheModalModification(id) {
      this.modNatureDepense = this.getterListeOPgloba.find(
        (items) => items.id == id
      );
    },
     fonctionImprimer(id,id1) {
      this.$router.push({
        name: "imprimerToutOP",
        params: { id: id,id1: id1 },
      });
    },
    AfficheVentilationBudget(id) {
      this.$router.push({
        name: "VentilationBudget",
        params: { id: id },
      });
    },
    afficheDecision($id) {
      if ($id == 1) {
        return "Visé";
      } else if ($id == 2) {
        return "Visé avec observation";
      } else if ($id == 3) {
        return "Différé";
      } else if ($id == 4) {
        return "Réjetté";
      } else {
        return "En attente";
      }
    },

    formatageSommeSansFCFA: formatageSommeSansFCFA,
    formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },
  },
};
</script>
