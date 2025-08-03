<template>
    <svg class="staffPaper" ref="staffPaper" viewBox="0 0 100 100">
        <template v-for="value in 5">
            <LazySvgStaff
                :translateY="paddingY"
                :heightPercent="heightPercent"
            ></LazySvgStaff>
        </template>
    </svg>
</template>

<script lang="ts" setup>
    const staffConfigInstance: StaffConfig = StaffConfig.getInstance();//DM服务实例
    const paddingY: Ref<number> = staffConfigInstance.getPaddingY();

    const props = defineProps({
        heightPercent: {type:Number, required: false, default: 10},
    });
    const staffPaper:Ref<HTMLElement | undefined> = ref<HTMLElement | undefined>();
</script>

<style lang="scss" scoped>
    @use "sass:math";
    @use "@/common.scss" as common;

    .staffPaper{
        @include common.fullViewWindow;
    }
</style>