import { EditorState } from 'draft-js';
import { Component, Ref } from 'react';
import { MenuProps } from 'universal/hooks/useMenu';
declare type EmojiSuggestion = {
    value: string;
    emoji: string;
};
interface Props {
    menuProps: MenuProps;
    editorState: EditorState;
    menuItemClickFactory: (emoji: string, editorState: EditorState | null) => () => void;
    menuRef: Ref<any>;
    query: string;
}
declare type State = {
    focusedEditorState: EditorState | null;
    suggestedEmojis: Array<EmojiSuggestion>;
    query: string;
};
declare class EmojiMenu extends Component<Props, State> {
    static filterByQuery(query: string): any;
    static getDerivedStateFromProps(nextProps: Readonly<Props>, prevState: State): Partial<State> | null;
    state: State;
    render(): JSX.Element;
}
export default EmojiMenu;
//# sourceMappingURL=EmojiMenu.d.ts.map