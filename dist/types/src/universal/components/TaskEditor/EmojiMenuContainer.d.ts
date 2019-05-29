import { EditorState } from 'draft-js';
import React, { Ref } from 'react';
import { BBox } from 'types/animations';
interface Props {
    originCoords: BBox;
    menuItemClickFactory: (emoji: string, editorState: EditorState | null) => () => void;
    query: string;
    menuRef: Ref<any>;
    editorState: EditorState;
    removeModal: () => void;
}
declare const EmojiMenuContainer: (props: Props) => React.ReactPortal | null;
export default EmojiMenuContainer;
//# sourceMappingURL=EmojiMenuContainer.d.ts.map