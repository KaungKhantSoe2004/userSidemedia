import axios from "axios";
import { mapState } from "vuex";
export default {
  name: "HomePage",
  data() {
    return {
      message: "this is Testing",
      isSearch: false,
      searchKey: "",
      detailsId: "",
      posts: [],

      categories: [],
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("mediaToken");
      localStorage.removeItem("userData");
      this.$router.push("/login");
    },
    search() {
      let key = {
        key: this.searchKey,
      };
      axios
        .post("http://127.0.0.1:8000/api/user/searchPosts", key)
        .then((res) => {
          for (let i = 0; i < res.data.posts.length; i++) {
            let imgSrc = res.data.posts[i].image;
            if (imgSrc === null) {
              res.data.posts[
                i
              ].image = `http://127.0.0.1:8000/defaultImage/default.jpg`;
            } else {
              res.data.posts[i].image = `http://127.0.0.1:8000/img/${imgSrc}`;
            }
          }

          this.posts = res.data.posts;
          this.isSearch = true;
          console.log(this.posts);
        });
    },
    searchFalse() {
      this.isSearch = false;
      if (this.searchKey === "") {
        this.getAllPosts();
      }
    },
    toDetails(id) {
      this.$router.push(`/detailsPage/${id}`);
      // this.detailsId = id;
      // this.$router.push({
      //   name: "EachDetailsPage",
      //   params: { oops: "gets removed" },
      // });
    },
    searchWithCategory(searchId) {
      let id = {
        id: searchId,
      };
      axios
        .post("http://127.0.0.1:8000/api/user/searchWithCategory", id)
        .then((res) => {
          for (let i = 0; i < res.data.posts.length; i++) {
            let imgSrc = res.data.posts[i].image;
            if (imgSrc === null) {
              res.data.posts[
                i
              ].image = `http://127.0.0.1:8000/defaultImage/default.jpg`;
            } else {
              res.data.posts[i].image = `http://127.0.0.1:8000/img/${imgSrc}`;
            }
          }

          this.posts = res.data.posts;
          console.log(this.posts);
        });
    },
    getAllPosts() {
      axios.get("http://127.0.0.1:8000/api/user/getAllPostList").then((res) => {
        for (let i = 0; i < res.data.post.length; i++) {
          let imgSrc = res.data.post[i].image;
          if (imgSrc === null) {
            res.data.post[
              i
            ].image = `http://127.0.0.1:8000/defaultImage/default.jpg`;
          } else {
            res.data.post[i].image = `http://127.0.0.1:8000/img/${imgSrc}`;
          }
        }

        this.posts = res.data.post;
        console.log(this.posts);
      });
    },
    getAllCategories() {
      axios
        .get("http://127.0.0.1:8000/api/user/getAllCategories")
        .then((res) => {
          this.categories = res.data.categories;
        });
    },
  },
  computed: {
    ...mapState(["token", "data"]),
  },
  mounted() {
    this.getAllPosts();
    this.getAllCategories();
    if (localStorage.getItem("mediaToken")) {
      let token = localStorage.getItem("mediaToken");
      let userData = localStorage.getItem("userData");
      this.$store.dispatch("changeToken", token);
      this.$store.dispatch("changeUser", JSON.parse(userData));
      console.log(this.token, this.userData);
      // this.hangeToken(token);
      // this.changeUser(userData);
    }
  },
};
