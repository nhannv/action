/// <reference path="../modules/email/components/SummaryEmail/MeetingSummaryEmail/constants.d.ts" />
import { Component, ReactNode } from 'react';
interface Props {
    isOpen?: boolean | null;
    onClose?(event: KeyboardEvent | MouseEvent | TouchEvent): void;
    onOpen?(): void;
    clickToClose?: boolean;
    escToClose?: boolean;
    children: ReactNode;
}
declare class Modal extends Component<Props> {
    el?: Element;
    componentWillMount(): void;
    componentWillReceiveProps(nextProps: Props): void;
    componentWillUnmount(): void;
    setup(): void;
    teardown(): void;
    handleKeydown: (e: KeyboardEvent) => void;
    handleDocumentClick: (e: MouseEvent | TouchEvent) => void;
    render(): import("react").ReactPortal | null;
}
export default Modal;
//# sourceMappingURL=Modal.d.ts.map