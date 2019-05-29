import React from 'react';
interface Props {
    autoFocus?: boolean;
    disabled?: boolean;
    error: string | undefined;
    innerRef?: React.RefObject<HTMLInputElement>;
    name: string;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    spellCheck?: boolean;
    type?: string;
    value: string;
}
declare const BasicInput: (props: Props) => JSX.Element;
export default BasicInput;
//# sourceMappingURL=BasicInput.d.ts.map