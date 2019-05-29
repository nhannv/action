import { ReflectionCard_reflection } from '__generated__/ReflectionCard_reflection.graphql';
import React, { ReactElement } from 'react';
import { WithAtmosphereProps } from 'universal/decorators/withAtmosphere/withAtmosphere';
import { WithMutationProps } from 'universal/utils/relay/withMutationProps';
interface Props extends WithMutationProps, WithAtmosphereProps {
    handleChange?: () => void;
    reflection: ReflectionCard_reflection;
    meetingId?: string;
    phaseItemId?: string;
    readOnly?: boolean;
    shadow?: number;
    showOriginFooter?: boolean;
    userSelect?: 'text' | 'none';
    innerRef?: (c: ReactElement<any>) => void;
}
interface ReflectionCardRootProps {
    isClosing?: boolean | null;
    shadow?: string | null;
}
export declare const ReflectionCardRoot: import("create-emotion-styled").StyledOtherComponent<ReflectionCardRootProps, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, any>;
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Pick<Pick<Props, "atmosphere" | "innerRef" | "phaseItemId" | "meetingId" | "readOnly" | "reflection" | "shadow" | "handleChange" | "showOriginFooter" | "userSelect"> & React.RefAttributes<any>, "ref" | "key" | "innerRef" | "phaseItemId" | "meetingId" | "readOnly" | "reflection" | "shadow" | "handleChange" | "showOriginFooter" | "userSelect">, "ref" | "key" | "innerRef" | "phaseItemId" | "meetingId" | "readOnly" | "reflection" | "shadow" | "handleChange" | "showOriginFooter" | "userSelect">> & import("react-relay").ComponentRef>;
export default _default;
//# sourceMappingURL=ReflectionCard.d.ts.map