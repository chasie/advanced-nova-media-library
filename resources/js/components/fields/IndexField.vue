<template>
  <div v-if="field.type === 'media'">
    <CoolLightBox
      :items="[imageUrl]"
      :index="index"
      @close="index = null">
    </CoolLightBox>
    <img v-if="value" :src="imageUrl" style="object-fit: cover;" class="rounded w-64 h-64" />
    <span v-else>&mdash;</span>
  </div>
  <div v-else>
    <span v-if="field.multiple">
      {{ field.value.map(({ file_name }) => file_name).join(', ') }}
    </span>
    <span v-else>{{ field.value[0].file_name }}</span>
  </div>
</template>

<script>
  import CoolLightBox from 'vue-cool-lightbox'
  import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'

  export default {
    props: ['resourceName', 'field'],
    components: {
      CoolLightBox,
    },
    computed: {
      value() {
        return this.field.value[0];
      },
      imageUrl() {
        return this.value.__media_urls__.indexView;
      },
    },
    data: function () {
      return {
        index: null
    };
  },
  };
</script>
