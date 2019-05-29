declare global {
    interface Window {
        ResizeObserver: {
            new (callback: ResizeObserverCallback): ResizeObserver;
        };
    }
}
declare const useResizeObserver: (el: HTMLElement | null, cb: ResizeObserverCallback) => void;
export default useResizeObserver;
//# sourceMappingURL=useResizeObserver.d.ts.map