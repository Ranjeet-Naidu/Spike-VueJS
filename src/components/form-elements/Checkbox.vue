<template>
  <div>
  <v-checkbox
    class="form-checkbox"
    v-model="data"
    value="true"
    v-validate="formItem.validation"
    type="checkbox"
    :label="formItem.name | capitalize"
    :error-messages="errors.collect(formItem.name.toLowerCase())"
    :data-vv-name=formItem.name.toLowerCase()
    :required="formItem.required"
    @input="onInput">
  </v-checkbox>
  </div>
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

<style lang="sass" scoped>
  .form-checkbox {
    padding-top: 18px;
  }
</style>
