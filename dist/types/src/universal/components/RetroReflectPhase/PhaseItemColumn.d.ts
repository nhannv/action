import { PhaseItemColumn_meeting } from '__generated__/PhaseItemColumn_meeting.graphql';
import React from 'react';
import { WithAtmosphereProps } from 'universal/decorators/withAtmosphere/withAtmosphere';
import { WithMutationProps } from 'universal/utils/relay/withMutationProps';
interface Props extends WithAtmosphereProps, WithMutationProps {
    idx: number;
    description: string | null;
    editorIds: ReadonlyArray<string> | null;
    meeting: PhaseItemColumn_meeting;
    phaseRef: React.RefObject<HTMLDivElement>;
    retroPhaseItemId: string;
    question: string;
}
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Pick<Pick<Props, "atmosphere" | "retroPhaseItemId" | "editorIds" | "meeting" | "description" | "question" | "idx" | "phaseRef"> & React.RefAttributes<any>, "ref" | "key" | "retroPhaseItemId" | "editorIds" | "meeting" | "description" | "question" | "idx" | "phaseRef">, "ref" | "key" | "retroPhaseItemId" | "editorIds" | "meeting" | "description" | "question" | "idx" | "phaseRef">> & import("react-relay").ComponentRef>;
export default _default;
//# sourceMappingURL=PhaseItemColumn.d.ts.map