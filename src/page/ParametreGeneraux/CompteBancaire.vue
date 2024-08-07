<template>
  <div class="container">
    <div class="col-md-12">
      <div class="card" style="box-shadow: 5px 5px #f9d531">
        <div class="card-header">
          <div class="page-header">
            <h6 class="fw-bold mb-3">Liste Compte Bancaire</h6>
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
                <a href="#">Liste Compte Bancaire</a>
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
            <h3 style="text-align: center">
              {{ afficheEntreprise(entreprise_id) }}
            </h3>
            <table class="table table-bordered">
              <thead>
                <tr>
                  <!-- <th scope="col">#</th> -->
                  <th scope="col" style="width: 65%">Banque</th>
                  <th scope="col" style="width: 20%">Numero de compte</th>

                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in compteParEntreprise(entreprise_id)" :key="item.id">
                  <td>{{ afficheBanque(item.banque_id) }}</td>
                  <td>{{ item.numero_compte }}</td>

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
                      @click.prevent="supprimerCompteBancaire(item.id)"
                      >Supprimer</span
                    >
                    <!-- <button
                  type="button"
                  class="btn btn-danger rounded-pill"
                  v-if="item.encours == 0"
                >
                  Supprimer
                </button> -->
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
            <h5 class="modal-title">Modifier Compte Bancaire</h5>
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
                <label class="form-label"
                  >Banque
                  <span
                    style="color: red !important; font-size: 15px !important"
                    >*</span
                  ></label
                >
                <model-list-select
                  :list="getterBanque"
                  v-model="modNatureDepense.banque_id"
                  option-value="id"
                  option-text="libelle"
                  placeholder="select item"
                  style="border: 1px solid #000"
                >
                </model-list-select>
                <span style="color: red" v-if="modNatureDepense.banque_id == 0"
                  >Ce champs est obligatoire!
                </span>
              </div>
              <div class="col-12">
                <label for="inputNanme4" class="form-label"
                  >Numéro de compte<span
                    style="color: red !important; font-size: 15px !important"
                    >*</span
                  ></label
                >
                <input
                  type="text"
                  class="form-control"
                  id="inputNanme4"
                  style="border: 1px solid #000"
                  v-model="modNatureDepense.numero_compte"
                />
                <span
                  style="color: red"
                  v-if="modNatureDepense.numero_compte == 0"
                  >Ce champs est obligatoire!
                </span>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              @click.prevent="this.getCompteBancaire()"
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
            <h5 class="modal-title">Ajouter Compte Bancaire</h5>
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
                <label class="form-label"
                  >Banque
                  <span
                    style="color: red !important; font-size: 15px !important"
                    >*</span
                  ></label
                >
                <model-list-select
                  :list="getterBanque"
                  v-model="banque_id"
                  option-value="id"
                  option-text="libelle"
                  placeholder="select item"
                  style="border: 1px solid #000"
                >
                </model-list-select>
                <span style="color: red" v-if="banque_id == 0"
                  >Ce champs est obligatoire!
                </span>
              </div>
              <div class="col-12">
                <label for="inputNanme4" class="form-label"
                  >Numéro de compte
                  <span
                    style="color: red !important; font-size: 15px !important"
                    >*</span
                  ></label
                >
                <input
                  type="text"
                  class="form-control"
                  id="inputNanme4"
                  style="border: 1px solid #000"
                  v-model="numero_compte"
                />
                <span style="color: red" v-if="numero_compte == 0"
                  >Ce champs est obligatoire!
                </span>
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
export default {
  name: "App",
  components: { ModelListSelect },
  data() {
    return {
      banque_id: 0,
      numero_compte: "",
      modNatureDepense: {
        banque_id: "",
        numero_compte: "",
      },
    };
  },
  created() {
    (this.entreprise_id = this.$route.params.id), this.getEntreprise();
    this.getBanque();
    this.getCompteBancaire();
  },
  computed: {
    ...mapGetters("parametrage", [
      "getterCompteBancaire",
      "getterEntreprise",
      "getterBanque",
    ]),
  
    taillerTableau() {
      return this.getterCompteBancaire.length + 1;
    },
    afficheBanque() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.getterBanque.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.libelle;
          }
          return 0;
        }
      };
    },
    afficheEntreprise() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.getterEntreprise.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.numero_cc.concat(" ", qtereel.raison_sociale);
          }
          return 0;
        }
      };
    },
  },
  methods: {
    ...mapActions("parametrage", [
      "getCompteBancaire",
      "getBanque",
      "getEntreprise",
      "ajouteCompteBancaire",
      "modifierCompteBancaire",
      "supprimerCompteBancaire",
    ]),
      compteParEntreprise($id) {
  return this.getterCompteBancaire.filter(item=>item.entreprise_id==$id)
},
    AfficheModalModification(id) {
      this.modNatureDepense = this.getterCompteBancaire.find(
        (items) => items.id == id
      );
    },
    EnregistrerSection() {
      var objetDirect1 = {
        banque_id: this.banque_id,
        entreprise_id: this.entreprise_id,
        numero_compte: this.numero_compte,
      };

      this.ajouteCompteBancaire(objetDirect1);
      (this.banque_id = ""), (this.numero_compte = "");
    },

    modificationSection() {
      var objetDirect1 = {
        id: this.modNatureDepense.id,
        banque_id: this.modNatureDepense.banque_id,
        entreprise_id: this.modNatureDepense.entreprise_id,
        numero_compte: this.modNatureDepense.numero_compte,
      };

      this.modifierCompteBancaire(objetDirect1);
      this.modNatureDepense = {
        banque_id: "",
        numero_compte: "",
      };
    },

    formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },
  },
};
</script>
