import React, { Component } from 'react';
import Legitity from '../validation/Legitity';
interface Props {
    autoFocus?: boolean;
    className?: string;
    error: string | undefined;
    validate: (value: string) => Legitity;
    handleSubmit: (value: string) => void;
    hideIcon?: boolean;
    initialValue: string;
    maxLength: number;
    placeholder: string;
    onEditingChange?: (isEditing: boolean) => void;
}
interface State {
    autoFocus: boolean;
    value: string;
    isEditing: boolean;
}
declare class EditableText extends Component<Props, State> {
    state: {
        autoFocus: boolean;
        isEditing: boolean;
        value: string;
    };
    inputRef: React.RefObject<HTMLInputElement>;
    componentDidMount(): void;
    setEditing: (isEditing: boolean) => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus: (e: React.FocusEvent<HTMLInputElement>) => void;
    onSubmit: (e: React.FormEvent<Element> | React.FocusEvent<Element>) => Promise<void>;
    onKeyDown: (e: React.KeyboardEvent<Element>) => void;
    reset: () => void;
    renderEditing: () => JSX.Element;
    renderStatic: () => JSX.Element;
    render(): JSX.Element;
}
export default EditableText;
//# sourceMappingURL=EditableText.d.ts.map