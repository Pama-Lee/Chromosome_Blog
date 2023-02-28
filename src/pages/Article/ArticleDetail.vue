<template>
    <div class="mdui-container">
        <div class="mdui-typo">
            <div class="mdui-row" style="padding-top: 40px;">
                <div class="mdui-col-xs-12 mdui-col-sm-12 mdui-col-md-10 mdui-col-lg-10 mdui-col-offset-md-1 mdui-col-offset-lg-1">
                    <div class="mdui-card">
                <div class="mdui-card-media">
                    <img style="  max-height: 300px;
  overflow: hidden; object-fit: cover;" :src="article.banner"/>
                <div class="mdui-card-media-covered">
                 <div class="mdui-card-primary">
                  <div class="mdui-card-primary-title">{{ article.title }}</div>
      </div>
    </div>
  </div>
                <div class="mdui-typo">
                    <div style="padding: 30px" v-html="article.content" v-highlight></div>
                </div>
            </div>
                </div>
            </div>
            <div class="mdui-fab-wrapper" id="up" style="position: fixed; right: 20px; bottom: 20px;">
                <button class="mdui-fab mdui-color-theme-accent" @click="returnToTop">
                    <i class="mdui-icon material-icons">arrow_upward</i>
                </button>
                </div>
        </div>
    </div>
    <div id="footer" style="padding-top: 20px;">
                <div>
                    <div class="mdui-typo">
                        <div class="mdui-divider"></div>
                        <div style="text-align: center; padding: 30px;">
                            Designed by <a href="https://www.pamalee.cn" target="_blank">Pamalee</a> © 2020-2023 All Rights Reserved.
                            <br>Powered by <a href="https://www.pamalee.cn" target="_blank">Chromosome</a>-A Plugin of Nucleus
                        </div>
                    </div>
                </div>
        </div>
</template>

<script>
import mdui from 'mdui';
export default {
    name: 'ArticleDetail',
    data() {
        return {
            article: {
                content: "",
                title: "",
                banner: ""
            },
            user: "",
            articleID: ""
        }
    },
    mounted() {
        this.user = this.$route.params.user;
        this.articleID = this.$route.params.article;
        this.getArticle();
        let fab = new mdui.Fab('#up');
        fab.show()
    },
    methods: {
        returnToTop() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        },
        changeStyle(){
            // 修改table样式
            const TableclassName = 'mdui-table mdui-table-hoverable';
            // 响应式类
            const TableclassName2 = 'mdui-table-fluid';
            this.article.content = this.article.content.replace(/<table>/g, `<div class="${TableclassName2}"><table class="${TableclassName}">`);
            this.article.content = this.article.content.replace(/<\/table>/g, `</table></div>`);
            // 修改引用样式,字体颜色变浅
            const BlockquoteclassName = 'mdui-typo mdui-text-color-grey-600';
            this.article.content = this.article.content.replace(/<blockquote>/g, `<blockquote class="${BlockquoteclassName}">`);
            // 修改标题样式, 加粗
            
    

        }
        ,
       getArticle() {
          this.$api.post('/App/chr/getArticle',{
            user: this.user,
            id: this.articleID
          }).then((response) => {
               this.article.content = response.data.data.content;
                this.article.title = response.data.data.title;
                document.title = response.data.data.title;
                this.article.banner = response.data.data.banner;
                this.changeStyle();
           }, (response) => {
               console.log(response);
           });
       }
    }
}
</script>
