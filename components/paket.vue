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
        class="row d-flex justify-content-center align-items-start px-3 px-lg-0"
      >
        <div class="col-sm-6 col-lg-4" v-for="p in paket" data-aos="fade-up">
          <div class="pricing_card pricing_two" v-if="p.paket.is_add_on != '1'">
            <p class="pricing_rate" style="color: #ff914d; font-size: 25px">
              {{ p.paket.tipe }}
            </p>

            <p
              class="pricing_period"
              style="
                text-decoration: line-through;

                text-decoration-thickness: 2px;
                font-size: 18px;
                text-align: right !important;
              "
            >
              {{ toCurrency(p.paket.harga) }}
            </p>
            <p class="pricing_rate">
              {{ toCurrency(p.paket.hpp) }}
            </p>
            <div
              class="pricing_all_plan"
              v-if="p.paket.catatan != ''"
              style="
                font-weight: bold;
                color: red;

                text-align: center !important;
              "
            >
              {{ p.paket.catatan }}
            </div>

            <p class="pricing_period">
              Include {{ p.paket.count_fitur }} Fitur
            </p>
            <div class="d-block">
              <div v-for="d in p.detail" style="text-align: left">
                <div class="d-flex">
                  <div>
                    <span
                      :class="
                        d.is_checked
                          ? 'fa fa-check-circle'
                          : 'fa fa-times-circle'
                      "
                      :style="d.is_checked ? 'color:green' : 'color:red'"
                    ></span>
                  </div>
                  <div style="width: 10px"></div>
                  <div style="width: 100%">
                    <span style="text-align: left !important">{{
                      d.nama_fitur
                    }}</span>
                  </div>
                </div>
              </div>
            </div>
            <a
              class="learn-more-btn mt-3"
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
      paket: [],
      isLoading: false,
    }
  },
  created: async function () {
    await this.getDataPaket()
  },
  methods: {
    getDataPaket: async function () {
      this.isLoading = true
      this.$axios
        .get('/paket/api_get_paket')
        .then((res) => {
          this.paket = res.data.data
          console.log(this.paket)
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
