<template>
  <div>
    <div class="header">
      <img src="../../assets/logo_02.gif" />
      <div class="youxijieshao">游戏介绍</div>
      <!-- <span class="youxijieshao">游戏介绍</span> -->
      <el-button class="login">登录</el-button>
      <el-dropdown class="drop" @command="menuTab">
        <span class="el-dropdown-link">
          {{language}}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="zhong">中文</el-dropdown-item>
          <el-dropdown-item command="ying">英文</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <img src="../../assets/中国国旗.png" />
    </div>
    <div class="content">
      <div style="
        overflow: hidden;
        width: 88%;
        margin: 0 auto;">
        <div class="left">
          <div class="kaijiangjilu">
            <span style="color:#fff">开奖记录</span>
            <el-table
              class="kaijiangTable"
              :data="tableData"
              style="width: 100%;margin-top:30px;"
              max-height="250"
              :show-header="false"
              :row-style="tableRowStyle"
            >
              <el-table-column prop="num1" align="center"></el-table-column>
              <el-table-column prop="num2" align="center"></el-table-column>
              <el-table-column prop="time" align="center"></el-table-column>
            </el-table>
          </div>
          <div class="zhankuang">
            <span>战况</span>
            <!-- <span>3</span>
          <span>4</span>
            <span>1</span>-->
            <div>
              <div class="second"></div>
              <div class="first"></div>
              <div class="third"></div>
            </div>
          </div>
        </div>
        <div class="zu2">
          <el-table
            :data="tableData"
            style="width: 100%"
            :row-style="tableRowStyle"
            :header-cell-style="tableRowStyle"
          >
            <el-table-column prop="num1" label="区块" align="center"></el-table-column>
            <el-table-column prop="num2" label="号码" align="center"></el-table-column>
            <el-table-column prop="time" label="时间" align="center"></el-table-column>
          </el-table>
        </div>
      </div>
      <div class="haomaqu">
        <div>
          <div class="jiangchi">
            <span>奖池</span>
            <span>0</span>
          </div>
          <div class="touzhuxiane">
            <span>投注限额</span>
            <span>0/0</span>
          </div>
          <span class="baifenbi">0%</span>
          <span class="txtTouZhu">投注组合</span>
        </div>
        <div class="keys"></div>
        <div class="touzhuzuhe">
          <div class="touzhu_1"></div>
          <div class="touzhu_2"></div>
          <div class="touzhu_3"></div>
        </div>
        <div style="float:left">
          <div class="touzhujine"></div>
          <el-button class="btnTouZhu">投注</el-button>
        </div>
      </div>
      <div class="bottom">
        <div class="touzhuzhibo">
          <span style="color:#fff">投注直播</span>
          <el-table
            :data="tableData"
            style="width: 100%;margin-top:30px;"
            max-height="250"
            :show-header="false"
            :row-style="tableRowStyle"
          >
            <el-table-column prop="num1" align="center"></el-table-column>
            <el-table-column prop="num2" align="center"></el-table-column>
            <el-table-column prop="time" align="center"></el-table-column>
          </el-table>
        </div>
        <div class="zu3">
          <el-table
            :data="tableData1"
            style="width: 100%"
            :row-style="tableRowStyle"
            :header-cell-style="tableRowStyle"
          >
            <el-table-column prop="time" label="时间" align="center"></el-table-column>
            <el-table-column prop="num1" label="期号" align="center"></el-table-column>
            <el-table-column prop="num2" label="开奖号码" align="center"></el-table-column>
            <el-table-column prop="money" label="金额" align="center"></el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import style from "../../../static/css/main.css";
export default {
  data() {
    return {
      style,
      language: "中文",
      tableData: [
        {
          num1: "46524767",
          num2: "123",
          time: "12:00"
        },
        {
          num1: "46524767",
          num2: "123",
          time: "12:00"
        },
        {
          num1: "46524767",
          num2: "123",
          time: "12:00"
        },
        {
          num1: "46524767",
          num2: "123",
          time: "12:00"
        }
      ],
      tableData1: []
    };
  },
  methods: {
    menuTab(e) {
      if (e == "zhong") {
        this.language = "中文";
      } else {
        this.language = "英文";
      }
    },
    tableRowStyle({ row, rowIndex }) {
      return "background-color: rgb(33, 37, 39);";
    }
  }
};
</script>

<style>
</style>
