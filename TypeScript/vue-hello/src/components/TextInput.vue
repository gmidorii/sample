<template>
  <div>
    <div>{{ title }}</div>
    <form v-on:submit="submit">
      <input type="text" v-on:input="input">
      <button type="submit"></button>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class Form extends Vue {
  @Prop({ default: "default title" })
  private title!: string;

  input() {
    console.log("hoge");
  }

  submit() {
    console.log("submit");
  }
}
</script>
