<template>
  <div class="container">
    <div class="col-md-12">
      <div class="card" style="box-shadow: 5px 5px #f9d531">
        <div class="card-header">
          <div class="page-header">
            <h6 class="fw-bold mb-3">Information du budget global</h6>
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
                <a href="#">budget global</a>
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
                  <th>Exercice</th>
                  <th>Libelle du budget</th>
                  <th>Dotation global budget</th>
                  <th>Décision</th>
                  <th>Date de visa</th>
                  <th>Fichier</th>
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
                  <td>
                        <a
                          title="Télécharger"
                          v-if="item.decision!=0"
                          :href="afficheicone(item.id)"
                          class="btn btn-default"
                          target="_blank"
                        >
                          <span class=""><i class="fas fa-book"></i></span>
                        </a>
                      </td>
                  <td style="border: 1px solid #000">
                    <span
                      class="badge badge-black"
                      style="cursor: pointer"
                      @click.prevent="AfficheVentilationBudget(item.id)"
                      >Saisir budget</span
                    >
                    <span
                      data-bs-toggle="modal"
                      data-bs-target="#largeModal12"
                      class="badge badge-secondary"
                      @click.prevent="AfficheModalModification(item.id)"
                      style="cursor: pointer"
                      >Décision CF</span
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

    <!-- modal de la decision -->
    <div class="modal fade" id="largeModal12" tabindex="-1">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Appliquer Décision</h5>
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
                  style="border: 1px solid #000 !important"
                  readonly
                />
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
                  v-model="modNatureDepense.date_decision"
                />
              </div>
              <!-- <div class="col-12">
                <label for="inputNanme4" class="form-label">libelle</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="formData.libelle"
                  style="border: 1px solid #000 !important"
                />
              </div>-->
              <div class="col-12">
  <label for="formFileLg" class="form-label">Joindre Budget Visé</label>
  <input class="form-control form-control-lg" id="formFileLg" type="file"  @change="OnchangeFichierDemandeAno" style="border: 1px solid #000">
</div>
              
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              @click.prevent="this.getInformationBudgetUser()"
            >
              Fermer
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click.prevent="appliqueDecision()"
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
                  >Libelle du budget</label
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
                  >Dotation global budget</label
                >
                <money3
                  :model-value="AfficheMontantGlobalModi"
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
              <!-- <div class="col-12">
                <label for="inputNanme4" class="form-label">Décision</label>
                <select
                  class="form-select"
                  style="border: 1px solid #000"
                  v-model="modNatureDepense.decision"
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
                  v-model="modNatureDepense.date_decision"
                />
              </div> -->
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              @click.prevent="this.getInformationBudgetUser()"
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
                  >Dotation global du projet</label
                >
                <money3
                  :model-value="AfficheMontantGlobal"
                  class="form-control"
                  v-bind="config"
                  style="border: 1px solid #000 !important"
                  readonly
                ></money3>
                <!-- <input
                  type="text"
                  class="form-control"
                  v-model="ajouterNatureDepense.dotation"
                  style="background-color: #dcdcdc; font-weight: bolder"
                /> -->
              </div>
              <span v-if="AfficheMontantGlobal==0" style="color:red">Dotation global du projet est 0</span>
              <span v-if="AfficheMontantGlobal < 0" style="color:red">Dotation global du projet est négatif</span>
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
import { formatageSommeSansFCFA } from "../../Repositories/Repository";
export default {
  components: { ModelListSelect },
  data() {
    return {
      ajouterNatureDepense: {
        dotation: "",
        libelle: "",
        activite_id: "",
        decision: 0,
      },
      modNatureDepense: {
        dotation: "",
        libelle: "",
        decision: "",
        date_decision: "",
      },
      fichierPDF: "",
      imagePDFDemandeAno: "",
      namePDFDemandeAno: "",
      fichierPDFDemandeAno: "",
      selectedFileDemandeAno: "",
      formData: {
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
    this.getInformationBudgetUser();
     this.getDocumentation();
  },
  computed: {
    ...mapGetters("parametrage", [
      "getterActivite",
      "getterDotationReport",
      "getterDotationNotifie",
      "getterExerciceBudgetaire",
      "getterBordereauParUser","gettersDocumentation"
    ]),
    afficheicone() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettersDocumentation.find(
            (qtreel) => qtreel.code == id
          );

          if (qtereel) {
            let url = process.env.VUE_APP_IMAGE_URL;
            return url + "/public/" + qtereel.fichier;
            //    return qtereel.fichier;
          }
          return "vide";
        }
      };
    },
    AfficherBudgetGlobal() {
      return this.getterBordereauParUser.filter((item) => item.statut == 0);
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
      "getActivite","getDocumentation",
      "getDotationNotifie",
      "getDotationReport",
      "ajouterInformationBudget",
      "modifierInformationBudget",
      "supprimerInformationBudget",
      "getExerciceBudgetaire",
      "getInformationBudgetUser",
      "ajouterFichier",
    ]),
    OnchangeFichierDemandeAno(e) {
      const files = e.target.files;
      this.selectedFileDemandeAno = event.target.files[0];
      console.log(this.selectedFileDemandeAno);
      Array.from(files).forEach((file) => this.addFichierPDFDemandeAno(file));
    },
    addFichierPDFDemandeAno(file) {
      let reader = new FileReader();
      let vm = this;
      reader.onload = (e) => {
        vm.imagePDFDemandeAno = "pdf.png";
        vm.namePDFDemandeAno = file.name;
        // recupère l extension du fichier
        vm.fichierPDF = vm.namePDFDemandeAno.slice(
          (Math.max(0, vm.namePDFDemandeAno.lastIndexOf(".")) || Infinity) + 1
        );

        vm.fichierPDFDemandeAno = e.target.result;
      };
      reader.readAsDataURL(file);
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
    AfficheModalModification(id) {
      this.modNatureDepense = this.getterBordereauParUser.find(
        (items) => items.id == id
      );
    },
    EnregistrerSection() {
      var objetDirect1 = {
        exercice: this.exerciceBudgetaire,
        dotation: this.AfficheMontantGlobal,
        libelle: this.ajouterNatureDepense.libelle,
        activite_id: this.ajouterNatureDepense.activite_id,
        decision: this.ajouterNatureDepense.decision,
        statut: 0,
      };

      this.ajouterInformationBudget(objetDirect1);

      // this.ajouterNatureDepense = {};
    },

    modificationSection() {
      var objetDirect1 = {
        id: this.modNatureDepense.id,
        activite_id: this.modNatureDepense.activite_id,
        exercice: this.exerciceBudgetaire,
        dotation: this.AfficheMontantGlobalModi,
        libelle: this.modNatureDepense.libelle,
        date_decision: this.modNatureDepense.date_decision,
        decision: this.modNatureDepense.decision,
        statut: 0,
      };
   
    this.modifierInformationBudget(objetDirect1);
     
      this.modNatureDepense = {};
    },

      appliqueDecision() {
      var objetDirect1 = {
         id: this.modNatureDepense.id,
        activite_id: this.modNatureDepense.activite_id,
        exercice: this.exerciceBudgetaire,
        dotation: this.AfficheMontantGlobalModi,
        libelle: this.modNatureDepense.libelle,
        date_decision: this.modNatureDepense.date_decision,
        decision: this.modNatureDepense.decision,
        statut: 0,
      };
       const formData = new FormData();

       formData.append("code", this.modNatureDepense.id);
      formData.append(
        "fichier",
        this.selectedFileDemandeAno,
        this.selectedFileDemandeAno.name
      );

      let config = {
        header: {
          "Content-Type": "multipart/form-data",
        },
      };
      this.modifierInformationBudget(objetDirect1);
        this.ajouterFichier(formData, config);
     
      this.modNatureDepense = {};
    },
    formatageSommeSansFCFA: formatageSommeSansFCFA,
    formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },
  },
};
</script>
