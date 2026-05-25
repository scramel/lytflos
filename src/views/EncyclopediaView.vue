<template>
  <main ref="doc" class="encyclopedia-view">
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
import { ref, onMounted } from 'vue';
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

// terms links map
const dictionary = [
  // generalities
  { href: '#cosmos', pattern: /^lytflos$/ },
  { href: '#triadia', pattern: /^(ecocracia de triadia|triadia)$/ },
  { href: '#folia', pattern: /^folia$/ },
  // branches
  { href: '#branches', pattern: /^ramas?$/ },
  { href: '#winged', pattern: /^alad[oa]s?$/ },
  { href: '#caudate', pattern: /^caudad[oa]s?$/ },
  { href: '#flowering', pattern: /^florecid[oa]s?$/ },
  {
    href: '#hybrids',
    pattern:
      /^(híbrid[oa]s?|(alad[oa]s?|caudad[oa]s?|florecid[oa]s?)-(alad[oa]s?|caudad[oa]s?|florecid[oa]s?))$/,
  },
  // startrail
  { href: '#startrail', pattern: /^estela$/ },
  { href: '#roots', pattern: /^raí(z|ces)$/ },
  {
    href: '#elemental-manipulation',
    pattern: /^(elemento natural|elementos naturales|manipulación elemental|elementos?)$/,
  },
  { href: '#solar-wings', pattern: /^alas solares$/ },
  { href: '#dendrites', pattern: /^dendritas?$/ },
  { href: '#stellar-pollen', pattern: /^polen (estelar|ondular|estelar u ondular)$/ },
  { href: '#nodes', pattern: /^nodos?$/ },
  { href: '#anthesis', pattern: /^antesis?$/ },
  { href: '#stellar-phenomena', pattern: /^(fenómeno estelar|fenómenos estelares)$/ },
  { href: '#startrail-systems', pattern: /^sistemas? estela$/ },
  { href: '#iris-fragments', pattern: /^fragmentos de iris$/ },
  { href: '#golden-bubbles', pattern: /^burbujas de oro$/ },
  // essence
  { href: '#essence', pattern: /^(ánimo|negatividad|positividad|lucero|umbría)$/ },
  { href: '#natur', pattern: /^náturs?$/ },
  { href: '#meion', pattern: /^meion$/ },
  { href: '#chimera', pattern: /^(quimera|meion quimérico)$/ },
  { href: '#dracolia', pattern: /^(dracolia|meion dracolia)$/ },
  { href: '#shade', pattern: /^sombras?$/ },
  { href: '#expiation', pattern: /^(expiad[oa]s?|expiación|expiaciones)?$/ },
  { href: '#expiator', pattern: /^expiador(a|[ea]s)?$/ },
  { href: '#exegete', pattern: /^exégetas?$/ },
  { href: '#negative-orb', pattern: /^(orbe negativo|orbes negativos)$/ },
  // organizations
  { href: '#cert', pattern: /^cert$/ },
  { href: '#type-ii', pattern: /^tipo-ii$/ },
  { href: '#ivlis', pattern: /^ivlis$/ },
  // ... other terms
];

// auto-link terms logic
const doc = ref(null);
onMounted(() => {
  // safety check
  if (!doc.value) return;
  // keep track of seen terms
  let seen;
  // loop through all sections
  const sections = doc.value.querySelectorAll('section');
  sections.forEach((section) => {
    // clear seen terms
    seen = new Set();
    // loop through all spans inside the current section
    const spans = section.querySelectorAll('span');
    spans.forEach((span) => {
      // ensure accurate mapping (e.g., "Lytflos" -> "lytflos")
      const text = span.textContent.trim().toLowerCase();
      // find the first dictionary entry whose regex matches the text
      const match = dictionary.find((entry) => entry.pattern.test(text));
      // only handle match if not previously used in the current section
      if (match && !seen.has(match.href)) {
        seen.add(match.href);
        // turn span into a link
        const anchor = document.createElement('a');
        Array.from(span.attributes).forEach((attr) => anchor.setAttribute(attr.name, attr.value));
        anchor.setAttribute('href', match.href);
        anchor.innerHTML = span.innerHTML;
        span.replaceWith(anchor);
      }
    });
  });
});
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
        background-color: var(--color-invert);
        color: var(--color-background);
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
