<template>
  <form>
    <v-layout row wrap>
      <v-flex xs6 v-for="formItem in formBuilderData" :key="formItem.name">
        <input-ele v-if="formItem.datagramValueType === 'STRING'" v-bind="{ formItem }" v-model="formData"></input-ele>
        <select-ele v-else-if="formItem.datagramValueType === 'REF_CODE'" v-bind="{ formItem }" v-model="formData"></select-ele>
        <checkbox-ele v-else-if="formItem.datagramValueType === 'BOOLEAN'" v-bind="{ formItem }" v-model="formData"></checkbox-ele>
      </v-flex>
    </v-layout>
    <v-btn @click="submit">submit</v-btn>
  </form>
</template>

<script>
import Input from '../components/form-elements/Input.vue';
import Select from '../components/form-elements/Select.vue';
import Checkbox from '../components/form-elements/Checkbox.vue';
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';

export default {
  created() {
    this.getFormBuiderData();
  },
  data() {
    return {
      formData: {}
    };
  },
  components: {
    'input-ele': Input,
    'select-ele': Select,
    'checkbox-ele': Checkbox
  },
  methods: {
    async formIsValid() {
      let isValid = true;

      for (let child of this.$children) {
        await child.$validator.validateAll();
        if (child.errors.items.length) {
          isValid = false;
        }
      }

      if (!isValid) {
        return Promise.reject();
      }
    },
    async submit() {
      try {
        await this.formIsValid();
        console.log('SUBMIT HERE', this.formData);
      } catch (err) {
        console.log('NOIFY ERROR');
      }
    },
    ...mapActions({
      getFormBuiderData: 'formBuilder/getFormBuilderData'
    })
  },
  computed: {
    ...mapGetters({
      formBuilderData: 'formBuilder/formBuilderData'
    })
  }
};
</script>

<style lang="sass" scoped>
  form {
    width: 100%;
  }
</style>
