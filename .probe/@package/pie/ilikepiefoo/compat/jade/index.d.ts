import { $LevelAccessor } from "@package/net/minecraft/world/level";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $IElement$Align_, $IElementHelper, $IElement } from "@package/snownee/jade/api/ui";
import { $ItemView, $FluidView, $IClientExtensionProvider, $ProgressView, $EnergyView } from "@package/snownee/jade/api/view";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $IWailaClientRegistration, $Accessor, $IEntityComponentProvider, $AccessorClientHandler, $ITooltip, $BlockAccessor$Builder, $BlockAccessor, $EntityAccessor$Builder, $EntityAccessor, $IWailaCommonRegistration, $IBlockComponentProvider } from "@package/snownee/jade/api";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $EntityType_, $Entity } from "@package/net/minecraft/world/entity";
import { $ServerExtensionProviderBuilder, $ServerDataProviderBuilder, $EntityComponentProviderBuilder, $BlockComponentProviderBuilder, $ClientExtensionProviderBuilder } from "@package/pie/ilikepiefoo/compat/jade/builder";
import { $JadeBeforeTooltipCollectCallback_, $JadeBeforeRenderCallback_, $JadeAfterRenderCallback_, $JadeItemModNameCallback_, $JadeTooltipCollectedCallback_, $JadeRayTraceCallback_ } from "@package/snownee/jade/api/callback";
import { $List, $List_ } from "@package/java/util";
import { $KubeEvent } from "@package/dev/latvian/mods/kubejs/event";
import { $Consumer_, $Predicate_ } from "@package/java/util/function";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $Enum, $Record, $Class, $Object } from "@package/java/lang";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $CustomEnchantPower_ } from "@package/snownee/jade/api/platform";
export * as builder from "@package/pie/ilikepiefoo/compat/jade/builder";

declare module "@package/pie/ilikepiefoo/compat/jade" {
    export class $WailaClientRegistrationEventJS implements $KubeEvent {
        progress(arg0: $ResourceLocation_): $ClientExtensionProviderBuilder<$CompoundTag, $ProgressView>;
        block(arg0: $ResourceLocation_, arg1: $Class<$Block_>): $BlockComponentProviderBuilder;
        addConfig(arg0: $ResourceLocation_, arg1: string, arg2: $Predicate_<string>): void;
        addConfig(arg0: $ResourceLocation_, arg1: boolean): void;
        addConfig(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: boolean): void;
        addConfig(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number, arg4: boolean): void;
        addConfig<T extends $Enum<T>>(arg0: $ResourceLocation_, arg1: T): void;
        entity(arg0: $ResourceLocation_, arg1: $Class<$Entity>): $EntityComponentProviderBuilder;
        getServerData(): $CompoundTag;
        createPluginConfigScreen(arg0: $Screen, arg1: $Component_): $Screen;
        createPluginConfigScreen(arg0: $Screen, arg1: string): $Screen;
        isClientFeature(arg0: $ResourceLocation_): boolean;
        blockAccessor(): $BlockAccessor$Builder;
        entityAccessor(): $EntityAccessor$Builder;
        energyStorage(arg0: $ResourceLocation_): $ClientExtensionProviderBuilder<$CompoundTag, $EnergyView>;
        addBeforeTooltipCollectCallback(arg0: number, arg1: $JadeBeforeTooltipCollectCallback_): void;
        addBeforeTooltipCollectCallback(arg0: $JadeBeforeTooltipCollectCallback_): void;
        registerEnergyStorageClient(arg0: $IClientExtensionProvider<$CompoundTag_, $EnergyView>): void;
        addTooltipCollectedCallback(arg0: number, arg1: $JadeTooltipCollectedCallback_): void;
        addTooltipCollectedCallback(arg0: $JadeTooltipCollectedCallback_): void;
        registerEntityIcon(arg0: $IEntityComponentProvider, arg1: $Class<$Entity>): void;
        usePickedResult(arg0: $EntityType_<never>): void;
        usePickedResult(arg0: $Block_): void;
        setServerData(arg0: $CompoundTag_): void;
        addConfigListener(arg0: $ResourceLocation_, arg1: $Consumer_<$ResourceLocation>): void;
        isServerConnected(): boolean;
        maybeLowVisionUser(): boolean;
        getAccessorHandler(arg0: $Class<$Accessor<never>>): $AccessorClientHandler<$Accessor<never>>;
        registerBlockIcon(arg0: $IBlockComponentProvider, arg1: $Class<$Block_>): void;
        getBlockCamouflage(arg0: $LevelAccessor, arg1: $BlockPos_): $ItemStack;
        shouldHide(arg0: $BlockState_): boolean;
        shouldHide(arg0: $Entity): boolean;
        shouldPick(arg0: $BlockState_): boolean;
        shouldPick(arg0: $Entity): boolean;
        hideTarget(arg0: $EntityType_<never>): void;
        hideTarget(arg0: $Block_): void;
        registerBlockComponent(arg0: $IBlockComponentProvider, arg1: $Class<$Block_>): void;
        registerItemStorageClient(arg0: $IClientExtensionProvider<$ItemStack_, $ItemView>): void;
        registerAccessorHandler<T extends $Accessor<never>>(arg0: $Class<T>, arg1: $AccessorClientHandler<T>): void;
        registerEntityComponent(arg0: $IEntityComponentProvider, arg1: $Class<$Entity>): void;
        registerFluidStorageClient(arg0: $IClientExtensionProvider<$CompoundTag_, $FluidView>): void;
        registerCustomEnchantPower(arg0: $Block_, arg1: $CustomEnchantPower_): void;
        addBeforeRenderCallback(arg0: number, arg1: $JadeBeforeRenderCallback_): void;
        addBeforeRenderCallback(arg0: $JadeBeforeRenderCallback_): void;
        registerProgressClient(arg0: $IClientExtensionProvider<$CompoundTag_, $ProgressView>): void;
        isShowDetailsPressed(): boolean;
        markAsClientFeature(arg0: $ResourceLocation_): void;
        markAsServerFeature(arg0: $ResourceLocation_): void;
        addAfterRenderCallback(arg0: $JadeAfterRenderCallback_): void;
        addAfterRenderCallback(arg0: number, arg1: $JadeAfterRenderCallback_): void;
        addRayTraceCallback(arg0: number, arg1: $JadeRayTraceCallback_): void;
        addRayTraceCallback(arg0: $JadeRayTraceCallback_): void;
        addItemModNameCallback(arg0: number, arg1: $JadeItemModNameCallback_): void;
        addItemModNameCallback(arg0: $JadeItemModNameCallback_): void;
        itemStorage(arg0: $ResourceLocation_): $ClientExtensionProviderBuilder<$ItemStack, $ItemView>;
        fluidStorage(arg0: $ResourceLocation_): $ClientExtensionProviderBuilder<$CompoundTag, $FluidView>;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        constructor(arg0: $IWailaClientRegistration);
        get serverConnected(): boolean;
        get showDetailsPressed(): boolean;
    }
    export class $WailaCommonRegistrationEventJS implements $KubeEvent {
        progress<T>(arg0: $ResourceLocation_, arg1: $Class<T>): $ServerExtensionProviderBuilder<T, $CompoundTag>;
        getRegistration(): $IWailaCommonRegistration;
        energyStorage<T>(arg0: $ResourceLocation_, arg1: $Class<T>): $ServerExtensionProviderBuilder<T, $CompoundTag>;
        entityDataProvider(arg0: $ResourceLocation_, arg1: $Class<$Entity>): $ServerDataProviderBuilder<$EntityAccessor>;
        blockDataProvider(arg0: $ResourceLocation_, arg1: $Class<$BlockEntity>): $ServerDataProviderBuilder<$BlockAccessor>;
        itemStorage<T>(arg0: $ResourceLocation_, arg1: $Class<T>): $ServerExtensionProviderBuilder<T, $ItemStack>;
        fluidStorage<T>(arg0: $ResourceLocation_, arg1: $Class<T>): $ServerExtensionProviderBuilder<T, $CompoundTag>;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        constructor(arg0: $IWailaCommonRegistration);
        get registration(): $IWailaCommonRegistration;
    }
    export class $ITooltipWrapper extends $Record {
        remove(arg0: $ResourceLocation_): void;
        size(): number;
        get(arg0: number, arg1: $IElement$Align_): $List<$IElement>;
        get(arg0: $ResourceLocation_): $List<$IElement>;
        append(arg0: $Component_): void;
        append(arg0: $Component_, arg1: $ResourceLocation_): void;
        append(arg0: $IElement): void;
        append(arg0: number, arg1: $List_<$IElement>): void;
        append(arg0: number, arg1: $IElement): void;
        clear(): void;
        isEmpty(): boolean;
        add(arg0: $IElement): void;
        add(arg0: $Component_, arg1: $ResourceLocation_): void;
        add(arg0: $Component_): void;
        add(arg0: number, arg1: $List_<$IElement>): void;
        add(arg0: number, arg1: $IElement): void;
        add(arg0: number, arg1: $Component_, arg2: $ResourceLocation_): void;
        add(arg0: number, arg1: $Component_): void;
        static of(arg0: $ITooltip): $ITooltipWrapper;
        addAll(arg0: $List_<$Component_>): void;
        getMessage(): string;
        tooltip(): $ITooltip;
        addElements(arg0: $List_<$IElement>): void;
        getElementHelper(): $IElementHelper;
        constructor(tooltip: $ITooltip);
        get empty(): boolean;
        get message(): string;
        get elementHelper(): $IElementHelper;
    }
    /**
     * Values that may be interpreted as {@link $ITooltipWrapper}.
     */
    export type $ITooltipWrapper_ = { tooltip?: $ITooltip,  } | [tooltip?: $ITooltip, ];
}
