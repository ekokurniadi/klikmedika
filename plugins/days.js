import moment from 'moment';
import Vue from 'vue'

moment.locale('id');

Vue.filter('formatDate', (value) => {
  if (value) {
    return moment(String(value)).format('dddd, D MMMM YYYY')
}
})

Vue.filter('formatDateWithoutDays', (value) => {
  if (value) {
    return moment(String(value)).format('D MMMM YYYY')
}
})

Vue.filter('formatDateWithTime', (value) => {
  if (value) {
    return moment(String(value)).format('dddd, D MMMM YYYY, h:mm:ss a')
}
})

Vue.filter('stripHTML', function (value) {
  const div = document.createElement('div')
  div.innerHTML = value
  const text = div.textContent || div.innerText || ''
  return text
});

