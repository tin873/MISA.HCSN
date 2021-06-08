<template>
    <div class="content" v-bind:class="{isToggleContent: isToggleContent}">
        <router-view />
    </div>
</template>

<script>
export default {
    props: ['isToggleContent'],
    name: 'Content',
}
</script>

<style scoped>
.isToggleContent{
    background-color: blue !important;
    left: 3.7%;
    width: 94.6%;
}
</style>
