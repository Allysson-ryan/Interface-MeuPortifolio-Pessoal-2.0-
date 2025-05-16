// declara para o TypeScript como lidar com arquivos CSS
declare module "*.css";

declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.svg" {
  const content: string;
  export default content;
}

/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_STATICFORM_ACCESS_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
