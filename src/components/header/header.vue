<template>
  <div id="header">
          <!-- 头部顶部 -->
        <div class="header-top-wrap">
            <div class="header-top">
                <div class="header-top-left">
                    <span>尚品汇欢迎您！</span>
                    <span class="login">
                        <span>请</span>
                        <router-link to="login">登录</router-link>
                    </span>
                    <span class="line">|</span>
                    <span class="register">
                        <router-link to="register">免费注册</router-link>
                    </span>
                </div>
                <div class="header-top-right">
                    <span>
                        <a href="##">我的订单</a>
                    </span>
                    <span class="line">|</span>
                    <span>
                        <a href="##">我的购物车</a>
                    </span>
                    <span class="line">|</span>
                    <span>
                        <a href="##">我的尚品汇</a>
                    </span>
                    <span class="line">|</span>
                    <span>
                        <a href="##">尚品汇会员</a>
                    </span>
                    <span class="line">|</span>
                    <span>
                        <a href="##">企业采购</a>
                    </span>
                    <span class="line">|</span>
                    <span>
                        <a href="##">关注尚品汇</a>
                    </span>
                    <span class="line">|</span>
                    <span>
                        <a href="##">合作招商</a>
                    </span>
                    <span class="line">|</span>
                    <span>
                        <a href="##">商家后台</a>
                    </span>
                </div>
            </div>
        </div>
        <!-- 头部log和seach -->
        <div class="header-content-wrap">
            <div class="header-content">
                <div class="header-content-left">
                    <router-link to="/home" class="logo">
                        <img src="./image/logo.png" alt="">
                    </router-link>
                </div>
                <div class="header-content-right">
                    <div class="header-search">
                        <input class="search-content" type="text"  >
                        <router-link class="search-btn" to="/search">搜索</router-link>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
    #header{
        width: 100%;
        .header-top-wrap{
            width: 100%;
            height: 30px;
            background: #eaeaea;
            .header-top{
                width: 1200px;
                margin: 0 auto;
                display: flex;
                justify-content: space-between;
                line-height: 30px;
                .line{
                    margin:0 10px 0 10px;
                    opacity: 0.5;
                }
            }
        }
        .header-content-wrap{
            width:100%;
            height: 106px;
            .header-content{
                width: 1200px;
                height: 100%;
                margin: 0 auto;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .header-content-left{
                    width:265px ;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    .logo{
                        width: 175px;
                        height: 56px;
                    }
                }
                .header-content-right{
                    width: 558px;
                    .header-search{
                        width: 100%;
                        height: 32px;
                        display: flex;
                        .search-content{
                            flex: 1;
                            border:2px solid #ea4a36;
                            padding: 5px;
                        }
                        .search-btn{
                            width: 68px;
                            height: 32px;
                            background:#ea4a36 ;
                            color: #fff;
                            text-align: center;
                            line-height: 32px;
                        }
                    }
                    
                }
            }
        }
    }
</style>