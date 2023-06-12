<template>
  <!-- Banner section -->
  <section
    id="beranda"
    class="banner_wrapper"
    style="
      background: url('/images/hero_bg.png') center top no-repeat;
      background-size: cover;
    "
  >
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-6 header-img-section">
          <img
            :src="`${$axios.defaults.baseURL}/images/banner/` + result.image"
            class="img-fluid"
            :alt="result.image"
          />
        </div>
        <div class="col-md-6 my-5 my-md-0 text-md-start">
          <p class="banner-subtitle"></p>
          <h1 class="banner-title">
            {{ result.heading }}
          </h1>
          <p class="banner-title-text">
            {{ result.sub_heading }}
          </p>
          <div class="learn-more-btn-section">
            <a
              class="nav-link learn-more-btn btn-header"
              :href="
                'https://wa.me/' +
                props.wa +
                '?text=Hallo admin, saya ingin request demo aplikasi'
              "
              target="_blank"
              >Mulai Sekarang</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Banner section exit -->
</template>

<script>
export default {
  props: ['props'],
  data() {
    return {
      result: {
        id: '',
        heading: '',
        sub_heading: '',
        image: '',
      },

      isLoading: false,
    }
  },
  created: async function () {
    await this.getData()
  },
  methods: {
    getData: async function () {
      this.isLoading = true

      this.$axios
        .get('/banner/api_get_all')
        .then((res) => {
          this.result = res.data.data
        })
        .catch((err) => {})
    },
  },
}
</script>
