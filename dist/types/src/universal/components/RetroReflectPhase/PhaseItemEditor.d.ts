import React from 'react';
import { WithAtmosphereProps } from 'universal/decorators/withAtmosphere/withAtmosphere';
import { WithMutationProps } from 'universal/utils/relay/withMutationProps';
interface Props extends WithMutationProps, WithAtmosphereProps {
    meetingId: string;
    nextSortOrder: () => number;
    phaseEditorRef: React.RefObject<HTMLDivElement>;
    retroPhaseItemId: string;
    shadow?: number;
}
declare const _default: {
    new (props: Readonly<Pick<Pick<Props, "atmosphere" | "retroPhaseItemId" | "meetingId" | "phaseEditorRef" | "nextSortOrder" | "shadow"> & React.RefAttributes<any>, "ref" | "key" | "retroPhaseItemId" | "meetingId" | "phaseEditorRef" | "nextSortOrder" | "shadow">>): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Pick<Props, "atmosphere" | "retroPhaseItemId" | "meetingId" | "phaseEditorRef" | "nextSortOrder" | "shadow"> & React.RefAttributes<any>, "ref" | "key" | "retroPhaseItemId" | "meetingId" | "phaseEditorRef" | "nextSortOrder" | "shadow">>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Pick<Props, "atmosphere" | "retroPhaseItemId" | "meetingId" | "phaseEditorRef" | "nextSortOrder" | "shadow"> & React.RefAttributes<any>, "ref" | "key" | "retroPhaseItemId" | "meetingId" | "phaseEditorRef" | "nextSortOrder" | "shadow">> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
    };
    new (props: Pick<Pick<Props, "atmosphere" | "retroPhaseItemId" | "meetingId" | "phaseEditorRef" | "nextSortOrder" | "shadow"> & React.RefAttributes<any>, "ref" | "key" | "retroPhaseItemId" | "meetingId" | "phaseEditorRef" | "nextSortOrder" | "shadow">, context?: any): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Pick<Props, "atmosphere" | "retroPhaseItemId" | "meetingId" | "phaseEditorRef" | "nextSortOrder" | "shadow"> & React.RefAttributes<any>, "ref" | "key" | "retroPhaseItemId" | "meetingId" | "phaseEditorRef" | "nextSortOrder" | "shadow">>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Pick<Props, "atmosphere" | "retroPhaseItemId" | "meetingId" | "phaseEditorRef" | "nextSortOrder" | "shadow"> & React.RefAttributes<any>, "ref" | "key" | "retroPhaseItemId" | "meetingId" | "phaseEditorRef" | "nextSortOrder" | "shadow">> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
    };
    displayName: string;
    contextType: React.Context<import("../../Atmosphere").default | import("../../modules/demo/LocalAtmosphere").default | undefined>;
};
export default _default;
//# sourceMappingURL=PhaseItemEditor.d.ts.map