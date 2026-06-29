import { $List_, $List } from "@package/java/util";
import { $Comparable } from "@package/java/lang";
import { $Artifact } from "@package/org/apache/maven/artifact";

declare module "@package/org/apache/maven/artifact/versioning" {
    export class $ArtifactVersion {
    }
    export interface $ArtifactVersion extends $Comparable<$ArtifactVersion> {
        getQualifier(): string;
        parseVersion(arg0: string): void;
        getMajorVersion(): number;
        getMinorVersion(): number;
        getIncrementalVersion(): number;
        getBuildNumber(): number;
        get qualifier(): string;
        get majorVersion(): number;
        get minorVersion(): number;
        get incrementalVersion(): number;
        get buildNumber(): number;
    }
    export class $VersionRange {
        static createFromVersionSpec(arg0: string): $VersionRange;
        isSelectedVersionKnown(arg0: $Artifact): boolean;
        getRecommendedVersion(): $ArtifactVersion;
        containsVersion(arg0: $ArtifactVersion): boolean;
        getRestrictions(): $List<$Restriction>;
        getSelectedVersion(arg0: $Artifact): $ArtifactVersion;
        matchVersion(arg0: $List_<$ArtifactVersion>): $ArtifactVersion;
        hasRestrictions(): boolean;
        static createFromVersion(arg0: string): $VersionRange;
        restrict(arg0: $VersionRange): $VersionRange;
        /**
         * @deprecated
         */
        cloneOf(): $VersionRange;
        get recommendedVersion(): $ArtifactVersion;
        get restrictions(): $List<$Restriction>;
    }
    export class $Restriction {
        isLowerBoundInclusive(): boolean;
        isUpperBoundInclusive(): boolean;
        containsVersion(arg0: $ArtifactVersion): boolean;
        getLowerBound(): $ArtifactVersion;
        getUpperBound(): $ArtifactVersion;
        static EVERYTHING: $Restriction;
        constructor(arg0: $ArtifactVersion, arg1: boolean, arg2: $ArtifactVersion, arg3: boolean);
        get lowerBoundInclusive(): boolean;
        get upperBoundInclusive(): boolean;
        get lowerBound(): $ArtifactVersion;
        get upperBound(): $ArtifactVersion;
    }
}
