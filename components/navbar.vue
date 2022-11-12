<template>
  <div class="navbar">
    <div class="left-container">
      <Logo />
    </div>
    <div class="right-container">
      
    <el-button color="#000"  round>
      <img src="../assets/images/user.png" alt="">&nbsp;
      Username
    </el-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.navbar {
  width: 100vw;
  height: 7vh;
  position: fixed;
  top: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  // border-bottom: 0.5px solid grey;

  background-color: #212124;

  padding: 0 1em;

  .left-container {
    display: flex;
    align-items: center;
  }

  .right-container {
    margin-right: 5em;
    img {
      height: 1em;
    }
  }
}
</style>

<script>
import {User} from "@element-plus/icons-vue"
export default {
  props: {
    title: {
      type: String,
      required: false
    }
  },
  components: {
    User
  }
};
</script>