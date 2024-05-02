import axios from "axios";

export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      noMatch: false,
    };
  },
  methods: {
    toHome() {
      this.$router.push("/");
    },

    register() {
      let data = {
        name: this.name,
        email: this.email,
        password: this.password,
      };
      axios
        .post("http://127.0.0.1:8000/api/user/register", data)
        .then((res) => {
          let token = res.data.token;
          let data = res.data.user;
          if (token === null || data === null) {
            this.noMatch = true;
          } else {
            this.$store.dispatch("changeToken", token);
            this.$store.dispatch("changeUser", data);
            localStorage.setItem("mediaToken", token);
            localStorage.setItem("userData", JSON.stringify(data));
            console.log(this.token);
            this.toHome();
          }
        })
        .catch((this.noMatch = true));
    },
  },
};
