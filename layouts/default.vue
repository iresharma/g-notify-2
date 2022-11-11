<template>
  <div class="common-layout">
    <el-container style="flex-direction: column;">
      <Navbar />
      <el-main style="height: calc(100vh - 12vh);">
        <slot />
      </el-main>
      <Footer />
    </el-container>
  </div>
</template>

