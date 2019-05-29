import { EditableTemplatePrompt_prompts } from '__generated__/EditableTemplatePrompt_prompts.graphql';
import React from 'react';
import { WithAtmosphereProps } from 'universal/decorators/withAtmosphere/withAtmosphere';
import { WithMutationProps } from 'universal/utils/relay/withMutationProps';
interface Props extends WithAtmosphereProps, WithMutationProps {
    isEditingDescription: boolean;
    isHover: boolean;
    question: string;
    promptId: string;
    prompts: EditableTemplatePrompt_prompts;
}
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Pick<Pick<Props, "atmosphere" | "question" | "promptId" | "prompts" | "isEditingDescription" | "isHover"> & React.RefAttributes<any>, "ref" | "key" | "question" | "promptId" | "prompts" | "isEditingDescription" | "isHover">, "ref" | "key" | "question" | "promptId" | "prompts" | "isEditingDescription" | "isHover">> & import("react-relay").ComponentRef>;
export default _default;
//# sourceMappingURL=EditableTemplatePrompt.d.ts.map