<script setup>
const name = '⛿ República ⛿';
</script>

<template>
  <section id="section-republic">
    <h1 id="republic" :name="name">{{ name }}</h1>
    <hr />
    <p>
      La República de <span class="style-triadia">Triadia</span> se refiere al territorio que ocupa
      dicho gobierno en <span class="style-lytflos">Lytflos</span>. No existen divisiones
      continentales o fronteras entre países, ya que la república es el único gobierno existente.
      Este gobierno, y la población del mundo en general, se toma muy en serio el cuidado de la
      naturaleza y los animales.
    </p>
    <p>
      La república está conformada por siete ciudades principales: Artids, Ftéryon, Dassódils,
      Érimos, Ptéryon, Rérecros, e Ýperos, todas administradas por alcaldes y con numerosos pueblos
      y villas que las conforman. Aunque el expreso dendrón conecta con todas las ciudades, el mismo
      está a punto de abandonar sus funciones a favor de las plataformas transmutadoras.
    </p>
    <p>
      También existen territorios inexplorados que los habitantes de
      <span class="style-triadia">Triadia</span> desean estudiar y repoblar. Estos no cuentan como
      parte de la república.
    </p>
    <h2 id="artids">~ Artids 🏛</h2>
    <p>
      Del frisio eartiids (lit. “antes”), es la primera ciudad descubierta en decente estado después
      del Día de la Expiación. Aquí se ha encontrado la mayor información acerca del pasado del
      mundo y se estudia el funcionamiento de la tecnología. Si un dispositivo es considerado dañino
      a la naturaleza, su metal es reutilizado para reconstruir la misma ciudad, y de otra forma es
      enviado al Taller Ibelle para medir su valor y evaluar la posibilidad de reproducirlo en masa
      para aumentar la calidad de vida de los folia.
    </p>
    <p>
      Recientemente se ha abierto Artids al público para ser poblada, la cual la convierte en la
      séptima ciudad de
      <span class="style-triadia">Triadia</span> , pero aún existen zonas peligrosas y prohibidas a
      las que solo es permitido ir con la compañía de un arqueólogo o un expiador. Una sede de Ikaki
      solía funcionar aquí, pero en el presente sus funciones han sido suspendidas y el edificio ha
      sido convertido en un almacén.
    </p>
    <b>Habitantes:</b>
    <ul>
      <li v-for="name in ['Stella Ibelle', 'Kaisha'].sort()">{{ name }}</li>
    </ul>
    <b>Localizaciones:</b>
    <ul>
      <li
        v-for="name in ['Garage de Ikaki', 'Zona residencial abandonada', 'Taller Ibelle'].sort()"
      >
        {{ name }}
      </li>
    </ul>
    <h2 id="livadi">~ Caminos de Livádi</h2>
    <p>
      Del griego λιβάδι (livádi, lit. “prado”), se trata de un gigantesco campo cuyo centro tiene
      una inmensa cama flores, ubicado cerca del centro de
      <span class="style-triadia">Triadia</span> . Desde Livádi se puede llegar a cualquiera de las
      Siete Ciudades a pie, aunque el viaje tomaría días. Aquí se libró la última batalla de la Era
      de Conquista en el año 2636
      <span class="spoiler">
        entre la alianza de los Nobles de Glaen y la Caballería de Aricontes contra los Caudados de
        Rérecros. Una vez Arqheid Keyes derrocó a Arthe Rérecros y se hizo con el Anillo Septenario
        de la ciudadela, lo llevó a Livádi como prueba del fin de su tiranía
      </span>
      .
    </p>
    <p>
      Hay algunas ruinas esparcidas en el espacio que comprende Livádi, pero la mayoría son
      estructuras que no tienen valor alguno en el presente, excepto por uno: un especie de búnker
      subterráneo que contiene una central eléctrica. Aunque los generadores en sí se ven
      insalvables, es posible que las instalaciones contengan pistas sobre los Años Anteriores.
    </p>
    <p>
      En el prado se encuentran flores gigantescas, tan grandes y sólidas que sus pétalos sostienen
      tierra por sobre la que se puede caminar y construir. Localizaciones de interés: Expreso
      Dendrón. Monumento al 2636. Ruinas: Central Eléctrica.
    </p>
    <b>Localizaciones:</b>
    <ul>
      <li v-for="name in ['Monumento al 2636', 'Ruinas (Central Eléctrica)'].sort()">
        {{ name }}
      </li>
    </ul>
    <h2 id="dasodis">~ Dassódils 🏛</h2>
    <p>
      Proveniente del griego δασώδης (Dassódils, lit. “arbolado”), esta ciudad es una de las más
      importantes del mundo, pues aquí crece y se produce la mayoría de las flores y té del mundo
      para ser exportados a otras ciudades. Conocido también por sus especialistas talentosos y
      especialmente la familia Ōrora, progenitores de la transmutación, sembradores del árbol
      planetario, e inventores de las plataformas transmutadoras. Completamente opuesto a la
      capital, aquí la ciudad se identifica por su verdor y sus hogares de aspecto más rural; casi
      todas las viviendas están cubiertas por los árboles de la zona, y algunas son parte de los
      mismos.
    </p>
    <p>
      Al inicio del año 2997 ocurrió una explosión de luz en la copa del árbol planetario que fue
      directamente visible para al menos la mitad de los habitantes del mundo. La teoría más popular
      es que se trató de una muestra de la energía contenida en los cuarzos de ánima, mas nadie está
      seguro de qué causó realmente tal fenómeno, y la mayoría desacredita la existencia de dichos
      cuarzos.
    </p>
    <p>
      Por desgracia, esta ciudad es también conocida por ser el lugar donde ocurrió la Masacre de
      Dassódils, un incidente donde decenas de pacientes del Hospital Doshi fueron asesinados. La
      naturaleza misteriosa y sangrienta del caso trajo mucha conmoción y llevó a las personas a
      cuestionar la seguridad de la república.
    </p>
    <b>Habitantes:</b>
    <ul>
      <li
        v-for="name in [
          'Sucreuq Ílyos',
          'Retsyo Ochamo',
          'Retsyo Rowe',
          'Diz Elial',
          'Ōrora Theod',
          'Ōrora Díanys',
        ].sort()"
      >
        {{ name }}
      </li>
    </ul>
    <b>Localizaciones:</b>
    <ul>
      <li
        v-for="name in [
          'Árbol Astronómico',
          'Bosque de Dassódils',
          'Hospital Mídiki',
          'Mansión Ōrora',
          'Casa de Té Retsyo',
        ].sort()"
      >
        {{ name }}
      </li>
    </ul>
    <h2 id="erimos">~ Érimos 🏛</h2>
    <p>
      Una ciudad bajo un cañón, cuidadosamente tallada de piedra a través de los años, sostenida por
      el techo de la cueva donde se encuentra. Muchas personas aquí venden piedras preciosas gracias
      a su cercanía a la Mina Prohibida. Por su lugar en el mundo (médanos del sur) y la unicidad de
      sus vistas, es un lugar popular entre los turistas.
    </p>
    <p>
      En la superficie está Pueblo Cañón, un pequeño y caluroso lugar. No muchos visitan este pueblo
      excepto inversionistas interesados en exportar cerezas aparisivas a otras ciudades, y otros
      que están de paso para invertir en piedras preciosas. Existen rumores de tratos de naturaleza
      no muy legal: contrabando de espírios y objetos raros. Este lugar es constantemente vigilado
      por el sheriff.
    </p>
    <b>Habitantes:</b>
    <ul>
      <li
        v-for="name in [
          'Dewa Oroke',
          'Faumiller Cadence',
          'Faumiller Clamare',
          'Wilger Reeves',
          'Wren',
        ].sort()"
      >
        {{ name }}
      </li>
    </ul>
    <b>Localizaciones:</b>
    <ul>
      <li
        v-for="name in [
          'Estanque Turquesa',
          'Observatorio Falso',
          'Sello Discográfico Chordyline',
          'Subsuelo de Abbso',
        ].sort()"
      >
        {{ name }}
      </li>
    </ul>
    <h2 id="dendron-express">~ Expreso Dendrón</h2>
    <p>
      También conocido como solamente Dendrón, es un sistema ferroviario que conecta con todas las
      ciudades de <span class="style-triadia">Triadia</span> . Fue construído por Ikaki usando nada
      más que sistemas estela, lo cual le permite funcionar exclusivamente a base de estela sin
      necesidad de generar energía eléctrica. En el presente es mayormente ignorado a favor de las
      plataformas transmutadoras.
    </p>
    <p>
      Debido a su prácticamente nula clientela, solo un único maquinista está a cargo de los viajes:
      Roserv Karsoni, un amargado, socialmente torpe, y conformista sujeto. Él viaja diligentemente
      todos los días alrededor del mundo para cumplir su cuota, incluso si no lleva pasajeros. El
      tren puede flotar por los aires y moverse a velocidades exorbitantes, lo cual toma
      desprevenidos a los clientes ignorantes de este hecho.
    </p>

    <h2 id="fteryon">~ Ftéryon 🏛</h2>
    <p>
      Del griego φτερωτός (fterotós, lit. “plumados”), es un conjunto de islas flotantes al norte de
      <span class="style-triadia">Triadia</span> que se han envuelto en concreto para dar lugar a la
      ciudad de los alados. El peso del concreto ha superado la capacidad de las islas, por lo que
      un gran motor que mueve alas giratorias en el fondo de las mismas han sido instalados. Aquí
      reside el Palacio de Glaen, el cual se ha mantenido sin dueño desde el fin de la Era de
      Conquista. Es considerada la ciudad más hermosa del mundo por sus vistas, arquitectura, y
      cascadas. A pesar de ello, el costo de vivienda es bajo dado que normalmente solo los alados
      soportan el clima frío.
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
      <li v-for="name in ['Nakoshi Mai', 'Nakoshi Nai', 'Nakoshi Wai', 'Lifrei Nicaul'].sort()">
        {{ name }}
      </li>
    </ul>
    <b>Localizaciones:</b>
    <ul>
      <li
        v-for="name in [
          'Biblioteca',
          'Coliseo Celestial',
          'Palacio de Glaen',
          'Sede Central de Control Climático (SCCC)',
        ].sort()"
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
      <li v-for="name in ['N3V-10K'].sort()">
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
      <li v-for="name in ['Nieve'].sort()">
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
      Al noreste de Dassódils se encuentra una península el cual comprende un atolón que contiene la
      pequeña isla. Una inusual cantidad de criaturas, flora, y árboles de tamaños extremos reside
      allí. Una iniciativa para plantar un segundo árbol astronómico en el lugar es considerada,
      pero la poca población junto a la naturaleza salvaje de la zona retienen tal propuesta.
    </p>
    <p>
      Lo más que se puede encontrar en esta península son muy pequeñas villas en las zonas más
      alejadas de los animales. Es raro para turistas venir aquí, pero es un lugar muy llamativo
      para exploradores más extremos, dado que se habla de posibles ruinas, cavernas, frutas
      exóticas, y minerales de gran valor. La población es muy pequeña, y prácticamente todos se
      conocen entre sí debido a ello.
    </p>
    <b>Habitantes:</b>
    <ul>
      <li v-for="name in ['Eialagn Kyria', 'Teri el Vagante', 'Hermanas Merosa'].sort()">
        {{ name }}
      </li>
    </ul>
    <h2 id="pteryon">~ Ptéryon 🏛</h2>
    <p>
      Del griego πτερύγιο (pterýgio, lit. “aleta”), es una ciudad submarina que resultó de la
      destrucción ocurrida en el Día de la Expiación. Los alados acuáticos, o en todo caso
      “aletados”, lo encontraron como un lugar perfecto para refugiarse durante la Era de Conquista,
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
      ciudad. También están la sede principal de Ikaki, actualmente inactiva, y el Instituto de
      Investigación de
      <span class="style-dendrites">Raíces Dendríticas</span> de Rérecros, o sencillamente Instituto
      Rérecros, donde suelen ocurrir los avances más destacados en el campo.
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
      Proveniente del griego λυκόφως (lykófos, lit. “crepúsculo”), una humilde villa en los límites
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
      Derivado de ύπερος άνθους (ýperos ánthous, lit. “pistilo”). La capital de
      <span class="style-triadia">Triadia</span> , una gigantesca ciudad que se encuentra cerca de
      Livádi, a su noroeste. Se le reconoce por sus grandes edificios, vehículos, y sistemas estela
      a base de engranajes cuya estética es muy steampunk. Un lugar caro donde vivir.
    </p>
    <p>
      Ýperos es hogar de muchos edificios importantes, algunos incluso de valor histórico: el Hogar
      de Ýperos, donde ocurren las actividades administrativas de los Representantes de la
      República; la Universidad Central de <span class="style-triadia">Triadia</span> , donde se han
      graduado numerosos estudiosos históricos; la Estación Estelar Central, donde se procesa la
      estela y se distribuye al mundo en vaterías; el Centro Espejismo, lugar donde se administran
      las comunicaciones a distancia; y muchos otros lugares de valor más turístico y que las
      personas frecuentan para entretenerse, como parques temáticos, museos, teatros, estadios,
      entre otros.
    </p>
  </section>
</template>
