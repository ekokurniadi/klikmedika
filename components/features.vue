<template>
  <!-- Features section -->
  <section id="fitur" class="features_wrapper">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center mb-5">
          <h2 class="features_title">Fitur Unggulan</h2>
          <p class="features_subtitle">
            KlikMedika menyediakan berbagai fitur unggulan, mulai dari Rekam
            Medis, Integrasi dengan BPJS dan SatuSehat.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-sm-6 mb-5" v-for="feature in features">
          <div
            class="ft-1"
            style="min-height: 265px !important"
            data-aos="fade-up"
          >
            <h3>{{ feature.feature }}</h3>
            <p class="features_text">{{ feature.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Features section exit -->
</template>

<script>
export default {
  data() {
    return {
      features: [],
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
        .get('/feature/api_get_all')
        .then((res) => {
          this.features = res.data.data
        })
        .catch((err) => {})
    },
  },
}
</script>
