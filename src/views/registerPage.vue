<template>
  <section class="content m-5">
    <div class="container-fluid">
      <div class="row mt-4">
        <div class="col-8 offset-3 mt-5">
          <div class="col-md-9">
            <div class="card border border-3 shadow-sm">
              <div class="card-header p-2">
                <legend class="text-center">Register</legend>
              </div>
              <div class="card-body">
                <!-- <div
                  v-if="noMatch"
                  class="text-danger bg-dark text-center p-2 rounded-2"
                >
                  Cridentials do not Match!
                </div> -->
                <div v-if="noMatch" class="alert alert-danger">
                  Cridentials do not Match!
                </div>
                <div class="tab-content">
                  <div class="active tab-pane" id="activity">
                    <div class="form-horizontal">
                      <div class="form-group my-3 row">
                        <label for="inputName" class="col-sm-2 col-form-label"
                          >Name</label
                        >
                        <div class="col-sm-10">
                          <input
                            type="name"
                            v-model="name"
                            class="form-control"
                            placeholder="Enter Your Name"
                          />
                        </div>
                      </div>

                      <div class="form-group my-3 row">
                        <label for="inputName" class="col-sm-2 col-form-label"
                          >Email</label
                        >
                        <div class="col-sm-10">
                          <input
                            type="email"
                            v-model="email"
                            class="form-control"
                            placeholder="Enter Your Email"
                          />
                        </div>
                      </div>

                      <div class="form-group my-3 row">
                        <label class="col-sm-2 col-form-label">Password</label>
                        <div class="col-sm-10">
                          <input
                            v-model="password"
                            type="password"
                            class="form-control"
                            placeholder="Enter Your Password"
                          />
                        </div>
                      </div>

                      <div class="form-group row">
                        <div class="offset-sm-2 col-sm-10">
                          <button
                            class="p-1 col-2 rounded-1 bg-dark text-white"
                            @click="register()"
                          >
                            Register
                          </button>
                        </div>
                        <a
                          href="/login"
                          class="ms-5 text-decoration-none ps-5 text-danger"
                        >
                          Already have one? Log in!
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script src="../js/register.js"></script>
