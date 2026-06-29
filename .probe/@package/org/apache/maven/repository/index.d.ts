export * as legacy from "@package/org/apache/maven/repository/legacy";

declare module "@package/org/apache/maven/repository" {
    export class $Proxy {
        getUserName(): string;
        getPassword(): string;
        getHost(): string;
        getPort(): number;
        getProtocol(): string;
        setPort(arg0: number): void;
        setHost(arg0: string): void;
        setPassword(arg0: string): void;
        setProtocol(arg0: string): void;
        getNtlmDomain(): string;
        setNonProxyHosts(arg0: string): void;
        setUserName(arg0: string): void;
        getNonProxyHosts(): string;
        setNtlmDomain(arg0: string): void;
        getNtlmHost(): string;
        setNtlmHost(arg0: string): void;
        static PROXY_HTTP: string;
        static PROXY_SOCKS4: string;
        static PROXY_SOCKS5: string;
        constructor();
    }
}
