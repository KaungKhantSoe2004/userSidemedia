<template>
  <main>
    <div class="shadow-sm mx-1 my-4 p-5">
      <nav>
        <a class="ms-2 text-dark text-decoration-none" href="/">Home</a>
        <a class="ms-5 text-dark text-decoration-none" href="/about">About</a>
        <a class="ms-5 text-dark text-decoration-none" href="/latestNews"
          >Latest News</a
        >
        <a class="ms-5 text-dark text-decoration-none" href="/contact"
          >Contact</a
        >
        <a
          v-if="
            $store.state.token === null ||
            $store.state.token === '' ||
            $store.state.token === undefined
          "
          class="ms-5 text-dark text-decoration-none"
          href="/login"
          >Log In</a
        >
        <span
          class="ms-5 text-dark text-decoration-none"
          v-else
          @click="logout()"
          >Log Out</span
        >
      </nav>
    </div>

    <!-- Whats New Start -->
    <section class="whats-news-area pt-50 pb-20">
      <div class="d-flex justify-content-end">
        <div class="d-flex me-5 col-4 p-5">
          <input
            type="text"
            placeholder=" Search Posts"
            v-model="searchKey"
            class="form-control"
            @keyup="searchFalse()"
            @keyup.enter="search()"
          />
          <div class="mt-2 p-2 ms-2" @click="search()">
            <i class="fas fa-search"></i>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div v-if="searchKey !== ''">
              <h4 class="text-center text-danger mb-5" v-if="isSearch">
                Search Key - {{ searchKey }}
              </h4>
            </div>
            <div class="row d-flex justify-content-between">
              <div class="col-lg-3 col-md-3">
                <div class="section-tittle mb-30">
                  <h3>Whats New</h3>
                </div>
              </div>
              <div class="col-lg-9 col-md-9">
                <div class="properties__button">
                  <!--Nav Button  -->
                  <nav>
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                      <a
                        class="nav-item nav-link active"
                        id="nav-home-tab"
                        data-toggle="tab"
                        @click="getAllPosts()"
                        role="tab"
                        aria-controls="nav-home"
                        aria-selected="true"
                        >All</a
                      >
                      <a
                        v-for="(c, index) in categories"
                        :key="index"
                        class="nav-item nav-link gj-cursor-pointer"
                        id="nav-profile-tab"
                        data-toggle="tab"
                        @click="searchWithCategory(c.category_id)"
                        role="tab"
                        aria-controls="nav-profile"
                        aria-selected="false"
                        >{{ c.title }}</a
                      >
                    </div>
                  </nav>
                  <!--End Nav Button  -->
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <!-- Nav Card -->
                <div class="tab-content" id="nav-tabContent">
                  <!-- card one -->
                  <div
                    class="tab-pane fade show active"
                    id="nav-home"
                    role="tabpanel"
                    aria-labelledby="nav-home-tab"
                  >
                    <div class="whats-news-caption">
                      <div
                        class="row d-flex justify-content-center my-5"
                        v-if="posts.length === 0"
                      >
                        <h2
                          class="text-danger my-5 text-center shadow-sm bg-dark p-2 col-3"
                        >
                          There is No Data!
                        </h2>
                      </div>
                      <div class="row" v-else>
                        <div
                          v-for="(item, index) in posts"
                          :key="index"
                          class="col-lg-6 col-md-6"
                          @click="toDetails(item.post_id)"
                        >
                          <div class="single-what-news mb-100">
                            <div class="what-img">
                              <img
                                :src="item.image"
                                style="height: 500px"
                                alt=""
                              />
                            </div>
                            <div class="what-cap">
                              <span class="color1">{{
                                item.categoryName
                              }}</span>
                              <h4>
                                <a
                                  class="text-decoration-none"
                                  href="details.html"
                                  >{{ item.title }}</a
                                >
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- card Six -->
                </div>
                <!-- End Nav Card -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Whats New End -->

    <!--Start pagination -->
    <!-- <div class="pagination-area pb-45 text-center">
      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <div class="single-wrap d-flex justify-content-center">
              <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-start">
                  <li class="page-item">
                    <a class="page-link" href="details.html"
                      ><span class="flaticon-arrow roted"></span
                    ></a>
                  </li>
                  <li class="page-item active">
                    <a class="page-link" href="details.html">01</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="details.html">02</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="details.html">03</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="details.html"
                      ><span class="flaticon-arrow right-arrow"></span
                    ></a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div> -->
    <!-- End pagination  -->
  </main>
</template>

<script src="../js/homePage.js"></script>
