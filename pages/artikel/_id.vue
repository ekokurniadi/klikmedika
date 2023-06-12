<template>
  <section class="about">
    <div class="container-fluid mt-5 py-3">
      <div class="row">
        <div class="col-md-12" style="width: 100%; padding: 0 !important">
          <v-parallax
            height="400"
            src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
          >
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <h3 class="text-center" style="font-weight: 700">
                    {{ artikelData.judul_artikel }}
                  </h3>
                  <h5 class="text-center" style="font-weight: 500">
                    Ditinjau oleh :
                    <span class="text-start" style="font-weight: 700">{{
                      artikelData.name
                    }}</span>
                    <span class="text-start" style="font-weight: 500">
                      |
                      {{ artikelData.created_at | formatDateWithoutDays }}</span
                    >
                    <span class="text-start" style="font-weight: 700">
                      | {{ artikelData.kategori }}</span
                    >
                    <span class="text-start" style="font-weight: 400">
                      | Dibaca: {{ artikelData.views }}x</span
                    >
                  </h5>
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

        <div class="col-md-8 py-4 mt-3 mb-3">
          <div style="width: 100%; height: 500px">
            <v-img
              height="500"
              cover
              loading="lazy"
              :src="
                `${$axios.defaults.baseURL}/images/artikel/` +
                artikelData.cover_artikel
              "
              class="img-fluid"
              :alt="artikelData.judul_artikel"
            />
          </div>
          <v-divider />
          <div v-html="artikelData.isi_artikel" class="mt-3"></div>
          <v-divider />

          <div class="row mt-2">
            <div class="col-md-6">
              <div class="row">
                <div class="col-md-4">
                  <v-avatar size="80px" color="brown" style="border: 1px solid">
                    <v-img
                      width="80"
                      :src="
                        `${$axios.defaults.baseURL}/images/profile_picture/` +
                        artikelData.foto_profil
                      "
                      :alt="artikelData.name"
                    ></v-img
                  ></v-avatar>
                </div>

                <div class="col-md-8 align-items-center">
                  <p class="writter-info-bold">{{ artikelData.name }}</p>
                  <p>{{ artikelData.jabatan }}</p>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <span class="writter-info-bold">Kategori :</span>
              <span>{{ artikelData.kategori }}</span>

              <p>
                <span class="writter-info-bold">Tags :</span>
                <span>{{ artikelData.tags }}</span>
              </p>
            </div>
          </div>
          <v-divider />
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

.writter-info-bold {
  font-weight: 700;
  font-size: 16px;
  color: #1c1c1c;
}
</style>
<script>
export default {
  data() {
    return {
      artikelData: {
        kategori: '',
        judul_artikel: '',
        cover_artikel: '',
        isi_artikel: '',
        tags: '',
        created_at: '',
        foto_profil: '',
        name: '',
        jabatan: '',
        views: 0,
      },
      categories: [],
      isSelectCategory: false,
      artikels: [],
      totalData: 0,
      isLoading: false,
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
    await Promise.all([
      this.getCountCategory(),
      this.updateViewsArtikel(),
      this.getArtikelById(),
    ])
  },

  filters: {
    truncate: function (data, num) {
      const truncated = data.split('').slice(0, num).join('')
      return truncated
    },
  },
  methods: {
    async updateViewsArtikel() {
      this.$axios
        .post(`/artikel/update_artikel_views/${this.$route.params.id}`)
        .then((res) => {})
        .catch((err) => {})
    },
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
    getArtikelById: async function () {
      this.isLoading = true
      this.$axios
        .get(`/artikel/get_detail_artikel_by_id/${this.$route.params.id}`)
        .then((res) => {
          this.artikelData = res.data.data
          this.isLoading = false
        })
        .catch((err) => {
          this.isLoading = false
        })
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
    handleSubmit: async function (event) {
      if (event.code === 'Enter') {
        await this.getArtikel()
      }
    },
  },
}
</script>
