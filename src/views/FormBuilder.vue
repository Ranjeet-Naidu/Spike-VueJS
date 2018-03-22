<template>
  <form>
    <v-text-field
      v-model="name"
      label="Name"
      :counter="10"
      :error-messages="errors.collect('name')"
      v-validate="'required|max:10'"
      data-vv-name="name"
    ></v-text-field>
    <!-- <v-select
      :items="items"
      v-model="selectItems"
      label="Select"
      :error-messages="errors.collect('select')"
      v-validate="'required'"
      data-vv-name="select-items"
    ></v-select> -->
    <v-text-field
      v-model="surname"
      label="Surname"
      :counter="10"
      :error-messages="errors.collect('email')"
      v-validate="'required|max:10'"
      data-vv-name="email"
    ></v-text-field>
    <!-- <v-select
      :items="options"
      v-model="selectOptions"
      label="Select"
      :error-messages="errors.collect('select')"
      v-validate="'required'"
      data-vv-name="select-options"
    ></v-select> -->

    <!-- <v-btn @click="submit">submit</v-btn>
    <v-btn @click="clear">clear</v-btn> -->
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      surname: '',
      selectItems: null,
      items: [
        { value: '1', text: 'item 1' },
        { value: '2', text: 'item 2' },
        { value: '3', text: 'item 3' },
        { value: '4', text: 'item 4' }
      ],
      selectOptions: null,
      options: ['Option 1', 'Option 2', 'Option 3', 'Option 4']
    };
  }
};
</script>

<style>

</style>
