export * as legacy from "@package/org/apache/maven/repository/legacy";

declare module "@package/org/apache/maven/repository" {
    export class $Proxy {
        getUserName(): string;
        getPassword(): string;
        getHost(): string;
        getPort(): number;
        getProtocol(): string;
        setPassword(arg0: string): void;
        setPort(arg0: number): void;
        setHost(arg0: string): void;
        setProtocol(arg0: string): void;
        setNtlmHost(arg0: string): void;
        getNtlmDomain(): string;
        setUserName(arg0: string): void;
        setNtlmDomain(arg0: string): void;
        setNonProxyHosts(arg0: string): void;
        getNtlmHost(): string;
        getNonProxyHosts(): string;
        static PROXY_HTTP: string;
        static PROXY_SOCKS4: string;
        static PROXY_SOCKS5: string;
        constructor();
    }
}
