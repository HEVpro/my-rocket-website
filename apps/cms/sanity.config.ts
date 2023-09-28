import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { colorInput } from "@sanity/color-input";
import {codeInput} from '@sanity/code-input'

export default defineConfig({
  name: 'default',
  title: 'portfolio',

  projectId: 'esvjtwyr',
  dataset: 'development',

  plugins: [deskTool(), visionTool(), colorInput(), codeInput()],

  schema: {
    types: schemaTypes,
  },
})
