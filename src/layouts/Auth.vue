<template>
  <div>
    <Headers/>
    <b-container>
      <router-view/>
    </b-container>
  </div>
</template>
<script>
import Headers from '@/components/Headers';

export default {
  components: {
    Headers,
  },
};
</script>