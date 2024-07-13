<template>
  <div class="container">
    <div class="col-md-12">
      <div class="card" style="box-shadow: 5px 5px  #f9d531;">
        <div class="card-header">
          <div class="d-flex align-items-center">
            <h4 class="card-title">Information du budget global</h4>

            <span
              class="badge badge-primary"
              style="cursor: pointer"
              data-bs-toggle="modal"
              data-bs-target="#largeModal"
              >Ajouter</span
            >
          </div>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>Exercice</th>
                  <th>Libelle du budget</th>
                  <th>Dotation global budget</th>
                  <th>Décision</th>
                  <th>Date de visa</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in getterInformationBudget" :key="item.id">
                  <td style="border: 1px solid #000">{{ item.exercice }}</td>
                  <td style="border: 1px solid #000">{{ item.libelle }}</td>
                  <td style="border: 1px solid #000;text-align: right">{{ formatageSommeSansFCFA(parseFloat(item.dotation)) }}</td>
                  <td style="border: 1px solid #000">
                    <span v-if="item.decision==1"
                      class="badge badge-success"
                      style="cursor: pointer;text-align: center;"
                      
                      >{{ afficheDecision(item.decision) }}</span
                    >
                    <span v-if="item.decision==2"
                      class="badge badge-success"
                      style="cursor: pointer"
                      
                      >{{ afficheDecision(item.decision) }}</span
                    >
                     <span v-if="item.decision==3"
                      class="badge badge-warning"
                      style="cursor: pointer"
                      
                      >{{ afficheDecision(item.decision) }}</span
                    >
                     <span v-if="item.decision==4"
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
                      class="badge badge-black"
                      style="cursor: pointer"
                      @click.prevent="AfficheVentilationBudget(item.id)"
                      >Saisir budget</span
                    >
                     <span
                  class="badge rounded-pill bg-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#largeModal1"
                  style="cursor: pointer"
                  @click.prevent="AfficheModalModification(item.id)"
                  >Modifier</span
                >
                <span
                  class="badge bg-danger"
                  style="cursor: pointer"
                  @click.prevent="supprimerInformationBudget(item.id)"
                  >Supprimer</span
                >
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <!-- modal de modification -->

    <div class="modal fade" id="largeModal1" tabindex="-1">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Modifier budget global</h5>
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
                <label for="inputNanme4" class="form-label">Libelle du budget</label>
                <input
                  type="text"
                  class="form-control"
                  
                  style="border: 1px solid #000"
                  v-model="modNatureDepense.libelle"
                />
              </div>
              <div class="col-12">
                <label for="inputNanme4" class="form-label">Dotation global budget</label>
                <money3
                  v-model="modNatureDepense.dotation"
                  class="form-control"
                  
                  style=""
                ></money3>
                 <!-- <input
                        type="text"
                        class="form-control"
                       
                      v-model="modNatureDepense.dotation"
                        style="background-color: #dcdcdc; font-weight: bolder"
                      /> -->
              </div>
              <div class="col-12">
                <label for="inputNanme4" class="form-label">Décision</label>
                <select
                  class="form-select"
                  style="border: 1px solid #000"
                  v-model="modNatureDepense.decision"
                >
                  <option selected></option>
                  <option :value="1">Visé</option>
                  <option :value="2">Visé avec observation</option>
                  <!-- <option :value="3">Différé</option>
                  <option :value="4">Réjetté</option> -->
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
                  v-model="modNatureDepense.date_decision"
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
                  style="border: 1px solid #000 !important; background-color: #dcdcdc !important;color:#000 !important"
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
import {

  formatageSommeSansFCFA,
} from "../Repositories/Repository";
export default {
  components: {},
  data() {
    return {
      ajouterNatureDepense: {
        dotation: "",
        libelle: "",
      },
      modNatureDepense: {
        dotation: "",
          libelle: "",
          decision: "",
          date_decision:""
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
    this.getInformationBudget();
  },
  computed: {
    ...mapGetters("parametrage", [
      "getterActivite",
      "getterExerciceBudgetaire",
      "getterInformationBudget",
    ]),
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
      "ajouterInformationBudget",
      "modifierInformationBudget",
      "supprimerInformationBudget",
      "getExerciceBudgetaire",
      "getInformationBudget",
    ]),
     AfficheVentilationBudget(id) {
      this.$router.push({
        name: "VentilationBudget",
        params: { id: id },
      });
    },
      afficheDecision($id) {
          if ($id == 1) {
            return 'Visé'
          } else if ($id == 2) {
            return 'Visé avec observation'
          } else if ($id == 3) {
            return 'Différé'
          } else if ($id == 4) {
            return 'Réjetté'
          } else {
            return 'En attente'
        }
    },
    AfficheModalModification(id) {
      this.modNatureDepense = this.getterInformationBudget.find(
        (items) => items.id == id
      );
    },
    EnregistrerSection() {
      var objetDirect1 = {
        exercice: this.exerciceBudgetaire,
        dotation: this.ajouterNatureDepense.dotation,
        libelle: this.ajouterNatureDepense.libelle,
      };

      this.ajouterInformationBudget(objetDirect1);
      this.ajouterNatureDepense = {};
    },

    modificationSection() {
      var objetDirect1 = {
        id: this.modNatureDepense.id,
        exercice: this.exerciceBudgetaire,
        dotation: this.modNatureDepense.dotation,
          libelle: this.modNatureDepense.libelle,
          date_decision: this.modNatureDepense.date_decision,
        decision: this.modNatureDepense.decision,
      };

      this.modifierInformationBudget(objetDirect1);
      this.modNatureDepense = {};
    },
formatageSommeSansFCFA: formatageSommeSansFCFA,
    formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },
  },
};
</script>
