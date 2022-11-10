<template>
  <div class="service-section">
    <div class="box" style="--ctrl:#89ec5b;"></div>
    <div class="content">
      <div class="icon"></div>
      <div class="text">
        <h3></h3>
        <p></p>
        <a href="#"></a>
      </div>
    </div>
  </div>
</template>
  

<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
</script>

<style lang="less">
.service-section {}
</style>
  