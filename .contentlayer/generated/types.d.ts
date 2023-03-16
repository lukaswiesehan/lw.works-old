// NOTE This file is auto-generated by Contentlayer

import type { Markdown, MDX, ImageFieldData, IsoDateTimeString } from 'contentlayer/core'
import * as Local from 'contentlayer/source-files'

export { isType } from 'contentlayer/client'

export type { Markdown, MDX, ImageFieldData, IsoDateTimeString }

/** Document types */
export type BlogPost = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'BlogPost'
  /** The title of the post */
  title: string
  /** The date of the post */
  date: IsoDateTimeString
  /** Short intro to the post */
  excerpt: string
  /** The author of the post */
  author: Author
  /** MDX file body */
  body: MDX
  slug: string
  writtenDate: string
  headings: json
}  

/** Nested types */
export type Author = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Author'
  name: string
  description: string
  avatar: string
  linkedin?: string | undefined
  instagram?: string | undefined
  twitter?: string | undefined

}  

/** Helper types */

export type AllTypes = DocumentTypes | NestedTypes
export type AllTypeNames = DocumentTypeNames | NestedTypeNames

export type DocumentTypes = BlogPost
export type DocumentTypeNames = 'BlogPost'

export type NestedTypes = Author
export type NestedTypeNames = 'Author'


export interface ContentlayerGenTypes {
  documentTypes: DocumentTypes
  documentTypeMap: DocumentTypeMap
  documentTypeNames: DocumentTypeNames
  nestedTypes: NestedTypes
  nestedTypeMap: NestedTypeMap
  nestedTypeNames: NestedTypeNames
  allTypeNames: AllTypeNames
}

declare global {
  interface ContentlayerGen extends ContentlayerGenTypes {}
}

export type DocumentTypeMap = {
  BlogPost: BlogPost
}

export type NestedTypeMap = {
  Author: Author
}

 