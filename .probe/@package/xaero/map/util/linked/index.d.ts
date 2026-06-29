
declare module "@package/xaero/map/util/linked" {
    export class $ILinkedChainNode<V extends $ILinkedChainNode<V>> {
    }
    export interface $ILinkedChainNode<V extends $ILinkedChainNode<V>> {
        setNext(arg0: V): void;
        setPrevious(arg0: V): void;
        getNext(): V;
        getPrevious(): V;
        isDestroyed(): boolean;
        onDestroyed(): void;
        get destroyed(): boolean;
    }
}
