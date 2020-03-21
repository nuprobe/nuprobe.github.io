<template>
  <div>
    <h1>Orders</h1>
    <b-table
      hover
      empty-text="There are no records to show"
      show-empty
      bordered
      stacked="md"
      :items="orders"
      :fields="fields"
      :current-page="currentPage"
      :per-page="perPage"
      >
    </b-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentPage: 1,
      perPage: 5,
      pageOptions: [5, 10, 15],
      fields: [
        {
          key: 'order_id',
          label: 'Order ID',
          sortable: true,
        },
        {
          key: 'order_date',
          label: 'Order Date',
          sortable: false,
        },
        {
          key: 'order_status',
          label: 'Order Status',
          sortable: false,
        },
      ],
    };
  },
  computed: {
    orders() {
      return this.$store.getters.getOrders;
    },
  },
};
</script>