<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-xl-10 col-lg-12 col-md-9">
        <div class="card o-hidden border-0 shadow-lg my-5">
          <div class="card-body p-0">
            <div class="row">
              <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
              <div class="col-lg-6">
                <div class="p-5">
                  <div class="text-center">
                    <h1 class="h4 text-gray-900 mb-4">
                        Sign In
                    </h1>
                  </div>
                  <form class="user" @submit.prevent="loginUser">
                    <div class="form-group">
                      <input
                        type="email"
                        v-model="form.email"
                        class="form-control form-control-user"
                        id="exampleInputEmail"
                        aria-describedby="emailHelp"
                        placeholder="Email Address...">
                      </div>
                      <div class="form-group">
                        <input
                          type="password"
                          v-model="form.password"
                          class="form-control form-control-user"
                          id="exampleInputPassword"
                          placeholder="Password">
                      </div>
                      <div class="form-group">
                        <div class="custom-control custom-checkbox small">
                            <input type="checkbox" class="custom-control-input" id="customCheck"
                            >
                            <label class="custom-control-label" for="customCheck">
                                Remember Me
                            </label>
                          </div>
                      </div>
                      <button
                        type="submit"
                        class="btn btn-primary btn-user btn-block">
                          Login
                      </button>
                  </form>
                  <hr>
                  <div class="text-center">
                    <router-link class="small" to="/forgot-password">
                    Forgot Password
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useAuth } from '../../composables/auth'


const { login } = useAuth();

const form = reactive({
  email: '',
  password: ''
});


const loginUser = async (e) => {
  e.preventDefault();

  await login({ ...form });
}
</script>
