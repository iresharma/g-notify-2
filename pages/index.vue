<template>
  <div class="wrapper">
    <h1>G-Notify</h1>
    <p>blah blah</p>
    <br />
    <el-row :gutter="30">
      <el-button color="#118ab2" @click="authorize">Get Started</el-button>
      <el-button color="#118ab2" :icon="InfoFilled" link>Learn More</el-button>
    </el-row>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
}
h1 {
  text-align: center;
  color: white;
  font-size: 100px;
  text-shadow: 5px 5px 1px #118ab2;
  transition: text-shadow 0.25s linear;
}
h1:hover {
  text-shadow: -5px -5px 1px #e63946;
}
</style>

<script setup>
import { InfoFilled } from "@element-plus/icons-vue";
</script>

<script>
export default {
  methods: {
    async authorize() {
      const {data} = await useFetch("http://localhost:3001/auth", {
        headers: {
          "Content-Type": "application/json"
        }
      });
      window.open(data.value, '_blank')
    }
  }
};
</script>