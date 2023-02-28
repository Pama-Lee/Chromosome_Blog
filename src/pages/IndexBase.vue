<template>
    <div class="mdui-appbar mdui-appbar-fixed" v-if="toolbar">
  <div class="mdui-toolbar mdui-color-theme">
    <a href="javascript:;" class="mdui-btn mdui-btn-icon">
      <i class="mdui-icon material-icons">menu</i>
    </a>
    <a href="javascript:;" class="mdui-typo-headline">Chromosome</a>
    <a href="javascript:;" class="mdui-typo-title">Blog</a>
    <div class="mdui-toolbar-spacer"></div>
    <a href="javascript:;" class="mdui-btn mdui-btn-icon">
      <i class="mdui-icon material-icons">search</i>
    </a>
    <a href="javascript:;" class="mdui-btn mdui-btn-icon">
      <i class="mdui-icon material-icons">refresh</i>
    </a>
    <a href="javascript:;" class="mdui-btn mdui-btn-icon">
      <i class="mdui-icon material-icons">more_vert</i>
    </a>
  </div>
</div>
<div>
    <router-view></router-view>
</div>
    </template>


<script>
export default {
    name: 'IndexBase',
    data() {
        return {
           toolbar: true
        }
    },
    mounted(){
       // 当检测到用户准备打印时，隐藏toolbar
        window.onbeforeprint = () => {
            this.toolbar = false;
            // 缩小页面
            document.getElementsByTagName('body')[0].style.zoom = 0.8;
            // 避免打印时出现滚动条
            document.getElementsByTagName('body')[0].style.overflow = 'hidden';
            // 隐藏footer
            document.getElementById('footer').style.display = 'none';
            // 隐藏fab
            document.getElementById('up').style.display = 'none';
        }
        // 当检测到用户取消打印时，显示toolbar
        window.onafterprint = () => {
            this.toolbar = true;
            // 恢复页面
            document.getElementsByTagName('body')[0].style.zoom = 1;
            // 恢复滚动条
            document.getElementsByTagName('body')[0].style.overflow = 'auto';
            // 显示footer
            document.getElementById('footer').style.display = 'block';
            // 显示fab
            document.getElementById('up').style.display = 'block';
        }
    }
}
</script>