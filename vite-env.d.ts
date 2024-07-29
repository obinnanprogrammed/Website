interface ImportMetaEnv {
    readonly VITE_EMAIL_SERVICE_KEY: string;
    readonly VITE_EMAIL_TEMPLATE_KEY: string;
    readonly VITE_EMAIL_PUBLIC_KEY: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}