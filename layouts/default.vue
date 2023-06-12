<template>
  <div>
    <app-header :props="contact" />
    <main id="main">
      <Nuxt />
    </main>
    <a href="#" class="back-to-top"><i class="icofont-simple-up"></i></a>
    <div id="preloader"></div>
    <app-footer :props="contact" />
  </div>
</template>

<script>
import AppHeader from '@/components/header.vue'
import AppFooter from '@/components/footer.vue'
import aosPlugin from '~/plugins/aos'
export default {
  components: {
    'app-header': AppHeader,
    'app-footer': AppFooter,
  },
  data() {
    return {
      contact: {},
      isLoading: false,
    }
  },
  mixins: [aosPlugin],
  methods: {
    getData: async function () {
      this.isLoading = true

      var response = this.$axios
        .get('/contact/api_get_all')
        .then((res) => {
          this.contact = res.data.data
        })
        .catch((err) => {})
    },
  },

  mounted: async function () {
    await this.getData()
  },
}
</script>
