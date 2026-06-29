import { $Stream } from "@package/java/util/stream";
import { $GlslSpecifiedType } from "@package/io/github/ocelot/glslprocessor/api/grammar";
import { $Number, $Enum } from "@package/java/lang";
import { $Collection_, $List } from "@package/java/util";
import { $GlslNode, $GlslNodeList, $GlslNodeType } from "@package/io/github/ocelot/glslprocessor/api/node";
import { $GlslNodeVisitor } from "@package/io/github/ocelot/glslprocessor/api/visitor";

declare module "@package/io/github/ocelot/glslprocessor/api/node/constant" {
    export class $GlslIntFormat extends $Enum<$GlslIntFormat> {
        static values(): $GlslIntFormat[];
        static valueOf(arg0: string): $GlslIntFormat;
        static HEXADECIMAL: $GlslIntFormat;
        static OCTAL: $GlslIntFormat;
        static DECIMAL: $GlslIntFormat;
    }
    /**
     * Values that may be interpreted as {@link $GlslIntFormat}.
     */
    export type $GlslIntFormat_ = "hexadecimal" | "octal" | "decimal";
    export class $GlslIntConstantNode implements $GlslConstantNode {
        setSigned(arg0: boolean): void;
        isNumber(): boolean;
        booleanValue(): boolean;
        intValue(): number;
        format(): $GlslIntFormat;
        set(arg0: $Number): void;
        set(arg0: boolean): void;
        setFormat(arg0: $GlslIntFormat_): void;
        numberValue(): $Number;
        signed(): boolean;
        getNodeType(): $GlslNodeType;
        floatValue(): number;
        doubleValue(): number;
        stream(): $Stream<$GlslNode>;
        visit(arg0: $GlslNodeVisitor): void;
        unsignedIntValue(): number;
        getBody(): $GlslNodeList;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        setBody(...arg0: $GlslNode[]): boolean;
        toSourceString(): string;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        constructor(arg0: $GlslIntFormat_, arg1: boolean, arg2: number);
        get number(): boolean;
        get nodeType(): $GlslNodeType;
        get type(): $GlslSpecifiedType;
    }
    export class $GlslBoolConstantNode implements $GlslConstantNode {
        isNumber(): boolean;
        booleanValue(): boolean;
        set(arg0: boolean): void;
        set(arg0: $Number): void;
        numberValue(): $Number;
        getNodeType(): $GlslNodeType;
        intValue(): number;
        floatValue(): number;
        doubleValue(): number;
        stream(): $Stream<$GlslNode>;
        visit(arg0: $GlslNodeVisitor): void;
        unsignedIntValue(): number;
        getBody(): $GlslNodeList;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        setBody(...arg0: $GlslNode[]): boolean;
        toSourceString(): string;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        constructor(arg0: boolean);
        get number(): boolean;
        get nodeType(): $GlslNodeType;
        get type(): $GlslSpecifiedType;
    }
    export class $GlslDoubleConstantNode implements $GlslConstantNode {
        isNumber(): boolean;
        booleanValue(): boolean;
        doubleValue(): number;
        set(arg0: $Number): void;
        set(arg0: boolean): void;
        numberValue(): $Number;
        getNodeType(): $GlslNodeType;
        intValue(): number;
        floatValue(): number;
        stream(): $Stream<$GlslNode>;
        visit(arg0: $GlslNodeVisitor): void;
        unsignedIntValue(): number;
        getBody(): $GlslNodeList;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        setBody(...arg0: $GlslNode[]): boolean;
        toSourceString(): string;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        constructor(arg0: number);
        get number(): boolean;
        get nodeType(): $GlslNodeType;
        get type(): $GlslSpecifiedType;
    }
    export class $GlslFloatConstantNode implements $GlslConstantNode {
        isNumber(): boolean;
        booleanValue(): boolean;
        floatValue(): number;
        set(arg0: $Number): void;
        set(arg0: boolean): void;
        numberValue(): $Number;
        getNodeType(): $GlslNodeType;
        intValue(): number;
        doubleValue(): number;
        stream(): $Stream<$GlslNode>;
        visit(arg0: $GlslNodeVisitor): void;
        unsignedIntValue(): number;
        getBody(): $GlslNodeList;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        setBody(...arg0: $GlslNode[]): boolean;
        toSourceString(): string;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        constructor(arg0: number);
        get number(): boolean;
        get nodeType(): $GlslNodeType;
        get type(): $GlslSpecifiedType;
    }
    export class $GlslConstantNode {
    }
    export interface $GlslConstantNode extends $GlslNode {
        isNumber(): boolean;
        booleanValue(): boolean;
        intValue(): number;
        floatValue(): number;
        doubleValue(): number;
        stream(): $Stream<$GlslNode>;
        set(arg0: boolean): void;
        set(arg0: $Number): void;
        visit(arg0: $GlslNodeVisitor): void;
        numberValue(): $Number;
        unsignedIntValue(): number;
        get number(): boolean;
    }
}
