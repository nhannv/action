import { DragReflectionDropTargetTypeEnum } from 'universal/types/graphql';
declare const initBotScript: () => {
    reflectStage: ({
        op: string;
        delay: number;
        botId: string;
        variables: {
            phaseItemId: string;
            isEditing: boolean;
            input?: undefined;
        };
    } | {
        op: string;
        delay: number;
        botId: string;
        variables: {
            input: {
                id: string;
                groupId: string;
                content: string;
                retroPhaseItemId: string;
                sortOrder: number;
            };
            phaseItemId?: undefined;
            isEditing?: undefined;
        };
    })[];
    groupStage: ({
        op: string;
        delay: number;
        botId: string;
        variables: {
            dragId: string;
            reflectionId: string;
            initialCoords: {
                x: number;
                y: number;
            };
            input?: undefined;
            dropTargetType?: undefined;
            dropTargetId?: undefined;
        };
    } | {
        op: string;
        delay: number;
        botId: string;
        variables: {
            input: {
                clientHeight: number;
                clientWidth: number;
                coords: {
                    x: number;
                    y: number;
                };
                sourceId: string;
                teamId: string;
                targetId: string;
                targetOffset: {
                    x: number;
                    y: number;
                };
            };
            dragId?: undefined;
            reflectionId?: undefined;
            initialCoords?: undefined;
            dropTargetType?: undefined;
            dropTargetId?: undefined;
        };
    } | {
        op: string;
        delay: number;
        botId: string;
        variables: {
            reflectionId: string;
            dropTargetType: DragReflectionDropTargetTypeEnum;
            dropTargetId: string;
            dragId: string;
            initialCoords?: undefined;
            input?: undefined;
        };
    })[];
    voteStage: {
        op: string;
        delay: number;
        botId: string;
        variables: {
            isUnvote: boolean;
            reflectionGroupId: string;
        };
    }[];
};
export default initBotScript;
//# sourceMappingURL=initBotScript.d.ts.map