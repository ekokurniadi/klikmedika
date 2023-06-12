<template>
  <section class="about">
    <div class="container-fluid mt-5 py-3">
      <div class="row">
        <div class="col-md-12" style="width: 100%; padding: 0 !important">
          <v-parallax
            height="130"
            src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
          >
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <h2 class="text-center" style="font-weight: 700">Artikel</h2>
                </div>
              </div>
            </div>
          </v-parallax>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="row">
            <div class="col-md-12 py-4 mt-3">
              <div style="position: relative" class="blog">
                <input
                  type="text"
                  class="form-control text-input-search"
                  placeholder="Cari Artikel"
                  v-model="searchParams.query"
                  @keypress.enter="getArtikel()"
                />

                <button class="btn-search" type="button" @click="getArtikel()">
                  <span class="mdi mdi-magnify" style="font-size: 25px"></span>
                </button>
              </div>
            </div>
          </div>

          <h3>Kategori</h3>
          <div class="py-2"></div>
          <v-card>
            <div
              v-for="(category, index) in categories"
              :class="changeColorSelectCategory(category.id)"
              @click="setSelectedIdCategory(category.id)"
            >
              {{ category.kategori }}
              <span class="category-blog-counter">{{ category.total }}</span>
            </div>
          </v-card>
        </div>

        <div class="col-md-8 py-4 mt-3">
          <div class="row" v-if="artikels.length <= 0">
            <div class="col-md-12">
              <span> Data tidak ditemukan </span>
            </div>
          </div>
          <div class="row">
            <div
              class="col-md-6 col-sm-12 col-xs-12"
              v-for="artikel in artikels"
            >
              <div
                class="pricing_card pricing_two"
                style="
                  box-shadow: 0 2px 29px rgb(0 0 0 / 20%);
                  border-radius: 10px;
                "
              >
                <nuxt-link
                  :to="{
                    name: 'artikel-id',
                    params: { id: artikel.id },
                  }"
                >
                  <div class="artikel-img-cover">
                    <v-img
                      height="100%"
                      cover
                      loading="lazy"
                      :src="
                        `${$axios.defaults.baseURL}/images/artikel/` +
                        artikel.cover_artikel
                      "
                      :alt="artikel.judul_artikel"
                    />
                  </div>
                  <div
                    class="artikel-info py-2"
                    style="color: #b2b2b2; padding: 10px 10px"
                  >
                    <i class="fa fa-calendar" style="color: #b2b2b2"></i>
                    <span style="font-weight: 500">{{
                      artikel.created_at | formatDate
                    }}</span>
                    <span style="padding-left: 10px"
                      ><i class="fa fa-eye" style="color: #b2b2b2"></i
                    ></span>
                    <span style="font-weight: 500; padding-left: 10px"
                      >{{ artikel.views }} kali</span
                    >
                  </div>
                  <div
                    style="
                      font-weight: 600;
                      font-size: 20px;
                      padding: 10px 10px;
                    "
                  >
                    {{ artikel.judul_artikel }}
                  </div>
                  <div
                    style="
                      font-weight: 400;
                      color: #6f6f6f;
                      font-size: 16px;
                      padding: 10px 10px;
                    "
                  >
                    {{ artikel.isi_artikel | stripHTML | truncate(200) }}
                  </div>
                  <v-spacer></v-spacer>
                  <v-card-actions>
                    <button class="learn-more-btn">Selengkapnya</button>
                  </v-card-actions>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <v-pagination
            v-model="searchParams.page"
            :length="searchParams.total_page"
            next-icon="mdi-menu-right"
            prev-icon="mdi-menu-left"
            @input="handlePageChange"
          ></v-pagination>
        </div>
      </div>
    </div>

    <div class="mb-5"></div>
    <v-overlay :value="this.isLoading">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
  </section>
</template>
<style>
.theme--light.v-pagination .v-pagination__item--active {
  color: white !important;
  background-color: orange !important;
}
a {
  text-decoration: none !important;
}
</style>
<script>
import moment from 'moment'
export default {
  data() {
    return {
      categories: [],
      isSelectCategory: false,
      artikels: [],
      totalData: 0,
      isLoading: false,
      isSearch: false,
      searchParams: {
        selectedCategory: '',
        query: '',
        page: 1,
        limit: 4,
        total_page: 0,
      },
    }
  },
  created: async function () {
    await Promise.all([this.getCountCategory(), this.getArtikel()])
  },
  filters: {
    truncate: function (data, num) {
      const truncated = data.split('').slice(0, num).join('')
      return truncated
    },
  },
  methods: {
    async handlePageChange(value) {
      this.searchParams.page = value
      await this.getArtikel()
    },
    getCountCategory: async function () {
      this.$axios
        .get('/kategori_artikel/api_get_all')
        .then((res) => {
          this.categories = res.data.data
        })
        .catch((e) => {})
    },

    async setSelectedIdCategory(index) {
      if (index == this.searchParams.selectedCategory) {
        this.searchParams.selectedCategory = ''
      } else {
        this.searchParams.selectedCategory = index
      }

      await this.getArtikel()
    },

    changeColorSelectCategory(index) {
      return this.searchParams.selectedCategory == index
        ? 'category-blog-item-active d-flex justify-content-start'
        : 'category-blog-item d-flex justify-content-start'
    },

    getArtikel: async function () {
      this.isLoading = true
      this.$axios
        .get('/artikel/get_artikel', { params: this.searchParams })
        .then((res) => {
          this.artikels = res.data.data
          this.searchParams.query = res.data.meta.query
          this.searchParams.page = res.data.meta.page
          this.searchParams.total_page = res.data.meta.total_page
          this.totalData = res.data.meta.total_data
          this.isLoading = false
        })
        .catch((err) => {
          this.isLoading = false
        })
    },
    resetSearchArtikel: async function () {
      this.searchParams.query = ''
      await this.getArtikel()
    },
    handleSubmit: async function (event) {
      if (event.code === 'Enter') {
        await this.getArtikel()
      }
    },
    formatDate(tanggal) {
      return moment(tanggal).format('D MMMM YYYY')
    },
  },
}
</script>
