<template>
  <div id="wrapper">

    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

      <a class="sidebar-brand d-flex align-items-center justify-content-center" href="#">
        <div class="sidebar-brand-icon rotate-n-15">
          <i class="fas fa-print"></i>
        </div>
        <div class="sidebar-brand-text mx-3">PrintCrowd</div>
      </a>

      <hr class="sidebar-divider">

      <li class="nav-item active">
        <a class="nav-link py-2" href="#">
          <i class="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link py-2" href="#">
          <i class="fas fa-shopping-cart"></i>
          <span>All Processing</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link py-2" href="#">
          <i class="fas fa-fw fa-list-alt"></i>
          <span>Orders Processing</span>
        </a>
      </li>

      <hr class="sidebar-divider d-none d-md-block mt-3">
    </ul>

    <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

            <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
              <i class="fa fa-bars"></i>
            </button>

            <button
              class="btn btn-primary ml-auto"
              @click.prevent="logout">
              <i class="fa fa-lock"></i>
              Logout
            </button>
            <div class="dropdown">
              <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown link
              </a>

              <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </div>
          </nav>

          <div class="container-fluid">

          </div>
        </div>


        <footer class="sticky-footer bg-white">
          <div class="container my-auto">
            <div class="copyright text-center my-auto">
              <span>Copyright &copy; PrintCrowd 2023</span>
            </div>
          </div>
        </footer>
    </div>
  </div>
</template>

<script setup>
import { useAuth } from '../../composables/auth'

const { logout } = useAuth();
</script>
