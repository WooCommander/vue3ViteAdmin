<template>
  <div class="wrap">
    <div class="box">
      <div class="form">
        <h2>Sign in</h2>
        <div class="inputBox">
          <input type="text" name="" required="required" id="">
          <span>User name</span>
          <i></i>
        </div>
        <div class="inputBox">
          <input type="password" name="" required="required" id="">
          <span>Password</span>
          <i></i>
        </div>
        <div class="links">
          <a href="#">Forgot Password</a>
          <a href="#">Signup</a>
        </div>
        <input type="submit" value="Login">
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
.wrap {
  background: #23242a;
  min-height: 100vh;
  min-width: 100vw;
  align-items: center;
  display: flex;
  justify-content: center;

  .box {
    position: relative;
    width: 380px;
    height: 370px;
    background: #1c1c1c;
    border-radius: 8px;
    overflow: hidden;

    &::before {
      content: "";
      position: absolute;
      top: -50%;
      left: -50%;
      width: 380px;
      height: 420px;
      background: linear-gradient(0deg, transparent, #45f3ff);
      transform-origin: bottom right;
      animation: animate 6s linear infinite;
    }

    &::after {
      content: "";
      position: absolute;
      top: -50%;
      left: -50%;
      width: 380px;
      height: 420px;
      background: linear-gradient(360deg, transparent, #45f3ff);
      transform-origin: bottom right;
      animation: animate 6s linear infinite;
      animation-delay: -3s;
    }

    @keyframes animate {
      0% {
        transform: rotate(0deg);
      }

      100% {
        transform: rotate(360deg);
      }
    }

    .form {
      position: absolute;
      inset: 2px;
      background: #28292d;
      z-index: 10;
      border-radius: 8px;
      padding: 40px 50px;
      display: flex;
      flex-direction: column;

      h2 {
        color: #45f3ff;
        font-weight: 500;
        text-align: center;
        letter-spacing: 0.1em;

      }

      .inputBox {
        position: relative;
        margin-top: 35px;

        input {
          position: relative;
          width: 100%;
          padding: 20px 10px 10px;
          background: transparent;
          border: none;
          outline: none;
          color: #23242a;
          font-size: 1em;
          letter-spacing: .05em;
          z-index: 10;

          &:valid~span,
          &:focus~span {
            color: #45f3ff;
            transform: translateY(-34px);
            font-size: .75em;

          }

          &:valid~i,
          &:focus~i {
            height: 44px;

          }
        }

        span {
          position: absolute;
          left: 0;
          padding: 20px 0px 10px;
          font-weight: 1em;
          color: #8f8f8f;
          pointer-events: none;
          letter-spacing: .05em;
          transition: .5s;

        }

        i {
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 2px;
          background-color: #45f3ff;
          border-radius: 4px;
          transition: .5s;
          pointer-events: none;
          z-index: 9;
        }
      }

      .links {
        display: flex;
        justify-content: space-between;

        a {
          margin: 10px 0;
          font-size: .75em;
          color: #8f8f8f;
          text-decoration: none;

          &:hover,
          &:nth-child(2) {
            color: #45f3ff
          }
        }
      }

      input[type="submit"] {
        border: none;
        outline: none;
        background: #45f3ff;
        padding: 11px 25px;
        width: 100px;
        margin-top: 10px;
        border-radius: 4px;
        font-weight: 600;
        cursor: pointer;
      }

    }

  }

}
</style>
  