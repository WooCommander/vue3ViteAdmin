<template>
  <div class="shablon">

  </div>
</template>
  

<script setup lang="ts">
import { ref, PropType, defineComponent, defineProps } from 'vue'
interface PropsInterface {
  numbers?: number,
  name?: string,
}

const props = withDefaults(defineProps<PropsInterface>(), {
  id: "1",
  name: "Default name",

})
// defineProps({
//   msg: String
// })

const count = ref(0)
</script>

<style lang="less">
.shablon {}
</style>
  