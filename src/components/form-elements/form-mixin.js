export default {
  methods: {
    onInput() {
      if (this.ssEvents) {
        this.ssEvents({
          type: 'onChange'
        });
      }
    }
  },
  computed: {
    data: {
      get() {
        return this.value[this.formItem.name];
      },
      set(value) {
        this.$emit('input', {
          ...this.value,
          [this.formItem.name]: value
        });
      }
    }
  }
};
