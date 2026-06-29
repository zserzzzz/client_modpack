import { $Function_ } from "@package/java/util/function";
import { $Registry } from "@package/net/minecraft/core";
import { $SoundSource_, $SoundEvent_ } from "@package/net/minecraft/sounds";
import { $Item } from "@package/net/minecraft/world/item";
import { $BuilderBase } from "@package/dev/latvian/mods/kubejs/registry";
import { $ResourceLocation_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Object } from "@package/java/lang";
import { $ArrowEntityJSBuilder } from "@package/net/liopyu/entityjs/builders/nonliving/entityjs";
import { $EyeOfEnderJSBuilder } from "@package/net/liopyu/entityjs/builders/nonliving/vanilla";
import { $ItemBuilder } from "@package/dev/latvian/mods/kubejs/item";
import { $SourceLine } from "@package/dev/latvian/mods/kubejs/script";
import { $ContextUtils$ItemUseContext } from "@package/net/liopyu/entityjs/util";

declare module "@package/net/liopyu/entityjs/item" {
    export class $SpawnEggItemBuilder extends $ItemBuilder {
        /**
         * Sets the background color of the egg item
         */
        backgroundColor(arg0: number): $SpawnEggItemBuilder;
        /**
         * Sets the highlight color of the egg item
         */
        highlightColor(arg0: number): $SpawnEggItemBuilder;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        registryKey: $ResourceKey<$Registry<$Item>>;
        constructor(arg0: $ResourceLocation_, arg1: $BuilderBase<never>);
    }
    export class $ArrowItemBuilder extends $ItemBuilder {
        /**
         * Sets if the arrow can be picked up
         */
        canBePickedup(arg0: boolean): $ArrowItemBuilder;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        registryKey: $ResourceKey<$Registry<$Item>>;
        constructor(arg0: $ResourceLocation_, arg1: $ArrowEntityJSBuilder);
    }
    export class $EyeOfEnderItemBuilder extends $ItemBuilder {
        /**
         * A function to determine where the thrown ender eye item will head towards.
         * 
         * Example usage:
         * ```javascript
         * builder.signalTo(context => {
         *     const { level, player, hand } = context
         *     return // Some BlockPos for the eye to navigate to when thrown
         * });
         * ```
         */
        signalTo(arg0: $Function_<$ContextUtils$ItemUseContext, $Object>): $EyeOfEnderItemBuilder;
        /**
         * A function to determine which structure tag the thrown ender eye item will head towards in a certain chunk radius.
         * 
         * Example usage:
         * ```javascript
         * builder.signalToStructureTag("minecraft:village", 100);
         * ```
         */
        signalToStructureTag(arg0: $ResourceLocation_, arg1: number): $EyeOfEnderItemBuilder;
        /**
         * A function to determine which structure tag the thrown ender eye item will head towards in a 100 chunk radius.
         * 
         * Example usage:
         * ```javascript
         * builder.signalToStructureTag("minecraft:village");
         * ```
         */
        signalToStructureTag(arg0: $ResourceLocation_): $EyeOfEnderItemBuilder;
        /**
         * Sets if the eye of ender triggers the USED_ENDER_EYE Criteria
         */
        triggersCriteria(arg0: boolean): $EyeOfEnderItemBuilder;
        /**
         * A function to determine structure the thrown ender eye item will head towards in a 100 chunk radius.
         * 
         * Example usage:
         * ```javascript
         * builder.signalToStructure("minecraft:village_plains");
         * ```
         */
        signalToStructure(arg0: $ResourceLocation_): $EyeOfEnderItemBuilder;
        /**
         * A function to determine structure the thrown ender eye item will head towards in a certain chunk radius.
         * 
         * Example usage:
         * ```javascript
         * builder.signalToStructure("minecraft:village_plains", 100);
         * ```
         */
        signalToStructure(arg0: $ResourceLocation_, arg1: number): $EyeOfEnderItemBuilder;
        /**
         * Sets the sound to play when the eye item is thrown at the coordinates of the player
         * 
         * @param sPlayer The player to play the sound to, can be null.
         * @param soundEvent The sound to play when the eye item is thrown
         * @param soundSource The source of the sound in the mixer.
         * @param soundVolume The volume of the sound.
         * @param soundPitch The pitch of the sound.
         * 
         * ```javascript
         * item.playSoundOverride(null,"ambient.basalt_deltas.additions","ambient",1,1)
         * ```
         */
        playSoundOverride(arg0: $Player, arg1: $SoundEvent_, arg2: $SoundSource_, arg3: number, arg4: number): $EyeOfEnderItemBuilder;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        registryKey: $ResourceKey<$Registry<$Item>>;
        constructor(arg0: $ResourceLocation_, arg1: $EyeOfEnderJSBuilder);
    }
    export class $TridentItemBuilder extends $ProjectileItemBuilder {
        /**
         * Sets the sound event for the riptide level 2
         */
        setRiptide2Sound(arg0: $SoundEvent_): void;
        /**
         * Sets the sound event for the riptide level 1
         */
        setRiptide1Sound(arg0: $SoundEvent_): void;
        /**
         * Sets the sound event for the riptide level 3
         */
        setRiptide3Sound(arg0: $SoundEvent_): void;
        /**
         * Sets the sound event for throwing the item
         */
        setThrowSound(arg0: $SoundEvent_): void;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        registryKey: $ResourceKey<$Registry<$Item>>;
        constructor(arg0: $ResourceLocation_, arg1: $BuilderBase<never>);
        set riptide2Sound(value: $SoundEvent_);
        set riptide1Sound(value: $SoundEvent_);
        set riptide3Sound(value: $SoundEvent_);
        set throwSound(value: $SoundEvent_);
    }
    export class $ProjectileItemBuilder extends $ItemBuilder {
        /**
         * Sets whether the item can be thrown.
         * 
         * @param canThrow True if the item can be thrown, false otherwise.
         * 
         * Example usage:
         * ```javascript
         * itemBuilder.canThrow(true);
         * ```
         */
        canThrow(arg0: boolean): $ItemBuilder;
        /**
         * Sets the inaccuracy of the projectile.
         * 
         * @param projectileInaccuracy The inaccuracy of the projectile.
         * 
         * Example usage:
         * ```javascript
         * itemBuilder.projectileInaccuracy(0.1f);
         * ```
         */
        projectileInaccuracy(arg0: number): $ItemBuilder;
        /**
         * Sets the Z offset for the projectile.
         * 
         * @param projectileZ The Z offset for the projectile.
         * 
         * Example usage:
         * ```javascript
         * itemBuilder.projectileZ(0.5f);
         * ```
         */
        projectileZ(arg0: number): $ItemBuilder;
        /**
         * Sets the velocity of the projectile.
         * 
         * @param projectileVelocity The velocity of the projectile.
         * 
         * Example usage:
         * ```javascript
         * itemBuilder.projectileVelocity(1.5f);
         * ```
         */
        projectileVelocity(arg0: number): $ItemBuilder;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        registryKey: $ResourceKey<$Registry<$Item>>;
        constructor(arg0: $ResourceLocation_, arg1: $BuilderBase<never>);
    }
}
