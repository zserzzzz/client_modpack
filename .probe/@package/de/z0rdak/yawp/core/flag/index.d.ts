import { $Codec } from "@package/com/mojang/serialization";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $IProtectedRegion } from "@package/de/z0rdak/yawp/core/region";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Enum, $Record, $Comparable } from "@package/java/lang";
import { $List, $Map_, $Map, $Map$Entry, $Set, $Set_ } from "@package/java/util";

declare module "@package/de/z0rdak/yawp/core/flag" {
    export class $FlagType extends $Enum<$FlagType> {
        static values(): $FlagType[];
        static valueOf(arg0: string): $FlagType;
        static of(arg0: string): $FlagType;
        static getFlagTypes(): $Set<string>;
        flagType: string;
        static BOOLEAN_FLAG: $FlagType;
        static get flagTypes(): $Set<string>;
    }
    /**
     * Values that may be interpreted as {@link $FlagType}.
     */
    export type $FlagType_ = "boolean_flag";
    export class $FlagState extends $Enum<$FlagState> {
        static ValidFlagStates(): $List<string>;
        static values(): $FlagState[];
        static valueOf(arg0: string): $FlagState;
        static from(arg0: string): $FlagState;
        static from(arg0: boolean): $FlagState;
        static invert(arg0: $FlagState_): $FlagState;
        static validLoggingStates(arg0: string): boolean;
        static DISABLED: $FlagState;
        static ALLOWED: $FlagState;
        static DENIED: $FlagState;
        static UNDEFINED: $FlagState;
    }
    /**
     * Values that may be interpreted as {@link $FlagState}.
     */
    export type $FlagState_ = "disabled" | "allowed" | "denied" | "undefined";
    export class $RegionFlag extends $Enum<$RegionFlag> {
        static fromString(arg0: string): ($RegionFlag) | undefined;
        static values(): $RegionFlag[];
        static valueOf(arg0: string): $RegionFlag;
        static contains(arg0: string): boolean;
        is(arg0: $FlagTag_): boolean;
        static getFlags(): $Set<$RegionFlag>;
        static getFlags(arg0: $FlagType_): $Set<$RegionFlag>;
        static getFlagsMatchingCategory(arg0: $FlagTag_): $Set<$RegionFlag>;
        static fromId(arg0: string): $RegionFlag;
        static hasCategory(arg0: $RegionFlag_, arg1: $FlagTag_): boolean;
        isBeneficial(): boolean;
        static matchesCategory(arg0: $RegionFlag_, arg1: $Set_<string>): boolean;
        static getFlagNames(): $List<string>;
        static getBoolFlags(): $Set<$RegionFlag>;
        static hasPlayerCategory(arg0: $RegionFlag_): boolean;
        static hasPlayerCategory(arg0: $IFlag): boolean;
        isPlayerFlag(): boolean;
        static ANIMAL_BREEDING: $RegionFlag;
        static SLEEP: $RegionFlag;
        static NO_HUNGER: $RegionFlag;
        static MOB_GRIEFING: $RegionFlag;
        type: $FlagType;
        static LEVEL_FREEZE: $RegionFlag;
        static ANIMAL_TAMING: $RegionFlag;
        static ANIMAL_MOUNTING: $RegionFlag;
        static EXPLOSION_CREEPER_ENTITY: $RegionFlag;
        static NO_PVP: $RegionFlag;
        static SPAWNING_XP: $RegionFlag;
        static FLUID_FLOW: $RegionFlag;
        static USE_ENDERPEARL_TO_REGION: $RegionFlag;
        static MELEE_WANDERING_TRADER: $RegionFlag;
        static DROP_LOOT_ALL: $RegionFlag;
        static INVINCIBLE: $RegionFlag;
        static TRAMPLE_FARMLAND_PLAYER: $RegionFlag;
        static SNOW_FALL: $RegionFlag;
        static USE_PORTAL_MONSTERS: $RegionFlag;
        static DROP_LOOT_PLAYER: $RegionFlag;
        static NO_KNOCKBACK: $RegionFlag;
        static SEND_MESSAGE: $RegionFlag;
        static SPAWNING_ALL: $RegionFlag;
        static SET_SPAWN: $RegionFlag;
        static FALL_DAMAGE_VILLAGERS: $RegionFlag;
        static LEAF_DECAY: $RegionFlag;
        static PLACE_FLUIDS: $RegionFlag;
        static NO_FLIGHT: $RegionFlag;
        static NO_ITEM_DESPAWN: $RegionFlag;
        static ENDERMAN_GRIEFING: $RegionFlag;
        static USE_BONEMEAL: $RegionFlag;
        static SPAWNING_SLIME: $RegionFlag;
        static SPAWNING_TRADER: $RegionFlag;
        static TOOL_SECONDARY_USE: $RegionFlag;
        static ITEM_DROP: $RegionFlag;
        tags: $List<$FlagTag>;
        static FALL_DAMAGE_PLAYERS: $RegionFlag;
        static USE_ENTITIES: $RegionFlag;
        static LAVA_FLOW: $RegionFlag;
        static HOE_TILL: $RegionFlag;
        static FALL_DAMAGE: $RegionFlag;
        static SCOOP_FLUIDS: $RegionFlag;
        static ITEM_PICKUP: $RegionFlag;
        static USE_PORTAL_ITEMS: $RegionFlag;
        static FIRE_BOW: $RegionFlag;
        static ENDER_CHEST_ACCESS: $RegionFlag;
        static USE_PORTAL_PLAYERS: $RegionFlag;
        static USE_ELYTRA: $RegionFlag;
        static FALL_DAMAGE_ANIMALS: $RegionFlag;
        static IGNITE_EXPLOSIVES: $RegionFlag;
        static MELEE_VILLAGERS: $RegionFlag;
        static AXE_STRIP: $RegionFlag;
        static FIRE_TICK: $RegionFlag;
        static TRAMPLE_FARMLAND: $RegionFlag;
        static USE_PORTAL_VILLAGERS: $RegionFlag;
        static KEEP_INV: $RegionFlag;
        static KEEP_XP: $RegionFlag;
        static PLACE_BLOCKS: $RegionFlag;
        static ENDERMAN_TELEPORT_FROM_REGION: $RegionFlag;
        static FALL_DAMAGE_MONSTERS: $RegionFlag;
        static MELEE_MONSTERS: $RegionFlag;
        static XP_FREEZE: $RegionFlag;
        static SPAWN_PORTAL: $RegionFlag;
        static EXPLOSION_BLOCK: $RegionFlag;
        static NO_WALKER_FREEZE: $RegionFlag;
        static MELEE_ANIMALS: $RegionFlag;
        static USE_ITEMS: $RegionFlag;
        static USE_ENDERPEARL_FROM_REGION: $RegionFlag;
        static EXPLOSION_ENTITY: $RegionFlag;
        static DROP_XP: $RegionFlag;
        static ANIMAL_UNMOUNTING: $RegionFlag;
        static XP_PICKUP: $RegionFlag;
        static CONTAINER_ACCESS: $RegionFlag;
        static ENTER_DIM: $RegionFlag;
        static SPAWNING_GOLEM: $RegionFlag;
        static NO_SIGN_EDIT: $RegionFlag;
        static SHULKER_TELEPORT_FROM_REGION: $RegionFlag;
        static WITHER_BLOCK_PROT: $RegionFlag;
        static EXECUTE_COMMAND: $RegionFlag;
        static USE_PORTAL_MINECARTS: $RegionFlag;
        static SHOVEL_PATH: $RegionFlag;
        static SNOW_MELTING: $RegionFlag;
        static USE_PORTAL_ANIMALS: $RegionFlag;
        static BREAK_BLOCKS: $RegionFlag;
        static EXPLOSION_CREEPER_BLOCK: $RegionFlag;
        static SPAWNING_VILLAGER: $RegionFlag;
        static USE_PORTAL: $RegionFlag;
        static ZOMBIE_DOOR_PROT: $RegionFlag;
        static SPAWNING_MONSTER: $RegionFlag;
        static USE_BLOCKS: $RegionFlag;
        static WATER_FLOW: $RegionFlag;
        static MELEE_PLAYERS: $RegionFlag;
        static DRAGON_BLOCK_PROT: $RegionFlag;
        static LIGHTNING_PROT: $RegionFlag;
        static SPAWNING_ANIMAL: $RegionFlag;
        get beneficial(): boolean;
        static get flagNames(): $List<string>;
        static get boolFlags(): $Set<$RegionFlag>;
        get playerFlag(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $RegionFlag}.
     */
    export type $RegionFlag_ = "animal_breeding" | "animal_mounting" | "animal_taming" | "animal_unmounting" | "axe_strip" | "break_blocks" | "container_access" | "dragon_block_prot" | "drop_loot_all" | "drop_loot_player" | "enderman_griefing" | "enderman_teleport_from_region" | "ender_chest_access" | "enter_dim" | "execute_command" | "explosion_block" | "explosion_creeper_block" | "explosion_creeper_entity" | "explosion_entity" | "fall_damage_animals" | "fall_damage_monsters" | "fall_damage_villagers" | "fluid_flow" | "hoe_till" | "ignite_explosives" | "fall_damage" | "fall_damage_players" | "invincible" | "keep_xp" | "keep_inv" | "no_hunger" | "no_knockback" | "item_drop" | "item_pickup" | "lava_flow" | "level_freeze" | "lightning_prot" | "no_walker_freeze" | "leaf_decay" | "fire_tick" | "melee_animals" | "melee_monsters" | "melee_players" | "melee_villagers" | "melee_wandering_trader" | "mob_griefing" | "no_flight" | "no_item_despawn" | "no_pvp" | "fire_bow" | "no_sign_edit" | "place_blocks" | "place_fluids" | "scoop_fluids" | "send_message" | "set_spawn" | "shovel_path" | "shulker_teleport_from_region" | "sleep" | "snow_fall" | "snow_melting" | "spawning_all" | "spawning_animal" | "spawning_golem" | "spawning_monster" | "spawning_slime" | "spawning_trader" | "spawning_villager" | "spawning_xp" | "spawn_portal" | "tool_secondary_use" | "trample_farmland" | "trample_farmland_player" | "use_blocks" | "use_bonemeal" | "use_elytra" | "use_enderpearl_from_region" | "use_enderpearl_to_region" | "use_entities" | "use_items" | "use_portal" | "use_portal_animals" | "use_portal_items" | "use_portal_minecarts" | "use_portal_monsters" | "use_portal_players" | "use_portal_villagers" | "water_flow" | "wither_block_prot" | "drop_xp" | "xp_freeze" | "xp_pickup" | "zombie_door_prot";
    export class $FlagMessage {
        reset(): void;
        msg(): string;
        isDefault(): boolean;
        isMuted(): boolean;
        mute(arg0: boolean): void;
        setMsg(arg0: string): void;
        static CODEC: $Codec<$FlagMessage>;
        static CONFIG_MSG: string;
        static DEFAULT_FLAG_MSG: $FlagMessage;
        constructor(arg0: string, arg1: boolean, arg2: boolean);
        constructor(arg0: string, arg1: boolean);
        constructor(arg0: string);
        get default(): boolean;
        get muted(): boolean;
    }
    export class $IFlag {
    }
    export interface $IFlag extends $Comparable<$IFlag> {
        getName(): string;
        getState(): $FlagState;
        setState(arg0: $FlagState_): void;
        getType(): $FlagType;
        isActive(): boolean;
        getFlagMsg(): $FlagMessage;
        setFlagMsg(arg0: $FlagMessage): void;
        setOverride(arg0: boolean): void;
        doesOverride(): boolean;
        get name(): string;
        get type(): $FlagType;
        get active(): boolean;
        set override(value: boolean);
    }
    export class $RegionFlags implements $IFlagContainer {
        isFlagDefined(arg0: string): boolean;
        flagEntries(): $Set<$Map$Entry<string, $IFlag>>;
        getActiveFlags(): $Map<string, $IFlag>;
        remove(arg0: string): void;
        size(): number;
        get(arg0: string): $IFlag;
        put(arg0: $IFlag): void;
        flags(arg0: $FlagState_): $List<$IFlag>;
        flags(): $List<$IFlag>;
        clear(): void;
        isEmpty(): boolean;
        contains(arg0: string): boolean;
        isSet(arg0: string): boolean;
        flagState(arg0: string): $FlagState;
        getFlagMap(): $Map<string, $IFlag>;
        static CODEC: $Codec<$RegionFlags>;
        constructor(arg0: $Map_<string, $IFlag>);
        constructor();
        get activeFlags(): $Map<string, $IFlag>;
        get empty(): boolean;
        get flagMap(): $Map<string, $IFlag>;
    }
    export class $IFlagContainer {
    }
    export interface $IFlagContainer {
        isFlagDefined(arg0: string): boolean;
        flagEntries(): $Set<$Map$Entry<string, $IFlag>>;
        remove(arg0: string): void;
        size(): number;
        get(arg0: string): $IFlag;
        put(arg0: $IFlag): void;
        flags(): $List<$IFlag>;
        flags(arg0: $FlagState_): $List<$IFlag>;
        clear(): void;
        isEmpty(): boolean;
        contains(arg0: string): boolean;
        isSet(arg0: string): boolean;
        flagState(arg0: string): $FlagState;
        get empty(): boolean;
    }
    export class $FlagTag extends $Record {
        description(): string;
        tagRl(): $ResourceLocation;
        constructor(tagRl: $ResourceLocation_, description: string);
    }
    /**
     * Values that may be interpreted as {@link $FlagTag}.
     */
    export type $FlagTag_ = { tagRl?: $ResourceLocation_, description?: string,  } | [tagRl?: $ResourceLocation_, description?: string, ];
    export class $FlagContext extends $Record {
        static parentOf(arg0: $IProtectedRegion, arg1: $RegionFlag_, arg2: $Player): $FlagContext;
        flag(): $IFlag;
        region(): $IProtectedRegion;
        player(): $Player;
        regionFlag(): $RegionFlag;
        resultingState(): $FlagState;
        inheritContext(arg0: $FlagContext_): $FlagContext;
        constructor(region: $IProtectedRegion, regionFlag: $RegionFlag_, flag: $IFlag, player: $Player);
    }
    /**
     * Values that may be interpreted as {@link $FlagContext}.
     */
    export type $FlagContext_ = { player?: $Player, regionFlag?: $RegionFlag_, region?: $IProtectedRegion, flag?: $IFlag,  } | [player?: $Player, regionFlag?: $RegionFlag_, region?: $IProtectedRegion, flag?: $IFlag, ];
}
