<template>
  <div class="mail-box">
    <div class="img">
      <img src="../assets/images/edit.png" alt="">
    </div>
    <div class="info-box">
      <h3>This is Sainath</h3>
      <p class="info">This is Iresh</p>
      <p class="info">This is Esha</p>
      <p class="info">This is Akansha</p>

      <div class="button-bar">
        <div >
          <img src="../assets/images/Iconsax/Bold/Vector.png" />
          <p>10</p>
          <img src="../assets/images/Iconsax 2/Bold/codecircle.png" />
        </div>
        <div>
          <el-button type="primary" text>Use</el-button>
          <el-button color="#E63946">Test</el-button>
        </div>
      </div>
      
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mail-box {
  height: 51vh;
  width: 307px;
  border-radius: 24px;

  .img {
    height: 25vh;
    background-image: url("https://images.unsplash.com/photo-1661956602139-ec64991b8b16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=665&q=80");

    display: flex;
    justify-content: flex-end;
    align-self: start;

    img {
      height: 30px;
      background-color: white;
      border-radius: 12px;
      margin: 10px;

      cursor: pointer;
    }
  }

  .info-box {
    height: 21vh;
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
      

      margin-top: 20px;

      div {
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        * {
          margin: 5px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>