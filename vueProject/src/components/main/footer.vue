<template>
  <div id="Footer">
    <LiveBroadcast/>
    <LotteryNumber/>
  </div>
</template>
<script>
import LiveBroadcast from './LiveBroadcast'
import LotteryNumber from './LotteryNumber'
export default {
  name: 'Footer',
  components: {
    LiveBroadcast,
    LotteryNumber
  }
}
</script>

<style lang='scss'>
  #Footer {
    width: 100%;
    padding:20px 12%;
    box-sizing: border-box;
    display: flex;
    display: -webkit-flex;
    justify-content:center;
  }
</style>
