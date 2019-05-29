import { Component, ErrorInfo, ReactNode } from 'react';
interface Props {
    fallback?: (error: Error) => ReactNode;
    children: ReactNode;
}
interface State {
    error?: Error;
    errorInfo?: ErrorInfo;
}
declare class ErrorBoundary extends Component<Props, State> {
    state: {
        error: undefined;
        errorInfo: undefined;
    };
    componentDidCatch(error: Error, errorInfo: ErrorInfo): void;
    render(): {} | null | undefined;
}
export default ErrorBoundary;
//# sourceMappingURL=ErrorBoundary.d.ts.map