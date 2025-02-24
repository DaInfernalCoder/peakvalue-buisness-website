import { Dispatch, SetStateAction } from 'react';
declare global {
    interface WindowEventMap {
        'local-storage': CustomEvent;
    }
}
type SetValue<T> = Dispatch<SetStateAction<T>>;
export declare function useLocalStorage<T>(key: string, initialValue: T): [T, SetValue<T>];
export {};
