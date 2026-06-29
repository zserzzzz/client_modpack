import { $MinecraftServer } from "@package/net/minecraft/server";
import { $DynamicOps, $Codec } from "@package/com/mojang/serialization";
import { $Recipe, $RecipeHolder, $Ingredient, $Ingredient_, $RecipeSerializer, $RecipeHolder_, $RecipeInput } from "@package/net/minecraft/world/item/crafting";
import { $Tag_, $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $EntityType_, $EquipmentSlot_, $EntityType, $LivingEntity, $Entity } from "@package/net/minecraft/world/entity";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $ParticleOptions_ } from "@package/net/minecraft/core/particles";
import { $KeyMapping, $Minecraft } from "@package/net/minecraft/client";
import { $IoSupplier, $IoSupplier_ } from "@package/net/minecraft/server/packs/resources";
import { $ExplosionProperties_, $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $ItemPredicate_, $ItemPredicate, $ItemBuilder, $ItemStackKey, $ItemStackSet } from "@package/dev/latvian/mods/kubejs/item";
import { $RandomSource } from "@package/net/minecraft/util";
import { $DisplayInfo, $AdvancementNode } from "@package/net/minecraft/advancements";
import { $InteractionHand_, $Container } from "@package/net/minecraft/world";
import { $FakePlayer } from "@package/net/neoforged/neoforge/common/util";
import { $ScheduledEvents$ScheduledEvent, $SlotFilter_, $WrappedJS, $ScheduledEvents, $NotificationToastData_, $ScheduledEvents$Callback_, $WithCodec, $TickDuration_, $AttachedData } from "@package/dev/latvian/mods/kubejs/util";
import { DataComponentTypes } from "@special/types";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $SpecialEquality, $ToStringJS } from "@package/dev/latvian/mods/rhino/util";
import { $DataComponentMap_ } from "@package/net/minecraft/core/component";
import { $RecipeMatchContext } from "@package/dev/latvian/mods/kubejs/recipe/filter";
import { $MenuType, $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $ScriptType, $ScriptTypeHolder } from "@package/dev/latvian/mods/kubejs/script";
import { $SizedIngredient } from "@package/net/neoforged/neoforge/common/crafting";
import { $KubeAnimatedParticle, $KubeSessionData } from "@package/dev/latvian/mods/kubejs/client";
import { $Item_, $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $KubeJSGUI } from "@package/dev/latvian/mods/kubejs/gui";
import { $SpriteSet } from "@package/net/minecraft/client/particle";
import { $MutableComponent, $Component_, $ClickEvent_, $Component } from "@package/net/minecraft/network/chat";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ServerScriptManager } from "@package/dev/latvian/mods/kubejs/server";
import { $Duration_ } from "@package/java/time";
import { $RecipeScriptContext } from "@package/dev/latvian/mods/kubejs/recipe";
import { $SoundType_, $Block, $Block_ } from "@package/net/minecraft/world/level/block";
import { $RelativeURL } from "@package/dev/latvian/mods/kubejs/web";
import { $AABB_, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $JsonElement } from "@package/com/google/gson";
import { $ChestMenuData } from "@package/dev/latvian/mods/kubejs/gui/chest";
import { $AttributeModifier$Operation_, $Attribute } from "@package/net/minecraft/world/entity/ai/attributes";
import { $ItemFrame } from "@package/net/minecraft/world/entity/decoration";
import { $UUID_, $Map, $Set, $UUID, $List, $Map_, $List_ } from "@package/java/util";
import { $EntityArrayList, $PlayerStatsJS, $KubeJSInventoryListener } from "@package/dev/latvian/mods/kubejs/player";
import { $SizedFluidIngredient, $FluidIngredient, $FluidIngredient_ } from "@package/net/neoforged/neoforge/fluids/crafting";
import { $TypeInfo } from "@package/dev/latvian/mods/rhino/type";
import { $Consumer_, $Predicate_, $Function, $Supplier } from "@package/java/util/function";
import { $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $BlockPos_, $Registry, $Holder_, $Holder, $Direction } from "@package/net/minecraft/core";
import { $Enchantment, $ItemEnchantments_, $ItemEnchantments } from "@package/net/minecraft/world/item/enchantment";
import { $ItemMatch, $FluidMatch, $Replaceable, $ReplacementMatchInfo_ } from "@package/dev/latvian/mods/kubejs/recipe/match";
import { $RecipeSchema } from "@package/dev/latvian/mods/kubejs/recipe/schema";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $Iterable, $Iterable_, $Record, $Object, $IllegalStateException } from "@package/java/lang";
import { $RandomTickCallback } from "@package/dev/latvian/mods/kubejs/block/callback";
import { $InputStream } from "@package/java/io";
import { $Explosion, $ItemLike_, $EntityGetter, $GameRules$Value, $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $TagManager, $TagKey, $TagLoader$EntryWithSource_, $TagKey_ } from "@package/net/minecraft/tags";
import { $BlockBuilder } from "@package/dev/latvian/mods/kubejs/block";
import { $Fluid } from "@package/net/minecraft/world/level/material";
import { $Fireworks_ } from "@package/net/minecraft/world/item/component";
import { AbstractClientPlayer, $AbstractClientPlayer, LocalPlayer } from "@package/net/minecraft/client/player";
import { $FluidLike } from "@package/dev/latvian/mods/kubejs/fluid";
import { $KubeColor_ } from "@package/dev/latvian/mods/kubejs/color";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $BufferedImage } from "@package/java/awt/image";
import { $TemporalAmount_ } from "@package/java/time/temporal";
import { $EntityPotionEffectsJS, $KubeRayTraceResult } from "@package/dev/latvian/mods/kubejs/entity";
import { $Stages } from "@package/dev/latvian/mods/kubejs/stages";
import { $Stream } from "@package/java/util/stream";
import { $FoodProperties_ } from "@package/net/minecraft/world/food";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $ResourceKey, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $MutableDataComponentHolderFunctions, $ItemComponentFunctions } from "@package/dev/latvian/mods/kubejs/component";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $DamageSource_ } from "@package/net/minecraft/world/damagesource";
export * as mixin from "@package/dev/latvian/mods/kubejs/core/mixin";

declare module "@package/dev/latvian/mods/kubejs/core" {
    export class $EntityKJS {
    }
    export interface $EntityKJS extends $WithPersistentData, $MessageSenderKJS, $ScriptTypeHolder {
        /**
         * Runs the specified console command with permission level of the entity. The command won't output any logs in chat nor console.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(command: string): void;
        /**
         * Checks if the entity is a `LivingEntity`.
         */
        isLiving(): this is $LivingEntity;
        getLevel(): $Level;
        getType(): string;
        /**
         * Teleports an entity to a dimension of specified ID, to specified coordinates and rotation.
         * 
         * @param x The `x` target coordinate.
         * @param y The `y` target coordinate.
         * @param z The `z` target coordinate.
         * @param yaw The entity's target yaw.
         * @param pitch The entity's target pitch.
         */
        teleportTo(x: number, y: number, z: number, yaw: number, pitch: number): void;
        /**
         * Teleports an entity to a dimension of specified ID, to specified coordinates and rotation.
         * 
         * @param dimension A `ResourceLocation` of the target dimension. It can be a string representing the dimension ID.
         * @param x The `x` target coordinate.
         * @param y The `y` target coordinate.
         * @param z The `z` target coordinate.
         * @param yaw The entity's target yaw.
         * @param pitch The entity's target pitch.
         */
        teleportTo(dimension: $ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): boolean;
        /**
         * Teleports an entity to specified coordinates.
         * 
         * @param x The `x` target coordinate.
         * @param y The `y` target coordinate.
         * @param z The `z` target coordinate.
         */
        teleportTo(x: number, y: number, z: number): void;
        /**
         * Checks if the entity is an item frame entity.
         */
        isFrame(): this is $ItemFrame;
        /**
         * If the entity is a player, gets the player's profile, otherwise returns `null`.
         */
        getProfile(): $GameProfile;
        rayTraceEntity(distance: number, filter: $Predicate_<$Entity>): $Entity;
        /**
         * Gets the name of the team entity is in, or `''` (empty string) if the entity is not part of any team
         */
        getTeamName(): string;
        setPosition(block: $LevelBlock): void;
        setPosition(x: number, y: number, z: number): void;
        /**
         * Measures the distance of entity to the point at specified 3D position vector.
         */
        distanceTo(position: $Vec3_): number;
        /**
         * Measures the distance of entity to the point at specified `x`, `y` and `z`.
         */
        distanceTo(x: number, y: number, z: number): number;
        rayTrace(distance: number, fluids: boolean): $KubeRayTraceResult;
        rayTrace(distance: number): $KubeRayTraceResult;
        /**
         * Checks if the entity is a client-side player.
         */
        isClientPlayer(): this is AbstractClientPlayer;
        getServer(): $MinecraftServer;
        /**
         * Checks if the entity is a server-side player.
         */
        isServerPlayer(): this is $ServerPlayer;
        /**
         * Gets the item stack corresponding to either:
         * - the item contained in the item entity,
         * - the item in the item frame.
         * Will be `null` if the entity is neither an item entity nor an item frame.
         */
        getItem(): $ItemStack;
        /**
         * Checks if the entity is a monster.
         */
        isMonster(): boolean;
        /**
         * Checks if the entity is an animal.
         */
        isAnimal(): boolean;
        getScriptType(): $ScriptType;
        /**
         * Checks if the entity is a player entity.
         */
        isPlayer(): this is $Player;
        /**
         * Gets the entity's custom name, or entity ID if entity has no custom name.
         */
        getUsername(): string;
        setMotionZ(z: number): void;
        /**
         * Gets a list of all passengers of the entity.
         */
        getPassengers(): $EntityArrayList;
        /**
         * Gets the entity's facing direction.
         * If the entity faces more than 45 degrees up or down, the resulting facing direction is respectively `up` or `down`.
         * Otherwise, the resulting facing direction is determined by whichever cardinal direction is closer to entity's yaw.
         */
        getFacing(): $Direction;
        /**
         * @deprecated
         * Replaced by `entity.distanceToBlockSqr(pos)`.
         */
        getDistanceSq(pos: $BlockPos_): number;
        /**
         * @deprecated
         * Replaced by `entity.distanceToSqr(x, y, z)`.
         */
        getDistanceSq(x: number, y: number, z: number): number;
        setMotionX(x: number): void;
        /**
         * @deprecated
         * Replaced by `entity.getTeamName()`
         */
        getTeamId(): string;
        setMotionY(y: number): void;
        getMotionY(): number;
        mergeNbt(tag: $CompoundTag_): $Entity;
        getMotionX(): number;
        getMotionZ(): number;
        setRotation(yaw: number, pitch: number): void;
        /**
         * @deprecated
         * Replaced by `entity.distanceTo(x, y, z)`.
         */
        getDistance(x: number, y: number, z: number): number;
        /**
         * Teleports an entity to a specified `ServerLevel`, to specified coordinates and rotation.
         * 
         * @param level A `ServerLevel` to teleport the entity to.
         * @param x The `x` target coordinate.
         * @param y The `y` target coordinate.
         * @param z The `z` target coordinate.
         * @param yaw The entity's target yaw.
         * @param pitch The entity's target pitch.
         */
        teleportToLevel(level: $ServerLevel, x: number, y: number, z: number, yaw: number, pitch: number): boolean;
        /**
         * Checks if the entity is an ambient creature.
         */
        isAmbientCreature(): boolean;
        /**
         * Measures the **square** of a distance of entity to the block at specified `BlockPos`.
         */
        distanceToBlockSqr(pos: $BlockPos_): number;
        /**
         * Checks if the entity is a peaceful creature (not a monster).
         */
        isPeacefulCreature(): boolean;
        /**
         * Checks if the entity is a water creature.
         */
        isWaterCreature(): boolean;
        setPositionAndRotation(x: number, y: number, z: number, yaw: number, pitch: number): void;
        /**
         * Checks, whether the entity is part of a team called `teamName`.
         * 
         * @param teamName The name of the team to check.
         */
        isOnScoreboardTeam(teamName: string): boolean;
        /**
         * Checks, whether the entity is part of any team.
         */
        isOnScoreboardTeam(): boolean;
        /**
         * Measures the distance of entity to block at specified `BlockPos`.
         */
        distanceToBlock(pos: $BlockPos_): number;
        /**
         * Gets a block at the position of the entity.
         */
        getBlock(): $LevelBlock;
        /**
         * Runs the specified console command with permission level of the entity.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(command: string): void;
        getDisplayName(): $Component;
        getName(): $Component;
        setZ(z: number): void;
        /**
         * @deprecated
         * Replaced by `entity.damage(hp, damageSource)`
         */
        attack(source: $DamageSource_, hp: number): boolean;
        /**
         * @deprecated
         * Replaced by `entity.damage(hp)`
         */
        attack(hp: number): boolean;
        /**
         * Checks if the entity is an item entity.
         */
        isItem(): this is $ItemEntity;
        setNbt(nbt: $CompoundTag_): void;
        setY(y: number): void;
        /**
         * Checks, whether the entity is a reference to yourself - that is - the client player you are controlling.
         */
        isSelf(): this is LocalPlayer;
        getNbt(): $CompoundTag;
        setX(x: number): void;
        spawn(): void;
        /**
         * Damages an entity by a given amount of HP dealing generic damage.
         * 
         * @param hp The amount of damage to deal.
         */
        damage(hp: number): boolean;
        /**
         * Damages an entity by a given amount of HP dealing a specific type of damage.
         * 
         * @param hp The amount of damage to deal.
         * @param source The damage source. It may be a string specifying a damage source, like `'minecraft:cramming'`.
         */
        damage(hp: number, source: $DamageSource_): boolean;
        /**
         * Sends a message in chat to the entity.
         * 
         * @param message A text component. It may be a string, which will be implicitly wrapped into a text component.
         */
        tell(message: $Component_): void;
        get living(): boolean;
        get level(): $Level;
        get type(): string;
        get frame(): boolean;
        get profile(): $GameProfile;
        get teamName(): string;
        get clientPlayer(): boolean;
        get server(): $MinecraftServer;
        get serverPlayer(): boolean;
        get monster(): boolean;
        get animal(): boolean;
        get scriptType(): $ScriptType;
        get player(): boolean;
        get username(): string;
        get passengers(): $EntityArrayList;
        get facing(): $Direction;
        get teamId(): string;
        get ambientCreature(): boolean;
        get peacefulCreature(): boolean;
        get waterCreature(): boolean;
        get block(): $LevelBlock;
        get displayName(): $Component;
        get name(): $Component;
        set z(value: number);
        set y(value: number);
        get self(): boolean;
        set x(value: number);
    }
    export class $IngredientSupplierKJS {
    }
    export interface $IngredientSupplierKJS {
        kjs$asIngredient(): $Ingredient;
    }
    export class $FluidStackKJS {
        get<T extends keyof DataComponentTypes.OutputMap>(type: T): DataComponentTypes.OutputMap[T] | null;
        getOrDefault<T extends keyof DataComponentTypes.OutputMap>(type: T, _default: DataComponentTypes.OutputMap[T]): DataComponentTypes.OutputMap[T];
        set(components: $DataComponentMap_): this;
        set<T extends keyof DataComponentTypes.InputMap>(type: T, data: DataComponentTypes.InputMap[T]): this;
    }
    export interface $FluidStackKJS extends $Replaceable, $SpecialEquality, $WithCodec, $FluidLike, $FluidMatch, $MutableDataComponentHolderFunctions, $RegistryObjectKJS<$Fluid> {
        getCodec(): $Codec<never>;
        matches(cx: $RecipeMatchContext, s: $FluidStack_, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, ingredient: $FluidIngredient_, exact: boolean): boolean;
        kjs$getFluid(): $Fluid;
        kjs$getAmount(): number;
        kjs$asHolder(): $Holder<$Fluid>;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
        kjs$getRegistry(): $Registry<$Fluid>;
        kjs$getRegistryId(): $ResourceKey<$Registry<$Fluid>>;
        kjs$getIdLocation(): $ResourceLocation;
        kjs$getId(): string;
        kjs$getMod(): string;
        kjs$copy(amount: number): $FluidLike;
        specialEquals(o: $Object, shallow: boolean): boolean;
        kjs$isEmpty(): boolean;
        kjs$getWebIconURL(ops: $DynamicOps<$Tag_>, size: number): $RelativeURL;
        kjs$equalsIgnoringCount(stack: $FluidStack_): boolean;
        kjs$self(): $FluidStack;
        kjs$getKey(): $ResourceKey<$Fluid>;
        get<T extends keyof DataComponentTypes.OutputMap>(type: T): DataComponentTypes.OutputMap[T] | null;
        getOrDefault<T extends keyof DataComponentTypes.OutputMap>(type: T, _default: DataComponentTypes.OutputMap[T]): DataComponentTypes.OutputMap[T];
        set(components: $DataComponentMap_): this;
        set<T extends keyof DataComponentTypes.InputMap>(type: T, data: DataComponentTypes.InputMap[T]): this;
        get codec(): $Codec<never>;
    }
    export class $EntityGetterKJS {
    }
    export interface $EntityGetterKJS extends $EntityCollectionKJS {
        getEntitiesWithin(aabb: $AABB_): $EntityArrayList;
        getMcPlayers(): $List<$Player>;
        getMcEntities(): $Iterable<$Entity>;
        getPlayers(): $EntityArrayList;
        self(): $EntityGetter;
        get mcPlayers(): $List<$Player>;
        get mcEntities(): $Iterable<$Entity>;
        get players(): $EntityArrayList;
    }
    export class $SizedIngredientKJS {
    }
    export interface $SizedIngredientKJS extends $Replaceable, $IngredientSupplierKJS, $ItemMatch {
        matches(cx: $RecipeMatchContext, arg1: $Ingredient_, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, item: $ItemStack_, exact: boolean): boolean;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
        kjs$asIngredient(): $Ingredient;
        kjs$self(): $SizedIngredient;
        kjs$toFlatJson(): $JsonElement;
        kjs$toNestedJson(): $JsonElement;
    }
    export class $RegistryObjectKJS<T> {
    }
    export interface $RegistryObjectKJS<T> extends $SpecialEquality {
        asHolder(): $Holder<T>;
        getTags(): $List<$ResourceLocation>;
        getRegistry(): $Registry<T>;
        getRegistryId(): $ResourceKey<$Registry<T>>;
        getIdLocation(): $ResourceLocation;
        getTagKeys(): $List<$TagKey<T>>;
        getId(): string;
        hasTag(tag: $ResourceLocation_): boolean;
        getMod(): string;
        specialEquals(o: $Object, shallow: boolean): boolean;
        getKey(): $ResourceKey<T>;
        get tags(): $List<$ResourceLocation>;
        get registry(): $Registry<T>;
        get registryId(): $ResourceKey<$Registry<T>>;
        get idLocation(): $ResourceLocation;
        get tagKeys(): $List<$TagKey<T>>;
        get id(): string;
        get mod(): string;
        get key(): $ResourceKey<T>;
    }
    export class $DiggerItemKJS {
    }
    export interface $DiggerItemKJS {
        kjs$getMineableTag(): $TagKey<$Block>;
    }
    /**
     * Values that may be interpreted as {@link $DiggerItemKJS}.
     */
    export type $DiggerItemKJS_ = (() => $TagKey_<$Block>);
    export class $EntityCollectionKJS {
    }
    export interface $EntityCollectionKJS {
        getEntitiesWithin(aabb: $AABB_): $EntityArrayList;
        getEntityByUUID(id: $UUID_): $Entity;
        getEntityByNetworkID(id: number): $Entity;
        getMcPlayers(): $List<$Player>;
        getMcEntities(): $Iterable<$Entity>;
        getEntities(): $EntityArrayList;
        getPlayers(): $EntityArrayList;
        get mcPlayers(): $List<$Player>;
        get mcEntities(): $Iterable<$Entity>;
        get entities(): $EntityArrayList;
        get players(): $EntityArrayList;
    }
    /**
     * Values that may be interpreted as {@link $EntityCollectionKJS}.
     */
    export type $EntityCollectionKJS_ = (() => $Iterable_<$Entity>);
    export class $CreativeModeTabKJS {
    }
    export interface $CreativeModeTabKJS {
        kjs$setIcon(icon: $ItemStack_): void;
        kjs$setDisplayName(component: $Component_): void;
    }
    export class $WithPersistentData {
    }
    export interface $WithPersistentData extends $MessageSenderKJS {
        getPersistentData(): $CompoundTag;
        get persistentData(): $CompoundTag;
    }
    export class $TagLoaderKJS<T> {
    }
    export interface $TagLoaderKJS<T> {
        kjs$getRegistry(): $Registry<T>;
        kjs$getResources(): $ReloadableServerResourcesKJS;
        kjs$init(resources: $ReloadableServerResourcesKJS, registry: $Registry<T>): void;
        kjs$customTags(kjs$resources: $ReloadableServerResourcesKJS, map: $Map_<$ResourceLocation_, $List_<$TagLoader$EntryWithSource_>>): void;
    }
    export class $ItemFrameEntityKJS {
    }
    export interface $ItemFrameEntityKJS extends $EntityKJS {
        /**
         * Checks if the entity is an item frame entity.
         */
        isFrame(): this is $ItemFrame;
        /**
         * Gets the item stack corresponding to the item in the item frame.
         * Will be `null` if the contained stack is empty.
         */
        getItem(): $ItemStack;
        get frame(): boolean;
        get item(): $ItemStack;
    }
    export class $BlockProviderKJS {
    }
    export interface $BlockProviderKJS extends $RegistryObjectKJS<$Block> {
        asHolder(): $Holder<$Block>;
        getRegistry(): $Registry<$Block>;
        getRegistryId(): $ResourceKey<$Registry<$Block>>;
        getTypeData(): $Map<string, $Object>;
        getBlock(): $Block;
        getId(): string;
        getKey(): $ResourceKey<$Block>;
        get registry(): $Registry<$Block>;
        get registryId(): $ResourceKey<$Registry<$Block>>;
        get typeData(): $Map<string, $Object>;
        get block(): $Block;
        get id(): string;
        get key(): $ResourceKey<$Block>;
    }
    /**
     * Values that may be interpreted as {@link $BlockProviderKJS}.
     */
    export type $BlockProviderKJS_ = (() => $Block_);
    export class $LivingEntityKJS {
        static KJS_PLAYER_CUSTOM_SPEED: $ResourceLocation;
    }
    export interface $LivingEntityKJS extends $EntityKJS {
        setEquipment(slot: $EquipmentSlot_, item: $ItemStack_): void;
        isLiving(): this is $LivingEntity;
        setHeldItem(hand: $InteractionHand_, item: $ItemStack_): void;
        damageHeldItem(): void;
        damageHeldItem(hand: $InteractionHand_, amount: number): void;
        damageHeldItem(hand: $InteractionHand_, amount: number, onBroken: $Consumer_<$ItemStack>): void;
        isUndead(): boolean;
        setOffHandItem(item: $ItemStack_): void;
        getOffHandItem(): $ItemStack;
        rayTraceEntity(filter: $Predicate_<$Entity>): $Entity;
        getHeldItem(hand: $InteractionHand_): $ItemStack;
        rayTrace(): $KubeRayTraceResult;
        foodEaten(eatenStack: $ItemStack_, food: $FoodProperties_): void;
        /**
         * Sets the entity's maximum health to specified HP.
         * 
         * @param hp The new maximum health of the entity.
         */
        setMaxHealth(hp: number): void;
        getEquipment(slot: $EquipmentSlot_): $ItemStack;
        canEntityBeSeen(entity: $LivingEntity): boolean;
        getFeetArmorItem(): $ItemStack;
        getMainHandItem(): $ItemStack;
        getReachDistance(): number;
        removeAttribute(attribute: $Holder_<$Attribute>, id: $ResourceLocation_): void;
        setFeetArmorItem(item: $ItemStack_): void;
        getLegsArmorItem(): $ItemStack;
        getPotionEffects(): $EntityPotionEffectsJS;
        setMainHandItem(item: $ItemStack_): void;
        getTotalMovementSpeed(): number;
        getAttributeBaseValue(attribute: $Holder_<$Attribute>): number;
        setLegsArmorItem(item: $ItemStack_): void;
        getHeadArmorItem(): $ItemStack;
        setAttributeBaseValue(attribute: $Holder_<$Attribute>, value: number): void;
        getChestArmorItem(): $ItemStack;
        modifyAttribute(attribute: $Holder_<$Attribute>, id: $ResourceLocation_, amount: number, operation: $AttributeModifier$Operation_): void;
        getAttributeTotalValue(attribute: $Holder_<$Attribute>): number;
        setChestArmorItem(item: $ItemStack_): void;
        isHoldingInAnyHand(itemPredicate: $ItemPredicate_): boolean;
        setHeadArmorItem(item: $ItemStack_): void;
        setTotalMovementSpeedMultiplier(speed: number): void;
        setDefaultMovementSpeedMultiplier(speed: number): void;
        swing(hand: $InteractionHand_): void;
        swing(): void;
        damageEquipment(slot: $EquipmentSlot_): void;
        damageEquipment(slot: $EquipmentSlot_, amount: number): void;
        damageEquipment(slot: $EquipmentSlot_, amount: number, onBroken: $Consumer_<$ItemStack>): void;
        getDefaultMovementSpeed(): number;
        setDefaultMovementSpeed(speed: number): void;
        setMovementSpeedAddition(speed: number): void;
        get living(): boolean;
        get undead(): boolean;
        set maxHealth(value: number);
        get reachDistance(): number;
        get potionEffects(): $EntityPotionEffectsJS;
        get totalMovementSpeed(): number;
        set totalMovementSpeedMultiplier(value: number);
        set defaultMovementSpeedMultiplier(value: number);
        set movementSpeedAddition(value: number);
    }
    export class $ServerLevelKJS {
    }
    export interface $ServerLevelKJS extends $LevelKJS, $WithPersistentData {
        spawnParticles(options: $ParticleOptions_, overrideLimiter: boolean, x: number, y: number, z: number, vx: number, vy: number, vz: number, count: number, speed: number): void;
        self(): $EntityGetter;
    }
    /**
     * Values that may be interpreted as {@link $ServerLevelKJS}.
     */
    export type $ServerLevelKJS_ = (() => void);
    export class $ClientPacketListenerKJS {
    }
    export interface $ClientPacketListenerKJS {
        kjs$sessionData(): $KubeSessionData;
    }
    export class $TagManagerKJS {
    }
    export interface $TagManagerKJS extends $ReloadableServerResourceHolderKJS {
    }
    export class $MinecraftServerKJS {
    }
    export interface $MinecraftServerKJS extends $WithAttachedData<$MinecraftServer>, $WithPersistentData, $DataSenderKJS, $MinecraftEnvironmentKJS, $EntityCollectionKJS {
        setActivePostShader(id: $ResourceLocation_): void;
        /**
         * Runs the specified console command. The command won't output any logs in chat nor console.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(command: string): void;
        setStatusMessage(message: $Component_): void;
        getPlayer(selector: $PlayerSelector_): $ServerPlayer;
        getLevel(dimension: $ResourceLocation_): $ServerLevel;
        sendData(channel: string, data: $CompoundTag_): void;
        getEntityByUUID(id: $UUID_): $Entity;
        getEntityByNetworkID(id: number): $Entity;
        restoreInventories(): $Map<$UUID, $Map<number, $ItemStack>>;
        getMcPlayers(): $List<$Player>;
        getMcEntities(): $Iterable<$Entity>;
        getPlayers(): $EntityArrayList;
        /**
         * Runs the specified console command.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(command: string): void;
        getName(): $Component;
        getOverworld(): $ServerLevel;
        self(): $MinecraftServer;
        tell(message: $Component_): void;
        getAdvancement(id: $ResourceLocation_): $AdvancementNode;
        set activePostShader(value: $ResourceLocation_);
        set statusMessage(value: $Component_);
        get mcPlayers(): $List<$Player>;
        get mcEntities(): $Iterable<$Entity>;
        get players(): $EntityArrayList;
        get name(): $Component;
        get overworld(): $ServerLevel;
    }
    export class $MenuTypeKJS {
    }
    export interface $MenuTypeKJS extends $RegistryObjectKJS<$MenuType<never>> {
        kjs$getRegistry(): $Registry<$MenuType<never>>;
        kjs$getRegistryId(): $ResourceKey<$Registry<$MenuType<never>>>;
    }
    export class $DataSenderKJS {
    }
    export interface $DataSenderKJS {
        sendData(channel: string, data: $CompoundTag_): void;
        sendData(channel: string): void;
    }
    export class $RecipeLikeKJS {
    }
    export interface $RecipeLikeKJS {
        getType(): $ResourceLocation;
        getMod(): string;
        getTypeKey(): $ResourceKey<$RecipeSerializer<never>>;
        getSerializer(): $RecipeSerializer<never>;
        getGroup(): string;
        setGroup(group: string): void;
        getOrCreateId(): $ResourceLocation;
        hasInput(cx: $RecipeMatchContext, match: $ReplacementMatchInfo_): boolean;
        hasOutput(cx: $RecipeMatchContext, match: $ReplacementMatchInfo_): boolean;
        replaceInput(cx: $RecipeScriptContext, match: $ReplacementMatchInfo_, arg2: $Object): boolean;
        replaceOutput(cx: $RecipeScriptContext, match: $ReplacementMatchInfo_, arg2: $Object): boolean;
        getSchema(): $RecipeSchema;
        get type(): $ResourceLocation;
        get mod(): string;
        get typeKey(): $ResourceKey<$RecipeSerializer<never>>;
        get serializer(): $RecipeSerializer<never>;
        get orCreateId(): $ResourceLocation;
        get schema(): $RecipeSchema;
    }
    export class $LevelKJS {
    }
    export interface $LevelKJS extends $WithAttachedData<$Level>, $ScriptTypeHolder, $EntityGetterKJS {
        setActivePostShader(id: $ResourceLocation_): void;
        /**
         * Each player in the level (world) runs the specified console command with their permission level. The command won't output any logs in chat nor console
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(command: string): void;
        setStatusMessage(message: $Component_): void;
        getSide(): $ScriptType;
        explode(x: number, y: number, z: number, properties: $ExplosionProperties_): $Explosion;
        createEntity(type: $EntityType_<never>): $Entity;
        spawnEntity(type: $EntityType_<never>, callback: $Consumer_<$Entity>): void;
        setTime(time: number): void;
        spawnFireworks(x: number, y: number, z: number, fireworks: $Fireworks_, lifetime: number): void;
        spawnParticles(options: $ParticleOptions_, overrideLimiter: boolean, x: number, y: number, z: number, vx: number, vy: number, vz: number, count: number, speed: number): void;
        spawnLightning(x: number, y: number, z: number, visualOnly: boolean): void;
        spawnLightning(x: number, y: number, z: number, visualOnly: boolean, cause: $ServerPlayer): void;
        isOverworld(): boolean;
        getDimension(): $ResourceLocation;
        getBlock(x: number, y: number, z: number): $LevelBlock;
        getBlock(pos: $BlockPos_): $LevelBlock;
        getBlock(entity: $BlockEntity): $LevelBlock;
        /**
         * Each player in the level (world) runs the specified console command with their permission level.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(command: string): void;
        getName(): $Component;
        self(): $EntityGetter;
        tell(message: $Component_): void;
        set activePostShader(value: $ResourceLocation_);
        set statusMessage(value: $Component_);
        get side(): $ScriptType;
        set time(value: number);
        get overworld(): boolean;
        get dimension(): $ResourceLocation;
        get name(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $LevelKJS}.
     */
    export type $LevelKJS_ = (() => void);
    export class $FluidIngredientKJS {
    }
    export interface $FluidIngredientKJS extends $WithCodec, $FluidMatch {
        getCodec(): $Codec<never>;
        matches(cx: $RecipeMatchContext, arg1: $FluidIngredient_, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, s: $FluidStack_, exact: boolean): boolean;
        self(): $FluidIngredient;
        withAmount(amount: number): $SizedFluidIngredient;
        get codec(): $Codec<never>;
    }
    export class $WindowKJS$KJSScaledIconProvider extends $Record implements $Supplier<number[]> {
        target(): number;
        original(): $BufferedImage;
        get(): number[];
        constructor(original: $BufferedImage, target: number);
    }
    /**
     * Values that may be interpreted as {@link $WindowKJS$KJSScaledIconProvider}.
     */
    export type $WindowKJS$KJSScaledIconProvider_ = { original?: $BufferedImage, target?: number,  } | [original?: $BufferedImage, target?: number, ];
    export class $PlayerSelector {
        static name(name: string): $PlayerSelector;
        static wrap(o: $Object): $PlayerSelector;
        static identity(player: $ServerPlayer): $PlayerSelector;
        static uuid(uuid: $UUID_): $PlayerSelector;
        static fuzzyName(name: string): $PlayerSelector;
        static TYPE_INFO: $TypeInfo;
    }
    export interface $PlayerSelector {
        or(fallback: $PlayerSelector_): $PlayerSelector;
        getPlayer(server: $MinecraftServer): $ServerPlayer;
    }
    /**
     * Values that may be interpreted as {@link $PlayerSelector}.
     */
    export type $PlayerSelector_ = ((server: $MinecraftServer) => $ServerPlayer);
    export class $LocalClientPlayerKJS {
    }
    export interface $LocalClientPlayerKJS extends $ClientPlayerKJS {
        setActivePostShader(id: $ResourceLocation_): void;
        /**
         * Runs the specified console command client-side with the player's permission level. The command won't output any logs in chat nor console.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(command: string): void;
        getStats(): $PlayerStatsJS;
        /**
         * Checks, whether the player is currently mining a block.
         */
        isMiningBlock(): boolean;
        sendData(channel: string, data: $CompoundTag_): void;
        /**
         * Runs the specified console command client-side with the player's permission level.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(command: string): void;
        notify(notification: $NotificationToastData_): void;
        /**
         * Checks, whether the entity is a reference to yourself - that is - the client player you are controlling.
         */
        isSelf(): this is LocalPlayer;
        getMinecraft(): $Minecraft;
        set activePostShader(value: $ResourceLocation_);
        get stats(): $PlayerStatsJS;
        get miningBlock(): boolean;
        get self(): boolean;
        get minecraft(): $Minecraft;
    }
    /**
     * Values that may be interpreted as {@link $LocalClientPlayerKJS}.
     */
    export type $LocalClientPlayerKJS_ = (() => void);
    export class $WithAttachedData<T> {
    }
    export interface $WithAttachedData<T> extends $MessageSenderKJS {
        getData(): $AttachedData<T>;
        get data(): $AttachedData<T>;
    }
    /**
     * Values that may be interpreted as {@link $WithAttachedData}.
     */
    export type $WithAttachedData_<T> = (() => $AttachedData<T>);
    export class $LazyComponentKJS {
    }
    export interface $LazyComponentKJS extends $Supplier<$Component> {
        get(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $LazyComponentKJS}.
     */
    export type $LazyComponentKJS_ = (() => $Component_);
    export class $CustomIngredientKJS {
    }
    export interface $CustomIngredientKJS extends $ItemPredicate {
        kjs$canBeUsedForMatching(): boolean;
        kjs$getDisplayStacks(): $ItemStackSet;
        kjs$asIngredient(): $Ingredient;
        getItems(): $Stream<$ItemStack>;
        kjs$getStackArray(): $ItemStack[];
        get items(): $Stream<$ItemStack>;
    }
    /**
     * Values that may be interpreted as {@link $CustomIngredientKJS}.
     */
    export type $CustomIngredientKJS_ = (() => void);
    export class $FluidKJS {
    }
    export interface $FluidKJS extends $RegistryObjectKJS<$Fluid>, $FluidLike {
        getFluid(): $Fluid;
        getAmount(): number;
        getRegistry(): $Registry<$Fluid>;
        getRegistryId(): $ResourceKey<$Registry<$Fluid>>;
        isEmpty(): boolean;
        get fluid(): $Fluid;
        get amount(): number;
        get registry(): $Registry<$Fluid>;
        get registryId(): $ResourceKey<$Registry<$Fluid>>;
        get empty(): boolean;
    }
    export class $GameRulesKJS {
    }
    export interface $GameRulesKJS {
        kjs$get(rule: string): $GameRules$Value<never>;
        kjs$set(rule: string, value: string): void;
        kjs$getString(rule: string): string;
        kjs$getBoolean(rule: string): boolean;
        kjs$getInt(rule: string): number;
    }
    export class $PlayerKJS {
    }
    export interface $PlayerKJS extends $LivingEntityKJS, $DataSenderKJS, $WithAttachedData<$Player> {
        setStatusMessage(message: $Component_): void;
        getMouseItem(): $ItemStack;
        setXpLevel(levels: number): void;
        setMouseItem(item: $ItemStack_): void;
        getSaturation(): number;
        getStats(): $PlayerStatsJS;
        /**
         * Gets the player's profile.
         */
        getProfile(): $GameProfile;
        getFoodLevel(): number;
        addXPLevels(levels: number): void;
        addFood(hunger: number, saturation: number): void;
        giveInHand(item: $ItemStack_): void;
        setFoodLevel(foodLevel: number): void;
        setSaturation(saturation: number): void;
        /**
         * Checks if the entity is a player entity.
         */
        isPlayer(): this is $Player;
        getXpLevel(): number;
        /**
         * Gets the player's username.
         */
        getUsername(): string;
        addExhaustion(exhaustion: number): void;
        isMiningBlock(): boolean;
        getInventory(): $InventoryKJS;
        getStages(): $Stages;
        notify(builder: $NotificationToastData_): void;
        notify(title: $Component_, text: $Component_): void;
        /**
         * Checks if the player is fake.
         */
        isFake(): this is $FakePlayer;
        setXp(xp: number): void;
        getXp(): number;
        addXP(xp: number): void;
        spawn(): void;
        give(item: $ItemStack_): void;
        getCraftingGrid(): $InventoryKJS;
        getSelectedSlot(): number;
        setSelectedSlot(index: number): void;
        boostElytraFlight(): void;
        sendInventoryUpdate(): void;
        getOpenInventory(): $AbstractContainerMenu;
        addItemCooldown(item: $Item_, ticks: number): void;
        getInventoryChangeListener(): $KubeJSInventoryListener;
        set statusMessage(value: $Component_);
        get stats(): $PlayerStatsJS;
        get profile(): $GameProfile;
        get player(): boolean;
        get username(): string;
        get miningBlock(): boolean;
        get inventory(): $InventoryKJS;
        get stages(): $Stages;
        get fake(): boolean;
        get craftingGrid(): $InventoryKJS;
        get openInventory(): $AbstractContainerMenu;
        get inventoryChangeListener(): $KubeJSInventoryListener;
    }
    /**
     * Values that may be interpreted as {@link $PlayerKJS}.
     */
    export type $PlayerKJS_ = (() => void);
    export class $FireworkRocketEntityKJS {
    }
    export interface $FireworkRocketEntityKJS {
        setLifetimeKJS(lifetime: number): void;
        set lifetimeKJS(value: number);
    }
    /**
     * Values that may be interpreted as {@link $FireworkRocketEntityKJS}.
     */
    export type $FireworkRocketEntityKJS_ = ((lifetime: number) => void);
    export class $SizedFluidIngredientKJS {
    }
    export interface $SizedFluidIngredientKJS extends $Replaceable, $FluidMatch {
        matches(cx: $RecipeMatchContext, s: $FluidStack_, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, arg1: $FluidIngredient_, exact: boolean): boolean;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
        self(): $SizedFluidIngredient;
        toFlatJson(): $JsonElement;
        toNestedJson(): $JsonElement;
    }
    export class $RecipeHolderKJS {
    }
    export interface $RecipeHolderKJS extends $RecipeLikeKJS {
        self(): $RecipeHolder<never>;
        getTypeKey(): $ResourceKey<$RecipeSerializer<never>>;
        getSerializer(): $RecipeSerializer<never>;
        getRecipe(): $Recipe<never>;
        getGroup(): string;
        setGroup(group: string): void;
        getOrCreateId(): $ResourceLocation;
        hasInput(cx: $RecipeMatchContext, match: $ReplacementMatchInfo_): boolean;
        hasOutput(cx: $RecipeMatchContext, match: $ReplacementMatchInfo_): boolean;
        replaceInput(cx: $RecipeScriptContext, match: $ReplacementMatchInfo_, arg2: $Object): boolean;
        replaceOutput(cx: $RecipeScriptContext, match: $ReplacementMatchInfo_, arg2: $Object): boolean;
        getSchema(): $RecipeSchema;
        get typeKey(): $ResourceKey<$RecipeSerializer<never>>;
        get serializer(): $RecipeSerializer<never>;
        get recipe(): $Recipe<never>;
        get orCreateId(): $ResourceLocation;
        get schema(): $RecipeSchema;
    }
    export class $ReloadableServerResourcesKJS {
    }
    export interface $ReloadableServerResourcesKJS {
        kjs$getServerScriptManager(): $ServerScriptManager;
        kjs$getTagManager(): $TagManager;
    }
    export class $MessageSenderKJS {
    }
    export interface $MessageSenderKJS {
        setActivePostShader(id: $ResourceLocation_): void;
        /**
         * Runs the specified console command. The command won't output any logs in chat nor console.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(command: string): void;
        setStatusMessage(message: $Component_): void;
        /**
         * Runs the specified console command.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(command: string): void;
        getDisplayName(): $Component;
        getName(): $Component;
        /**
         * Sends a message in chat to something.
         * 
         * @param message A text component. It may be a string, which will be implicitly wrapped into a text component.
         */
        tell(message: $Component_): void;
        set activePostShader(value: $ResourceLocation_);
        set statusMessage(value: $Component_);
        get displayName(): $Component;
        get name(): $Component;
    }
    export class $AdvancementNodeKJS {
    }
    export interface $AdvancementNodeKJS {
        getTitle(): $Component;
        getId(): $ResourceLocation;
        self(): $AdvancementNode;
        getParent(): $AdvancementNode;
        getChildren(): $Set<$AdvancementNode>;
        getDisplay(): $DisplayInfo;
        addChild(a: $AdvancementNode): void;
        hasDisplay(): boolean;
        getDisplayText(): $Component;
        getDescription(): $Component;
        get title(): $Component;
        get id(): $ResourceLocation;
        get parent(): $AdvancementNode;
        get children(): $Set<$AdvancementNode>;
        get display(): $DisplayInfo;
        get displayText(): $Component;
        get description(): $Component;
    }
    export class $BlockBuilderProvider {
    }
    export interface $BlockBuilderProvider {
        getBlockBuilder(): $BlockBuilder;
        get blockBuilder(): $BlockBuilder;
    }
    export class $RecipeInputKJS {
    }
    export interface $RecipeInputKJS {
        find(filter: $SlotFilter_): $ItemStack;
        find(filter: $SlotFilter_, skip: number): $ItemStack;
        findAll(): $List<$ItemStack>;
        findAll(filter: $SlotFilter_): $List<$ItemStack>;
        self(): $RecipeInput;
    }
    export class $InventoryKJS {
    }
    export interface $InventoryKJS {
        setChanged(): void;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        asContainer(): $Container;
        countNonEmpty(match: $ItemPredicate_): number;
        countNonEmpty(): number;
        getStackInSlot(slot: number): $ItemStack;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        isMutable(): boolean;
        getSlotLimit(slot: number): number;
        getHeight(): number;
        getAllItems(): $List<$ItemStack>;
        clear(match: $ItemPredicate_): void;
        clear(): void;
        find(match: $ItemPredicate_): number;
        find(): number;
        count(): number;
        count(match: $ItemPredicate_): number;
        getBlock(level: $Level_): $LevelBlock;
        isEmpty(): boolean;
        getWidth(): number;
        getSlots(): number;
        get mutable(): boolean;
        get height(): number;
        get allItems(): $List<$ItemStack>;
        get empty(): boolean;
        get width(): number;
        get slots(): number;
    }
    export class $BlockKJS {
    }
    export interface $BlockKJS extends $BlockBuilderProvider, $BlockBehaviourKJS, $Replaceable {
        setBlockBuilder(b: $BlockBuilder): void;
        getBlockStates(): $List<$BlockState>;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
        getBlock(): $Block;
        setNameKey(key: string): void;
        setLightEmission(v: number): void;
        setDestroySpeed(v: number): void;
        setRequiresTool(v: boolean): void;
        set blockBuilder(value: $BlockBuilder);
        get blockStates(): $List<$BlockState>;
        get block(): $Block;
        set nameKey(value: string);
        set lightEmission(value: number);
        set destroySpeed(value: number);
        set requiresTool(value: boolean);
    }
    export class $EntityTypeKJS {
    }
    export interface $EntityTypeKJS extends $RegistryObjectKJS<$EntityType<never>> {
        kjs$getRegistry(): $Registry<$EntityType<never>>;
        kjs$getRegistryId(): $ResourceKey<$Registry<$EntityType<never>>>;
    }
    export class $ServerPlayerKJS {
    }
    export interface $ServerPlayerKJS extends $PlayerKJS {
        setActivePostShader(id: $ResourceLocation_): void;
        setMouseItem(item: $ItemStack_): void;
        getStats(): $PlayerStatsJS;
        /**
         * Checks if the entity is a server-side player.
         */
        isServerPlayer(): this is $ServerPlayer;
        /**
         * Checks, whether the player is currently mining a block.
         */
        isMiningBlock(): boolean;
        sendData(channel: string, data: $CompoundTag_): void;
        setPositionAndRotation(x: number, y: number, z: number, yaw: number, pitch: number): void;
        getSpawnLocation(): $LevelBlock;
        setSpawnLocation(c: $LevelBlock): void;
        isAdvancementDone(id: $ResourceLocation_): boolean;
        unlockAdvancement(id: $ResourceLocation_): void;
        /**
         * Switches the player's gamemode between Creative and Survival.
         * To change the player's gamemode to a mode other than Creative or Survival, use `setGameMode`.
         * 
         * @param mode `true` to change the player's gamemode to Creative.
         * `false` to change the player's gamemode to Survival.
         */
        setCreativeMode(mode: boolean): void;
        openInventoryGUI(inventory: $InventoryKJS, title: $Component_, columns: number, rows: number): void;
        openInventoryGUI(inventory: $InventoryKJS, title: $Component_): void;
        openInventoryGUI(inventory: $InventoryKJS, title: $Component_, columns: number): void;
        captureInventory(autoRestore: boolean): $Container;
        revokeAdvancement(id: $ResourceLocation_): void;
        notify(builder: $NotificationToastData_): void;
        /**
         * Checks, whether the player is a server operator.
         */
        isOp(): boolean;
        /**
         * Heals the player to full, and fully restores hunger and saturation.
         */
        heal(): void;
        /**
         * Kicks the player from the server with a generic reason.
         */
        kick(): void;
        /**
         * Kicks the player from the server with the provided reason.
         * 
         * @param reason A text component, containing the kick reason. It may be a string, which will be implicitly wrapped into a text component.
         */
        kick(reason: $Component_): void;
        /**
         * Bans the player from the server.
         * 
         * @param banner A string, that specifies who/what banned the player.
         * @param reason A string, that contains the ban reason.
         * @param banDuration Duration of a ban. Negative durations will result in a 10-year ban.
         */
        ban(banner: string, reason: string, banDuration: $Duration_): void;
        setSelectedSlot(index: number): void;
        openChestGUI(title: $Component_, rows: number, gui: $Consumer_<$ChestMenuData>): void;
        openChestGUI(gui: $Consumer_<$KubeJSGUI>): void;
        set activePostShader(value: $ResourceLocation_);
        set mouseItem(value: $ItemStack_);
        get stats(): $PlayerStatsJS;
        get serverPlayer(): boolean;
        get miningBlock(): boolean;
        set creativeMode(value: boolean);
        get op(): boolean;
        set selectedSlot(value: number);
    }
    /**
     * Values that may be interpreted as {@link $ServerPlayerKJS}.
     */
    export type $ServerPlayerKJS_ = (() => void);
    export class $BlockStateKJS {
    }
    export interface $BlockStateKJS extends $RegistryObjectKJS<$Block>, $Replaceable {
        randomTickOverride(state: $BlockState_, level: $ServerLevel, pos: $BlockPos_, random: $RandomSource): boolean;
        asHolder(): $Holder<$Block>;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
        getRegistry(): $Registry<$Block>;
        getRegistryId(): $ResourceKey<$Registry<$Block>>;
        getId(): string;
        getWebIconURL(size: number): $RelativeURL;
        toString(): string;
        setLightEmission(v: number): void;
        setDestroySpeed(v: number): void;
        setRequiresTool(v: boolean): void;
        getKey(): $ResourceKey<$Block>;
        get registry(): $Registry<$Block>;
        get registryId(): $ResourceKey<$Registry<$Block>>;
        get id(): string;
        set lightEmission(value: number);
        set destroySpeed(value: number);
        set requiresTool(value: boolean);
        get key(): $ResourceKey<$Block>;
    }
    export class $MinecraftEnvironmentKJS {
    }
    export interface $MinecraftEnvironmentKJS extends $MessageSenderKJS {
        getScheduledEvents(): $ScheduledEvents;
        scheduleInTicks(ticks: $TickDuration_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        scheduleRepeating(timer: $TemporalAmount_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        scheduleRepeatingInTicks(ticks: $TickDuration_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        schedule(timer: $TemporalAmount_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        get scheduledEvents(): $ScheduledEvents;
    }
    /**
     * Values that may be interpreted as {@link $MinecraftEnvironmentKJS}.
     */
    export type $MinecraftEnvironmentKJS_ = (() => $ScheduledEvents);
    export class $ClientLevelKJS {
    }
    export interface $ClientLevelKJS extends $LevelKJS {
        kubeParticle(x: number, y: number, z: number, spriteSet: $SpriteSet): $KubeAnimatedParticle;
        self(): $EntityGetter;
    }
    /**
     * Values that may be interpreted as {@link $ClientLevelKJS}.
     */
    export type $ClientLevelKJS_ = (() => void);
    export class $BlockBehaviourKJS {
    }
    export interface $BlockBehaviourKJS extends $BlockProviderKJS {
        setSpeedFactor(v: number): void;
        setFriction(v: number): void;
        setSoundType(v: $SoundType_): void;
        setJumpFactor(v: number): void;
        setIsRandomlyTicking(v: boolean): void;
        setHasCollision(v: boolean): void;
        setRandomTickCallback(callback: $Consumer_<$RandomTickCallback>): void;
        setExplosionResistance(v: number): void;
        set speedFactor(value: number);
        set friction(value: number);
        set soundType(value: $SoundType_);
        set jumpFactor(value: number);
        set isRandomlyTicking(value: boolean);
        set hasCollision(value: boolean);
        set randomTickCallback(value: $Consumer_<$RandomTickCallback>);
        set explosionResistance(value: number);
    }
    /**
     * Values that may be interpreted as {@link $BlockBehaviourKJS}.
     */
    export type $BlockBehaviourKJS_ = (() => void);
    export class $ItemKJS {
    }
    export interface $ItemKJS extends $IngredientSupplierKJS, $RegistryObjectKJS<$Item> {
        getRegistry(): $Registry<$Item>;
        getRegistryId(): $ResourceKey<$Registry<$Item>>;
        getTypeData(): $Map<string, $Object>;
        setNameKey(key: string): void;
        setItemBuilder(b: $ItemBuilder): void;
        getItemBuilder(): $ItemBuilder;
        setCanRepair(repairable: boolean): void;
        setCraftingRemainder(i: $Item_): void;
        getTypeItemStackKey(): $ItemStackKey;
        getItem(): $Item;
        get registry(): $Registry<$Item>;
        get registryId(): $ResourceKey<$Registry<$Item>>;
        get typeData(): $Map<string, $Object>;
        set nameKey(value: string);
        set canRepair(value: boolean);
        set craftingRemainder(value: $Item_);
        get typeItemStackKey(): $ItemStackKey;
        get item(): $Item;
    }
    export class $ComponentKJS {
    }
    export interface $ComponentKJS extends $Component, $WithCodec, $WrappedJS {
        getCodec(): $Codec<never>;
        forEach(action: $Consumer_<$Component>): void;
        clickRunCommand(command: string): $MutableComponent;
        clickSuggestCommand(command: string): $MutableComponent;
        clickChangePage(page: string): $MutableComponent;
        hasStyle(): boolean;
        darkPurple(): $MutableComponent;
        darkRed(): $MutableComponent;
        darkGray(): $MutableComponent;
        lightPurple(): $MutableComponent;
        clickCopy(text: string): $MutableComponent;
        clickOpenFile(path: string): $MutableComponent;
        /**
         * @deprecated
         */
        rawComponent(): $MutableComponent;
        /**
         * @deprecated
         */
        component(): $Component;
        isEmpty(): boolean;
        insertion(s: string): $MutableComponent;
        hasSiblings(): boolean;
        darkBlue(): $MutableComponent;
        noColor(): $MutableComponent;
        /**
         * @deprecated
         */
        rawCopy(): $MutableComponent;
        darkGreen(): $MutableComponent;
        clickOpenUrl(url: string): $MutableComponent;
        darkAqua(): $MutableComponent;
        asIterable(): $Iterable<$Component>;
        underlined(): $MutableComponent;
        underlined(value: boolean): $MutableComponent;
        strikethrough(value: boolean): $MutableComponent;
        strikethrough(): $MutableComponent;
        obfuscated(value: boolean): $MutableComponent;
        obfuscated(): $MutableComponent;
        click(s: $ClickEvent_): $MutableComponent;
        blue(): $MutableComponent;
        font(s: $ResourceLocation_): $MutableComponent;
        white(): $MutableComponent;
        gold(): $MutableComponent;
        green(): $MutableComponent;
        italic(value: boolean): $MutableComponent;
        italic(): $MutableComponent;
        bold(): $MutableComponent;
        bold(value: boolean): $MutableComponent;
        gray(): $MutableComponent;
        hover(s: $Component_): $MutableComponent;
        black(): $MutableComponent;
        red(): $MutableComponent;
        aqua(): $MutableComponent;
        yellow(): $MutableComponent;
        color(c: $KubeColor_): $MutableComponent;
        self(): $MutableComponent;
        get codec(): $Codec<never>;
    }
    export class $MinecraftClientKJS {
    }
    export interface $MinecraftClientKJS extends $MinecraftEnvironmentKJS {
        setActivePostShader(id: $ResourceLocation_): void;
        setCurrentScreen(gui: $Screen): void;
        getKeyBindPressedTicks(id: string): number;
        /**
         * Runs the specified console command client-side with the player's permission level. The command won't output any logs in chat nor console.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(command: string): void;
        isKeyMappingDown(key: $KeyMapping): boolean;
        getCurrentScreen(): $Screen;
        getBlockTextureAtlas(): $Function<$ResourceLocation, $TextureAtlasSprite>;
        setStatusMessage(message: $Component_): void;
        getCurrentWorldName(): string;
        getParticleTextureAtlas(): $Function<$ResourceLocation, $TextureAtlasSprite>;
        getTitle(): string;
        isAltDown(): boolean;
        isShiftDown(): boolean;
        /**
         * Runs the specified console command client-side with the player's permission level.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(command: string): void;
        getName(): $Component;
        setTitle(t: string): void;
        isKeyDown(key: number): boolean;
        isKeyDown(keyName: string): boolean;
        isCtrlDown(): boolean;
        isKeyBindDown(id: string): boolean;
        self(): $Minecraft;
        tell(message: $Component_): void;
        set activePostShader(value: $ResourceLocation_);
        get blockTextureAtlas(): $Function<$ResourceLocation, $TextureAtlasSprite>;
        set statusMessage(value: $Component_);
        get currentWorldName(): string;
        get particleTextureAtlas(): $Function<$ResourceLocation, $TextureAtlasSprite>;
        get altDown(): boolean;
        get shiftDown(): boolean;
        get name(): $Component;
        get ctrlDown(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $MinecraftClientKJS}.
     */
    export type $MinecraftClientKJS_ = (() => void);
    export class $WindowKJS {
    }
    export interface $WindowKJS {
        kjs$loadIcons(original: $List_<$IoSupplier_<$InputStream>>): $List<$IoSupplier<$InputStream>>;
    }
    export class $RecipeManagerKJS {
    }
    export interface $RecipeManagerKJS extends $ReloadableServerResourceHolderKJS {
        kjs$getRecipeIdMap(): $Map<$ResourceLocation, $RecipeHolder<never>>;
        kjs$replaceRecipes(byName: $Map_<$ResourceLocation_, $RecipeHolder_<never>>): void;
    }
    export class $ContainerKJS {
    }
    export interface $ContainerKJS extends $InventoryKJS {
        setChanged(): void;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        asContainer(): $Container;
        getStackInSlot(slot: number): $ItemStack;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        isMutable(): boolean;
        getSlotLimit(slot: number): number;
        getHeight(): number;
        clear(): void;
        getBlock(level: $Level_): $LevelBlock;
        self(): $Container;
        getWidth(): number;
        getSlots(): number;
        get mutable(): boolean;
        get height(): number;
        get width(): number;
        get slots(): number;
    }
    export class $IngredientKJS {
    }
    export interface $IngredientKJS extends $ItemPredicate, $Replaceable, $WithCodec, $ItemMatch {
        getCodec(): $Codec<never>;
        matches(cx: $RecipeMatchContext, item: $ItemStack_, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, arg1: $Ingredient_, exact: boolean): boolean;
        isWildcard(): boolean;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
        toIngredientString(ops: $DynamicOps<$Tag_>): string;
        withCount(count: number): $SizedIngredient;
        and(ingredient: $Ingredient_): $Ingredient;
        or(ingredient: $Ingredient_): $Ingredient;
        except(subtracted: $Ingredient_): $Ingredient;
        asIngredient(): $Ingredient;
        self(): $Ingredient;
        asStack(): $SizedIngredient;
        getStackArray(): $ItemStack[];
        containsAnyTag(): boolean;
        getTagKey(): $TagKey<$Item>;
        get codec(): $Codec<never>;
        get wildcard(): boolean;
        get stackArray(): $ItemStack[];
        get tagKey(): $TagKey<$Item>;
    }
    /**
     * Values that may be interpreted as {@link $IngredientKJS}.
     */
    export type $IngredientKJS_ = (() => void);
    export class $ItemEntityKJS {
    }
    export interface $ItemEntityKJS extends $EntityKJS {
        /**
         * Gets the item stack corresponding to the item contained in the item entity.
         * Will be `null` if the contained stack is empty.
         */
        getItem(): $ItemStack;
        setTicksUntilDespawn(ticks: number): void;
        setDefaultPickUpDelay(): void;
        setNoPickUpDelay(): void;
        setInfinitePickUpDelay(): void;
        getTicksUntilDespawn(): number;
        setNoDespawn(): void;
        getLifespan(): number;
        setLifespan(lifespan: number): void;
        isItem(): this is $ItemEntity;
    }
    export class $NoMixinException extends $IllegalStateException {
        constructor();
    }
    export class $ReloadableServerResourceHolderKJS {
    }
    export interface $ReloadableServerResourceHolderKJS {
        kjs$getResources(): $ReloadableServerResourcesKJS;
        kjs$setResources(resources: $ReloadableServerResourcesKJS): void;
    }
    export class $ItemStackKJS {
        get<T extends keyof DataComponentTypes.OutputMap>(type: T): DataComponentTypes.OutputMap[T] | null;
        getOrDefault<T extends keyof DataComponentTypes.OutputMap>(type: T, _default: DataComponentTypes.OutputMap[T]): DataComponentTypes.OutputMap[T];
        set(components: $DataComponentMap_): this;
        set<T extends keyof DataComponentTypes.InputMap>(type: T, data: DataComponentTypes.InputMap[T]): this;
    }
    export interface $ItemStackKJS extends $SpecialEquality, $WithCodec, $IngredientSupplierKJS, $ToStringJS, $Replaceable, $ItemComponentFunctions, $MutableDataComponentHolderFunctions, $ItemMatch, $RegistryObjectKJS<$Item> {
        getCodec(): $Codec<$ItemStack>;
        getComponentString(): string;
        matches(cx: $RecipeMatchContext, s: $ItemStack_, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, arg1: $Ingredient_, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, itemLike: $ItemLike_, exact: boolean): boolean;
        asHolder(): $Holder<$Item>;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
        getRegistry(): $Registry<$Item>;
        getRegistryId(): $ResourceKey<$Registry<$Item>>;
        getIdLocation(): $ResourceLocation;
        getTypeData(): $Map<string, $Object>;
        getBlock(): $Block;
        toStringJS(): string;
        getId(): string;
        getMod(): string;
        specialEquals(o: $Object, shallow: boolean): boolean;
        getWebIconURL(ops: $DynamicOps<$Tag_>, size: number): $RelativeURL;
        withCustomName(name: $Component_): this;
        withCount(c: number): this;
        hasEnchantment(enchantment: $Holder_<$Enchantment>, level: number): boolean;
        areItemsEqual(other: $ItemStack_): boolean;
        toItemString(): string;
        enchant(enchantments: $ItemEnchantments_): this;
        enchant(enchantment: $Holder_<$Enchantment>, level: number): this;
        withLore(lines: $Component_[]): this;
        withLore(lines: $Component_[], styledLines: $Component_[]): this;
        toItemString0(dynamicOps: $DynamicOps<$Tag_>): string;
        /**
         * @deprecated
         */
        withChance(chance: number): $ItemStack;
        getEnchantments(): $ItemEnchantments;
        areComponentsEqual(other: $ItemStack_): boolean;
        equalsIgnoringCount(stack: $ItemStack_): boolean;
        getHarvestSpeed(block: $LevelBlock): number;
        getHarvestSpeed(): number;
        asIngredient(): $Ingredient;
        self(): $ItemStack;
        getKey(): $ResourceKey<$Item>;
        get<T extends keyof DataComponentTypes.OutputMap>(type: T): DataComponentTypes.OutputMap[T] | null;
        getOrDefault<T extends keyof DataComponentTypes.OutputMap>(type: T, _default: DataComponentTypes.OutputMap[T]): DataComponentTypes.OutputMap[T];
        set(components: $DataComponentMap_): this;
        set<T extends keyof DataComponentTypes.InputMap>(type: T, data: DataComponentTypes.InputMap[T]): this;
        get codec(): $Codec<$ItemStack>;
        get componentString(): string;
        get registry(): $Registry<$Item>;
        get registryId(): $ResourceKey<$Registry<$Item>>;
        get idLocation(): $ResourceLocation;
        get typeData(): $Map<string, $Object>;
        get block(): $Block;
        get id(): string;
        get mod(): string;
        get enchantments(): $ItemEnchantments;
        get key(): $ResourceKey<$Item>;
    }
    export class $ClientPlayerKJS {
    }
    export interface $ClientPlayerKJS extends $PlayerKJS {
        getStats(): $PlayerStatsJS;
        /**
         * Checks if the entity is a client-side player.
         */
        isClientPlayer(): this is $AbstractClientPlayer;
        isMiningBlock(): boolean;
        sendData(channel: string, data: $CompoundTag_): void;
        notify(notification: $NotificationToastData_): void;
        get stats(): $PlayerStatsJS;
        get clientPlayer(): boolean;
        get miningBlock(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ClientPlayerKJS}.
     */
    export type $ClientPlayerKJS_ = (() => void);
}
