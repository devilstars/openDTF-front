<template>
  <div>
    <label class="block text-gray-700 text-sm font-bold mb-2" :for="id">
      {{ label }}
    </label>
    <input
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      :id="id"
      :type="type"
      :placeholder="placeholder"
      v-model="data[id]"
      :class="{'mb-3 border-red-500': checkValidationError(id)}">
    <template v-if="checkValidationError(id)" v-for="(item, index) in errors[id]">
      <p class="text-red-500 text-xs italic" :key="id + '_' + index">{{ item }}</p>
    </template>
  </div>
</template>

<script>
  export default {
    name: "AppFormInput",
    props: {
      errors: {
        type: Object,
        default() {
          return {}
        },
      },
      type: {
        type: String,
        default: 'text'
      },
      label: {
        type: String,
        default: 'Текстовое поле',
      },
      placeholder: {
        type: String,
        default: ''
      },
      id: {
        type: String
      },
      data: {
        type: Object
      },
    },
    methods: {
      checkValidationError(key) {
        let keys = Object.keys(this.errors);
        let hasErrors = keys.indexOf(key);
        return hasErrors !== -1;
      }
    }
  }
</script>

<style scoped>

</style>
