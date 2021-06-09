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
    left: 3.7%;
    width: 94.6%;
}
</style>
