<template>
  <v-text-field
    v-model="data"
    v-validate="formItem.validation"
    :label="formItem.name | capitalize"
    :counter="formItem.counter"
    :error-messages="errors.collect(formItem.name.toLowerCase())"
    :data-vv-name=formItem.name.toLowerCase()
    :required="formItem.required"
    :multi-line="formItem.multiLine"
    @input="onInput">
  </v-text-field>
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
    value: {
      type: Object,
      required: true
    }
  }
};
</script>

<style>

</style>
