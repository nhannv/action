import { TemplatePromptList_prompts } from '__generated__/TemplatePromptList_prompts.graphql';
import React from 'react';
import { WithAtmosphereProps } from 'universal/decorators/withAtmosphere/withAtmosphere';
import { WithMutationProps } from 'universal/utils/relay/withMutationProps';
interface Props extends WithAtmosphereProps, WithMutationProps {
    prompts: TemplatePromptList_prompts;
    templateId: string;
}
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Pick<Pick<Props, "atmosphere" | "templateId" | "prompts"> & React.RefAttributes<any>, "ref" | "key" | "templateId" | "prompts">, "ref" | "key" | "templateId" | "prompts">> & import("react-relay").ComponentRef>;
export default _default;
//# sourceMappingURL=TemplatePromptList.d.ts.map