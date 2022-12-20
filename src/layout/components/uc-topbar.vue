<template>
  <div class="uc-topbar">
    <!-- <div class="toggle" @click="$emit('toggleMenu')"></div> -->
    <div class="toggle" @click="toggleMenu"></div>
    <div class="search">
      <label>
        <input type="text" placeholder="Search here">
        <i class="fa fa-solid fa-magnifying-glass"></i>
      </label>

    </div>
    <div class="user">
      <img src="../assets/img/user.jpg" alt="">
    </div>
  </div>
</template>
  

<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})
const emit = defineEmits(['toggleMenu'])
function toggleMenu() {
  emit("toggleMenu");
}
const count = ref(0)
</script>

<style lang="less">
.uc-topbar {
  width: 100%;
  background: #fff;
  padding: 0 10px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .toggle {
    position: relative;
    width: 60px;
    height: 60px;
    cursor: pointer;

    &::before {
      content: '\f0c9';
      font-family: fontAwesome;
      position: absolute;
      width: 60px;
      height: 100%;
      line-height: 60px;
      font-size: 24px;
      text-align: center;
      color: #111;
    }
  }

  .search {
    position: relative;
    width: 400px;
    margin: 0 10px;

    label {
      position: relative;
      width: 100%;

      input {
        width: 100%;
        height: 40px;
        border-radius: 40px;
        padding: 5px 20px;
        padding-left: 35px;
        outline: none;
        border: 1px solid rgba(0, 0, 0, .2);
      }

      .fa {
        position: absolute;
        left: 15px;
        top: 3px;
      }


    }
  }

  .user {
    position: relative;
    min-width: 50px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    cursor: pointer;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
  