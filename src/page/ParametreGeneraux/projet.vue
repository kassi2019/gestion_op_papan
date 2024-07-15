<template>
  <div class="container">
    <div class="col-md-12">
      <div class="card" style="box-shadow: 5px 5px #f9d531">
        <div class="card-header">
          <div class="page-header">
						<h6 class="fw-bold mb-3">Liste Projet</h6>
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
								<a href="#">Projet</a>
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
                  <th scope="col">Section</th>
                  <th scope="col" style="width: 40%">Nom projet</th>
                  <th scope="col" style="width: 10%">Date début</th>
                  <th scope="col" style="width: 10%">Date fin</th>
                  <th style="width: 15%"></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in getterProjet" :key="item.id">
                  <td>{{ afficheSection(item.section_id) }}</td>
                  <td>{{ item.nom_projet }}</td>
                  <td>{{ formaterDate(item.date_debut) }}</td>
                  <td>{{ formaterDate(item.date_fin) }}</td>
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
                      @click.prevent="supprimerProjet(item.id)"
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
            <h5 class="modal-title">Modifier Projet</h5>
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
                <label for="inputNanme4" class="form-label">Section</label>
                <select
                  class="form-select"
                  style="border: 1px solid #000"
                  v-model="modNatureDepense.section_id"
                >
                  <option selected></option>
                  <option
                    v-for="item in getterSection"
                    :key="item.id"
                    :value="item.id"
                  >
                    {{ item.code }}--{{ item.libelle }}
                  </option>
                </select>
              </div>
              <div class="col-12">
                <label for="inputNanme4" class="form-label">Libelle</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputNanme4"
                  style="border: 1px solid #000"
                  v-model="modNatureDepense.nom_projet"
                />
              </div>
              <div class="col-12">
                <label for="inputNanme4" class="form-label">Date début</label>
                <input
                  type="date"
                  class="form-control"
                  id="inputNanme4"
                  style="border: 1px solid #000"
                  v-model="modNatureDepense.date_debut"
                />
              </div>
              <div class="col-12">
                <label for="inputNanme4" class="form-label">Date fin</label>
                <input
                  type="date"
                  class="form-control"
                  id="inputNanme4"
                  style="border: 1px solid #000"
                  v-model="modNatureDepense.date_fin"
                />
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              @click.prevent="this.getProjet()"
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
            <h5 class="modal-title">Ajouter Projet</h5>
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
                <label for="inputNanme4" class="form-label">Section</label>
                <select
                  class="form-select"
                  style="border: 1px solid #000"
                  v-model="ajouterNatureDepense.section_id"
                >
                  <option selected></option>
                  <option
                    v-for="item in getterSection"
                    :key="item.id"
                    :value="item.id"
                  >
                    {{ item.code }}--{{ item.libelle }}
                  </option>
                </select>
              </div>
              <div class="col-12">
                <label for="inputNanme4" class="form-label">Libelle</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputNanme4"
                  style="border: 1px solid #000"
                  v-model="ajouterNatureDepense.nom_projet"
                />
              </div>
              <div class="col-12">
                <label for="inputNanme4" class="form-label">Date début</label>
                <input
                  type="date"
                  class="form-control"
                  id="inputNanme4"
                  style="border: 1px solid #000"
                  v-model="ajouterNatureDepense.date_debut"
                />
              </div>
              <div class="col-12">
                <label for="inputNanme4" class="form-label">Date fin</label>
                <input
                  type="date"
                  class="form-control"
                  id="inputNanme4"
                  style="border: 1px solid #000"
                  v-model="ajouterNatureDepense.date_fin"
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
        date_fin: "",
        libelle: "",
        date_debut: "",
        section_id: "",
      },
      modNatureDepense: {
        date_fin: "",
        libelle: "",
        date_debut: "",
        section_id: "",
      },
    };
  },
  created() {
    this.getSection();
    this.getProjet();
  },
  computed: {
    ...mapGetters("parametrage", ["getterProjet", "getterSection"]),

    afficheSection() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.getterSection.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.code.concat(" ", qtereel.libelle);
          }
          return 0;
        }
      };
    },
  },
  methods: {
    ...mapActions("parametrage", [
      "getProjet",
      "ajouteProjet",
      "modifierProjet",
      "supprimerProjet",
      "getSection",
    ]),
    AfficheModalModification(id) {
      this.modNatureDepense = this.getterProjet.find((items) => items.id == id);
    },
    EnregistrerSection() {
      var objetDirect1 = {
        section_id: this.ajouterNatureDepense.section_id,
        nom_projet: this.ajouterNatureDepense.nom_projet,
        date_debut: this.ajouterNatureDepense.date_debut,
        date_fin: this.ajouterNatureDepense.date_fin,
      };

      this.ajouteProjet(objetDirect1);
      this.ajouterNatureDepense = {
        section_id: "",
        nom_projet: "",
        date_debut: "",
        date_fin: "",
      };
    },

    modificationSection() {
      var objetDirect1 = {
        id: this.modNatureDepense.id,
        section_id: this.modNatureDepense.section_id,
        nom_projet: this.modNatureDepense.nom_projet,
        date_debut: this.modNatureDepense.date_debut,
        date_fin: this.modNatureDepense.date_fin,
      };

      this.modifierProjet(objetDirect1);
      this.modNatureDepense = {};
    },

    formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },
  },
};
</script>
