<template>
  <base-layout>
    <layout>
      <h2>Главная</h2>
    </layout>
  </base-layout>
</template>
  

<script setup lang="ts">
import { ref } from 'vue'
import baseLayout from "../layout/base-layout.vue"
import Layout from "../layout/Layout.vue"

components: [baseLayout, Layout];

const props = defineProps({
  name: String,
  msg: { type: String, default: "Test" }
})
const count = ref(0);




</script>

<style lang="less">
.customers {}
</style>
  