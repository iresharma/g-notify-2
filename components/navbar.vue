<template>
  <div class="navbar">
    <div class="left-container">
      <Logo />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.navbar {
  width: 100vw;
  height: 7vh;
  position: sticky;
  top: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 0.5px solid grey;

  padding: 0 1em;

  .left-container {
    display: flex;
    align-items: center;
  }
}
</style>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false
    }
  }
};
</script>