<template>
  <b-row>
    <h1 class="mt-3">NGSure Kit
      <i
        id="popover-button-variant"
        tabindex="0"
        style="font-size: 17px;"
        class="fas fa-question-circle">
      </i>
      <b-popover target="popover-button-variant" variant="info" triggers="focus">
        <p>Substitution example: COSM460 7: 140781602 G>C</p>
        <p>Deletion example: COSM29014 4: 54723607 GAC></p>
        <p>Insertion example: COSM1326 4: 54726019 TG>TgcctatG</p>
      </b-popover>
    </h1>
    <b-col sm='12'>
      <ValidationObserver slim v-slot="{ handleSubmit }">
      <b-form inline @submit.prevent="handleSubmit(addCard)">
        <b-col sm="12" md='3'>
          <label class="d-block text-left" for="input-name">Kit name</label>
          <ValidationProvider name="kit name" rules="required" v-slot="{ errors, failed }">
            <b-input
              id="input-name"
              class="mb-2 mt-1 mr-sm-2 mb-sm-0"
              placeholder="Enter kit name"
              v-model="form.name"
              type="text"
              :class="{'is-error':failed}"
            ></b-input>
            <div class="error-message">{{ errors[0] }}</div>
          </ValidationProvider>
        </b-col>
        <b-col sm="12" md='3'>
          <label
            class="d-block text-left"
            for="input-position">
            Chromosome: Position (GRCh38)
          </label>
          <ValidationProvider name="position" rules="required" v-slot="{ errors, failed }">
            <b-input
              id="input-position"
              class="mb-2 mt-1 mr-sm-2 mb-sm-0"
              placeholder="Enter position"
              v-model="form.position"
              type="text"
              :class="{'is-error':failed}"
            ></b-input>
            <div class="error-message">{{ errors[0] }}</div>
          </ValidationProvider>
        </b-col>
        <b-col sm="12" md='3'>
          <label class="d-block text-left" for="input-mutation">Mutation</label>
          <ValidationProvider name="mutation" rules="required" v-slot="{ errors, failed }">
            <b-input
              id="input-mutation"
              class="mb-2 mt-1 mr-sm-2 mb-sm-0"
              placeholder="Enter mutation"
              v-model="form.mutation"
              type="text"
              :class="{'is-error':failed}"
            ></b-input>
            <div class="error-message">{{ errors[0] }}</div>
          </ValidationProvider>
        </b-col>
        <b-col sm="12" md='3' style="margin-top: 26px">
          <b-button variant="primary" type="submit" >
            <b-spinner v-if="isSpinner" type="grow" small  label="Spinning"></b-spinner>
            Add
          </b-button>
        </b-col>
      </b-form>
      </ValidationObserver>
      <div v-if="kits.length">
        <div class="text-right">
          <b-button variant="danger" @click="removeAllCards">Clear all</b-button>
        </div>
        <b-card style="width:100%" class="mt-3" v-for="(kit, i) in kits" :key="i">
          <b-card-text>
            <p>Kit Name: {{kit.name}},
              Chromosome: {{kit.position.split(':')[0]}},
              Position: {{kit.position.split(':')[1]}},
              Mutation: {{kit.mutation}}
            </p>
            <p>>NC_000001.11:99700-100300 Homo sapiens chromosome 1, GRCh38.p13 Primary Assembly</p>
            <p>...gaatctttctgaaggttatgtcatcacactCactaagcacacagagaataatgtctagaat...</p>
          </b-card-text>

          <b-card-text>A second paragraph of text in the card.</b-card-text>
          <b-button variant='danger' @click="removeCard(i)" class="mr-3">Remove</b-button>
          <b-button variant='success' @click="openModalConfirmOrder(i)">Precesed</b-button>
        </b-card>
      </div>
    </b-col>
    <b-modal
      @ok="saveOrder"
      :title="`${selectedOrder.name} Chr.:${selectedOrder.position} ${selectedOrder.mutation}`"
      id="modalConfirm">
      <p>Difficulty: Low 95% confidence of success</p>
      <p>Price: $150</p>
      <p>ETA: 2</p>
    </b-modal>
  </b-row>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: null,
        position: null,
        mutation: null,
      },
      isSpinner: false,
      kits: [],
      selectedOrder: [],
    };
  },
  methods: {
    addCard() {
      alert('2222');
      // this.isSpinner = !this.isSpinner;
      // this.kits.push(this.form);
      // this.isSpinner = !this.isSpinner;
    },
    removeCard(i) {
      this.kits.splice(i, 1);
    },
    removeAllCards() {
      this.kits = [];
    },
    openModalConfirmOrder(i) {
      this.selectedOrder = this.kits[i];
      this.$bvModal.show('modalConfirm');
    },
    saveOrder() {
      const date = new Date();
      this.$store.commit('ADD_ORDER', {
        order_id: `f${(~~(Math.random() * 1e8)).toString(16)}`,
        order_date: `${date.getFullYear()}-${date.getMonth()}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`,
        order_status: 'new',
      });
    },
  },
};
</script>