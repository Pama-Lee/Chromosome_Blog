<template>
    <div class="mdui-container">
        <div class="mdui-row" style="padding-top:30px">
            <div class="mdui-col-sm-4 mdui-col-md-3">
                <!-- 这里是个人信息 -->
                <img class="mdui-center" style="max-height: 200px;" src="https://static.vecteezy.com/system/resources/previews/006/487/917/original/man-avatar-icon-free-vector.jpg">
                <div class="info">
                    <h1>{{ username }}</h1>
                    
                </div>
            </div>
            <div class="mdui-col-sm-8 mdui-col-md-9">
                
                    <div class="mdui-typo" v-if="articleList.length == 0">
                        <div class="mdui-typo-display-2-opacity info" style="padding:60px">暂无文章</div>
                    </div>
                    <div v-if="articleList.length > 0">
                        <div style="padding-top:20px" v-for="item in articleList" :key="item.id">
                            <div class="mdui-card">
                                <div class="mdui-card-media">
                                    <img style="max-height: 150px; overflow: hidden; object-fit: cover;" :src="item.banner">
                                </div>
                                <div class="mdui-card-primary">
                                    <div class="mdui-card-primary-title">{{ item.title }}</div>
                                    <div class="mdui-card-primary-subtitle">{{ item.title }}</div>
                                </div>
                            </div>
                        </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name: 'UserPage',
    data(){
        return{
            userInfo:{},
            articleList:[
                {
                    title: "标题",
                    summary: "简介",
                    // 这里的banner图应当是缩略图
                    banner: ""
                },
                {
                    title: "标题2",
                    summary: "简介2",
                    banner: "https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/07/enoki-mushroom-1296x728-header.jpg"
                }
            ],
            username: ""
        }
    },
    methods: {
        getInfo(){
            this.$api.post("/user/userInfo",{
                user: this.user,
            }).then((res)=>{
                if(res.data.code == 200){
                    this.userInfo = res.data.userInfo;
                    this.articleList = res.data.articleList;
                }
            })
        }
    }
    ,
    mounted(){
        this.username = this.$route.params.user;
        this.getInfo()
    }
}
</script>

<style>
.info{
    text-align: center;
    
}
</style>
