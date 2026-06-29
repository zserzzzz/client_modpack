import { $Stream } from "@package/java/util/stream";
import { $GlslFunctionNode } from "@package/io/github/ocelot/glslprocessor/api/node/function";
import { $GlslTypeQualifier, $GlslSpecifiedType, $GlslStructSpecifier, $GlslType_ } from "@package/io/github/ocelot/glslprocessor/api/grammar";
import { $Collection_, $List } from "@package/java/util";
import { $GlslNode, $GlslRootNode, $GlslNodeList, $GlslNodeType } from "@package/io/github/ocelot/glslprocessor/api/node";
import { $GlslNodeVisitor } from "@package/io/github/ocelot/glslprocessor/api/visitor";

declare module "@package/io/github/ocelot/glslprocessor/api/node/variable" {
    export class $GlslGetArrayNode implements $GlslNode {
        setExpression(arg0: $GlslNode): $GlslGetArrayNode;
        stream(): $Stream<$GlslNode>;
        getIndex(): $GlslNode;
        visit(arg0: $GlslNodeVisitor): void;
        setIndex(arg0: $GlslNode): $GlslGetArrayNode;
        getNodeType(): $GlslNodeType;
        getExpression(): $GlslNode;
        setBody(...arg0: $GlslNode[]): boolean;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        toSourceString(): string;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        getBody(): $GlslNodeList;
        constructor(arg0: $GlslNode, arg1: $GlslNode);
        get nodeType(): $GlslNodeType;
        get type(): $GlslSpecifiedType;
    }
    export class $GlslVariableNode implements $GlslNode {
        getName(): string;
        stream(): $Stream<$GlslNode>;
        setName(arg0: string): $GlslVariableNode;
        visit(arg0: $GlslNodeVisitor): void;
        getNodeType(): $GlslNodeType;
        setBody(...arg0: $GlslNode[]): boolean;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        toSourceString(): string;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        getBody(): $GlslNodeList;
        constructor(arg0: string);
        get nodeType(): $GlslNodeType;
        get type(): $GlslSpecifiedType;
    }
    export class $GlslStructDeclarationNode implements $GlslRootNode {
        getName(): string;
        stream(): $Stream<$GlslNode>;
        setName(arg0: string): $GlslStructDeclarationNode;
        visit(arg0: $GlslNodeVisitor): void;
        getNodeType(): $GlslNodeType;
        setSpecifiedType(arg0: $GlslSpecifiedType): $GlslStructDeclarationNode;
        getStructSpecifier(): $GlslStructSpecifier;
        getSpecifiedType(): $GlslSpecifiedType;
        isField(): boolean;
        isDeclaration(): boolean;
        asStruct(): $GlslStructDeclarationNode;
        isFunction(): boolean;
        asField(): $GlslNewFieldNode;
        asFunction(): $GlslFunctionNode;
        isStruct(): boolean;
        asDeclaration(): $GlslVariableDeclarationNode;
        setBody(...arg0: $GlslNode[]): boolean;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        toSourceString(): string;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        getBody(): $GlslNodeList;
        constructor(arg0: $GlslSpecifiedType);
        get nodeType(): $GlslNodeType;
        get structSpecifier(): $GlslStructSpecifier;
        get field(): boolean;
        get declaration(): boolean;
        get function(): boolean;
        get struct(): boolean;
        get type(): $GlslSpecifiedType;
    }
    export class $GlslGetFieldNode implements $GlslNode {
        setExpression(arg0: $GlslNode): $GlslGetFieldNode;
        stream(): $Stream<$GlslNode>;
        visit(arg0: $GlslNodeVisitor): void;
        getNodeType(): $GlslNodeType;
        getExpression(): $GlslNode;
        getFieldSelection(): string;
        setFieldSelection(arg0: string): $GlslGetFieldNode;
        setBody(...arg0: $GlslNode[]): boolean;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        toSourceString(): string;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        getBody(): $GlslNodeList;
        constructor(arg0: $GlslNode, arg1: string);
        get nodeType(): $GlslNodeType;
        get type(): $GlslSpecifiedType;
    }
    export class $GlslNewFieldNode implements $GlslRootNode {
        setType(arg0: $GlslType_): $GlslNewFieldNode;
        getName(): string;
        stream(): $Stream<$GlslNode>;
        getType(): $GlslSpecifiedType;
        visit(arg0: $GlslNodeVisitor): void;
        getNodeType(): $GlslNodeType;
        getInitializer(): $GlslNode;
        setInitializer(arg0: $GlslNode): $GlslNewFieldNode;
        isField(): boolean;
        isDeclaration(): boolean;
        asStruct(): $GlslStructDeclarationNode;
        isFunction(): boolean;
        asField(): $GlslNewFieldNode;
        asFunction(): $GlslFunctionNode;
        isStruct(): boolean;
        asDeclaration(): $GlslVariableDeclarationNode;
        setBody(...arg0: $GlslNode[]): boolean;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        toSourceString(): string;
        toList(): $List<$GlslNode>;
        getBody(): $GlslNodeList;
        setName(arg0: string): $GlslRootNode;
        constructor(arg0: $GlslType_, arg1: string, arg2: $GlslNode);
        get nodeType(): $GlslNodeType;
        get field(): boolean;
        get declaration(): boolean;
        get function(): boolean;
        get struct(): boolean;
    }
    export class $GlslVariableDeclarationNode implements $GlslRootNode {
        getName(): string;
        stream(): $Stream<$GlslNode>;
        setName(arg0: string): $GlslRootNode;
        visit(arg0: $GlslNodeVisitor): void;
        getNames(): $List<string>;
        getNodeType(): $GlslNodeType;
        getTypeQualifiers(): $List<$GlslTypeQualifier>;
        isField(): boolean;
        isDeclaration(): boolean;
        asStruct(): $GlslStructDeclarationNode;
        isFunction(): boolean;
        asField(): $GlslNewFieldNode;
        asFunction(): $GlslFunctionNode;
        isStruct(): boolean;
        asDeclaration(): $GlslVariableDeclarationNode;
        setBody(...arg0: $GlslNode[]): boolean;
        setBody(arg0: $Collection_<$GlslNode>): boolean;
        toSourceString(): string;
        toList(): $List<$GlslNode>;
        getType(): $GlslSpecifiedType;
        getBody(): $GlslNodeList;
        constructor(arg0: $Collection_<$GlslTypeQualifier>, arg1: $Collection_<string>);
        get names(): $List<string>;
        get nodeType(): $GlslNodeType;
        get typeQualifiers(): $List<$GlslTypeQualifier>;
        get field(): boolean;
        get declaration(): boolean;
        get function(): boolean;
        get struct(): boolean;
        get type(): $GlslSpecifiedType;
    }
}
