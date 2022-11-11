<template>
    <div class="wrapper">
        <MailBox v-for="index in [1,2,3,4,5]" :key="index" />
    </div>
</template>

<style scoped lang="scss">
.wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2em;
}
</style>

<script>
definePageMeta({
    layout: 'dashboard'
})
</script>