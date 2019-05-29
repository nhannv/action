import { ReflectTemplateModal_retroMeetingSettings } from '__generated__/ReflectTemplateModal_retroMeetingSettings.graphql';
import React from 'react';
import { WithAtmosphereProps } from 'universal/decorators/withAtmosphere/withAtmosphere';
import { WithMutationProps } from 'universal/utils/relay/withMutationProps';
interface Props extends WithAtmosphereProps, WithMutationProps {
    name: string;
    templateId: string;
    templates: ReflectTemplateModal_retroMeetingSettings['reflectTemplates'];
}
declare const _default: {
    new (props: Readonly<Pick<Pick<Props, "atmosphere" | "name" | "templateId" | "templates"> & React.RefAttributes<any>, "ref" | "key" | "name" | "templateId" | "templates">>): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Pick<Props, "atmosphere" | "name" | "templateId" | "templates"> & React.RefAttributes<any>, "ref" | "key" | "name" | "templateId" | "templates">>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Pick<Props, "atmosphere" | "name" | "templateId" | "templates"> & React.RefAttributes<any>, "ref" | "key" | "name" | "templateId" | "templates">> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
    };
    new (props: Pick<Pick<Props, "atmosphere" | "name" | "templateId" | "templates"> & React.RefAttributes<any>, "ref" | "key" | "name" | "templateId" | "templates">, context?: any): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Pick<Props, "atmosphere" | "name" | "templateId" | "templates"> & React.RefAttributes<any>, "ref" | "key" | "name" | "templateId" | "templates">>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<Pick<Props, "atmosphere" | "name" | "templateId" | "templates"> & React.RefAttributes<any>, "ref" | "key" | "name" | "templateId" | "templates">> & Readonly<{
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
//# sourceMappingURL=EditableTemplateName.d.ts.map