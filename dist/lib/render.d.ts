declare type LanguageType = 'ts' | 'js';
export declare type SourceType = 'application' | 'controller' | 'service' | 'validator' | 'resource' | 'middleware';
export declare class Render {
    private _sourcePath;
    private _destinationPath;
    private _language;
    private _env;
    private _templatePath;
    private _assigns;
    constructor();
    source(sourcePath: SourceType): this;
    destination(destinationPath: string): this;
    language(language: LanguageType): this;
    assign(name: string, value: any): this;
    assign(name: object): this;
    make(srcFilename: string, distFilename: string, relationPath?: string): void;
    apply(): void;
}
export {};