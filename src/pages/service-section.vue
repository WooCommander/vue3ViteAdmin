<template>
  <div class="service-section">
    <div class="box" style="--ctrl:#89ec5b;">
      <div class="content ">
        <div class="icon"></div>
        <div class="text">
          <h3>Developement</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut corporis aspernatur dignissimos. Nesciunt nam
            sint quaerat deserunt! Vitae itaque eligendi voluptatem, maxime, illum aperiam unde necessitatibus neque
            quos
            vero nobis!</p>
          <a href="#">Read More</a>
        </div>
      </div>
    </div>
    <div class="box" style="--ctrl:#89ec5b;">
      <div class="content ">
        <div class="icon"></div>
        <div class="text">
          <h3>Developement</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut corporis aspernatur dignissimos. Nesciunt nam
            sint quaerat deserunt! Vitae itaque eligendi voluptatem, maxime, illum aperiam unde necessitatibus neque
            quos
            vero nobis!</p>
          <a href="#">Read More</a>
        </div>
      </div>
    </div>
    <div class="box" style="--ctrl:#89ec5b;">
      <div class="content ">
        <div class="icon"></div>
        <div class="text">
          <h3>Developement</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut corporis aspernatur dignissimos. Nesciunt nam
            sint quaerat deserunt! Vitae itaque eligendi voluptatem, maxime, illum aperiam unde necessitatibus neque
            quos
            vero nobis!</p>
          <a href="#">Read More</a>
        </div>
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
.service-section {
  margin: 10px;
}
</style>
  