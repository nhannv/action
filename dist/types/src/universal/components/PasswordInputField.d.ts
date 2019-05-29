import React from 'react';
interface Props {
    autoFocus?: boolean;
    dirty: boolean;
    error: string | undefined;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
}
declare const PasswordInputField: (props: Props) => JSX.Element;
export default PasswordInputField;
//# sourceMappingURL=PasswordInputField.d.ts.map