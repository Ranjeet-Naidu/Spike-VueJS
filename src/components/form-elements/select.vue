<template>
  <v-select
    v-model="data"
    v-validate="formItem.validation"
    :items=formItem.items
    :label="formItem.name | capitalize"
    :error-messages="errors.collect(formItem.name.toLowerCase())"
    :data-vv-name=formItem.name.toLowerCase()
    :required="formItem.required"
    @input="onInput">
  </v-select>
</template>

<script>
import formMixin from './form-mixin';

export default {
  mixins: [ formMixin ],
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
  }
};
</script>

<style>

</style>
