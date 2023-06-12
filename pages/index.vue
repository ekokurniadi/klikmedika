<template>
  <div>
    <app-banner :props="contact" />
    <app-about />
    <app-service />
    <app-features />
    <app-pricing :props="contact" />
    <app-galery />
  </div>
</template>

<script>
import AppBanner from '@/components/banner.vue'
import AppAbout from '@/components/about.vue'
import AppService from '@/components/services.vue'
import AppFeatures from '@/components/features.vue'
import AppPricing from '@/components/pricing.vue'
import AppTestimoni from '@/components/testimonials.vue'
import AppGaleri from '@/components/galery.vue'
import AppFaq from '@/components/faq.vue'
export default {
  components: {
    'app-banner': AppBanner,
    'app-about': AppAbout,
    'app-service': AppService,
    'app-features': AppFeatures,
    'app-pricing': AppPricing,
    'app-testi': AppTestimoni,
    'app-galery': AppGaleri,
    'app-faq': AppFaq,
  },
  data() {
    return {
      contact: {},
      isLoading: false,
    }
  },
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
