import { TaskFooterUserAssignee_task } from '__generated__/TaskFooterUserAssignee_task.graphql';
import React from 'react';
interface Props {
    area: string;
    canAssign: boolean;
    cardIsActive: boolean;
    task: TaskFooterUserAssignee_task;
    toggleMenuState: () => void;
}
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Props, "area" | "task" | "cardIsActive" | "toggleMenuState" | "canAssign">> & import("react-relay").ComponentRef>;
export default _default;
//# sourceMappingURL=TaskFooterUserAssignee.d.ts.map