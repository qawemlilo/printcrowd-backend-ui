<template>
  <div class="dropdown" @click-away="close">
    <a
      class="btn btn-primary dropdown-toggle"
      href="#"
      role="button"
      id="dropdownMenuLink"
      @click.prevent="toggle"
      aria-haspopup="true"
      :aria-expanded="show">
      <i class="fa fa-user"></i>
      {{ user?.first_name }}
    </a>

    <div
      class="dropdown-menu dropdown-menu-right"
      aria-labelledby="dropdownMenuLink"
      :class="{show: show}"
    >
      <a class="dropdown-item" href="#">
        <i class="fa fa-user"></i> Profile
      </a>
      <a class="dropdown-item" href="#">
        <i class="fa fa-lock-open"></i>
        Change Password
      </a>
      <a class="dropdown-item" href="#">
        <i class="fa fa-cog"></i>
        Settings
      </a>
      <div class="dropdown-divider"></div>
      <button
        class="dropdown-item"
        @click.prevent="logout">
        <i class="fa fa-lock"></i>
        Logout
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuth } from '../../composables/auth'

const { user, getUser, logout } = useAuth();

const show = ref(false);

function toggle(e) {
  e.preventDefault();

  show.value = !show.value;
}

function close(e) {
  console.log('close called')
  show.value = false;
}

if(!user) {
  getUser();
}
</script>
