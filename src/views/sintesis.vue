<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 A continuación, se muestra un mapa conceptual con los elementos más importantes desarrollados en este componente.
    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="La síntesis sobre las compuertas lógicas realizan operaciones lógicas. Se clasifican en diferentes tipos, como AND, OR, NOT, XOR, NOR, NAND y XNOR, y se integran en circuitos integrados (CI), que agrupan múltiples compuertas lógicas. Estas operaciones se basan en principios booleanos, como la conjunción (AND), disyunción (OR) y negación (NOT). Las compuertas lógicas forman los circuitos integrados, y sus aplicaciones abarcan sistemas digitales, computadoras y telecomunicaciones.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
