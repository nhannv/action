import { SuggestedIntegrationGitHubMenuItem_suggestedIntegration } from '__generated__/SuggestedIntegrationGitHubMenuItem_suggestedIntegration.graphql';
import React from 'react';
import { WithMutationProps } from 'universal/utils/relay/withMutationProps';
interface Props {
    suggestedIntegration: SuggestedIntegrationGitHubMenuItem_suggestedIntegration;
    taskId: string;
    submitMutation: WithMutationProps['submitMutation'];
    onError: WithMutationProps['onError'];
    onCompleted: WithMutationProps['onCompleted'];
    query: string;
}
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Props & React.RefAttributes<{}>, "ref" | "onCompleted" | "onError" | "submitMutation" | "key" | "query" | "taskId" | "suggestedIntegration">> & import("react-relay").ComponentRef>;
export default _default;
//# sourceMappingURL=SuggestedIntegrationGitHubMenuItem.d.ts.map