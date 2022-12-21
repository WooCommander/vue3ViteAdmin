<template>
  <div class="uc-menu">
    <ul>
      <li>
        <router-link to="/">
          <span class="icon"><i class="fa-brands fa-apple"></i>
          </span>
          <span class="title">
            <h2>TirScript</h2>
          </span></router-link>
      </li>
      <li>
        <a href="#">
          <span class="icon"><i class="fa-solid fa-house-user"></i>

          </span>
          <span class="title">
            Dashboard
          </span>
        </a>
      </li>
      <li>
        <router-link to="/customers">
          <span class="icon"><i class="fa-solid fa-users"></i>
          </span>
          <span class="title">
            Пользователи
          </span>
        </router-link>

      </li>
      <li>
        <router-link to="/products">
          <span class="icon"><i class="fa-regular fa-message"></i>
          </span>
          <span class="title">
            Товары
          </span>
        </router-link>

      </li>
      <li>
        <router-link to="/markets">
          <span class="icon"><i class="fa-regular fa-message"></i>
          </span>
          <span class="title">
            Магазины
          </span>
        </router-link>

      </li>
      <li>
        <a href="#">
          <span class="icon"><i class="fa-sharp fa-solid fa-circle-info"></i>

          </span>
          <span class="title">
            Help
          </span>
        </a>

      </li>
      <li>
        <a href="#">
          <span class="icon"><i class="fa-solid fa-gear"></i>

          </span>
          <span class="title">
            Settings
          </span>
        </a>
      </li>
      <li>
        <a href="#">
          <span class="icon">
            <i class="fa-solid fa-right-from-bracket"> </i>

          </span>
          <span class="title">
            Sign Out
          </span>
        </a>
      </li>
    </ul>
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
.uc-menu {
  position: fixed;
  width: 300px;
  height: 100%;
  background: #003147;
  transform: 0.5s;
  overflow-x: hidden;


  ul {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;

    li {
      position: relative;
      width: 100%;
      list-style: none;
      color: #fff;

      a {
        position: relative;
        display: block;
        width: 100%;
        display: flex;
        text-decoration: none;
        color: #fff;
      }

      .icon {
        position: relative;
        display: block;
        min-width: 60px;
        height: 60px;
        line-height: 60px;
        text-align: center;
      }

      .title {
        display: block;
        padding: 0 10px;
        height: 60px;

        line-height: 60px;
        white-space: nowrap;
      }

      &:hover {
        background: #03a9f4;
      }

      &:nth-child(1) {
        a {
          display: flex;
          margin-bottom: 20px;
        }

        &:hover {
          background: transparent;


        }
      }
    }
  }
}

.uc-menu.active {
  width: 60px;
  transition: .5s;
}
</style>
  