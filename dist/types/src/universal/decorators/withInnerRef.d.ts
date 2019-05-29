import React, { Ref } from 'react';
export interface WithInnerRefProps<T> {
    innerRef?: Ref<T>;
}
declare const withInnerRef: <T, P extends WithInnerRefProps<T>>(ComposedComponent: React.ComponentType<P>) => React.ForwardRefExoticComponent<React.PropsWithoutRef<P> & React.RefAttributes<T>>;
export default withInnerRef;
//# sourceMappingURL=withInnerRef.d.ts.map