<template>
  <v-checkbox
    class="form-checkbox"
    v-model="checkValue"
    value="true"
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
  created() {
    // hack v-checkbox doesnt seem to like dynamic model
    this.checkValue = this.formData[this.formItem.name];
  },
  updated() {
    // hack v-checkbox doesnt seem to like dynamic model
    this.formData[this.formItem.name] = this.checkValue;
  },
  data: () => {
    return {
      checkValue: null
    };
  },
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
