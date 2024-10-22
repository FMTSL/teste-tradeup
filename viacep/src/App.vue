<script setup lang="ts">

  import { RouterLink, RouterView } from 'vue-router'
  import Inicio from '@/components/Inicio.vue'

</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <RouterLink class="navbar-brand" to="/">
          <img
            alt="Tradeup Logo"
            class="logo"
            src="@/assets/logo.png"
            width="125"
          />
        </RouterLink>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="navbar" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <Inicio msg="Buscar Cep" />
            </li>
            <li class="nav-item">
              <RouterLink class="btn btn-primary" to="/">Início</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="btn btn-success" to="/search">Buscar</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <RouterView />
  </header>
</template>

<style scoped>
.logo {
  margin-top: 10px;
}
</style>
