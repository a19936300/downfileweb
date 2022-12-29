<template>
  <HelloWorld />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data(){
    return {
      fileInfos: [
        {
          name: "uTools_1662617250712.png",
          path: "C:\\Users\\binbin\\OneDrive\\3资料Resource\\政保\\云连接\\uTools_1662617250712.png",
          isFile: true
        },
        {
          name: "云连接",
          path: "C:\\Users\\binbin\\OneDrive\\3资料Resource\\政保\\云连接",
          isFile: false
        }
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
