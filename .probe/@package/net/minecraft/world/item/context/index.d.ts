import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $InteractionHand, $InteractionHand_ } from "@package/net/minecraft/world";
import { $BlockPos, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $UseOnContextInvoker } from "@package/com/jesz/createdieselgenerators/mixins";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $UseOnContextAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $Vec3, $BlockHitResult } from "@package/net/minecraft/world/phys";

declare module "@package/net/minecraft/world/item/context" {
    export class $BlockPlaceContext extends $UseOnContext {
        static at(context: $BlockPlaceContext, pos: $BlockPos_, direction: $Direction_): $BlockPlaceContext;
        getNearestLookingVerticalDirection(): $Direction;
        getNearestLookingDirections(): $Direction[];
        getNearestLookingDirection(): $Direction;
        replacingClickedOnBlock(): boolean;
        canPlace(): boolean;
        handler$hee000$moonlight$fixNotAccountingForNullPlayer2(arg0: $CallbackInfoReturnable<any>): void;
        handler$hee000$moonlight$fixNotAccountingForNullPlayer1(arg0: $CallbackInfoReturnable<any>): void;
        handler$hee000$moonlight$fixNotAccountingForNullPlayer3(arg0: $CallbackInfoReturnable<any>): void;
        replaceClicked: boolean;
        constructor(level: $Level_, player: $Player | null, hand: $InteractionHand_, itemStack: $ItemStack_, hitResult: $BlockHitResult);
        constructor(context: $UseOnContext);
        constructor(player: $Player, hand: $InteractionHand_, itemStack: $ItemStack_, hitResult: $BlockHitResult);
        get nearestLookingVerticalDirection(): $Direction;
        get nearestLookingDirections(): $Direction[];
        get nearestLookingDirection(): $Direction;
    }
    export class $DirectionalPlaceContext extends $BlockPlaceContext {
        replaceClicked: boolean;
        constructor(level: $Level_, pos: $BlockPos_, direction: $Direction_, itemStack: $ItemStack_, face: $Direction_);
    }
    export class $UseOnContext implements $UseOnContextAccessor, $UseOnContextInvoker {
        getLevel(): $Level;
        getClickLocation(): $Vec3;
        getClickedFace(): $Direction;
        getClickedPos(): $BlockPos;
        getItemInHand(): $ItemStack;
        getPlayer(): $Player;
        getHorizontalDirection(): $Direction;
        getRotation(): number;
        isSecondaryUseActive(): boolean;
        getHitResult(): $BlockHitResult;
        getHand(): $InteractionHand;
        isInside(): boolean;
        create$getHitResult(): $BlockHitResult;
        cdg_getHitResult(): $BlockHitResult;
        constructor(player: $Player, hand: $InteractionHand_, hitResult: $BlockHitResult);
        constructor(level: $Level_, player: $Player | null, hand: $InteractionHand_, itemStack: $ItemStack_, hitResult: $BlockHitResult);
        get level(): $Level;
        get clickLocation(): $Vec3;
        get clickedFace(): $Direction;
        get clickedPos(): $BlockPos;
        get itemInHand(): $ItemStack;
        get player(): $Player;
        get horizontalDirection(): $Direction;
        get rotation(): number;
        get secondaryUseActive(): boolean;
        get hitResult(): $BlockHitResult;
        get hand(): $InteractionHand;
        get inside(): boolean;
    }
}
