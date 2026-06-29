import { $BlockStateFunction_ } from "@package/com/almostreliable/ponderjs/util";
import { $TextElementBuilderJS } from "@package/com/almostreliable/ponderjs";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $Selection } from "@package/net/createmod/ponder/api/scene";
import { $EntityType_, $Entity } from "@package/net/minecraft/world/entity";
import { $ParticleInstructions } from "@package/com/almostreliable/ponderjs/particles";
import { $Consumer_ } from "@package/java/util/function";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $SoundSource_, $SoundEvent_ } from "@package/net/minecraft/sounds";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $TextElementBuilder, $EntityElement, $InputElementBuilder, $ElementLink } from "@package/net/createmod/ponder/api/element";
import { $CustomPonderSceneElement } from "@package/com/almostreliable/ponderjs/api";
import { $Pointing_ } from "@package/net/createmod/catnip/math";
import { $Vec3_ } from "@package/net/minecraft/world/phys";

declare module "@package/com/almostreliable/ponderjs/extension" {
    export class $WorldInstructionExtension {
    }
    export interface $WorldInstructionExtension {
        setBlocks(arg0: $Selection, arg1: $BlockState_): void;
        setBlocks(arg0: $Selection, arg1: boolean, arg2: $BlockState_): void;
        modifyBlockEntityNBT(arg0: $Selection, arg1: $Consumer_<$CompoundTag>): void;
        modifyBlockEntityNBT(arg0: $Selection, arg1: boolean, arg2: $Consumer_<$CompoundTag>): void;
        modifyBlocks(arg0: $Selection, arg1: $BlockStateFunction_, arg2: boolean): void;
        modifyBlocks(arg0: $Selection, arg1: $BlockStateFunction_): void;
        modifyBlocks(arg0: $Selection, arg1: boolean, arg2: $BlockStateFunction_): void;
        createEntity(arg0: $EntityType_<never>, arg1: $Vec3_, arg2: $Consumer_<$Entity>): $ElementLink<$EntityElement>;
        createEntity(arg0: $EntityType_<never>, arg1: $Vec3_): $ElementLink<$EntityElement>;
        addElement(arg0: number): $CustomPonderSceneElement;
        addElement(): $CustomPonderSceneElement;
        modifyBlock(arg0: $BlockPos_, arg1: $BlockStateFunction_, arg2: boolean): void;
        removeEntity(arg0: $ElementLink<$EntityElement>): void;
    }
    /**
     * Values that may be interpreted as {@link $WorldInstructionExtension}.
     */
    export type $WorldInstructionExtension_ = (() => void);
    export class $SceneBuilderExtension {
    }
    export interface $SceneBuilderExtension {
        getParticles(): $ParticleInstructions;
        showStructure(): void;
        showStructure(arg0: number): void;
        encapsulateBounds(arg0: $BlockPos_): void;
        sharedText(arg0: number, arg1: $ResourceLocation_, arg2: $Vec3_): $TextElementBuilder;
        sharedText(arg0: number, arg1: $ResourceLocation_): $TextElementBuilderJS;
        showControls(arg0: number, arg1: $Vec3_, arg2: $Pointing_): $InputElementBuilder;
        playSound(arg0: $SoundEvent_): void;
        playSound(arg0: $SoundEvent_, arg1: $SoundSource_, arg2: number, arg3: number): void;
        playSound(arg0: $SoundEvent_, arg1: number): void;
        text(arg0: number, arg1: $Component_): $TextElementBuilderJS;
        text(arg0: number, arg1: $Component_, arg2: $Vec3_): $TextElementBuilderJS;
        get particles(): $ParticleInstructions;
    }
}
