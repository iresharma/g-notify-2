<template>
  <div class="mail-box">
    <div class="img"></div>
    <div class="info-box">
      <h3>This is Sainath</h3>
      <p class="info">This is Iresh</p>
      <p class="info">This is Esha</p>
      <p class="info">This is Akansha</p>

      <div class="button-bar">
        <el-button type="primary" text>More Info</el-button>
        <el-button color="#E63946">Send Test</el-button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mail-box {
  height: 45vh;
  width: 307px;
  border-radius: 24px;

  .img {
    height: 25vh;
    background-image: url("https://images.unsplash.com/photo-1661956602139-ec64991b8b16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=665&q=80");
  }

  .info-box {
    height: 15vh;
    border-bottom-left-radius: 24px;
    border-bottom-right-radius: 24px;

    padding: 13px;

    background-color: #052935;
    color: white;

    h3 {
      font-size: 20px;
    }

    .info {
      font-size: 13px;
      color: #ccc;
    }

    .button-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;

      margin-top: 10px;
    }
  }
}
</style>