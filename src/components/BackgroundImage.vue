<template>
  <img src="/images/background-image.jpg" alt="Background image" />
</template>

<style lang="scss" scoped>
img {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
  filter: grayscale(1);
  mix-blend-mode: multiply;
  transition: 0s !important;
  @media (prefers-color-scheme: light) {
    opacity: 0.1;
  }
}
</style>
