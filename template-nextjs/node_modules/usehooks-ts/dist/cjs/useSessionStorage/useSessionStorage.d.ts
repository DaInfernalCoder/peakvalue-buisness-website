import { Dispatch, SetStateAction } from 'react';
declare global {
    interface WindowEventMap {
        'session-storage': CustomEvent;
    }
}
type SetValue<T> = Dispatch<SetStateAction<T>>;
export declare function useSessionStorage<T>(key: string, initialValue: T): [T, SetValue<T>];
export {};
