<template>
  <TextInput title="xxx input"></TextInput>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TextInput from "@/components/TextInput.vue";

@Component({
  components: {
    TextInput
  }
})
export default class Form extends Vue {}
</script>
