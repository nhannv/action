/// <reference path="../modules/email/components/SummaryEmail/MeetingSummaryEmail/constants.d.ts" />
/// <reference types="react" />
import { UsePortalOptions } from 'universal/hooks/usePortal';
interface Options extends UsePortalOptions {
    background?: string;
    loadingWidth?: number;
}
declare const useModal: (options?: Options) => {
    togglePortal: (e?: import("react").MouseEvent<Element, MouseEvent> | import("react").TouchEvent<Element> | undefined) => void;
    modalPortal: (reactEl: any) => import("react").ReactPortal | null;
    closePortal: () => void;
    loadingDelay: number;
};
export default useModal;
//# sourceMappingURL=useModal.d.ts.map