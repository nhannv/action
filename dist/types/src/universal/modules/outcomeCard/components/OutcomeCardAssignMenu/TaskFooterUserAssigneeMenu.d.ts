import { TaskFooterUserAssigneeMenu_task } from '__generated__/TaskFooterUserAssigneeMenu_task.graphql';
import { TaskFooterUserAssigneeMenu_viewer } from '__generated__/TaskFooterUserAssigneeMenu_viewer.graphql';
import React from 'react';
import { MenuProps } from 'universal/hooks/useMenu';
interface Props {
    area: string;
    menuProps: MenuProps;
    viewer: TaskFooterUserAssigneeMenu_viewer;
    task: TaskFooterUserAssigneeMenu_task;
}
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Props, "area" | "viewer" | "task" | "menuProps">> & import("react-relay").ComponentRef>;
export default _default;
//# sourceMappingURL=TaskFooterUserAssigneeMenu.d.ts.map