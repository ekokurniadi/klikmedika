<template>
  <!-- Features section -->
  <section id="fitur" class="features_wrapper">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h2 class="features_title">Add On</h2>
          <p class="features_subtitle">
            KlikMedika menyediakan berbagai fitur tambahan, untuk mempermudah
            kegiatan operasional klinik anda.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-sm-6" v-for="feature in features">
          <div
            class="ft-1"
            style="padding: 20px 20px"
            data-aos="fade-up"
            v-if="feature.paket.is_add_on == '1'"
          >
            <h3>{{ feature.paket.tipe }}</h3>
            <p class="features_text">{{ feature.paket.catatan }}</p>
            <p
              class="features_subtitle"
              style="font-size: 18px; font-weight: bold"
            >
              {{ toCurrency(feature.paket.hpp) }}
            </p>
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
        .get('/paket/api_get_paket')
        .then((res) => {
          this.features = res.data.data
        })
        .catch((err) => {})
    },
    toCurrency: function (price) {
      var newPrice = String(price)
      return 'RP ' + Intl.NumberFormat('id-ID').format(newPrice)
    },
  },
}
</script>
