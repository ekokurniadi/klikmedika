<template>
  <!-- Brands section -->
  <section id="galery" class="brand_wrapper" v-if="result.length > 0">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center mb-5">
          <p class="brand_subtitle">Galery</p>
          <h2 class="brand_title">Foto Kegiatan</h2>
        </div>
      </div>
      <div class="row justify-content-center">
        <div
          class="col-sm-2 col1 showcase_card align-self-center"
          v-for="data in result"
        >
          <a
            :href="`${$axios.defaults.baseURL}/images/galery/` + data.image"
            class="venobox"
            data-gall="gallery-item"
            ><img
              loading="lazy"
              :src="`${$axios.defaults.baseURL}/images/galery/` + data.image"
              :alt="data.image"
              class="mb-4 img-fluid"
          /></a>
        </div>
      </div>
    </div>
  </section>
  <!-- Brands section exit -->
</template>

<script>
export default {
  data() {
    return {
      result: [],
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
        .get('/galery/api_get_all')
        .then((res) => {
          this.result = res.data.data
        })
        .catch((err) => {})
    },
  },
}
</script>
