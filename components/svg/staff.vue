<template>
    <g class="staff" ref="staff" :transform="`translate(${translateX}, ${translateY})`"></g>
</template>

<script lang="ts" setup>
    import * as d3 from 'd3';

    const props = defineProps({
        translateX: {type:Number, required: false, default: 0},
        translateY: {type:Number, required: false, default: 0},
        heightPercent: {type:Number, required: false, default: 10},
        widthPercent: {type:Number, required: false, default: 100},
    });

    const staff :Ref<SVGSVGElement | undefined> = ref<SVGSVGElement | undefined>();
    
    function generateStaff(staff: SVGSVGElement | undefined):void {
        if(!staff){
            return;
        }
        let value = d3.select(staff)
        .selectAll("line")
        .data(d3.range(5))
        .enter()
        .append("line")
        .attr("x1", 0)
        .attr("y1", (d) => d * props.heightPercent / 5)
        .attr("x2", 100)
        .attr("y2", (d) => d * props.heightPercent / 5)
        .attr("stroke", "black")
        .attr("stroke-width", props.heightPercent / 50);
    }
    
    onMounted(() => {
        generateStaff(staff.value);
    });
</script>

<style lang="scss" scoped>
    @use "sass:math";
    @use "@/common.scss" as common;

    .staff{
        display: flex;
    }
</style>