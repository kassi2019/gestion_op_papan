<template>
  <div class="container">
    <div class="col-md-12">
      <div class="card" style="box-shadow: 5px 5px  #f9d531;">
        <div class="card-header">
            <div class="page-header">
						<h6 class="fw-bold mb-3">Liste des Budgets Notifiés</h6>
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
								<a href="#">Budget Notifié</a>
							</li>
						</ul>
					</div>
          <div class="d-flex align-items-center">
            <!-- <h4 class="card-title">Liste Budget notifié</h4> -->

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
                  <!-- <th scope="col">#</th> -->
                  <!-- <th scope="col">N</th> -->
                  <th scope="col" style="text-align: center">Exercice</th>
                  <th scope="col" style="text-align: center">Activité</th>
                  <th scope="col" style="text-align: center">
                    Dotation (FCFA)
                  </th>
                  <th scope="col" style="text-align: center">Action</th>
                </tr>
              </thead>
              <tbody>
                <!-- <tr v-for="item1 in getterDotationNotifie" :key="item1.id">
                  <td style="width: 10%">{{ item1.exercice }}</td>
                  <td style="width: 55%">
                    {{ libelleActiviteTableau(item1.activite_id) }}
                  </td>
                  <td style="width: 15%; text-align: right">
                    {{ formatageSommeSansFCFA(parseFloat(item1.dotation)) }}
                  </td>
                  <td>
                    <span
                      class="badge rounded-pill bg-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#largeModal1"
                      style="cursor: pointer"
                      @click.prevent="AfficheModalModification(item1.id)"
                      >Modifier</span
                    >
                    <span
                      class="badge bg-danger"
                      style="cursor: pointer"
                      @click.prevent="supprimerDotationNotifie(item1.id)"
                      >Supprimer</span
                    >
                  </td>
                </tr> -->
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <!-- modal de modification -->

    <!-- modal de modification -->

    
  
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import moment from "moment";
// import { ModelListSelect } from "vue-search-select";
import {
  formatageSomme,
  formatageSommeSansFCFA,
} from "../../Repositories/Repository";
export default {
//   components: { ModelListSelect },
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
     this.getActivite();
      this.getExerciceBudgetaire();
    //  // this.getGroupeActivitebudgetNotifie()
      this.getDotationNotifie();
  },
  computed: {
    ...mapGetters("parametrage", [
      "getterActivite",
      "getterExerciceBudgetaire",
      "getterDotationNotifie",
      "getterGrpeActiviteBudgetNotifie",
    ]),
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
      "getActivite",
      "getExerciceBudgetaire",
      "getDotationNotifie",
      "ajouterDotationNotifie",
      "modifierDotationNotifie",
      "supprimerDotationNotifie",
      "getGroupeActivitebudgetNotifie",
    ]),

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
