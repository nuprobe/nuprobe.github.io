<template>
  <b-row class="wrapperForm">
    <b-col sm='12' md='4'>
      <h1 class="text-center wrapperForm_title mb-3">Request for Access</h1>
      <div class="loginForm  ">
        <ValidationObserver slim v-slot="{ handleSubmit }">
          <b-form class="loginForm_form" @submit.prevent="handleSubmit(onSubmit)">
            <ValidationProvider
              slim
              name="first name"
              rules="required"
              v-slot="{ errors , failed }">
              <b-form-group>
                <b-form-input
                  id="input-firstName"
                  v-model="form.firstName"
                  type="text"
                  :class="{'is-error':failed}"
                  placeholder="ENTER FIRST NAME"
                ></b-form-input>
                <span class="error-message">{{ errors[0] }}</span>
              </b-form-group>
            </ValidationProvider>
            <ValidationProvider slim name="last name" rules="required" v-slot="{ errors , failed }">
              <b-form-group>
                <b-form-input
                  id="input-lastName"
                  v-model="form.lastName"
                  type="text"
                  :class="{'is-error':failed}"
                  placeholder="ENTER LAST NAME"
                ></b-form-input>
                <span class="error-message">{{ errors[0] }}</span>
              </b-form-group>
            </ValidationProvider>
            <ValidationProvider slim name="company" rules="required" v-slot="{ errors , failed }">
              <b-form-group>
                <b-form-input
                  id="input-company"
                  v-model="form.company"
                  type="text"
                  placeholder="COMPANY"
                  :class="{'is-error':failed}"
                ></b-form-input>
                <span class="error-message">{{ errors[0] }}</span>
              </b-form-group>
            </ValidationProvider>
            <ValidationProvider
              slim
              name="email"
              rules="required|email"
              v-slot="{ errors , failed }"
              >
              <b-form-group>
                <b-form-input
                  id="input-email"
                  v-model="form.email"
                  type="text"
                  :class="{'is-error':failed}"
                  placeholder="ENTER EMAIL"
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
        firstName: null,
        lastName: null,
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
<style lang="scss" scoped>
.wrapperForm{
  display: flex;
  justify-content: center;
  align-items: center;
  &_title{
    color: #fff;
    font-family:  'OpenSans-SemiBold' , sans-serif;
    font-size: 35px;
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
</style>