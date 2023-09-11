<template>
  <div id="wrapper">

    <MainMenu />

    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

          <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
            <i class="fa fa-bars"></i>
          </button>

          <UserMenu class="ml-auto" />
        </nav>


        <div class="container-fluid">

        </div>
      </div>

      <Footer />
    </div>
  </div>
</template>

<script setup>
import MainMenu from '../../components/menus/MainMenu.vue'
import UserMenu from '../../components/menus/UserMenu.vue'
import Footer from '../../components/Footer.vue'
</script>
