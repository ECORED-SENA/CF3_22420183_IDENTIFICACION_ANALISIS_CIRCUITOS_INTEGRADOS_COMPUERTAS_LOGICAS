<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Las compuertas logicas y los circuitos integrados (CI)
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
