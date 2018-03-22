<template>
  <v-select
    v-model="formData[formItem.name]"
    v-validate="formItem.validation"
    :items=formItem.items
    :label="formItem.name | capitalize"
    :error-messages="errors.collect(formItem.name.toLowerCase())"
    :data-vv-name=formItem.name.toLowerCase()
    :required="formItem.required">
  </v-select>
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
