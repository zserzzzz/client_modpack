import { $GetServerGroupsCallbackJS, $GetClientGroupsCallbackJS } from "@package/pie/ilikepiefoo/compat/jade/builder/callback";
import { $Consumer_, $Consumer } from "@package/java/util/function";
import { $IElement } from "@package/snownee/jade/api/ui";
import { $ClientViewGroup, $ViewGroup } from "@package/snownee/jade/api/view";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $ITooltipWrapper, $ITooltipWrapper_ } from "@package/pie/ilikepiefoo/compat/jade";
import { $BlockAccessor, $Accessor, $EntityAccessor } from "@package/snownee/jade/api";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $List, $List_ } from "@package/java/util";
import { $IPluginConfig } from "@package/snownee/jade/api/config";
export * as callback from "@package/pie/ilikepiefoo/compat/jade/builder/callback";

declare module "@package/pie/ilikepiefoo/compat/jade/builder" {
    export class $BlockComponentProviderBuilder$IconRetriever {
    }
    export interface $BlockComponentProviderBuilder$IconRetriever {
        getIcon(arg0: $BlockAccessor, arg1: $IPluginConfig, arg2: $IElement): $IElement;
    }
    /**
     * Values that may be interpreted as {@link $BlockComponentProviderBuilder$IconRetriever}.
     */
    export type $BlockComponentProviderBuilder$IconRetriever_ = ((arg0: $BlockAccessor, arg1: $IPluginConfig, arg2: $IElement) => $IElement);
    export class $EntityComponentProviderBuilder$TooltipRetriever {
    }
    export interface $EntityComponentProviderBuilder$TooltipRetriever {
        appendTooltip(arg0: $ITooltipWrapper_, arg1: $EntityAccessor, arg2: $IPluginConfig): void;
    }
    /**
     * Values that may be interpreted as {@link $EntityComponentProviderBuilder$TooltipRetriever}.
     */
    export type $EntityComponentProviderBuilder$TooltipRetriever_ = ((arg0: $ITooltipWrapper, arg1: $EntityAccessor, arg2: $IPluginConfig) => void);
    export class $ServerDataProviderBuilder$AppendServerDataCallback<ACCESSOR extends $Accessor<never>> {
    }
    export interface $ServerDataProviderBuilder$AppendServerDataCallback<ACCESSOR extends $Accessor<never>> {
        appendServerData(arg0: $CompoundTag_, arg1: ACCESSOR): void;
    }
    /**
     * Values that may be interpreted as {@link $ServerDataProviderBuilder$AppendServerDataCallback}.
     */
    export type $ServerDataProviderBuilder$AppendServerDataCallback_<ACCESSOR> = ((arg0: $CompoundTag, arg1: ACCESSOR) => void);
    export class $ServerDataProviderBuilder<T extends $Accessor<never>> extends $JadeProviderBuilder {
        getCallback(): $ServerDataProviderBuilder$AppendServerDataCallback<T>;
        static doNothing<T extends $Accessor<never>>(arg0: $CompoundTag_, arg1: T): void;
        setCallback(arg0: $ServerDataProviderBuilder$AppendServerDataCallback_<T>): $ServerDataProviderBuilder<T>;
        constructor(arg0: $ResourceLocation_);
    }
    export class $EntityComponentProviderBuilder$IconRetriever {
    }
    export interface $EntityComponentProviderBuilder$IconRetriever {
        getIcon(arg0: $EntityAccessor, arg1: $IPluginConfig, arg2: $IElement): $IElement;
    }
    /**
     * Values that may be interpreted as {@link $EntityComponentProviderBuilder$IconRetriever}.
     */
    export type $EntityComponentProviderBuilder$IconRetriever_ = ((arg0: $EntityAccessor, arg1: $IPluginConfig, arg2: $IElement) => $IElement);
    export class $ClientExtensionProviderBuilder<IN, OUT> extends $JadeProviderBuilder {
        getCallback(): $Consumer<$GetClientGroupsCallbackJS<IN, OUT>>;
        callback(arg0: $Consumer_<$GetClientGroupsCallbackJS<IN, OUT>>): $ClientExtensionProviderBuilder<IN, OUT>;
        static doNothing<IN, OUT>(arg0: $GetClientGroupsCallbackJS<IN, OUT>): void;
        setCallback(arg0: $Consumer_<$GetClientGroupsCallbackJS<IN, OUT>>): $ClientExtensionProviderBuilder<IN, OUT>;
        groupCallback(arg0: $Consumer_<$GetClientGroupsCallbackJS<IN, OUT>>): $ClientExtensionProviderBuilder<IN, OUT>;
        onGroups(arg0: $Consumer_<$GetClientGroupsCallbackJS<IN, OUT>>): $ClientExtensionProviderBuilder<IN, OUT>;
        constructor(arg0: $ResourceLocation_);
    }
    export class $EntityComponentProviderBuilder extends $ToggleableProviderBuilder {
        icon(arg0: $EntityComponentProviderBuilder$IconRetriever_): $EntityComponentProviderBuilder;
        tooltip(arg0: $EntityComponentProviderBuilder$TooltipRetriever_): $EntityComponentProviderBuilder;
        getIconRetriever(): $EntityComponentProviderBuilder$IconRetriever;
        getTooltipRetriever(): $EntityComponentProviderBuilder$TooltipRetriever;
        tooltipRetriever(arg0: $EntityComponentProviderBuilder$TooltipRetriever_): $EntityComponentProviderBuilder;
        iconRetriever(arg0: $EntityComponentProviderBuilder$IconRetriever_): $EntityComponentProviderBuilder;
        setIconRetriever(arg0: $EntityComponentProviderBuilder$IconRetriever_): $EntityComponentProviderBuilder;
        setTooltipRetriever(arg0: $EntityComponentProviderBuilder$TooltipRetriever_): $EntityComponentProviderBuilder;
        constructor(arg0: $ResourceLocation_);
    }
    export class $ViewGroupBuilder<OUT> {
        clear(): $ViewGroupBuilder<OUT>;
        add(arg0: OUT): $ViewGroupBuilder<OUT>;
        addAll(arg0: $List_<OUT>): $ViewGroupBuilder<OUT>;
        addElement(arg0: OUT): $ViewGroupBuilder<OUT>;
        getElements(): $List<OUT>;
        addElements(arg0: $List_<OUT>): $ViewGroupBuilder<OUT>;
        setElements(arg0: $List_<OUT>): $ViewGroupBuilder<OUT>;
        buildCommon(): $ViewGroup<OUT>;
        buildClient(): $ClientViewGroup<OUT>;
        constructor();
    }
    export class $ServerExtensionProviderBuilder<IN, OUT> extends $JadeProviderBuilder {
        getCallback(): $Consumer<$GetServerGroupsCallbackJS<IN, OUT>>;
        callback(arg0: $Consumer_<$GetServerGroupsCallbackJS<IN, OUT>>): $ServerExtensionProviderBuilder<IN, OUT>;
        static doNothing<IN, OUT>(arg0: $GetServerGroupsCallbackJS<IN, OUT>): void;
        setCallback(arg0: $Consumer_<$GetServerGroupsCallbackJS<IN, OUT>>): $ServerExtensionProviderBuilder<IN, OUT>;
        groupCallback(arg0: $Consumer_<$GetServerGroupsCallbackJS<IN, OUT>>): $ServerExtensionProviderBuilder<IN, OUT>;
        onGroups(arg0: $Consumer_<$GetServerGroupsCallbackJS<IN, OUT>>): $ServerExtensionProviderBuilder<IN, OUT>;
        constructor(arg0: $ResourceLocation_);
    }
    export class $BlockComponentProviderBuilder$TooltipRetriever {
    }
    export interface $BlockComponentProviderBuilder$TooltipRetriever {
        appendTooltip(arg0: $ITooltipWrapper_, arg1: $BlockAccessor, arg2: $IPluginConfig): void;
    }
    /**
     * Values that may be interpreted as {@link $BlockComponentProviderBuilder$TooltipRetriever}.
     */
    export type $BlockComponentProviderBuilder$TooltipRetriever_ = ((arg0: $ITooltipWrapper, arg1: $BlockAccessor, arg2: $IPluginConfig) => void);
    export class $JadeProviderBuilder {
        getDefaultPriority(): number;
        setDefaultPriority(arg0: number): $JadeProviderBuilder;
        getUniqueIdentifier(): $ResourceLocation;
        constructor(arg0: $ResourceLocation_);
        get uniqueIdentifier(): $ResourceLocation;
    }
    export class $ToggleableProviderBuilder extends $JadeProviderBuilder {
        required(): $ToggleableProviderBuilder;
        isRequired(): boolean;
        setRequired(arg0: boolean): $ToggleableProviderBuilder;
        enabledByDefault(): $ToggleableProviderBuilder;
        isEnabledByDefault(): boolean;
        setEnabledByDefault(arg0: boolean): $ToggleableProviderBuilder;
        constructor(arg0: $ResourceLocation_);
    }
    export class $BlockComponentProviderBuilder extends $ToggleableProviderBuilder {
        icon(arg0: $BlockComponentProviderBuilder$IconRetriever_): $BlockComponentProviderBuilder;
        tooltip(arg0: $BlockComponentProviderBuilder$TooltipRetriever_): $BlockComponentProviderBuilder;
        getIconRetriever(): $BlockComponentProviderBuilder$IconRetriever;
        getTooltipRetriever(): $BlockComponentProviderBuilder$TooltipRetriever;
        tooltipRetriever(arg0: $BlockComponentProviderBuilder$TooltipRetriever_): $BlockComponentProviderBuilder;
        iconRetriever(arg0: $BlockComponentProviderBuilder$IconRetriever_): $BlockComponentProviderBuilder;
        setIconRetriever(arg0: $BlockComponentProviderBuilder$IconRetriever_): $BlockComponentProviderBuilder;
        setTooltipRetriever(arg0: $BlockComponentProviderBuilder$TooltipRetriever_): $BlockComponentProviderBuilder;
        constructor(arg0: $ResourceLocation_);
    }
}
