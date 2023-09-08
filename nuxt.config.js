export default {

  head: {
    title:
      'KlikMedika - Solusi Cerdas Digitalisasi Medis - Digitalisasi Rekam Medis',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'KlikMedika Solusi Cerdas Digitalisasi Medis. Kami Siap membantu anda dalam upaya bertransformasi lebih baik Mendigitalisasikan Data Rekam Medis pasien dan menjaganya tetap terintegrasi dengan Aman',
      },
      { name: 'format-detection', content: 'telephone=no' },

      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'Klik Medika, aplikasi klinik, satu sehat, bpjs, kei medika, kesehatan, aplikasi klinik gratis, klinik, medis, gratis',
      },
      { hid: 'robots', name: 'robots', content: 'index, follow' },
      { hid: 'author', name: 'author', content: 'klikmedika' },
      { property: 'og:type', name: 'og:type', content: 'website' },
      {
        property: 'og:url',
        name: 'og:url',
        content: 'https://klikmedika.id/',
      },
      {
        property: 'og:title',
        name: 'og:title',
        content:
          'KlikMedika - Solusi Cerdas Digitalisasi Medis - Digitalisasi Rekam Medis',
      },
      {
        property: 'og:description',
        name: 'og:description',
        content:
          'KlikMedika Solusi Cerdas Digitalisasi Medis. Kami Siap membantu anda dalam upaya bertransformasi lebih baik Mendigitalisasikan Data Rekam Medis pasien dan menjaganya tetap terintegrasi dengan Aman',
      },
      {
        property: 'og:image',
        name: 'og:image',
        itemprop:"image",
        content: 'https://klikmedika.id/images/klikmedika-logo.png',
      },
      {
        property: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        property: 'twitter:url',
        name: 'twitter:url',
        content: 'https://klikmedika.id/',
      },
      {
        property: 'twitter:title',
        name: 'twitter:title',
        content:
          'KlikMedika - Solusi Cerdas Digitalisasi Medis - Digitalisasi Rekam Medis',
      },
      {
        property: 'twitter:description',
        name: 'twitter:description',
        content:
          'KlikMedika Solusi Cerdas Digitalisasi Medis. Kami Siap membantu anda dalam upaya bertransformasi lebih baik Mendigitalisasikan Data Rekam Medis pasien dan menjaganya tetap terintegrasi dengan Aman',
      },
      {
        property: 'twitter:image',
        name: 'twitter:image',
        content: 'https://klikmedika.id/images/klikmedika-logo.png',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Montserrat:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i',
      },
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.1.0/css/bootstrap.min.css',
      },
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css',
      },
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css',
      },
      { rel: 'stylesheet', href: '/assets/css/style.css' },
      {
        rel: 'stylesheet',
        href: '/assets/vendor/bootstrap/css/bootstrap.min.css',
      },
      { rel: 'stylesheet', href: '/assets/vendor/icofont/icofont.min.css' },
      {
        rel: 'stylesheet',
        href: '/assets/vendor/boxicons/css/boxicons.min.css',
      },
      { rel: 'stylesheet', href: '/assets/vendor/venobox/venobox.css' },
      { rel: 'stylesheet', href: '/assets/vendor/remixicon/remixicon.css' },
      {
        rel: 'stylesheet',
        href: '/assets/vendor/owl.carousel/assets/owl.carousel.min.css',
      },
      {
        rel: 'stylesheet',
        href: '/assets/vendor/owl.carousel/assets/owl.theme.default.min.css',
      },
      { rel: 'stylesheet', href: '/assets/vendor/aos/aos.css' },
      { rel: 'stylesheet', href: '/second_assets/css/style.css' },
    ],
    script: [
      {
        src: 'https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js',
      },
      { src: '/assets/vendor/jquery/jquery.min.js' },
      { src: '/assets/vendor/bootstrap/js/bootstrap.bundle.min.js' },
      { src: '/assets/vendor/jquery.easing/jquery.easing.min.js' },
      { src: '/assets/vendor/php-email-form/validate.js' },
      { src: '/assets/vendor/venobox/venobox.min.js' },
      { src: '/assets/vendor/waypoints/jquery.waypoints.min.js' },
      { src: '/assets/vendor/counterup/counterup.min.js' },
      { src: '/assets/vendor/owl.carousel/owl.carousel.min.js' },
      { src: '/assets/vendor/aos/aos.js' },
      { src: '/assets/js/main.js' },
      { src: 'https://code.jquery.com/jquery-3.6.0.min.js' },
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/2.9.2/umd/popper.min.js',
      },
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.1.0/js/bootstrap.min.js',
      },
      { src: '/second_assets/js/main.js' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/days.js', '~/plugins/aos.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxtjs/vuetify'],

  image: {},

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/sitemap',
  ],

  sitemap: {
    hostname: 'https://klikmedika.id',
    gzip: true,
    routes: [
      {
        url: '/#beranda',
        changefreq: 'daily',
        priority: 1,
        lastmod: new Date(),
      },
      {
        url: '/#tentang',
        changefreq: 'daily',
        priority: 1,
        lastmod: new Date(),
      },
      {
        url: '/#solusi',
        changefreq: 'daily',
        priority: 1,
        lastmod: new Date(),
      },
      {
        url: '/#fitur',
        changefreq: 'daily',
        priority: 1,
        lastmod: new Date(),
      },
      {
        url: '/#berlangganan',
        changefreq: 'daily',
        priority: 1,
        lastmod: new Date(),
      },
      {
        url: '/artikel',
        changefreq: 'daily',
        priority: 1,
        lastmod: new Date(),
      },
      {
        url: '/#kontak',
        changefreq: 'daily',
        priority: 1,
        lastmod: new Date(),
      },
    ],
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'https://panel.klikmedika.id',
    // baseURL: 'http://localhost/klikmedika_panel',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    maxChunkSize: 300000,
    splitChunks: {
      layouts: true,
    },
    extend(config, ctx) {
      // Include the compiler version of Vue so that wp-content works
      config.resolve.alias['vue$'] = 'vue/dist/vue.esm.js'
      config.performance.hints = false
    },
  },
  buildDir: 'build',
}
