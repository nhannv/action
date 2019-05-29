/// <reference types="segment-analytics" />
import { AnalyticsIdentifierRootQueryResponse } from '__generated__/AnalyticsIdentifierRootQuery.graphql';
import { Component } from 'react';
import AnalyticsJS = SegmentAnalytics.AnalyticsJS;
declare global {
    interface Window {
        analytics?: AnalyticsJS;
    }
}
interface Props {
    location: any;
    viewer: AnalyticsIdentifierRootQueryResponse['viewer'] | null;
}
interface State {
    viewer: AnalyticsIdentifierRootQueryResponse['viewer'] | null;
}
declare class AnalyticsIdentifier extends Component<Props, State> {
    static identify(viewer: any): void;
    static getDerivedStateFromProps(nextProps: Props, prevState: State): Partial<State> | null;
    static page(prevPath: any): void;
    state: {
        viewer: null;
    };
    componentDidUpdate(prevProps: any): void;
    render(): null;
}
export default AnalyticsIdentifier;
//# sourceMappingURL=AnalyticsIdentifier.d.ts.map