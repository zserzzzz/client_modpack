
declare module "@package/xaero/map/util/linked" {
    export class $ILinkedChainNode<V extends $ILinkedChainNode<V>> {
    }
    export interface $ILinkedChainNode<V extends $ILinkedChainNode<V>> {
        setNext(arg0: V): void;
        isDestroyed(): boolean;
        getPrevious(): V;
        getNext(): V;
        setPrevious(arg0: V): void;
        onDestroyed(): void;
        get destroyed(): boolean;
    }
}
