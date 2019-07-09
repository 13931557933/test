<template>
    <div>
        <div class="header">
            <img src="../../assets/logo_02.gif">
            <div style="display:inline;position:relative;bottom:5px;">游戏介绍</div>
            <el-button class="login">登录</el-button>
            <el-dropdown class="drop" @command="menuTab">
                <span class="el-dropdown-link" >
                    {{language}}<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="zhong">中文</el-dropdown-item>
                    <el-dropdown-item command="ying">英文</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            language:"中文",
        }
    },
    methods:{
        menuTab(e){
            if(e == "zhong"){
                this.language = "中文";
            }else{
                this.language = "英文";
            }
        }
    }
}
</script>

<style>
    .header{
        background: #000;
        color: #fff;
        height: 50px;
        line-height: 50px;
    }
    .header img{
        width: 100px;
        /* margin-top: 7px; */
        position: relative;
        top: 7px;
        margin-right: 20px;
        margin-left: 50px;
    }
    .login{
            float: right;
            margin-right: 20px;
            height: 30px;
            line-height: 6px;
            margin-top: 10px;
            background: #0dbdbd;
            border: 0;
            color: #fff;
    }
    .drop{
        float:right;
        margin-right: 20px;
    }
    .el-button:active,.el-button:hover{
        border: 0;
        color: #fff;
        background: #0dbdbd;
    }
</style>
