<template>
  <component v-bind:is='layout'></component>
</template>

<script>
import Guest from '@/layouts/Guest.vue';
import Auth from '@/layouts/Auth.vue';

export default {
  components: {
    'guest-layout': Guest,
    'auth-layout': Auth,
  },
  computed: {
    layout() {
      return this.$route.meta.layout;
    },
  },
};
</script>