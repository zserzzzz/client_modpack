import { $Reader } from "@package/java/io";
import { $IntFunction_, $Supplier_, $Consumer_, $UnaryOperator_, $Predicate_ } from "@package/java/util/function";
import { $RegExp } from "@package/dev/latvian/mods/rhino/regexp";
import { $TypeInfo_, $TypeInfo, $VariableTypeInfo } from "@package/dev/latvian/mods/rhino/type";
import { $Stream } from "@package/java/util/stream";
import { $TypeWrappers } from "@package/dev/latvian/mods/rhino/util/wrap";
import { $Method, $AccessibleObject, $Field, $Executable, $Member, $Constructor } from "@package/java/lang/reflect";
import { $MethodHandles$Lookup, $MethodHandle } from "@package/java/lang/invoke";
import { $ClassVisibilityContext_, $DataObject, $DefaultValueTypeHint_, $ArrayValueProvider } from "@package/dev/latvian/mods/rhino/util";
import { $ClassLoader, $Throwable, $Enum, $Record, $RuntimeException, $Class, $StringBuilder, $Object } from "@package/java/lang";
import { $Spliterator, $Iterator, $List, $SequencedCollection, $Map_, $Collection_, $List_, $Comparator, $Map, $Set, $ListIterator } from "@package/java/util";
export * as util from "@package/dev/latvian/mods/rhino/util";
export * as type from "@package/dev/latvian/mods/rhino/type";
export * as regexp from "@package/dev/latvian/mods/rhino/regexp";

declare module "@package/dev/latvian/mods/rhino" {
    export class $CustomProperty {
    }
    export interface $CustomProperty {
        get(): $Object;
    }
    /**
     * Values that may be interpreted as {@link $CustomProperty}.
     */
    export type $CustomProperty_ = (() => $Object);
    export class $Script {
    }
    export interface $Script {
        exec(arg1: $Scriptable): $Object;
    }
    /**
     * Values that may be interpreted as {@link $Script}.
     */
    export type $Script_ = ((arg1: $Scriptable) => $Object);
    export class $CachedClassStorage {
        include(arg0: $Class<never>, arg1: $Member): boolean;
        get(arg0: $Class<never>): $CachedClassInfo;
        isVisible(arg0: number): boolean;
        getDebugClassName(arg0: $Class<never>): string;
        static GLOBAL_PUBLIC: $CachedClassStorage;
        includeProtected: boolean;
        static GLOBAL_PROTECTED: $CachedClassStorage;
        objectClass: $CachedClassInfo;
        constructor(arg0: boolean);
    }
    export class $CachedMethodInfo$Accessible {
        getName(): string;
        getSignature(): $MethodSignature;
        getInfo(): $CachedMethodInfo;
        constructor();
        get name(): string;
        get signature(): $MethodSignature;
        get info(): $CachedMethodInfo;
    }
    export class $EvaluatorException extends $RhinoException {
        constructor(arg1: string);
        constructor(arg1: string, arg2: string, arg3: number);
        constructor(arg1: string, arg2: string, arg3: number, arg4: string, arg5: number);
    }
    export class $MemberType extends $Enum<$MemberType> {
        static get(arg0: $Object, arg1: $Context): $MemberType;
        static values(): $MemberType[];
        static valueOf(arg0: string): $MemberType;
        static NUMBER: $MemberType;
        static SYMBOL: $MemberType;
        static UNDEFINED: $MemberType;
        static STRING: $MemberType;
        static OBJECT: $MemberType;
        static FUNCTION: $MemberType;
        static BOOLEAN: $MemberType;
    }
    /**
     * Values that may be interpreted as {@link $MemberType}.
     */
    export type $MemberType_ = "undefined" | "object" | "function" | "symbol" | "string" | "number" | "boolean";
    export class $CachedParameters extends $Record {
        isVarArg(): boolean;
        count(): number;
        types(): $List<$Class<never>>;
        typesMatch(arg0: $Class<never>[]): boolean;
        firstArgContext(): boolean;
        varArgType(): $TypeInfo;
        typeInfos(): $List<$TypeInfo>;
        static EMPTY: $CachedParameters;
        static EMPTY_FIRST_CX: $CachedParameters;
        constructor(count: number, types: $List_<$Class<never>>, typeInfos: $List_<$TypeInfo_>, firstArgContext: boolean, varArgType: $TypeInfo_);
        get varArg(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $CachedParameters}.
     */
    export type $CachedParameters_ = { firstArgContext?: boolean, typeInfos?: $List_<$TypeInfo_>, varArgType?: $TypeInfo_, types?: $List_<$Class<never>>, count?: number,  } | [firstArgContext?: boolean, typeInfos?: $List_<$TypeInfo_>, varArgType?: $TypeInfo_, types?: $List_<$Class<never>>, count?: number, ];
    export class $ErrorReporter {
    }
    export interface $ErrorReporter {
        error(arg1: string, arg2: string, arg3: number, arg4: string, arg5: number): void;
        warning(arg0: string, arg1: string, arg2: number, arg3: string, arg4: number): void;
        runtimeError(arg1: string, arg2: string, arg3: number, arg4: string, arg5: number): $EvaluatorException;
    }
    export class $Wrapper {
        static unwrapped(arg0: $Object): $Object;
    }
    export interface $Wrapper {
        unwrap(): $Object;
    }
    /**
     * Values that may be interpreted as {@link $Wrapper}.
     */
    export type $Wrapper_ = (() => $Object);
    export class $ConstProperties {
    }
    export interface $ConstProperties {
        isConst(arg0: string): boolean;
        putConst(arg1: string, arg2: $Scriptable, arg3: $Object): void;
        defineConst(arg1: string, arg2: $Scriptable): void;
    }
    export class $RhinoException extends $RuntimeException {
        getScriptStack(arg0: number, arg1: string): $ScriptStackElement[];
        getScriptStack(): $ScriptStackElement[];
        lineNumber(): number;
        details(): string;
        lineSource(): string;
        sourceName(): string;
        columnNumber(): number;
        getScriptStackTrace(): string;
        getScriptStackTrace(arg0: number, arg1: string): string;
        initLineSource(arg0: string): void;
        initSourceName(arg0: string): void;
        initLineNumber(arg0: number): void;
        initColumnNumber(arg0: number): void;
    }
    export class $CustomMember extends $Record {
        name(): string;
        type(): $TypeInfo;
        value(): $Object;
        constructor(name: string, type: $TypeInfo_, value: $Object);
    }
    /**
     * Values that may be interpreted as {@link $CustomMember}.
     */
    export type $CustomMember_ = { type?: $TypeInfo_, name?: string, value?: $Object,  } | [type?: $TypeInfo_, name?: string, value?: $Object, ];
    export class $MethodSignature extends $Record {
        name(): string;
        args(): $Class<never>[];
        constructor(arg0: $Executable);
        constructor(name: string, args: $Class<never>[]);
    }
    /**
     * Values that may be interpreted as {@link $MethodSignature}.
     */
    export type $MethodSignature_ = { name?: string, args?: $Class<never>[],  } | [name?: string, args?: $Class<never>[], ];
    export class $SymbolScriptable {
    }
    export interface $SymbolScriptable {
        get(arg1: $Symbol, arg2: $Scriptable): $Object;
        put(arg1: $Symbol, arg2: $Scriptable, arg3: $Object): void;
        "delete"(arg1: $Symbol): void;
        has(arg1: $Symbol, arg2: $Scriptable): boolean;
    }
    export class $CachedConstructorInfo extends $CachedExecutableInfo {
        originalName: string;
        parent: $CachedClassInfo;
        isStatic: boolean;
        isFinal: boolean;
        modifiers: number;
        isNative: boolean;
        constructor(arg0: $CachedClassInfo, arg1: $Constructor<never>);
    }
    export class $IdEnumerationIterator {
    }
    export interface $IdEnumerationIterator {
        enumerationIteratorHasNext(arg1: $Consumer_<$Object>): boolean;
        enumerationIteratorNext(arg1: $Consumer_<$Object>): boolean;
    }
    export class $CachedFieldInfo$Accessible {
        getName(): string;
        getInfo(): $CachedFieldInfo;
        constructor();
        get name(): string;
        get info(): $CachedFieldInfo;
    }
    export class $IdScriptableObject extends $ScriptableObject implements $IdFunctionCall {
        execIdCall(arg0: $IdFunctionObject, arg1: $Context, arg2: $Scriptable, arg3: $Scriptable, arg4: $Object[]): $Object;
        initPrototypeMethod(arg0: $Object, arg1: number, arg2: string, arg3: string, arg4: number, arg5: $Context): $IdFunctionObject;
        initPrototypeMethod(arg0: $Object, arg1: number, arg2: $Symbol, arg3: string, arg4: number, arg5: $Context): $IdFunctionObject;
        initPrototypeMethod(arg0: $Object, arg1: number, arg2: string, arg3: number, arg4: $Context): $IdFunctionObject;
        activatePrototypeMap(arg0: number): void;
        initPrototypeConstructor(arg0: $IdFunctionObject, arg1: $Context): void;
        exportAsJSClass(arg0: number, arg1: $Scriptable, arg2: boolean, arg3: $Context): $IdFunctionObject;
        hasPrototypeMap(): boolean;
        initPrototypeValue(arg0: number, arg1: string, arg2: $Object, arg3: number): void;
        initPrototypeValue(arg0: number, arg1: $Symbol, arg2: $Object, arg3: number): void;
        static DONTENUM: number;
        static CONST: number;
        static UNINITIALIZED_CONST: number;
        static EMPTY: number;
        static READONLY: number;
        static PERMANENT: number;
        constructor();
        constructor(arg0: $Scriptable, arg1: $Scriptable);
    }
    export class $NativeJavaObject implements $Scriptable, $SymbolScriptable, $Wrapper {
        getPrototype(): $Scriptable;
        hasInstance(arg1: $Scriptable): boolean;
        setPrototype(arg0: $Scriptable): void;
        get(arg1: $Symbol, arg2: $Scriptable): $Object;
        get(arg1: number, arg2: $Scriptable): $Object;
        get(arg1: string, arg2: $Scriptable): $Object;
        put(arg1: number, arg2: $Scriptable, arg3: $Object): void;
        put(arg1: string, arg2: $Scriptable, arg3: $Object): void;
        put(arg1: $Symbol, arg2: $Scriptable, arg3: $Object): void;
        "delete"(arg1: string): void;
        "delete"(arg1: $Symbol): void;
        "delete"(arg1: number): void;
        getDefaultValue(arg1: $DefaultValueTypeHint_): $Object;
        getClassName(): string;
        unwrap(): $Object;
        has(arg1: string, arg2: $Scriptable): boolean;
        has(arg1: number, arg2: $Scriptable): boolean;
        has(arg1: $Symbol, arg2: $Scriptable): boolean;
        getIds(): $Object[];
        setParentScope(arg0: $Scriptable): void;
        getParentScope(): $Scriptable;
        addCustomProperty(arg0: string, arg1: $TypeInfo_, arg2: $CustomProperty_): void;
        getTypeMapping(): $Map<$VariableTypeInfo, $TypeInfo>;
        addCustomMember(arg0: $CustomMember_): void;
        getTypeOf(): $MemberType;
        getAllIds(): $Object[];
        enumerationIteratorHasNext(arg1: $Consumer_<$Object>): boolean;
        enumerationIteratorNext(arg1: $Consumer_<$Object>): boolean;
        constructor(arg0: $Scriptable, arg1: $Object, arg2: $TypeInfo_, arg3: $Context);
        constructor(arg0: $Scriptable, arg1: $Object, arg2: $TypeInfo_, arg3: boolean, arg4: $Context);
        get className(): string;
        get ids(): $Object[];
        get typeMapping(): $Map<$VariableTypeInfo, $TypeInfo>;
        get typeOf(): $MemberType;
        get allIds(): $Object[];
    }
    export class $CachedMemberInfo {
        getCached(): $AccessibleObject;
        getName(): string;
        getDeclaringClass(): $CachedClassInfo;
        originalName: string;
        parent: $CachedClassInfo;
        isStatic: boolean;
        isFinal: boolean;
        modifiers: number;
        isNative: boolean;
        constructor(arg0: $CachedClassInfo, arg1: $AccessibleObject, arg2: string, arg3: number);
        get cached(): $AccessibleObject;
        get name(): string;
        get declaringClass(): $CachedClassInfo;
    }
    export class $NativeJavaClass extends $NativeJavaObject implements $Function {
        construct(arg1: $Scriptable, arg2: $Object[]): $Scriptable;
        call(arg1: $Scriptable, arg2: $Scriptable, arg3: $Object[]): $Object;
        getClassObject(): $Class<never>;
        constructor(arg1: $Scriptable, arg2: $Class<never>);
        constructor(arg1: $Scriptable, arg2: $Class<never>, arg3: boolean);
        get classObject(): $Class<never>;
    }
    export class $Function {
    }
    export interface $Function extends $Scriptable, $Callable {
        construct(arg1: $Scriptable, arg2: $Object[]): $Scriptable;
        call(arg1: $Scriptable, arg2: $Scriptable, arg3: $Object[]): $Object;
    }
    export class $ScriptStackElement {
        renderJavaStyle(arg0: $StringBuilder): void;
        renderMozillaStyle(arg0: $StringBuilder): void;
        fileName: string;
        functionName: string;
        lineNumber: number;
        constructor(arg0: string, arg1: string, arg2: number);
    }
    export class $NativeJavaMap extends $NativeJavaObject {
        mapValueType: $TypeInfo;
        mapKeyType: $TypeInfo;
        map: $Map<any, any>;
        constructor(arg1: $Scriptable, arg2: $Object, arg3: $Map_<any, any>, arg4: $TypeInfo_);
    }
    export class $CachedFieldInfo extends $CachedMemberInfo {
        get(arg1: $Object): $Object;
        set(arg1: $Object, arg2: $Object): void;
        getType(): $TypeInfo;
        originalName: string;
        parent: $CachedClassInfo;
        isStatic: boolean;
        isFinal: boolean;
        modifiers: number;
        isNative: boolean;
        constructor(arg0: $CachedClassInfo, arg1: $Field);
        get type(): $TypeInfo;
    }
    export class $ScriptableObject implements $Scriptable, $SymbolScriptable, $ConstProperties {
        getPrototype(): $Scriptable;
        static getObjectPrototype(arg0: $Scriptable, arg1: $Context): $Scriptable;
        static getArrayPrototype(arg0: $Scriptable, arg1: $Context): $Scriptable;
        hasInstance(arg1: $Scriptable): boolean;
        setPrototype(arg0: $Scriptable): void;
        static deleteProperty(arg0: $Scriptable, arg1: number, arg2: $Context): boolean;
        static deleteProperty(arg0: $Scriptable, arg1: string, arg2: $Context): boolean;
        defineProperty(arg1: string, arg2: $Object, arg3: number): void;
        defineProperty(arg1: string, arg2: $Class<never>, arg3: number): void;
        defineProperty(arg1: $Symbol, arg2: $Object, arg3: number): void;
        defineProperty(arg1: string, arg2: $Object, arg3: $WrappedExecutable_, arg4: $WrappedExecutable_, arg5: number): void;
        static defineProperty(arg0: $Scriptable, arg1: string, arg2: $Object, arg3: number, arg4: $Context): void;
        size(): number;
        get(arg1: number, arg2: $Scriptable): $Object;
        get(arg1: string, arg2: $Scriptable): $Object;
        get(arg1: $Object): $Object;
        get(arg1: $Symbol, arg2: $Scriptable): $Object;
        put(arg1: $Symbol, arg2: $Scriptable, arg3: $Object): void;
        put(arg1: number, arg2: $Scriptable, arg3: $Object): void;
        put(arg1: string, arg2: $Scriptable, arg3: $Object): void;
        static getProperty(arg0: $Scriptable, arg1: number, arg2: $Context): $Object;
        static getProperty(arg0: $Scriptable, arg1: string, arg2: $Context): $Object;
        static getProperty(arg0: $Scriptable, arg1: $Symbol, arg2: $Context): $Object;
        isEmpty(): boolean;
        isSealed(): boolean;
        "delete"(arg1: $Symbol): void;
        "delete"(arg1: number): void;
        "delete"(arg1: string): void;
        static getDefaultValue(arg0: $Scriptable, arg1: $DefaultValueTypeHint_, arg2: $Context): $Object;
        getDefaultValue(arg1: $DefaultValueTypeHint_): $Object;
        getClassName(): string;
        getAttributes(arg1: string): number;
        getAttributes(arg1: number): number;
        getAttributes(arg1: $Symbol): number;
        has(arg1: string, arg2: $Scriptable): boolean;
        has(arg1: $Symbol, arg2: $Scriptable): boolean;
        has(arg1: number, arg2: $Scriptable): boolean;
        setAttributes(arg1: string, arg2: number): void;
        setAttributes(arg1: number, arg2: number): void;
        setAttributes(arg1: $Symbol, arg2: number): void;
        isConst(arg0: string): boolean;
        isExtensible(): boolean;
        preventExtensions(): void;
        getTypeOf(): $MemberType;
        getAllIds(): $Object[];
        getIds(): $Object[];
        static hasProperty(arg0: $Scriptable, arg1: number, arg2: $Context): boolean;
        static hasProperty(arg0: $Scriptable, arg1: $Symbol, arg2: $Context): boolean;
        static hasProperty(arg0: $Scriptable, arg1: string, arg2: $Context): boolean;
        static getFunctionPrototype(arg0: $Scriptable, arg1: $Context): $Scriptable;
        defineOwnProperty(arg1: $Object, arg2: $ScriptableObject): void;
        setParentScope(arg0: $Scriptable): void;
        getParentScope(): $Scriptable;
        static putProperty(arg0: $Scriptable, arg1: string, arg2: $Object, arg3: $Context): void;
        static putProperty(arg0: $Scriptable, arg1: number, arg2: $Object, arg3: $Context): void;
        static putProperty(arg0: $Scriptable, arg1: $Symbol, arg2: $Object, arg3: $Context): void;
        static getTopLevelScope(arg0: $Scriptable): $Scriptable;
        getAssociatedValue(arg0: $Object): $Object;
        associateValue(arg0: $Object, arg1: $Object): $Object;
        putConst(arg1: string, arg2: $Scriptable, arg3: $Object): void;
        sealObject(): void;
        defineFunctionProperties(arg1: string[], arg2: $Class<never>, arg3: number): void;
        setExternalArrayData(arg1: $ExternalArrayData): void;
        avoidObjectDetection(): boolean;
        static defineConstProperty(arg0: $Scriptable, arg1: string, arg2: $Context): void;
        getExternalArrayData(): $ExternalArrayData;
        defineOwnProperties(arg1: $ScriptableObject): void;
        getExternalArrayLength(): $Object;
        defineConst(arg1: string, arg2: $Scriptable): void;
        static redefineProperty(arg0: $Scriptable, arg1: string, arg2: boolean, arg3: $Context): void;
        setGetterOrSetter(arg1: string, arg2: number, arg3: $Callable_, arg4: boolean): void;
        getGetterOrSetter(arg0: string, arg1: number, arg2: boolean): $Object;
        static putConstProperty(arg0: $Scriptable, arg1: string, arg2: $Object, arg3: $Context): void;
        static getTopScopeValue(arg0: $Scriptable, arg1: $Object, arg2: $Context): $Object;
        static getClassPrototype(arg0: $Scriptable, arg1: string, arg2: $Context): $Scriptable;
        static getPropertyIds(arg1: $Scriptable): $Object[];
        static getGeneratorFunctionPrototype(arg0: $Scriptable, arg1: $Context): $Scriptable;
        enumerationIteratorHasNext(arg1: $Consumer_<$Object>): boolean;
        enumerationIteratorNext(arg1: $Consumer_<$Object>): boolean;
        static DONTENUM: number;
        static CONST: number;
        static UNINITIALIZED_CONST: number;
        static EMPTY: number;
        static READONLY: number;
        static PERMANENT: number;
        constructor();
        constructor(arg0: $Scriptable, arg1: $Scriptable);
        get empty(): boolean;
        get sealed(): boolean;
        get className(): string;
        get extensible(): boolean;
        get typeOf(): $MemberType;
        get allIds(): $Object[];
        get ids(): $Object[];
        get externalArrayLength(): $Object;
    }
    export class $ExternalArrayData {
    }
    export interface $ExternalArrayData {
        setArrayElement(arg0: number, arg1: $Object): void;
        getArrayLength(): number;
        getArrayElement(arg0: number): $Object;
        get arrayLength(): number;
    }
    export class $CachedMethodInfo extends $CachedExecutableInfo {
        originalName: string;
        parent: $CachedClassInfo;
        isStatic: boolean;
        isFinal: boolean;
        modifiers: number;
        isNative: boolean;
        constructor(arg0: $CachedClassInfo, arg1: $Method);
    }
    export class $Scriptable {
        static NOT_FOUND: $Object;
    }
    export interface $Scriptable extends $IdEnumerationIterator {
        getPrototype(): $Scriptable;
        hasInstance(arg1: $Scriptable): boolean;
        setPrototype(arg0: $Scriptable): void;
        get(arg1: string, arg2: $Scriptable): $Object;
        get(arg1: number, arg2: $Scriptable): $Object;
        put(arg1: number, arg2: $Scriptable, arg3: $Object): void;
        put(arg1: string, arg2: $Scriptable, arg3: $Object): void;
        "delete"(arg1: number): void;
        "delete"(arg1: string): void;
        getDefaultValue(arg1: $DefaultValueTypeHint_): $Object;
        getClassName(): string;
        has(arg1: number, arg2: $Scriptable): boolean;
        has(arg1: string, arg2: $Scriptable): boolean;
        getTypeOf(): $MemberType;
        getAllIds(): $Object[];
        getIds(): $Object[];
        setParentScope(arg0: $Scriptable): void;
        getParentScope(): $Scriptable;
        enumerationIteratorHasNext(arg1: $Consumer_<$Object>): boolean;
        enumerationIteratorNext(arg1: $Consumer_<$Object>): boolean;
        get className(): string;
        get typeOf(): $MemberType;
        get allIds(): $Object[];
        get ids(): $Object[];
    }
    export class $Symbol {
    }
    export interface $Symbol {
    }
    export class $IdFunctionCall {
    }
    export interface $IdFunctionCall {
        execIdCall(arg0: $IdFunctionObject, arg1: $Context, arg2: $Scriptable, arg3: $Scriptable, arg4: $Object[]): $Object;
    }
    /**
     * Values that may be interpreted as {@link $IdFunctionCall}.
     */
    export type $IdFunctionCall_ = ((arg0: $IdFunctionObject, arg1: $Context, arg2: $Scriptable, arg3: $Scriptable, arg4: $Object[]) => $Object);
    export class $WrappedExecutable {
    }
    export interface $WrappedExecutable {
        construct(arg1: $Scriptable, arg2: $Object[]): $Object;
        invoke(arg1: $Scriptable, arg2: $Object, arg3: $Object[]): $Object;
        getReturnType(): $TypeInfo;
        isStatic(): boolean;
        unwrap(): $CachedExecutableInfo;
        get returnType(): $TypeInfo;
        get static(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $WrappedExecutable}.
     */
    export type $WrappedExecutable_ = ((arg1: $Scriptable, arg2: $Object, arg3: $Object[]) => $Object);
    export class $BaseFunction extends $IdScriptableObject implements $Function {
        construct(arg1: $Scriptable, arg2: $Object[]): $Scriptable;
        getLength(): number;
        call(arg1: $Scriptable, arg2: $Scriptable, arg3: $Object[]): $Object;
        createObject(arg1: $Scriptable): $Scriptable;
        getFunctionName(): string;
        getArity(): number;
        setImmunePrototypeProperty(arg0: $Object): void;
        static DONTENUM: number;
        static CONST: number;
        static UNINITIALIZED_CONST: number;
        static EMPTY: number;
        static READONLY: number;
        static PERMANENT: number;
        constructor();
        constructor(arg0: boolean);
        constructor(arg0: $Scriptable, arg1: $Scriptable);
        get length(): number;
        get functionName(): string;
        get arity(): number;
        set immunePrototypeProperty(value: $Object);
    }
    export class $IdFunctionObject extends $BaseFunction {
        unknown(): $RuntimeException;
        getTag(): $Object;
        methodId(): number;
        hasTag(arg0: $Object): boolean;
        exportAsScopeProperty(): void;
        initFunction(arg0: string, arg1: $Scriptable): void;
        markAsConstructor(arg0: $Scriptable): void;
        addAsProperty(arg0: $Scriptable, arg1: $Context): void;
        static DONTENUM: number;
        static CONST: number;
        static UNINITIALIZED_CONST: number;
        static EMPTY: number;
        static READONLY: number;
        static PERMANENT: number;
        constructor(arg0: $IdFunctionCall_, arg1: $Object, arg2: number, arg3: number);
        constructor(arg0: $IdFunctionCall_, arg1: $Object, arg2: number, arg3: string, arg4: number, arg5: $Scriptable);
        get tag(): $Object;
    }
    export class $CachedClassInfo {
        getSuperclass(): $CachedClassInfo;
        getInterfaces(): $List<$CachedClassInfo>;
        getMethod(arg0: string, arg1: $Class<never>[]): $CachedMethodInfo;
        getConstructors(): $List<$CachedConstructorInfo>;
        getDeclaredFields(): $List<$CachedFieldInfo>;
        getDeclaredMethods(): $List<$CachedMethodInfo>;
        getTypeInfo(): $TypeInfo;
        getRemapPrefixes(): $Set<string>;
        getDebugInfo(): $List<string>;
        appendDebugType(arg0: $StringBuilder): void;
        getAccessibleFields(arg0: boolean): $List<$CachedFieldInfo$Accessible>;
        getAccessibleMethods(arg0: boolean): $List<$CachedMethodInfo$Accessible>;
        storage: $CachedClassStorage;
        type: $Class<never>;
        modifiers: number;
        isInterface: boolean;
        constructor(arg0: $CachedClassStorage, arg1: $Class<never>);
        get superclass(): $CachedClassInfo;
        get interfaces(): $List<$CachedClassInfo>;
        get constructors(): $List<$CachedConstructorInfo>;
        get declaredFields(): $List<$CachedFieldInfo>;
        get declaredMethods(): $List<$CachedMethodInfo>;
        get typeInfo(): $TypeInfo;
        get remapPrefixes(): $Set<string>;
        get debugInfo(): $List<string>;
    }
    export class $Callable {
    }
    export interface $Callable {
        call(arg1: $Scriptable, arg2: $Scriptable, arg3: $Object[]): $Object;
    }
    /**
     * Values that may be interpreted as {@link $Callable}.
     */
    export type $Callable_ = ((arg1: $Scriptable, arg2: $Scriptable, arg3: $Object[]) => $Object);
    export class $CachedExecutableInfo extends $CachedMemberInfo {
        invoke(arg1: $Scriptable, arg2: $Object, arg3: $Object[]): $Object;
        getReturnType(): $TypeInfo;
        getParameters(): $CachedParameters;
        getSignature(): $MethodSignature;
        transformArgs(arg1: $Object, arg2: $CachedParameters_, arg3: $Object[]): $Object[];
        appendDebugParams(arg0: $StringBuilder): void;
        originalName: string;
        parent: $CachedClassInfo;
        isStatic: boolean;
        isFinal: boolean;
        modifiers: number;
        isNative: boolean;
        constructor(arg0: $CachedClassInfo, arg1: $Executable);
        get returnType(): $TypeInfo;
        get parameters(): $CachedParameters;
        get signature(): $MethodSignature;
    }
    export class $Context {
        isStrictMode(): boolean;
        putThreadLocal(arg0: $Object, arg1: $Object): void;
        setOf(arg0: $Object, arg1: $TypeInfo_): $Object;
        arrayOf(arg0: $Object, arg1: $TypeInfo_): $Object;
        toString(arg0: $Object): string;
        newArray(arg0: $Scriptable, arg1: $Object[]): $Scriptable;
        newArray(arg0: $Scriptable, arg1: number): $Scriptable;
        wrap(arg0: $Scriptable, arg1: $Object, arg2: $TypeInfo_): $Object;
        wrap(arg0: $Scriptable, arg1: $Object): $Object;
        canConvert(arg0: $Object, arg1: $TypeInfo_): boolean;
        getImplementationVersion(): string;
        static reportError(arg1: string): void;
        static reportError(arg1: string, arg2: number, arg3: string, arg4: number, arg5: string): void;
        toBoolean(arg0: $Object): boolean;
        createClassLoader(arg0: $ClassLoader): $GeneratedClassLoader;
        newObject(arg0: $Scriptable, arg1: string, arg2: $Object[]): $Scriptable;
        newObject(arg0: $Scriptable, arg1: string): $Scriptable;
        newObject(arg0: $Scriptable): $Scriptable;
        toNumber(arg0: $Object): number;
        toObject(arg0: $Object, arg1: $Scriptable): $Scriptable;
        getRegExp(): $RegExp;
        setTopCall(arg0: $Scriptable): void;
        callSync(arg0: $Callable_, arg1: $Scriptable, arg2: $Scriptable, arg3: $Object[]): $Object;
        jsToJava(arg0: $Object, arg1: $TypeInfo_): $Object;
        isListLike(arg0: $Object): boolean;
        isMapLike(arg0: $Object): boolean;
        mapOf(arg0: $Object, arg1: $TypeInfo_, arg2: $TypeInfo_): $Object;
        javaToJS(arg0: $Object, arg1: $Scriptable, arg2: $TypeInfo_): $Object;
        javaToJS(arg0: $Object, arg1: $Scriptable): $Object;
        addToScope(arg0: $Scriptable, arg1: string, arg2: $Object): void;
        doTopCall(arg0: $Scriptable, arg1: $Callable_, arg2: $Scriptable, arg3: $Object[], arg4: boolean): $Object;
        initJSON(arg0: $ScriptableObject, arg1: boolean): void;
        wrapAny(arg0: $Scriptable, arg1: $Object): $Object;
        classOf(arg0: $Object): $Object;
        listOf(arg0: $Object, arg1: $TypeInfo_): $Object;
        static reportWarning(arg1: string, arg2: string, arg3: number, arg4: string, arg5: number): void;
        static reportWarning(arg0: string, arg1: $Context): void;
        getErrorReporter(): $ErrorReporter;
        wrapAsJavaObject(arg0: $Scriptable, arg1: $Object, arg2: $TypeInfo_): $Scriptable;
        compileReader(arg0: $Reader, arg1: string, arg2: number, arg3: $Object): $Script;
        optionalMapOf<K, V>(arg0: $Object, arg1: $TypeInfo_, arg2: $TypeInfo_): $Map<K, V>;
        optionalMapOf(arg0: $Object): $Map<string, $Object>;
        static reportRuntimeError(arg1: string, arg2: string, arg3: number, arg4: string, arg5: number): $EvaluatorException;
        static reportRuntimeError(arg0: string, arg1: $Context): $EvaluatorException;
        hasTopCallScope(): boolean;
        static getSizeRank(arg0: $TypeInfo_): number;
        visibleToScripts(arg0: string, arg1: $ClassVisibilityContext_): boolean;
        compileString(arg0: string, arg1: string, arg2: number, arg3: $Object): $Script;
        optionalListOf<K>(arg0: $Object, arg1: $TypeInfo_): $List<K>;
        optionalListOf(arg0: $Object): $List<$Object>;
        storeScriptable(arg0: $Scriptable): void;
        getThreadLocal(arg0: $Object): $Object;
        static getUndefinedValue(): $Object;
        wrapJavaClass(arg0: $Scriptable, arg1: $Class<never>): $Scriptable;
        getTopCallOrThrow(): $Scriptable;
        evaluateReader(arg0: $Scriptable, arg1: $Reader, arg2: string, arg3: number, arg4: $Object): $Object;
        removeThreadLocal(arg0: $Object): void;
        getTopCallScope(): $Scriptable;
        wrapNewObject(arg0: $Scriptable, arg1: $Object, arg2: $TypeInfo_): $Scriptable;
        evaluateString(arg0: $Scriptable, arg1: string, arg2: string, arg3: number, arg4: $Object): $Object;
        lastStoredScriptable(): $Scriptable;
        defaultObjectToSource(arg0: $Scriptable, arg1: $Scriptable, arg2: $Object[]): string;
        newClassSerialNumber(): number;
        initSafeStandardObjects(): $ScriptableObject;
        initSafeStandardObjects(arg0: $ScriptableObject, arg1: boolean): $ScriptableObject;
        initSafeStandardObjects(arg0: $ScriptableObject): $Scriptable;
        static reportRuntimeError4(arg0: string, arg1: $Object, arg2: $Object, arg3: $Object, arg4: $Object, arg5: $Context): $EvaluatorException;
        getCachedClassStorage(arg0: boolean): $CachedClassStorage;
        setGenerateObserverCount(arg0: boolean): void;
        getApplicationClassLoader(): $ClassLoader;
        setApplicationClassLoader(arg0: $ClassLoader): void;
        static throwAsScriptRuntimeEx(arg0: $Throwable, arg1: $Context): $RuntimeException;
        reportConversionError(arg0: $Object, arg1: $TypeInfo_): $Object;
        internalConversionWeight(arg0: $Object, arg1: $TypeInfo_): number;
        static reportRuntimeError2(arg0: string, arg1: $Object, arg2: $Object, arg3: $Context): $EvaluatorException;
        arrayValueProviderOf(arg0: $Object): $ArrayValueProvider;
        createInterfaceAdapter(arg0: $TypeInfo_, arg1: $ScriptableObject): $Object;
        static getSourcePositionFromStack(arg1: number[]): string;
        getConversionWeight(arg0: $Object, arg1: $TypeInfo_): number;
        static reportRuntimeError1(arg0: string, arg1: $Object, arg2: $Context): $EvaluatorException;
        initStandardObjects(arg0: $ScriptableObject): $Scriptable;
        initStandardObjects(): $ScriptableObject;
        initStandardObjects(arg0: $ScriptableObject, arg1: boolean): $ScriptableObject;
        static reportRuntimeError0(arg0: string, arg1: $Context): $EvaluatorException;
        static reportRuntimeError3(arg0: string, arg1: $Object, arg2: $Object, arg3: $Object, arg4: $Context): $EvaluatorException;
        internalConversionWeightLast(arg0: $Object, arg1: $TypeInfo_): number;
        setInstructionObserverThreshold(arg0: number): void;
        getMaximumInterpreterStackDepth(): number;
        getInstructionObserverThreshold(): number;
        static JSTYPE_JAVA_CLASS: number;
        factory: $ContextFactory;
        static JSTYPE_JAVA_ARRAY: number;
        static CONVERSION_TRIVIAL: number;
        static CONVERSION_NONE: number;
        generateObserverCount: boolean;
        static CONVERSION_EXACT: number;
        static JSTYPE_BOOLEAN: number;
        static JSTYPE_UNDEFINED: number;
        static JSTYPE_OBJECT: number;
        lock: $Object;
        static JSTYPE_STRING: number;
        static JSTYPE_NULL: number;
        static JSTYPE_JAVA_OBJECT: number;
        static JSTYPE_NUMBER: number;
        constructor(arg0: $ContextFactory);
        get strictMode(): boolean;
        get implementationVersion(): string;
        get regExp(): $RegExp;
        set topCall(value: $Scriptable);
        get errorReporter(): $ErrorReporter;
        static get undefinedValue(): $Object;
        get topCallOrThrow(): $Scriptable;
        get topCallScope(): $Scriptable;
        get maximumInterpreterStackDepth(): number;
    }
    export class $NativeArray extends $IdScriptableObject implements $List<any>, $DataObject {
        remove(arg0: number): $Object;
        remove(arg0: $Object): boolean;
        get(arg0: number, arg1: $Context): $Object;
        get(arg0: number): $Object;
        getLength(): number;
        indexOf(arg0: $Object): number;
        clear(): void;
        lastIndexOf(arg0: $Object): number;
        add(arg0: number, arg1: $Object): void;
        add(arg0: $Object): boolean;
        subList(arg0: number, arg1: number): $List<any>;
        toArray(arg0: $Object[]): $Object[];
        toArray(): $Object[];
        iterator(): $Iterator<any>;
        contains(arg0: $Object): boolean;
        addAll(arg0: number, arg1: $Collection_<any>): boolean;
        addAll(arg0: $Collection_<any>): boolean;
        set(arg0: number, arg1: $Object): $Object;
        removeAll(arg0: $Collection_<any>): boolean;
        retainAll(arg0: $Collection_<any>): boolean;
        listIterator(): $ListIterator<any>;
        listIterator(arg0: number): $ListIterator<any>;
        containsAll(arg0: $Collection_<any>): boolean;
        getIds(arg1: boolean, arg2: boolean): $Object[];
        createDataObject<T>(arg0: $Supplier_<T>, arg1: $Context): T;
        isDataObjectList(): boolean;
        createDataObjectList<T>(arg0: $Supplier_<T>, arg1: $Context): $List<T>;
        getIndexIds(): $List<number>;
        replaceAll(arg0: $UnaryOperator_<$Object>): void;
        spliterator(): $Spliterator<$Object>;
        sort(arg0: $Comparator<$Object>): void;
        getFirst(): $Object;
        getLast(): $Object;
        addFirst(arg0: $Object): void;
        addLast(arg0: $Object): void;
        removeFirst(): $Object;
        removeLast(): $Object;
        toArray<T>(arg0: $IntFunction_<T[]>): T[];
        stream(): $Stream<$Object>;
        removeIf(arg0: $Predicate_<$Object>): boolean;
        parallelStream(): $Stream<$Object>;
        forEach(arg0: $Consumer_<$Object>): void;
        reversed(): $SequencedCollection<$Object>;
        static DONTENUM: number;
        static CONST: number;
        static UNINITIALIZED_CONST: number;
        static EMPTY: number;
        static READONLY: number;
        static PERMANENT: number;
        constructor(arg1: $Object[]);
        constructor(arg1: number);
        [Symbol.iterator](): Iterator<any>
        get length(): number;
        get dataObjectList(): boolean;
        get indexIds(): $List<number>;
        get first(): $Object;
        get last(): $Object;
    }
    export class $ContextFactory {
        registerDefaultRecordProperties(arg0: $Record): void;
        enter(): $Context;
        getTypeWrappers(): $TypeWrappers;
        getCachedClassStorage(): $CachedClassStorage;
        getMethodHandlesLookup(): $MethodHandles$Lookup;
        getRecordConstructor(arg0: $Class<never>): $MethodHandle;
        getDefaultRecordProperties(arg0: $Class<never>): $Object[];
        setInstanceStaticFallback(arg0: boolean): void;
        getInstanceStaticFallback(): boolean;
        constructor();
        get typeWrappers(): $TypeWrappers;
        get cachedClassStorage(): $CachedClassStorage;
        get methodHandlesLookup(): $MethodHandles$Lookup;
    }
    export class $GeneratedClassLoader {
    }
    export interface $GeneratedClassLoader {
        defineClass(arg0: string, arg1: number[]): $Class<never>;
        linkClass(arg0: $Class<never>): void;
    }
}
