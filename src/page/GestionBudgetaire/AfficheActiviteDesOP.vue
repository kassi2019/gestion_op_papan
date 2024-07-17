<template>
  <div class="container">
    <div class="col-md-12">
      <div class="card" style="box-shadow: 5px 5px  #f9d531;">
        <div class="card-header">
            <div class="page-header">
						<h6 class="fw-bold mb-3">Liste des Activités</h6>
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
								<a href="#">Activite des OP</a>
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
                          >Voir Ordre paiement</span
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

    <!-- modal de modification -->

    <div class="modal fade" id="largeModal1" tabindex="-1">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Modifier Buddget notifié</h5>
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
                  id="inputNanme4"
                  :value="exerciceBudgetaire"
                  style="border: 1px solid #000; background-color: #dcdcdc"
                  readonly
                />
              </div>
              <div class="col-12">
                <label class="form-label">Activité</label>
                <model-list-select
                  :list="libelleActivite"
                  v-model="modNatureDepense.activite_id"
                  option-value="id"
                  option-text="libelle"
                  placeholder="select item"
                  style="border: 1px solid #000"
                >
                </model-list-select>
              </div>
              <div class="col-12">
                <label for="inputNanme4" class="form-label">Dotation</label>

                <money3
                  v-bind="config"
                  v-model="modNatureDepense.dotation"
                  class="form-control"
                  id="inputNanme4"
                  style="border: 1px solid #000"
                ></money3>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              @click.prevent="this.getDotationNotifie()"
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
            <h5 class="modal-title">Ajouter Budget notifié</h5>
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
                  id="inputNanme4"
                  :value="exerciceBudgetaire"
                  style="border: 1px solid #000; background-color: #dcdcdc"
                  readonly
                />
              </div>
              <div class="col-12">
                <label class="form-label">Activité</label>
                <model-list-select
                  :list="libelleActivite"
                  v-model="ajouterNatureDepense.activite_id"
                  option-value="id"
                  option-text="libelle"
                  placeholder="select item"
                  style="border: 1px solid #000"
                >
                </model-list-select>
              </div>
              <div class="col-12">
                <label for="inputNanme4" class="form-label">Dotation</label>
                <money3
                  v-model="ajouterNatureDepense.dotation"
                  class="form-control"
                  id="inputNanme4"
                  style="border: 1px solid #000"
                  v-bind="config"
                ></money3>
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
import {
  formatageSomme,
  formatageSommeSansFCFA,
} from "../Repositories/Repository";
export default {
  components: { ModelListSelect },
  data() {
    return {
      ajouterNatureDepense: {
        activite_id: "",
        dotation: "",
      },
      modNatureDepense: {
        activite_id: "",
        dotation: "",
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
    this.getActiviteGlobal()
    //   this.getActivite();
    //   this.getExerciceBudgetaire();
    //  // this.getGroupeActivitebudgetNotifie()
    //   this.getDotationNotifie();
  },
  computed: {
    ...mapGetters("parametrage", [
      "getterActivite",
      "getterExerciceBudgetaire",
      "getterDotationNotifie",
      "getterGrpeActiviteBudgetNotifie","getterActiviteglobal"
    ]),
    afficheLibelleActivite() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.getterActiviteglobal.find(
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

        let objet = this.getterActiviteglobal;
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
    libelleActiviteTableau() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.getterActivite.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.code.concat(" - ", qtereel.libelle);
          }
          return 0;
        }
      };
    },
    listeBudgetNotifie() {
      return (id) => {
        if (id != null && id != "") {
          return this.getterDotationNotifie.filter(
            (qtreel) => qtreel.activite_id == id
          );
        }
      };
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
      "getActivite","getActiviteOp","getActiviteGlobal",
      "getExerciceBudgetaire",
      "getDotationNotifie",
      "ajouterDotationNotifie",
      "modifierDotationNotifie",
      "supprimerDotationNotifie",
      "getGroupeActivitebudgetNotifie",
    ]),
 AfficheVentilationBudget(id) {
      this.$router.push({
        name: "listeToutOP",
        params: { id: id },
      });
    },
    AfficheModalModification(id) {
      this.modNatureDepense = this.getterDotationNotifie.find(
        (items) => items.id == id
      );
    },
    EnregistrerSection() {
      var objetDirect1 = {
        activite_id: this.ajouterNatureDepense.activite_id,
        dotation: this.ajouterNatureDepense.dotation,
        exercice: this.exerciceBudgetaire,
      };

      this.ajouterDotationNotifie(objetDirect1);
      this.ajouterNatureDepense = {
        activite_id: "",
        dotation: "",
      };
    },

    modificationSection() {
      var objetDirect1 = {
        id: this.modNatureDepense.id,

        activite_id: this.modNatureDepense.activite_id,
        dotation: this.modNatureDepense.dotation,
        exercice: this.exerciceBudgetaire,
      };

      this.modifierDotationNotifie(objetDirect1);
      this.modNatureDepense = {};
    },
    formatageSomme: formatageSomme,
    formatageSommeSansFCFA: formatageSommeSansFCFA,
    formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },
  },
};
</script>
