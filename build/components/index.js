export const About = () => import('../..\\components\\about.vue' /* webpackChunkName: "components/about" */).then(c => wrapFunctional(c.default || c))
export const Banner = () => import('../..\\components\\banner.vue' /* webpackChunkName: "components/banner" */).then(c => wrapFunctional(c.default || c))
export const Faq = () => import('../..\\components\\faq.vue' /* webpackChunkName: "components/faq" */).then(c => wrapFunctional(c.default || c))
export const Features = () => import('../..\\components\\features.vue' /* webpackChunkName: "components/features" */).then(c => wrapFunctional(c.default || c))
export const Footer = () => import('../..\\components\\footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const Galery = () => import('../..\\components\\galery.vue' /* webpackChunkName: "components/galery" */).then(c => wrapFunctional(c.default || c))
export const Header = () => import('../..\\components\\header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c))
export const Pricing = () => import('../..\\components\\pricing.vue' /* webpackChunkName: "components/pricing" */).then(c => wrapFunctional(c.default || c))
export const Services = () => import('../..\\components\\services.vue' /* webpackChunkName: "components/services" */).then(c => wrapFunctional(c.default || c))
export const Testimonials = () => import('../..\\components\\testimonials.vue' /* webpackChunkName: "components/testimonials" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
