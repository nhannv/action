import React from 'react';
interface Props {
    autoFocus?: boolean;
    disabled?: boolean;
    error?: string | undefined | null;
    name?: string;
    onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    placeholder?: string;
    value: string;
}
declare const BasicTextArea: (props: Props) => JSX.Element;
export default BasicTextArea;
//# sourceMappingURL=BasicTextArea.d.ts.map