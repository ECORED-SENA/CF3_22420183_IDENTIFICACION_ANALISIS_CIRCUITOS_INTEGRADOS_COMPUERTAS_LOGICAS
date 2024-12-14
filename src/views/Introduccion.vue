<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p(data-aos="fade-up") Las compuertas lógicas son elementos fundamentales en el mundo de los circuitos digitales, ya que permiten procesar información binaria a través de operaciones booleanas como la conjunción (#[i AND]), disyunción (#[i OR]) y negación (#[i NOT]). Estos componentes son esenciales para el diseño y funcionamiento de sistemas electrónicos, desde dispositivos simples hasta complejos equipos computacionales.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src="@/assets/curso/intro/img1.svg", alt="", style="width: 400px").m-auto
      .col-lg-6(data-aos="fade-left")
        .p-3.bg-c1
          p.mb-0 A su vez, las compuertas lógicas se integran en componentes más sofisticados conocidos como circuitos integrados (CI), que agrupan varias compuertas en un solo dispositivo compacto y eficiente. Los CI han revolucionado la tecnología al permitir el desarrollo de circuitos más pequeños, rápidos y económicos, usados en aplicaciones tan diversas como la informática, las telecomunicaciones y la automatización industrial.
    .row.justify-content-center
      .col-lg-10
        p.mb-0(data-aos="fade-right") En este tema, se explorarán las características, funcionamiento y aplicaciones de las compuertas lógicas, así como su integración en los circuitos integrados, destacando su importancia en el diseño de sistemas digitales. 
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
