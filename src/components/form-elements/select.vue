<template>
<div>
  <v-select
    v-model="interfacer"
    v-validate="formItem.validation"
    :items=formItem.items
    :label="formItem.name | capitalize"
    :error-messages="errors.collect(formItem.name.toLowerCase())"
    :data-vv-name=formItem.name.toLowerCase()
    :required="formItem.required"
    @input="onInput">
  </v-select>
</div>
</template>

<script>
export default {
  data() {
    return {
      mymodel: null
    };
  },
  props: {
    formItem: {
      type: Object,
      required: true
    },
    ssEvents: {
      type: Function,
      required: false
    },
    value: {
      type: Object,
      required: true
    }
  },
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
    interfacer: {
      get() {
        return this.value[this.formItem.name];
      },
      set(value) {
        this.$emit('input', {
          [this.formItem.name]: value
        });
      }
    }
  }
};
</script>

<style>

</style>
