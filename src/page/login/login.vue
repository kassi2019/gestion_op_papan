<template>
  <div>
    <section class="ftco-section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-12 text-center mb-5">
            <h2 class="heading-section">
              SYGOP:Systeme de Gestion des Ordres de Paiements
            </h2>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-md-12 col-lg-10">
            <div
              class="wrap d-md-flex"
              style="
                border-radius: 15px 50px 30px;
               border:1px solid #000;
              
               box-shadow: 60px -16px  #f9d531;
              "
            >
              <div
                class="img"
                style="background-image: url(csslogin/images/logo1.jpg)"
              ></div>
              <div class="login-wrap p-4 p-md-5">
                <div class="d-flex">
                  <div class="w-100">
                    <h3 class="mb-5" style="text-align: center">CONNEXION</h3>
                  </div>
                  <div class="w-100">
                    <p class="social-media d-flex justify-content-end">
                      <a
                        href="#"
                        class="social-icon d-flex align-items-center justify-content-center"
                        ><span class="fa fa-facebook"></span
                      ></a>
                      <a
                        href="#"
                        class="social-icon d-flex align-items-center justify-content-center"
                        ><span class="fa fa-twitter"></span
                      ></a>
                    </p>
                  </div>
                </div>
                <form action="#" class="signin-form">
                  <div class="form-group mb-3">
                    <label class="label" for="name">Email</label>
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Email"
                      required
                      style=""
                       v-model="user.email"
                    />
                     <span
                        style="color: #b9121b; font-weight: bolder"
                        color="red"
                        class="hasError"
                        v-if="verificationEmail(user.email) == 0"
                        role="alert"
                        >l'email est un introuvable
                      </span>
                      <span
                        style="color: #1d702d; font-weight: bolder"
                        color="#1D702D"
                        class="hasError"
                        v-if="verificationEmail(user.email) == 1"
                        role="alert"
                        >l'email est correct
                      </span>
                  </div>
                  <div class="form-group mb-3">
                    <label class="label" for="password">Mot de passe</label>
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Password"
                      required
                      v-model="user.password"
                    />
                  </div>
                  <div class="form-group">
                    <button
                      type="submit"
                      class="form-control btn btn-primary rounded submit px-3"
                      @click.prevent="connexion()"
                    >
                      SE CONNECTER
                    </button>
                  </div>
                  <!-- <div class="form-group d-md-flex">
                    <div class="w-50 text-left">
                      <label class="checkbox-wrap checkbox-primary mb-0"
                        >Remember Me
                        <input type="checkbox" checked />
                        <span class="checkmark"></span>
                      </label>
                    </div>
                    <div class="w-50 text-md-right">
                      <a href="#">Forgot Password</a>
                    </div>
                  </div> -->
                </form>
                <!-- <p class="text-center">
                  Not a member? <a data-toggle="tab" href="#signup">Sign Up</a>
                </p> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "app",
  props: {
    source: String,
  },

  data() {
    return {
      user: {
        email: "",
        password: "",
      },

      mydata: false,
    };
  },
  components: {},
  created() {
    this.getUtilisateur();
  },
  computed: {
    ...mapGetters("Utilisateurs", [
      "loader",
      "getterUtilisateur",
      "champVide",
      "error",
      "errorMessage",
      "getterLoader",
    ]),

    verificationEmail() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.getterUtilisateur.find(
            (qtreel) => qtreel.email == id
          );
          if (qtereel) {
            return 1;
          }
          return 0;
        }
      };
    },
  },

  methods: {
    ...mapActions("Utilisateurs", ["login", "getUtilisateur"]),
    changePasswordVisibility() {
      this.passwordFieldType =
        this.passwordFieldType === "password" ? "text" : "password";
      this.isVisible = !this.isVisible;
    },

    exit() {
      this.closePopup();
      // and leave the view
    },
    showPopup() {
      this.shouldShowDialog = true;
    },
    closePopup() {
      this.shouldShowDialog = false;
    },
    discard() {
      this.discardEdits();
      this.exit();
    },
    discardEdits() {
      // your code here
    },

    onclikk() {
      this.mydata = true;
    },

    connexion() {
      this.isLoading = true;

      if (this.user.email && this.user.password) {
        this.login(this.user).then(
          () => {
            this.isLoading = false;
            this.$router.push("/Accueil");
          },
          (error) => {
            this.loading2 = false;
            this.message =
              (error.response && error.response.data) ||
              error.message ||
              error.toString();
          }
        );
      }
    },
  },
  watch: {
    dialog(val) {
      if (!val) return;

      setTimeout(() => (this.dialog = false), 4000);
    },
  },
};
</script>
<style scoped></style>
