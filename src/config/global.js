export default {
  global: {
    componenteFormativo: 'Compuertas lógicas',
    descripcionCurso:
      'Las compuertas lógicas son elementos básicos de los circuitos digitales, responsables de realizar operaciones booleanas como <i>AND</i>, <i>OR</i> y <i>NOT</i>. Estas se integran en circuitos integrados (CI), dispositivos compactos que agrupan múltiples compuertas para procesar información binaria. Son fundamentales en tecnologías como computadoras, telecomunicaciones y sistemas automatizados, permitiendo diseños eficientes y funcionales.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Representaciones de las compuertas lógicas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Las compuertas logicas y los circuitos integrados (CI)',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Representaciones de las compuertas lógicas.',
      referencia:
        'Manik. (2022). COMPUERTAS LÓGICAS (desde cero) - Explicación detallada. [Archivo de video] YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=shcAMLESVrE&ab_channel=Manik',
    },
    {
      tema: 'Representaciones de las compuertas lógicas.',
      referencia:
        'Ivan Espinoza. (2022). Electrónica digital básica, compuerta lógica NOT, CI 74LS04. [Archivo de video] YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=C3RoKyfvS-4&list=PLDSIUVDiODhJkm-847DEJZtNJR4C8uuR8&ab_channel=IvanEspinoza',
    },
    {
      tema: 'Representaciones de las compuertas lógicas.',
      referencia:
        'McGraw Hill. (s.f.). <i>Introducción a los sistemas digitales: Unidad 1</i>.',
      tipo: 'Documento',
      link: 'http://www.mcgraw-hill.es/bcv/guide/capitulo/844817156X.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Álgebra de <i>Boole</i>',
      significado:
        'base matemática que sustenta las operaciones lógicas utilizadas en circuitos digitales.',
    },
    {
      termino: 'Circuito integrado (CI)',
      significado:
        'dispositivo electrónico compacto que agrupa varias compuertas lógicas.',
    },
    {
      termino: 'Compuerta <i>AND</i>',
      significado:
        'compuerta lógica que devuelve 1 si todas las entradas son 1.',
    },
    {
      termino: 'Compuerta lógica',
      significado:
        'elemento básico de un circuito digital que realiza operaciones booleanas.',
    },
    {
      termino: 'Compuerta <i>NOT</i>',
      significado: 'compuerta lógica que invierte el valor de la entrada.',
    },
    {
      termino: 'Compuerta <i>OR</i>',
      significado:
        'compuerta lógica que devuelve 1 si al menos una entrada es 1.',
    },
    {
      termino: 'Compuerta <i>XOR</i>',
      significado:
        'compuerta lógica que devuelve 1 si las entradas son diferentes.',
    },
    {
      termino: 'Configuración interna',
      significado:
        'disposición de compuertas lógicas dentro de un circuito integrado.',
    },
    {
      termino: 'Operaciones booleanas',
      significado:
        'procesos lógicos basados en álgebra de Boole, como <i>AND, OR y NOT</i>.',
    },
    {
      termino: 'Tabla de verdad',
      significado:
        'representación que muestra todas las combinaciones posibles de entradas y salidas de una compuerta lógica.',
    },
  ],
  referencias: [
    {
      referencia:
        'McGraw Hill. (s.f.). <i>Introducción a los sistemas digitales: Unidad 1</i>. ',
      link: 'http://www.mcgraw-hill.es/bcv/guide/capitulo/844817156X.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Magda Melissa Rodríguez Celis',
          cargo: 'Experto temático',
          centro:
            'Centro de Desarrollo Agroempresarial - Regional Cundinamarca',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Blanca Flor Tinoco Torres',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jhon Jairo Urueta Alvarez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        //{
        //  nombre: 'Nombre',
        //  cargo: 'Animador y productor audiovisual',
        //  centro: 'Centro de Servicios de Salud - Regional Antioquia',
        //},
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        //{
        //  nombre: 'Jaime Hernán Tejada Llano',
        //  cargo: 'Validador y vinculador de recursos educativos digitales',
        //  centro: 'Centro de Servicios de Salud - Regional Antioquia',
        //},
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
