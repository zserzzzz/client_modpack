import { $DefaultConstructorMarker } from "@package/kotlin/jvm/internal";
import { $KSerializer } from "@package/kotlinx/serialization";
import { $UUID, $Map_ } from "@package/java/util";
import { $ParticleSystem$Locator } from "@package/gg/essential/model";
import { $Object } from "@package/java/lang";

declare module "@package/gg/essential/model/molang" {
    export class $MolangQueryTime {
    }
    export interface $MolangQueryTime extends $MolangQuery {
        getTime(): number;
        get time(): number;
    }
    /**
     * Values that may be interpreted as {@link $MolangQueryTime}.
     */
    export type $MolangQueryTime_ = (() => number);
    export class $Variables {
        static getOrPut$default(arg0: $Variables, arg1: string, arg2: number, arg3: number, arg4: $Object): $Variables$Variable;
    }
    export interface $Variables {
        getOrNull(arg0: string): $Variables$Variable;
        get(arg0: string): number;
        set(arg0: string, arg1: number): void;
        getOrPut(arg0: string, arg1: number): $Variables$Variable;
        fallbackBackTo(arg0: $Variables): $Variables;
    }
    export class $MolangQueryAnimation {
    }
    export interface $MolangQueryAnimation extends $MolangQuery {
        getAnimLoopTime(): number;
        getAnimTime(): number;
        get animLoopTime(): number;
        get animTime(): number;
    }
    export class $MolangEvalImpl {
    }
    export interface $MolangEvalImpl {
        "eval"(arg0: $MolangContext): number;
    }
    /**
     * Values that may be interpreted as {@link $MolangEvalImpl}.
     */
    export type $MolangEvalImpl_ = ((arg0: $MolangContext) => number);
    export class $MolangQuery {
    }
    export interface $MolangQuery {
    }
    export class $VariablesMap implements $Variables {
        getOrNull(arg0: string): $Variables$Variable;
        copy(): $VariablesMap;
        getOrPut(arg0: string, arg1: number): $Variables$Variable;
        get(arg0: string): number;
        set(arg0: string, arg1: number): void;
        fallbackBackTo(arg0: $Variables): $Variables;
        constructor();
        constructor(arg0: $Map_<any, any>, arg1: number, arg2: $DefaultConstructorMarker);
        constructor(arg0: $Map_<string, $VariablesMap$Variable>);
    }
    export class $MolangQueryEntity {
    }
    export interface $MolangQueryEntity extends $MolangQuery, $MolangQueryTime {
        getLifeTime(): number;
        getTime(): number;
        getLocator(): $ParticleSystem$Locator;
        getUuid(): $UUID;
        getModifiedMoveSpeed(): number;
        getModifiedDistanceMoved(): number;
        get lifeTime(): number;
        get time(): number;
        get locator(): $ParticleSystem$Locator;
        get uuid(): $UUID;
        get modifiedMoveSpeed(): number;
        get modifiedDistanceMoved(): number;
    }
    export class $Molang$Companion {
        serializer(): $KSerializer<$Molang>;
        literal(arg0: number): $Molang;
        getZERO(): $Molang;
        getONE(): $Molang;
        constructor(arg0: $DefaultConstructorMarker);
        get ZERO(): $Molang;
        get ONE(): $Molang;
    }
    export class $MolangExpression$Companion {
        getZERO(): $LiteralExpr;
        getONE(): $LiteralExpr;
        get ZERO(): $LiteralExpr;
        get ONE(): $LiteralExpr;
    }
    export class $MolangExpression {
        static Companion: $MolangExpression$Companion;
    }
    export interface $MolangExpression extends $MolangEvalImpl {
    }
    /**
     * Values that may be interpreted as {@link $MolangExpression}.
     */
    export type $MolangExpression_ = (() => void);
    export class $Molang {
        static copy$default(arg0: $Molang, arg1: $MolangExpression_, arg2: number, arg3: $Object): $Molang;
        copy(arg0: $MolangExpression_): $Molang;
        "eval"(arg0: $MolangContext): number;
        getExpression(): $MolangExpression;
        static access$getZERO$cp(): $Molang;
        component1(): $MolangExpression;
        static access$getONE$cp(): $Molang;
        static Companion: $Molang$Companion;
        constructor(arg0: $MolangExpression_);
        get expression(): $MolangExpression;
    }
    export class $MolangContext {
        getVariables(): $Variables;
        getQuery(): $MolangQuery;
        constructor(arg0: $MolangQuery, arg1: $Variables);
        constructor(arg0: $MolangQuery, arg1: $Variables, arg2: number, arg3: $DefaultConstructorMarker);
        get variables(): $Variables;
        get query(): $MolangQuery;
    }
}
