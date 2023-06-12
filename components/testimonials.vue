<template>
  <!-- Reviews section -->
  <section id="reviews" class="testimonial_wrapper">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <p class="testimonials_subtitle">Clients love us</p>
          <h2 class="testimonials_title">Testimonials</h2>
        </div>
      </div>
      <div class="row align-items-center mb-5">
        <div class="col-sm-12 col-lg-4 mb-5 mb-lg-0">
          <img
            src="<?php echo base_url() ?>image/<?=$testi->user_profile?>"
            class="img-fluid"
          />
        </div>
        <div class="col-sm-12 col-lg-7 offset-lg-1 mb-5 mb-lg-0">
          <div class="testimonials_card">
            <h3>name</h3>
            <p class="testimonials_role">job</p>
            <p class="testimonials_text">testi</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Reviews section exit -->
</template>
