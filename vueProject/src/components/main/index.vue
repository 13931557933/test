<template>
  <div>
    <div class="header">
      <img src="../../assets/logo_02.gif" />
      <div style="display:inline;position:relative;bottom:25px;">游戏介绍</div>
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
      <div>
        <div class="kaijiangjilu">
          <span>开奖记录</span>
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
        <div class="zhankuang">
            <span>战况</span>

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
  </div>
</template>

<script>
export default {
  data() {
    return {
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
        },
        {
          num1: "46524767",
          num2: "123",
          time: "12:00"
        }
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
    },
  }
};
</script>

<style>
.header {
  background: #000;
  color: #fff;
  height: 50px;
  line-height: 50px;
}
.header img:first-child {
  width: 150px;
  position: relative;
  top: -7px;
  margin-right: 30px;
  margin-left: 120px;
}
.header img:nth-child(5) {
  width: 30px;
  float: right;
  margin-right: 5px;
  margin-top: 10px;
}
.login {
  float: right;
  margin-right: 20px;
  height: 30px;
  line-height: 6px;
  margin-top: 10px;
  background: #0dbdbd;
  border: 0;
  color: #fff;
}
.drop {
  float: right;
  margin-right: 20px;
}
.el-button:active,
.el-button:hover {
  border: 0;
  color: #fff;
  background: #0dbdbd;
}
.content {
  background-color: rgb(25, 29, 31);
  height: 1340px;
  padding-top: 50px;
}
.content div:first-child {
  float: left;
}
.kaijiangjilu {
  box-sizing: border-box;
  width: 513px;
  height: 340px;
  background-color: rgb(33, 37, 39);
  margin-left: 330px;
  padding: 24px 23px;
}
.el-table td {
  border-bottom: none !important;
  text-align: center;
}
.zu2 {
  float: left;
  box-sizing: border-box;
  padding: 24px 30px;
  width: 770px;
  height: 616px;
  margin-left: 40px;
  background-color: rgb(33, 37, 39);
}
.zhankuang {
  box-sizing: border-box;
  width: 515px;
  height: 266px;
  margin-left: 330px;
  margin-top: 350px;
  padding: 24px 23px;
  background-color: rgb(33, 37, 39);
}
.el-table th.is-leaf{
    border-bottom: none !important;
}
</style>
