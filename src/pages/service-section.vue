<template>
  <div class="service-section">
    <div class="container">
      <div class="box" style="--clr:#89ec5b;">
        <div class="content ">
          <div class="icon"><i class="fa-solid fa-cart-shopping"></i></div>
          <div class="text">
            <h3>Developement</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              necessitatibus neque
              quos
              vero nobis!</p>
            <a href="#">Read More</a>
          </div>
        </div>
      </div>
      <div class="box" style="--clr:#eb5ae5;">
        <div class="content ">
          <div class="icon"><i class="fa-solid fa-cart-shopping"></i></div>
          <div class="text">
            <h3>Developement</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. axime,
              quos
              vero nobis!</p>
            <a href="#">Read More</a>
          </div>
        </div>
      </div>
      <div class="box" style="--clr:#5b98eb;">
        <div class="content ">
          <div class="icon"><i class="fa-solid fa-cart-shopping"></i></div>
          <div class="text">
            <h3>Developement</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              quos
              vero nobis!</p>
            <a href="#">Read More</a>
          </div>
        </div>
      </div>
    </div>
    <div class="container c1">
      <div class="percent" data-text="JS" style="--num:70">
        <div class="dot"></div>
        <svg>
          <circle cx="70" cy="70" r="70"></circle>
          <circle cx="70" cy="70" r="70"></circle>

        </svg>
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
  // margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;

  .container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    pad: 60px 0;
    gap: 60px;

    .box {
      position: relative;
      width: 300px;
      height: 360px;
      background: #2e2e2e;
      display: flex;
      justify-content: center;
      align-items: center;


      .content {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
        padding: 0 20px;
        width: 100%;
        height: 100%;
        gap: 20px;
        overflow: hidden;

        .icon {
          color: var(--clr);
          width: 80px;
          height: 80px;
          box-shadow: 0 0 0 4px #2e2e2e, 0 0 0 6px var(--clr);
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 2em;
          background-color: #2e2e2e;
          transition: 0.5s ease-in-out;
        }
      }
    }
  }

  .container .box:hover .content .icon {
    box-shadow: 0 0 0 4px #2e2e2e, 0 0 0 300px var(--clr);
    background-color: var(--clr);
    color: #2e2e2e;
  }

  .container .box .content .text p {
    // height: 75px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    color: #777;
    transition: 0.5s ease-in-out;
  }

  .container .box:hover .content .text p {
    color: #2e2e2e;
  }

  .container .box .content .text h3 {
    font-size: 1.5em;
    color: #fff;
    font-weight: 500;
    transition: 0.5s ease-in-out;
  }

  .container .box:hover .content .text h3 {
    color: #2e2e2e;
  }

  .container .box .content .text a {
    position: relative;
    color: #2e2e2e;
    background-color: var(--clr);
    padding: 8px 15px;
    display: inline-block;
    text-decoration: none;
    font-weight: 500;
    margin-top: 10px;
    transition: 0.5s ease-in-out;
  }

  .container .box:hover .content .text a {
    background-color: #2e2e2e;
    color: var(--clr);
  }

  .container .box::before {
    content: "";
    position: absolute;
    inset: -10px 50px;
    border-top: 4px solid var(--clr);
    border-bottom: 4px solid var(--clr);
    z-index: -1;
    transform: skewY(15deg);
    transition: 0.5s ease-in-out;
  }

  .container .box:hover::before {
    transform: skewY(0deg);
    inset: -10px 40px;
  }

  .container .box::after {
    content: "";
    position: absolute;
    inset: 60px 10px;
    border-left: 4px solid var(--clr);
    border-right: 4px solid var(--clr);
    z-index: -1;
    transform: skew(15deg);
    transition: 0.5s ease-in-out;
  }

  .container .box:hover::after {
    transform: skew(0deg);
    inset: 40px -10px;
  }

  .c1 {
    margin-top: 50px;

    .percent {
      position: relative;
      width: 150px;
      height: 150px;
    }

    .percent::before {
      content: attr(data-text);
      position: absolute;
      inset: 20px;
      background-color: #555;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-size: 1.5em;
      letter-spacing: .1em;
      text-transform: uppercase;

    }

    .percent svg {
      position: relative;
      width: 150px;
      height: 150px;
      transform: rotate(270deg);

      circle {
        width: 100%;
        height: 100%;
        fill: transparent;
        stroke-width: 3;
        stroke: rgba(0, 0, 0, .05);
        transform: translate(5px, 5px);
      }

      circle:nth-child(2) {
        stroke: #555;
        stroke-dasharray: 440;
        stroke-dashoffset: calc(440-(440*var(--num))/100);

      }
    }
  }
}
</style>
  