<template>
  <div class="uc-cardbox">

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
.uc-cardbox {}
</style>
  