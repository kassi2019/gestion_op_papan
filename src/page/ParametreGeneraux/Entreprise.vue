<template>
  <div class="container">
    <div class="col-md-12">
      <div class="card" style="box-shadow: 5px 5px #f9d531">
        <div class="card-header">
          <div class="page-header">
            <h6 class="fw-bold mb-3">Liste Entreprise</h6>
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
                <a href="#">Paramétre généraux</a>
              </li>
              <li class="separator">
                <i class="icon-arrow-right"></i>
              </li>
              <li class="nav-item">
                <a href="#">Entréprise</a>
              </li>
            </ul>
          </div>
          <div class="d-flex align-items-center">
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
                  <th scope="col"  style="width: 15%">Numéro CC</th>
                  <th scope="col" style="width: 45%">Raison sociale</th>
                  <th scope="col" style="width: 10%">Téléphone</th>
                   <th scope="col" style="width: 10%">Adresse</th>
                  <th  style="width: 18%"></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in getterEntreprise" :key="item.id">
                  <td>{{ item.numero_cc }}</td>
                  <td>{{ item.raison_sociale }}</td>
                  <td>{{ item.telephone }}</td>
                  <td>{{ item.adresse }}</td>
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
                      @click.prevent="supprimerEntreprise(item.id)"
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

    <!-- modal de modification -->

    <div class="modal fade" id="largeModal1" tabindex="-1">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Modifier Nature de Dépense</h5>
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
                <label for="inputNanme4" class="form-label">Numéro CC</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputNanme4"
                  style="border: 1px solid #000"
                  v-model="modNatureDepense.numero_cc"
                />
              </div>
              <div class="col-12">
                <label for="inputNanme4" class="form-label"
                  >Raison Sociale</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="inputNanme4"
                  style="border: 1px solid #000"
                  v-model="modNatureDepense.raison_sociale"
                />
              </div>
              <div class="col-12">
                <label for="inputNanme4" class="form-label"
                  >Numéro télephone</label
                >
                <input
                  type="number"
                  class="form-control"
                  id="inputNanme4"
                  style="border: 1px solid #000"
                  v-model="modNatureDepense.telephone"
                />
              </div>
              <div class="col-12">
                <label for="inputNanme4" class="form-label"
                  >Adresse</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="inputNanme4"
                  style="border: 1px solid #000"
                  v-model="modNatureDepense.adresse"
                />
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              @click.prevent="this.getEntreprise()"
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
            <h5 class="modal-title">Ajouter Entreprise</h5>
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
                <label for="inputNanme4" class="form-label">Numéro CC</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputNanme4"
                  style="border: 1px solid #000"
                  v-model="ajouterNatureDepense.numero_cc"
                />
              </div>
              <div class="col-12">
                <label for="inputNanme4" class="form-label"
                  >Raison Sociale</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="inputNanme4"
                  style="border: 1px solid #000"
                  v-model="ajouterNatureDepense.raison_sociale"
                />
              </div>
              <div class="col-12">
                <label for="inputNanme4" class="form-label"
                  >Numéro télephone</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="inputNanme4"
                  style="border: 1px solid #000"
                  v-model="ajouterNatureDepense.telephone"
                />
              </div>
               <div class="col-12">
                <label for="inputNanme4" class="form-label"
                  >Adresse</label
                >
                <input
                  type="number"
                  class="form-control"
                  id="inputNanme4"
                  style="border: 1px solid #000"
                  v-model="modNatureDepense.adresse"
                />
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
export default {
  name: "TheDefault",
  components: {},
  data() {
    return {
      ajouterNatureDepense: {
        numero_cc: "",
        raison_sociale: "",
            telephone: "",
        adresse:""
      },
      modNatureDepense: {
        numero_cc: "",
        raison_sociale: "",
          telephone: "",
        adresse:""
      },
    };
  },
  created() {
    this.getEntreprise();
  },
  computed: {
    ...mapGetters("parametrage", ["getterEntreprise"]),
  },
  methods: {
    ...mapActions("parametrage", [
      "getEntreprise",
      "ajouterEntreprise",
      "modifierEntreprise",
      "supprimerEntreprise",
    ]),
    AfficheModalModification(id) {
      this.modNatureDepense = this.getterEntreprise.find(
        (items) => items.id == id
      );
    },
    EnregistrerSection() {
      var objetDirect1 = {
        numero_cc: this.ajouterNatureDepense.numero_cc,
        raison_sociale: this.ajouterNatureDepense.raison_sociale,
          telephone: this.ajouterNatureDepense.telephone,
        adresse:this.ajouterNatureDepense.adresse
      };

      this.ajouterEntreprise(objetDirect1);
      this.ajouterNatureDepense = {
        numero_cc: "",
        raison_sociale: "",
          telephone: "",
        adresse:""
      };
    },

    modificationSection() {
      var objetDirect1 = {
        id: this.modNatureDepense.id,
        numero_cc: this.modNatureDepense.numero_cc,
        raison_sociale: this.modNatureDepense.raison_sociale,
          telephone: this.modNatureDepense.telephone,
        adresse:this.modNatureDepense.adresse
      };

      this.modifierEntreprise(objetDirect1);
      this.modNatureDepense = {};
    },

    formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },
  },
};
</script>
