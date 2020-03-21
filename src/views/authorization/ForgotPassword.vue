<template>
  <b-row class="wrapperForm">
    <b-col sm='4'>
      <h1 class="text-center">Forgot password</h1>
      <ValidationObserver slim v-slot="{ handleSubmit }">
        <b-form @submit.prevent="handleSubmit(onSubmit)">
          <ValidationProvider name="email" rules="required|email" v-slot="{ errors , failed }">
            <b-form-group
              label="Email:"
              label-for="input-email"
            >
              <b-form-input
                id="input-email"
                v-model="form.email"
                type="text"
                placeholder="Enter email"
                :class="{'is-error':failed}"
              ></b-form-input>
              <span class="error-message">{{ errors[0] }}</span>
            </b-form-group>
          </ValidationProvider>
          <div class="d-flex justify-content-around">
            <b-button type="submit" variant="info" @click="$router.push('/login')">Back</b-button>
            <b-button type="submit" variant="primary">Submit</b-button>
          </div>
        </b-form>
      </ValidationObserver>
    </b-col>
  </b-row>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: null,
      },
    };
  },
  methods: {
    async onSubmit() {
      try {
        this.$router.push('/login');
      } catch (error) {
        console.error(error, 'error');
      }
    },
  },
};
</script>
<style lang="scss">
.wrapperForm{
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>