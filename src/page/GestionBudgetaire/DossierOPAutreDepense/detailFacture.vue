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
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <li class="nav-item">
                <span
                  class="badge badge-warning"
                  style="cursor: pointer; color: #000"
                  @click.prevent="pagePrecedent"
                  ><i class="fas fa-arrow-alt-circle-left"></i> Retour</span
                >
              </li>
             &nbsp;&nbsp;&nbsp;

              <li class="nav-item">
                <span
                  class="badge badge-warning"
                  style="cursor: pointer; color: #000"
                  @click.prevent="Actualiser"
                  ><i class="fas fa-arrow-alt-circle-left"></i> Actualiser</span
                >
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
                    {{ formaterDate(item.date_facture) }}
                  </td>
                  <td>
                    {{ item.designation }}
                  </td>
                  <td>
                    {{ item.quantite }}
                  </td>
                  <td style="text-align: right">
                    {{ formatageSommeSansFCFA(parseFloat(item.prix_unitaire)) }}
                  </td>
                  <td style="text-align: right">
                    {{ formatageSommeSansFCFA(parseFloat(item.montant_ht)) }}
                  </td>
                  <td style="text-align: right">
                    {{ formatageSommeSansFCFA(parseFloat(item.montant_tva)) }}
                  </td>
                  <td style="text-align: right">
                    {{ formatageSommeSansFCFA(parseFloat(item.autre_montant)) }}
                  </td>
                  <td style="text-align: right">
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
                  <td colspan="4" style="text-align: center">TOTAL</td>
                  <td style="text-align: right">
                    {{ formatageSommeSansFCFA(parseFloat(totalPrixUnitaire)) }}
                  </td>
                  <td style="text-align: right">
                    {{ formatageSommeSansFCFA(parseFloat(totalmontant_ht)) }}
                  </td>
                  <td style="text-align: right">
                    {{ formatageSommeSansFCFA(parseFloat(totalmontant_tva)) }}
                  </td>
                  <td style="text-align: right">
                    {{ formatageSommeSansFCFA(parseFloat(totalautre_montant)) }}
                  </td>
                  <td style="text-align: right">
                    {{ formatageSommeSansFCFA(parseFloat(totalmontant_ttc)) }}
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

    <div
      class="modal fade"
      id="largeModal1"
      tabindex="-1"
      data-bs-backdrop="static"
      aria-labelledby="staticBackdropLabel"
    >
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              Modifier Facture{{ this.modFacture.ordre_paiement_id }}
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-lg-12">
                <form class="row g-3">
                  <div class="col-6">
                    <label class="form-label">N°Facture</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="modFacture.numero_facture"
                      style="border: 1px solid #000 !important"
                    />
                  </div>
                  <div class="col-6">
                    <label class="form-label">Date Facture</label>
                    <input
                      type="date"
                      class="form-control"
                      v-model="modFacture.date_facture"
                      style="border: 1px solid #000 !important"
                    />
                  </div>
                  <div class="col-12">
                    <label class="form-label">Désignation</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="modFacture.designation"
                      style="border: 1px solid #000 !important"
                    />
                  </div>
                  <div class="col-4">
                    <label class="form-label">Quantité ( A )</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="modFacture.quantite"
                      style="border: 1px solid #000 !important"
                    />
                  </div>
                  <div class="col-4">
                    <label class="form-label">Prix Unitaire ( B )</label>
                    <money3
                      class="form-control"
                      v-model="modFacture.prix_unitaire"
                      style="border: 1px solid #000 !important"
                    ></money3>
                  </div>
                  <div class="col-4">
                    <label class="form-label">Montant HT (C = A * B)</label>
                    <money3
                      class="form-control"
                      :model-value="AfficheMontantHT"
                      style="
                        border: 1px solid #000 !important;
                        color: #000 !important;
                      "
                      readonly
                    ></money3>
                  </div>
                  <div class="col-3">
                    <label class="form-label"
                      >Exonéré de la TVA {{ AfficheTauxTVA }}% ?</label
                    >
                    <select
                      class="form-select form-control"
                      id="defaultSelect"
                      style="border: 1px solid #000 !important"
                      v-model="modFacture.exonere"
                    >
                      <option></option>
                      <option value="0">Oui</option>
                      <option value="1">Non</option>
                    </select>
                  </div>
                  <div class="col-3">
                    <label class="form-label">Type de Forfait</label>
                    <select
                      class="form-select form-control"
                      id="defaultSelect"
                      style="border: 1px solid #000 !important"
                      v-model="modFacture.type_forfait"
                    >
                      <option value=""></option>
                      <option value="taux">Taux</option>
                      <option value="montant">Montant</option>
                    </select>
                  </div>
                  <div class="col-3">
                    <label class="form-label"
                      >Autre {{ modFacture.type_forfait }}
                      <span v-if="modFacture.type_forfait == 'taux'">%</span>
                      ( D )</label
                    >
                    <money3
                      class="form-control"
                      style="
                        border: 1px solid #000 !important;
                        color: #000 !important;
                      "
                      v-model="modFacture.autre_taux"
                    ></money3>
                  </div>
                  <div class="col-3">
                    <label class="form-label">Taux TVA (%) ( F )</label>
                    <input
                      type="text"
                      class="form-control"
                      :value="AfficheTauxTVA"
                      readonly
                      style="
                        border: 1px solid #000 !important;
                        color: #000 !important;
                      "
                    />
                  </div>
                  <div class="col-4">
                    <label class="form-label">Montant TVA ( G = C * F)</label>
                    <money3
                      class="form-control"
                      :model-value="montantTva"
                      style="border: 1px solid #000 !important"
                    ></money3>
                  </div>
                  <div class="col-3">
                    <label
                      class="form-label"
                      v-if="modFacture.type_forfait == 'taux'"
                      >Cumul des autres taxes ( E = C * D)
                    </label>
                    <label
                      class="form-label"
                      v-else-if="modFacture.type_forfait == 'montant'"
                      >Cumul des autres taxes ( E = C + D)
                    </label>
                    <label class="form-label" v-else
                      >Cumul des autres taxes ( E )
                    </label>
                    <money3
                      class="form-control"
                      style="
                        border: 1px solid #000 !important;
                        color: #000 !important;
                      "
                      :model-value="afficheAutreMontant"
                      readonly
                    ></money3>
                  </div>
                  <div class="col-4">
                    <label class="form-label"
                      >Montant TTC ( H = E + G + C )</label
                    >
                    <money3
                      class="form-control"
                      :model-value="MontantTTC"
                      style="
                        border: 1px solid #000 !important;
                        color: #000 !important;
                      "
                      readonly
                    ></money3>
                  </div>
                </form>
              </div>
            </div>
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
              @click.prevent="modificationFacture()"
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
      modFacture: {},
    };
  },
  created() {
    this.ordrePaiement_id = this.$route.params.id;
    let objet = {
      id: this.ordrePaiement_id,
    };

    this.getFactureParOP(objet);
    this.getTaux();
  },
  computed: {
    ...mapGetters("parametrage", ["getterstateFactureParOp", "getterTaux"]),
    MontantTTC() {
      return (
        parseFloat(this.afficheAutreMontant) +
        parseFloat(this.montantTva) +
        parseFloat(this.AfficheMontantHT)
      );
    },
    montantTva() {
      const val = parseFloat(
        (parseFloat(this.AfficheMontantHT) * parseFloat(this.AfficheTauxTVA)) /
          100
      );

      if (val) {
        return parseFloat(val).toFixed(2);
      }

      return 0;
    },
    afficheAutreMontant() {
      if (this.modFacture.type_forfait == "taux") {
        return (
          (parseFloat(this.modFacture.autre_taux) / 100) *
          parseFloat(this.AfficheMontantHT)
        );
      } else if (this.modFacture.type_forfait == "montant") {
        return (
          parseFloat(this.AfficheMontantHT) +
          parseFloat(this.modFacture.autre_taux)
        );
      } else {
        return 0;
      }
    },
    AfficheTauxTVA() {
      if (this.modFacture.exonere == 1) {
        const qtereel = this.getterTaux.find((qtreel) => qtreel.encours == 1);

        if (qtereel) {
          return qtereel.taux;
        }
        return 0;
        //   }
        // };
      } else {
        return 0;
      }
    },
    AfficheMontantHT() {
      return (
        parseFloat(this.modFacture.quantite) *
        parseFloat(this.modFacture.prix_unitaire)
      );
    },
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
        .reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.montant_ht), 0)
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
    ...mapActions("parametrage", [
      "getFactureParOP",
      "getTaux",
      "supprimerFacture",
      "modifierFacture",
    ]),
    modificationFacture() {
      var objetDirect1 = {
        id: this.modFacture.id,
        numero_facture: this.modFacture.numero_facture,
        date_facture: this.modFacture.date_facture,
        designation: this.modFacture.designation,
        quantite: this.modFacture.quantite,
        prix_unitaire: this.modFacture.prix_unitaire,
        montant_ht: this.AfficheMontantHT,
        montant_ttc: this.MontantTTC,
        exonere: this.modFacture.exonere,
        montant_tva: this.montantTva,
        exercice: this.modFacture.exercice,
        ordre_paiement_id: this.modFacture.ordre_paiement_id,
        autre_taux:
          (parseFloat(this.modFacture.autre_taux) / 100) *
          parseFloat(this.AfficheMontantHT),
        autre_montant:
          parseFloat(this.AfficheMontantHT) +
          parseFloat(this.modFacture.autre_taux),
      };

      this.modifierFacture(objetDirect1);

      this.modFacture = {};
    },
    Actualiser() {
      let objet = {
        id: this.ordrePaiement_id,
      };
      this.getFactureParOP(objet);
    },
    pagePrecedent() {
      window.history.back();
    },
    AfficheModalModification(id) {
      this.modFacture = this.getterstateFactureParOp.find(
        (items) => items.id == id
      );
    },
    formatageSommeSansFCFA: formatageSommeSansFCFA,
    formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },
  },
};
</script>
