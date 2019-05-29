import { ContentState } from 'draft-js';
import React, { ReactNode } from 'react';
interface Props {
    contentState: ContentState;
    offsetkey: string;
    entityKey: string;
    children: ReactNode;
}
declare const TruncatedEllipsis: (setEditorState: any) => {
    new (props: Readonly<Props>): {
        onClick: () => void;
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Props>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<Props> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
    };
    new (props: Props, context?: any): {
        onClick: () => void;
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Props>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<Props> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
    };
    contextType?: React.Context<any> | undefined;
};
export default TruncatedEllipsis;
//# sourceMappingURL=TruncatedEllipsis.d.ts.map