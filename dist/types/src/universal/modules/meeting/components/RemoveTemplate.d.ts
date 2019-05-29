import React from 'react';
import { WithAtmosphereProps } from 'universal/decorators/withAtmosphere/withAtmosphere';
import { WithMutationProps } from 'universal/utils/relay/withMutationProps';
interface Props extends WithAtmosphereProps, WithMutationProps {
    templateCount: number;
    templateId: any;
}
declare const _default: {
    new (props: Readonly<Pick<Pick<Props, "atmosphere" | "templateId" | "templateCount"> & React.RefAttributes<any>, "ref" | "key" | "templateId" | "templateCount">>): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Pick<Props, "atmosphere" | "templateId" | "templateCount"> & React.RefAttributes<any>, "ref" | "key" | "templateId" | "templateCount">>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Pick<Props, "atmosphere" | "templateId" | "templateCount"> & React.RefAttributes<any>, "ref" | "key" | "templateId" | "templateCount">> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
    };
    new (props: Pick<Pick<Props, "atmosphere" | "templateId" | "templateCount"> & React.RefAttributes<any>, "ref" | "key" | "templateId" | "templateCount">, context?: any): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Pick<Props, "atmosphere" | "templateId" | "templateCount"> & React.RefAttributes<any>, "ref" | "key" | "templateId" | "templateCount">>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Pick<Props, "atmosphere" | "templateId" | "templateCount"> & React.RefAttributes<any>, "ref" | "key" | "templateId" | "templateCount">> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
    };
    displayName: string;
    contextType: React.Context<import("../../../Atmosphere").default | import("../../demo/LocalAtmosphere").default | undefined>;
};
export default _default;
//# sourceMappingURL=RemoveTemplate.d.ts.map