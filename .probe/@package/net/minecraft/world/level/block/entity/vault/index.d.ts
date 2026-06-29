import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $PlayerDetector$EntitySelector, $PlayerDetector_, $PlayerDetector } from "@package/net/minecraft/world/level/block/entity/trialspawner";
import { $Codec } from "@package/com/mojang/serialization";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $ParticleOptions_ } from "@package/net/minecraft/core/particles";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $UUID, $List, $Set, $UUID_, $Set_, $List_ } from "@package/java/util";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $Enum, $Record } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/net/minecraft/world/level/block/entity/vault" {
    export class $VaultBlockEntity$Server {
        static tick(level: $ServerLevel, pos: $BlockPos_, state: $BlockState_, config: $VaultConfig_, serverData: $VaultServerData, sharedData: $VaultSharedData): void;
        static tryInsertKey(level: $ServerLevel, pos: $BlockPos_, state: $BlockState_, config: $VaultConfig_, serverData: $VaultServerData, sharedData: $VaultSharedData, player: $Player, stack: $ItemStack_): void;
        static cycleDisplayItemFromLootTable(level: $ServerLevel, state: $VaultState_, config: $VaultConfig_, sharedData: $VaultSharedData, pos: $BlockPos_): void;
        static setVaultState(level: $ServerLevel, pos: $BlockPos_, oldState: $BlockState_, newState: $BlockState_, config: $VaultConfig_, sharedData: $VaultSharedData): void;
        constructor();
    }
    export class $VaultBlockEntity extends $BlockEntity {
        static access$000(level: $Level_, pos: $BlockPos_, state: $BlockState_): void;
        getClientData(): $VaultClientData;
        getSharedData(): $VaultSharedData;
        getConfig(): $VaultConfig;
        getServerData(): $VaultServerData;
        setConfig(config: $VaultConfig_): void;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        remove: boolean;
        constructor(pos: $BlockPos_, state: $BlockState_);
        get clientData(): $VaultClientData;
        get sharedData(): $VaultSharedData;
        get serverData(): $VaultServerData;
    }
    export class $VaultBlockEntity$Client {
        static tick(level: $Level_, pos: $BlockPos_, state: $BlockState_, clientData: $VaultClientData, sharedData: $VaultSharedData): void;
        static emitActivationParticles(level: $Level_, pos: $BlockPos_, state: $BlockState_, sharedData: $VaultSharedData, particle: $ParticleOptions_): void;
        static emitDeactivationParticles(level: $Level_, pos: $BlockPos_, particle: $ParticleOptions_): void;
        static shouldDisplayActiveEffects(sharedData: $VaultSharedData): boolean;
        constructor();
    }
    export class $VaultClientData {
        currentSpin(): number;
        previousSpin(): number;
        updateDisplayItemSpin(): void;
        static ROTATION_SPEED: number;
        constructor();
    }
    export class $VaultConfig extends $Record {
        keyItem(): $ItemStack;
        lootTable(): $ResourceKey<$LootTable>;
        overrideLootTableToDisplay(): ($ResourceKey<$LootTable>) | undefined;
        entitySelector(): $PlayerDetector$EntitySelector;
        playerDetector(): $PlayerDetector;
        activationRange(): number;
        deactivationRange(): number;
        static CODEC: $Codec<$VaultConfig>;
        static DEFAULT: $VaultConfig;
        static TAG_NAME: string;
        constructor(arg0: $ResourceKey_<$LootTable>, arg1: number, arg2: number, arg3: $ItemStack_, arg4: ($ResourceKey_<$LootTable>) | undefined, arg5: $PlayerDetector_, arg6: $PlayerDetector$EntitySelector);
        constructor(lootTable: $ResourceKey_<$LootTable>, activationRange: number, arg2: number, deactivationRange: $ItemStack_, arg4: ($ResourceKey_<$LootTable>) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $VaultConfig}.
     */
    export type $VaultConfig_ = { lootTable?: $ResourceKey_<$LootTable>, entitySelector?: $PlayerDetector$EntitySelector, deactivationRange?: number, overrideLootTableToDisplay?: ($ResourceKey_<$LootTable>) | undefined, activationRange?: number, keyItem?: $ItemStack_, playerDetector?: $PlayerDetector_,  } | [lootTable?: $ResourceKey_<$LootTable>, entitySelector?: $PlayerDetector$EntitySelector, deactivationRange?: number, overrideLootTableToDisplay?: ($ResourceKey_<$LootTable>) | undefined, activationRange?: number, keyItem?: $ItemStack_, playerDetector?: $PlayerDetector_, ];
    export class $VaultState$LightLevel extends $Enum<$VaultState$LightLevel> {
    }
    /**
     * Values that may be interpreted as {@link $VaultState$LightLevel}.
     */
    export type $VaultState$LightLevel_ = "half_lit" | "lit";
    export class $VaultServerData {
        set(other: $VaultServerData): void;
        setLastInsertFailTimestamp(time: number): void;
        markEjectionFinished(): void;
        stateUpdatingResumesAt(): number;
        pauseStateUpdatingUntil(time: number): void;
        addToRewardedPlayers(player: $Player): void;
        getLastInsertFailTimestamp(): number;
        getItemsToEject(): $List<$ItemStack>;
        getRewardedPlayers(): $Set<$UUID>;
        ejectionProgress(): number;
        popNextItemToEject(): $ItemStack;
        getNextItemToEject(): $ItemStack;
        setItemsToEject(itemsToEject: $List_<$ItemStack_>): void;
        hasRewardedPlayer(player: $Player): boolean;
        static CODEC: $Codec<$VaultServerData>;
        isDirty: boolean;
        static TAG_NAME: string;
        constructor(rewardedPlayers: $Set_<$UUID_>, stateUpdatingResumesAt: number, arg2: $List_<$ItemStack_>, itemsToEject: number);
        constructor();
        get rewardedPlayers(): $Set<$UUID>;
        get nextItemToEject(): $ItemStack;
    }
    export class $VaultSharedData {
        set(other: $VaultSharedData): void;
        updateConnectedPlayersWithinRange(level: $ServerLevel, pos: $BlockPos_, serverData: $VaultServerData, config: $VaultConfig_, deactivationRange: number): void;
        connectedParticlesRange(): number;
        hasConnectedPlayers(): boolean;
        getConnectedPlayers(): $Set<$UUID>;
        getDisplayItem(): $ItemStack;
        setDisplayItem(displayItem: $ItemStack_): void;
        hasDisplayItem(): boolean;
        static CODEC: $Codec<$VaultSharedData>;
        isDirty: boolean;
        static TAG_NAME: string;
        constructor(displayItem: $ItemStack_, connectedPlayers: $Set_<$UUID_>, connectedParticlesRange: number);
        constructor();
        get connectedPlayers(): $Set<$UUID>;
    }
    export class $VaultState extends $Enum<$VaultState> implements $StringRepresentable {
        static values(): $VaultState[];
        static valueOf(arg0: string): $VaultState;
        onExit(level: $ServerLevel, pos: $BlockPos_, config: $VaultConfig_, sharedData: $VaultSharedData): void;
        onEnter(level: $ServerLevel, pos: $BlockPos_, config: $VaultConfig_, sharedData: $VaultSharedData, isOminous: boolean): void;
        lightLevel(): number;
        onTransition(level: $ServerLevel, pos: $BlockPos_, state: $VaultState_, config: $VaultConfig_, sharedData: $VaultSharedData, isOminous: boolean): void;
        getSerializedName(): string;
        tickAndGetNext(level: $ServerLevel, pos: $BlockPos_, config: $VaultConfig_, serverData: $VaultServerData, sharedData: $VaultSharedData): $VaultState;
        getRemappedEnumConstantName(): string;
        static ACTIVE: $VaultState;
        static INACTIVE: $VaultState;
        static EJECTING: $VaultState;
        static UNLOCKING: $VaultState;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $VaultState}.
     */
    export type $VaultState_ = "inactive" | "active" | "unlocking" | "ejecting";
}
