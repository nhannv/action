import { MutableRefObject } from 'react';
export declare type LoadingDelayRef = MutableRefObject<{
    start: number;
    stop: number;
    forceUpdate: () => void;
}>;
declare const useLoadingDelay: () => {
    loadingDelay: number;
    loadingDelayRef: MutableRefObject<{
        start: number;
        stop: number;
        forceUpdate: () => void;
    }>;
};
export default useLoadingDelay;
//# sourceMappingURL=useLoadingDelay.d.ts.map