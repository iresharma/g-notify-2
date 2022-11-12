<template>
  <div class="wrapper">
    <p>
      <img src="../../assets/images/alert-circle.png" />
      The tumbnails are rendered using a headless browser hence looks slightly different from the real website.
    </p>
    <el-row style="margin-top: 20px">
      <el-col v-for="index in [1,2,3,4,5]" :key="index" :xl="6" :lg="8" :md="8" :sm="12" :xs="24">
        <TemplateBox />
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "dashboard"
});
</script>
<style lang="scss" scoped>
p {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  border-radius: 8px;
  background: #f0d3d5;
  width: 60vw;
  text-align: center;
  color: #e63946;
  font-size: 15px;
  padding: 5px;

  img {
    margin-right: 10px;
  }
}
</style>