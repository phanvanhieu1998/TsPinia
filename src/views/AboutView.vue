<script setup>
const currentListObj = defineModel('listObj')
// const lastName = defineModel('lastName')
</script>

<template>
    <input type="text" v-model="currentListObj.a.b.first" />
    <input type="text" v-model="currentListObj.a.b.last" />
</template>