<template>
<IndexBase />
</template>

<script>
import IndexBase from './pages/IndexBase.vue';


export default {
  name: 'App',
  components: {
    IndexBase
  },
  mounted(){
     // 全局body样式
     document.getElementsByTagName('body')[0].className = 'mdui-appbar-with-toolbar mdui-theme-primary-indigo mdui-theme-accent-pink';
  }
}
</script>

