import { AddTemplatePrompt_prompts } from '__generated__/AddTemplatePrompt_prompts.graphql';
import React from 'react';
import { WithAtmosphereProps } from 'universal/decorators/withAtmosphere/withAtmosphere';
import { WithMutationProps } from 'universal/utils/relay/withMutationProps';
interface Props extends WithAtmosphereProps, WithMutationProps {
    prompts: AddTemplatePrompt_prompts;
    templateId: string;
}
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Pick<Pick<Props, "dirty" | "error" | "onCompleted" | "onError" | "setDirty" | "submitMutation" | "submitting" | "templateId" | "prompts">, "templateId" | "prompts"> & React.RefAttributes<any>, "ref" | "key" | "templateId" | "prompts">> & import("react-relay").ComponentRef>;
export default _default;
//# sourceMappingURL=AddTemplatePrompt.d.ts.map