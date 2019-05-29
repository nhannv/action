import { RetroTemplateListMenu_retroMeetingSettings } from '__generated__/RetroTemplateListMenu_retroMeetingSettings.graphql';
import { RetroTemplatePicker_settings } from '__generated__/RetroTemplatePicker_settings.graphql';
import React from 'react';
import { WithAtmosphereProps } from 'universal/decorators/withAtmosphere/withAtmosphere';
import { MenuProps } from 'universal/hooks/useMenu';
import useModal from 'universal/hooks/useModal';
import { WithMutationProps } from 'universal/utils/relay/withMutationProps';
interface Props extends WithAtmosphereProps, WithMutationProps {
    menuProps: MenuProps;
    defaultActiveIdx: number;
    retroMeetingSettings: RetroTemplateListMenu_retroMeetingSettings;
    templates: RetroTemplatePicker_settings['reflectTemplates'];
    toggleModal: ReturnType<typeof useModal>['togglePortal'];
}
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Pick<Pick<Props, "atmosphere" | "retroMeetingSettings" | "defaultActiveIdx" | "menuProps" | "templates" | "toggleModal"> & React.RefAttributes<any>, "ref" | "key" | "retroMeetingSettings" | "defaultActiveIdx" | "menuProps" | "templates" | "toggleModal">, "ref" | "key" | "retroMeetingSettings" | "defaultActiveIdx" | "menuProps" | "templates" | "toggleModal">> & import("react-relay").ComponentRef>;
export default _default;
//# sourceMappingURL=RetroTemplateListMenu.d.ts.map