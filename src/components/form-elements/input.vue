<template>
  <v-text-field
    v-model="formData[formItem.name]"
    v-validate="formItem.validation"
    :label="formItem.name | capitalize"
    :counter="formItem.counter"
    :error-messages="errors.collect(formItem.name.toLowerCase())"
    :data-vv-name=formItem.name.toLowerCase()
    :required="formItem.required"
    :multi-line="formItem.multiLine">
  </v-text-field>
</template>

<script>
export default {
  props: {
    formItem: {
      type: Object,
      required: true
    },
    formData: {
      type: Object,
      required: true
    }
  }
};
</script>

<style>

</style>
