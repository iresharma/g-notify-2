<template>
  <div class="common-layout">
    <el-container>
      <Navbar />
      <el-main style="height: calc(100vh - 12vh); overflowY: scroll; overflowY: hidden;">
        <slot />
      </el-main>
      <el-footer>
        <slot name="Footer">
            Footer
        </slot>
      </el-footer>
    </el-container>
  </div>
</template>