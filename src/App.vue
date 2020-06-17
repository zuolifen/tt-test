<template>
  <div id="app">
    <span  >{{message}}</span>
    <button @click="reverseMsg">点击切换</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  data:function(){
    return {
      message:'hello,你好'
    }
  },
  components: {
  },
  methods:{
    reverseMsg:function(){
      this.message = this.message.split('').reverse().join('')
    }
  }
}
</script>

<style>

</style>
