
// 动态适配H5宽度大小
export async function FitH5Page(res: UniApp.GetSystemInfoResult): Promise<void> {
    const isMobile: boolean = /iOS|Android/i.test(res.system);
    if (!isMobile) {
        const basic: string = "/static/pc.html";
        if (res.windowWidth > 768 && !/PC/i.test(location.href)) {
            window.location.replace(basic + window.location.hash);
        }
        // 监听窗口大小变化
        // 也可以 window.addEventListener("resize", () => {})
        uni.onWindowResize(() => {
            if (window.innerWidth > 768) {
                window.location.replace(basic + window.location.hash);
            }
        });
    }
}