import { TaskFooterTeamAssigneeMenu_task } from '__generated__/TaskFooterTeamAssigneeMenu_task.graphql';
import { TaskFooterTeamAssigneeMenu_viewer } from '__generated__/TaskFooterTeamAssigneeMenu_viewer.graphql';
import React from 'react';
import { MenuProps } from 'universal/hooks/useMenu';
interface Props {
    menuProps: MenuProps;
    viewer: TaskFooterTeamAssigneeMenu_viewer;
    task: TaskFooterTeamAssigneeMenu_task;
}
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Props, "viewer" | "task" | "menuProps">> & import("react-relay").ComponentRef>;
export default _default;
//# sourceMappingURL=TaskFooterTeamAssigneeMenu.d.ts.map