export interface IManifest {
    hostPath: string;
    resource: string;
}

export const manifest: IManifest = {
    hostPath: "http://localhost:3001",
    resource: "index.html"
}