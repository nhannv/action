import React, { ComponentType, ReactNode } from 'react';
interface Options {
    Loader?: ReactNode;
    Error?: ComponentType<{
        error: any;
    }>;
    props?: {
        [key: string]: any;
    };
    size?: number;
    loadingDelay?: number;
    menuLoadingWidth?: number;
}
declare const renderQuery: (ReadyComponent: React.ComponentType<any>, options?: Options) => (readyState: any) => JSX.Element;
export default renderQuery;
//# sourceMappingURL=renderQuery.d.ts.map