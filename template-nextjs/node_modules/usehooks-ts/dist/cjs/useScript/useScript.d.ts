export type UseScriptStatus = 'idle' | 'loading' | 'ready' | 'error';
export interface UseScriptOptions {
    shouldPreventLoad?: boolean;
    removeOnUnmount?: boolean;
}
export declare function useScript(src: string | null, options?: UseScriptOptions): UseScriptStatus;
