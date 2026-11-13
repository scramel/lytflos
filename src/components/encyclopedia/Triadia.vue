<script setup lang="ts">
const name = '⛿ Triadia ⛿';
</script>

<template>
  <section id="section-triadia">
    <h1 id="triadia" :name="name">{{ name }}</h1>
    <hr />
    <p>
      La <span class="no-decoration"><b>Ecocracia de Triadia</b></span> es el gobierno más grande e
      importante de <span class="style-lytflos">Lytflos</span>, y está constituida por siete grandes
      ciudades: <span>Ártids</span>, <span>Ftéryon</span>, <span>Dasódis</span>,
      <span>Érimos</span>, <span>Ptéryon</span>, <span>Rérecros</span> e <span>Ýperos</span>. Cada
      ciudad cuenta con un alcalde elegido democráticamente, encargado de administrar la economía
      local, gestionar proyectos municipales y satisfacer las necesidades de sus ciudadanos.
    </p>
    <p>
      Aunque las ciudades gozan de una considerable autonomía administrativa, mantienen una relación
      de cooperación e interdependencia, compartiendo recursos, conocimientos e inversiones según
      sus necesidades y posibilidades. Por ello, cada mes las Siete Ciudades presentan un informe de
      sus avances y hallazgos a los cuatro representantes de Triadia, quienes simbolizan las tres
      <span class="style-branches">ramas</span> de la sociedad y la armonía entre ellas: tres
      representantes pertenecen obligatoriamente a
      <span class="style-branches">ramas</span> distintas, mientras que el cuarto puede pertenecer a
      cualquiera de las tres.
    </p>
    <p>
      Los representantes de Triadia velan por el bienestar de la nación en su conjunto, considerando
      los intereses de sus habitantes, la seguridad colectiva y la protección de la naturaleza.
      Estos no ejercen autoridad sobre las ciudades, sino que ofrecen orientación, recomendaciones y
      mediación, procurando mantener una visión compartida entre las comunidades. Su influencia
      reside principalmente en la confianza y el respaldo de la gente que representan, por lo que
      sus opiniones tienen un peso considerable —aunque no absoluto— en las decisiones locales.
    </p>
    <p>
      Tanto los representantes como los alcaldes son elegidos democráticamente a través del
      <a href="https://es.wikipedia.org/wiki/Voto_aprobatorio">voto por aprobación</a>, tras un
      proceso de nominación en el que un comité evalúa los méritos, la trayectoria personal y las
      contribuciones sociales de los candidatos. Tanto el voto como las decisiones del comité son
      públicas, y estas últimas pueden ser apeladas democráticamente por la población.
    </p>
    <p>
      La cooperación entre las Siete Ciudades constituye una necesidad para el bienestar y la
      estabilidad de toda la nación, ya que cada una representa una parte de la seguridad, la
      riqueza natural y el valor de Triadia. De este modo, la Ecocracia procura equilibrar los
      intereses individuales y comunitarios con las responsabilidades colectivas, permitiendo que
      cada ciudad conserve su identidad sin perder de vista su sentido de pertenencia a un conjunto.
    </p>
    <p>
      Para traversar entre ciudades se utilizan
      <span>plataformas de transmutación</span>, que facilitan a los
      <span class="style-folia">folia</span> viajar e incluso trabajar entre regiones sin
      preocuparse por largas distancias. El <span>expreso dendrón</span> también conecta todas las
      ciudades, pero está cerca de descontinuar sus operaciones a favor de dichas plataformas.
    </p>
    <h2 id="artids">~ Ártids 🏛</h2>
    <p>
      Del Frisio <i>eartiids</i> (lit. «en el pasado»). Es la ciudad mejor conservada tras el
      <span>Día de la Expiación</span>. Aquí se encuentran numerosos talleres de sistemas estela,
      las mejores fuentes de información acerca de los <span>Años Anteriores</span>, y el mayor
      yacimiento arqueológico de tecnología antigua conocido.
    </p>
    <p>
      Cada dispositivo encontrado por los arqueólogos es estudiado por ingenieros de la localidad,
      quienes evalúan la posibilidad de adaptar su funcionamiento a un sistema estela si no está
      prohibido (no armas, no contaminantes, etc.). De lo contrario, los metales son reutilizados
      para reconstruir la ciudad. En cualquier caso, se prioriza aumentar la calidad de vida de los
      <span class="style-folia">folia</span>.
    </p>
    <p>
      A pesar de su inmensa infraestructura, Ártids tiene la población más pequeña de las Siete
      Ciudades. Su valor histórico, su inestabilidad estructural y su estado de abandono han
      dificultado su repoblación, hasta que algunas zonas fueron restauradas y abiertas al público.
      Para explorar áreas más profundas se requiere la compañía de un arqueólogo o un expiador.
    </p>
    <b>Puntos de interés:</b>
    <ul>
      <li
        v-for="name in [
          'Garage de <span>Tipo-II</span>',
          'Zona residencial abandonada',
          'Zona arqueológica',
          'Taller Ibelle',
        ].sort()"
        :key="name"
        v-html="name"
      ></li>
    </ul>
    <h2 id="livadi">~ Caminos de Livádi</h2>
    <p>
      Del griego <i>λιβάδι</i> (livádi, lit. «pradera»). Se trata de una inmensa colina cubierta de
      flores, situada geográficamente en el centro mismo de Triadia. Se extiende a lo largo de
      cientos de kilómetros y cuenta con senderos de piedra que conducen a cada una de las Siete
      Ciudades, aunque recorrer a pie la distancia hasta cualquiera de ellas llevaría días, o tal
      vez incluso semanas.
    </p>
    <p>
      Los senderos parten del Monumento a la Compasión: una columnata circular con una
      <span>plataforma de transmutación</span> en su centro, que marca el punto de inicio de estas
      rutas. Dicho monumento fue erigido debido a que Livádi fue el escenario de la batalla final de
      la <span>Era de la Conquista</span>, librada entre
      <span class="spoiler">
        la alianza de Nobles y Caballeros contra los Caudados de Rérecros. Tras hacerse con el
        Anillo Septenario de Rérecros —derrocando en el proceso al tirano Arthe—, Arqheid Keyes lo
        llevó a Livádi como prueba de que el régimen del tirano había llegado a su fin
      </span>
      .
    </p>
    <p>
      También es posible encontrar ruinas, en su mayoría estructuras gravemente dañadas, cubiertas
      de vegetación y carentes de valor científico o académico. Sin embargo, un búnker único y
      misterioso permanece intacto en el lugar. Aunque ha sido investigado numerosas veces, es
      posible que aún contenga pistas sobre los <span>Años Anteriores</span>.
    </p>
    <ul>
      <li
        v-for="name in ['Monumento a la Compasión', 'Búnker misterioso', 'Villa Livádi'].sort()"
        :key="name"
      >
        {{ name }}
      </li>
    </ul>
    <h2 id="dasodis">~ Dasódis 🏛</h2>
    <p>
      Del griego <i>δασώδης</i> (dasódis, lit. «arbolado»). En esta ciudad crece el Árbol Estela: un
      ejemplar del tamaño de una montaña que alcanzó su tamaño actual mediante
      <span class="style-dendrites">dendritas</span>. Esta hazaña fue obra de Koari Awa, lideresa de
      los <span>Vagantes de Rérecros</span>, inventora de la transmutación y madre de la familia
      Ōrora, quienes han continuado su legado a través de desarrollar técnicas derivadas. Un ejemplo
      del presente es el de Theod Ōrora, quien inventó las plataformas de transmutación que permiten
      a los <span class="style-folia">folia</span>
      moverse entre ciudades en un instante.
    </p>
    <p>
      El abrumador verdor del bosque de pinos, la producción de té mágico, y los hogares de estilo
      rústico arropados en la sombra del Árbol Estela son la identidad de la ciudad. Algunas
      edificaciones incluso forman parte del mismo árbol, como la de Íryos Quercus, el actual
      representante de <span class="style-caudate">caudados</span>.
    </p>
    <p>
      En el primer segundo del año 2997, justo por encima del Árbol Estela ocurrió una explosión de
      luz la cual generó una colorida onda expansiva que fue visible en toda Triadia. Aunque asustó
      a muchos habitantes, no causó ningún daño, y es comúnmente descrito como el fenómeno más
      hermoso jamás presenciado. Se rumorea que la misteriosa explosión está relacionada con los
      <span>cuarzos de ánima</span>.
    </p>
    <p>
      Lamentablemente, en el presente también tiene la fama de ser el sitio donde ocurrió la
      <span>Masacre del Hospital Midiki</span>, un incidente en el que decenas de pacientes
      perdieron la vida, presuntamente a manos de la última descendiente de la familia de
      transmutadores: Koizu Ōrora, hija de Theod. La perturbadora naturaleza de este macabro suceso
      conmocionó al mundo entero, lo que llevó a los Triadios a cuestionar la seguridad de la
      Ecocracia.
    </p>
    <b>Puntos de interés:</b>
    <ul>
      <li
        v-for="name in [
          'Árbol Estela',
          'Bosque de Dasódis',
          'Hospital Mídiki',
          'Mansión Ōrora',
          'Casa de Té Retsyo',
          'Colinas de Dasódis',
          'Cripta Umbrática',
        ].sort()"
        :key="name"
        v-html="name"
      ></li>
    </ul>
    <h2 id="erimos">~ Érimos 🏛</h2>
    <p>
      Del griego <i>έρημος</i> (érimos, lit. «desierto»). Una ciudad invertida situada en las
      cavernas debajo del <span>Cañón del Sur</span>, cuidadosamente esculpida por
      <span class="style-flowering">florecidos</span> a lo largo de siglos; es prácticamente una
      obra de arte transitable, y costosa de habitar. Aquí prospera el comercio de piedras preciosas
      gracias a su proximidad a la Mina Prohibida, y es un punto de turismo popular gracias a su
      ubicación en los Médanos del Sur y su distintiva arquitectura, única en el mundo.
    </p>
    <p>
      Justo sobre la superficie de Érimos se encuentra Pueblo Cañón, un pequeño, caluroso y humilde
      sitio en comparación. No es muy visitado excepto por inversionistas interesados en el comercio
      de <span>cerezas aparisivas</span> y oficiales con asuntos privados que atender en el
      <span>Subsuelo de Abbso</span>, la prisión más peligrosa de Triadia.
    </p>
    <p>
      Se rumorea que en Érimos y sus cercanías se contrabandean espírios y objetos raros. Por
      suerte, el siempre malhumorado aunque servicial Sheriff constantemente patrulla la región, y
      captura a cualquier malhechor con el que se topa.
    </p>
    <b>Puntos de interés:</b>
    <ul>
      <li
        v-for="name in [
          'Estanque Turquesa',
          'Observatorio Falso',
          'Granja Chordyline',
          'Subsuelo de Abbso',
          'Pueblo Cañón',
          'Mina Prohibida',
          'Zona residencial',
        ].sort()"
        :key="name"
      >
        {{ name }}
      </li>
    </ul>
    <h2 id="dendron-express">~ Expreso Dendrón</h2>
    <p>
      El sistema ferroviario que conecta todas las ciudades de
      <span>Triadia</span>. Fue desarrollado por <span>Tipo-II</span> utilizando exclusivamente
      <span>sistemas estela</span>, lo que elimina cualquier necesidad de energía eléctrica. Aunque
      fue la maravilla del momento durante su inauguración, su popularidad duró poco, ya que hoy en
      día la gente prefiere utilizar <span>plataformas de transmutación</span>.
    </p>
    <p>
      Debido a su, en esencia, nula clientela, solo queda un operador a cargo de los trayectos:
      Roserv Karsoni, un amargado, socialmente torpe y resignado individuo. Cada día, Roserv
      diligentemente recorre todas las estaciones de <span>Triadia</span> para cumplir con su cuota,
      incluso cuando no lleva pasajeros a bordo. El tren es capaz de flotar por los aires y
      desplazarse a velocidades extraordinarias, algo que a menudo toma por sorpresa a los pasajeros
      desprevenidos.
    </p>

    <h2 id="fteryon">~ Ftéryon 🏛</h2>
    <p>
      Del Griego <i>φτερωτός</i> (fterotós, lit. «plumados»). Ftéryon es un conjunto de islas
      flotantes al norte de <span class="style-triadia">Triadia</span> que se han envuelto en
      concreto para dar lugar a la ciudad de los alados. El peso del concreto ha superado la
      capacidad de las islas, por lo que un gran motor que mueve alas giratorias en el fondo de las
      mismas han sido instalados. Aquí reside el Palacio de Glaen, el cual se ha mantenido sin dueño
      desde el fin de la Era de Conquista. Es considerada la ciudad más hermosa del mundo por sus
      vistas, arquitectura, y cascadas. A pesar de ello, el costo de vivienda es bajo dado que
      normalmente solo los alados soportan el clima frío.
    </p>
    <p>
      La Sede Central de Control Climático se encuentra aquí: un lugar donde no solo se estudia la
      manipulación climática y sus efectos en la naturaleza y náturs, sino que también es la sede
      donde a los alados les asignan misiones de estabilización climática en el mundo. En otras
      palabras, aquí las personas se reúnen para evitar desastres naturales en el mundo. Ftéryon es
      también donde se lleva a cabo el Torneo de Vuelos Trienal, donde los alados más veloces se dan
      a conocer. Localizaciones de interés: Biblioteca de Ftéryon. Coliseo Celestial. Expreso
      Dendrón. Palacio de Glaen. Residencias. SCCC: Sede Central de Control Climático.
    </p>
    <b>Habitantes:</b>
    <ul>
      <li
        v-for="name in ['Nakoshi Mai', 'Nakoshi Nai', 'Nakoshi Wai', 'Lifrei Nicaul'].sort()"
        :key="name"
      >
        {{ name }}
      </li>
    </ul>
    <b>Puntos de interés:</b>
    <ul>
      <li
        v-for="name in [
          'Biblioteca',
          'Coliseo Celestial',
          'Palacio de Glaen',
          'Sede Central de Control Climático (SCCC)',
        ].sort()"
        :key="name"
      >
        {{ name }}
      </li>
    </ul>
    <h2 id="lykofos-lost-city">~ Lykófos (ciudad perdida)</h2>
    <p>
      Al norte de Lykófos se encuentran los restos de una ciudad de los Años Anteriores. Se
      considera inadecuado para vivir, pero algunos pobladores de la villa lo exploran a menudo e
      incluso se han establecido algunos como residentes. Los árboles tapan el cielo, cual cúpula.
    </p>
    <b>Habitantes:</b>
    <ul>
      <li v-for="name in ['N3V-10K'].sort()" :key="name">
        {{ name }}
      </li>
    </ul>
    <h2 id="naturia">~ Natúria</h2>
    <p>
      Considerado comúnmente el lugar más hermoso de <span class="style-triadia">Triadia</span> ,
      aquí se encuentran reunidos tantos náturs como en ningún otro lugar, algo sumamente raro en
      ellos siendo que generalmente se enojan fácilmente entre sí. Se dice que Natúria es un lugar
      que debe visitarse antes de pasar a la siguiente vida.
    </p>
    <p>
      Hay cascadas, lagunas, islas flotantes, y todas sus combinaciones posibles. Quienes llegan
      pueden llevarse náturs si ocurre que se encariñan entre sí, pero solo bajo supervisión de un
      guarda que asegure la seguridad de los visitantes y la pureza del sitio.
    </p>
    <b>Habitantes:</b>
    <ul>
      <li v-for="name in ['Nieve'].sort()" :key="name">
        {{ name }}
      </li>
    </ul>
    <h2 id="novinsoul">~ Novinsoul</h2>
    <p>
      Una academia en una isla al sureste de <span class="style-triadia">Triadia</span> dirigida por
      Delion Keyes. No es raro utilizar islas como espacios de aprendizaje, mas sí lo es para la
      educación media, por lo que se esperaría que el coste de ingreso fuese bastante alto. Resulta
      que la mayoría de los gastos los lleva el director desde sus ahorros, por lo que a ese punto,
      allí se dan clases más por el gusto de darlos que por recibir alguna compensación.
    </p>

    <h2 id="glaen-palace">~ Palacio de Glaen</h2>
    <p>
      Un lugar histórico, conocido por ser donde residieron Nelfal Glaen, su hija Nevhea Glaen, la
      noble Tani Prigemo, y otros nobles de renombre. Se trata de un conjunto de nubes que fueron
      moldeadas por alados con el expreso motivo de crear una fortaleza prácticamente imposible de
      invadir o siquiera alcanzar por otras ramas.
    </p>
    <p>
      A pesar de que Nelfal era entonces el rey de Ftéryon, culturalmente se considera a la hija
      como quien verdaderamente tomaba las riendas para proteger a su gente. Poco después del fin de
      la Era de Conquista, tanto Nevhea como Tani desaparecieron y Nelfal fue derrocado de su
      posición por su propia gente. El palacio fue dejado sin dueño, y en el presente existe como
      una reliquia del pasado.
      <span class="spoiler">
        Los habitantes de Ftéryon esperan la llegada de un Glaen o Prigemo para otorgarles el
        palacio </span
      >.
    </p>
    <h2 id="carulean-peninsula">~ Península Carúlea</h2>
    <p>
      Al noreste de Dasódis se encuentra una península el cual comprende un atolón que contiene la
      pequeña isla. Una inusual cantidad de criaturas, flora, y árboles de tamaños colosales reside
      allí. Una iniciativa para plantar un segundo árbol astronómico en el lugar es considerada,
      pero la poca población junto a la naturaleza salvaje de la zona retienen tal propuesta.
    </p>
    <p>
      Lo más que se puede encontrar en esta península son muy pequeñas villas en las zonas más
      alejadas de los animales. Es raro para turistas venir aquí, pero es un lugar muy llamativo
      para los exploradores más arriesgados, dado que se habla de posibles ruinas, cavernas, frutas
      exóticas, y minerales de gran valor. La población es muy pequeña, y prácticamente todos se
      conocen entre sí debido a ello.
    </p>
    <b>Habitantes:</b>
    <ul>
      <li
        v-for="name in ['Eialagn Kyria', 'Teri el Vagante', 'Hermanas Merosa'].sort()"
        :key="name"
      >
        {{ name }}
      </li>
    </ul>
    <h2 id="pteryon">~ Ptéryon 🏛</h2>
    <p>
      Del griego πτερύγιο (pterýgio, lit. «aleta»), es una ciudad submarina que resultó de la
      destrucción ocurrida en el Día de la Expiación. Los alados acuáticos, o en todo caso
      «aletados», lo encontraron como un lugar perfecto para refugiarse durante la Era de Conquista,
      y con el pasar de los años se ha convertido de ruinas a una ciudad bien cuidada por quienes lo
      habitan.
    </p>
    <p>
      Debido a la naturaleza de la ciudad, la importancia del Centro de Control Climático (CCC)
      local es mucho mayor al de la mayoría del resto de localizaciones. Ftéryon, considerada su
      gemela, también comparte esta necesidad.
    </p>
    <b>Habitantes:</b>
    <ul>
      <li
        v-for="name in ['Zoelia', 'Terygios Seirina', 'Eimi', 'Feles Thalasa', 'Nero Gida'].sort()"
        :key="name"
      >
        {{ name }}
      </li>
    </ul>
    <h2 id="pteryon-lost-city">~ Ptéryon (ciudad perdida)</h2>
    <p>
      En la superficie de Ptéryon se encuentra una extensión de las ruinas acuáticas. Pese no se
      considera apto para vivir, tiene la mayor probabilidad de ser la siguiente ciudad perdida en
      ser restaurada debido a que las plantas que allí han crecido con los años ahora sostienen
      estructuras antiguas que de otra forma serían inestables. Una destinación muy común entre
      exploradores dado que tiene lo que es considerado la vista más hermosa entre las ciudades
      perdidas. Es además frecuentado por los habitantes de Ptéryon.
    </p>
    <h2 id="rerecros">~ Rérecros 🏛</h2>
    <p>
      Hogar del Castillo Rérecros, alguna vez perteneciente al tirano Arthe, luego de los Keyes, y
      finalmente comprado por los <span class="spoiler">Foster</span>. El nombre del castillo y la
      ciudad fueron mantenidos en honor a la amistad que alguna vez mantuvieron los
      <span class="spoiler"> Keyes con los Rérecros </span>. La arquitectura de la ciudadela es
      maximalista, única en el mundo.
    </p>
    <p>
      Se dice que la sangre de los mejores caudados reside en esta ciudad. Entre otras cosas, la
      Torre del CERT, donde se entrenan los mejores expiadores del mundo, se encuentra en esta
      ciudad. También están la sede principal de <span>Tipo-II</span>, actualmente inactiva, y el
      Instituto de Investigación de <span class="style-dendrites">Raíces Dendríticas</span> de
      Rérecros, o sencillamente Instituto Rérecros, donde suelen ocurrir los avances más destacados
      en el campo.
    </p>
    <b>Habitantes:</b>
    <ul>
      <li
        v-for="name in [
          'Ireta Daryel',
          'Ireta Tori',
          'Foster Rigel',
          'Foster Ília',
          'Foster Xias',
          'Foster Meteoro',
        ].sort()"
        :key="name"
      >
        {{ name }}
      </li>
    </ul>
    <h2 id="abbso-subsoil">~ Subsuelo de Abbso</h2>
    <p>
      Una prisión, ubicada en Érimos, famosa por distintas razones, entre ellas ser sinónimo de la
      máxima sentencia posible por cometer un crimen, extenderse por kilómetros bajo tierra, y
      contener criaturas sumamente peligrosas además de personas. Su principal guarda es Yoshikawa
      Akihito, pero quien lo administra se trata de Shire Reeve. Solo es posible ingresar con un
      permiso del rango de la cabeza del CERT o superior.
    </p>
    <h2 id="lykofos">~ Villa Lykófos</h2>
    <p>
      Proveniente del griego λυκόφως (lykófos, lit. «crepúsculo»), una humilde villa en los límites
      del sureste, ubicado al final de los gigantescos planos y caminos de Livádi. De estética
      rural, con una gran densidad de animales y aún mayor de cultivos. Es considerado un símbolo de
      paz en la historia del mundo. Paxion se encuentra aquí: una granja de frutas pasionarias que
      fue inicialmente fundada por la familia Ōrora al decidir poblar el área junto a los Vagantes
      de Rérecros. Eventualmente, la familia Ōrora enfocaría su atención a la transmutación, y
      vendería sus tierras a los Faumiller, quienes dieron el nombre que posee la granja
      actualmente.
    </p>
    <p>
      Otros lugares de interés incluyen la biblioteca pública donde reside cierta cuentista, la
      ciudad perdida de la villa, el bosque de Lykófos, una herrería, y la repostería Light DeLight.
    </p>
    <p>
      Aquí yace el filamento que sostiene la semilla Estýlar. La villa fue inicialmente poblada por
      los Vagantes de Rérecros en su búsqueda por refugio de la guerra. Lykófos se convirtió en una
      villa de muy rica gastronomía basada en tartas, jugos, panes, néctares, sidra y otros
      productos hechos a base de fruta pasionaria. Cada último día de la semana, los pobladores de
      la villa se reúnen para celebrar su bienestar y amistad.
    </p>
    <h2 id="yperos">~ Ýperos 🏛</h2>
    <p>
      Derivado de ύπερος άνθους (ýperos ánthous, lit. «pistilo»). La capital de
      <span class="style-triadia">Triadia</span> , una gigantesca ciudad que se encuentra cerca de
      Livádi, a su noroeste. Se le reconoce por sus grandes edificios, vehículos, y sistemas estela
      a base de engranajes cuya estética es muy steampunk. Un lugar caro donde vivir.
    </p>
    <p>
      Ýperos es hogar de muchos edificios importantes, algunos incluso de valor histórico: el Hogar
      de Ýperos, donde ocurren las actividades administrativas de los Representantes de la
      Ecocracia; la Universidad Central de <span class="style-triadia">Triadia</span> , donde se han
      graduado numerosos estudiosos históricos; la Estación Estelar Central, donde se procesa la
      estela y se distribuye al mundo en vaterías; el Centro Espejismo, lugar donde se administran
      las comunicaciones a distancia; y muchos otros lugares de valor más turístico y que las
      personas frecuentan para entretenerse, como parques temáticos, museos, teatros, estadios,
      entre otros.
    </p>
  </section>
</template>
