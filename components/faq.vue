<template>
  <section id="faqs" class="faq_wrapper">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center mb-5">
          <p class="faq_subtitle">We're here to help</p>
          <h2 class="faq_title">Frequently asked questions</h2>
        </div>
      </div>
      <div class="row align-items-center">
        <div class="col-sm-12 col-lg-8 mb-5 mb-lg-0">
          <div class="accordion accordion-flush" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  judul
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">question</div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-lg-4">
          <img src="five/images/faq.png" class="img-fluid" />
        </div>
      </div>
    </div>
  </section>
</template>
