<template>
  <div class="container">
  
    <div class="col-md-12">
      <div class="card" style="box-shadow: 5px 5px #f9d531">
        <div class="card-header">
          <!-- <div class="page-inner"> -->
          <div class="page-header">
            <h6 class="fw-bold mb-3">Détail facture</h6>
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
                <a href="#">facture</a>
              </li>
            </ul>
          </div>
          <!-- </div> -->
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <!-- <th scope="col">#</th> -->
                  <th scope="col" style="text-align: center">N°FACTURE</th>
                  <th scope="col" style="width: 30%; text-align: center">
                    Date facture
                  </th>
                  <th scope="col" style="width: 30%; text-align: center">
                    Designation
                  </th>
                  <th scope="col" style="width: 30%; text-align: center">
                    Quantité
                  </th>
                  <th scope="col" style="width: 30%; text-align: center">
                    Prix Unitaire
                  </th>
                  <th scope="col" style="width: 30%; text-align: center">
                    Montant HT
                  </th>
                  <th scope="col" style="width: 30%; text-align: center">
                    Montant TVA
                  </th>
                  <th scope="col" style="width: 30%; text-align: center">
                    Autre Montant
                  </th>
                  <th scope="col" style="width: 30%; text-align: center">
                    Montant TTC
                  </th>

                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="item in getterstateFactureParOp"
                  :key="item.id"
                  style="text-align: center"
                >
                  <td>
                    {{ item.numero_facture }}
                  </td>
                  <td>
                    {{formaterDate(item.date_facture)  }}
                  </td>
                  <td>
                    {{ item.designation }}
                  </td>
                  <td>
                    {{ item.quantite }}
                  </td>
                  <td style="text-align: right;">
                    {{formatageSommeSansFCFA(parseFloat(item.prix_unitaire))  }}
                  </td>
                  <td style="text-align: right;">
                    {{ formatageSommeSansFCFA(parseFloat(item.montant_ht)) }}
                  </td>
                  <td style="text-align: right;">
                    {{ formatageSommeSansFCFA(parseFloat(item.montant_tva)) }}
                  </td>
                  <td style="text-align: right;">
                    {{ formatageSommeSansFCFA(parseFloat(item.autre_montant)) }}
                  </td>
                  <td style="text-align: right;">
                    {{ formatageSommeSansFCFA(parseFloat(item.montant_ttc)) }}
                  </td>
                  <td>
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
                      @click.prevent="supprimerFacture(item.id)"
                      >Supprimer</span
                    >
                  </td>
                </tr>
                <tr>
                    <td colspan="4" style="text-align: center;">TOTAL</td>
                    <td style="text-align: right;">{{formatageSommeSansFCFA(parseFloat(totalPrixUnitaire))}}</td>
                    <td style="text-align: right;">{{formatageSommeSansFCFA(parseFloat(totalmontant_ht))}}</td>
                    <td style="text-align: right;">{{formatageSommeSansFCFA(parseFloat(totalmontant_tva))}}</td>
                    <td style="text-align: right;">{{formatageSommeSansFCFA(parseFloat(totalautre_montant))}}</td>
                    <td style="text-align: right;">{{formatageSommeSansFCFA(parseFloat(totalmontant_ttc))}}</td>

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
            <h5 class="modal-title">Modifier Exercice budgétaire</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form>ddddddddddddddddddddddddddd</form>
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
              @click.prevent="modificationTaux()"
              data-bs-dismiss="modal"
            >
              Modifier
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
import { formatageSommeSansFCFA } from "../../Repositories/Repository";
export default {
  name: "App",
  components: {},
  data() {
    return {
      ajouterExercice: {
        taux: 0,
      },
      modifierExercice: {
        taux: "",
      },
    };
  },
  created() {
    this.ordrePaiement_id = this.$route.params.id;
    let objet = {
      id: this.ordrePaiement_id,
    };

    this.getFactureParOP(objet);
  },
  computed: {
      ...mapGetters("parametrage", ["getterstateFactureParOp"]),
    totalPrixUnitaire() {
      return this.getterstateFactureParOp
        .reduce(
          (prec, cur) => parseFloat(prec) + parseFloat(cur.prix_unitaire),
          0
        )
        .toFixed(0);
      },
    totalmontant_ht() {
      return this.getterstateFactureParOp
        .reduce(
          (prec, cur) => parseFloat(prec) + parseFloat(cur.montant_ht),
          0
        )
        .toFixed(0);
      },
    totalmontant_ttc() {
      return this.getterstateFactureParOp
        .reduce(
          (prec, cur) => parseFloat(prec) + parseFloat(cur.montant_ttc),
          0
        )
        .toFixed(0);
      },
     totalmontant_tva() {
      return this.getterstateFactureParOp
        .reduce(
          (prec, cur) => parseFloat(prec) + parseFloat(cur.montant_tva),
          0
        )
        .toFixed(0);
      },
    totalautre_montant() {
      return this.getterstateFactureParOp
        .reduce(
          (prec, cur) => parseFloat(prec) + parseFloat(cur.autre_montant),
          0
        )
        .toFixed(0);
    },
  },
  methods: {
    ...mapActions("parametrage", ["getFactureParOP",'supprimerFacture']),
    AfficheModalModification(id) {
      this.modifierExercice = this.getterstateFactureParOp.find((items) => items.id == id);
    },
formatageSommeSansFCFA: formatageSommeSansFCFA,
    formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },
  },
};
</script>
