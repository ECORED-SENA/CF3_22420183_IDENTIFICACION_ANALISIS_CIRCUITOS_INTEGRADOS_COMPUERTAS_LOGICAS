<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Representaciones de las compuertas lógicas
    .row.mb-4
      .col-12
        .p-3.bg-c2(data-aos="fade-down")
          .row.align-items-center
            .col-md-auto.mb-4.mb-md-0
              figure
                img(src="@/assets/curso/tema1/img1.svg", alt="", style="width: 80px").m-auto
            .col
              p.mb-0 Las compuertas lógicas son elementos esenciales para construir circuitos combinacionales, ya que permiten implementar funciones booleanas.
    p.mb-4(data-aos="fade-right") A continuación, se realiza las diferentes representaciones de cada una de las puertas lógicas:
    .row.mb-4
      .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
        .p-3.bg-c3
          p #[b COMPUERTA #[i NOT] (Inversor)]. Su función es negar el estado lógico que tiene a la entrada.
          .titulo-sexto.color-acento-contenido
            p.mb-0 #[b Figura 1.] Compuerta #[i NOT]
          .row.align-items-center
            .col-lg-6.mb-4.mb-lg-0
              .p-2.bg-white
                p.text-center #[b Símbolo lógico y normalizado]
                figure
                  img(src="@/assets/curso/tema1/img2.svg", alt="Representación lógica y tabla de verdad de la compuerta NOT. Incluye el símbolo lógico, tabla de verdad y función lógica: A = A̅.", style="width: 400px").m-auto
            .col-lg-4.mb-4.mb-lg-0
              .p-2.bg-white
                p.text-center #[b Tabla de verdad]
                table
                  thead(style="background-color: #FD96CA")
                    tr
                      th.text-center Entrada
                      th.text-center Salida
                  tbody
                    tr(style="background-color: #FED4E9")
                      td.text-center A
                      td.text-center A̅ o A’
                    tr(style="background-color: #FEE9F4")
                      td.text-center 0
                      td.text-center 1
                    tr(style="background-color: #FED4E9")
                      td.text-center 1
                      td.text-center 0
            .col-lg-2
              .p-2.bg-white
                p.text-center #[b Función lógica]
                .row.justify-content-center
                  .col-auto
                    .p-2.bg-c4
                      p.mb-0 #[b A = A̅ = A’]
      .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema1/img1.png", alt="", style="width: 400px").m-auto
    .row.mb-4
      .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
        .p-3.bg-c3
          p #[b COMPUERTA #[i OR] (O)]. Su función es realizar la operación “+” con los estados lógicos.
          .titulo-sexto.color-acento-contenido
            p.mb-0 #[b Figura 2.] Compuerta #[i OR]
          .row.align-items-center.mb-3
            .col-lg-5.mb-4.mb-lg-0
              .p-2.bg-white
                p.text-center #[b Símbolo lógico y normalizado]
                figure
                  img(src="@/assets/curso/tema1/img4.svg", alt="Representación lógica y tabla de verdad de la compuerta OR. Incluye el símbolo lógico, tabla de verdad y función lógica: S = A + B.", style="width: 400px").m-auto
            .col-lg-5.mb-4.mb-lg-0
              .p-2.bg-white
                p.text-center #[b Tabla de verdad]
                table
                  thead(style="background-color: #FD96CA")
                    tr
                      th.text-center(colspan="2") Entrada
                      th.text-center Salida
                  tbody
                    tr(style="background-color: #FED4E9")
                      td.text-center A
                      td.text-center B
                      td.text-center S = A + B
                    tr(style="background-color: #FEE9F4")
                      td.text-center 0
                      td.text-center 0
                      td.text-center 0
                    tr(style="background-color: #FED4E9")
                      td.text-center 0
                      td.text-center 1
                      td.text-center 1
                    tr(style="background-color: #FEE9F4")
                      td.text-center 1
                      td.text-center 0
                      td.text-center 1
                    tr(style="background-color: #FED4E9")
                      td.text-center 1
                      td.text-center 1
                      td.text-center 1
            .col-lg-2
              .p-2.bg-white
                p.text-center #[b Función lógica]
                .row.justify-content-center
                  .col-auto
                    .p-2.bg-c4
                      p.mb-0 #[b S = A + B]
          .row
            .col-12
              .p-3.bg-c5
                .row.align-items-center
                  .col-md-auto.mb-4.mb-md-0
                    figure
                      img(src="@/assets/curso/tema1/img5.svg", alt="", style="width: 60px").m-auto
                  .col
                    p.text-white.mb-0 #[b Dato importante: las compuertas lógicas pueden tener más de dos entradas lógicas.]
      .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema1/img3.svg", alt="", style="width: 400px").m-auto
    .row.mb-4
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema1/img2.png", alt="", style="width: 400px").m-auto
      .col-lg-8(data-aos="fade-left")
        .p-3.bg-c6
          p #[b COMPUERTA #[i AND] (Y)]. Su función es realizar la operación “ . ” con los estados lógicos.
          .titulo-sexto.color-acento-contenido
            p.mb-0 #[b Figura 3.] Compuerta #[i AND]
          .row.align-items-center
            .col-lg-5.mb-4.mb-lg-0
              .p-2.bg-white
                p.text-center #[b Símbolo lógico y normalizado]
                figure
                  img(src="@/assets/curso/tema1/img6.svg", alt="Representación lógica y tabla de verdad de la compuerta AND. Incluye el símbolo lógico, tabla de verdad y función lógica: S = A . B.", style="width: 400px").m-auto
            .col-lg-5.mb-4.mb-lg-0
              .p-2.bg-white
                p.text-center #[b Tabla de verdad]
                table
                  thead(style="background-color: #FD96CA")
                    tr
                      th.text-center(colspan="2") Entrada
                      th.text-center Salida
                  tbody
                    tr(style="background-color: #FED4E9")
                      td.text-center A
                      td.text-center B
                      td.text-center S = A . B
                    tr(style="background-color: #FEE9F4")
                      td.text-center 0
                      td.text-center 0
                      td.text-center 0
                    tr(style="background-color: #FED4E9")
                      td.text-center 0
                      td.text-center 1
                      td.text-center 0
                    tr(style="background-color: #FEE9F4")
                      td.text-center 1
                      td.text-center 0
                      td.text-center 0
                    tr(style="background-color: #FED4E9")
                      td.text-center 1
                      td.text-center 1
                      td.text-center 1
            .col-lg-2
              .p-2.bg-white
                p.text-center #[b Función lógica]
                .row.justify-content-center
                  .col-auto
                    .p-2.bg-c4
                      p.mb-0 #[b S = A . B]
    .row.mb-4
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema1/img3.png", alt="", style="width: 400px").m-auto
      .col-lg-8(data-aos="fade-left")
        .p-3.bg-c6
          p #[b COMPUERTA #[i XOR] (#[i Or] Exclusiva)]. La compuerta #[i XOR], conocida como O Exclusiva, es un elemento lógico que realiza la operación de disyunción exclusiva. Su salida es verdadera (1) únicamente cuando las entradas son diferentes entre sí; es decir, cuando una entrada es 1 y la otra es 0.
          .titulo-sexto.color-acento-contenido
            p.mb-0 #[b Figura 4.] Compuerta #[i XOR]
          .row.align-items-center
            .col-lg-5.mb-4.mb-lg-0
              .p-2.bg-white
                p.text-center #[b Símbolo lógico y normalizado]
                figure
                  img(src="@/assets/curso/tema1/img7.svg", alt="Representación lógica y tabla de verdad de la compuerta XOR. Incluye el símbolo lógico, tabla de verdad y función lógica: S = A ⊕ B.", style="width: 400px").m-auto
            .col-lg-5.mb-4.mb-lg-0
              .p-2.bg-white
                p.text-center #[b Tabla de verdad]
                table
                  thead(style="background-color: #FD96CA")
                    tr
                      th.text-center(colspan="2") Entrada
                      th.text-center Salida
                  tbody
                    tr(style="background-color: #FED4E9")
                      td.text-center A
                      td.text-center B
                      td.text-center S = A ⊕ B
                    tr(style="background-color: #FEE9F4")
                      td.text-center 0
                      td.text-center 0
                      td.text-center 0
                    tr(style="background-color: #FED4E9")
                      td.text-center 0
                      td.text-center 1
                      td.text-center 1
                    tr(style="background-color: #FEE9F4")
                      td.text-center 1
                      td.text-center 0
                      td.text-center 1
                    tr(style="background-color: #FED4E9")
                      td.text-center 1
                      td.text-center 1
                      td.text-center 0
            .col-lg-2
              .p-2.bg-white
                p.text-center #[b Función lógica]
                .row.justify-content-center.mb-3
                  .col-auto
                    .p-2.bg-c4
                      p.mb-0 #[b S = A ⊕ B]
                p.text-center.mb-0 #[b A ⊕ B = A . B̅  + A̅ . B ]
    .row.justify-content-center.mb-4
      .col-lg-10(data-aos="fade-down")
        .p-3.bg-c3
          p #[b COMPUERTA #[i NOR] (No O)]. Su función es realizar negación a la salida de la operación OR ó “+”.
          .titulo-sexto.color-acento-contenido
            p.mb-0 #[b Figura 5.] Compuerta #[i NOR]
          .row.align-items-center
            .col-lg-4.mb-4.mb-lg-0
              .p-2.bg-white
                p.text-center #[b Símbolo lógico y normalizado]
                figure
                  img(src="@/assets/curso/tema1/img8.svg", alt="Representación lógica y tabla de verdad de la compuerta NOR. Incluye el símbolo lógico, tabla de verdad y función lógica: S = (A + B̅).", style="width: 400px").m-auto
            .col-lg-5.mb-4.mb-lg-0
              .p-2.bg-white
                p.text-center #[b Tabla de verdad]
                table
                  thead(style="background-color: #FD96CA")
                    tr
                      th.text-center(colspan="2") Entrada
                      th.text-center Salida
                  tbody
                    tr(style="background-color: #FED4E9")
                      td.text-center A
                      td.text-center B
                      td.text-center S = A̅ + B̅
                    tr(style="background-color: #FEE9F4")
                      td.text-center 0
                      td.text-center 0
                      td.text-center 1
                    tr(style="background-color: #FED4E9")
                      td.text-center 0
                      td.text-center 1
                      td.text-center 0
                    tr(style="background-color: #FEE9F4")
                      td.text-center 1
                      td.text-center 0
                      td.text-center 0
                    tr(style="background-color: #FED4E9")
                      td.text-center 1
                      td.text-center 1
                      td.text-center 0
            .col-lg-3
              .p-2.bg-white
                p.text-center #[b Función lógica]
                .row.justify-content-center.mb-3
                  .col-auto
                    .p-2.bg-c4
                      p.mb-0 #[b S = A̅ + B̅ = (A + B)’]
                p.text-center Es también igual a:
                figure
                  img(src="@/assets/curso/tema1/img9.svg", alt="", style="width: 150px").m-auto
    .row.justify-content-center.mb-4
      .col-lg-10(data-aos="fade-right")
        .p-3.bg-c3
          p #[b COMPUERTA #[i NAND] (No Y)]. Su función es realizar negación a la salida de la  operación AND o “.”.
          .titulo-sexto.color-acento-contenido
            p.mb-0 #[b Figura 6.] Compuerta #[i NAND]
          .row.align-items-center
            .col-lg-4.mb-4.mb-lg-0
              .p-2.bg-white
                p.text-center #[b Símbolo lógico y normalizado]
                figure
                  img(src="@/assets/curso/tema1/img10.svg", alt="Representación lógica y tabla de verdad de la compuerta NAND. Incluye el símbolo lógico, tabla de verdad y función lógica: S = (A . B̅).", style="width: 400px").m-auto
            .col-lg-5.mb-4.mb-lg-0
              .p-2.bg-white
                p.text-center #[b Tabla de verdad]
                table
                  thead(style="background-color: #FD96CA")
                    tr
                      th.text-center(colspan="2") Entrada
                      th.text-center Salida
                  tbody
                    tr(style="background-color: #FED4E9")
                      td.text-center A
                      td.text-center B
                      td.text-center S = A̅ . B̅
                    tr(style="background-color: #FEE9F4")
                      td.text-center 0
                      td.text-center 0
                      td.text-center 1
                    tr(style="background-color: #FED4E9")
                      td.text-center 0
                      td.text-center 1
                      td.text-center 1
                    tr(style="background-color: #FEE9F4")
                      td.text-center 1
                      td.text-center 0
                      td.text-center 1
                    tr(style="background-color: #FED4E9")
                      td.text-center 1
                      td.text-center 1
                      td.text-center 0
            .col-lg-3
              .p-2.bg-white
                p.text-center #[b Función lógica]
                .row.justify-content-center.mb-3
                  .col-auto
                    .p-2.bg-c4
                      p.mb-0 #[b S = A̅ . B̅  = (A . B)’]
                p.text-center Es también igual a:
                figure
                  img(src="@/assets/curso/tema1/img11.svg", alt="", style="width: 150px").m-auto
    .row.mb-4
      .col-lg-9.order-2.order-lg-1(data-aos="fade-right")
        .p-3.bg-c7
          p #[b COMPUERTA #[i X-NOR] (#[i NOR] Exclusiva)]. Su función es realizar negación a  la salida de la operación OR ó “+”.
          .titulo-sexto.color-acento-contenido
            p.mb-0 #[b Figura 7.] Compuerta #[i X-NOR]
          .row.align-items-center
            .col-lg-4.mb-4.mb-lg-0
              .p-2.bg-white
                p.text-center #[b Símbolo lógico y normalizado]
                figure
                  img(src="@/assets/curso/tema1/img12.svg", alt="Representación lógica y tabla de verdad de la compuerta XNOR. Incluye el símbolo lógico, tabla de verdad y función lógica: S = (A̅ ⊕ B̅).", style="width: 400px").m-auto
            .col-lg-5.mb-4.mb-lg-0
              .p-2.bg-white
                p.text-center #[b Tabla de verdad]
                table
                  thead(style="background-color: #FD96CA")
                    tr
                      th.text-center(colspan="2") Entrada
                      th.text-center Salida
                  tbody
                    tr(style="background-color: #FED4E9")
                      td.text-center A
                      td.text-center B
                      td.text-center S = A̅ ⊕ B̅
                    tr(style="background-color: #FEE9F4")
                      td.text-center 0
                      td.text-center 0
                      td.text-center 1
                    tr(style="background-color: #FED4E9")
                      td.text-center 0
                      td.text-center 1
                      td.text-center 0
                    tr(style="background-color: #FEE9F4")
                      td.text-center 1
                      td.text-center 0
                      td.text-center 0
                    tr(style="background-color: #FED4E9")
                      td.text-center 1
                      td.text-center 1
                      td.text-center 1
            .col-lg-3
              .p-2.bg-white
                p.text-center #[b Función lógica]
                .row.justify-content-center.mb-3
                  .col-auto
                    .p-2.bg-c4
                      p.mb-0 #[b S = A̅ ⊕ B̅ = (A ⊕ B)’]
                p.text-center Es tambien igual a:
                figure.mb-3
                  img(src="@/assets/curso/tema1/img13.svg", alt="", style="width: 150px").m-auto
                p.text-center.mb-0 #[b A ⊕ B = A . B̅  + A̅ . B ]
      .col-lg-3.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema1/img4.png", alt="", style="width: 400px").m-auto
    .row.mb-4
      .col-12(data-aos="fade-down")
        .p-3
          .row.align-items-center
            .col-md-auto.mb-4.mb-md-0
              figure
                img(src="@/assets/curso/tema1/img14.svg", alt="", style="width: 80px").m-auto
            .col
              p.mb-0 Las compuertas lógicas son los bloques fundamentales que permiten realizar operaciones booleanas en circuitos digitales. Estas compuertas se integran en dispositivos conocidos como circuitos integrados (CI), los cuales son componentes electrónicos que agrupan múltiples compuertas lógicas en una estructura compacta y funcional. Los CI son esenciales para el diseño y funcionamiento de sistemas digitales, ya que ejecutan tareas lógicas y computacionales mediante la interacción de sus elementos internos.
    .row.mb-4
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
            p.mb-0 #[b Figura 8.] Circuito integrado 7400
        .row
          .col-12
            .p-4.bg-c1
              figure
                img(src="@/assets/curso/tema1/img5.png", alt="Diagrama del circuito integrado 7400 con cuatro compuertas NAND y numeración de pines para las entradas y salidas.", style="width: 660px").m-auto
      .col-lg-5(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
            p.mb-0 #[b Figura 9.] Configuración interna de compuertas
        .row
          .col-12
            .p-4.bg-c1
              figure
                img(src="@/assets/curso/tema1/img6.png", alt="Esquema que muestra la configuración interna del circuito integrado, numeración de los pines y tipo de compuertas que lo integran.", style="width: 280px").m-auto
    p.mb-4(data-aos="fade-right") A continuación, se presenta la configuración interna de las compuertas lógicas de algunos circuitos integrados:
    .row.justify-content-center
      .col-lg-10(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
            p.mb-0 #[b Figura 10.] Familia de circuitos integrados
        .row
          .col-12
            .p-4.bg-c6
              figure
                img(src="@/assets/curso/tema1/img7.png", alt="Vista de diferentes circuitos integrados, como 7432 (OR), 7404 (NOT), 7400 (NAND), 7408 (AND), 7402 (NOR) y 7486 (XOR), junto con su configuración interna.", style="width: 900px").m-auto
      
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
