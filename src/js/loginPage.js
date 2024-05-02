import axios from "axios";
import { mapState } from "vuex";

export default {
  name: "loginPage",
  data() {
    return {
      email: "",
      password: "",
      noMatch: false,
    };
  },
  computed: {
    ...mapState(["token", "userData"]),
  },
  methods: {
    toHome() {
      this.$router.push("/");
    },
    login() {
      console.log("ok pr");
      let data = {
        email: this.email,
        password: this.password,
      };
      axios.post("http://127.0.0.1:8000/api/user/login", data).then((res) => {
        if (
          res.data.token === null ||
          res.data.token === "" ||
          res.data.token === undefined
        ) {
          this.noMatch = true;
        } else {
          this.$store.dispatch("changeToken", res.data.token);
          this.$store.dispatch("changeUser", res.data.user);
          localStorage.setItem("mediaToken", res.data.token);
          localStorage.setItem("userData", JSON.stringify(res.data.user));
          console.log(this.token);
          this.toHome();
        }
      });
    },
  },
};
