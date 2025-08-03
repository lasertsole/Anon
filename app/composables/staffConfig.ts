export class StaffConfig {// 单例模式
    private static instance: StaffConfig = new StaffConfig();
    private constructor() {}
    public static getInstance(): StaffConfig {
        return this.instance;
    }

    private paddingY: Ref<number> = ref<number>(5);
    public getPaddingY(): Ref<number> {
        return this.paddingY;
    }

    public setPaddingY(paddingY: number): void {
        if(paddingY<=0 || paddingY >= 100) {
            return;
        }
        this.paddingY.value = paddingY;
    }

    private staffNum: Ref<number> = ref<number>(5);
    public getStaffNum(): Ref<number> {
        return this.staffNum;
    }
    public setStaffNum(staffNum: number): void {
        if(staffNum<=0 || staffNum >= 50) {
            return;
        }
        this.staffNum.value = staffNum;
    }

    private heightPercent: Ref<number> = ref<number>(10);
    public getHeightPercent(): Ref<number> {
        return this.heightPercent;
    }
    public setHeightPercent(heightPercent: number): void {
        if(heightPercent<=10 || heightPercent >= 100) {
            return;
        }
        this.heightPercent.value = heightPercent;
    }

    private gapPerStaff: Ref<number> = ref<number>(5);
    public getGapPerStaff(): Ref<number> {
        return this.gapPerStaff;
    }
    public setGapPerStaff(gapPerStaff: number): void {
        if(gapPerStaff<=0 || gapPerStaff >= 100) {
            return;
        }
        this.gapPerStaff.value = gapPerStaff;
    }

    public getMaxStaffNumPerPage(): number {
        return Math.floor((100 - this.gapPerStaff.value) / (this.heightPercent.value + this.gapPerStaff.value));
    }

    public getPageNum(): number {
        return this.staffNum.value / this.getMaxStaffNumPerPage();
    }

    private pageIndex: Ref<number> = ref<number>(1);
    public getPageIndex(): Ref<number> {
        return this.pageIndex;
    }
    public setPageIndex(pageIndex: number): void {
        if(pageIndex<=0 || pageIndex > this.getPageNum()) {
            return;
        }
        this.pageIndex.value = pageIndex;
    }
}