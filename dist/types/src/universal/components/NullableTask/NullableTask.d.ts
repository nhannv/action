import React from 'react';
import { NullableTask_task } from '__generated__/NullableTask_task.graphql';
interface Props {
    area: string;
    hasDragStyles?: boolean;
    isAgenda?: boolean;
    isDragging?: boolean;
    isPreview?: boolean;
    measure?: () => void;
    task: NullableTask_task;
}
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Props, "area" | "task" | "isPreview" | "hasDragStyles" | "isAgenda" | "isDragging" | "measure">> & import("react-relay").ComponentRef>;
export default _default;
//# sourceMappingURL=NullableTask.d.ts.map