import React from 'react';
interface Props {
    autoFocus?: boolean;
    dirty: boolean;
    error: string | undefined;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
}
declare const EmailInputField: (props: Props) => JSX.Element;
export default EmailInputField;
//# sourceMappingURL=EmailInputField.d.ts.map