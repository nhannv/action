import { TaskFooterIntegrateMenu_task } from '__generated__/TaskFooterIntegrateMenu_task.graphql';
import { TaskFooterIntegrateMenu_viewer } from '__generated__/TaskFooterIntegrateMenu_viewer.graphql';
import React from 'react';
import { MenuProps } from 'universal/hooks/useMenu';
import { MenuMutationProps } from 'universal/utils/relay/withMutationProps';
interface Props {
    menuProps: MenuProps;
    mutationProps: MenuMutationProps;
    task: TaskFooterIntegrateMenu_task;
    viewer: TaskFooterIntegrateMenu_viewer;
}
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Props, "viewer" | "task" | "menuProps" | "mutationProps">> & import("react-relay").ComponentRef>;
export default _default;
//# sourceMappingURL=TaskFooterIntegrateMenu.d.ts.map