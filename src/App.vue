<script setup>
import { RouterLink, RouterView } from 'vue-router';
import BackgroundImage from '@/components/BackgroundImage.vue';
</script>

<template>
  <BackgroundImage />
  <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->
    <img src="/images/folia-logo.png" alt="Folia logo" />
    <!-- <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav> -->
  </header>
  <RouterView />
</template>

<style lang="scss" scoped>
header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    width: 75%;
    margin-bottom: 1rem;
  }
  @media only screen and (max-width: 768px) {
    img {
      width: 100%;
    }
  }
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
