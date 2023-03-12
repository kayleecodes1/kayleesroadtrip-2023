import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';

export default defineConfig({
    name: 'default',
    title: "Kaylee's Road Trip 2023",
    projectId: 'hrwr0yts',
    dataset: 'production',
    plugins: [deskTool(), visionTool()],
    schema: {
        types: schemaTypes,
    },
});
