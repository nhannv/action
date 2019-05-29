import { Component } from 'react';
interface State {
    fromNow: string;
}
interface Props {
    createdAt: string | Date;
}
declare class TimelineEventDate extends Component<Props, State> {
    state: {
        fromNow: any;
    };
    intervalId?: number;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export default TimelineEventDate;
//# sourceMappingURL=TimelineEventDate.d.ts.map