<template>
  <div class="container">
    <div class="col-md-12">
      <div class="card" style="box-shadow: 5px 5px #f9d531">
        <div class="card-header">
          <div class="page-header">
						<h6 class="fw-bold mb-3">Liste des utilisateurs</h6>
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
								<a href="#">Gestion Utilisateur</a>
							</li>
							<li class="separator">
								<i class="icon-arrow-right"></i>
							</li>
							<li class="nav-item">
								<a href="#">Utilisateurs</a>
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
                  <!-- <th scope="col">N</th> -->
                  <th scope="col" style="text-align: center">Nom</th>
                  <th scope="col" style="text-align: center">Prénoms</th>
                  <th scope="col" style="text-align: center">Email</th>
                  <th scope="col" style="text-align: center">Rôle</th>
                  <!-- <th scope="col" style="text-align: center">Service</th> -->
                  <th scope="col" style="text-align: center">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in getterUtilisateur" :key="item.id">
                  <td>{{ item.name }}</td>
                  <td style="">{{ item.prenoms }}</td>
                  <td style="">{{ item.email }}</td>
                  <td style="">{{ item.libelle_role }}</td>
                  <!-- <td style="">{{ item.libelle_service }}</td> -->
                  <td>
                    <span
                      class="badge rounded-pill bg-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#largeModal1"
                      style="cursor: pointer"
                      @click.prevent="AfficheModalModification(item.id)"
                      >Modifier</span
                    >
                    <span class="badge bg-danger" style="cursor: pointer"
                    @click.prevent="supprimerUtilisateur(item.id)"
                      >Supprimer</span
                    >
                    <!-- <button
                  type="button"
                  class="btn btn-primary rounded-pill"
                  data-bs-toggle="modal"
                  data-bs-target="#largeModal1"
                  @click.prevent="AfficheModalModification(item.id)"
                >
                  Modifier
                </button> -->

                    <!-- <button
                  type="button"
                  class="btn btn-danger rounded-pill"
                  @click.prevent="supprimerRoleUtilisateur(item.id)"
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
            <h5 class="modal-title">MODIFIER UTILISATEUR</h5>
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
                <label for="inputNanme4" class="form-label">Nom</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputNanme4"
                  style="border: 1px solid #000"
                  v-model="modifierrole.name"
                />
              </div>
              <div class="col-12">
                <label for="inputNanme4" class="form-label">Prénoms</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputNanme4"
                  style="border: 1px solid #000"
                  v-model="modifierrole.prenoms"
                />
              </div>
              <div class="col-12">
                <label for="inputNanme4" class="form-label">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="inputNanme4"
                  style="border: 1px solid #000"
                  v-model="modifierrole.email"
                />
              </div>
             
              <div class="col-12">
                <label for="inputNanme4" class="form-label">Rôle</label>
                <select
                  class="form-select"
                  style="border: 1px solid #000"
                  v-model="modifierrole.role_id"
                >
                  <option selected></option>
                  <option
                    v-for="item in getterRoleUtilisateur"
                    :key="item.id"
                    :value="item.id"
                  >
                    {{ item.libelle }}
                  </option>
                </select>
              </div>

            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              @click.prevent="this.getUtilisateur()"
            >
              Fermer
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click.prevent="ModifierRole()"
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
            <h5 class="modal-title">AJOUTER UTILISATEUR</h5>
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
                <label for="inputNanme4" class="form-label">Nom <span
                              style="
                                color: red !important;
                                font-size: 15px !important;
                              "
                              >*</span
                            ></label>
                <input
                  type="text"
                  class="form-control"
                  id="inputNanme4"
                  style="border: 1px solid #000"
                  v-model="formData.name"
                />
              </div>
              <div class="col-12">
                <label for="inputNanme4" class="form-label">Prénoms <span
                              style="
                                color: red !important;
                                font-size: 15px !important;
                              "
                              >*</span
                            ></label>
                <input
                  type="text"
                  class="form-control"
                  id="inputNanme4"
                  style="border: 1px solid #000"
                  v-model="formData.prenoms"
                />
              </div>
              <div class="col-12">
                <label for="inputNanme4" class="form-label">Email <span
                              style="
                                color: red !important;
                                font-size: 15px !important;
                              "
                              >*</span
                            ></label>
                <input
                  type="email"
                  class="form-control"
                  id="inputNanme4"
                  style="border: 1px solid #000"
                  v-model="formData.email"
                />
                <span style="color:red" v-if="VerificationEmail(formData.email)==1">Email existe déja</span>
              </div>
              <div class="col-12">
                <label for="inputNanme4" class="form-label">Password</label>

                <input
                  type="password"
                  name="password"
                  class="form-control"
                  id="yourPassword"
                  required
                  style="border: 1px solid #000"
                  v-model="formData.password"
                />
              </div>
              <div class="col-12">
                <label for="inputNanme4" class="form-label">Rôle <span
                              style="
                                color: red !important;
                                font-size: 15px !important;
                              "
                              >*</span
                            ></label>
                <select
                  class="form-select"
                  style="border: 1px solid #000"
                  v-model="formData.role_id"
                >
                  <option selected></option>
                  <option
                    v-for="item in getterRoleUtilisateur"
                    :key="item.id"
                    :value="item.id"
                  >
                    {{ item.libelle }}
                  </option>
                </select>
              </div>
              <!-- <div class="col-12">
                <label for="inputNanme4" class="form-label">Service</label>
                <select
                  class="form-select"
                  style="border: 1px solid #000"
                  v-model="formData.service_id"
                >
                  <option selected></option>
                  <option
                    v-for="item in getterGroupement"
                    :key="item.id"
                    :value="item.id"
                  >
                    {{ item.libelle }}
                  </option>
                </select>
              </div> -->
              <!-- <div class="col-12">
                <label for="inputNanme4" class="form-label">Module{{ formData.module_id }}</label>
                <select
                  class="form-select"
                  style="border: 1px solid #000"
                  v-model="formData.module_id"
                >
                 
                  <option
                    v-for="item in AfficheModuleGb(formData.service_id)"
                    :key="item.id"
                    :value="item.mod_gb"
                  >
                    {{ item.mod_gb }}
                  </option>
                   <option
                    v-for="item in AfficheModuleGm(formData.service_id)"
                    :key="item.id"
                    :value="item.mod_gm"
                  >
                    {{ libelleModule(item.mod_gm) }}
                  </option>
                  <option
                    v-for="item in AfficheModuleGP(formData.service_id)"
                    :key="item.id"
                    :value="item.mod_gp"
                  >
                    {{ libelleModule(item.mod_gp) }}
                  </option>
                </select>
              </div> -->
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
            v-if="VerificationEmail(formData.email)==0 && formData.name!='' && formData.role_id!='' && formData.prenoms!='' && formData.role_id!=''"
              type="button"
              class="btn btn-primary"
              @click.prevent="EnregistrerUtilisateur()"
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

export default {
  name: "app",
  components: {},
  data() {
    return {
      formData: {
        name: "",
        email: "",
        role_id: "",
        prenoms:"",
        
      },
       
    
        
      FormDataFacture: {},
      modifierrole: {
        libelle: "",
        code_role: "",
      },
    };
  },
  created() {
    this.getRoleUtilisateur();
    this.getUtilisateur();
    // this.getModule();
    // this.getListeService();
  },
  computed: {
    ...mapGetters("Utilisateurs", [
      "getterExerciceBudgetaire",
      "getterUtilisateur",
      "getterModule",
      "getterGroupement",
      "getterRoleUtilisateur",
    ]),

    libelleModule() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.getterModule.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.libelle;
          }
          return 0;
        }
      };
    },

    VerificationEmail() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.getterUtilisateur.find((qtreel) => qtreel.email == id);

          if (qtereel) {
            return 1;
          }
          return 0;
        }
      };
    },
  },

  methods: {
    ...mapActions("Utilisateurs", [
      "getExerciceBudgetaire","modifierUtilisateur","supprimerUtilisateur","ChangerMotPasse",
      "getUtilisateur",
      "getModule",
      "EnregistreUtilisateur",
      "getListeService",
      "getRoleUtilisateur",
    
      "supprimerRoleUtilisateur",
    ]),
    AfficheModalModification(id) {
      this.modifierrole = this.getterUtilisateur.find(
        (items) => items.id == id
      );
    },

    AfficheModuleGb($id) {
      return this.getterGroupement.filter(
        (item) => item.id == $id && item.mod_gb != 0
      );
    },
    AfficheModuleGm($id) {
      return this.getterGroupement.filter(
        (item) => item.id == $id && item.mod_gm != 0
      );
    },
    AfficheModuleGP($id) {
      return this.getterGroupement.filter(
        (item) => item.id == $id && item.mod_gp != 0
      );
    },
    EnregistrerUtilisateur() {
      var objetDirect1 = {
        name: this.formData.name,
        email: this.formData.email,
        password: this.formData.password,
        role_id: this.formData.role_id,
        service_id: this.formData.service_id,
        prenoms: this.formData.prenoms,
      };

      this.EnregistreUtilisateur(objetDirect1);
      this.formData = {
        name: "",
        email: "",
        password: "",
        role_id: "",
        service_id: "",
        prenoms: "",
      };
    },

    ModifierRole() {
      var objetDirect1 = {
        id: this.modifierrole.id,
        name: this.modifierrole.name,
        email: this.modifierrole.email,
         prenoms: this.modifierrole.prenoms,
        role_id: this.modifierrole.role_id,
      };

      this.modifierUtilisateur(objetDirect1);
      this.modifierrole = {
        libelle: "",
        code_role: "",
      };
    },
  },
};
</script>
