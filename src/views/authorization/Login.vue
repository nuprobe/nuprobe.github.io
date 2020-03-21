<template>
  <b-row class="login">
    <b-col sm="12" md="5" class="mt-2">
      <p class="login_title">ngsure</p>
      <p class="login_text">
        NGSure is a rapid turnaround (≤48hr) custom assay kit/service
        for confirming ambiguous NGS findings.
        NGSure assays, based on qPCR and/or Sanger, can be used to confirm mutations
        in high homology genes or mutations with low
        variant allele frequencies down to 0.1%.  Learn more from our
        <router-link  class="login_link" to="/login">White Paper.</router-link>
      </p>
      <p class="register_text">
        Early Access by Invitation Only
      </p>
      <button class="register_button" @click="$router.push('/register')">
        apply for early access
      </button>
      <div class="loginForm mb-5 ">
        <p class="loginForm_title">ngsure user login</p>
        <ValidationObserver slim v-slot="{ handleSubmit }">
          <b-form class="loginForm_form mt-3" @submit.prevent="handleSubmit(onSubmit)">
            <ValidationProvider name="username" rules="required" v-slot="{ errors , failed }">
              <b-form-group>
                <b-form-input
                  v-model="form.username"
                  type="text"
                  placeholder="ENTER USERNAME"
                  :class="{'is-error':failed}"
                ></b-form-input>
                <span class="error-message">{{ errors[0] }}</span>
              </b-form-group>
            </ValidationProvider>
            <ValidationProvider name="password" rules="required|min:5" v-slot="{ errors , failed }">
              <b-form-group>
                <b-form-input
                  v-model="form.password"
                  type="password"
                  :class="{'is-error':failed}"
                  placeholder="ENTER PASSWORD"
                ></b-form-input>
                <span class="error-message">{{ errors[0] }}</span>
              </b-form-group>
            </ValidationProvider>
            <div class="d-flex justify-content-between align-items-center">
              <router-link class="loginForm_link d-block text-right" to='/forgot/password'>
                Forgot password
              </router-link>
              <div class="text-center">
                <button type="submit" class="loginForm_button" >Sign In</button>
              </div>
            </div>
          </b-form>
        </ValidationObserver>
      </div>
    </b-col>
  </b-row>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: null,
        password: null,
      },
    };
  },
  methods: {
    async onSubmit() {
      try {
        this.$router.push('/');
      } catch (error) {
        console.error(error, 'error');
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.login{
  color: #fff;
  &_title{
    color: #B5CE2F;
    text-transform: uppercase;
    font-size: 36px;
    font-family:  'OpenSans-SemiBold' , sans-serif;
    margin-top: 35px;
    margin-bottom: 15px;
  }
  &_text{
    font-size: 15px;
    font-family:  'OpenSans-Regular' , sans-serif;
    line-height: 1.3;
  }
  &_link{
    color: #fff;
    &:link {
      text-decoration: underline;
    }
  }
}
.register{
  &_text{
    text-transform: uppercase;
    font-size: 15px;
    margin-top: 75px;
    margin-bottom: 20px;
    font-family:  'OpenSans-SemiBold' , sans-serif;
  }
  &_button{
    background: #0054F1;
    color: #fff;
    text-transform: uppercase;
    font-size: 15px;
    border: none;
    padding: 10px 13px;
    border-radius: 3px;
    margin-bottom: 40px;
    font-family:  'OpenSans-Regular' , sans-serif;
  }
}
.loginForm{
  &_title{
    font-size: 15px;
    text-transform: uppercase;
    font-family:  'OpenSans-Regular' , sans-serif;
  }
  &_form{
    min-width: 300px;
    background: #0054F1;
    padding: 25px 24px;
    border: 1px solid #02B9FE;
    font-family:  'OpenSans-Regular' , sans-serif;
  }
  &_button{
    background-color: #081571;
    border: none;
    padding: 10px 20px;
    text-transform: uppercase;
    border-radius: 3px;
    color: #fff;
    font-family:  'OpenSans-Regular' , sans-serif;
  }
  &_link{
    color: #fff;
    font-family:  'OpenSans-Regular' , sans-serif;
    font-size: 14px;
  }
}
.form-control{
  font-size: 15px;
  padding: 22px 12px;
  border-radius: 0;
  background-clip: border-box;
}
@media screen and (max-width: 600px) {
  .register_text {
    margin-top: 45px;
  }
}
</style>