<template>
  <div class="container">
    <div class="col-md-12">
      <div class="card" style="box-shadow: 5px 5px #f9d531">
        <div class="card-header">
          <!-- <div class="page-inner"> -->
          <div class="page-header">
            <h6 class="fw-bold mb-3">Liste Taux</h6>
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
                <a href="#">Taux</a>
              </li>
            </ul>
          </div>
          <!-- </div> -->
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
                  <th scope="col" style=" text-align: center;">Taux</th>
                  <th scope="col" style="width: 30%;text-align: center;">Arrondit</th>
                  
                  <th scope="col">Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="item in getterTaux"
                  :key="item.id"
                  style="text-align: center"
                >
                  <td
                    v-if="item.encours == 1"
                    style="
                      background: #1d702d;
                      color: aliceblue;
                      text-align: center;
                    "
                  >
                    {{ item.taux }} %
                  </td>
                  <td v-else>{{ item.taux }} %</td>
                  <td>{{ item.arrondit }}</td>
                  
                  <td v-if="item.encours == 1">en cours</td>
                  <td v-if="item.encours != 1"></td>
                  <td>
                    <!-- <button type="button" class="btn btn-primary rounded-pill">
                  Modifier
                </button> -->
                    <span
                      class="badge rounded-pill bg-secondary"
                      style="cursor: pointer"
                      v-if="item.encours == 1"
                    ></span>
                    <span
                      class="badge rounded-pill bg-dark"
                      style="cursor: pointer"
                      @click.prevent="ModifierExerciceEncours(item.id)"
                      v-else
                      >Activer</span
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
                      @click.prevent="supprimerTaux(item.id)"
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
            <h5 class="modal-title">Modifier Taux</h5>
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
                <label for="inputNanme4" class="form-label">Taux (%)</label>
                <input
                  type="number"
                  class="form-control"
                  id="inputNanme4"
                  style="border: 1px solid #000"
                  v-model="modifierExercice.taux"
                />
              </div>
              <div class="col-12">
                <label for="inputNanme4" class="form-label">Arrondit</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputNanme4"
                  style="border: 1px solid #000 !important"
                  :value="afficherArronditModifier"
                  readonly
                />
              </div>
             
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              @click.prevent="this.getTaux()"
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
    <div class="modal fade" id="largeModal" tabindex="-1">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Ajouter Taux</h5>
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
                <label for="inputNanme4" class="form-label">Taux (%)</label>
                <input
                  type="number"
                  class="form-control"
                  id="inputNanme4"
                  style="border: 1px solid #000"
                  v-model="ajouterExercice.taux"
                />
              </div>
              <div class="col-12">
                <label for="inputNanme4" class="form-label">Arrondit</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputNanme4"
                  style="border: 1px solid #000 !important"
                  :value="afficherArrondit"
                  readonly
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
              @click.prevent="EnregistrerExercice()"
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
    // this.getUtilisateur();
    this.getTaux();
    // this.getProfileUsers();
    // this.getUsers();
    // this.getStructureGeoGraphique();
  },
  computed: {
    ...mapGetters("parametrage", [
      "getterTaux",
      "getterUtilisateur",
    ]),
      
    afficherArronditModifier() {
        return (parseFloat(this.modifierExercice.taux)/100).toFixed(2)
    },
      afficherArrondit() {
        return (parseFloat(this.ajouterExercice.taux)/100).toFixed(2)
    }
  },
  methods: {
    ...mapActions("parametrage", [
      "getTaux",
      "getUtilisateur",
      "ajouterTaux",
      "modifierTaux",
      "supprimerTaux",
      "encoursTaux",
    ]),
    AfficheModalModification(id) {
      this.modifierExercice = this.getterTaux.find(
        (items) => items.id == id
      );
    },
    EnregistrerExercice() {
      var objetDirect1 = {
        taux: this.ajouterExercice.taux,
        arrondit: this.afficherArrondit,
       
      };

      this.ajouterTaux(objetDirect1);
      this.ajouterExercice = {
        taux: 0,
        
      };
    },

    modificationTaux() {
      var objetDirect1 = {
        id: this.modifierExercice.id,
       taux: this.modifierExercice.taux,
        arrondit: this.afficherArronditModifier,
      };

      this.modifierTaux(objetDirect1);
      this.modifierExercice = {};
    },

    ModifierExerciceEncours(id) {
      let ob = {
        id: id,
      };
      this.encoursTaux(ob);
    },
    formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },
  },
};
</script>
