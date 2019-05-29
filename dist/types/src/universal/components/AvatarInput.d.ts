import React, { Component } from 'react';
interface Props {
    onSubmit: (file: File) => void;
    error?: string;
}
declare class AvatarInput extends Component<Props> {
    inputRef: React.RefObject<HTMLInputElement>;
    onClick: () => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement> | React.FormEvent<HTMLFormElement>) => void;
    render(): JSX.Element;
}
export default AvatarInput;
//# sourceMappingURL=AvatarInput.d.ts.map