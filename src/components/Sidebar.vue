<template>
  <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

    <!-- Sidebar - Brand -->
    <a class="sidebar-brand d-flex align-items-center justify-content-center" href="#">
      <div class="sidebar-brand-icon rotate-n-15">
        <i class="fas fa-print"></i>
      </div>
      <div class="sidebar-brand-text mx-3">PrintCrowd</div>
    </a>

    <!-- Divider -->
    <hr class="sidebar-divider">

    <!-- Nav Item - Dashboard -->
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
    <!-- Divider -->
    <hr class="sidebar-divider d-none d-md-block mt-3">
  </ul>
</template>

<script setup>
import { ref } from 'vue'
</script>
