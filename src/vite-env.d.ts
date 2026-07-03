/// <reference types="vite/client" />

declare module "*.md?raw" {
  const content: string;
  export default content;
}

declare module "virtual:profile-data" {
  export const rawProfile: unknown;
}
