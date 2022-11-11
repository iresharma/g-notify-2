<template>
  <div>
    <Navbar />

    <el-row class="tac">
      <el-col :span="5">
        <h5 class="mb-2"></h5>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          style="position: fixed; height: 100vh; width: 20vw; border: none; background-color: #212124;"
        >
          <el-menu-item index="1">
            <el-icon>
              <icon-menu />
            </el-icon>
            <img src="../assets/images/Vector.png" />&nbsp;
            <span>Home</span>
          </el-menu-item>
          <el-menu-item index="2" disabled>
            <el-icon>
              <document />
            </el-icon>
            <span>Templates</span>
          </el-menu-item>
          <el-menu-item index="3">
            <el-icon>
              <setting />
            </el-icon>
            <span>Templating rules</span>
          </el-menu-item>
          <el-menu-item index="4">
            <el-icon>
              <setting />
            </el-icon>
            <span>Mail</span>
          </el-menu-item>
          <el-menu-item index="5">
            <el-icon>
              <setting />
            </el-icon>
            <span>Assets</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="19">
        <slot />
      </el-col>
    </el-row>
    <Footer />
  </div>
</template>

  
<script lang="ts" setup>
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>
  