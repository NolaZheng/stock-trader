<template>
    <div>
        <h1> 點選 Portfolio 檢查目前狀態</h1>
        <h6> 點選 Save & Load 可保存或讀取資料</h6>
        <h6> 點選 End day 可重新開始新的一天</h6>
        <hr>
        <p>目前資金：{{funds | currency}}</p>
    </div>
</template>

<script>
export default {
    computed:{
        funds() {
            return this.$store.getters.funds;
        }
    }
}
</script>