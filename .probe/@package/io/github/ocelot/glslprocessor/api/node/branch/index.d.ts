import { $Stream } from "@package/java/util/stream";
import { $GlslSpecifiedType } from "@package/io/github/ocelot/glslprocessor/api/grammar";
import { $Enum } from "@package/java/lang";
import { $Collection_, $List } from "@package/java/util";
import { $GlslNode, $GlslNodeList, $GlslNodeType } from "@package/io/github/ocelot/glslprocessor/api/node";
import { $GlslNodeVisitor } from "@package/io/github/ocelot/glslprocessor/api/visitor";

declare module "@package/io/github/ocelot/glslprocessor/api/node/branch" {
    export class $GlslJumpNode extends $Enum<$GlslJumpNode> implements $GlslNode {
        static values(): $GlslJumpNode[];
        static valueOf(arg0: string): $GlslJumpNode;
        stream(): $Stream<$GlslNode>;
        visit(arg0: $GlslNodeVisitor): void;
        getNodeType(): $GlslNodeType;
        setBody(...arg0: $GlslNode[]): boolean;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        toSourceString(): string;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        getBody(): $GlslNodeList;
        static CONTINUE: $GlslJumpNode;
        static DISCARD: $GlslJumpNode;
        static BREAK: $GlslJumpNode;
        get nodeType(): $GlslNodeType;
        get type(): $GlslSpecifiedType;
    }
    /**
     * Values that may be interpreted as {@link $GlslJumpNode}.
     */
    export type $GlslJumpNode_ = "continue" | "break" | "discard";
    export class $GlslSwitchNode implements $GlslNode {
        stream(): $Stream<$GlslNode>;
        visit(arg0: $GlslNodeVisitor): void;
        setCondition(arg0: $GlslNode): $GlslSwitchNode;
        getNodeType(): $GlslNodeType;
        getCondition(): $GlslNode;
        getBranches(): $List<$GlslNode>;
        setBranches(arg0: $Collection_<$GlslNode>): $GlslSwitchNode;
        setBranches(...arg0: $GlslNode[]): $GlslSwitchNode;
        setBody(...arg0: $GlslNode[]): boolean;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        toSourceString(): string;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        getBody(): $GlslNodeList;
        constructor(arg0: $GlslNode, arg1: $Collection_<$GlslNode>);
        get nodeType(): $GlslNodeType;
        get type(): $GlslSpecifiedType;
    }
    export class $GlslWhileLoopNode implements $GlslNode {
        stream(): $Stream<$GlslNode>;
        visit(arg0: $GlslNodeVisitor): void;
        getBody(): $GlslNodeList;
        setCondition(arg0: $GlslNode): $GlslWhileLoopNode;
        getNodeType(): $GlslNodeType;
        getCondition(): $GlslNode;
        getLoopType(): $GlslWhileLoopNode$Type;
        setLoopType(arg0: $GlslWhileLoopNode$Type_): $GlslWhileLoopNode;
        setBody(...arg0: $GlslNode[]): boolean;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        toSourceString(): string;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        constructor(arg0: $GlslNode, arg1: $Collection_<$GlslNode>, arg2: $GlslWhileLoopNode$Type_);
        get nodeType(): $GlslNodeType;
        get type(): $GlslSpecifiedType;
    }
    export class $GlslCaseLabelNode implements $GlslNode {
        stream(): $Stream<$GlslNode>;
        isDefault(): boolean;
        visit(arg0: $GlslNodeVisitor): void;
        setCondition(arg0: $GlslNode): void;
        getNodeType(): $GlslNodeType;
        getCondition(): $GlslNode;
        setBody(...arg0: $GlslNode[]): boolean;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        toSourceString(): string;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        getBody(): $GlslNodeList;
        constructor(arg0: $GlslNode);
        get default(): boolean;
        get nodeType(): $GlslNodeType;
        get type(): $GlslSpecifiedType;
    }
    export class $GlslIfNode implements $GlslNode {
        setExpression(arg0: $GlslNode): void;
        stream(): $Stream<$GlslNode>;
        getFirst(): $GlslNodeList;
        visit(arg0: $GlslNodeVisitor): void;
        getSecond(): $GlslNodeList;
        getNodeType(): $GlslNodeType;
        getExpression(): $GlslNode;
        setSecond(arg0: $Collection_<$GlslNode>): $GlslIfNode;
        setFirst(arg0: $Collection_<$GlslNode>): $GlslIfNode;
        setBody(...arg0: $GlslNode[]): boolean;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        toSourceString(): string;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        getBody(): $GlslNodeList;
        constructor(arg0: $GlslNode, arg1: $Collection_<$GlslNode>, arg2: $Collection_<$GlslNode>);
        get nodeType(): $GlslNodeType;
        get type(): $GlslSpecifiedType;
    }
    export class $GlslReturnNode implements $GlslNode {
        getValue(): $GlslNode;
        stream(): $Stream<$GlslNode>;
        setValue(arg0: $GlslNode): void;
        visit(arg0: $GlslNodeVisitor): void;
        getNodeType(): $GlslNodeType;
        setBody(...arg0: $GlslNode[]): boolean;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        toSourceString(): string;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        getBody(): $GlslNodeList;
        constructor(arg0: $GlslNode);
        get nodeType(): $GlslNodeType;
        get type(): $GlslSpecifiedType;
    }
    export class $GlslWhileLoopNode$Type extends $Enum<$GlslWhileLoopNode$Type> {
        static values(): $GlslWhileLoopNode$Type[];
        static valueOf(arg0: string): $GlslWhileLoopNode$Type;
        static WHILE: $GlslWhileLoopNode$Type;
        static DO: $GlslWhileLoopNode$Type;
    }
    /**
     * Values that may be interpreted as {@link $GlslWhileLoopNode$Type}.
     */
    export type $GlslWhileLoopNode$Type_ = "while" | "do";
    export class $GlslForLoopNode implements $GlslNode {
        stream(): $Stream<$GlslNode>;
        visit(arg0: $GlslNodeVisitor): void;
        getBody(): $GlslNodeList;
        setCondition(arg0: $GlslNode): $GlslForLoopNode;
        getNodeType(): $GlslNodeType;
        getInit(): $GlslNode;
        setIncrement(arg0: $GlslNode): $GlslForLoopNode;
        setInit(arg0: $GlslNode): $GlslForLoopNode;
        getCondition(): $GlslNode;
        getIncrement(): $GlslNode;
        setBody(...arg0: $GlslNode[]): boolean;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        toSourceString(): string;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        constructor(arg0: $GlslNode, arg1: $GlslNode, arg2: $GlslNode, arg3: $Collection_<$GlslNode>);
        get nodeType(): $GlslNodeType;
        get type(): $GlslSpecifiedType;
    }
}
