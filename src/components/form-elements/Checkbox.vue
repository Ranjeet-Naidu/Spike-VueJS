<template>
  <v-checkbox
    class="form-checkbox"
    v-model="formData[formItem.name]"
    value="1"
    v-validate="formItem.validation"
    type="checkbox"
    :label="formItem.name | capitalize"
    :error-messages="errors.collect(formItem.name.toLowerCase())"
    :data-vv-name=formItem.name.toLowerCase()
    :required="formItem.required">
  </v-checkbox>
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

<style lang="sass" scoped>
  .form-checkbox {
    padding-top: 18px;
  }
</style>
