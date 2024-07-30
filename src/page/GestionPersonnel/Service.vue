<template>
  <div class="container">
    <div class="col-md-12">
      <div class="card" style="box-shadow: 5px 5px #f9d531">
        <div class="card-header">
          <div class="page-header">
            <h6 class="fw-bold mb-3">Liste Service</h6>
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
                <a href="#">Personnel</a>
              </li>
              <li class="separator">
                <i class="icon-arrow-right"></i>
              </li>
              <li class="nav-item">
                <a href="#">Service</a>
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
                  <th scope="col">N°</th>

                  <th scope="col" style="width: 75%">Libelle</th>

                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in gettersService" :key="item.id">
                  <td>{{ index + 1 }}</td>
                  <td>{{ item.libelle }}</td>

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
                      @click.prevent="supprimerService(item.id)"
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

    <div
      class="modal fade"
      id="largeModal1"
      tabindex="-1"
      data-bs-target="#staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      aria-labelledby="staticBackdropLabel"
      
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Modifier Service</h5>
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
                <label for="inputNanme4" class="form-label">Libelle</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputNanme4"
                  style="border: 1px solid #000"
                  v-model="modNatureDepense.libelle"
                />
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              @click.prevent="this.getService()"
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
    <div
      class="modal fade"
      id="largeModal"
      tabindex="-1"
      data-bs-target="#staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      aria-labelledby="staticBackdropLabel"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Ajouter Service</h5>
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
                <label for="inputNanme4" class="form-label">Libelle</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputNanme4"
                  style="border: 1px solid #000"
                  v-model="ajouterNatureDepense.libelle"
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
  name: "TodoItem",
  components: {},
  data() {
    return {
      ajouterNatureDepense: {
        code: "",
        libelle: "",
      },
      modNatureDepense: {
        code: "",
        libelle: "",
      },
    };
  },
  created() {
    this.getService();
  },
  computed: {
    ...mapGetters("Personnel", ["gettersService"]),
  },
  methods: {
    ...mapActions("Personnel", [
      "getService",
      "AjouterService",
      "ModifierService",
      "supprimerService",
    ]),
    AfficheModalModification(id) {
      this.modNatureDepense = this.gettersService.find(
        (items) => items.id == id
      );
    },
    EnregistrerSection() {
      var objetDirect1 = {
        libelle: this.ajouterNatureDepense.libelle,
      };

      this.AjouterService(objetDirect1);
      this.ajouterNatureDepense = {
        libelle: "",
      };
    },

    modificationSection() {
      var objetDirect1 = {
        id: this.modNatureDepense.id,

        libelle: this.modNatureDepense.libelle,
      };

      this.ModifierService(objetDirect1);
      this.modNatureDepense = {};
    },

    formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },
  },
};
</script>
