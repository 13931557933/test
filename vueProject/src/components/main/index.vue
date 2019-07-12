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
            <div
              style="
              overflow: hidden;
              width: 100%;
              height: calc(100% - 20px);
              position: relative;"
            >
              <div class="second">
                <img class="img_num" src="../../assets/3.png" />
                <img class="img_bom" src="../../assets/2nd.png" />
              </div>
              <div class="first">
                <img class="img_num" src="../../assets/4.png" />
                <img class="img_bom" src="../../assets/1st.png" />
              </div>
              <div class="third">
                <img class="img_num" src="../../assets/1.png" />
                <img class="img_bom" src="../../assets/3rd.png" />
              </div>
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
        <div style="overflow: hidden;">
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
        <div>
          <div class="keyboard">
            <span class="keyboard_msg">0号代表10号</span>
            <ul style="padding-left: 0;text-align: center;">
              <li>
                <img
                  :src="item1.src"
                  class="keyboard_img"
                  v-for="(item1,index) in images_1"
                  :key="`${index}`"
                />
              </li>
              <li>
                <img
                  :src="item2.src"
                  class="keyboard_img"
                  v-for="(item2,index) in images_2"
                  :key="`${index}`"
                />
              </li>
              <li>
                <img
                  :src="item3.src"
                  class="keyboard_img"
                  v-for="(item3,index) in images_3"
                  :key="`${index}`"
                />
              </li>
            </ul>
          </div>
          <div class="touzhuzuhe">
            <div class="touzhu_1">
              <img class="touzhu_img1" src="../../assets/first.png" />
              <span>5</span>
            </div>
            <div class="touzhu_2">
              <img src="../../assets/second.png" />
              <span>2</span>
            </div>
            <div class="touzhu_3">
              <img src="../../assets/third.png" />
              <span>6</span>
            </div>
          </div>
          <div style="
          float: left;
          width: 22%;
          margin-left: 20px;">
            <div class="touzhujine">
              <div>
                <div class="qihao_div">
                  <span class="qihao">期号</span>
                  <span>12</span>
                </div>
                <img class="img_clock" src="../../assets/clock.png" />
                <span class="txt_clock">02:30</span>
              </div>
              <div style="margin-top: 5%;">
                <span class="txt_touzhujine">投注金额</span>
              </div>
              <div class="touzhujine_div">
                <div class="touzhujine_div_1"><span>0</span></div>
                <div class="touzhujine_div_2"><span>1/2</span></div>
                <div class="touzhujine_div_3"><span>2X</span></div>
              </div>
              <div class="touzhujine_bottom">
                <span>当前注数</span>
                <span>1</span>
                <span>总金额</span>
                <span>0</span>
              </div>
            </div>
            <el-button class="btnTouZhu">投注</el-button>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="touzhuzhibo">
          <span style="color:#fff">投注直播</span>
          <el-table
            class="zhiboTable"
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
      tableData1: [],
      images_1: [
        { index: 1, src: require("../../assets/k1.png") },
        { index: 2, src: require("../../assets/k2.png") },
        { index: 3, src: require("../../assets/k3.png") },
        { index: 4, src: require("../../assets/k4.png") },
        { index: 5, src: require("../../assets/k5.png") },
        { index: 6, src: require("../../assets/k6.png") },
        { index: 7, src: require("../../assets/k7.png") },
        { index: 8, src: require("../../assets/k8.png") },
        { index: 9, src: require("../../assets/k9.png") },
        { index: 0, src: require("../../assets/k0.png") }
      ],
      images_2: [
        { index: 11, src: require("../../assets/k1.png") },
        { index: 12, src: require("../../assets/k2.png") },
        { index: 13, src: require("../../assets/k3.png") },
        { index: 14, src: require("../../assets/k4.png") },
        { index: 15, src: require("../../assets/k5.png") },
        { index: 16, src: require("../../assets/k6.png") },
        { index: 17, src: require("../../assets/k7.png") },
        { index: 18, src: require("../../assets/k8.png") },
        { index: 19, src: require("../../assets/k9.png") },
        { index: 20, src: require("../../assets/k0.png") }
      ],
      images_3: [
        { index: 21, src: require("../../assets/k1.png") },
        { index: 22, src: require("../../assets/k2.png") },
        { index: 23, src: require("../../assets/k3.png") },
        { index: 24, src: require("../../assets/k4.png") },
        { index: 25, src: require("../../assets/k5.png") },
        { index: 26, src: require("../../assets/k6.png") },
        { index: 27, src: require("../../assets/k7.png") },
        { index: 28, src: require("../../assets/k8.png") },
        { index: 29, src: require("../../assets/k9.png") },
        { index: 30, src: require("../../assets/k0.png") }
      ]
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
