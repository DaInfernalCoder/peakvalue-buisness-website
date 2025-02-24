interface UseDarkModeOutput {
    isDarkMode: boolean;
    toggle: () => void;
    enable: () => void;
    disable: () => void;
}
export declare function useDarkMode(defaultValue?: boolean): UseDarkModeOutput;
export {};
