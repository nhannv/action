import { ComponentType, LazyExoticComponent } from 'react';
declare type ImportThunk<T> = () => Promise<{
    default: T;
}>;
interface LazyExoticPreload<T extends ComponentType<any>> extends LazyExoticComponent<T> {
    preload: ImportThunk<T>;
}
declare const lazyPreload: <T extends ComponentType<any>>(thunk: ImportThunk<T>) => LazyExoticPreload<T>;
export default lazyPreload;
//# sourceMappingURL=lazyPreload.d.ts.map