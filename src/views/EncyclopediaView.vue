<template>
  <main class="encyclopedia-view">
    <Introduction />
    <Folia />
    <Startrail />
    <Essence />
    <Creatures />
    <Cosmos />
    <Republic />
    <Culture />
    <Organizations />
    <Flora />
    <History />
    <Glyphs />
  </main>
</template>

<script setup>
import Introduction from '@/components/encyclopedia/Introduction.vue';
import Folia from '@/components/encyclopedia/Folia.vue';
import Startrail from '@/components/encyclopedia/Startrail.vue';
import Essence from '@/components/encyclopedia/Essence.vue';
import Creatures from '@/components/encyclopedia/Creatures.vue';
import Cosmos from '@/components/encyclopedia/Cosmos.vue';
import Republic from '@/components/encyclopedia/Republic.vue';
import Culture from '@/components/encyclopedia/Culture.vue';
import Organizations from '@/components/encyclopedia/Organizations.vue';
import Flora from '@/components/encyclopedia/Flora.vue';
import History from '@/components/encyclopedia/History.vue';
import Glyphs from '@/components/encyclopedia/Glyphs.vue';
</script>

<style lang="scss">
.encyclopedia-view {
  section {
    p,
    h2,
    h3,
    h4,
    h5,
    h6,
    hr,
    ul,
    ol,
    table,
    img,
    article {
      scroll-margin-top: 28px;
      margin-block-end: 1.5rem;
    }
    p,
    h2,
    h3,
    h4,
    h5,
    h6 {
      text-indent: 3rem;
    }
    h1 {
      scroll-margin-top: 28px;
      width: fit-content;
      margin: 0 auto;
      text-align: center;
      color: var(--color-folia);
      background: linear-gradient(175deg, var(--color-folia) 40%, var(--color-branches) 80%);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      color: transparent;
      position: relative;
      word-spacing: 3rem;
      &:before {
        content: attr(name);
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        text-shadow: 0px 0px 3px #7c0259;
        word-spacing: 3rem;
        @media (prefers-color-scheme: light) {
          text-shadow: none;
        }
      }
      &:target::before {
        content: '';
        display: block;
        height: 180px;
        margin-top: -180px;
      }
    }
    hr {
      margin: 0 auto 1.5rem;
      width: 50%;
      background: linear-gradient(90deg, var(--color-folia) 0%, var(--color-branches) 100%);
      box-shadow: 0px 0px 3px #7c0259;
      @media (prefers-color-scheme: light) {
        box-shadow: none;
      }
    }
    li:has(h3) {
      list-style-type: none;
      margin-block-end: 1.5rem;
      h3 {
        margin-block-end: 0;
        text-indent: 0;
      }
    }
    img {
      max-width: 100%;
    }
    article {
      margin: auto;
      margin-block-end: 1.5rem;
      max-width: 1100px;
      padding: 1.5rem;
      color: var(--text-color);
      border-radius: 1rem;
      p {
        margin-block-end: 0;
      }
    }
    table {
      width: 100%;
      max-width: 1100px;
      table-layout: fixed; /* Fix column widths */
      text-align: center;
      margin: auto;
      margin-block-end: 1.5rem;
      thead {
        background-color: black;
        color: white;
        @media (prefers-color-scheme: dark) {
          background-color: white;
          color: black;
        }
      }
      th,
      td {
        width: 25%; /* For a 3-column table, adjust percentage as needed */
      }
    }
    ul,
    ol {
      p {
        text-indent: 0;
      }
    }
  }
}
@media only screen and (max-width: 768px) {
  .encyclopedia-view {
    section {
      p,
      h2,
      h3,
      h4,
      h5,
      h6 {
        text-indent: 1.5rem;
      }
      h1,
      h1:before {
        word-spacing: normal;
      }
    }
  }
}
</style>
