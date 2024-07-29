<template>
  <div class="container">
    <div class="col-md-12">
      <div class="card" style="box-shadow: 5px 5px  #f9d531;">
        <div class="card-header">
            <div class="page-header">
						<h6 class="fw-bold mb-3">Liste Sous budget</h6>
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
								<a href="#">Info sur budget par Sous budget</a>
							</li>
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             
              <li>
                <span
                  class="badge badge-warning"
                  style="cursor: pointer; color: #000"
                  @click.prevent="retour()"
                  ><i class="fas fa-arrow-alt-circle-left"></i> Retour</span
                >
              </li>
						</ul>
					</div>
          <div class="d-flex align-items-center">
            <!-- <h4 class="card-title">Liste Sous budget</h4> -->
             
          </div>
        </div>
        <div class="card-body">
         <table class="table table-bordered border-primary">
        <thead>
          <tr>
            <!-- <th scope="col">#</th> -->
            <!-- <th scope="col">N</th> -->
            <th scope="col" style="text-align: center">Numéro</th>
            <th scope="col" style="text-align: center">Sous Budget</th>
            <th scope="col" style="text-align: center">Dotation (FCFA)</th>
            <th scope="col" style="text-align: center">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item1, index) in afficheSousBudgetParActivite"
            :key="item1.id"
          >
            <td style="width: 10%">{{ index + 1 }}</td>
            <td style="width: 60%">{{ item1.libelle }}</td>
            <td style="text-align: right">
              {{
                formatageSommeSansFCFA(
                  parseFloat(AfficheMontantBudget(item1.id))
                )
              }}
            </td>
            <td>
              <span class="badge bg-dark" style="cursor: pointer"   @click.prevent="voirBudgett(item1.id,dossier_id)">Budget</span>
            </td>
            <!-- <td style="width: 15%; text-align: right">
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
            </td> -->
          </tr>
        </tbody>
      </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import moment from "moment";
import {
  formatageSomme,
  formatageSommeSansFCFA,
} from "../../Repositories/Repository";
export default {
  components: {},
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
    this.dossier_id = this.$route.params.id;
    //   this.dossier_id1 = this.$route.params.id1;
     let objet = {
      id: this.dossier_id,
    };
    this.getBudgetViseParActvite(objet);
    this.getSousBudget();
    
    //   this.getActivite();
    //   this.getExerciceBudgetaire();
    //  // this.getGroupeActivitebudgetNotifie()
    //   this.getDotationNotifie();
  },
  computed: {
    ...mapGetters("parametrage", [
      "getterActivite",
      "getterSousBudget",
      "getterBudgetViseParActivite",
      "getterExerciceBudgetaire",
      "getterDotationNotifie",
      "getterGrpeActiviteBudgetNotifie","getterBudgetViseParActivite"
    ]),
    afficheSousBudgetParActivite() {
      return this.getterSousBudget.filter(
        (item) => item.activite_id == this.dossier_id
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
      "getSousBudget",
      "getActivite",
      "getExerciceBudgetaire",
      "getDotationNotifie",
      "ajouterDotationNotifie",
      "modifierDotationNotifie",
      "supprimerDotationNotifie",
      "getGroupeActivitebudgetNotifie",
      "getBudgetEclate","getBudgetViseParActvite"
    ]),
     voirBudgett(id,id1) {
      this.$router.push({
        name: "BudgetComposanteVise",
        params: { id: id ,id1: id1},
      });
    },
    // Retour() {
    //   this.$router.push({ name: "VentilationBudget" });
    // },
  retour() {
      this.$router.push({
        name: "PresentationBudgetVise"
      });
    },
    AfficheMontantBudget($id) {
      return this.getterBudgetViseParActivite
        .filter((item) => item.sous_budget_id == $id)
        .reduce(
          (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation_total),
          0
        )
        .toFixed(0);
    },
    formatageSomme: formatageSomme,
    formatageSommeSansFCFA: formatageSommeSansFCFA,
    formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },
  },
};
</script>
