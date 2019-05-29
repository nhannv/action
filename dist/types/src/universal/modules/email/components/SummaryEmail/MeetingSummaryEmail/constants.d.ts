declare module 'react' {
    interface TdHTMLAttributes<T> {
        height?: string | number;
        width?: string | number;
        bgcolor?: string;
        valign?: string;
    }
    interface TableHTMLAttributes<T> {
        align?: 'center' | 'left' | 'right';
        bgcolor?: string;
        height?: string | number;
        width?: string | number;
    }
}
export declare const FONT_FAMILY = "\"IBM Plex Sans\", -apple-system, BlinkMacSystemFont, Roboto, \"Helvetica Neue\", Arial, sans-serif";
export declare const PALETTE_TEXT_LIGHT = "#82809A";
export declare const PALETTE_TEXT_MAIN = "#444258";
export declare const PALETTE_TEXT_GREEN = "#61BF8B";
export declare const PALETTE_BACKGROUND_MAIN = "#F1F0FA";
export declare const PALETTE_BACKGROUND_RED = "#FD6157";
export declare const PALETTE_BACKGROUND_GRADIENT_RED = "#ED4C56";
export declare const PALETTE_BACKGROUND_GRADIENT_ROSE = "#ED4C86";
export declare const PALETTE_BACKGROUND_GRADIENT: string;
export declare const PALETTE_BORDER_LIGHT = "#C1C0CD";
//# sourceMappingURL=constants.d.ts.map