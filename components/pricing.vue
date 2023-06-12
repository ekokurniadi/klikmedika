<template>
  <!-- Pricing section -->
  <section id="berlangganan" class="price_wrapper">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center mb-5">
          <h2 class="pricing_title">
            Siap untuk Tingkatkan Operasional Klinik Anda?
          </h2>
          <p class="pricing_subtitle">
            Daftar Sekarang untuk Dapatkan Akun atau Jadwalkan Demo
          </p>
        </div>
      </div>
      <div
        class="row d-flex justify-content-center align-items-center px-3 px-lg-0"
      >
        <div
          class="col-sm-6 col-lg-4"
          v-for="pricing in pricings"
          data-aos="fade-up"
        >
          <div class="pricing_card pricing_two">
            <p class="pricing_period">{{ pricing.category }}</p>
            <v-img
              cover
              loading="lazy"
              :src="`${$axios.defaults.baseURL}/images/pricing/` + pricing.foto"
              class="img-fluid"
              :alt="pricing.foto"
            />
            <p class="pricing_rate">
              {{ toCurrency(pricing.price) }}
            </p>
            <div class="pricing_all_plan">
              <ul>
                <li v-html="pricing.detail"></li>
              </ul>
            </div>
            <a
              class="learn-more-btn m-0"
              style="
                background: linear-gradient(
                  103deg,
                  #ff0036 0%,
                  #ff914d 0%,
                  #2197b2 100%
                ) !important;
              "
              :href="
                'https://wa.me/' +
                props.wa +
                '?text=Hallo admin, saya ingin request demo aplikasi'
              "
              target="_blank"
              >Daftar Sekarang</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Pricing section exit -->
</template>

<script>
export default {
  props: ['props'],
  data() {
    return {
      pricings: [],
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
        .get('/pricing/api_get_all')
        .then((res) => {
          this.pricings = res.data.data
        })
        .catch((err) => {})
    },
    toCurrency: function (price) {
      return 'RP ' + Intl.NumberFormat('id-ID').format(price)
    },
  },
}
</script>
