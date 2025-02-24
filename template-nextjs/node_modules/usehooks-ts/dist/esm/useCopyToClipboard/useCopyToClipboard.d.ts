type CopiedValue = string | null;
type CopyFn = (text: string) => Promise<boolean>;
export declare function useCopyToClipboard(): [CopiedValue, CopyFn];
export {};
