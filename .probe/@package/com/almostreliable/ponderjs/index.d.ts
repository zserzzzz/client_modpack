import { $PonderScene, $PonderTag } from "@package/net/createmod/ponder/foundation";
import { $TextWindowElement } from "@package/net/createmod/ponder/foundation/element";
import { $Item_ } from "@package/net/minecraft/world/item";
import { $Ingredient_ } from "@package/net/minecraft/world/item/crafting";
import { $PonderPalette_ } from "@package/net/createmod/ponder/api";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $PonderStoryBoard_ } from "@package/net/createmod/ponder/api/scene";
import { $PonderSceneRegistry } from "@package/net/createmod/ponder/foundation/registration";
import { $Set_ } from "@package/java/util";
import { $KubeEvent } from "@package/dev/latvian/mods/kubejs/event";
import { $Consumer_ } from "@package/java/util/function";
import { $PonderTagRegistrationHelper } from "@package/net/createmod/ponder/api/registration";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $TextElementBuilder } from "@package/net/createmod/ponder/api/element";
import { $Object } from "@package/java/lang";
import { $Vec3_ } from "@package/net/minecraft/world/phys";
export * as api from "@package/com/almostreliable/ponderjs/api";
export * as mixin from "@package/com/almostreliable/ponderjs/mixin";
export * as particles from "@package/com/almostreliable/ponderjs/particles";
export * as util from "@package/com/almostreliable/ponderjs/util";
export * as extension from "@package/com/almostreliable/ponderjs/extension";

declare module "@package/com/almostreliable/ponderjs" {
    export class $PonderRegistryEventJS implements $KubeEvent {
        remove(arg0: $Ingredient_): void;
        create(arg0: $Ingredient_): $PonderBuilderJS;
        printParticleNames(): void;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(arg0: $PonderSceneRegistry);
    }
    export class $PonderBuilderJS {
        tag(...arg0: $ResourceLocation_[]): $PonderBuilderJS;
        scene(arg0: string, arg1: string, arg2: $ResourceLocation_, arg3: $PonderStoryBoard_, ...arg4: $ResourceLocation_[]): $PonderBuilderJS;
        scene(arg0: string, arg1: string, arg2: $PonderStoryBoard_): $PonderBuilderJS;
        static BASIC_STRUCTURE: $ResourceLocation;
        constructor(arg0: $Set_<$ResourceLocation_>, arg1: $PonderSceneRegistry);
    }
    export class $TextElementBuilderJS implements $TextElementBuilder {
        text(arg0: $Component_, ...arg1: $Object[]): $TextElementBuilderJS;
        text(arg0: $Component_): $TextElementBuilderJS;
        colored(arg0: $PonderPalette_): $TextElementBuilderJS;
        independent(arg0: number): $TextElementBuilderJS;
        pointAt(arg0: $Vec3_): $TextElementBuilderJS;
        independent(): $TextElementBuilder;
        attachKeyFrame(): $TextElementBuilder;
        placeNearTarget(): $TextElementBuilder;
        sharedText(arg0: $ResourceLocation_): $TextElementBuilder;
        sharedText(arg0: string, ...arg1: $Object[]): $TextElementBuilder;
        constructor(arg0: $TextWindowElement, arg1: $PonderScene);
    }
    export class $PonderItemTagEventJS$Builder {
        description(arg0: string): $PonderItemTagEventJS$Builder;
        items(arg0: $Ingredient_): $PonderItemTagEventJS$Builder;
        title(arg0: string): $PonderItemTagEventJS$Builder;
        icon(arg0: $Item_): $PonderItemTagEventJS$Builder;
        noIndex(): $PonderItemTagEventJS$Builder;
        addIconToItems(): $PonderItemTagEventJS$Builder;
    }
    export class $PonderItemTagEventJS implements $KubeEvent {
        createTag(arg0: string, arg1: $Item_, arg2: string, arg3: string, arg4: $Ingredient_ | null): void;
        createTag(arg0: string, arg1: $Consumer_<$PonderItemTagEventJS$Builder>): void;
        createTag(arg0: string, arg1: $Item_, arg2: string, arg3: string): void;
        remove(arg0: $PonderTag, arg1: $Ingredient_): void;
        add(arg0: $PonderTag, arg1: $Ingredient_): void;
        removeTag(...arg0: $PonderTag[]): void;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(arg0: $PonderTagRegistrationHelper<$ResourceLocation_>);
    }
}
