
export type Unsubscriber = Set<() => void>;

export declare const unsubscriber: () => Unsubscriber;
export declare const collect: <T>(unsubscriber: Unsubscriber, fn: () => T) => T
export declare const attach: {
  (unsubscriber: Unsubscriber, fn: () => void): () => void;
  (fn: () => void): () => void;
}
export declare const un: (fn: () => void) => () => void;
export declare const run: (unsubscriber: Unsubscriber) => void;
export declare const scope: () => Unsubscriber | void;
