<template>
  <div class="common-layout">
    <el-container>
      <Navbar />
      <el-main>
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