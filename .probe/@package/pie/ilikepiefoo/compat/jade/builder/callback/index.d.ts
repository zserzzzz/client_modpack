import { $Consumer_ } from "@package/java/util/function";
import { $ServerPlayer, $ServerLevel } from "@package/net/minecraft/server/level";
import { $ViewGroup } from "@package/snownee/jade/api/view";
import { $Accessor } from "@package/snownee/jade/api";
import { $ViewGroupBuilder } from "@package/pie/ilikepiefoo/compat/jade/builder";
import { $List_, $List } from "@package/java/util";

declare module "@package/pie/ilikepiefoo/compat/jade/builder/callback" {
    export class $GetServerGroupsCallbackJS<IN, OUT> {
        getTarget(): IN;
        getAccessor(): $Accessor<never>;
        getLevel(): $ServerLevel;
        getGroups(): $List<$ViewGroupBuilder<OUT>>;
        getPlayer(): $ServerPlayer;
        showDetails(): boolean;
        addGroups(arg0: $List_<$ViewGroupBuilder<OUT>>): $GetServerGroupsCallbackJS<IN, OUT>;
        getWorld(): $ServerLevel;
        addGroup(arg0: $Consumer_<$ViewGroupBuilder<OUT>>): $GetServerGroupsCallbackJS<IN, OUT>;
        addGroup(arg0: $List_<OUT>): $GetServerGroupsCallbackJS<IN, OUT>;
        addGroup(arg0: $ViewGroupBuilder<OUT>): $GetServerGroupsCallbackJS<IN, OUT>;
        clearGroups(): $GetServerGroupsCallbackJS<IN, OUT>;
        world: $ServerLevel;
        accessor: $Accessor<never>;
        player: $ServerPlayer;
        target: IN;
        constructor(arg0: $Accessor<never>);
        get level(): $ServerLevel;
        get groups(): $List<$ViewGroupBuilder<OUT>>;
    }
    export class $GetClientGroupsCallbackJS<IN, OUT> {
        getAccessor(): $Accessor<never>;
        getGroups(): $List<$ViewGroup<IN>>;
        addGroups(arg0: $List_<$ViewGroup<OUT>>): $GetClientGroupsCallbackJS<IN, OUT>;
        addGroup(arg0: $Consumer_<$ViewGroupBuilder<OUT>>): $GetClientGroupsCallbackJS<IN, OUT>;
        addGroup(arg0: $List_<OUT>): $GetClientGroupsCallbackJS<IN, OUT>;
        addGroup(arg0: $ViewGroup<OUT>): $GetClientGroupsCallbackJS<IN, OUT>;
        addGroup(arg0: $ViewGroupBuilder<OUT>): $GetClientGroupsCallbackJS<IN, OUT>;
        clearGroups(): $GetClientGroupsCallbackJS<IN, OUT>;
        getResultingGroups(): $List<$ViewGroupBuilder<OUT>>;
        accessor: $Accessor<never>;
        groups: $List<$ViewGroup<IN>>;
        constructor(arg0: $Accessor<never>, arg1: $List_<$ViewGroup<IN>>);
        get resultingGroups(): $List<$ViewGroupBuilder<OUT>>;
    }
}
