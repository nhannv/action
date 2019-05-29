import React from 'react';
interface Props {
    autoFocus?: boolean;
    disabled?: boolean;
    error: string | undefined;
    innerRef?: React.RefObject<HTMLInputElement>;
    name?: string;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    type?: string;
    value: string;
}
declare const UnderlineInput: (props: Props) => JSX.Element;
export default UnderlineInput;
//# sourceMappingURL=UnderlineInput.d.ts.map