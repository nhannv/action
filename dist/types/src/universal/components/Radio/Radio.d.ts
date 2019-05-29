import React, { Component } from 'react';
interface Props {
    checked: boolean;
    label: string;
    name: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
}
declare class Radio extends Component<Props> {
    render(): JSX.Element;
}
export default Radio;
//# sourceMappingURL=Radio.d.ts.map