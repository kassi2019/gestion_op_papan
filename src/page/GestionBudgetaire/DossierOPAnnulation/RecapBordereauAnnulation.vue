<template>
  <div class="container">
    <div class="col-md-12">
      <div class="card" style="box-shadow: 5px 5px #f9d531">
        <div class="card-header">
          <div class="page-header">
            <h6 class="fw-bold mb-3">Information Sur le Bordereau</h6>
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
                <a href="#">Bordereau OP Annulation</a>
              </li>
            </ul>
          </div>
          <div class="d-flex align-items-center">
            <!-- <h4 class="card-title">Information du budget global</h4> -->

           
          </div>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>Exercice</th>
                  <th>Objet du bordereau</th>
                  <th>Dotation</th>
                  <th>Décision</th>
                  <th>Date de visa</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in AfficherBudgetGlobal" :key="item.id">
                  <td style="border: 1px solid #000">{{ item.exercice }}</td>
                  <td style="border: 1px solid #000">{{ item.libelle }}</td>
                  <td style="border: 1px solid #000; text-align: right">
                    {{ formatageSommeSansFCFA(parseFloat(item.dotation)) }}
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
                    
                    <span
                      data-bs-toggle="modal"
                      data-bs-target="#largeModal12"
                      class="badge badge-secondary"
                      @click.prevent="ModalAppliqueDecision(item.id)"
                      style="cursor: pointer"
                      >Mettre decision</span
                    >
                     <span
                          class="badge badge-black"
                          style="cursor: pointer"
                          @click.prevent="AfficheVentilationBudget(item.bordereau_id)"
                          >Voir OP</span
                        >
                    <span
                      class="badge rounded-pill bg-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#largeModal1"
                      style="cursor: pointer"
                      title="modifier"
                      @click.prevent="AfficheModalModification(item.id)"
                      ><i class="far fa-edit"></i
                    ></span>
                    <span
                      title="Imprimer Bordereau"
                      class="badge bg-warning"
                      style="cursor: pointer; color: #77abd6"
                      @click.prevent="fonctionImprimer(item.id)"
                    >
                      <i class="fas fa-print" style="color: #dcdcdc"></i
                    ></span>
                    <span
                      v-if="item.decision == 0"
                      class="badge bg-danger"
                      style="cursor: pointer"
                      title="Supprimer"
                      @click.prevent="supprimerInformationBudget(item.id)"
                      ><i class="fas fa-archive"></i
                    ></span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <!-- modal de la decision -->
    <div class="modal fade" id="largeModal12" tabindex="-1">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Appliquer la décision</h5>
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
                  style="border: 1px solid #000; background-color: #dcdcdc"
                  readonly
                />
              </div>
              <div class="col-12">
                <label for="inputNanme4" class="form-label">Décision</label>
                <select
                  class="form-select"
                  style="border: 1px solid #000"
                  v-model="DecisionApp.decision"
                >
                  <option selected></option>
                  <option :value="1">Visé</option>
                  <option :value="2">Visé avec observation</option>
                  <option :value="3">Différé</option>
                  <option :value="4">Réjetté</option>
                  <option :value="0">En attente</option>
                </select>
              </div>
              <div class="col-12">
                <label for="inputNanme4" class="form-label"
                  >Date décision</label
                >
                <input
                  type="date"
                  class="form-control"
                  style="border: 1px solid #000"
                  v-model="DecisionApp.date_decision"
                />
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
              @click.prevent="AppliqueDecision()"
              data-bs-dismiss="modal"
            >
              Appliquer
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- modal de modification -->

    <div class="modal fade" id="largeModal1" tabindex="-1">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Modifier le bordereau</h5>
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
                  style="border: 1px solid #000; background-color: #dcdcdc"
                  readonly
                />
              </div>
              <div class="col-12">
                <label class="form-label"
                  >Activité
                  <span
                    style="color: red !important; font-size: 15px !important"
                    >*</span
                  ></label
                >
                <model-list-select
                  :list="libelleActivite"
                  v-model="modNatureDepense.activite_id"
                  option-value="id"
                  option-text="libelle"
                  placeholder="select item"
                  style="border: 1px solid #000"
                >
                </model-list-select>
                <span
                  style="color: red"
                  v-if="modNatureDepense.activite_id == 0"
                  >Ce champs est obligatoire!
                </span>
              </div>
              <div class="col-12">
                <label for="inputNanme4" class="form-label"
                  >Objet du bordéreau</label
                >
                <input
                  type="text"
                  class="form-control"
                  style="border: 1px solid #000"
                  v-model="modNatureDepense.libelle"
                />
              </div>
              <div class="col-12">
                <label for="inputNanme4" class="form-label"
                  >Montant du bordereau</label
                >
                <money3
                  v-model="modNatureDepense.dotation"
                  class="form-control"
                  style=""
                ></money3>
              </div>
              <div class="col-12">
                <label for="inputNanme4" class="form-label">Observation</label>
                <select
                  class="form-select"
                  style="border: 1px solid #000"
                  v-model="modNatureDepense.observation"
                >
                  <option selected></option>
                  <option :value="1">Pour Information</option>
                  <option :value="2">Pour Visa et Retour</option>
                  <option :value="3">pour Visa</option>
                  <option :value="4">Pour Attribution</option>
                  <option :value="5">Pour Prise en compte</option>
                  <option :value="6">Pour Observation</option>
                  <option :value="7">Pour Differé</option>
                  <option :value="8">Pour Rejet</option>
                </select>
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
              @click.prevent="modificationSection()"
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
            <h5 class="modal-title">Ajouter le bordereau</h5>
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
                <label class="form-label"
                  >Activité
                  <span
                    style="color: red !important; font-size: 15px !important"
                    >*</span
                  ></label
                >
                <model-list-select
                  :list="libelleActivite"
                  v-model="ajouterNatureDepense.activite_id"
                  option-value="id"
                  option-text="libelle"
                  placeholder="select item"
                  style="border: 1px solid #000"
                >
                </model-list-select>
                <span
                  style="color: red"
                  v-if="ajouterNatureDepense.activite_id == 0"
                  >Ce champs est obligatoire!
                </span>
              </div>
              <div class="col-12">
                <label for="inputNanme4" class="form-label"
                  >Objet du bordéreau</label
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
                  >Montant du bordereau</label
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
              <div class="col-12">
                <label for="inputNanme4" class="form-label">Observation</label>
                <select
                  class="form-select"
                  style="border: 1px solid #000"
                  v-model="ajouterNatureDepense.observation"
                >
                  <option selected></option>
                  <option :value="1">Pour Information</option>
                  <option :value="2">Pour Visa et Retour</option>
                  <option :value="3">pour Visa</option>
                  <option :value="4">Pour Attribution</option>
                  <option :value="5">Pour Prise en compte</option>
                  <option :value="6">Pour Observation</option>
                  <option :value="7">Pour Differé</option>
                  <option :value="8">Pour Rejet</option>
                </select>
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
import { formatageSommeSansFCFA } from "../../../page/Repositories/Repository";
export default {
  components: { ModelListSelect },
  data() {
    return {
      ajouterNatureDepense: {
        dotation: "",
        libelle: "",
        activite_id: "",
        decision: 0,
        observation: "",
      },
      DecisionApp: {
        decision: "",
        date_decision: "",
      },
      modNatureDepense: {
        dotation: "",
        libelle: "",
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
    this.getExerciceBudgetaire();
    this.getActivite();
    this.getDotationNotifie();
    this.getDotationReport();
    this.getInformationBudget();
  },
  computed: {
    ...mapGetters("parametrage", [
      "getterActivite",
      "getterDotationReport",
      "getterDotationNotifie",
      "getterExerciceBudgetaire",
      "getterInformationBudget",
    ]),
    AfficherBudgetGlobal() {
      return this.getterInformationBudget.filter((item) => item.statut == 5);
    },
    // afficher
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
    montantReport() {
      //   return (id) => {
      //     if (id != null && id != "") {
      const qtereel = this.getterDotationReport.find(
        (qtreel) =>
          qtreel.activite_id == this.ajouterNatureDepense.activite_id &&
          qtreel.exercice == this.exerciceBudgetaire - 1
      );

      if (qtereel) {
        return qtereel.dotation;
      }
      return 0;
      //     }
      //   };
    },
    montantReportMod() {
      //   return (id) => {
      //     if (id != null && id != "") {
      const qtereel = this.getterDotationReport.find(
        (qtreel) =>
          qtreel.activite_id == this.modNatureDepense.activite_id &&
          qtreel.exercice == this.exerciceBudgetaire - 1
      );

      if (qtereel) {
        return qtereel.dotation;
      }
      return 0;
      //     }
      //   };
    },

    montantNotifier() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.getterDotationNotifie.find(
            (qtreel) => qtreel.activite_id == id
          );

          if (qtereel) {
            return qtereel.dotation;
          }
          return 0;
        }
      };
    },
    AfficheMontantGlobal() {
      return (
        parseFloat(this.montantReport) +
        parseFloat(this.montantNotifier(this.ajouterNatureDepense.activite_id))
      );
    },
    AfficheMontantGlobalModi() {
      return (
        parseFloat(this.montantReportMod) +
        parseFloat(this.montantNotifier(this.modNatureDepense.activite_id))
      );
    },
  },
  methods: {
    ...mapActions("parametrage", [
      "getActivite",
      "VisaReamenagementBudgetEclate",
      "getDotationNotifie",
      "getDotationReport",
      "ajouterInformationBudget",
      "modifierInformationBudget",
      "supprimerInformationBudget",
      "getExerciceBudgetaire",
      "getInformationBudget",
    ]),
    fonctionImprimer(id) {
      this.$router.push({
        name: "ImprimerBordereau",
        params: { id: id },
      });
    },
    AfficheVentilationBudget(id) {
      this.$router.push({
        name: "AfficheOPAnnulation",
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
    AfficheModalModification(id) {
      this.modNatureDepense = this.AfficherBudgetGlobal.find(
        (items) => items.id == id
      );
    },
    ModalAppliqueDecision(id) {
      this.DecisionApp = this.AfficherBudgetGlobal.find(
        (items) => items.id == id
      );
    },
    EnregistrerSection() {
      var objetDirect1 = {
        exercice: this.exerciceBudgetaire,
        dotation: this.ajouterNatureDepense.dotation,
        libelle: this.ajouterNatureDepense.libelle,
        activite_id: this.ajouterNatureDepense.activite_id,
        decision: this.ajouterNatureDepense.decision,
        statut: 2,
        observation: this.ajouterNatureDepense.observation,
      };

      this.ajouterInformationBudget(objetDirect1);
      this.ajouterNatureDepense = {};
    },

    modificationSection() {
      var objetDirect1 = {
        id: this.modNatureDepense.id,
        activite_id: this.modNatureDepense.activite_id,
        exercice: this.exerciceBudgetaire,
        dotation: this.modNatureDepense.dotation,
        libelle: this.modNatureDepense.libelle,
        date_decision: this.modNatureDepense.date_decision,
        decision: this.modNatureDepense.decision,
        statut: 2,
        observation: this.modNatureDepense.observation,
      };

      this.modifierInformationBudget(objetDirect1);
      this.modNatureDepense = {};
    },

    AppliqueDecision() {
      var objetDirect1 = {
        id: this.DecisionApp.id,
        dotation: this.DecisionApp.dotation,
        date_decision: this.DecisionApp.date_decision,
        decision: this.DecisionApp.decision,
      };

      this.VisaReamenagementBudgetEclate(objetDirect1);
      this.DecisionApp = {};
    },
    formatageSommeSansFCFA: formatageSommeSansFCFA,
    formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },
  },
};
</script>
