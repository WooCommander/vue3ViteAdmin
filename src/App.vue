

<template>
  <div class="app">
    <router-view />
  </div>
</template>
<script setup leng="ts">
import { onMounted } from "vue"
import { WebSocketClient } from "ws";

onMounted(() => {

  f1()

})
const f1 = (() => {
  const socket = new WebSocket("ws://localhost:8080");
  // var WebSocketClient = require('websocket').client;
  // const socket = new WebSocketClient('ws://localhost:8080');

  // Connection opened
  socket.addEventListener('open', function (event) {
    socket.send('Hello Server!');
  });

  // Listen for messages
  socket.addEventListener('message', function (event) {
    console.log('Message from server ', event.data);
  });

})


</script>
<style lang="less" >
.app {}
</style>
