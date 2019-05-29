import { ProviderList_viewer } from '__generated__/ProviderList_viewer.graphql';
import React from 'react';
interface Props {
    viewer: ProviderList_viewer;
    teamId: string;
    retry: () => void;
}
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Props, "teamId" | "viewer" | "retry">> & import("react-relay").ComponentRef>;
export default _default;
//# sourceMappingURL=ProviderList.d.ts.map