import { TemplatePromptItem_prompt } from '__generated__/TemplatePromptItem_prompt.graphql';
import React from 'react';
import { DraggableProvided } from 'react-beautiful-dnd';
interface PassedProps {
    canRemove: boolean;
    isDragging: boolean;
    prompt: TemplatePromptItem_prompt;
    prompts: any;
    dragProvided: DraggableProvided;
}
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<PassedProps, "prompt" | "prompts" | "isDragging" | "canRemove" | "dragProvided">> & import("react-relay").ComponentRef>;
export default _default;
//# sourceMappingURL=TemplatePromptItem.d.ts.map