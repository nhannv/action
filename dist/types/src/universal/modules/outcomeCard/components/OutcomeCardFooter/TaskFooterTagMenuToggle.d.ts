/// <reference types="react" />
import { EditorState } from 'draft-js';
import { MenuMutationProps } from 'universal/utils/relay/withMutationProps';
interface Props {
    area: string;
    editorState: EditorState;
    isAgenda: boolean;
    task: any;
    toggleMenuState: () => void;
    mutationProps: MenuMutationProps;
}
declare const TaskFooterTagMenuToggle: (props: Props) => JSX.Element;
export default TaskFooterTagMenuToggle;
//# sourceMappingURL=TaskFooterTagMenuToggle.d.ts.map