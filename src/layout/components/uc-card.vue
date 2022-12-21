<template>
  <div class="uc-card">
    <div>
      <div class="numbers">{{ props.numbers }}</div>
      <div class="cardName">{{ props.name }}</div>
    </div>
    <div class="iconBox">
      <i :class="props.iconClass"></i>
    </div>
  </div>
</template>
  

<script setup lang="ts">
import { ref, defineProps } from 'vue'
interface CardInterface {
  numbers: number,
  name: string,
  iconClass?: string
}
//fa-regular fa-eye
const props = withDefaults(defineProps<CardInterface>(), {
  iconClass: "fa-regular fa-eye",
  numbers: 1.245,
  name: "test name"
})



// defineProps({
//   msg: String
// })

const count = ref(0)
</script>

<style lang="less">
.uc-card {
  position: relative;
  background-color: #fff;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  .numbers {
    position: relative;
    font-size: 2em;
    font-weight: 500;

  }

  .cardName {
    color: #999;
  }

  .iconBox {
    color: #03a9f4;
  }
}
</style>
  