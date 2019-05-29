import React from 'react';
import { LoadingDelayRef } from 'universal/hooks/useLoadingDelay';
declare type Props = {
    delay?: number;
    height?: number | string;
    width?: number | string;
    loadingDelayRef?: LoadingDelayRef;
    showAfter?: number;
    spinnerSize?: number;
};
declare const LoadingComponent: React.ForwardRefExoticComponent<Props & React.RefAttributes<{}>>;
export default LoadingComponent;
//# sourceMappingURL=LoadingComponent.d.ts.map