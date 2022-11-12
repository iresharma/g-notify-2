<template>
    <div class="wrapper">
        <el-row>
            <el-col v-for="index in [1,2,3,4,5]" :key="index" :xl="6" :lg="8" :md="8" :sm="12" :xs="24">
                <MailBox />
            </el-col>
        </el-row>
    </div>
</template>

// <style scoped lang="scss">
// .wrapper {
//     display: grid;
//     grid-template-columns: 1fr 1fr 1fr 1fr;
//     grid-gap: 2em;
// }
// </style>

<script>
definePageMeta({
    layout: 'dashboard'
})
</script>