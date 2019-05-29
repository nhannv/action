import { EditorState } from 'draft-js';
import React, { Ref } from 'react';
interface Props {
    className?: string;
    editorState: EditorState;
    onBlur: (e: React.FocusEvent) => void;
    onFocus: (e: React.FocusEvent) => void;
    onKeyDown: (e: React.KeyboardEvent) => void;
    placeholder: string;
    setEditorRef: Ref<HTMLTextAreaElement>;
    onChange: () => void;
}
declare const AndroidEditorFallback: (props: Props) => JSX.Element;
export default AndroidEditorFallback;
//# sourceMappingURL=AndroidEditorFallback.d.ts.map