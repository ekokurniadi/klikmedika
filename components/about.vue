<template>
  <!-- ======= About Section ======= -->
  <section
    id="tentang"
    class="about"
    style="
      background: url('/images/hero_bg.png') center top no-repeat;
      background-size: cover;
    "
  >
    <div class="container-fluid">
      <div class="row">
        <div
          class="col-xl-5 col-lg-6 justify-content-center align-items-stretch"
          data-aos="zoom-out"
          data-aos-delay="300"
        >
          <v-img
            loading="lazy"
            :src="`${$axios.defaults.baseURL}/images/tentang/` + result.image"
            class="img-fluid animated"
            :alt="result.image"
          />
          <a
            :href="result.video"
            class="venobox play-btn mb-4"
            data-vbtype="video"
            data-autoplay="true"
          ></a>
        </div>

        <div
          class="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5 mt-5"
          data-aos="fade-left"
        >
          <h3>{{ result.heading }}</h3>
          <h2>{{ result.sub_heading }}</h2>

          <div
            class="icon-box"
            data-aos="fade-left"
            data-aos-delay="100"
            v-for="detail in details"
          >
            <div class="icon"><i class="bx bx-check-double"></i></div>
            <h4 class="title">
              <a href="">{{ detail.title }}</a>
            </h4>
            <p class="description">{{ detail.subtitle }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End About Section -->
</template>

<script>
export default {
  data() {
    return {
      result: {
        id: '',
        heading: '',
        sub_heading: '',
        image: '',
        video: '',
      },
      details: [],
      isLoading: false,
    }
  },
  created: async function () {
    await Promise.all([this.getData(), this.getDataDetails()])
  },
  methods: {
    getData: async function () {
      this.isLoading = true

      this.$axios
        .get('/tentang/api_get_all_tentang')
        .then((res) => {
          this.result = res.data.data
        })
        .catch((err) => {})
    },
    getDataDetails: async function () {
      this.isLoading = true

      this.$axios
        .get('/about_detail/api_get_all')
        .then((res) => {
          this.details = res.data.data
        })
        .catch((err) => {})
    },
  },
}
</script>
