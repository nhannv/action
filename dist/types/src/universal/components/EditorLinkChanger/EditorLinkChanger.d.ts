import { EditorState, SelectionState } from 'draft-js';
import React, { RefObject } from 'react';
import { WithFormProps } from '../../utils/relay/withForm';
interface Props extends WithFormProps {
    editorState: EditorState;
    editorRef: HTMLInputElement;
    innerRef: RefObject<HTMLDivElement>;
    link: string | null;
    removeModal(allowFocus: boolean): void;
    selectionState: SelectionState;
    setEditorState(editorState: EditorState): void;
    text: string | null;
    trackEditingComponent(componentName: string, isTracking: boolean): void;
}
declare const _default: React.ForwardRefExoticComponent<Pick<Props, "link" | "text" | "innerRef" | "editorState" | "removeModal" | "trackEditingComponent" | "editorRef" | "selectionState" | "setEditorState"> & React.RefAttributes<any>>;
export default _default;
//# sourceMappingURL=EditorLinkChanger.d.ts.map