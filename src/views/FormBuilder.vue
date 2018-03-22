<template>
  <form>
    <v-layout row wrap>
      <v-flex xs6 v-for="formItem in formBuilderData" :key="formItem.name">
        <input-ele v-if="formItem.type === 'STRING'" v-bind="{ formItem, formData }"></input-ele>
        <select-ele v-else-if="formItem.type === 'REF_CODE'" v-bind="{ formItem, formData }"></select-ele>
        <checkbox-ele v-else-if="formItem.type === 'BOOLEAN'" v-bind="{ formItem, formData }"></checkbox-ele>
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
  components: {
    'input-ele': Input,
    'select-ele': Select,
    'checkbox-ele': Checkbox
  },
  created() {
    this.getFormBuiderData();
  },
  data() {
    return {
      formData: {}
    };
  },
  methods: {
    async formIsValid() {
      let isValid = true;

      for (let child of this.$children) {
        await child.$validator.validateAll();
        if (child.errors.items.length) {
          // return Promise.reject();
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
      getFormBuiderData: 'formBuilder/getFormBuiderData'
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
