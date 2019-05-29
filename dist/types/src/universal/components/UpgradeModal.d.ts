import { UpgradeModal_viewer } from '__generated__/UpgradeModal_viewer.graphql';
import React from 'react';
import { WithAtmosphereProps } from 'universal/decorators/withAtmosphere/withAtmosphere';
interface Props extends WithAtmosphereProps {
    closePortal: () => void;
    viewer: UpgradeModal_viewer;
}
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Pick<Props, "viewer" | "closePortal">, "viewer" | "closePortal">> & import("react-relay").ComponentRef>;
export default _default;
//# sourceMappingURL=UpgradeModal.d.ts.map