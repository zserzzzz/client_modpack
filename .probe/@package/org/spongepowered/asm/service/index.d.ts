
declare module "@package/org/spongepowered/asm/service" {
    export class $ITransformer {
    }
    export interface $ITransformer {
        isDelegationExcluded(): boolean;
        getName(): string;
        get delegationExcluded(): boolean;
        get name(): string;
    }
}
