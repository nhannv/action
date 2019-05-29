import { TaskFooter_task } from '__generated__/TaskFooter_task.graphql';
import { EditorState } from 'draft-js';
import React from 'react';
import { WithMutationProps } from 'universal/utils/relay/withMutationProps';
interface Props extends WithMutationProps {
    area: string;
    cardIsActive: boolean;
    editorState: EditorState;
    isAgenda: boolean;
    task: TaskFooter_task;
    toggleMenuState: () => void;
}
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Pick<Props, "area" | "task" | "isAgenda" | "editorState" | "cardIsActive" | "toggleMenuState"> & React.RefAttributes<any>, "ref" | "area" | "key" | "task" | "isAgenda" | "editorState" | "cardIsActive" | "toggleMenuState">> & import("react-relay").ComponentRef>;
export default _default;
//# sourceMappingURL=TaskFooter.d.ts.map