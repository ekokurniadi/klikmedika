<template>
  <header class="header_wrapper">
    <nav class="navbar navbar-expand-lg fixed-top">
      <div class="container-fluid">
        <Nuxt-link class="navbar-brand" to="/">
          <img
            src="/images/klikmedikalogo-transparent.png"
            loading="lazy"
            alt="KlikMedika Logo"
            width="150px"
          />
        </Nuxt-link>

        <button
          class="navbar-toggler pe-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
          <i class="fas fa-stream navbar-toggler-icon"></i>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul class="navbar-nav menu-navbar-nav">
            <li class="nav-item">
              <nuxt-link
                :class="setActive('/')"
                aria-current="page"
                to="/"
                exact
                >Beranda</nuxt-link
              >
            </li>
            <li class="nav-item">
              <nuxt-link
                :class="setActive('/#tentang')"
                :to="setHref('#tentang')"
                exact
                >Tentang</nuxt-link
              >
            </li>
            <li class="nav-item">
              <nuxt-link
                :class="setActive('/#solusi')"
                :to="setHref('#solusi')"
                exact
                >Solusi</nuxt-link
              >
            </li>
            <li class="nav-item">
              <nuxt-link
                :class="setActive('/#fitur')"
                :to="setHref('#fitur')"
                exact
                >Fitur</nuxt-link
              >
            </li>
            <li class="nav-item">
              <nuxt-link
                :class="setActive('/#berlangganan')"
                :to="setHref('#berlangganan')"
                exact
                >Langganan</nuxt-link
              >
            </li>
            <li class="nav-item" v-if="resultGalery.length > 0">
              <nuxt-link
                :class="setActive('/#galery')"
                :to="setHref('#galery')"
                exact
                >Galeri</nuxt-link
              >
            </li>
            <li class="nav-item">
              <nuxt-link :class="setActive('/artikel')" to="/artikel" exact
                >Artikel</nuxt-link
              >
            </li>
          </ul>
          <ul class="navbar-nav">
            <li class="nav-item text-center">
              <a
                class="nav-link learn-more-btn2"
                :href="
                  'https://wa.me/' +
                  props.wa +
                  '?text=Hallo admin, saya ingin request demo aplikasi'
                "
                target="_blank"
                >Request Demo</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <!-- Navbar section exit -->
</template>

<script>
export default {
  props: ['props'],
  data() {
    return {
      navbarRef: null,
      resultGalery: [],
    }
  },
  created: async function () {
    await this.getData()
  },
  mounted() {
    window.addEventListener('scroll', this.scrollFunc)
  },
  unmounted() {
    window.removeEventListener('scroll', this.scrollFunc)
  },

  methods: {
    setActive: function (named) {
      return this.$route.fullPath == named ? 'nav-link active' : 'nav-link'
    },
    setHref: function (namedRoute) {
      return this.$route.fullPath == '/artikel' ? '/' : namedRoute
    },
    scrollFunc() {
      this.navbarRef = this.$el.querySelector('.navbar')
      if (document.documentElement.scrollTop > 20) {
        this.navbarRef.classList.add('header-scrolled')
      } else {
        this.navbarRef.classList.remove('header-scrolled')
      }
    },

    getData: async function () {
      this.isLoading = true

      this.$axios
        .get('/galery/api_get_all')
        .then((res) => {
          this.resultGalery = res.data.data
        })
        .catch((err) => {})
    },
  },
}
</script>
