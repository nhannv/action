import { TaskFooterTagMenu_task } from '__generated__/TaskFooterTagMenu_task.graphql';
import { EditorState } from 'draft-js';
import React from 'react';
import { MenuProps } from 'universal/hooks/useMenu';
import { MenuMutationProps } from 'universal/utils/relay/withMutationProps';
interface Props {
    area: string;
    menuProps: MenuProps;
    editorState: EditorState;
    isAgenda: boolean;
    mutationProps: MenuMutationProps;
    task: TaskFooterTagMenu_task;
}
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Props, "area" | "task" | "isAgenda" | "menuProps" | "editorState" | "mutationProps">> & import("react-relay").ComponentRef>;
export default _default;
//# sourceMappingURL=TaskFooterTagMenu.d.ts.map