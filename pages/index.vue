<template>
    <svg class="layout" viewBox="0 0 100 100">
        <LazySvgStaff
            :translateY="5"
            :heightPercent="10"
        ></LazySvgStaff>
    </svg>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
    @use "sass:math";
    @use "@/common.scss" as common;

    .layout{
        @include common.fullViewWindow;
    }
</style>