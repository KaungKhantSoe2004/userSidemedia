import axios from "axios";
import { mapState } from "vuex";
export default {
  name: "detailsPage",
  data() {
    return {
      post: "",
      count: "",
    };
  },
  computed: {
    ...mapState(["token", "userData"]),
  },
  methods: {
    loadData(id) {
      let PostId = id;
      console.log(PostId);
      axios
        .post("http://127.0.0.1:8000/api/user/getPostDetails", { id: PostId })
        .then((res) => {
          let post = res.data.post;
          post.image = `http://127.0.0.1:8000/img/${post.image}`;
          this.post = post;
        });
    },
    loadCount(user_id, post_id) {
      let data = {
        user_id: user_id,
        post_id: post_id,
      };
      axios
        .post("http://127.0.0.1:8000/api/user/createActionLog", data)
        .then((res) => {
          this.count = res.data.count;
        });
    },
  },
  mounted() {
    if (localStorage.getItem("mediaToken")) {
      let token = localStorage.getItem("mediaToken");
      let userData = localStorage.getItem("userData");
      this.$store.dispatch("changeToken", token);
      this.$store.dispatch("changeUser", JSON.parse(userData));
      console.log(this.token, this.userData);
      // this.hangeToken(token);
      // this.changeUser(userData);
    }
    let id = this.$route.params.id;
    this.loadData(id);
    // console.log(this.userData.id);
    this.loadCount(this.userData.id, id);
  },
};
