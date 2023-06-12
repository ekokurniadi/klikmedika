<template>
  <!-- About section -->
  <section id="solusi" class="about_wrapper">
    <div class="container" v-for="(d, index) of result">
      <div
        :class="
          index % 2 == 0 ? 'row flex-row-reverse' : 'row align-items-center'
        "
      >
        <div
          class="col-sm-12 col-lg-5 text-center text-lg-start"
          :data-aos="index % 2 == 0 ? 'fade-left' : 'fade-right'"
        >
          <p class="about_number">{{ index + 1 }}</p>
          <h2 class="about_title">{{ d.title }}</h2>
          <p class="about_text">{{ d.subtitle }}</p>
        </div>
        <div
          class="col-sm-12 col-lg-7 text-center text-md-start"
          :data-aos="index % 2 == 0 ? 'fade-left' : 'fade-right'"
        >
          <v-img
            loading="lazy"
            :src="`${$axios.defaults.baseURL}/images/layanan/` + d.image"
            class="img-fluid"
            alt=""
          />
        </div>
      </div>
    </div>
    <br /><br />

    <div
      class="projects"
      style="
        background: url('/images/hero_bg.png') center top no-repeat;
        background-size: cover;
      "
    >
      <div class="container">
        <div class="row d-flex justify-content-center">
          <div
            class="col-sm-6 col-lg-3 text-center"
            v-for="rate in serviceRate"
          >
            <h2>{{ rate.value }}</h2>
            <p>{{ rate.title }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- About section exit -->
</template>

<script>
export default {
  data() {
    return {
      result: [],
      serviceRate: [],

      isLoading: false,
    }
  },
  created: async function () {
    await Promise.all([this.getData(), this.getServiceRate()])
  },
  methods: {
    getData: async function () {
      this.isLoading = true

      this.$axios
        .get('/service/api_get_all')
        .then((res) => {
          this.result = res.data.data
        })
        .catch((err) => {})
    },
    getServiceRate: async function () {
      this.isLoading = true

      this.$axios
        .get('/service_rate/api_get_all')
        .then((res) => {
          this.serviceRate = res.data.data
        })
        .catch((err) => {})
    },
  },
}
</script>
