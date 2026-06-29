import { $Proxy } from "@package/org/apache/maven/repository";
import { $ArtifactRepositoryLayout } from "@package/org/apache/maven/artifact/repository/layout";
import { $Date, $List_, $List } from "@package/java/util";
import { $Artifact } from "@package/org/apache/maven/artifact";
import { $ArtifactMetadata } from "@package/org/apache/maven/artifact/metadata";
export * as layout from "@package/org/apache/maven/artifact/repository/layout";

declare module "@package/org/apache/maven/artifact/repository" {
    export class $ArtifactRepositoryPolicy {
        isEnabled(): boolean;
        merge(arg0: $ArtifactRepositoryPolicy): void;
        setEnabled(arg0: boolean): void;
        setUpdatePolicy(arg0: string): void;
        getUpdatePolicy(): string;
        getChecksumPolicy(): string;
        checkOutOfDate(arg0: $Date): boolean;
        setChecksumPolicy(arg0: string): void;
        static CHECKSUM_POLICY_IGNORE: string;
        static UPDATE_POLICY_DAILY: string;
        static CHECKSUM_POLICY_FAIL: string;
        static UPDATE_POLICY_NEVER: string;
        static CHECKSUM_POLICY_WARN: string;
        static UPDATE_POLICY_INTERVAL: string;
        static UPDATE_POLICY_ALWAYS: string;
        constructor(arg0: boolean, arg1: string, arg2: string);
        constructor(arg0: $ArtifactRepositoryPolicy);
        constructor();
    }
    export class $Authentication {
        getPrivateKey(): string;
        getPassword(): string;
        setPassword(arg0: string): void;
        setUsername(arg0: string): void;
        getUsername(): string;
        getPassphrase(): string;
        setPassphrase(arg0: string): void;
        setPrivateKey(arg0: string): void;
        constructor(arg0: string, arg1: string);
    }
    export class $ArtifactRepository {
    }
    export interface $ArtifactRepository {
        setUrl(arg0: string): void;
        /**
         * @deprecated
         */
        isBlacklisted(): boolean;
        getKey(): string;
        find(arg0: $Artifact): $Artifact;
        getId(): string;
        getProtocol(): string;
        getProxy(): $Proxy;
        getUrl(): string;
        getLayout(): $ArtifactRepositoryLayout;
        setLayout(arg0: $ArtifactRepositoryLayout): void;
        setId(arg0: string): void;
        getReleases(): $ArtifactRepositoryPolicy;
        getSnapshots(): $ArtifactRepositoryPolicy;
        isBlocked(): boolean;
        setBlocked(arg0: boolean): void;
        setProxy(arg0: $Proxy): void;
        pathOfRemoteRepositoryMetadata(arg0: $ArtifactMetadata): string;
        pathOfLocalRepositoryMetadata(arg0: $ArtifactMetadata, arg1: $ArtifactRepository): string;
        findVersions(arg0: $Artifact): $List<string>;
        isProjectAware(): boolean;
        setAuthentication(arg0: $Authentication): void;
        /**
         * @deprecated
         */
        isUniqueVersion(): boolean;
        getAuthentication(): $Authentication;
        /**
         * @deprecated
         */
        setBlacklisted(arg0: boolean): void;
        setSnapshotUpdatePolicy(arg0: $ArtifactRepositoryPolicy): void;
        getMirroredRepositories(): $List<$ArtifactRepository>;
        setMirroredRepositories(arg0: $List_<$ArtifactRepository>): void;
        setReleaseUpdatePolicy(arg0: $ArtifactRepositoryPolicy): void;
        pathOf(arg0: $Artifact): string;
        getBasedir(): string;
        get key(): string;
        get protocol(): string;
        get releases(): $ArtifactRepositoryPolicy;
        get snapshots(): $ArtifactRepositoryPolicy;
        get projectAware(): boolean;
        get uniqueVersion(): boolean;
        set snapshotUpdatePolicy(value: $ArtifactRepositoryPolicy);
        set releaseUpdatePolicy(value: $ArtifactRepositoryPolicy);
        get basedir(): string;
    }
}
