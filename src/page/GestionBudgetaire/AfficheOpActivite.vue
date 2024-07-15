<template>
  <div class="container">
    <div class="col-md-12">
      <div class="card" style="box-shadow: 5px 5px  #f9d531;">
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
                <a href="#">Liste des OP Provisoire</a>
              </li>
            </ul>
          </div>
          <div class="d-flex align-items-center">
            <!-- <h4 class="card-title">Information du budget global</h4> -->

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
                  <td style="border: 1px solid #000">{{ item.numero_ordre_paiement }}</td>
                  <td style="border: 1px solid #000">{{ item.objet_depense }}</td>
                  <td style="border: 1px solid #000;text-align: right">{{ formatageSommeSansFCFA(parseFloat(item.montant_prestation)) }}</td>
                  <td style="border: 1px solid #000">{{ item.nature_economique }}</td>
                  <td style="border: 1px solid #000">{{ item.beneficiaire }}</td>
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
                  style="cursor: pointer;color:blue"
                  @click.prevent="AfficheModalModification(item.id)"
                  ></span
                >
                <span
                title="Supprimer"
                  class="fas fa-archive"
                  style="cursor: pointer;color:red"
                  @click.prevent="supprimerInformationBudget(item.id)"
                  ></span
                >
                <span
                title="Voir facture"
                  class="fas fa-eye"
                  style="cursor: pointer;color:#006D80"
                  @click.prevent="supprimerInformationBudget(item.id)"
                  ></span
                >
                <span
                title="Imprimer OP"
                  class="fas fa-print"
                  style="cursor: pointer;color:#77ABD6"
                  @click.prevent="fonctionImprimer(item.id)"
                  ></span
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
          this.dossier_id = this.$route.params.id;
    this.getListeOrdrePaiementParUtilisateur()
    // this.getExerciceBudgetaire();
    // this.getInformationBudget();
  },
  computed: {
    ...mapGetters("parametrage", [
      "getterActivite","getterListeOPParUser",
      "getterExerciceBudgetaire",
      "getterInformationBudget",
    ]),
      afficheListeOPprovisoire() {
        return this.getterListeOPParUser.filter(item=>item.activite_id==this.dossier_id)
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
      "getActivite","getListeOrdrePaiementParUtilisateur",
      "ajouterInformationBudget",
      "modifierInformationBudget",
      "supprimerInformationBudget",
      "getExerciceBudgetaire",
      "getInformationBudget",
    ]),
     fonctionImprimer(id) {
      this.$router.push({
        name: "ImprimerOp",
        params: { id: id },
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
  
formatageSommeSansFCFA: formatageSommeSansFCFA,
    formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },
  },
};
</script>
