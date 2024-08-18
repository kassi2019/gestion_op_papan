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
         
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <h6 style="text-align: center;">{{ nom_utilisateur(id_utilisateur) }}</h6>
            <table class="table table-bordered">
              <thead>
                <tr>
                  <!-- <th scope="col">#</th> -->
                  <!-- <th scope="col">N</th> -->

                  <!-- <th scope="col" style="text-align: center">
                    NOM ET PREMNOMS UTILISATEUR
                  </th> -->
                  <!-- <th scope="col" style="text-align: center">Action</th> -->
                </tr>
              </thead>
              <tbody v-for="item in GroupeParModule" :key="item">
                <tr>
                    <td></td>
                  <td style="width: 85%;background-color:#f9d531">{{ libelleModule(item) }}</td>
                  <td><span
                      class="badge bg-danger"
                      style="cursor: pointer"
                      @click.prevent="supprimerUtilisateur(item)"
                      >Supprimer</span
                    ></td>
                </tr>
                <tr v-for="data in listeMenu(item)" :key="data.id">
                    <td><i class="fas fa-arrow-circle-right" style="font-size: 25px;"></i></td>
                    <td>{{ libelleModule(data.sous_menu) }}</td>
                    <td><span
                      class="badge bg-danger"
                      style="cursor: pointer"
                      @click.prevent="supprimerUtilisateur(item)"
                      >Supprimer</span
                    ></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <!-- modal de modification -->
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
// import { ModelListSelect } from "vue-search-select";
export default {
  components: {},
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
    this.id_utilisateur= this.$route.params.id;
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
    listeMenu() {
      return (id) => {
        if (id != null && id != "") {
          return this.getterPermission.filter((qtreel) => qtreel.module_id == id);

         
        }
      };
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
    GroupeParModule() {
      // return (id) => {

      let objet = this.getterPermission;
      //  let vm=this
      let array_exercie = [];
      if (objet.length > 0) {
        objet.forEach(function (val) {
          array_exercie.push(val.module_id);
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
  },

  methods: {
    ...mapActions("Utilisateurs", [
      "getUtilisateurConnecter",
      "getPermission",
      "getModule",
      "ajouterPermission",
    ]),
  },
};
</script>
