import { TaskFooterIntegrateMenuList_suggestedIntegrations } from '__generated__/TaskFooterIntegrateMenuList_suggestedIntegrations.graphql';
import { TaskFooterIntegrateMenuList_task } from '__generated__/TaskFooterIntegrateMenuList_task.graphql';
import React from 'react';
import { MenuProps } from 'universal/hooks/useMenu';
import { MenuMutationProps } from 'universal/utils/relay/withMutationProps';
interface Props {
    menuProps: MenuProps;
    mutationProps: MenuMutationProps;
    placeholder: string;
    suggestedIntegrations: TaskFooterIntegrateMenuList_suggestedIntegrations;
    task: TaskFooterIntegrateMenuList_task;
}
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Props, "placeholder" | "task" | "menuProps" | "suggestedIntegrations" | "mutationProps">> & import("react-relay").ComponentRef>;
export default _default;
//# sourceMappingURL=TaskFooterIntegrateMenuList.d.ts.map