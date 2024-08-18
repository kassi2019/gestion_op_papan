<template>
  <div class="container">
   
    <div class="col-md-12">
      <div class="card" style="box-shadow: 5px 5px #f9d531">
        <div class="card-header">
          <div class="page-header">
            <h6 class="fw-bold mb-3">Liste des Permissions</h6>
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
                <a href="#">Permission</a>
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
                  
                  <th scope="col" style="text-align: center">NOM ET PREMNOMS UTILISATEUR</th>
                  <th scope="col" style="text-align: center">Action</th>
                </tr>
              </thead>
              <tbody>
            <tr
              v-for="(item) in GroupeParUtilisateur"
              :key="item"
              
            >
           
            <td style="width: 90%;">{{nom_utilisateur(item)}}</td>
            <td>
            
                 <span
                            class="badge bg-info"
                            style="cursor: pointer"
                            title="Plus détail"
                            @click="AfficheVentilationBudget(item)"
                            ><i class="fas fa-tasks"></i
                          > Plus Info</span>
                
                
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
            <h5 class="modal-title">MODIFIER ROLE</h5>
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
                <label for="inputNanme4" class="form-label">Code</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputNanme4"
                  style="border: 1px solid #000"
                  v-model="modifierrole.code_role"
                />
              </div>
              <div class="col-12">
                <label for="inputNanme4" class="form-label">Libelle</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputNanme4"
                  style="border: 1px solid #000"
                  v-model="modifierrole.libelle"
                />
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              @click.prevent="this.getRoleUtilisateur()"
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
    <div
      class="modal fade"
      id="largeModal"
      tabindex="-1"
      data-bs-backdrop="static"
      aria-labelledby="staticBackdropLabel"
    >
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">AJOUTER PERMISSION</h5>
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
                  <div class="col-12">
                    <label class="form-label">Utilisateur</label>
                    <model-list-select
                      :list="UtilisateurName"
                      v-model="FormDataDossier.utilisateur_id"
                      option-value="id"
                      option-text="nom_prenoms"
                      placeholder="select item"
                      style="border: 1px solid #000"
                    >
                    </model-list-select>
                  </div>
                  <div class="col-5">
                    <label class="form-label">Module</label>
                    <model-list-select
                      :list="ListeModule"
                      v-model="FormDataDossier.module_id"
                      option-value="id"
                      option-text="objet"
                      placeholder="select item"
                      style="border: 1px solid #000"
                    >
                    </model-list-select>
                  </div>
                  <div class="col-5">
                    <label class="form-label">Menu Niveau 1</label>
                    <model-list-select
                      :list="ListeMenuNiveau1"
                      v-model="FormDataDossier.sous_menu"
                      option-value="id"
                      option-text="objet"
                      placeholder="select item"
                      style="border: 1px solid #000"
                    >
                    </model-list-select>
                  </div>
                  <!-- <div class="col-3">
                    <label class="form-label">Menu Niveau 2</label>
                    <model-list-select
                      :list="ListeMenuNiveau2"
                      v-model="FormDataDossier.sous_sous_menu"
                      option-value="id"
                      option-text="objet"
                      placeholder="select item"
                      style="border: 1px solid #000"
                    >
                    </model-list-select>
                  </div> -->
                  <div class="col-2">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                    <button
                      type="button"
                      class="btn btn-primary"
                      @click.prevent="ajouterPartieRequerante()"
                    >
                      Ajouter
                    </button>
                  </div>
                </form>
                <br /><br />
                <div class="table-responsive">
                  <table class="table table-bordered">
                    <thead>
                      <tr>
                        <!-- <th scope="col">#</th> -->
                        <!-- <th scope="col">N</th> -->
                        <th scope="col" style="text-align: center">
                          Utilisateur
                        </th>
                        <th scope="col" style="text-align: center">MODUE</th>
                        <th scope="col" style="text-align: center">
                          Menu Niveau 1
                        </th>
                        <!-- <th scope="col" style="text-align: center">
                          Menu Niveau 2
                        </th> -->
                        <th scope="col" style="text-align: center">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(item, index) in TableauDossier"
                        :key="item.id"
                      >
                        <!-- <td>{{ index + 1 }}</td> -->
                        <td style="width: 30%">
                          {{ nom_utilisateur(item.utilisateur_id) }}
                        </td>
                        <td>{{ libelleModule(item.module_id) }}</td>
                        <td>{{ libelleModule(item.sous_menu) }}</td>
                        <!-- <td>{{ libelleModule(item.sous_sous_menu) }}</td> -->
                        <td>
                          <span
                            class="badge bg-danger"
                            style="cursor: pointer"
                            @click.prevent="deletePartieRequerante(index)"
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
              @click.prevent="EnregistrerRole()"
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
import { ModelListSelect } from "vue-search-select";
export default {
  components: { ModelListSelect },
  data() {
    return {
      TableauDossier: [],
      FormDataDossier: {
        utilisateur_id: "",
        module_id: "",
        sous_menu: "",
        sous_sous_menu: "",
      },
      modifierrole: {
        libelle: "",
        code_role: "",
      },
    };
  },
  created() {
    this.getModule();
    this.getUtilisateurConnecter();
    this.getPermission();
  },
  computed: {
    ...mapGetters("Utilisateurs", [
      "getterModule",
      "getterstateUtilisateurconnecter",
      "getterPermission",
    ]),
GroupeParUtilisateur() {
      // return (id) => {

      let objet = this.getterPermission
      //  let vm=this
      let array_exercie = [];
      if (objet.length > 0) {
        objet.forEach(function (val) {
          array_exercie.push(val.utilisateur_id);
        });
        let unique = [...new Set(array_exercie)];
        console.log(unique);
        if (unique.length == 0) {
          return [];
        }
        return unique.sort((a, b) => (a.unique > b.unique ? 1 : -1));
      }
      return [];
      // };
    },
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
    nom_utilisateur() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.getterstateUtilisateurconnecter.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.name.concat(" ", qtereel.prenoms);
          }
          return 0;
        }
      };
    },
    UtilisateurName() {
      let collet = [];
      this.getterstateUtilisateurconnecter.filter((item) => {
        if (item.role_id != 1) {
          let data = {
            id: item.id,
            nom_prenoms: item.name.concat(" ", item.prenoms),
          };
          collet.push(data);
        }
      });
      return collet;
    },

    ListeModule() {
      let collet = [];
      this.getterModule.filter((item) => {
        if (item.parent_id == null) {
          let data = {
            id: item.id,
            objet: item.libelle,
          };
          collet.push(data);
        }
      });
      return collet;
    },

    ListeMenuNiveau1() {
      let collet = [];
      this.getterModule.filter((item) => {
        if (item.parent_id == this.FormDataDossier.module_id) {
          let data = {
            id: item.id,
            objet: item.libelle,
          };
          collet.push(data);
        }
      });
      return collet;
    },

    ListeMenuNiveau2() {
      let collet = [];
      this.getterModule.filter((item) => {
        if (item.parent_id == this.FormDataDossier.sous_menu) {
          let data = {
            id: item.id,
            objet: item.libelle,
          };
          collet.push(data);
        }
      });
      return collet;
    },
  },

  methods: {
    ...mapActions("Utilisateurs", [
      "getUtilisateurConnecter",
      "getPermission",
      "getModule",
      "ajouterPermission",
    ]),
    AfficheVentilationBudget(id) {
      this.$router.push({
        name: "detailPermission",
        params: { id: id },
      });
    },
    deletePartieRequerante(item) {
      if (item > -1) {
        this.TableauDossier.splice(item, 1);
      }
    },
    ajouterPartieRequerante() {
      var nouvelObjet12 = {
        ...this.FormDataDossier,

        sous_menu: this.FormDataDossier.sous_menu,
        // sous_sous_menu: this.FormDataDossier.sous_sous_menu,
        utilisateur_id: this.FormDataDossier.utilisateur_id,
        module: this.FormDataDossier.module,
      };
      this.TableauDossier.push(nouvelObjet12);

      (this.FormDataDossier.sous_menu = ""),
        (this.FormDataDossier.sous_sous_menu = "");
    },
    AfficheModalModification(id) {
      this.modifierrole = this.getterRoleUtilisateur.find(
        (items) => items.id == id
      );
    },

    EnregistrerRole() {
      var objetDirect1 = {
        FormDataDossier: this.TableauDossier,
      };

      this.ajouterPermission(objetDirect1);
      (this.TableauDossier = []), (this.FormDataDossier = {});
    },

    ModifierRole() {
      var objetDirect1 = {
        id: this.modifierrole.id,
        libelle: this.modifierrole.libelle,
        code_role: this.modifierrole.code_role,
      };

      this.modifierRoleUtilisateur(objetDirect1);
      this.modifierrole = {
        libelle: "",
        code_role: "",
      };
    },
  },
};
</script>
