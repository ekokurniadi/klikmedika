<template>
  <!-- Footer section -->
  <section
    id="kontak"
    class="footer_wrapper"
    style="background-color: var(--bg-light-2); color: var(--text-white)"
  >
    <div class="container">
      <div class="row">
        <div
          class="col-lg-4 d-flex align-self-start justify-content-start footer_logo mb-2 mb-lg-0"
        >
          <div>
            <nuxt-link to="/"
              ><v-img
                src="/images/klikmedikalogo-transparent.png"
                class="logo"
                alt="KlikMedika"
                style="width: 300px !important; max-width: 100% !important"
            /></nuxt-link>
            <div style="padding: 0px 100px">
              <p
                class="footer_text"
                style="margin: 0 !important; font-size: 14px; font-weight: 700"
              >
                Member of
              </p>
            </div>
            <div class="d-flex justify-content-start" style="padding: 0px 90px">
              <span>
                <v-img src="/images/logo-health-tech.png" :width="60" cover
              /></span>
              <span style="padding: 0px 10px">
                <v-img src="/images/satu-sehat.png" :width="45" cover
              /></span>
              <span style="padding: 0px 10px">
                <v-img src="/images/Logo-BPJS-Kesehatan.png" :width="50" cover
              /></span>
            </div>
          </div>
        </div>
        <div class="col-lg-2 px-lg-5 mb-4 mb-lg-0">
          <h3 class="footer_title">Sitemap</h3>
          <p class="footer_text" style="font-size: 14px !important">
            <nuxt-link to="/">Beranda</nuxt-link>
            <br />

            <nuxt-link to="/#tentang">Tentang</nuxt-link>
            <br />
            <nuxt-link to="/#solusi">Solusi</nuxt-link>
            <br />
            <nuxt-link to="/#fitur">Fitur</nuxt-link>
            <br />
            <nuxt-link to="/#berlangganan">Langganan</nuxt-link>
            <br />
            <nuxt-link to="/artikel">Artikel</nuxt-link>
            <br />
          </p>
        </div>
        <div class="col-lg-4 px-lg-5 mb-4 mb-lg-0">
          <h3 class="footer_title">Contact</h3>
          <p class="footer_text">
            <i class="ri-home-2-line"></i>
            {{ props.location }}
            <br />

            <i class="fa fa-envelope"></i>

            <a :href="'mailto:' + props.email">{{ props.email }}</a
            ><br />

            <i class="fa fa-phone"></i>
            <a :href="'tel:' + props.phone">{{ props.phone }}</a
            ><br />
            <i class="fab fa-whatsapp"></i>
            <a
              :href="
                'https://wa.me/' +
                props.wa +
                '?text=Hallo admin, saya ingin request demo aplikasi'
              "
              target="_blank"
              class="footer-address"
              >{{ props.wa }}</a
            >
          </p>
        </div>
        <div class="col-lg-2 mb-4 mb-lg-0">
          <h3 class="footer_title">Social Media</h3>
          <p>
            <a
              :href="props.facebook"
              target="_blank"
              class="footer_social_media_icon"
              ><i class="fab fa-facebook-f"></i
            ></a>
            <a
              :href="props.instagram"
              target="_blank"
              class="footer_social_media_icon"
              ><i class="fab fa-instagram"></i
            ></a>
            <a
              :href="props.youtube"
              target="_blank"
              class="footer_social_media_icon"
              ><i class="fab fa-youtube"></i
            ></a>
            <a
              :href="props.tiktok"
              target="_blank"
              class="footer_social_media_icon"
              ><i class="fab fa-tiktok"></i
            ></a>
          </p>
        </div>
        <div
          class="col-12 footer_credits text-center"
          style="padding-top: 5px; margin-top: 0px"
        >
          <span
            >&copy; Copyright <strong><span>KlikMedika 2023</span></strong
            >. All Rights Reserved.</span
          >
        </div>
      </div>
    </div>

    <a
      :href="
        'https://wa.me/' +
        props.wa +
        '?text=Hallo admin, saya ingin request demo aplikasi'
      "
      target="_blank"
      class="float"
    >
      <i class="fab fa-whatsapp my-float"></i>
    </a>
  </section>
  <!-- Footer section exit -->
</template>

<style>
.float {
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 60px;
  right: 40px;
  background-color: #25d366;
  color: #fff;
  border-radius: 50px;
  text-align: center;
  font-size: 30px;
  box-shadow: 2px 2px 3px #999;
  z-index: 100;
}

.my-float {
  margin-top: 16px;
}
</style>

<script>
export default {
  props: ['props'],
}
</script>
