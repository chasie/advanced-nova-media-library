import VuejsClipper from 'vuejs-clipper';
import IndexField from './components/fields/IndexField';
import DetailField from './components/fields/DetailField';
import FormField from './components/fields/FormField';
import VueRx from "vue-rx";
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'

Nova.booting((Vue, router) => {
  Vue.use(VueRx);
  Vue.use(VuejsClipper);
  Vue.use(CoolLightBox);

  Vue.component('index-advanced-media-library-field', IndexField);
  Vue.component('detail-advanced-media-library-field', DetailField);
  Vue.component('form-advanced-media-library-field', FormField);
});
