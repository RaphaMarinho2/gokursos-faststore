export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any
  /** A string or the string representation of an object (a stringified object). */
  ObjectOrString: any
}

export type BooleanQueryOperatorInput = {
  eq: InputMaybe<Scalars['Boolean']>
  in: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>
  ne: InputMaybe<Scalars['Boolean']>
  nin: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>
}

export type ContentfulAsset = ContentfulReference &
  Node &
  RemoteFile & {
    children: Array<Node>
    contentful_id: Scalars['String']
    createdAt: Maybe<Scalars['Date']>
    description: Maybe<Scalars['String']>
    file: Maybe<ContentfulAssetFile>
    filename: Scalars['String']
    filesize: Maybe<Scalars['Int']>
    /** Data used in the <GatsbyImage /> component. See https://gatsby.dev/img for more info. */
    gatsbyImage: Maybe<Scalars['JSON']>
    gatsbyImageData: Maybe<Scalars['JSON']>
    height: Maybe<Scalars['Int']>
    id: Scalars['ID']
    internal: Internal
    mimeType: Scalars['String']
    node_locale: Maybe<Scalars['String']>
    parent: Maybe<Node>
    placeholderUrl: Maybe<Scalars['String']>
    publicUrl: Scalars['String']
    resize: Maybe<RemoteFileResize>
    size: Maybe<Scalars['Int']>
    spaceId: Maybe<Scalars['String']>
    sys: Maybe<ContentfulAssetSys>
    title: Maybe<Scalars['String']>
    updatedAt: Maybe<Scalars['Date']>
    url: Maybe<Scalars['String']>
    width: Maybe<Scalars['Int']>
  }

export type ContentfulAssetCreatedAtArgs = {
  difference: InputMaybe<Scalars['String']>
  formatString: InputMaybe<Scalars['String']>
  fromNow: InputMaybe<Scalars['Boolean']>
  locale: InputMaybe<Scalars['String']>
}

export type ContentfulAssetGatsbyImageArgs = {
  aspectRatio: InputMaybe<Scalars['Float']>
  backgroundColor: InputMaybe<Scalars['String']>
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  cropFocus: InputMaybe<Array<InputMaybe<RemoteFileCropFocus>>>
  fit?: InputMaybe<RemoteFileFit>
  formats?: InputMaybe<Array<RemoteFileFormat>>
  height: InputMaybe<Scalars['Int']>
  layout?: InputMaybe<RemoteFileLayout>
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
  placeholder?: InputMaybe<RemoteFilePlaceholder>
  quality?: InputMaybe<Scalars['Int']>
  sizes: InputMaybe<Scalars['String']>
  width: InputMaybe<Scalars['Int']>
}

export type ContentfulAssetGatsbyImageDataArgs = {
  aspectRatio: InputMaybe<Scalars['Float']>
  backgroundColor: InputMaybe<Scalars['String']>
  breakpoints: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  cornerRadius?: InputMaybe<Scalars['Int']>
  cropFocus: InputMaybe<ContentfulImageCropFocus>
  formats?: InputMaybe<Array<InputMaybe<GatsbyImageFormat>>>
  height: InputMaybe<Scalars['Int']>
  jpegProgressive?: InputMaybe<Scalars['Boolean']>
  layout: InputMaybe<GatsbyImageLayout>
  outputPixelDensities: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
  placeholder: InputMaybe<GatsbyImagePlaceholder>
  quality?: InputMaybe<Scalars['Int']>
  resizingBehavior: InputMaybe<ImageResizingBehavior>
  sizes: InputMaybe<Scalars['String']>
  width: InputMaybe<Scalars['Int']>
}

export type ContentfulAssetResizeArgs = {
  aspectRatio: InputMaybe<Scalars['Float']>
  cropFocus: InputMaybe<Array<InputMaybe<RemoteFileCropFocus>>>
  fit?: InputMaybe<RemoteFileFit>
  format?: InputMaybe<RemoteFileFormat>
  height: InputMaybe<Scalars['Int']>
  quality?: InputMaybe<Scalars['Int']>
  width: InputMaybe<Scalars['Int']>
}

export type ContentfulAssetUpdatedAtArgs = {
  difference: InputMaybe<Scalars['String']>
  formatString: InputMaybe<Scalars['String']>
  fromNow: InputMaybe<Scalars['Boolean']>
  locale: InputMaybe<Scalars['String']>
}

export type ContentfulAssetConnection = {
  distinct: Array<Scalars['String']>
  edges: Array<ContentfulAssetEdge>
  group: Array<ContentfulAssetGroupConnection>
  max: Maybe<Scalars['Float']>
  min: Maybe<Scalars['Float']>
  nodes: Array<ContentfulAsset>
  pageInfo: PageInfo
  sum: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type ContentfulAssetConnectionDistinctArgs = {
  field: ContentfulAssetFieldsEnum
}

export type ContentfulAssetConnectionGroupArgs = {
  field: ContentfulAssetFieldsEnum
  limit: InputMaybe<Scalars['Int']>
  skip: InputMaybe<Scalars['Int']>
}

export type ContentfulAssetConnectionMaxArgs = {
  field: ContentfulAssetFieldsEnum
}

export type ContentfulAssetConnectionMinArgs = {
  field: ContentfulAssetFieldsEnum
}

export type ContentfulAssetConnectionSumArgs = {
  field: ContentfulAssetFieldsEnum
}

export type ContentfulAssetEdge = {
  next: Maybe<ContentfulAsset>
  node: ContentfulAsset
  previous: Maybe<ContentfulAsset>
}

export type ContentfulAssetFieldsEnum =
  | 'children'
  | 'children___children'
  | 'children___children___children'
  | 'children___children___children___children'
  | 'children___children___children___id'
  | 'children___children___id'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___parent___children'
  | 'children___children___parent___id'
  | 'children___id'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___parent___children'
  | 'children___parent___children___children'
  | 'children___parent___children___id'
  | 'children___parent___id'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___parent___children'
  | 'children___parent___parent___id'
  | 'contentful_id'
  | 'createdAt'
  | 'description'
  | 'file___contentType'
  | 'file___details___image___height'
  | 'file___details___image___width'
  | 'file___details___size'
  | 'file___fileName'
  | 'file___url'
  | 'filename'
  | 'filesize'
  | 'gatsbyImage'
  | 'gatsbyImageData'
  | 'height'
  | 'id'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'mimeType'
  | 'node_locale'
  | 'parent___children'
  | 'parent___children___children'
  | 'parent___children___children___children'
  | 'parent___children___children___id'
  | 'parent___children___id'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___parent___children'
  | 'parent___children___parent___id'
  | 'parent___id'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___parent___children'
  | 'parent___parent___children___children'
  | 'parent___parent___children___id'
  | 'parent___parent___id'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___parent___children'
  | 'parent___parent___parent___id'
  | 'placeholderUrl'
  | 'publicUrl'
  | 'resize___height'
  | 'resize___src'
  | 'resize___width'
  | 'size'
  | 'spaceId'
  | 'sys___revision'
  | 'sys___type'
  | 'title'
  | 'updatedAt'
  | 'url'
  | 'width'

export type ContentfulAssetFile = {
  contentType: Maybe<Scalars['String']>
  details: Maybe<ContentfulAssetFileDetails>
  fileName: Maybe<Scalars['String']>
  url: Maybe<Scalars['String']>
}

export type ContentfulAssetFileDetails = {
  image: Maybe<ContentfulAssetFileDetailsImage>
  size: Maybe<Scalars['Int']>
}

export type ContentfulAssetFileDetailsFilterInput = {
  image: InputMaybe<ContentfulAssetFileDetailsImageFilterInput>
  size: InputMaybe<IntQueryOperatorInput>
}

export type ContentfulAssetFileDetailsImage = {
  height: Maybe<Scalars['Int']>
  width: Maybe<Scalars['Int']>
}

export type ContentfulAssetFileDetailsImageFilterInput = {
  height: InputMaybe<IntQueryOperatorInput>
  width: InputMaybe<IntQueryOperatorInput>
}

export type ContentfulAssetFileFilterInput = {
  contentType: InputMaybe<StringQueryOperatorInput>
  details: InputMaybe<ContentfulAssetFileDetailsFilterInput>
  fileName: InputMaybe<StringQueryOperatorInput>
  url: InputMaybe<StringQueryOperatorInput>
}

export type ContentfulAssetFilterInput = {
  children: InputMaybe<NodeFilterListInput>
  contentful_id: InputMaybe<StringQueryOperatorInput>
  createdAt: InputMaybe<DateQueryOperatorInput>
  description: InputMaybe<StringQueryOperatorInput>
  file: InputMaybe<ContentfulAssetFileFilterInput>
  filename: InputMaybe<StringQueryOperatorInput>
  filesize: InputMaybe<IntQueryOperatorInput>
  gatsbyImage: InputMaybe<JsonQueryOperatorInput>
  gatsbyImageData: InputMaybe<JsonQueryOperatorInput>
  height: InputMaybe<IntQueryOperatorInput>
  id: InputMaybe<StringQueryOperatorInput>
  internal: InputMaybe<InternalFilterInput>
  mimeType: InputMaybe<StringQueryOperatorInput>
  node_locale: InputMaybe<StringQueryOperatorInput>
  parent: InputMaybe<NodeFilterInput>
  placeholderUrl: InputMaybe<StringQueryOperatorInput>
  publicUrl: InputMaybe<StringQueryOperatorInput>
  resize: InputMaybe<RemoteFileResizeFilterInput>
  size: InputMaybe<IntQueryOperatorInput>
  spaceId: InputMaybe<StringQueryOperatorInput>
  sys: InputMaybe<ContentfulAssetSysFilterInput>
  title: InputMaybe<StringQueryOperatorInput>
  updatedAt: InputMaybe<DateQueryOperatorInput>
  url: InputMaybe<StringQueryOperatorInput>
  width: InputMaybe<IntQueryOperatorInput>
}

export type ContentfulAssetGroupConnection = {
  distinct: Array<Scalars['String']>
  edges: Array<ContentfulAssetEdge>
  field: Scalars['String']
  fieldValue: Maybe<Scalars['String']>
  group: Array<ContentfulAssetGroupConnection>
  max: Maybe<Scalars['Float']>
  min: Maybe<Scalars['Float']>
  nodes: Array<ContentfulAsset>
  pageInfo: PageInfo
  sum: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type ContentfulAssetGroupConnectionDistinctArgs = {
  field: ContentfulAssetFieldsEnum
}

export type ContentfulAssetGroupConnectionGroupArgs = {
  field: ContentfulAssetFieldsEnum
  limit: InputMaybe<Scalars['Int']>
  skip: InputMaybe<Scalars['Int']>
}

export type ContentfulAssetGroupConnectionMaxArgs = {
  field: ContentfulAssetFieldsEnum
}

export type ContentfulAssetGroupConnectionMinArgs = {
  field: ContentfulAssetFieldsEnum
}

export type ContentfulAssetGroupConnectionSumArgs = {
  field: ContentfulAssetFieldsEnum
}

export type ContentfulAssetSortInput = {
  fields: InputMaybe<Array<InputMaybe<ContentfulAssetFieldsEnum>>>
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type ContentfulAssetSys = {
  revision: Maybe<Scalars['Int']>
  type: Maybe<Scalars['String']>
}

export type ContentfulAssetSysFilterInput = {
  revision: InputMaybe<IntQueryOperatorInput>
  type: InputMaybe<StringQueryOperatorInput>
}

export type ContentfulBannerMedium = ContentfulEntry &
  ContentfulReference &
  Node & {
    children: Array<Node>
    contentful_id: Scalars['String']
    createdAt: Maybe<Scalars['Date']>
    id: Scalars['ID']
    imagemBannerMedium: Maybe<ContentfulAsset>
    internal: Internal
    link: Maybe<Scalars['String']>
    node_locale: Scalars['String']
    parent: Maybe<Node>
    spaceId: Maybe<Scalars['String']>
    sys: Maybe<ContentfulBannerMediumSys>
    updatedAt: Maybe<Scalars['Date']>
  }

export type ContentfulBannerMediumCreatedAtArgs = {
  difference: InputMaybe<Scalars['String']>
  formatString: InputMaybe<Scalars['String']>
  fromNow: InputMaybe<Scalars['Boolean']>
  locale: InputMaybe<Scalars['String']>
}

export type ContentfulBannerMediumUpdatedAtArgs = {
  difference: InputMaybe<Scalars['String']>
  formatString: InputMaybe<Scalars['String']>
  fromNow: InputMaybe<Scalars['Boolean']>
  locale: InputMaybe<Scalars['String']>
}

export type ContentfulBannerMediumConnection = {
  distinct: Array<Scalars['String']>
  edges: Array<ContentfulBannerMediumEdge>
  group: Array<ContentfulBannerMediumGroupConnection>
  max: Maybe<Scalars['Float']>
  min: Maybe<Scalars['Float']>
  nodes: Array<ContentfulBannerMedium>
  pageInfo: PageInfo
  sum: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type ContentfulBannerMediumConnectionDistinctArgs = {
  field: ContentfulBannerMediumFieldsEnum
}

export type ContentfulBannerMediumConnectionGroupArgs = {
  field: ContentfulBannerMediumFieldsEnum
  limit: InputMaybe<Scalars['Int']>
  skip: InputMaybe<Scalars['Int']>
}

export type ContentfulBannerMediumConnectionMaxArgs = {
  field: ContentfulBannerMediumFieldsEnum
}

export type ContentfulBannerMediumConnectionMinArgs = {
  field: ContentfulBannerMediumFieldsEnum
}

export type ContentfulBannerMediumConnectionSumArgs = {
  field: ContentfulBannerMediumFieldsEnum
}

export type ContentfulBannerMediumEdge = {
  next: Maybe<ContentfulBannerMedium>
  node: ContentfulBannerMedium
  previous: Maybe<ContentfulBannerMedium>
}

export type ContentfulBannerMediumFieldsEnum =
  | 'children'
  | 'children___children'
  | 'children___children___children'
  | 'children___children___children___children'
  | 'children___children___children___id'
  | 'children___children___id'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___parent___children'
  | 'children___children___parent___id'
  | 'children___id'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___parent___children'
  | 'children___parent___children___children'
  | 'children___parent___children___id'
  | 'children___parent___id'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___parent___children'
  | 'children___parent___parent___id'
  | 'contentful_id'
  | 'createdAt'
  | 'id'
  | 'imagemBannerMedium___children'
  | 'imagemBannerMedium___children___children'
  | 'imagemBannerMedium___children___children___children'
  | 'imagemBannerMedium___children___children___id'
  | 'imagemBannerMedium___children___id'
  | 'imagemBannerMedium___children___internal___content'
  | 'imagemBannerMedium___children___internal___contentDigest'
  | 'imagemBannerMedium___children___internal___description'
  | 'imagemBannerMedium___children___internal___fieldOwners'
  | 'imagemBannerMedium___children___internal___ignoreType'
  | 'imagemBannerMedium___children___internal___mediaType'
  | 'imagemBannerMedium___children___internal___owner'
  | 'imagemBannerMedium___children___internal___type'
  | 'imagemBannerMedium___children___parent___children'
  | 'imagemBannerMedium___children___parent___id'
  | 'imagemBannerMedium___contentful_id'
  | 'imagemBannerMedium___createdAt'
  | 'imagemBannerMedium___description'
  | 'imagemBannerMedium___file___contentType'
  | 'imagemBannerMedium___file___details___size'
  | 'imagemBannerMedium___file___fileName'
  | 'imagemBannerMedium___file___url'
  | 'imagemBannerMedium___filename'
  | 'imagemBannerMedium___filesize'
  | 'imagemBannerMedium___gatsbyImage'
  | 'imagemBannerMedium___gatsbyImageData'
  | 'imagemBannerMedium___height'
  | 'imagemBannerMedium___id'
  | 'imagemBannerMedium___internal___content'
  | 'imagemBannerMedium___internal___contentDigest'
  | 'imagemBannerMedium___internal___description'
  | 'imagemBannerMedium___internal___fieldOwners'
  | 'imagemBannerMedium___internal___ignoreType'
  | 'imagemBannerMedium___internal___mediaType'
  | 'imagemBannerMedium___internal___owner'
  | 'imagemBannerMedium___internal___type'
  | 'imagemBannerMedium___mimeType'
  | 'imagemBannerMedium___node_locale'
  | 'imagemBannerMedium___parent___children'
  | 'imagemBannerMedium___parent___children___children'
  | 'imagemBannerMedium___parent___children___id'
  | 'imagemBannerMedium___parent___id'
  | 'imagemBannerMedium___parent___internal___content'
  | 'imagemBannerMedium___parent___internal___contentDigest'
  | 'imagemBannerMedium___parent___internal___description'
  | 'imagemBannerMedium___parent___internal___fieldOwners'
  | 'imagemBannerMedium___parent___internal___ignoreType'
  | 'imagemBannerMedium___parent___internal___mediaType'
  | 'imagemBannerMedium___parent___internal___owner'
  | 'imagemBannerMedium___parent___internal___type'
  | 'imagemBannerMedium___parent___parent___children'
  | 'imagemBannerMedium___parent___parent___id'
  | 'imagemBannerMedium___placeholderUrl'
  | 'imagemBannerMedium___publicUrl'
  | 'imagemBannerMedium___resize___height'
  | 'imagemBannerMedium___resize___src'
  | 'imagemBannerMedium___resize___width'
  | 'imagemBannerMedium___size'
  | 'imagemBannerMedium___spaceId'
  | 'imagemBannerMedium___sys___revision'
  | 'imagemBannerMedium___sys___type'
  | 'imagemBannerMedium___title'
  | 'imagemBannerMedium___updatedAt'
  | 'imagemBannerMedium___url'
  | 'imagemBannerMedium___width'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'link'
  | 'node_locale'
  | 'parent___children'
  | 'parent___children___children'
  | 'parent___children___children___children'
  | 'parent___children___children___id'
  | 'parent___children___id'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___parent___children'
  | 'parent___children___parent___id'
  | 'parent___id'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___parent___children'
  | 'parent___parent___children___children'
  | 'parent___parent___children___id'
  | 'parent___parent___id'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___parent___children'
  | 'parent___parent___parent___id'
  | 'spaceId'
  | 'sys___contentType___sys___id'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___type'
  | 'sys___revision'
  | 'sys___type'
  | 'updatedAt'

export type ContentfulBannerMediumFilterInput = {
  children: InputMaybe<NodeFilterListInput>
  contentful_id: InputMaybe<StringQueryOperatorInput>
  createdAt: InputMaybe<DateQueryOperatorInput>
  id: InputMaybe<StringQueryOperatorInput>
  imagemBannerMedium: InputMaybe<ContentfulAssetFilterInput>
  internal: InputMaybe<InternalFilterInput>
  link: InputMaybe<StringQueryOperatorInput>
  node_locale: InputMaybe<StringQueryOperatorInput>
  parent: InputMaybe<NodeFilterInput>
  spaceId: InputMaybe<StringQueryOperatorInput>
  sys: InputMaybe<ContentfulBannerMediumSysFilterInput>
  updatedAt: InputMaybe<DateQueryOperatorInput>
}

export type ContentfulBannerMediumGroupConnection = {
  distinct: Array<Scalars['String']>
  edges: Array<ContentfulBannerMediumEdge>
  field: Scalars['String']
  fieldValue: Maybe<Scalars['String']>
  group: Array<ContentfulBannerMediumGroupConnection>
  max: Maybe<Scalars['Float']>
  min: Maybe<Scalars['Float']>
  nodes: Array<ContentfulBannerMedium>
  pageInfo: PageInfo
  sum: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type ContentfulBannerMediumGroupConnectionDistinctArgs = {
  field: ContentfulBannerMediumFieldsEnum
}

export type ContentfulBannerMediumGroupConnectionGroupArgs = {
  field: ContentfulBannerMediumFieldsEnum
  limit: InputMaybe<Scalars['Int']>
  skip: InputMaybe<Scalars['Int']>
}

export type ContentfulBannerMediumGroupConnectionMaxArgs = {
  field: ContentfulBannerMediumFieldsEnum
}

export type ContentfulBannerMediumGroupConnectionMinArgs = {
  field: ContentfulBannerMediumFieldsEnum
}

export type ContentfulBannerMediumGroupConnectionSumArgs = {
  field: ContentfulBannerMediumFieldsEnum
}

export type ContentfulBannerMediumSortInput = {
  fields: InputMaybe<Array<InputMaybe<ContentfulBannerMediumFieldsEnum>>>
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type ContentfulBannerMediumSys = {
  contentType: Maybe<ContentfulBannerMediumSysContentType>
  revision: Maybe<Scalars['Int']>
  type: Maybe<Scalars['String']>
}

export type ContentfulBannerMediumSysContentType = {
  sys: Maybe<ContentfulBannerMediumSysContentTypeSys>
}

export type ContentfulBannerMediumSysContentTypeFilterInput = {
  sys: InputMaybe<ContentfulBannerMediumSysContentTypeSysFilterInput>
}

export type ContentfulBannerMediumSysContentTypeSys = {
  id: Maybe<Scalars['String']>
  linkType: Maybe<Scalars['String']>
  type: Maybe<Scalars['String']>
}

export type ContentfulBannerMediumSysContentTypeSysFilterInput = {
  id: InputMaybe<StringQueryOperatorInput>
  linkType: InputMaybe<StringQueryOperatorInput>
  type: InputMaybe<StringQueryOperatorInput>
}

export type ContentfulBannerMediumSysFilterInput = {
  contentType: InputMaybe<ContentfulBannerMediumSysContentTypeFilterInput>
  revision: InputMaybe<IntQueryOperatorInput>
  type: InputMaybe<StringQueryOperatorInput>
}

export type ContentfulBestCourses = ContentfulEntry &
  ContentfulReference &
  Node & {
    children: Array<Node>
    contentful_id: Scalars['String']
    createdAt: Maybe<Scalars['Date']>
    id: Scalars['ID']
    image: Maybe<ContentfulAsset>
    internal: Internal
    name: Maybe<Scalars['String']>
    node_locale: Scalars['String']
    parent: Maybe<Node>
    slug: Maybe<Scalars['String']>
    spaceId: Maybe<Scalars['String']>
    sys: Maybe<ContentfulBestCoursesSys>
    updatedAt: Maybe<Scalars['Date']>
  }

export type ContentfulBestCoursesCreatedAtArgs = {
  difference: InputMaybe<Scalars['String']>
  formatString: InputMaybe<Scalars['String']>
  fromNow: InputMaybe<Scalars['Boolean']>
  locale: InputMaybe<Scalars['String']>
}

export type ContentfulBestCoursesUpdatedAtArgs = {
  difference: InputMaybe<Scalars['String']>
  formatString: InputMaybe<Scalars['String']>
  fromNow: InputMaybe<Scalars['Boolean']>
  locale: InputMaybe<Scalars['String']>
}

export type ContentfulBestCoursesConnection = {
  distinct: Array<Scalars['String']>
  edges: Array<ContentfulBestCoursesEdge>
  group: Array<ContentfulBestCoursesGroupConnection>
  max: Maybe<Scalars['Float']>
  min: Maybe<Scalars['Float']>
  nodes: Array<ContentfulBestCourses>
  pageInfo: PageInfo
  sum: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type ContentfulBestCoursesConnectionDistinctArgs = {
  field: ContentfulBestCoursesFieldsEnum
}

export type ContentfulBestCoursesConnectionGroupArgs = {
  field: ContentfulBestCoursesFieldsEnum
  limit: InputMaybe<Scalars['Int']>
  skip: InputMaybe<Scalars['Int']>
}

export type ContentfulBestCoursesConnectionMaxArgs = {
  field: ContentfulBestCoursesFieldsEnum
}

export type ContentfulBestCoursesConnectionMinArgs = {
  field: ContentfulBestCoursesFieldsEnum
}

export type ContentfulBestCoursesConnectionSumArgs = {
  field: ContentfulBestCoursesFieldsEnum
}

export type ContentfulBestCoursesEdge = {
  next: Maybe<ContentfulBestCourses>
  node: ContentfulBestCourses
  previous: Maybe<ContentfulBestCourses>
}

export type ContentfulBestCoursesFieldsEnum =
  | 'children'
  | 'children___children'
  | 'children___children___children'
  | 'children___children___children___children'
  | 'children___children___children___id'
  | 'children___children___id'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___parent___children'
  | 'children___children___parent___id'
  | 'children___id'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___parent___children'
  | 'children___parent___children___children'
  | 'children___parent___children___id'
  | 'children___parent___id'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___parent___children'
  | 'children___parent___parent___id'
  | 'contentful_id'
  | 'createdAt'
  | 'id'
  | 'image___children'
  | 'image___children___children'
  | 'image___children___children___children'
  | 'image___children___children___id'
  | 'image___children___id'
  | 'image___children___internal___content'
  | 'image___children___internal___contentDigest'
  | 'image___children___internal___description'
  | 'image___children___internal___fieldOwners'
  | 'image___children___internal___ignoreType'
  | 'image___children___internal___mediaType'
  | 'image___children___internal___owner'
  | 'image___children___internal___type'
  | 'image___children___parent___children'
  | 'image___children___parent___id'
  | 'image___contentful_id'
  | 'image___createdAt'
  | 'image___description'
  | 'image___file___contentType'
  | 'image___file___details___size'
  | 'image___file___fileName'
  | 'image___file___url'
  | 'image___filename'
  | 'image___filesize'
  | 'image___gatsbyImage'
  | 'image___gatsbyImageData'
  | 'image___height'
  | 'image___id'
  | 'image___internal___content'
  | 'image___internal___contentDigest'
  | 'image___internal___description'
  | 'image___internal___fieldOwners'
  | 'image___internal___ignoreType'
  | 'image___internal___mediaType'
  | 'image___internal___owner'
  | 'image___internal___type'
  | 'image___mimeType'
  | 'image___node_locale'
  | 'image___parent___children'
  | 'image___parent___children___children'
  | 'image___parent___children___id'
  | 'image___parent___id'
  | 'image___parent___internal___content'
  | 'image___parent___internal___contentDigest'
  | 'image___parent___internal___description'
  | 'image___parent___internal___fieldOwners'
  | 'image___parent___internal___ignoreType'
  | 'image___parent___internal___mediaType'
  | 'image___parent___internal___owner'
  | 'image___parent___internal___type'
  | 'image___parent___parent___children'
  | 'image___parent___parent___id'
  | 'image___placeholderUrl'
  | 'image___publicUrl'
  | 'image___resize___height'
  | 'image___resize___src'
  | 'image___resize___width'
  | 'image___size'
  | 'image___spaceId'
  | 'image___sys___revision'
  | 'image___sys___type'
  | 'image___title'
  | 'image___updatedAt'
  | 'image___url'
  | 'image___width'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'name'
  | 'node_locale'
  | 'parent___children'
  | 'parent___children___children'
  | 'parent___children___children___children'
  | 'parent___children___children___id'
  | 'parent___children___id'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___parent___children'
  | 'parent___children___parent___id'
  | 'parent___id'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___parent___children'
  | 'parent___parent___children___children'
  | 'parent___parent___children___id'
  | 'parent___parent___id'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___parent___children'
  | 'parent___parent___parent___id'
  | 'slug'
  | 'spaceId'
  | 'sys___contentType___sys___id'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___type'
  | 'sys___revision'
  | 'sys___type'
  | 'updatedAt'

export type ContentfulBestCoursesFilterInput = {
  children: InputMaybe<NodeFilterListInput>
  contentful_id: InputMaybe<StringQueryOperatorInput>
  createdAt: InputMaybe<DateQueryOperatorInput>
  id: InputMaybe<StringQueryOperatorInput>
  image: InputMaybe<ContentfulAssetFilterInput>
  internal: InputMaybe<InternalFilterInput>
  name: InputMaybe<StringQueryOperatorInput>
  node_locale: InputMaybe<StringQueryOperatorInput>
  parent: InputMaybe<NodeFilterInput>
  slug: InputMaybe<StringQueryOperatorInput>
  spaceId: InputMaybe<StringQueryOperatorInput>
  sys: InputMaybe<ContentfulBestCoursesSysFilterInput>
  updatedAt: InputMaybe<DateQueryOperatorInput>
}

export type ContentfulBestCoursesGroupConnection = {
  distinct: Array<Scalars['String']>
  edges: Array<ContentfulBestCoursesEdge>
  field: Scalars['String']
  fieldValue: Maybe<Scalars['String']>
  group: Array<ContentfulBestCoursesGroupConnection>
  max: Maybe<Scalars['Float']>
  min: Maybe<Scalars['Float']>
  nodes: Array<ContentfulBestCourses>
  pageInfo: PageInfo
  sum: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type ContentfulBestCoursesGroupConnectionDistinctArgs = {
  field: ContentfulBestCoursesFieldsEnum
}

export type ContentfulBestCoursesGroupConnectionGroupArgs = {
  field: ContentfulBestCoursesFieldsEnum
  limit: InputMaybe<Scalars['Int']>
  skip: InputMaybe<Scalars['Int']>
}

export type ContentfulBestCoursesGroupConnectionMaxArgs = {
  field: ContentfulBestCoursesFieldsEnum
}

export type ContentfulBestCoursesGroupConnectionMinArgs = {
  field: ContentfulBestCoursesFieldsEnum
}

export type ContentfulBestCoursesGroupConnectionSumArgs = {
  field: ContentfulBestCoursesFieldsEnum
}

export type ContentfulBestCoursesSortInput = {
  fields: InputMaybe<Array<InputMaybe<ContentfulBestCoursesFieldsEnum>>>
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type ContentfulBestCoursesSys = {
  contentType: Maybe<ContentfulBestCoursesSysContentType>
  revision: Maybe<Scalars['Int']>
  type: Maybe<Scalars['String']>
}

export type ContentfulBestCoursesSysContentType = {
  sys: Maybe<ContentfulBestCoursesSysContentTypeSys>
}

export type ContentfulBestCoursesSysContentTypeFilterInput = {
  sys: InputMaybe<ContentfulBestCoursesSysContentTypeSysFilterInput>
}

export type ContentfulBestCoursesSysContentTypeSys = {
  id: Maybe<Scalars['String']>
  linkType: Maybe<Scalars['String']>
  type: Maybe<Scalars['String']>
}

export type ContentfulBestCoursesSysContentTypeSysFilterInput = {
  id: InputMaybe<StringQueryOperatorInput>
  linkType: InputMaybe<StringQueryOperatorInput>
  type: InputMaybe<StringQueryOperatorInput>
}

export type ContentfulBestCoursesSysFilterInput = {
  contentType: InputMaybe<ContentfulBestCoursesSysContentTypeFilterInput>
  revision: InputMaybe<IntQueryOperatorInput>
  type: InputMaybe<StringQueryOperatorInput>
}

export type ContentfulCommonQuestions = ContentfulEntry &
  ContentfulReference &
  Node & {
    answer: Maybe<ContentfulCommonQuestionsAnswerTextNode>
    /** Returns the first child node of type contentfulCommonQuestionsAnswerTextNode or null if there are no children of given type on this node */
    childContentfulCommonQuestionsAnswerTextNode: Maybe<ContentfulCommonQuestionsAnswerTextNode>
    children: Array<Node>
    /** Returns all children nodes filtered by type contentfulCommonQuestionsAnswerTextNode */
    childrenContentfulCommonQuestionsAnswerTextNode: Maybe<
      Array<Maybe<ContentfulCommonQuestionsAnswerTextNode>>
    >
    contentful_id: Scalars['String']
    createdAt: Maybe<Scalars['Date']>
    id: Scalars['ID']
    internal: Internal
    node_locale: Scalars['String']
    parent: Maybe<Node>
    question: Maybe<Scalars['String']>
    spaceId: Maybe<Scalars['String']>
    sys: Maybe<ContentfulCommonQuestionsSys>
    updatedAt: Maybe<Scalars['Date']>
  }

export type ContentfulCommonQuestionsCreatedAtArgs = {
  difference: InputMaybe<Scalars['String']>
  formatString: InputMaybe<Scalars['String']>
  fromNow: InputMaybe<Scalars['Boolean']>
  locale: InputMaybe<Scalars['String']>
}

export type ContentfulCommonQuestionsUpdatedAtArgs = {
  difference: InputMaybe<Scalars['String']>
  formatString: InputMaybe<Scalars['String']>
  fromNow: InputMaybe<Scalars['Boolean']>
  locale: InputMaybe<Scalars['String']>
}

export type ContentfulCommonQuestionsConnection = {
  distinct: Array<Scalars['String']>
  edges: Array<ContentfulCommonQuestionsEdge>
  group: Array<ContentfulCommonQuestionsGroupConnection>
  max: Maybe<Scalars['Float']>
  min: Maybe<Scalars['Float']>
  nodes: Array<ContentfulCommonQuestions>
  pageInfo: PageInfo
  sum: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type ContentfulCommonQuestionsConnectionDistinctArgs = {
  field: ContentfulCommonQuestionsFieldsEnum
}

export type ContentfulCommonQuestionsConnectionGroupArgs = {
  field: ContentfulCommonQuestionsFieldsEnum
  limit: InputMaybe<Scalars['Int']>
  skip: InputMaybe<Scalars['Int']>
}

export type ContentfulCommonQuestionsConnectionMaxArgs = {
  field: ContentfulCommonQuestionsFieldsEnum
}

export type ContentfulCommonQuestionsConnectionMinArgs = {
  field: ContentfulCommonQuestionsFieldsEnum
}

export type ContentfulCommonQuestionsConnectionSumArgs = {
  field: ContentfulCommonQuestionsFieldsEnum
}

export type ContentfulCommonQuestionsEdge = {
  next: Maybe<ContentfulCommonQuestions>
  node: ContentfulCommonQuestions
  previous: Maybe<ContentfulCommonQuestions>
}

export type ContentfulCommonQuestionsFieldsEnum =
  | 'answer___answer'
  | 'answer___children'
  | 'answer___children___children'
  | 'answer___children___children___children'
  | 'answer___children___children___id'
  | 'answer___children___id'
  | 'answer___children___internal___content'
  | 'answer___children___internal___contentDigest'
  | 'answer___children___internal___description'
  | 'answer___children___internal___fieldOwners'
  | 'answer___children___internal___ignoreType'
  | 'answer___children___internal___mediaType'
  | 'answer___children___internal___owner'
  | 'answer___children___internal___type'
  | 'answer___children___parent___children'
  | 'answer___children___parent___id'
  | 'answer___id'
  | 'answer___internal___content'
  | 'answer___internal___contentDigest'
  | 'answer___internal___description'
  | 'answer___internal___fieldOwners'
  | 'answer___internal___ignoreType'
  | 'answer___internal___mediaType'
  | 'answer___internal___owner'
  | 'answer___internal___type'
  | 'answer___parent___children'
  | 'answer___parent___children___children'
  | 'answer___parent___children___id'
  | 'answer___parent___id'
  | 'answer___parent___internal___content'
  | 'answer___parent___internal___contentDigest'
  | 'answer___parent___internal___description'
  | 'answer___parent___internal___fieldOwners'
  | 'answer___parent___internal___ignoreType'
  | 'answer___parent___internal___mediaType'
  | 'answer___parent___internal___owner'
  | 'answer___parent___internal___type'
  | 'answer___parent___parent___children'
  | 'answer___parent___parent___id'
  | 'answer___sys___type'
  | 'childContentfulCommonQuestionsAnswerTextNode___answer'
  | 'childContentfulCommonQuestionsAnswerTextNode___children'
  | 'childContentfulCommonQuestionsAnswerTextNode___children___children'
  | 'childContentfulCommonQuestionsAnswerTextNode___children___children___children'
  | 'childContentfulCommonQuestionsAnswerTextNode___children___children___id'
  | 'childContentfulCommonQuestionsAnswerTextNode___children___id'
  | 'childContentfulCommonQuestionsAnswerTextNode___children___internal___content'
  | 'childContentfulCommonQuestionsAnswerTextNode___children___internal___contentDigest'
  | 'childContentfulCommonQuestionsAnswerTextNode___children___internal___description'
  | 'childContentfulCommonQuestionsAnswerTextNode___children___internal___fieldOwners'
  | 'childContentfulCommonQuestionsAnswerTextNode___children___internal___ignoreType'
  | 'childContentfulCommonQuestionsAnswerTextNode___children___internal___mediaType'
  | 'childContentfulCommonQuestionsAnswerTextNode___children___internal___owner'
  | 'childContentfulCommonQuestionsAnswerTextNode___children___internal___type'
  | 'childContentfulCommonQuestionsAnswerTextNode___children___parent___children'
  | 'childContentfulCommonQuestionsAnswerTextNode___children___parent___id'
  | 'childContentfulCommonQuestionsAnswerTextNode___id'
  | 'childContentfulCommonQuestionsAnswerTextNode___internal___content'
  | 'childContentfulCommonQuestionsAnswerTextNode___internal___contentDigest'
  | 'childContentfulCommonQuestionsAnswerTextNode___internal___description'
  | 'childContentfulCommonQuestionsAnswerTextNode___internal___fieldOwners'
  | 'childContentfulCommonQuestionsAnswerTextNode___internal___ignoreType'
  | 'childContentfulCommonQuestionsAnswerTextNode___internal___mediaType'
  | 'childContentfulCommonQuestionsAnswerTextNode___internal___owner'
  | 'childContentfulCommonQuestionsAnswerTextNode___internal___type'
  | 'childContentfulCommonQuestionsAnswerTextNode___parent___children'
  | 'childContentfulCommonQuestionsAnswerTextNode___parent___children___children'
  | 'childContentfulCommonQuestionsAnswerTextNode___parent___children___id'
  | 'childContentfulCommonQuestionsAnswerTextNode___parent___id'
  | 'childContentfulCommonQuestionsAnswerTextNode___parent___internal___content'
  | 'childContentfulCommonQuestionsAnswerTextNode___parent___internal___contentDigest'
  | 'childContentfulCommonQuestionsAnswerTextNode___parent___internal___description'
  | 'childContentfulCommonQuestionsAnswerTextNode___parent___internal___fieldOwners'
  | 'childContentfulCommonQuestionsAnswerTextNode___parent___internal___ignoreType'
  | 'childContentfulCommonQuestionsAnswerTextNode___parent___internal___mediaType'
  | 'childContentfulCommonQuestionsAnswerTextNode___parent___internal___owner'
  | 'childContentfulCommonQuestionsAnswerTextNode___parent___internal___type'
  | 'childContentfulCommonQuestionsAnswerTextNode___parent___parent___children'
  | 'childContentfulCommonQuestionsAnswerTextNode___parent___parent___id'
  | 'childContentfulCommonQuestionsAnswerTextNode___sys___type'
  | 'children'
  | 'childrenContentfulCommonQuestionsAnswerTextNode'
  | 'childrenContentfulCommonQuestionsAnswerTextNode___answer'
  | 'childrenContentfulCommonQuestionsAnswerTextNode___children'
  | 'childrenContentfulCommonQuestionsAnswerTextNode___children___children'
  | 'childrenContentfulCommonQuestionsAnswerTextNode___children___children___children'
  | 'childrenContentfulCommonQuestionsAnswerTextNode___children___children___id'
  | 'childrenContentfulCommonQuestionsAnswerTextNode___children___id'
  | 'childrenContentfulCommonQuestionsAnswerTextNode___children___internal___content'
  | 'childrenContentfulCommonQuestionsAnswerTextNode___children___internal___contentDigest'
  | 'childrenContentfulCommonQuestionsAnswerTextNode___children___internal___description'
  | 'childrenContentfulCommonQuestionsAnswerTextNode___children___internal___fieldOwners'
  | 'childrenContentfulCommonQuestionsAnswerTextNode___children___internal___ignoreType'
  | 'childrenContentfulCommonQuestionsAnswerTextNode___children___internal___mediaType'
  | 'childrenContentfulCommonQuestionsAnswerTextNode___children___internal___owner'
  | 'childrenContentfulCommonQuestionsAnswerTextNode___children___internal___type'
  | 'childrenContentfulCommonQuestionsAnswerTextNode___children___parent___children'
  | 'childrenContentfulCommonQuestionsAnswerTextNode___children___parent___id'
  | 'childrenContentfulCommonQuestionsAnswerTextNode___id'
  | 'childrenContentfulCommonQuestionsAnswerTextNode___internal___content'
  | 'childrenContentfulCommonQuestionsAnswerTextNode___internal___contentDigest'
  | 'childrenContentfulCommonQuestionsAnswerTextNode___internal___description'
  | 'childrenContentfulCommonQuestionsAnswerTextNode___internal___fieldOwners'
  | 'childrenContentfulCommonQuestionsAnswerTextNode___internal___ignoreType'
  | 'childrenContentfulCommonQuestionsAnswerTextNode___internal___mediaType'
  | 'childrenContentfulCommonQuestionsAnswerTextNode___internal___owner'
  | 'childrenContentfulCommonQuestionsAnswerTextNode___internal___type'
  | 'childrenContentfulCommonQuestionsAnswerTextNode___parent___children'
  | 'childrenContentfulCommonQuestionsAnswerTextNode___parent___children___children'
  | 'childrenContentfulCommonQuestionsAnswerTextNode___parent___children___id'
  | 'childrenContentfulCommonQuestionsAnswerTextNode___parent___id'
  | 'childrenContentfulCommonQuestionsAnswerTextNode___parent___internal___content'
  | 'childrenContentfulCommonQuestionsAnswerTextNode___parent___internal___contentDigest'
  | 'childrenContentfulCommonQuestionsAnswerTextNode___parent___internal___description'
  | 'childrenContentfulCommonQuestionsAnswerTextNode___parent___internal___fieldOwners'
  | 'childrenContentfulCommonQuestionsAnswerTextNode___parent___internal___ignoreType'
  | 'childrenContentfulCommonQuestionsAnswerTextNode___parent___internal___mediaType'
  | 'childrenContentfulCommonQuestionsAnswerTextNode___parent___internal___owner'
  | 'childrenContentfulCommonQuestionsAnswerTextNode___parent___internal___type'
  | 'childrenContentfulCommonQuestionsAnswerTextNode___parent___parent___children'
  | 'childrenContentfulCommonQuestionsAnswerTextNode___parent___parent___id'
  | 'childrenContentfulCommonQuestionsAnswerTextNode___sys___type'
  | 'children___children'
  | 'children___children___children'
  | 'children___children___children___children'
  | 'children___children___children___id'
  | 'children___children___id'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___parent___children'
  | 'children___children___parent___id'
  | 'children___id'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___parent___children'
  | 'children___parent___children___children'
  | 'children___parent___children___id'
  | 'children___parent___id'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___parent___children'
  | 'children___parent___parent___id'
  | 'contentful_id'
  | 'createdAt'
  | 'id'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'node_locale'
  | 'parent___children'
  | 'parent___children___children'
  | 'parent___children___children___children'
  | 'parent___children___children___id'
  | 'parent___children___id'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___parent___children'
  | 'parent___children___parent___id'
  | 'parent___id'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___parent___children'
  | 'parent___parent___children___children'
  | 'parent___parent___children___id'
  | 'parent___parent___id'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___parent___children'
  | 'parent___parent___parent___id'
  | 'question'
  | 'spaceId'
  | 'sys___contentType___sys___id'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___type'
  | 'sys___revision'
  | 'sys___type'
  | 'updatedAt'

export type ContentfulCommonQuestionsFilterInput = {
  answer: InputMaybe<ContentfulCommonQuestionsAnswerTextNodeFilterInput>
  childContentfulCommonQuestionsAnswerTextNode: InputMaybe<ContentfulCommonQuestionsAnswerTextNodeFilterInput>
  children: InputMaybe<NodeFilterListInput>
  childrenContentfulCommonQuestionsAnswerTextNode: InputMaybe<ContentfulCommonQuestionsAnswerTextNodeFilterListInput>
  contentful_id: InputMaybe<StringQueryOperatorInput>
  createdAt: InputMaybe<DateQueryOperatorInput>
  id: InputMaybe<StringQueryOperatorInput>
  internal: InputMaybe<InternalFilterInput>
  node_locale: InputMaybe<StringQueryOperatorInput>
  parent: InputMaybe<NodeFilterInput>
  question: InputMaybe<StringQueryOperatorInput>
  spaceId: InputMaybe<StringQueryOperatorInput>
  sys: InputMaybe<ContentfulCommonQuestionsSysFilterInput>
  updatedAt: InputMaybe<DateQueryOperatorInput>
}

export type ContentfulCommonQuestionsGroupConnection = {
  distinct: Array<Scalars['String']>
  edges: Array<ContentfulCommonQuestionsEdge>
  field: Scalars['String']
  fieldValue: Maybe<Scalars['String']>
  group: Array<ContentfulCommonQuestionsGroupConnection>
  max: Maybe<Scalars['Float']>
  min: Maybe<Scalars['Float']>
  nodes: Array<ContentfulCommonQuestions>
  pageInfo: PageInfo
  sum: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type ContentfulCommonQuestionsGroupConnectionDistinctArgs = {
  field: ContentfulCommonQuestionsFieldsEnum
}

export type ContentfulCommonQuestionsGroupConnectionGroupArgs = {
  field: ContentfulCommonQuestionsFieldsEnum
  limit: InputMaybe<Scalars['Int']>
  skip: InputMaybe<Scalars['Int']>
}

export type ContentfulCommonQuestionsGroupConnectionMaxArgs = {
  field: ContentfulCommonQuestionsFieldsEnum
}

export type ContentfulCommonQuestionsGroupConnectionMinArgs = {
  field: ContentfulCommonQuestionsFieldsEnum
}

export type ContentfulCommonQuestionsGroupConnectionSumArgs = {
  field: ContentfulCommonQuestionsFieldsEnum
}

export type ContentfulCommonQuestionsSortInput = {
  fields: InputMaybe<Array<InputMaybe<ContentfulCommonQuestionsFieldsEnum>>>
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type ContentfulCommonQuestionsSys = {
  contentType: Maybe<ContentfulCommonQuestionsSysContentType>
  revision: Maybe<Scalars['Int']>
  type: Maybe<Scalars['String']>
}

export type ContentfulCommonQuestionsSysContentType = {
  sys: Maybe<ContentfulCommonQuestionsSysContentTypeSys>
}

export type ContentfulCommonQuestionsSysContentTypeFilterInput = {
  sys: InputMaybe<ContentfulCommonQuestionsSysContentTypeSysFilterInput>
}

export type ContentfulCommonQuestionsSysContentTypeSys = {
  id: Maybe<Scalars['String']>
  linkType: Maybe<Scalars['String']>
  type: Maybe<Scalars['String']>
}

export type ContentfulCommonQuestionsSysContentTypeSysFilterInput = {
  id: InputMaybe<StringQueryOperatorInput>
  linkType: InputMaybe<StringQueryOperatorInput>
  type: InputMaybe<StringQueryOperatorInput>
}

export type ContentfulCommonQuestionsSysFilterInput = {
  contentType: InputMaybe<ContentfulCommonQuestionsSysContentTypeFilterInput>
  revision: InputMaybe<IntQueryOperatorInput>
  type: InputMaybe<StringQueryOperatorInput>
}

export type ContentfulContentType = Node & {
  children: Array<Node>
  description: Maybe<Scalars['String']>
  displayField: Maybe<Scalars['String']>
  id: Scalars['ID']
  internal: Internal
  name: Maybe<Scalars['String']>
  parent: Maybe<Node>
  sys: Maybe<ContentfulContentTypeSys>
}

export type ContentfulContentTypeConnection = {
  distinct: Array<Scalars['String']>
  edges: Array<ContentfulContentTypeEdge>
  group: Array<ContentfulContentTypeGroupConnection>
  max: Maybe<Scalars['Float']>
  min: Maybe<Scalars['Float']>
  nodes: Array<ContentfulContentType>
  pageInfo: PageInfo
  sum: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type ContentfulContentTypeConnectionDistinctArgs = {
  field: ContentfulContentTypeFieldsEnum
}

export type ContentfulContentTypeConnectionGroupArgs = {
  field: ContentfulContentTypeFieldsEnum
  limit: InputMaybe<Scalars['Int']>
  skip: InputMaybe<Scalars['Int']>
}

export type ContentfulContentTypeConnectionMaxArgs = {
  field: ContentfulContentTypeFieldsEnum
}

export type ContentfulContentTypeConnectionMinArgs = {
  field: ContentfulContentTypeFieldsEnum
}

export type ContentfulContentTypeConnectionSumArgs = {
  field: ContentfulContentTypeFieldsEnum
}

export type ContentfulContentTypeEdge = {
  next: Maybe<ContentfulContentType>
  node: ContentfulContentType
  previous: Maybe<ContentfulContentType>
}

export type ContentfulContentTypeFieldsEnum =
  | 'children'
  | 'children___children'
  | 'children___children___children'
  | 'children___children___children___children'
  | 'children___children___children___id'
  | 'children___children___id'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___parent___children'
  | 'children___children___parent___id'
  | 'children___id'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___parent___children'
  | 'children___parent___children___children'
  | 'children___parent___children___id'
  | 'children___parent___id'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___parent___children'
  | 'children___parent___parent___id'
  | 'description'
  | 'displayField'
  | 'id'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'name'
  | 'parent___children'
  | 'parent___children___children'
  | 'parent___children___children___children'
  | 'parent___children___children___id'
  | 'parent___children___id'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___parent___children'
  | 'parent___children___parent___id'
  | 'parent___id'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___parent___children'
  | 'parent___parent___children___children'
  | 'parent___parent___children___id'
  | 'parent___parent___id'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___parent___children'
  | 'parent___parent___parent___id'
  | 'sys___type'

export type ContentfulContentTypeFilterInput = {
  children: InputMaybe<NodeFilterListInput>
  description: InputMaybe<StringQueryOperatorInput>
  displayField: InputMaybe<StringQueryOperatorInput>
  id: InputMaybe<StringQueryOperatorInput>
  internal: InputMaybe<InternalFilterInput>
  name: InputMaybe<StringQueryOperatorInput>
  parent: InputMaybe<NodeFilterInput>
  sys: InputMaybe<ContentfulContentTypeSysFilterInput>
}

export type ContentfulContentTypeGroupConnection = {
  distinct: Array<Scalars['String']>
  edges: Array<ContentfulContentTypeEdge>
  field: Scalars['String']
  fieldValue: Maybe<Scalars['String']>
  group: Array<ContentfulContentTypeGroupConnection>
  max: Maybe<Scalars['Float']>
  min: Maybe<Scalars['Float']>
  nodes: Array<ContentfulContentType>
  pageInfo: PageInfo
  sum: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type ContentfulContentTypeGroupConnectionDistinctArgs = {
  field: ContentfulContentTypeFieldsEnum
}

export type ContentfulContentTypeGroupConnectionGroupArgs = {
  field: ContentfulContentTypeFieldsEnum
  limit: InputMaybe<Scalars['Int']>
  skip: InputMaybe<Scalars['Int']>
}

export type ContentfulContentTypeGroupConnectionMaxArgs = {
  field: ContentfulContentTypeFieldsEnum
}

export type ContentfulContentTypeGroupConnectionMinArgs = {
  field: ContentfulContentTypeFieldsEnum
}

export type ContentfulContentTypeGroupConnectionSumArgs = {
  field: ContentfulContentTypeFieldsEnum
}

export type ContentfulContentTypeSortInput = {
  fields: InputMaybe<Array<InputMaybe<ContentfulContentTypeFieldsEnum>>>
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type ContentfulContentTypeSys = {
  type: Maybe<Scalars['String']>
}

export type ContentfulContentTypeSysFilterInput = {
  type: InputMaybe<StringQueryOperatorInput>
}

export type ContentfulEntry = {
  children: Array<Node>
  contentful_id: Scalars['String']
  id: Scalars['ID']
  internal: Internal
  node_locale: Scalars['String']
  parent: Maybe<Node>
}

export type ContentfulEntryConnection = {
  distinct: Array<Scalars['String']>
  edges: Array<ContentfulEntryEdge>
  group: Array<ContentfulEntryGroupConnection>
  max: Maybe<Scalars['Float']>
  min: Maybe<Scalars['Float']>
  nodes: Array<ContentfulEntry>
  pageInfo: PageInfo
  sum: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type ContentfulEntryConnectionDistinctArgs = {
  field: ContentfulEntryFieldsEnum
}

export type ContentfulEntryConnectionGroupArgs = {
  field: ContentfulEntryFieldsEnum
  limit: InputMaybe<Scalars['Int']>
  skip: InputMaybe<Scalars['Int']>
}

export type ContentfulEntryConnectionMaxArgs = {
  field: ContentfulEntryFieldsEnum
}

export type ContentfulEntryConnectionMinArgs = {
  field: ContentfulEntryFieldsEnum
}

export type ContentfulEntryConnectionSumArgs = {
  field: ContentfulEntryFieldsEnum
}

export type ContentfulEntryEdge = {
  next: Maybe<ContentfulEntry>
  node: ContentfulEntry
  previous: Maybe<ContentfulEntry>
}

export type ContentfulEntryFieldsEnum =
  | 'children'
  | 'children___children'
  | 'children___children___children'
  | 'children___children___children___children'
  | 'children___children___children___id'
  | 'children___children___id'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___parent___children'
  | 'children___children___parent___id'
  | 'children___id'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___parent___children'
  | 'children___parent___children___children'
  | 'children___parent___children___id'
  | 'children___parent___id'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___parent___children'
  | 'children___parent___parent___id'
  | 'contentful_id'
  | 'id'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'node_locale'
  | 'parent___children'
  | 'parent___children___children'
  | 'parent___children___children___children'
  | 'parent___children___children___id'
  | 'parent___children___id'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___parent___children'
  | 'parent___children___parent___id'
  | 'parent___id'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___parent___children'
  | 'parent___parent___children___children'
  | 'parent___parent___children___id'
  | 'parent___parent___id'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___parent___children'
  | 'parent___parent___parent___id'

export type ContentfulEntryFilterInput = {
  children: InputMaybe<NodeFilterListInput>
  contentful_id: InputMaybe<StringQueryOperatorInput>
  id: InputMaybe<StringQueryOperatorInput>
  internal: InputMaybe<InternalFilterInput>
  node_locale: InputMaybe<StringQueryOperatorInput>
  parent: InputMaybe<NodeFilterInput>
}

export type ContentfulEntryGroupConnection = {
  distinct: Array<Scalars['String']>
  edges: Array<ContentfulEntryEdge>
  field: Scalars['String']
  fieldValue: Maybe<Scalars['String']>
  group: Array<ContentfulEntryGroupConnection>
  max: Maybe<Scalars['Float']>
  min: Maybe<Scalars['Float']>
  nodes: Array<ContentfulEntry>
  pageInfo: PageInfo
  sum: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type ContentfulEntryGroupConnectionDistinctArgs = {
  field: ContentfulEntryFieldsEnum
}

export type ContentfulEntryGroupConnectionGroupArgs = {
  field: ContentfulEntryFieldsEnum
  limit: InputMaybe<Scalars['Int']>
  skip: InputMaybe<Scalars['Int']>
}

export type ContentfulEntryGroupConnectionMaxArgs = {
  field: ContentfulEntryFieldsEnum
}

export type ContentfulEntryGroupConnectionMinArgs = {
  field: ContentfulEntryFieldsEnum
}

export type ContentfulEntryGroupConnectionSumArgs = {
  field: ContentfulEntryFieldsEnum
}

export type ContentfulEntrySortInput = {
  fields: InputMaybe<Array<InputMaybe<ContentfulEntryFieldsEnum>>>
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type ContentfulImageCropFocus =
  | 'BOTTOM'
  | 'BOTTOM_LEFT'
  | 'BOTTOM_RIGHT'
  | 'CENTER'
  | 'FACE'
  | 'FACES'
  | 'LEFT'
  | 'RIGHT'
  | 'TOP'
  | 'TOP_LEFT'
  | 'TOP_RIGHT'

export type ContentfulInfoproducers = ContentfulEntry &
  ContentfulReference &
  Node & {
    children: Array<Node>
    contentful_id: Scalars['String']
    id: Scalars['ID']
    internal: Internal
    node_locale: Scalars['String']
    parent: Maybe<Node>
  }

export type ContentfulInfoproducersConnection = {
  distinct: Array<Scalars['String']>
  edges: Array<ContentfulInfoproducersEdge>
  group: Array<ContentfulInfoproducersGroupConnection>
  max: Maybe<Scalars['Float']>
  min: Maybe<Scalars['Float']>
  nodes: Array<ContentfulInfoproducers>
  pageInfo: PageInfo
  sum: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type ContentfulInfoproducersConnectionDistinctArgs = {
  field: ContentfulInfoproducersFieldsEnum
}

export type ContentfulInfoproducersConnectionGroupArgs = {
  field: ContentfulInfoproducersFieldsEnum
  limit: InputMaybe<Scalars['Int']>
  skip: InputMaybe<Scalars['Int']>
}

export type ContentfulInfoproducersConnectionMaxArgs = {
  field: ContentfulInfoproducersFieldsEnum
}

export type ContentfulInfoproducersConnectionMinArgs = {
  field: ContentfulInfoproducersFieldsEnum
}

export type ContentfulInfoproducersConnectionSumArgs = {
  field: ContentfulInfoproducersFieldsEnum
}

export type ContentfulInfoproducersEdge = {
  next: Maybe<ContentfulInfoproducers>
  node: ContentfulInfoproducers
  previous: Maybe<ContentfulInfoproducers>
}

export type ContentfulInfoproducersFieldsEnum =
  | 'children'
  | 'children___children'
  | 'children___children___children'
  | 'children___children___children___children'
  | 'children___children___children___id'
  | 'children___children___id'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___parent___children'
  | 'children___children___parent___id'
  | 'children___id'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___parent___children'
  | 'children___parent___children___children'
  | 'children___parent___children___id'
  | 'children___parent___id'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___parent___children'
  | 'children___parent___parent___id'
  | 'contentful_id'
  | 'id'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'node_locale'
  | 'parent___children'
  | 'parent___children___children'
  | 'parent___children___children___children'
  | 'parent___children___children___id'
  | 'parent___children___id'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___parent___children'
  | 'parent___children___parent___id'
  | 'parent___id'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___parent___children'
  | 'parent___parent___children___children'
  | 'parent___parent___children___id'
  | 'parent___parent___id'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___parent___children'
  | 'parent___parent___parent___id'

export type ContentfulInfoproducersFilterInput = {
  children: InputMaybe<NodeFilterListInput>
  contentful_id: InputMaybe<StringQueryOperatorInput>
  id: InputMaybe<StringQueryOperatorInput>
  internal: InputMaybe<InternalFilterInput>
  node_locale: InputMaybe<StringQueryOperatorInput>
  parent: InputMaybe<NodeFilterInput>
}

export type ContentfulInfoproducersGroupConnection = {
  distinct: Array<Scalars['String']>
  edges: Array<ContentfulInfoproducersEdge>
  field: Scalars['String']
  fieldValue: Maybe<Scalars['String']>
  group: Array<ContentfulInfoproducersGroupConnection>
  max: Maybe<Scalars['Float']>
  min: Maybe<Scalars['Float']>
  nodes: Array<ContentfulInfoproducers>
  pageInfo: PageInfo
  sum: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type ContentfulInfoproducersGroupConnectionDistinctArgs = {
  field: ContentfulInfoproducersFieldsEnum
}

export type ContentfulInfoproducersGroupConnectionGroupArgs = {
  field: ContentfulInfoproducersFieldsEnum
  limit: InputMaybe<Scalars['Int']>
  skip: InputMaybe<Scalars['Int']>
}

export type ContentfulInfoproducersGroupConnectionMaxArgs = {
  field: ContentfulInfoproducersFieldsEnum
}

export type ContentfulInfoproducersGroupConnectionMinArgs = {
  field: ContentfulInfoproducersFieldsEnum
}

export type ContentfulInfoproducersGroupConnectionSumArgs = {
  field: ContentfulInfoproducersFieldsEnum
}

export type ContentfulInfoproducersSortInput = {
  fields: InputMaybe<Array<InputMaybe<ContentfulInfoproducersFieldsEnum>>>
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type ContentfulMainBanner = ContentfulEntry &
  ContentfulReference &
  Node & {
    buttonColor: Maybe<Scalars['String']>
    buttonLabel: Maybe<Scalars['String']>
    buttonTextColor: Maybe<Scalars['String']>
    children: Array<Node>
    contentful_id: Scalars['String']
    createdAt: Maybe<Scalars['Date']>
    id: Scalars['ID']
    imageDesktop: Maybe<ContentfulAsset>
    imageMobile: Maybe<ContentfulAsset>
    internal: Internal
    node_locale: Scalars['String']
    parent: Maybe<Node>
    slug: Maybe<Scalars['String']>
    spaceId: Maybe<Scalars['String']>
    subtitle: Maybe<Scalars['String']>
    sys: Maybe<ContentfulMainBannerSys>
    title: Maybe<Scalars['String']>
    updatedAt: Maybe<Scalars['Date']>
  }

export type ContentfulMainBannerCreatedAtArgs = {
  difference: InputMaybe<Scalars['String']>
  formatString: InputMaybe<Scalars['String']>
  fromNow: InputMaybe<Scalars['Boolean']>
  locale: InputMaybe<Scalars['String']>
}

export type ContentfulMainBannerUpdatedAtArgs = {
  difference: InputMaybe<Scalars['String']>
  formatString: InputMaybe<Scalars['String']>
  fromNow: InputMaybe<Scalars['Boolean']>
  locale: InputMaybe<Scalars['String']>
}

export type ContentfulMainBannerConnection = {
  distinct: Array<Scalars['String']>
  edges: Array<ContentfulMainBannerEdge>
  group: Array<ContentfulMainBannerGroupConnection>
  max: Maybe<Scalars['Float']>
  min: Maybe<Scalars['Float']>
  nodes: Array<ContentfulMainBanner>
  pageInfo: PageInfo
  sum: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type ContentfulMainBannerConnectionDistinctArgs = {
  field: ContentfulMainBannerFieldsEnum
}

export type ContentfulMainBannerConnectionGroupArgs = {
  field: ContentfulMainBannerFieldsEnum
  limit: InputMaybe<Scalars['Int']>
  skip: InputMaybe<Scalars['Int']>
}

export type ContentfulMainBannerConnectionMaxArgs = {
  field: ContentfulMainBannerFieldsEnum
}

export type ContentfulMainBannerConnectionMinArgs = {
  field: ContentfulMainBannerFieldsEnum
}

export type ContentfulMainBannerConnectionSumArgs = {
  field: ContentfulMainBannerFieldsEnum
}

export type ContentfulMainBannerEdge = {
  next: Maybe<ContentfulMainBanner>
  node: ContentfulMainBanner
  previous: Maybe<ContentfulMainBanner>
}

export type ContentfulMainBannerFieldsEnum =
  | 'buttonColor'
  | 'buttonLabel'
  | 'buttonTextColor'
  | 'children'
  | 'children___children'
  | 'children___children___children'
  | 'children___children___children___children'
  | 'children___children___children___id'
  | 'children___children___id'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___parent___children'
  | 'children___children___parent___id'
  | 'children___id'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___parent___children'
  | 'children___parent___children___children'
  | 'children___parent___children___id'
  | 'children___parent___id'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___parent___children'
  | 'children___parent___parent___id'
  | 'contentful_id'
  | 'createdAt'
  | 'id'
  | 'imageDesktop___children'
  | 'imageDesktop___children___children'
  | 'imageDesktop___children___children___children'
  | 'imageDesktop___children___children___id'
  | 'imageDesktop___children___id'
  | 'imageDesktop___children___internal___content'
  | 'imageDesktop___children___internal___contentDigest'
  | 'imageDesktop___children___internal___description'
  | 'imageDesktop___children___internal___fieldOwners'
  | 'imageDesktop___children___internal___ignoreType'
  | 'imageDesktop___children___internal___mediaType'
  | 'imageDesktop___children___internal___owner'
  | 'imageDesktop___children___internal___type'
  | 'imageDesktop___children___parent___children'
  | 'imageDesktop___children___parent___id'
  | 'imageDesktop___contentful_id'
  | 'imageDesktop___createdAt'
  | 'imageDesktop___description'
  | 'imageDesktop___file___contentType'
  | 'imageDesktop___file___details___size'
  | 'imageDesktop___file___fileName'
  | 'imageDesktop___file___url'
  | 'imageDesktop___filename'
  | 'imageDesktop___filesize'
  | 'imageDesktop___gatsbyImage'
  | 'imageDesktop___gatsbyImageData'
  | 'imageDesktop___height'
  | 'imageDesktop___id'
  | 'imageDesktop___internal___content'
  | 'imageDesktop___internal___contentDigest'
  | 'imageDesktop___internal___description'
  | 'imageDesktop___internal___fieldOwners'
  | 'imageDesktop___internal___ignoreType'
  | 'imageDesktop___internal___mediaType'
  | 'imageDesktop___internal___owner'
  | 'imageDesktop___internal___type'
  | 'imageDesktop___mimeType'
  | 'imageDesktop___node_locale'
  | 'imageDesktop___parent___children'
  | 'imageDesktop___parent___children___children'
  | 'imageDesktop___parent___children___id'
  | 'imageDesktop___parent___id'
  | 'imageDesktop___parent___internal___content'
  | 'imageDesktop___parent___internal___contentDigest'
  | 'imageDesktop___parent___internal___description'
  | 'imageDesktop___parent___internal___fieldOwners'
  | 'imageDesktop___parent___internal___ignoreType'
  | 'imageDesktop___parent___internal___mediaType'
  | 'imageDesktop___parent___internal___owner'
  | 'imageDesktop___parent___internal___type'
  | 'imageDesktop___parent___parent___children'
  | 'imageDesktop___parent___parent___id'
  | 'imageDesktop___placeholderUrl'
  | 'imageDesktop___publicUrl'
  | 'imageDesktop___resize___height'
  | 'imageDesktop___resize___src'
  | 'imageDesktop___resize___width'
  | 'imageDesktop___size'
  | 'imageDesktop___spaceId'
  | 'imageDesktop___sys___revision'
  | 'imageDesktop___sys___type'
  | 'imageDesktop___title'
  | 'imageDesktop___updatedAt'
  | 'imageDesktop___url'
  | 'imageDesktop___width'
  | 'imageMobile___children'
  | 'imageMobile___children___children'
  | 'imageMobile___children___children___children'
  | 'imageMobile___children___children___id'
  | 'imageMobile___children___id'
  | 'imageMobile___children___internal___content'
  | 'imageMobile___children___internal___contentDigest'
  | 'imageMobile___children___internal___description'
  | 'imageMobile___children___internal___fieldOwners'
  | 'imageMobile___children___internal___ignoreType'
  | 'imageMobile___children___internal___mediaType'
  | 'imageMobile___children___internal___owner'
  | 'imageMobile___children___internal___type'
  | 'imageMobile___children___parent___children'
  | 'imageMobile___children___parent___id'
  | 'imageMobile___contentful_id'
  | 'imageMobile___createdAt'
  | 'imageMobile___description'
  | 'imageMobile___file___contentType'
  | 'imageMobile___file___details___size'
  | 'imageMobile___file___fileName'
  | 'imageMobile___file___url'
  | 'imageMobile___filename'
  | 'imageMobile___filesize'
  | 'imageMobile___gatsbyImage'
  | 'imageMobile___gatsbyImageData'
  | 'imageMobile___height'
  | 'imageMobile___id'
  | 'imageMobile___internal___content'
  | 'imageMobile___internal___contentDigest'
  | 'imageMobile___internal___description'
  | 'imageMobile___internal___fieldOwners'
  | 'imageMobile___internal___ignoreType'
  | 'imageMobile___internal___mediaType'
  | 'imageMobile___internal___owner'
  | 'imageMobile___internal___type'
  | 'imageMobile___mimeType'
  | 'imageMobile___node_locale'
  | 'imageMobile___parent___children'
  | 'imageMobile___parent___children___children'
  | 'imageMobile___parent___children___id'
  | 'imageMobile___parent___id'
  | 'imageMobile___parent___internal___content'
  | 'imageMobile___parent___internal___contentDigest'
  | 'imageMobile___parent___internal___description'
  | 'imageMobile___parent___internal___fieldOwners'
  | 'imageMobile___parent___internal___ignoreType'
  | 'imageMobile___parent___internal___mediaType'
  | 'imageMobile___parent___internal___owner'
  | 'imageMobile___parent___internal___type'
  | 'imageMobile___parent___parent___children'
  | 'imageMobile___parent___parent___id'
  | 'imageMobile___placeholderUrl'
  | 'imageMobile___publicUrl'
  | 'imageMobile___resize___height'
  | 'imageMobile___resize___src'
  | 'imageMobile___resize___width'
  | 'imageMobile___size'
  | 'imageMobile___spaceId'
  | 'imageMobile___sys___revision'
  | 'imageMobile___sys___type'
  | 'imageMobile___title'
  | 'imageMobile___updatedAt'
  | 'imageMobile___url'
  | 'imageMobile___width'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'node_locale'
  | 'parent___children'
  | 'parent___children___children'
  | 'parent___children___children___children'
  | 'parent___children___children___id'
  | 'parent___children___id'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___parent___children'
  | 'parent___children___parent___id'
  | 'parent___id'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___parent___children'
  | 'parent___parent___children___children'
  | 'parent___parent___children___id'
  | 'parent___parent___id'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___parent___children'
  | 'parent___parent___parent___id'
  | 'slug'
  | 'spaceId'
  | 'subtitle'
  | 'sys___contentType___sys___id'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___type'
  | 'sys___revision'
  | 'sys___type'
  | 'title'
  | 'updatedAt'

export type ContentfulMainBannerFilterInput = {
  buttonColor: InputMaybe<StringQueryOperatorInput>
  buttonLabel: InputMaybe<StringQueryOperatorInput>
  buttonTextColor: InputMaybe<StringQueryOperatorInput>
  children: InputMaybe<NodeFilterListInput>
  contentful_id: InputMaybe<StringQueryOperatorInput>
  createdAt: InputMaybe<DateQueryOperatorInput>
  id: InputMaybe<StringQueryOperatorInput>
  imageDesktop: InputMaybe<ContentfulAssetFilterInput>
  imageMobile: InputMaybe<ContentfulAssetFilterInput>
  internal: InputMaybe<InternalFilterInput>
  node_locale: InputMaybe<StringQueryOperatorInput>
  parent: InputMaybe<NodeFilterInput>
  slug: InputMaybe<StringQueryOperatorInput>
  spaceId: InputMaybe<StringQueryOperatorInput>
  subtitle: InputMaybe<StringQueryOperatorInput>
  sys: InputMaybe<ContentfulMainBannerSysFilterInput>
  title: InputMaybe<StringQueryOperatorInput>
  updatedAt: InputMaybe<DateQueryOperatorInput>
}

export type ContentfulMainBannerGroupConnection = {
  distinct: Array<Scalars['String']>
  edges: Array<ContentfulMainBannerEdge>
  field: Scalars['String']
  fieldValue: Maybe<Scalars['String']>
  group: Array<ContentfulMainBannerGroupConnection>
  max: Maybe<Scalars['Float']>
  min: Maybe<Scalars['Float']>
  nodes: Array<ContentfulMainBanner>
  pageInfo: PageInfo
  sum: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type ContentfulMainBannerGroupConnectionDistinctArgs = {
  field: ContentfulMainBannerFieldsEnum
}

export type ContentfulMainBannerGroupConnectionGroupArgs = {
  field: ContentfulMainBannerFieldsEnum
  limit: InputMaybe<Scalars['Int']>
  skip: InputMaybe<Scalars['Int']>
}

export type ContentfulMainBannerGroupConnectionMaxArgs = {
  field: ContentfulMainBannerFieldsEnum
}

export type ContentfulMainBannerGroupConnectionMinArgs = {
  field: ContentfulMainBannerFieldsEnum
}

export type ContentfulMainBannerGroupConnectionSumArgs = {
  field: ContentfulMainBannerFieldsEnum
}

export type ContentfulMainBannerSortInput = {
  fields: InputMaybe<Array<InputMaybe<ContentfulMainBannerFieldsEnum>>>
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type ContentfulMainBannerSys = {
  contentType: Maybe<ContentfulMainBannerSysContentType>
  revision: Maybe<Scalars['Int']>
  type: Maybe<Scalars['String']>
}

export type ContentfulMainBannerSysContentType = {
  sys: Maybe<ContentfulMainBannerSysContentTypeSys>
}

export type ContentfulMainBannerSysContentTypeFilterInput = {
  sys: InputMaybe<ContentfulMainBannerSysContentTypeSysFilterInput>
}

export type ContentfulMainBannerSysContentTypeSys = {
  id: Maybe<Scalars['String']>
  linkType: Maybe<Scalars['String']>
  type: Maybe<Scalars['String']>
}

export type ContentfulMainBannerSysContentTypeSysFilterInput = {
  id: InputMaybe<StringQueryOperatorInput>
  linkType: InputMaybe<StringQueryOperatorInput>
  type: InputMaybe<StringQueryOperatorInput>
}

export type ContentfulMainBannerSysFilterInput = {
  contentType: InputMaybe<ContentfulMainBannerSysContentTypeFilterInput>
  revision: InputMaybe<IntQueryOperatorInput>
  type: InputMaybe<StringQueryOperatorInput>
}

export type ContentfulPartners = ContentfulEntry &
  ContentfulReference &
  Node & {
    children: Array<Node>
    contentful_id: Scalars['String']
    id: Scalars['ID']
    internal: Internal
    node_locale: Scalars['String']
    parent: Maybe<Node>
  }

export type ContentfulPartnersConnection = {
  distinct: Array<Scalars['String']>
  edges: Array<ContentfulPartnersEdge>
  group: Array<ContentfulPartnersGroupConnection>
  max: Maybe<Scalars['Float']>
  min: Maybe<Scalars['Float']>
  nodes: Array<ContentfulPartners>
  pageInfo: PageInfo
  sum: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type ContentfulPartnersConnectionDistinctArgs = {
  field: ContentfulPartnersFieldsEnum
}

export type ContentfulPartnersConnectionGroupArgs = {
  field: ContentfulPartnersFieldsEnum
  limit: InputMaybe<Scalars['Int']>
  skip: InputMaybe<Scalars['Int']>
}

export type ContentfulPartnersConnectionMaxArgs = {
  field: ContentfulPartnersFieldsEnum
}

export type ContentfulPartnersConnectionMinArgs = {
  field: ContentfulPartnersFieldsEnum
}

export type ContentfulPartnersConnectionSumArgs = {
  field: ContentfulPartnersFieldsEnum
}

export type ContentfulPartnersEdge = {
  next: Maybe<ContentfulPartners>
  node: ContentfulPartners
  previous: Maybe<ContentfulPartners>
}

export type ContentfulPartnersFieldsEnum =
  | 'children'
  | 'children___children'
  | 'children___children___children'
  | 'children___children___children___children'
  | 'children___children___children___id'
  | 'children___children___id'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___parent___children'
  | 'children___children___parent___id'
  | 'children___id'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___parent___children'
  | 'children___parent___children___children'
  | 'children___parent___children___id'
  | 'children___parent___id'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___parent___children'
  | 'children___parent___parent___id'
  | 'contentful_id'
  | 'id'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'node_locale'
  | 'parent___children'
  | 'parent___children___children'
  | 'parent___children___children___children'
  | 'parent___children___children___id'
  | 'parent___children___id'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___parent___children'
  | 'parent___children___parent___id'
  | 'parent___id'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___parent___children'
  | 'parent___parent___children___children'
  | 'parent___parent___children___id'
  | 'parent___parent___id'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___parent___children'
  | 'parent___parent___parent___id'

export type ContentfulPartnersFilterInput = {
  children: InputMaybe<NodeFilterListInput>
  contentful_id: InputMaybe<StringQueryOperatorInput>
  id: InputMaybe<StringQueryOperatorInput>
  internal: InputMaybe<InternalFilterInput>
  node_locale: InputMaybe<StringQueryOperatorInput>
  parent: InputMaybe<NodeFilterInput>
}

export type ContentfulPartnersGroupConnection = {
  distinct: Array<Scalars['String']>
  edges: Array<ContentfulPartnersEdge>
  field: Scalars['String']
  fieldValue: Maybe<Scalars['String']>
  group: Array<ContentfulPartnersGroupConnection>
  max: Maybe<Scalars['Float']>
  min: Maybe<Scalars['Float']>
  nodes: Array<ContentfulPartners>
  pageInfo: PageInfo
  sum: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type ContentfulPartnersGroupConnectionDistinctArgs = {
  field: ContentfulPartnersFieldsEnum
}

export type ContentfulPartnersGroupConnectionGroupArgs = {
  field: ContentfulPartnersFieldsEnum
  limit: InputMaybe<Scalars['Int']>
  skip: InputMaybe<Scalars['Int']>
}

export type ContentfulPartnersGroupConnectionMaxArgs = {
  field: ContentfulPartnersFieldsEnum
}

export type ContentfulPartnersGroupConnectionMinArgs = {
  field: ContentfulPartnersFieldsEnum
}

export type ContentfulPartnersGroupConnectionSumArgs = {
  field: ContentfulPartnersFieldsEnum
}

export type ContentfulPartnersSortInput = {
  fields: InputMaybe<Array<InputMaybe<ContentfulPartnersFieldsEnum>>>
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type ContentfulReference = {
  contentful_id: Scalars['String']
  id: Scalars['ID']
}

export type ContentfulTeste = ContentfulEntry &
  ContentfulReference &
  Node & {
    children: Array<Node>
    contentful_id: Scalars['String']
    id: Scalars['ID']
    internal: Internal
    node_locale: Scalars['String']
    parent: Maybe<Node>
  }

export type ContentfulTesteConnection = {
  distinct: Array<Scalars['String']>
  edges: Array<ContentfulTesteEdge>
  group: Array<ContentfulTesteGroupConnection>
  max: Maybe<Scalars['Float']>
  min: Maybe<Scalars['Float']>
  nodes: Array<ContentfulTeste>
  pageInfo: PageInfo
  sum: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type ContentfulTesteConnectionDistinctArgs = {
  field: ContentfulTesteFieldsEnum
}

export type ContentfulTesteConnectionGroupArgs = {
  field: ContentfulTesteFieldsEnum
  limit: InputMaybe<Scalars['Int']>
  skip: InputMaybe<Scalars['Int']>
}

export type ContentfulTesteConnectionMaxArgs = {
  field: ContentfulTesteFieldsEnum
}

export type ContentfulTesteConnectionMinArgs = {
  field: ContentfulTesteFieldsEnum
}

export type ContentfulTesteConnectionSumArgs = {
  field: ContentfulTesteFieldsEnum
}

export type ContentfulTesteEdge = {
  next: Maybe<ContentfulTeste>
  node: ContentfulTeste
  previous: Maybe<ContentfulTeste>
}

export type ContentfulTesteFieldsEnum =
  | 'children'
  | 'children___children'
  | 'children___children___children'
  | 'children___children___children___children'
  | 'children___children___children___id'
  | 'children___children___id'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___parent___children'
  | 'children___children___parent___id'
  | 'children___id'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___parent___children'
  | 'children___parent___children___children'
  | 'children___parent___children___id'
  | 'children___parent___id'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___parent___children'
  | 'children___parent___parent___id'
  | 'contentful_id'
  | 'id'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'node_locale'
  | 'parent___children'
  | 'parent___children___children'
  | 'parent___children___children___children'
  | 'parent___children___children___id'
  | 'parent___children___id'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___parent___children'
  | 'parent___children___parent___id'
  | 'parent___id'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___parent___children'
  | 'parent___parent___children___children'
  | 'parent___parent___children___id'
  | 'parent___parent___id'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___parent___children'
  | 'parent___parent___parent___id'

export type ContentfulTesteFilterInput = {
  children: InputMaybe<NodeFilterListInput>
  contentful_id: InputMaybe<StringQueryOperatorInput>
  id: InputMaybe<StringQueryOperatorInput>
  internal: InputMaybe<InternalFilterInput>
  node_locale: InputMaybe<StringQueryOperatorInput>
  parent: InputMaybe<NodeFilterInput>
}

export type ContentfulTesteGroupConnection = {
  distinct: Array<Scalars['String']>
  edges: Array<ContentfulTesteEdge>
  field: Scalars['String']
  fieldValue: Maybe<Scalars['String']>
  group: Array<ContentfulTesteGroupConnection>
  max: Maybe<Scalars['Float']>
  min: Maybe<Scalars['Float']>
  nodes: Array<ContentfulTeste>
  pageInfo: PageInfo
  sum: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type ContentfulTesteGroupConnectionDistinctArgs = {
  field: ContentfulTesteFieldsEnum
}

export type ContentfulTesteGroupConnectionGroupArgs = {
  field: ContentfulTesteFieldsEnum
  limit: InputMaybe<Scalars['Int']>
  skip: InputMaybe<Scalars['Int']>
}

export type ContentfulTesteGroupConnectionMaxArgs = {
  field: ContentfulTesteFieldsEnum
}

export type ContentfulTesteGroupConnectionMinArgs = {
  field: ContentfulTesteFieldsEnum
}

export type ContentfulTesteGroupConnectionSumArgs = {
  field: ContentfulTesteFieldsEnum
}

export type ContentfulTesteSortInput = {
  fields: InputMaybe<Array<InputMaybe<ContentfulTesteFieldsEnum>>>
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type ContentfulVideoSection = ContentfulEntry &
  ContentfulReference &
  Node & {
    buttonText: Maybe<Scalars['String']>
    buttonUrl: Maybe<Scalars['String']>
    children: Array<Node>
    content: Maybe<Scalars['String']>
    contentful_id: Scalars['String']
    createdAt: Maybe<Scalars['Date']>
    id: Scalars['ID']
    internal: Internal
    node_locale: Scalars['String']
    parent: Maybe<Node>
    spaceId: Maybe<Scalars['String']>
    sys: Maybe<ContentfulVideoSectionSys>
    title: Maybe<Scalars['String']>
    updatedAt: Maybe<Scalars['Date']>
    video: Maybe<ContentfulAsset>
    videoUrl: Maybe<Scalars['String']>
  }

export type ContentfulVideoSectionCreatedAtArgs = {
  difference: InputMaybe<Scalars['String']>
  formatString: InputMaybe<Scalars['String']>
  fromNow: InputMaybe<Scalars['Boolean']>
  locale: InputMaybe<Scalars['String']>
}

export type ContentfulVideoSectionUpdatedAtArgs = {
  difference: InputMaybe<Scalars['String']>
  formatString: InputMaybe<Scalars['String']>
  fromNow: InputMaybe<Scalars['Boolean']>
  locale: InputMaybe<Scalars['String']>
}

export type ContentfulVideoSectionConnection = {
  distinct: Array<Scalars['String']>
  edges: Array<ContentfulVideoSectionEdge>
  group: Array<ContentfulVideoSectionGroupConnection>
  max: Maybe<Scalars['Float']>
  min: Maybe<Scalars['Float']>
  nodes: Array<ContentfulVideoSection>
  pageInfo: PageInfo
  sum: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type ContentfulVideoSectionConnectionDistinctArgs = {
  field: ContentfulVideoSectionFieldsEnum
}

export type ContentfulVideoSectionConnectionGroupArgs = {
  field: ContentfulVideoSectionFieldsEnum
  limit: InputMaybe<Scalars['Int']>
  skip: InputMaybe<Scalars['Int']>
}

export type ContentfulVideoSectionConnectionMaxArgs = {
  field: ContentfulVideoSectionFieldsEnum
}

export type ContentfulVideoSectionConnectionMinArgs = {
  field: ContentfulVideoSectionFieldsEnum
}

export type ContentfulVideoSectionConnectionSumArgs = {
  field: ContentfulVideoSectionFieldsEnum
}

export type ContentfulVideoSectionEdge = {
  next: Maybe<ContentfulVideoSection>
  node: ContentfulVideoSection
  previous: Maybe<ContentfulVideoSection>
}

export type ContentfulVideoSectionFieldsEnum =
  | 'buttonText'
  | 'buttonUrl'
  | 'children'
  | 'children___children'
  | 'children___children___children'
  | 'children___children___children___children'
  | 'children___children___children___id'
  | 'children___children___id'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___parent___children'
  | 'children___children___parent___id'
  | 'children___id'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___parent___children'
  | 'children___parent___children___children'
  | 'children___parent___children___id'
  | 'children___parent___id'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___parent___children'
  | 'children___parent___parent___id'
  | 'content'
  | 'contentful_id'
  | 'createdAt'
  | 'id'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'node_locale'
  | 'parent___children'
  | 'parent___children___children'
  | 'parent___children___children___children'
  | 'parent___children___children___id'
  | 'parent___children___id'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___parent___children'
  | 'parent___children___parent___id'
  | 'parent___id'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___parent___children'
  | 'parent___parent___children___children'
  | 'parent___parent___children___id'
  | 'parent___parent___id'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___parent___children'
  | 'parent___parent___parent___id'
  | 'spaceId'
  | 'sys___contentType___sys___id'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___type'
  | 'sys___revision'
  | 'sys___type'
  | 'title'
  | 'updatedAt'
  | 'videoUrl'
  | 'video___children'
  | 'video___children___children'
  | 'video___children___children___children'
  | 'video___children___children___id'
  | 'video___children___id'
  | 'video___children___internal___content'
  | 'video___children___internal___contentDigest'
  | 'video___children___internal___description'
  | 'video___children___internal___fieldOwners'
  | 'video___children___internal___ignoreType'
  | 'video___children___internal___mediaType'
  | 'video___children___internal___owner'
  | 'video___children___internal___type'
  | 'video___children___parent___children'
  | 'video___children___parent___id'
  | 'video___contentful_id'
  | 'video___createdAt'
  | 'video___description'
  | 'video___file___contentType'
  | 'video___file___details___size'
  | 'video___file___fileName'
  | 'video___file___url'
  | 'video___filename'
  | 'video___filesize'
  | 'video___gatsbyImage'
  | 'video___gatsbyImageData'
  | 'video___height'
  | 'video___id'
  | 'video___internal___content'
  | 'video___internal___contentDigest'
  | 'video___internal___description'
  | 'video___internal___fieldOwners'
  | 'video___internal___ignoreType'
  | 'video___internal___mediaType'
  | 'video___internal___owner'
  | 'video___internal___type'
  | 'video___mimeType'
  | 'video___node_locale'
  | 'video___parent___children'
  | 'video___parent___children___children'
  | 'video___parent___children___id'
  | 'video___parent___id'
  | 'video___parent___internal___content'
  | 'video___parent___internal___contentDigest'
  | 'video___parent___internal___description'
  | 'video___parent___internal___fieldOwners'
  | 'video___parent___internal___ignoreType'
  | 'video___parent___internal___mediaType'
  | 'video___parent___internal___owner'
  | 'video___parent___internal___type'
  | 'video___parent___parent___children'
  | 'video___parent___parent___id'
  | 'video___placeholderUrl'
  | 'video___publicUrl'
  | 'video___resize___height'
  | 'video___resize___src'
  | 'video___resize___width'
  | 'video___size'
  | 'video___spaceId'
  | 'video___sys___revision'
  | 'video___sys___type'
  | 'video___title'
  | 'video___updatedAt'
  | 'video___url'
  | 'video___width'

export type ContentfulVideoSectionFilterInput = {
  buttonText: InputMaybe<StringQueryOperatorInput>
  buttonUrl: InputMaybe<StringQueryOperatorInput>
  children: InputMaybe<NodeFilterListInput>
  content: InputMaybe<StringQueryOperatorInput>
  contentful_id: InputMaybe<StringQueryOperatorInput>
  createdAt: InputMaybe<DateQueryOperatorInput>
  id: InputMaybe<StringQueryOperatorInput>
  internal: InputMaybe<InternalFilterInput>
  node_locale: InputMaybe<StringQueryOperatorInput>
  parent: InputMaybe<NodeFilterInput>
  spaceId: InputMaybe<StringQueryOperatorInput>
  sys: InputMaybe<ContentfulVideoSectionSysFilterInput>
  title: InputMaybe<StringQueryOperatorInput>
  updatedAt: InputMaybe<DateQueryOperatorInput>
  video: InputMaybe<ContentfulAssetFilterInput>
  videoUrl: InputMaybe<StringQueryOperatorInput>
}

export type ContentfulVideoSectionGroupConnection = {
  distinct: Array<Scalars['String']>
  edges: Array<ContentfulVideoSectionEdge>
  field: Scalars['String']
  fieldValue: Maybe<Scalars['String']>
  group: Array<ContentfulVideoSectionGroupConnection>
  max: Maybe<Scalars['Float']>
  min: Maybe<Scalars['Float']>
  nodes: Array<ContentfulVideoSection>
  pageInfo: PageInfo
  sum: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type ContentfulVideoSectionGroupConnectionDistinctArgs = {
  field: ContentfulVideoSectionFieldsEnum
}

export type ContentfulVideoSectionGroupConnectionGroupArgs = {
  field: ContentfulVideoSectionFieldsEnum
  limit: InputMaybe<Scalars['Int']>
  skip: InputMaybe<Scalars['Int']>
}

export type ContentfulVideoSectionGroupConnectionMaxArgs = {
  field: ContentfulVideoSectionFieldsEnum
}

export type ContentfulVideoSectionGroupConnectionMinArgs = {
  field: ContentfulVideoSectionFieldsEnum
}

export type ContentfulVideoSectionGroupConnectionSumArgs = {
  field: ContentfulVideoSectionFieldsEnum
}

export type ContentfulVideoSectionSortInput = {
  fields: InputMaybe<Array<InputMaybe<ContentfulVideoSectionFieldsEnum>>>
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type ContentfulVideoSectionSys = {
  contentType: Maybe<ContentfulVideoSectionSysContentType>
  revision: Maybe<Scalars['Int']>
  type: Maybe<Scalars['String']>
}

export type ContentfulVideoSectionSysContentType = {
  sys: Maybe<ContentfulVideoSectionSysContentTypeSys>
}

export type ContentfulVideoSectionSysContentTypeFilterInput = {
  sys: InputMaybe<ContentfulVideoSectionSysContentTypeSysFilterInput>
}

export type ContentfulVideoSectionSysContentTypeSys = {
  id: Maybe<Scalars['String']>
  linkType: Maybe<Scalars['String']>
  type: Maybe<Scalars['String']>
}

export type ContentfulVideoSectionSysContentTypeSysFilterInput = {
  id: InputMaybe<StringQueryOperatorInput>
  linkType: InputMaybe<StringQueryOperatorInput>
  type: InputMaybe<StringQueryOperatorInput>
}

export type ContentfulVideoSectionSysFilterInput = {
  contentType: InputMaybe<ContentfulVideoSectionSysContentTypeFilterInput>
  revision: InputMaybe<IntQueryOperatorInput>
  type: InputMaybe<StringQueryOperatorInput>
}

export type DateQueryOperatorInput = {
  eq: InputMaybe<Scalars['Date']>
  gt: InputMaybe<Scalars['Date']>
  gte: InputMaybe<Scalars['Date']>
  in: InputMaybe<Array<InputMaybe<Scalars['Date']>>>
  lt: InputMaybe<Scalars['Date']>
  lte: InputMaybe<Scalars['Date']>
  ne: InputMaybe<Scalars['Date']>
  nin: InputMaybe<Array<InputMaybe<Scalars['Date']>>>
}

export type Directory = Node & {
  absolutePath: Scalars['String']
  accessTime: Scalars['Date']
  atime: Scalars['Date']
  atimeMs: Scalars['Float']
  base: Scalars['String']
  birthTime: Scalars['Date']
  /** @deprecated Use `birthTime` instead */
  birthtime: Maybe<Scalars['Date']>
  /** @deprecated Use `birthTime` instead */
  birthtimeMs: Maybe<Scalars['Float']>
  changeTime: Scalars['Date']
  children: Array<Node>
  ctime: Scalars['Date']
  ctimeMs: Scalars['Float']
  dev: Scalars['Int']
  dir: Scalars['String']
  ext: Scalars['String']
  extension: Scalars['String']
  gid: Scalars['Int']
  id: Scalars['ID']
  ino: Scalars['Float']
  internal: Internal
  mode: Scalars['Int']
  modifiedTime: Scalars['Date']
  mtime: Scalars['Date']
  mtimeMs: Scalars['Float']
  name: Scalars['String']
  nlink: Scalars['Int']
  parent: Maybe<Node>
  prettySize: Scalars['String']
  rdev: Scalars['Int']
  relativeDirectory: Scalars['String']
  relativePath: Scalars['String']
  root: Scalars['String']
  size: Scalars['Int']
  sourceInstanceName: Scalars['String']
  uid: Scalars['Int']
}

export type DirectoryAccessTimeArgs = {
  difference: InputMaybe<Scalars['String']>
  formatString: InputMaybe<Scalars['String']>
  fromNow: InputMaybe<Scalars['Boolean']>
  locale: InputMaybe<Scalars['String']>
}

export type DirectoryAtimeArgs = {
  difference: InputMaybe<Scalars['String']>
  formatString: InputMaybe<Scalars['String']>
  fromNow: InputMaybe<Scalars['Boolean']>
  locale: InputMaybe<Scalars['String']>
}

export type DirectoryBirthTimeArgs = {
  difference: InputMaybe<Scalars['String']>
  formatString: InputMaybe<Scalars['String']>
  fromNow: InputMaybe<Scalars['Boolean']>
  locale: InputMaybe<Scalars['String']>
}

export type DirectoryChangeTimeArgs = {
  difference: InputMaybe<Scalars['String']>
  formatString: InputMaybe<Scalars['String']>
  fromNow: InputMaybe<Scalars['Boolean']>
  locale: InputMaybe<Scalars['String']>
}

export type DirectoryCtimeArgs = {
  difference: InputMaybe<Scalars['String']>
  formatString: InputMaybe<Scalars['String']>
  fromNow: InputMaybe<Scalars['Boolean']>
  locale: InputMaybe<Scalars['String']>
}

export type DirectoryModifiedTimeArgs = {
  difference: InputMaybe<Scalars['String']>
  formatString: InputMaybe<Scalars['String']>
  fromNow: InputMaybe<Scalars['Boolean']>
  locale: InputMaybe<Scalars['String']>
}

export type DirectoryMtimeArgs = {
  difference: InputMaybe<Scalars['String']>
  formatString: InputMaybe<Scalars['String']>
  fromNow: InputMaybe<Scalars['Boolean']>
  locale: InputMaybe<Scalars['String']>
}

export type DirectoryConnection = {
  distinct: Array<Scalars['String']>
  edges: Array<DirectoryEdge>
  group: Array<DirectoryGroupConnection>
  max: Maybe<Scalars['Float']>
  min: Maybe<Scalars['Float']>
  nodes: Array<Directory>
  pageInfo: PageInfo
  sum: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum
}

export type DirectoryConnectionGroupArgs = {
  field: DirectoryFieldsEnum
  limit: InputMaybe<Scalars['Int']>
  skip: InputMaybe<Scalars['Int']>
}

export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldsEnum
}

export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldsEnum
}

export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldsEnum
}

export type DirectoryEdge = {
  next: Maybe<Directory>
  node: Directory
  previous: Maybe<Directory>
}

export type DirectoryFieldsEnum =
  | 'absolutePath'
  | 'accessTime'
  | 'atime'
  | 'atimeMs'
  | 'base'
  | 'birthTime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'changeTime'
  | 'children'
  | 'children___children'
  | 'children___children___children'
  | 'children___children___children___children'
  | 'children___children___children___id'
  | 'children___children___id'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___parent___children'
  | 'children___children___parent___id'
  | 'children___id'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___parent___children'
  | 'children___parent___children___children'
  | 'children___parent___children___id'
  | 'children___parent___id'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___parent___children'
  | 'children___parent___parent___id'
  | 'ctime'
  | 'ctimeMs'
  | 'dev'
  | 'dir'
  | 'ext'
  | 'extension'
  | 'gid'
  | 'id'
  | 'ino'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'mode'
  | 'modifiedTime'
  | 'mtime'
  | 'mtimeMs'
  | 'name'
  | 'nlink'
  | 'parent___children'
  | 'parent___children___children'
  | 'parent___children___children___children'
  | 'parent___children___children___id'
  | 'parent___children___id'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___parent___children'
  | 'parent___children___parent___id'
  | 'parent___id'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___parent___children'
  | 'parent___parent___children___children'
  | 'parent___parent___children___id'
  | 'parent___parent___id'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___parent___children'
  | 'parent___parent___parent___id'
  | 'prettySize'
  | 'rdev'
  | 'relativeDirectory'
  | 'relativePath'
  | 'root'
  | 'size'
  | 'sourceInstanceName'
  | 'uid'

export type DirectoryFilterInput = {
  absolutePath: InputMaybe<StringQueryOperatorInput>
  accessTime: InputMaybe<DateQueryOperatorInput>
  atime: InputMaybe<DateQueryOperatorInput>
  atimeMs: InputMaybe<FloatQueryOperatorInput>
  base: InputMaybe<StringQueryOperatorInput>
  birthTime: InputMaybe<DateQueryOperatorInput>
  birthtime: InputMaybe<DateQueryOperatorInput>
  birthtimeMs: InputMaybe<FloatQueryOperatorInput>
  changeTime: InputMaybe<DateQueryOperatorInput>
  children: InputMaybe<NodeFilterListInput>
  ctime: InputMaybe<DateQueryOperatorInput>
  ctimeMs: InputMaybe<FloatQueryOperatorInput>
  dev: InputMaybe<IntQueryOperatorInput>
  dir: InputMaybe<StringQueryOperatorInput>
  ext: InputMaybe<StringQueryOperatorInput>
  extension: InputMaybe<StringQueryOperatorInput>
  gid: InputMaybe<IntQueryOperatorInput>
  id: InputMaybe<StringQueryOperatorInput>
  ino: InputMaybe<FloatQueryOperatorInput>
  internal: InputMaybe<InternalFilterInput>
  mode: InputMaybe<IntQueryOperatorInput>
  modifiedTime: InputMaybe<DateQueryOperatorInput>
  mtime: InputMaybe<DateQueryOperatorInput>
  mtimeMs: InputMaybe<FloatQueryOperatorInput>
  name: InputMaybe<StringQueryOperatorInput>
  nlink: InputMaybe<IntQueryOperatorInput>
  parent: InputMaybe<NodeFilterInput>
  prettySize: InputMaybe<StringQueryOperatorInput>
  rdev: InputMaybe<IntQueryOperatorInput>
  relativeDirectory: InputMaybe<StringQueryOperatorInput>
  relativePath: InputMaybe<StringQueryOperatorInput>
  root: InputMaybe<StringQueryOperatorInput>
  size: InputMaybe<IntQueryOperatorInput>
  sourceInstanceName: InputMaybe<StringQueryOperatorInput>
  uid: InputMaybe<IntQueryOperatorInput>
}

export type DirectoryGroupConnection = {
  distinct: Array<Scalars['String']>
  edges: Array<DirectoryEdge>
  field: Scalars['String']
  fieldValue: Maybe<Scalars['String']>
  group: Array<DirectoryGroupConnection>
  max: Maybe<Scalars['Float']>
  min: Maybe<Scalars['Float']>
  nodes: Array<Directory>
  pageInfo: PageInfo
  sum: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type DirectoryGroupConnectionDistinctArgs = {
  field: DirectoryFieldsEnum
}

export type DirectoryGroupConnectionGroupArgs = {
  field: DirectoryFieldsEnum
  limit: InputMaybe<Scalars['Int']>
  skip: InputMaybe<Scalars['Int']>
}

export type DirectoryGroupConnectionMaxArgs = {
  field: DirectoryFieldsEnum
}

export type DirectoryGroupConnectionMinArgs = {
  field: DirectoryFieldsEnum
}

export type DirectoryGroupConnectionSumArgs = {
  field: DirectoryFieldsEnum
}

export type DirectorySortInput = {
  fields: InputMaybe<Array<InputMaybe<DirectoryFieldsEnum>>>
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type File = Node & {
  absolutePath: Scalars['String']
  accessTime: Scalars['Date']
  atime: Scalars['Date']
  atimeMs: Scalars['Float']
  base: Scalars['String']
  birthTime: Scalars['Date']
  /** @deprecated Use `birthTime` instead */
  birthtime: Maybe<Scalars['Date']>
  /** @deprecated Use `birthTime` instead */
  birthtimeMs: Maybe<Scalars['Float']>
  blksize: Maybe<Scalars['Int']>
  blocks: Maybe<Scalars['Int']>
  changeTime: Scalars['Date']
  children: Array<Node>
  ctime: Scalars['Date']
  ctimeMs: Scalars['Float']
  dev: Scalars['Int']
  dir: Scalars['String']
  ext: Scalars['String']
  extension: Scalars['String']
  gid: Scalars['Int']
  id: Scalars['ID']
  ino: Scalars['Float']
  internal: Internal
  mode: Scalars['Int']
  modifiedTime: Scalars['Date']
  mtime: Scalars['Date']
  mtimeMs: Scalars['Float']
  name: Scalars['String']
  nlink: Scalars['Int']
  parent: Maybe<Node>
  prettySize: Scalars['String']
  /** Copy file to static directory and return public url to it */
  publicURL: Maybe<Scalars['String']>
  rdev: Scalars['Int']
  relativeDirectory: Scalars['String']
  relativePath: Scalars['String']
  root: Scalars['String']
  size: Scalars['Int']
  sourceInstanceName: Scalars['String']
  uid: Scalars['Int']
}

export type FileAccessTimeArgs = {
  difference: InputMaybe<Scalars['String']>
  formatString: InputMaybe<Scalars['String']>
  fromNow: InputMaybe<Scalars['Boolean']>
  locale: InputMaybe<Scalars['String']>
}

export type FileAtimeArgs = {
  difference: InputMaybe<Scalars['String']>
  formatString: InputMaybe<Scalars['String']>
  fromNow: InputMaybe<Scalars['Boolean']>
  locale: InputMaybe<Scalars['String']>
}

export type FileBirthTimeArgs = {
  difference: InputMaybe<Scalars['String']>
  formatString: InputMaybe<Scalars['String']>
  fromNow: InputMaybe<Scalars['Boolean']>
  locale: InputMaybe<Scalars['String']>
}

export type FileChangeTimeArgs = {
  difference: InputMaybe<Scalars['String']>
  formatString: InputMaybe<Scalars['String']>
  fromNow: InputMaybe<Scalars['Boolean']>
  locale: InputMaybe<Scalars['String']>
}

export type FileCtimeArgs = {
  difference: InputMaybe<Scalars['String']>
  formatString: InputMaybe<Scalars['String']>
  fromNow: InputMaybe<Scalars['Boolean']>
  locale: InputMaybe<Scalars['String']>
}

export type FileModifiedTimeArgs = {
  difference: InputMaybe<Scalars['String']>
  formatString: InputMaybe<Scalars['String']>
  fromNow: InputMaybe<Scalars['Boolean']>
  locale: InputMaybe<Scalars['String']>
}

export type FileMtimeArgs = {
  difference: InputMaybe<Scalars['String']>
  formatString: InputMaybe<Scalars['String']>
  fromNow: InputMaybe<Scalars['Boolean']>
  locale: InputMaybe<Scalars['String']>
}

export type FileConnection = {
  distinct: Array<Scalars['String']>
  edges: Array<FileEdge>
  group: Array<FileGroupConnection>
  max: Maybe<Scalars['Float']>
  min: Maybe<Scalars['Float']>
  nodes: Array<File>
  pageInfo: PageInfo
  sum: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum
}

export type FileConnectionGroupArgs = {
  field: FileFieldsEnum
  limit: InputMaybe<Scalars['Int']>
  skip: InputMaybe<Scalars['Int']>
}

export type FileConnectionMaxArgs = {
  field: FileFieldsEnum
}

export type FileConnectionMinArgs = {
  field: FileFieldsEnum
}

export type FileConnectionSumArgs = {
  field: FileFieldsEnum
}

export type FileEdge = {
  next: Maybe<File>
  node: File
  previous: Maybe<File>
}

export type FileFieldsEnum =
  | 'absolutePath'
  | 'accessTime'
  | 'atime'
  | 'atimeMs'
  | 'base'
  | 'birthTime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'changeTime'
  | 'children'
  | 'children___children'
  | 'children___children___children'
  | 'children___children___children___children'
  | 'children___children___children___id'
  | 'children___children___id'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___parent___children'
  | 'children___children___parent___id'
  | 'children___id'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___parent___children'
  | 'children___parent___children___children'
  | 'children___parent___children___id'
  | 'children___parent___id'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___parent___children'
  | 'children___parent___parent___id'
  | 'ctime'
  | 'ctimeMs'
  | 'dev'
  | 'dir'
  | 'ext'
  | 'extension'
  | 'gid'
  | 'id'
  | 'ino'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'mode'
  | 'modifiedTime'
  | 'mtime'
  | 'mtimeMs'
  | 'name'
  | 'nlink'
  | 'parent___children'
  | 'parent___children___children'
  | 'parent___children___children___children'
  | 'parent___children___children___id'
  | 'parent___children___id'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___parent___children'
  | 'parent___children___parent___id'
  | 'parent___id'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___parent___children'
  | 'parent___parent___children___children'
  | 'parent___parent___children___id'
  | 'parent___parent___id'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___parent___children'
  | 'parent___parent___parent___id'
  | 'prettySize'
  | 'publicURL'
  | 'rdev'
  | 'relativeDirectory'
  | 'relativePath'
  | 'root'
  | 'size'
  | 'sourceInstanceName'
  | 'uid'

export type FileFilterInput = {
  absolutePath: InputMaybe<StringQueryOperatorInput>
  accessTime: InputMaybe<DateQueryOperatorInput>
  atime: InputMaybe<DateQueryOperatorInput>
  atimeMs: InputMaybe<FloatQueryOperatorInput>
  base: InputMaybe<StringQueryOperatorInput>
  birthTime: InputMaybe<DateQueryOperatorInput>
  birthtime: InputMaybe<DateQueryOperatorInput>
  birthtimeMs: InputMaybe<FloatQueryOperatorInput>
  blksize: InputMaybe<IntQueryOperatorInput>
  blocks: InputMaybe<IntQueryOperatorInput>
  changeTime: InputMaybe<DateQueryOperatorInput>
  children: InputMaybe<NodeFilterListInput>
  ctime: InputMaybe<DateQueryOperatorInput>
  ctimeMs: InputMaybe<FloatQueryOperatorInput>
  dev: InputMaybe<IntQueryOperatorInput>
  dir: InputMaybe<StringQueryOperatorInput>
  ext: InputMaybe<StringQueryOperatorInput>
  extension: InputMaybe<StringQueryOperatorInput>
  gid: InputMaybe<IntQueryOperatorInput>
  id: InputMaybe<StringQueryOperatorInput>
  ino: InputMaybe<FloatQueryOperatorInput>
  internal: InputMaybe<InternalFilterInput>
  mode: InputMaybe<IntQueryOperatorInput>
  modifiedTime: InputMaybe<DateQueryOperatorInput>
  mtime: InputMaybe<DateQueryOperatorInput>
  mtimeMs: InputMaybe<FloatQueryOperatorInput>
  name: InputMaybe<StringQueryOperatorInput>
  nlink: InputMaybe<IntQueryOperatorInput>
  parent: InputMaybe<NodeFilterInput>
  prettySize: InputMaybe<StringQueryOperatorInput>
  publicURL: InputMaybe<StringQueryOperatorInput>
  rdev: InputMaybe<IntQueryOperatorInput>
  relativeDirectory: InputMaybe<StringQueryOperatorInput>
  relativePath: InputMaybe<StringQueryOperatorInput>
  root: InputMaybe<StringQueryOperatorInput>
  size: InputMaybe<IntQueryOperatorInput>
  sourceInstanceName: InputMaybe<StringQueryOperatorInput>
  uid: InputMaybe<IntQueryOperatorInput>
}

export type FileGroupConnection = {
  distinct: Array<Scalars['String']>
  edges: Array<FileEdge>
  field: Scalars['String']
  fieldValue: Maybe<Scalars['String']>
  group: Array<FileGroupConnection>
  max: Maybe<Scalars['Float']>
  min: Maybe<Scalars['Float']>
  nodes: Array<File>
  pageInfo: PageInfo
  sum: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type FileGroupConnectionDistinctArgs = {
  field: FileFieldsEnum
}

export type FileGroupConnectionGroupArgs = {
  field: FileFieldsEnum
  limit: InputMaybe<Scalars['Int']>
  skip: InputMaybe<Scalars['Int']>
}

export type FileGroupConnectionMaxArgs = {
  field: FileFieldsEnum
}

export type FileGroupConnectionMinArgs = {
  field: FileFieldsEnum
}

export type FileGroupConnectionSumArgs = {
  field: FileFieldsEnum
}

export type FileSortInput = {
  fields: InputMaybe<Array<InputMaybe<FileFieldsEnum>>>
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type FloatQueryOperatorInput = {
  eq: InputMaybe<Scalars['Float']>
  gt: InputMaybe<Scalars['Float']>
  gte: InputMaybe<Scalars['Float']>
  in: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
  lt: InputMaybe<Scalars['Float']>
  lte: InputMaybe<Scalars['Float']>
  ne: InputMaybe<Scalars['Float']>
  nin: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
}

export type GatsbyImageFormat =
  | 'AUTO'
  | 'AVIF'
  | 'JPG'
  | 'NO_CHANGE'
  | 'PNG'
  | 'WEBP'

export type GatsbyImageLayout = 'CONSTRAINED' | 'FIXED' | 'FULL_WIDTH'

export type GatsbyImagePlaceholder =
  | 'BLURRED'
  | 'DOMINANT_COLOR'
  | 'NONE'
  | 'TRACED_SVG'

/** Shopping cart input. */
export type IStoreCart = {
  /** Order information, including `orderNumber` and `acceptedOffer`. */
  order: IStoreOrder
}

/** Image input. */
export type IStoreImage = {
  /** Alias for the input image. */
  alternateName: Scalars['String']
  /** Image input URL. */
  url: Scalars['String']
}

/** Offer input. */
export type IStoreOffer = {
  /** Information on the item being offered. */
  itemOffered: IStoreProduct
  /** This is displayed as the "from" price in the context of promotions' price comparison. This may change before it reaches the shelf. */
  listPrice: Scalars['Float']
  /** Also known as spot price. */
  price: Scalars['Float']
  /** Number of items offered. */
  quantity: Scalars['Int']
  /** Seller responsible for the offer. */
  seller: IStoreOrganization
}

/** Offer input. */
export type IStoreOrder = {
  /** Array with information on each accepted offer. */
  acceptedOffer: Array<IStoreOffer>
  /** ID of the order in [VTEX order management](https://help.vtex.com/en/tutorial/license-manager-resources-oms--60QcBsvWeum02cFi3GjBzg#). */
  orderNumber: Scalars['String']
}

/** Organization input. */
export type IStoreOrganization = {
  /** Organization ID. */
  identifier: Scalars['String']
}

/** Product input. Products are variants within product groups, equivalent to VTEX [SKUs](https://help.vtex.com/en/tutorial/what-is-an-sku--1K75s4RXAQyOuGUYKMM68u#). For example, you may have a **Shirt** product group with associated products such as **Blue shirt size L**, **Green shirt size XL** and so on. */
export type IStoreProduct = {
  /** Custom Product Additional Properties. */
  additionalProperty: InputMaybe<Array<IStorePropertyValue>>
  /** Array of product images. */
  image: Array<IStoreImage>
  /** Product name. */
  name: Scalars['String']
  /** Stock Keeping Unit. Merchant-specific ID for the product. */
  sku: Scalars['String']
}

export type IStorePropertyValue = {
  /** Property name. */
  name: Scalars['String']
  /** Property id. This propert changes according to the content of the object. */
  propertyID: InputMaybe<Scalars['String']>
  /** Property value. May hold a string or the string representation of an object. */
  value: Scalars['ObjectOrString']
  /** Specifies the nature of the value */
  valueReference: Scalars['String']
}

/** Selected facet input. */
export type IStoreSelectedFacet = {
  key: Scalars['String']
  value: Scalars['String']
}

/** Session input. */
export type IStoreSession = {
  /** Session input channel. */
  channel: InputMaybe<Scalars['String']>
  /** Session input country. */
  country: InputMaybe<Scalars['String']>
  /** Session input postal code. */
  postalCode: InputMaybe<Scalars['String']>
}

export type ImageResizingBehavior =
  /** Crop a part of the original image to match the specified size. */
  | 'CROP'
  /** Crop the image to the specified dimensions, if the original image is smaller than these dimensions, then the image will be upscaled. */
  | 'FILL'
  | 'NO_CHANGE'
  /** Same as the default resizing, but adds padding so that the generated image has the specified dimensions. */
  | 'PAD'
  /** Scale the image regardless of the original aspect ratio. */
  | 'SCALE'
  /** When used in association with the f parameter below, creates a thumbnail from the image based on a focus area. */
  | 'THUMB'

export type IntQueryOperatorInput = {
  eq: InputMaybe<Scalars['Int']>
  gt: InputMaybe<Scalars['Int']>
  gte: InputMaybe<Scalars['Int']>
  in: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  lt: InputMaybe<Scalars['Int']>
  lte: InputMaybe<Scalars['Int']>
  ne: InputMaybe<Scalars['Int']>
  nin: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
}

export type Internal = {
  content: Maybe<Scalars['String']>
  contentDigest: Scalars['String']
  description: Maybe<Scalars['String']>
  fieldOwners: Maybe<Array<Maybe<Scalars['String']>>>
  ignoreType: Maybe<Scalars['Boolean']>
  mediaType: Maybe<Scalars['String']>
  owner: Scalars['String']
  type: Scalars['String']
}

export type InternalFilterInput = {
  content: InputMaybe<StringQueryOperatorInput>
  contentDigest: InputMaybe<StringQueryOperatorInput>
  description: InputMaybe<StringQueryOperatorInput>
  fieldOwners: InputMaybe<StringQueryOperatorInput>
  ignoreType: InputMaybe<BooleanQueryOperatorInput>
  mediaType: InputMaybe<StringQueryOperatorInput>
  owner: InputMaybe<StringQueryOperatorInput>
  type: InputMaybe<StringQueryOperatorInput>
}

export type JsonQueryOperatorInput = {
  eq: InputMaybe<Scalars['JSON']>
  glob: InputMaybe<Scalars['JSON']>
  in: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  ne: InputMaybe<Scalars['JSON']>
  nin: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  regex: InputMaybe<Scalars['JSON']>
}

export type Mutation = {
  /** Update session information. */
  updateSession: StoreSession
  /** Returns the order if anything has changed in it, or `null` if the order is valid. */
  validateCart: Maybe<StoreCart>
}

export type MutationUpdateSessionArgs = {
  session: IStoreSession
}

export type MutationValidateCartArgs = {
  cart: IStoreCart
}

/** Node Interface */
export type Node = {
  children: Array<Node>
  id: Scalars['ID']
  internal: Internal
  parent: Maybe<Node>
}

export type NodeFilterInput = {
  children: InputMaybe<NodeFilterListInput>
  id: InputMaybe<StringQueryOperatorInput>
  internal: InputMaybe<InternalFilterInput>
  parent: InputMaybe<NodeFilterInput>
}

export type NodeFilterListInput = {
  elemMatch: InputMaybe<NodeFilterInput>
}

export type PageInfo = {
  currentPage: Scalars['Int']
  hasNextPage: Scalars['Boolean']
  hasPreviousPage: Scalars['Boolean']
  itemCount: Scalars['Int']
  pageCount: Scalars['Int']
  perPage: Maybe<Scalars['Int']>
  totalCount: Scalars['Int']
}

export type Query = {
  /** All collections query. */
  allCollections: StoreCollectionConnection
  allContentfulAsset: ContentfulAssetConnection
  allContentfulBannerMedium: ContentfulBannerMediumConnection
  allContentfulBestCourses: ContentfulBestCoursesConnection
  allContentfulCommonQuestions: ContentfulCommonQuestionsConnection
  allContentfulCommonQuestionsAnswerTextNode: ContentfulCommonQuestionsAnswerTextNodeConnection
  allContentfulContentType: ContentfulContentTypeConnection
  allContentfulEntry: ContentfulEntryConnection
  allContentfulInfoproducers: ContentfulInfoproducersConnection
  allContentfulMainBanner: ContentfulMainBannerConnection
  allContentfulPartners: ContentfulPartnersConnection
  allContentfulTeste: ContentfulTesteConnection
  allContentfulVideoSection: ContentfulVideoSectionConnection
  allDirectory: DirectoryConnection
  allFile: FileConnection
  /** All products query. */
  allProducts: StoreProductConnection
  allSite: SiteConnection
  allSiteBuildMetadata: SiteBuildMetadataConnection
  allSiteFunction: SiteFunctionConnection
  allSitePage: SitePageConnection
  allSitePlugin: SitePluginConnection
  allStaticImage: StaticImageConnection
  /** Collection query. */
  collection: StoreCollection
  contentfulAsset: Maybe<ContentfulAsset>
  contentfulBannerMedium: Maybe<ContentfulBannerMedium>
  contentfulBestCourses: Maybe<ContentfulBestCourses>
  contentfulCommonQuestions: Maybe<ContentfulCommonQuestions>
  contentfulCommonQuestionsAnswerTextNode: Maybe<ContentfulCommonQuestionsAnswerTextNode>
  contentfulContentType: Maybe<ContentfulContentType>
  contentfulEntry: Maybe<ContentfulEntry>
  contentfulInfoproducers: Maybe<ContentfulInfoproducers>
  contentfulMainBanner: Maybe<ContentfulMainBanner>
  contentfulPartners: Maybe<ContentfulPartners>
  contentfulTeste: Maybe<ContentfulTeste>
  contentfulVideoSection: Maybe<ContentfulVideoSection>
  directory: Maybe<Directory>
  file: Maybe<File>
  /** Person query. */
  person: Maybe<StorePerson>
  /** Product query. */
  product: StoreProduct
  /** Search query. */
  search: StoreSearchResult
  site: Maybe<Site>
  siteBuildMetadata: Maybe<SiteBuildMetadata>
  siteFunction: Maybe<SiteFunction>
  sitePage: Maybe<SitePage>
  sitePlugin: Maybe<SitePlugin>
  staticImage: Maybe<StaticImage>
}

export type QueryAllCollectionsArgs = {
  after: InputMaybe<Scalars['String']>
  first: Scalars['Int']
}

export type QueryAllContentfulAssetArgs = {
  filter: InputMaybe<ContentfulAssetFilterInput>
  limit: InputMaybe<Scalars['Int']>
  skip: InputMaybe<Scalars['Int']>
  sort: InputMaybe<ContentfulAssetSortInput>
}

export type QueryAllContentfulBannerMediumArgs = {
  filter: InputMaybe<ContentfulBannerMediumFilterInput>
  limit: InputMaybe<Scalars['Int']>
  skip: InputMaybe<Scalars['Int']>
  sort: InputMaybe<ContentfulBannerMediumSortInput>
}

export type QueryAllContentfulBestCoursesArgs = {
  filter: InputMaybe<ContentfulBestCoursesFilterInput>
  limit: InputMaybe<Scalars['Int']>
  skip: InputMaybe<Scalars['Int']>
  sort: InputMaybe<ContentfulBestCoursesSortInput>
}

export type QueryAllContentfulCommonQuestionsArgs = {
  filter: InputMaybe<ContentfulCommonQuestionsFilterInput>
  limit: InputMaybe<Scalars['Int']>
  skip: InputMaybe<Scalars['Int']>
  sort: InputMaybe<ContentfulCommonQuestionsSortInput>
}

export type QueryAllContentfulCommonQuestionsAnswerTextNodeArgs = {
  filter: InputMaybe<ContentfulCommonQuestionsAnswerTextNodeFilterInput>
  limit: InputMaybe<Scalars['Int']>
  skip: InputMaybe<Scalars['Int']>
  sort: InputMaybe<ContentfulCommonQuestionsAnswerTextNodeSortInput>
}

export type QueryAllContentfulContentTypeArgs = {
  filter: InputMaybe<ContentfulContentTypeFilterInput>
  limit: InputMaybe<Scalars['Int']>
  skip: InputMaybe<Scalars['Int']>
  sort: InputMaybe<ContentfulContentTypeSortInput>
}

export type QueryAllContentfulEntryArgs = {
  filter: InputMaybe<ContentfulEntryFilterInput>
  limit: InputMaybe<Scalars['Int']>
  skip: InputMaybe<Scalars['Int']>
  sort: InputMaybe<ContentfulEntrySortInput>
}

export type QueryAllContentfulInfoproducersArgs = {
  filter: InputMaybe<ContentfulInfoproducersFilterInput>
  limit: InputMaybe<Scalars['Int']>
  skip: InputMaybe<Scalars['Int']>
  sort: InputMaybe<ContentfulInfoproducersSortInput>
}

export type QueryAllContentfulMainBannerArgs = {
  filter: InputMaybe<ContentfulMainBannerFilterInput>
  limit: InputMaybe<Scalars['Int']>
  skip: InputMaybe<Scalars['Int']>
  sort: InputMaybe<ContentfulMainBannerSortInput>
}

export type QueryAllContentfulPartnersArgs = {
  filter: InputMaybe<ContentfulPartnersFilterInput>
  limit: InputMaybe<Scalars['Int']>
  skip: InputMaybe<Scalars['Int']>
  sort: InputMaybe<ContentfulPartnersSortInput>
}

export type QueryAllContentfulTesteArgs = {
  filter: InputMaybe<ContentfulTesteFilterInput>
  limit: InputMaybe<Scalars['Int']>
  skip: InputMaybe<Scalars['Int']>
  sort: InputMaybe<ContentfulTesteSortInput>
}

export type QueryAllContentfulVideoSectionArgs = {
  filter: InputMaybe<ContentfulVideoSectionFilterInput>
  limit: InputMaybe<Scalars['Int']>
  skip: InputMaybe<Scalars['Int']>
  sort: InputMaybe<ContentfulVideoSectionSortInput>
}

export type QueryAllDirectoryArgs = {
  filter: InputMaybe<DirectoryFilterInput>
  limit: InputMaybe<Scalars['Int']>
  skip: InputMaybe<Scalars['Int']>
  sort: InputMaybe<DirectorySortInput>
}

export type QueryAllFileArgs = {
  filter: InputMaybe<FileFilterInput>
  limit: InputMaybe<Scalars['Int']>
  skip: InputMaybe<Scalars['Int']>
  sort: InputMaybe<FileSortInput>
}

export type QueryAllProductsArgs = {
  after: InputMaybe<Scalars['String']>
  first: Scalars['Int']
}

export type QueryAllSiteArgs = {
  filter: InputMaybe<SiteFilterInput>
  limit: InputMaybe<Scalars['Int']>
  skip: InputMaybe<Scalars['Int']>
  sort: InputMaybe<SiteSortInput>
}

export type QueryAllSiteBuildMetadataArgs = {
  filter: InputMaybe<SiteBuildMetadataFilterInput>
  limit: InputMaybe<Scalars['Int']>
  skip: InputMaybe<Scalars['Int']>
  sort: InputMaybe<SiteBuildMetadataSortInput>
}

export type QueryAllSiteFunctionArgs = {
  filter: InputMaybe<SiteFunctionFilterInput>
  limit: InputMaybe<Scalars['Int']>
  skip: InputMaybe<Scalars['Int']>
  sort: InputMaybe<SiteFunctionSortInput>
}

export type QueryAllSitePageArgs = {
  filter: InputMaybe<SitePageFilterInput>
  limit: InputMaybe<Scalars['Int']>
  skip: InputMaybe<Scalars['Int']>
  sort: InputMaybe<SitePageSortInput>
}

export type QueryAllSitePluginArgs = {
  filter: InputMaybe<SitePluginFilterInput>
  limit: InputMaybe<Scalars['Int']>
  skip: InputMaybe<Scalars['Int']>
  sort: InputMaybe<SitePluginSortInput>
}

export type QueryAllStaticImageArgs = {
  filter: InputMaybe<StaticImageFilterInput>
  limit: InputMaybe<Scalars['Int']>
  skip: InputMaybe<Scalars['Int']>
  sort: InputMaybe<StaticImageSortInput>
}

export type QueryCollectionArgs = {
  slug: Scalars['String']
}

export type QueryContentfulAssetArgs = {
  children: InputMaybe<NodeFilterListInput>
  contentful_id: InputMaybe<StringQueryOperatorInput>
  createdAt: InputMaybe<DateQueryOperatorInput>
  description: InputMaybe<StringQueryOperatorInput>
  file: InputMaybe<ContentfulAssetFileFilterInput>
  filename: InputMaybe<StringQueryOperatorInput>
  filesize: InputMaybe<IntQueryOperatorInput>
  gatsbyImage: InputMaybe<JsonQueryOperatorInput>
  gatsbyImageData: InputMaybe<JsonQueryOperatorInput>
  height: InputMaybe<IntQueryOperatorInput>
  id: InputMaybe<StringQueryOperatorInput>
  internal: InputMaybe<InternalFilterInput>
  mimeType: InputMaybe<StringQueryOperatorInput>
  node_locale: InputMaybe<StringQueryOperatorInput>
  parent: InputMaybe<NodeFilterInput>
  placeholderUrl: InputMaybe<StringQueryOperatorInput>
  publicUrl: InputMaybe<StringQueryOperatorInput>
  resize: InputMaybe<RemoteFileResizeFilterInput>
  size: InputMaybe<IntQueryOperatorInput>
  spaceId: InputMaybe<StringQueryOperatorInput>
  sys: InputMaybe<ContentfulAssetSysFilterInput>
  title: InputMaybe<StringQueryOperatorInput>
  updatedAt: InputMaybe<DateQueryOperatorInput>
  url: InputMaybe<StringQueryOperatorInput>
  width: InputMaybe<IntQueryOperatorInput>
}

export type QueryContentfulBannerMediumArgs = {
  children: InputMaybe<NodeFilterListInput>
  contentful_id: InputMaybe<StringQueryOperatorInput>
  createdAt: InputMaybe<DateQueryOperatorInput>
  id: InputMaybe<StringQueryOperatorInput>
  imagemBannerMedium: InputMaybe<ContentfulAssetFilterInput>
  internal: InputMaybe<InternalFilterInput>
  link: InputMaybe<StringQueryOperatorInput>
  node_locale: InputMaybe<StringQueryOperatorInput>
  parent: InputMaybe<NodeFilterInput>
  spaceId: InputMaybe<StringQueryOperatorInput>
  sys: InputMaybe<ContentfulBannerMediumSysFilterInput>
  updatedAt: InputMaybe<DateQueryOperatorInput>
}

export type QueryContentfulBestCoursesArgs = {
  children: InputMaybe<NodeFilterListInput>
  contentful_id: InputMaybe<StringQueryOperatorInput>
  createdAt: InputMaybe<DateQueryOperatorInput>
  id: InputMaybe<StringQueryOperatorInput>
  image: InputMaybe<ContentfulAssetFilterInput>
  internal: InputMaybe<InternalFilterInput>
  name: InputMaybe<StringQueryOperatorInput>
  node_locale: InputMaybe<StringQueryOperatorInput>
  parent: InputMaybe<NodeFilterInput>
  slug: InputMaybe<StringQueryOperatorInput>
  spaceId: InputMaybe<StringQueryOperatorInput>
  sys: InputMaybe<ContentfulBestCoursesSysFilterInput>
  updatedAt: InputMaybe<DateQueryOperatorInput>
}

export type QueryContentfulCommonQuestionsArgs = {
  answer: InputMaybe<ContentfulCommonQuestionsAnswerTextNodeFilterInput>
  childContentfulCommonQuestionsAnswerTextNode: InputMaybe<ContentfulCommonQuestionsAnswerTextNodeFilterInput>
  children: InputMaybe<NodeFilterListInput>
  childrenContentfulCommonQuestionsAnswerTextNode: InputMaybe<ContentfulCommonQuestionsAnswerTextNodeFilterListInput>
  contentful_id: InputMaybe<StringQueryOperatorInput>
  createdAt: InputMaybe<DateQueryOperatorInput>
  id: InputMaybe<StringQueryOperatorInput>
  internal: InputMaybe<InternalFilterInput>
  node_locale: InputMaybe<StringQueryOperatorInput>
  parent: InputMaybe<NodeFilterInput>
  question: InputMaybe<StringQueryOperatorInput>
  spaceId: InputMaybe<StringQueryOperatorInput>
  sys: InputMaybe<ContentfulCommonQuestionsSysFilterInput>
  updatedAt: InputMaybe<DateQueryOperatorInput>
}

export type QueryContentfulCommonQuestionsAnswerTextNodeArgs = {
  answer: InputMaybe<StringQueryOperatorInput>
  children: InputMaybe<NodeFilterListInput>
  id: InputMaybe<StringQueryOperatorInput>
  internal: InputMaybe<InternalFilterInput>
  parent: InputMaybe<NodeFilterInput>
  sys: InputMaybe<ContentfulCommonQuestionsAnswerTextNodeSysFilterInput>
}

export type QueryContentfulContentTypeArgs = {
  children: InputMaybe<NodeFilterListInput>
  description: InputMaybe<StringQueryOperatorInput>
  displayField: InputMaybe<StringQueryOperatorInput>
  id: InputMaybe<StringQueryOperatorInput>
  internal: InputMaybe<InternalFilterInput>
  name: InputMaybe<StringQueryOperatorInput>
  parent: InputMaybe<NodeFilterInput>
  sys: InputMaybe<ContentfulContentTypeSysFilterInput>
}

export type QueryContentfulEntryArgs = {
  children: InputMaybe<NodeFilterListInput>
  contentful_id: InputMaybe<StringQueryOperatorInput>
  id: InputMaybe<StringQueryOperatorInput>
  internal: InputMaybe<InternalFilterInput>
  node_locale: InputMaybe<StringQueryOperatorInput>
  parent: InputMaybe<NodeFilterInput>
}

export type QueryContentfulInfoproducersArgs = {
  children: InputMaybe<NodeFilterListInput>
  contentful_id: InputMaybe<StringQueryOperatorInput>
  id: InputMaybe<StringQueryOperatorInput>
  internal: InputMaybe<InternalFilterInput>
  node_locale: InputMaybe<StringQueryOperatorInput>
  parent: InputMaybe<NodeFilterInput>
}

export type QueryContentfulMainBannerArgs = {
  buttonColor: InputMaybe<StringQueryOperatorInput>
  buttonLabel: InputMaybe<StringQueryOperatorInput>
  buttonTextColor: InputMaybe<StringQueryOperatorInput>
  children: InputMaybe<NodeFilterListInput>
  contentful_id: InputMaybe<StringQueryOperatorInput>
  createdAt: InputMaybe<DateQueryOperatorInput>
  id: InputMaybe<StringQueryOperatorInput>
  imageDesktop: InputMaybe<ContentfulAssetFilterInput>
  imageMobile: InputMaybe<ContentfulAssetFilterInput>
  internal: InputMaybe<InternalFilterInput>
  node_locale: InputMaybe<StringQueryOperatorInput>
  parent: InputMaybe<NodeFilterInput>
  slug: InputMaybe<StringQueryOperatorInput>
  spaceId: InputMaybe<StringQueryOperatorInput>
  subtitle: InputMaybe<StringQueryOperatorInput>
  sys: InputMaybe<ContentfulMainBannerSysFilterInput>
  title: InputMaybe<StringQueryOperatorInput>
  updatedAt: InputMaybe<DateQueryOperatorInput>
}

export type QueryContentfulPartnersArgs = {
  children: InputMaybe<NodeFilterListInput>
  contentful_id: InputMaybe<StringQueryOperatorInput>
  id: InputMaybe<StringQueryOperatorInput>
  internal: InputMaybe<InternalFilterInput>
  node_locale: InputMaybe<StringQueryOperatorInput>
  parent: InputMaybe<NodeFilterInput>
}

export type QueryContentfulTesteArgs = {
  children: InputMaybe<NodeFilterListInput>
  contentful_id: InputMaybe<StringQueryOperatorInput>
  id: InputMaybe<StringQueryOperatorInput>
  internal: InputMaybe<InternalFilterInput>
  node_locale: InputMaybe<StringQueryOperatorInput>
  parent: InputMaybe<NodeFilterInput>
}

export type QueryContentfulVideoSectionArgs = {
  buttonText: InputMaybe<StringQueryOperatorInput>
  buttonUrl: InputMaybe<StringQueryOperatorInput>
  children: InputMaybe<NodeFilterListInput>
  content: InputMaybe<StringQueryOperatorInput>
  contentful_id: InputMaybe<StringQueryOperatorInput>
  createdAt: InputMaybe<DateQueryOperatorInput>
  id: InputMaybe<StringQueryOperatorInput>
  internal: InputMaybe<InternalFilterInput>
  node_locale: InputMaybe<StringQueryOperatorInput>
  parent: InputMaybe<NodeFilterInput>
  spaceId: InputMaybe<StringQueryOperatorInput>
  sys: InputMaybe<ContentfulVideoSectionSysFilterInput>
  title: InputMaybe<StringQueryOperatorInput>
  updatedAt: InputMaybe<DateQueryOperatorInput>
  video: InputMaybe<ContentfulAssetFilterInput>
  videoUrl: InputMaybe<StringQueryOperatorInput>
}

export type QueryDirectoryArgs = {
  absolutePath: InputMaybe<StringQueryOperatorInput>
  accessTime: InputMaybe<DateQueryOperatorInput>
  atime: InputMaybe<DateQueryOperatorInput>
  atimeMs: InputMaybe<FloatQueryOperatorInput>
  base: InputMaybe<StringQueryOperatorInput>
  birthTime: InputMaybe<DateQueryOperatorInput>
  birthtime: InputMaybe<DateQueryOperatorInput>
  birthtimeMs: InputMaybe<FloatQueryOperatorInput>
  changeTime: InputMaybe<DateQueryOperatorInput>
  children: InputMaybe<NodeFilterListInput>
  ctime: InputMaybe<DateQueryOperatorInput>
  ctimeMs: InputMaybe<FloatQueryOperatorInput>
  dev: InputMaybe<IntQueryOperatorInput>
  dir: InputMaybe<StringQueryOperatorInput>
  ext: InputMaybe<StringQueryOperatorInput>
  extension: InputMaybe<StringQueryOperatorInput>
  gid: InputMaybe<IntQueryOperatorInput>
  id: InputMaybe<StringQueryOperatorInput>
  ino: InputMaybe<FloatQueryOperatorInput>
  internal: InputMaybe<InternalFilterInput>
  mode: InputMaybe<IntQueryOperatorInput>
  modifiedTime: InputMaybe<DateQueryOperatorInput>
  mtime: InputMaybe<DateQueryOperatorInput>
  mtimeMs: InputMaybe<FloatQueryOperatorInput>
  name: InputMaybe<StringQueryOperatorInput>
  nlink: InputMaybe<IntQueryOperatorInput>
  parent: InputMaybe<NodeFilterInput>
  prettySize: InputMaybe<StringQueryOperatorInput>
  rdev: InputMaybe<IntQueryOperatorInput>
  relativeDirectory: InputMaybe<StringQueryOperatorInput>
  relativePath: InputMaybe<StringQueryOperatorInput>
  root: InputMaybe<StringQueryOperatorInput>
  size: InputMaybe<IntQueryOperatorInput>
  sourceInstanceName: InputMaybe<StringQueryOperatorInput>
  uid: InputMaybe<IntQueryOperatorInput>
}

export type QueryFileArgs = {
  absolutePath: InputMaybe<StringQueryOperatorInput>
  accessTime: InputMaybe<DateQueryOperatorInput>
  atime: InputMaybe<DateQueryOperatorInput>
  atimeMs: InputMaybe<FloatQueryOperatorInput>
  base: InputMaybe<StringQueryOperatorInput>
  birthTime: InputMaybe<DateQueryOperatorInput>
  birthtime: InputMaybe<DateQueryOperatorInput>
  birthtimeMs: InputMaybe<FloatQueryOperatorInput>
  blksize: InputMaybe<IntQueryOperatorInput>
  blocks: InputMaybe<IntQueryOperatorInput>
  changeTime: InputMaybe<DateQueryOperatorInput>
  children: InputMaybe<NodeFilterListInput>
  ctime: InputMaybe<DateQueryOperatorInput>
  ctimeMs: InputMaybe<FloatQueryOperatorInput>
  dev: InputMaybe<IntQueryOperatorInput>
  dir: InputMaybe<StringQueryOperatorInput>
  ext: InputMaybe<StringQueryOperatorInput>
  extension: InputMaybe<StringQueryOperatorInput>
  gid: InputMaybe<IntQueryOperatorInput>
  id: InputMaybe<StringQueryOperatorInput>
  ino: InputMaybe<FloatQueryOperatorInput>
  internal: InputMaybe<InternalFilterInput>
  mode: InputMaybe<IntQueryOperatorInput>
  modifiedTime: InputMaybe<DateQueryOperatorInput>
  mtime: InputMaybe<DateQueryOperatorInput>
  mtimeMs: InputMaybe<FloatQueryOperatorInput>
  name: InputMaybe<StringQueryOperatorInput>
  nlink: InputMaybe<IntQueryOperatorInput>
  parent: InputMaybe<NodeFilterInput>
  prettySize: InputMaybe<StringQueryOperatorInput>
  publicURL: InputMaybe<StringQueryOperatorInput>
  rdev: InputMaybe<IntQueryOperatorInput>
  relativeDirectory: InputMaybe<StringQueryOperatorInput>
  relativePath: InputMaybe<StringQueryOperatorInput>
  root: InputMaybe<StringQueryOperatorInput>
  size: InputMaybe<IntQueryOperatorInput>
  sourceInstanceName: InputMaybe<StringQueryOperatorInput>
  uid: InputMaybe<IntQueryOperatorInput>
}

export type QueryProductArgs = {
  locator: Array<IStoreSelectedFacet>
}

export type QuerySearchArgs = {
  after: InputMaybe<Scalars['String']>
  first: Scalars['Int']
  selectedFacets: InputMaybe<Array<IStoreSelectedFacet>>
  sort?: InputMaybe<StoreSort>
  term?: InputMaybe<Scalars['String']>
}

export type QuerySiteArgs = {
  buildTime: InputMaybe<DateQueryOperatorInput>
  children: InputMaybe<NodeFilterListInput>
  flags: InputMaybe<SiteFlagsFilterInput>
  host: InputMaybe<StringQueryOperatorInput>
  id: InputMaybe<StringQueryOperatorInput>
  internal: InputMaybe<InternalFilterInput>
  jsxRuntime: InputMaybe<StringQueryOperatorInput>
  parent: InputMaybe<NodeFilterInput>
  pathPrefix: InputMaybe<StringQueryOperatorInput>
  polyfill: InputMaybe<BooleanQueryOperatorInput>
  port: InputMaybe<IntQueryOperatorInput>
  siteMetadata: InputMaybe<SiteSiteMetadataFilterInput>
  trailingSlash: InputMaybe<StringQueryOperatorInput>
}

export type QuerySiteBuildMetadataArgs = {
  buildTime: InputMaybe<DateQueryOperatorInput>
  children: InputMaybe<NodeFilterListInput>
  id: InputMaybe<StringQueryOperatorInput>
  internal: InputMaybe<InternalFilterInput>
  parent: InputMaybe<NodeFilterInput>
}

export type QuerySiteFunctionArgs = {
  absoluteCompiledFilePath: InputMaybe<StringQueryOperatorInput>
  children: InputMaybe<NodeFilterListInput>
  functionRoute: InputMaybe<StringQueryOperatorInput>
  id: InputMaybe<StringQueryOperatorInput>
  internal: InputMaybe<InternalFilterInput>
  matchPath: InputMaybe<StringQueryOperatorInput>
  originalAbsoluteFilePath: InputMaybe<StringQueryOperatorInput>
  originalRelativeFilePath: InputMaybe<StringQueryOperatorInput>
  parent: InputMaybe<NodeFilterInput>
  pluginName: InputMaybe<StringQueryOperatorInput>
  relativeCompiledFilePath: InputMaybe<StringQueryOperatorInput>
}

export type QuerySitePageArgs = {
  children: InputMaybe<NodeFilterListInput>
  component: InputMaybe<StringQueryOperatorInput>
  componentChunkName: InputMaybe<StringQueryOperatorInput>
  id: InputMaybe<StringQueryOperatorInput>
  internal: InputMaybe<InternalFilterInput>
  internalComponentName: InputMaybe<StringQueryOperatorInput>
  matchPath: InputMaybe<StringQueryOperatorInput>
  pageContext: InputMaybe<JsonQueryOperatorInput>
  parent: InputMaybe<NodeFilterInput>
  path: InputMaybe<StringQueryOperatorInput>
  pluginCreator: InputMaybe<SitePluginFilterInput>
}

export type QuerySitePluginArgs = {
  browserAPIs: InputMaybe<StringQueryOperatorInput>
  children: InputMaybe<NodeFilterListInput>
  id: InputMaybe<StringQueryOperatorInput>
  internal: InputMaybe<InternalFilterInput>
  name: InputMaybe<StringQueryOperatorInput>
  nodeAPIs: InputMaybe<StringQueryOperatorInput>
  packageJson: InputMaybe<JsonQueryOperatorInput>
  parent: InputMaybe<NodeFilterInput>
  pluginFilepath: InputMaybe<StringQueryOperatorInput>
  pluginOptions: InputMaybe<JsonQueryOperatorInput>
  resolve: InputMaybe<StringQueryOperatorInput>
  ssrAPIs: InputMaybe<StringQueryOperatorInput>
  version: InputMaybe<StringQueryOperatorInput>
}

export type QueryStaticImageArgs = {
  absolutePath: InputMaybe<StringQueryOperatorInput>
  accessTime: InputMaybe<DateQueryOperatorInput>
  atime: InputMaybe<DateQueryOperatorInput>
  atimeMs: InputMaybe<FloatQueryOperatorInput>
  base: InputMaybe<StringQueryOperatorInput>
  birthTime: InputMaybe<DateQueryOperatorInput>
  birthtime: InputMaybe<DateQueryOperatorInput>
  birthtimeMs: InputMaybe<FloatQueryOperatorInput>
  blksize: InputMaybe<IntQueryOperatorInput>
  blocks: InputMaybe<IntQueryOperatorInput>
  changeTime: InputMaybe<DateQueryOperatorInput>
  children: InputMaybe<NodeFilterListInput>
  ctime: InputMaybe<DateQueryOperatorInput>
  ctimeMs: InputMaybe<FloatQueryOperatorInput>
  dev: InputMaybe<IntQueryOperatorInput>
  dir: InputMaybe<StringQueryOperatorInput>
  ext: InputMaybe<StringQueryOperatorInput>
  extension: InputMaybe<StringQueryOperatorInput>
  id: InputMaybe<StringQueryOperatorInput>
  ino: InputMaybe<IntQueryOperatorInput>
  internal: InputMaybe<InternalFilterInput>
  mode: InputMaybe<IntQueryOperatorInput>
  modifiedTime: InputMaybe<DateQueryOperatorInput>
  mtime: InputMaybe<DateQueryOperatorInput>
  mtimeMs: InputMaybe<FloatQueryOperatorInput>
  name: InputMaybe<StringQueryOperatorInput>
  nlink: InputMaybe<IntQueryOperatorInput>
  parent: InputMaybe<NodeFilterInput>
  prettySize: InputMaybe<StringQueryOperatorInput>
  rdev: InputMaybe<IntQueryOperatorInput>
  relativeDirectory: InputMaybe<StringQueryOperatorInput>
  relativePath: InputMaybe<StringQueryOperatorInput>
  root: InputMaybe<StringQueryOperatorInput>
  size: InputMaybe<IntQueryOperatorInput>
  sourceInstanceName: InputMaybe<StringQueryOperatorInput>
  uid: InputMaybe<IntQueryOperatorInput>
}

/** Remote Interface */
export type RemoteFile = {
  filename: Scalars['String']
  filesize: Maybe<Scalars['Int']>
  /** Data used in the <GatsbyImage /> component. See https://gatsby.dev/img for more info. */
  gatsbyImage: Maybe<Scalars['JSON']>
  height: Maybe<Scalars['Int']>
  id: Scalars['ID']
  mimeType: Scalars['String']
  publicUrl: Scalars['String']
  resize: Maybe<RemoteFileResize>
  width: Maybe<Scalars['Int']>
}

/** Remote Interface */
export type RemoteFileGatsbyImageArgs = {
  aspectRatio: InputMaybe<Scalars['Float']>
  backgroundColor: InputMaybe<Scalars['String']>
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  cropFocus: InputMaybe<Array<InputMaybe<RemoteFileCropFocus>>>
  fit?: InputMaybe<RemoteFileFit>
  formats?: InputMaybe<Array<RemoteFileFormat>>
  height: InputMaybe<Scalars['Int']>
  layout?: InputMaybe<RemoteFileLayout>
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
  placeholder?: InputMaybe<RemoteFilePlaceholder>
  quality?: InputMaybe<Scalars['Int']>
  sizes: InputMaybe<Scalars['String']>
  width: InputMaybe<Scalars['Int']>
}

/** Remote Interface */
export type RemoteFileResizeArgs = {
  aspectRatio: InputMaybe<Scalars['Float']>
  cropFocus: InputMaybe<Array<InputMaybe<RemoteFileCropFocus>>>
  fit?: InputMaybe<RemoteFileFit>
  format?: InputMaybe<RemoteFileFormat>
  height: InputMaybe<Scalars['Int']>
  quality?: InputMaybe<Scalars['Int']>
  width: InputMaybe<Scalars['Int']>
}

export type RemoteFileCropFocus =
  | 'BOTTOM'
  | 'CENTER'
  | 'EDGES'
  | 'ENTROPY'
  | 'FACES'
  | 'LEFT'
  | 'RIGHT'
  | 'TOP'

export type RemoteFileFit = 'CONTAIN' | 'COVER' | 'FILL' | 'OUTSIDE'

export type RemoteFileFormat = 'AUTO' | 'AVIF' | 'JPG' | 'PNG' | 'WEBP'

export type RemoteFileLayout = 'CONSTRAINED' | 'FIXED' | 'FULL_WIDTH'

export type RemoteFilePlaceholder =
  | 'BLURRED'
  | 'DOMINANT_COLOR'
  | 'NONE'
  | 'TRACED_SVG'

export type RemoteFileResize = {
  height: Maybe<Scalars['Int']>
  src: Maybe<Scalars['String']>
  width: Maybe<Scalars['Int']>
}

export type RemoteFileResizeFilterInput = {
  height: InputMaybe<IntQueryOperatorInput>
  src: InputMaybe<StringQueryOperatorInput>
  width: InputMaybe<IntQueryOperatorInput>
}

export type Site = Node & {
  buildTime: Maybe<Scalars['Date']>
  children: Array<Node>
  flags: Maybe<SiteFlags>
  host: Maybe<Scalars['String']>
  id: Scalars['ID']
  internal: Internal
  jsxRuntime: Maybe<Scalars['String']>
  parent: Maybe<Node>
  pathPrefix: Maybe<Scalars['String']>
  polyfill: Maybe<Scalars['Boolean']>
  port: Maybe<Scalars['Int']>
  siteMetadata: Maybe<SiteSiteMetadata>
  trailingSlash: Maybe<Scalars['String']>
}

export type SiteBuildTimeArgs = {
  difference: InputMaybe<Scalars['String']>
  formatString: InputMaybe<Scalars['String']>
  fromNow: InputMaybe<Scalars['Boolean']>
  locale: InputMaybe<Scalars['String']>
}

export type SiteBuildMetadata = Node & {
  buildTime: Maybe<Scalars['Date']>
  children: Array<Node>
  id: Scalars['ID']
  internal: Internal
  parent: Maybe<Node>
}

export type SiteBuildMetadataBuildTimeArgs = {
  difference: InputMaybe<Scalars['String']>
  formatString: InputMaybe<Scalars['String']>
  fromNow: InputMaybe<Scalars['Boolean']>
  locale: InputMaybe<Scalars['String']>
}

export type SiteBuildMetadataConnection = {
  distinct: Array<Scalars['String']>
  edges: Array<SiteBuildMetadataEdge>
  group: Array<SiteBuildMetadataGroupConnection>
  max: Maybe<Scalars['Float']>
  min: Maybe<Scalars['Float']>
  nodes: Array<SiteBuildMetadata>
  pageInfo: PageInfo
  sum: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataConnectionGroupArgs = {
  field: SiteBuildMetadataFieldsEnum
  limit: InputMaybe<Scalars['Int']>
  skip: InputMaybe<Scalars['Int']>
}

export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataEdge = {
  next: Maybe<SiteBuildMetadata>
  node: SiteBuildMetadata
  previous: Maybe<SiteBuildMetadata>
}

export type SiteBuildMetadataFieldsEnum =
  | 'buildTime'
  | 'children'
  | 'children___children'
  | 'children___children___children'
  | 'children___children___children___children'
  | 'children___children___children___id'
  | 'children___children___id'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___parent___children'
  | 'children___children___parent___id'
  | 'children___id'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___parent___children'
  | 'children___parent___children___children'
  | 'children___parent___children___id'
  | 'children___parent___id'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___parent___children'
  | 'children___parent___parent___id'
  | 'id'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'parent___children'
  | 'parent___children___children'
  | 'parent___children___children___children'
  | 'parent___children___children___id'
  | 'parent___children___id'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___parent___children'
  | 'parent___children___parent___id'
  | 'parent___id'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___parent___children'
  | 'parent___parent___children___children'
  | 'parent___parent___children___id'
  | 'parent___parent___id'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___parent___children'
  | 'parent___parent___parent___id'

export type SiteBuildMetadataFilterInput = {
  buildTime: InputMaybe<DateQueryOperatorInput>
  children: InputMaybe<NodeFilterListInput>
  id: InputMaybe<StringQueryOperatorInput>
  internal: InputMaybe<InternalFilterInput>
  parent: InputMaybe<NodeFilterInput>
}

export type SiteBuildMetadataGroupConnection = {
  distinct: Array<Scalars['String']>
  edges: Array<SiteBuildMetadataEdge>
  field: Scalars['String']
  fieldValue: Maybe<Scalars['String']>
  group: Array<SiteBuildMetadataGroupConnection>
  max: Maybe<Scalars['Float']>
  min: Maybe<Scalars['Float']>
  nodes: Array<SiteBuildMetadata>
  pageInfo: PageInfo
  sum: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type SiteBuildMetadataGroupConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataGroupConnectionGroupArgs = {
  field: SiteBuildMetadataFieldsEnum
  limit: InputMaybe<Scalars['Int']>
  skip: InputMaybe<Scalars['Int']>
}

export type SiteBuildMetadataGroupConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataGroupConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataGroupConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataSortInput = {
  fields: InputMaybe<Array<InputMaybe<SiteBuildMetadataFieldsEnum>>>
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type SiteConnection = {
  distinct: Array<Scalars['String']>
  edges: Array<SiteEdge>
  group: Array<SiteGroupConnection>
  max: Maybe<Scalars['Float']>
  min: Maybe<Scalars['Float']>
  nodes: Array<Site>
  pageInfo: PageInfo
  sum: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum
}

export type SiteConnectionGroupArgs = {
  field: SiteFieldsEnum
  limit: InputMaybe<Scalars['Int']>
  skip: InputMaybe<Scalars['Int']>
}

export type SiteConnectionMaxArgs = {
  field: SiteFieldsEnum
}

export type SiteConnectionMinArgs = {
  field: SiteFieldsEnum
}

export type SiteConnectionSumArgs = {
  field: SiteFieldsEnum
}

export type SiteEdge = {
  next: Maybe<Site>
  node: Site
  previous: Maybe<Site>
}

export type SiteFieldsEnum =
  | 'buildTime'
  | 'children'
  | 'children___children'
  | 'children___children___children'
  | 'children___children___children___children'
  | 'children___children___children___id'
  | 'children___children___id'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___parent___children'
  | 'children___children___parent___id'
  | 'children___id'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___parent___children'
  | 'children___parent___children___children'
  | 'children___parent___children___id'
  | 'children___parent___id'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___parent___children'
  | 'children___parent___parent___id'
  | 'flags___FAST_DEV'
  | 'flags___PARALLEL_SOURCING'
  | 'host'
  | 'id'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'jsxRuntime'
  | 'parent___children'
  | 'parent___children___children'
  | 'parent___children___children___children'
  | 'parent___children___children___id'
  | 'parent___children___id'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___parent___children'
  | 'parent___children___parent___id'
  | 'parent___id'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___parent___children'
  | 'parent___parent___children___children'
  | 'parent___parent___children___id'
  | 'parent___parent___id'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___parent___children'
  | 'parent___parent___parent___id'
  | 'pathPrefix'
  | 'polyfill'
  | 'port'
  | 'siteMetadata___author'
  | 'siteMetadata___description'
  | 'siteMetadata___siteUrl'
  | 'siteMetadata___title'
  | 'siteMetadata___titleTemplate'
  | 'trailingSlash'

export type SiteFilterInput = {
  buildTime: InputMaybe<DateQueryOperatorInput>
  children: InputMaybe<NodeFilterListInput>
  flags: InputMaybe<SiteFlagsFilterInput>
  host: InputMaybe<StringQueryOperatorInput>
  id: InputMaybe<StringQueryOperatorInput>
  internal: InputMaybe<InternalFilterInput>
  jsxRuntime: InputMaybe<StringQueryOperatorInput>
  parent: InputMaybe<NodeFilterInput>
  pathPrefix: InputMaybe<StringQueryOperatorInput>
  polyfill: InputMaybe<BooleanQueryOperatorInput>
  port: InputMaybe<IntQueryOperatorInput>
  siteMetadata: InputMaybe<SiteSiteMetadataFilterInput>
  trailingSlash: InputMaybe<StringQueryOperatorInput>
}

export type SiteFlags = {
  FAST_DEV: Maybe<Scalars['Boolean']>
  PARALLEL_SOURCING: Maybe<Scalars['Boolean']>
}

export type SiteFlagsFilterInput = {
  FAST_DEV: InputMaybe<BooleanQueryOperatorInput>
  PARALLEL_SOURCING: InputMaybe<BooleanQueryOperatorInput>
}

export type SiteFunction = Node & {
  absoluteCompiledFilePath: Scalars['String']
  children: Array<Node>
  functionRoute: Scalars['String']
  id: Scalars['ID']
  internal: Internal
  matchPath: Maybe<Scalars['String']>
  originalAbsoluteFilePath: Scalars['String']
  originalRelativeFilePath: Scalars['String']
  parent: Maybe<Node>
  pluginName: Scalars['String']
  relativeCompiledFilePath: Scalars['String']
}

export type SiteFunctionConnection = {
  distinct: Array<Scalars['String']>
  edges: Array<SiteFunctionEdge>
  group: Array<SiteFunctionGroupConnection>
  max: Maybe<Scalars['Float']>
  min: Maybe<Scalars['Float']>
  nodes: Array<SiteFunction>
  pageInfo: PageInfo
  sum: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum
}

export type SiteFunctionConnectionGroupArgs = {
  field: SiteFunctionFieldsEnum
  limit: InputMaybe<Scalars['Int']>
  skip: InputMaybe<Scalars['Int']>
}

export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum
}

export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldsEnum
}

export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldsEnum
}

export type SiteFunctionEdge = {
  next: Maybe<SiteFunction>
  node: SiteFunction
  previous: Maybe<SiteFunction>
}

export type SiteFunctionFieldsEnum =
  | 'absoluteCompiledFilePath'
  | 'children'
  | 'children___children'
  | 'children___children___children'
  | 'children___children___children___children'
  | 'children___children___children___id'
  | 'children___children___id'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___parent___children'
  | 'children___children___parent___id'
  | 'children___id'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___parent___children'
  | 'children___parent___children___children'
  | 'children___parent___children___id'
  | 'children___parent___id'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___parent___children'
  | 'children___parent___parent___id'
  | 'functionRoute'
  | 'id'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'matchPath'
  | 'originalAbsoluteFilePath'
  | 'originalRelativeFilePath'
  | 'parent___children'
  | 'parent___children___children'
  | 'parent___children___children___children'
  | 'parent___children___children___id'
  | 'parent___children___id'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___parent___children'
  | 'parent___children___parent___id'
  | 'parent___id'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___parent___children'
  | 'parent___parent___children___children'
  | 'parent___parent___children___id'
  | 'parent___parent___id'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___parent___children'
  | 'parent___parent___parent___id'
  | 'pluginName'
  | 'relativeCompiledFilePath'

export type SiteFunctionFilterInput = {
  absoluteCompiledFilePath: InputMaybe<StringQueryOperatorInput>
  children: InputMaybe<NodeFilterListInput>
  functionRoute: InputMaybe<StringQueryOperatorInput>
  id: InputMaybe<StringQueryOperatorInput>
  internal: InputMaybe<InternalFilterInput>
  matchPath: InputMaybe<StringQueryOperatorInput>
  originalAbsoluteFilePath: InputMaybe<StringQueryOperatorInput>
  originalRelativeFilePath: InputMaybe<StringQueryOperatorInput>
  parent: InputMaybe<NodeFilterInput>
  pluginName: InputMaybe<StringQueryOperatorInput>
  relativeCompiledFilePath: InputMaybe<StringQueryOperatorInput>
}

export type SiteFunctionGroupConnection = {
  distinct: Array<Scalars['String']>
  edges: Array<SiteFunctionEdge>
  field: Scalars['String']
  fieldValue: Maybe<Scalars['String']>
  group: Array<SiteFunctionGroupConnection>
  max: Maybe<Scalars['Float']>
  min: Maybe<Scalars['Float']>
  nodes: Array<SiteFunction>
  pageInfo: PageInfo
  sum: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type SiteFunctionGroupConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum
}

export type SiteFunctionGroupConnectionGroupArgs = {
  field: SiteFunctionFieldsEnum
  limit: InputMaybe<Scalars['Int']>
  skip: InputMaybe<Scalars['Int']>
}

export type SiteFunctionGroupConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum
}

export type SiteFunctionGroupConnectionMinArgs = {
  field: SiteFunctionFieldsEnum
}

export type SiteFunctionGroupConnectionSumArgs = {
  field: SiteFunctionFieldsEnum
}

export type SiteFunctionSortInput = {
  fields: InputMaybe<Array<InputMaybe<SiteFunctionFieldsEnum>>>
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type SiteGroupConnection = {
  distinct: Array<Scalars['String']>
  edges: Array<SiteEdge>
  field: Scalars['String']
  fieldValue: Maybe<Scalars['String']>
  group: Array<SiteGroupConnection>
  max: Maybe<Scalars['Float']>
  min: Maybe<Scalars['Float']>
  nodes: Array<Site>
  pageInfo: PageInfo
  sum: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type SiteGroupConnectionDistinctArgs = {
  field: SiteFieldsEnum
}

export type SiteGroupConnectionGroupArgs = {
  field: SiteFieldsEnum
  limit: InputMaybe<Scalars['Int']>
  skip: InputMaybe<Scalars['Int']>
}

export type SiteGroupConnectionMaxArgs = {
  field: SiteFieldsEnum
}

export type SiteGroupConnectionMinArgs = {
  field: SiteFieldsEnum
}

export type SiteGroupConnectionSumArgs = {
  field: SiteFieldsEnum
}

export type SitePage = Node & {
  children: Array<Node>
  component: Scalars['String']
  componentChunkName: Scalars['String']
  id: Scalars['ID']
  internal: Internal
  internalComponentName: Scalars['String']
  matchPath: Maybe<Scalars['String']>
  pageContext: Maybe<Scalars['JSON']>
  parent: Maybe<Node>
  path: Scalars['String']
  pluginCreator: Maybe<SitePlugin>
}

export type SitePageConnection = {
  distinct: Array<Scalars['String']>
  edges: Array<SitePageEdge>
  group: Array<SitePageGroupConnection>
  max: Maybe<Scalars['Float']>
  min: Maybe<Scalars['Float']>
  nodes: Array<SitePage>
  pageInfo: PageInfo
  sum: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum
}

export type SitePageConnectionGroupArgs = {
  field: SitePageFieldsEnum
  limit: InputMaybe<Scalars['Int']>
  skip: InputMaybe<Scalars['Int']>
}

export type SitePageConnectionMaxArgs = {
  field: SitePageFieldsEnum
}

export type SitePageConnectionMinArgs = {
  field: SitePageFieldsEnum
}

export type SitePageConnectionSumArgs = {
  field: SitePageFieldsEnum
}

export type SitePageEdge = {
  next: Maybe<SitePage>
  node: SitePage
  previous: Maybe<SitePage>
}

export type SitePageFieldsEnum =
  | 'children'
  | 'children___children'
  | 'children___children___children'
  | 'children___children___children___children'
  | 'children___children___children___id'
  | 'children___children___id'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___parent___children'
  | 'children___children___parent___id'
  | 'children___id'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___parent___children'
  | 'children___parent___children___children'
  | 'children___parent___children___id'
  | 'children___parent___id'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___parent___children'
  | 'children___parent___parent___id'
  | 'component'
  | 'componentChunkName'
  | 'id'
  | 'internalComponentName'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'matchPath'
  | 'pageContext'
  | 'parent___children'
  | 'parent___children___children'
  | 'parent___children___children___children'
  | 'parent___children___children___id'
  | 'parent___children___id'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___parent___children'
  | 'parent___children___parent___id'
  | 'parent___id'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___parent___children'
  | 'parent___parent___children___children'
  | 'parent___parent___children___id'
  | 'parent___parent___id'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___parent___children'
  | 'parent___parent___parent___id'
  | 'path'
  | 'pluginCreator___browserAPIs'
  | 'pluginCreator___children'
  | 'pluginCreator___children___children'
  | 'pluginCreator___children___children___children'
  | 'pluginCreator___children___children___id'
  | 'pluginCreator___children___id'
  | 'pluginCreator___children___internal___content'
  | 'pluginCreator___children___internal___contentDigest'
  | 'pluginCreator___children___internal___description'
  | 'pluginCreator___children___internal___fieldOwners'
  | 'pluginCreator___children___internal___ignoreType'
  | 'pluginCreator___children___internal___mediaType'
  | 'pluginCreator___children___internal___owner'
  | 'pluginCreator___children___internal___type'
  | 'pluginCreator___children___parent___children'
  | 'pluginCreator___children___parent___id'
  | 'pluginCreator___id'
  | 'pluginCreator___internal___content'
  | 'pluginCreator___internal___contentDigest'
  | 'pluginCreator___internal___description'
  | 'pluginCreator___internal___fieldOwners'
  | 'pluginCreator___internal___ignoreType'
  | 'pluginCreator___internal___mediaType'
  | 'pluginCreator___internal___owner'
  | 'pluginCreator___internal___type'
  | 'pluginCreator___name'
  | 'pluginCreator___nodeAPIs'
  | 'pluginCreator___packageJson'
  | 'pluginCreator___parent___children'
  | 'pluginCreator___parent___children___children'
  | 'pluginCreator___parent___children___id'
  | 'pluginCreator___parent___id'
  | 'pluginCreator___parent___internal___content'
  | 'pluginCreator___parent___internal___contentDigest'
  | 'pluginCreator___parent___internal___description'
  | 'pluginCreator___parent___internal___fieldOwners'
  | 'pluginCreator___parent___internal___ignoreType'
  | 'pluginCreator___parent___internal___mediaType'
  | 'pluginCreator___parent___internal___owner'
  | 'pluginCreator___parent___internal___type'
  | 'pluginCreator___parent___parent___children'
  | 'pluginCreator___parent___parent___id'
  | 'pluginCreator___pluginFilepath'
  | 'pluginCreator___pluginOptions'
  | 'pluginCreator___resolve'
  | 'pluginCreator___ssrAPIs'
  | 'pluginCreator___version'

export type SitePageFilterInput = {
  children: InputMaybe<NodeFilterListInput>
  component: InputMaybe<StringQueryOperatorInput>
  componentChunkName: InputMaybe<StringQueryOperatorInput>
  id: InputMaybe<StringQueryOperatorInput>
  internal: InputMaybe<InternalFilterInput>
  internalComponentName: InputMaybe<StringQueryOperatorInput>
  matchPath: InputMaybe<StringQueryOperatorInput>
  pageContext: InputMaybe<JsonQueryOperatorInput>
  parent: InputMaybe<NodeFilterInput>
  path: InputMaybe<StringQueryOperatorInput>
  pluginCreator: InputMaybe<SitePluginFilterInput>
}

export type SitePageGroupConnection = {
  distinct: Array<Scalars['String']>
  edges: Array<SitePageEdge>
  field: Scalars['String']
  fieldValue: Maybe<Scalars['String']>
  group: Array<SitePageGroupConnection>
  max: Maybe<Scalars['Float']>
  min: Maybe<Scalars['Float']>
  nodes: Array<SitePage>
  pageInfo: PageInfo
  sum: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type SitePageGroupConnectionDistinctArgs = {
  field: SitePageFieldsEnum
}

export type SitePageGroupConnectionGroupArgs = {
  field: SitePageFieldsEnum
  limit: InputMaybe<Scalars['Int']>
  skip: InputMaybe<Scalars['Int']>
}

export type SitePageGroupConnectionMaxArgs = {
  field: SitePageFieldsEnum
}

export type SitePageGroupConnectionMinArgs = {
  field: SitePageFieldsEnum
}

export type SitePageGroupConnectionSumArgs = {
  field: SitePageFieldsEnum
}

export type SitePageSortInput = {
  fields: InputMaybe<Array<InputMaybe<SitePageFieldsEnum>>>
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type SitePlugin = Node & {
  browserAPIs: Maybe<Array<Maybe<Scalars['String']>>>
  children: Array<Node>
  id: Scalars['ID']
  internal: Internal
  name: Maybe<Scalars['String']>
  nodeAPIs: Maybe<Array<Maybe<Scalars['String']>>>
  packageJson: Maybe<Scalars['JSON']>
  parent: Maybe<Node>
  pluginFilepath: Maybe<Scalars['String']>
  pluginOptions: Maybe<Scalars['JSON']>
  resolve: Maybe<Scalars['String']>
  ssrAPIs: Maybe<Array<Maybe<Scalars['String']>>>
  version: Maybe<Scalars['String']>
}

export type SitePluginConnection = {
  distinct: Array<Scalars['String']>
  edges: Array<SitePluginEdge>
  group: Array<SitePluginGroupConnection>
  max: Maybe<Scalars['Float']>
  min: Maybe<Scalars['Float']>
  nodes: Array<SitePlugin>
  pageInfo: PageInfo
  sum: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginConnectionGroupArgs = {
  field: SitePluginFieldsEnum
  limit: InputMaybe<Scalars['Int']>
  skip: InputMaybe<Scalars['Int']>
}

export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginEdge = {
  next: Maybe<SitePlugin>
  node: SitePlugin
  previous: Maybe<SitePlugin>
}

export type SitePluginFieldsEnum =
  | 'browserAPIs'
  | 'children'
  | 'children___children'
  | 'children___children___children'
  | 'children___children___children___children'
  | 'children___children___children___id'
  | 'children___children___id'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___parent___children'
  | 'children___children___parent___id'
  | 'children___id'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___parent___children'
  | 'children___parent___children___children'
  | 'children___parent___children___id'
  | 'children___parent___id'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___parent___children'
  | 'children___parent___parent___id'
  | 'id'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'name'
  | 'nodeAPIs'
  | 'packageJson'
  | 'parent___children'
  | 'parent___children___children'
  | 'parent___children___children___children'
  | 'parent___children___children___id'
  | 'parent___children___id'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___parent___children'
  | 'parent___children___parent___id'
  | 'parent___id'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___parent___children'
  | 'parent___parent___children___children'
  | 'parent___parent___children___id'
  | 'parent___parent___id'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___parent___children'
  | 'parent___parent___parent___id'
  | 'pluginFilepath'
  | 'pluginOptions'
  | 'resolve'
  | 'ssrAPIs'
  | 'version'

export type SitePluginFilterInput = {
  browserAPIs: InputMaybe<StringQueryOperatorInput>
  children: InputMaybe<NodeFilterListInput>
  id: InputMaybe<StringQueryOperatorInput>
  internal: InputMaybe<InternalFilterInput>
  name: InputMaybe<StringQueryOperatorInput>
  nodeAPIs: InputMaybe<StringQueryOperatorInput>
  packageJson: InputMaybe<JsonQueryOperatorInput>
  parent: InputMaybe<NodeFilterInput>
  pluginFilepath: InputMaybe<StringQueryOperatorInput>
  pluginOptions: InputMaybe<JsonQueryOperatorInput>
  resolve: InputMaybe<StringQueryOperatorInput>
  ssrAPIs: InputMaybe<StringQueryOperatorInput>
  version: InputMaybe<StringQueryOperatorInput>
}

export type SitePluginGroupConnection = {
  distinct: Array<Scalars['String']>
  edges: Array<SitePluginEdge>
  field: Scalars['String']
  fieldValue: Maybe<Scalars['String']>
  group: Array<SitePluginGroupConnection>
  max: Maybe<Scalars['Float']>
  min: Maybe<Scalars['Float']>
  nodes: Array<SitePlugin>
  pageInfo: PageInfo
  sum: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type SitePluginGroupConnectionDistinctArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginGroupConnectionGroupArgs = {
  field: SitePluginFieldsEnum
  limit: InputMaybe<Scalars['Int']>
  skip: InputMaybe<Scalars['Int']>
}

export type SitePluginGroupConnectionMaxArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginGroupConnectionMinArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginGroupConnectionSumArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginSortInput = {
  fields: InputMaybe<Array<InputMaybe<SitePluginFieldsEnum>>>
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type SiteSiteMetadata = {
  author: Maybe<Scalars['String']>
  description: Maybe<Scalars['String']>
  siteUrl: Maybe<Scalars['String']>
  title: Maybe<Scalars['String']>
  titleTemplate: Maybe<Scalars['String']>
}

export type SiteSiteMetadataFilterInput = {
  author: InputMaybe<StringQueryOperatorInput>
  description: InputMaybe<StringQueryOperatorInput>
  siteUrl: InputMaybe<StringQueryOperatorInput>
  title: InputMaybe<StringQueryOperatorInput>
  titleTemplate: InputMaybe<StringQueryOperatorInput>
}

export type SiteSortInput = {
  fields: InputMaybe<Array<InputMaybe<SiteFieldsEnum>>>
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type SortOrderEnum = 'ASC' | 'DESC'

export type StaticImage = Node & {
  absolutePath: Maybe<Scalars['String']>
  accessTime: Maybe<Scalars['Date']>
  atime: Maybe<Scalars['Date']>
  atimeMs: Maybe<Scalars['Float']>
  base: Maybe<Scalars['String']>
  birthTime: Maybe<Scalars['Date']>
  birthtime: Maybe<Scalars['Date']>
  birthtimeMs: Maybe<Scalars['Float']>
  blksize: Maybe<Scalars['Int']>
  blocks: Maybe<Scalars['Int']>
  changeTime: Maybe<Scalars['Date']>
  children: Array<Node>
  ctime: Maybe<Scalars['Date']>
  ctimeMs: Maybe<Scalars['Float']>
  dev: Maybe<Scalars['Int']>
  dir: Maybe<Scalars['String']>
  ext: Maybe<Scalars['String']>
  extension: Maybe<Scalars['String']>
  id: Scalars['ID']
  ino: Maybe<Scalars['Int']>
  internal: Internal
  mode: Maybe<Scalars['Int']>
  modifiedTime: Maybe<Scalars['Date']>
  mtime: Maybe<Scalars['Date']>
  mtimeMs: Maybe<Scalars['Float']>
  name: Maybe<Scalars['String']>
  nlink: Maybe<Scalars['Int']>
  parent: Maybe<Node>
  prettySize: Maybe<Scalars['String']>
  rdev: Maybe<Scalars['Int']>
  relativeDirectory: Maybe<Scalars['String']>
  relativePath: Maybe<Scalars['String']>
  root: Maybe<Scalars['String']>
  size: Maybe<Scalars['Int']>
  sourceInstanceName: Maybe<Scalars['String']>
  uid: Maybe<Scalars['Int']>
}

export type StaticImageAccessTimeArgs = {
  difference: InputMaybe<Scalars['String']>
  formatString: InputMaybe<Scalars['String']>
  fromNow: InputMaybe<Scalars['Boolean']>
  locale: InputMaybe<Scalars['String']>
}

export type StaticImageAtimeArgs = {
  difference: InputMaybe<Scalars['String']>
  formatString: InputMaybe<Scalars['String']>
  fromNow: InputMaybe<Scalars['Boolean']>
  locale: InputMaybe<Scalars['String']>
}

export type StaticImageBirthTimeArgs = {
  difference: InputMaybe<Scalars['String']>
  formatString: InputMaybe<Scalars['String']>
  fromNow: InputMaybe<Scalars['Boolean']>
  locale: InputMaybe<Scalars['String']>
}

export type StaticImageBirthtimeArgs = {
  difference: InputMaybe<Scalars['String']>
  formatString: InputMaybe<Scalars['String']>
  fromNow: InputMaybe<Scalars['Boolean']>
  locale: InputMaybe<Scalars['String']>
}

export type StaticImageChangeTimeArgs = {
  difference: InputMaybe<Scalars['String']>
  formatString: InputMaybe<Scalars['String']>
  fromNow: InputMaybe<Scalars['Boolean']>
  locale: InputMaybe<Scalars['String']>
}

export type StaticImageCtimeArgs = {
  difference: InputMaybe<Scalars['String']>
  formatString: InputMaybe<Scalars['String']>
  fromNow: InputMaybe<Scalars['Boolean']>
  locale: InputMaybe<Scalars['String']>
}

export type StaticImageModifiedTimeArgs = {
  difference: InputMaybe<Scalars['String']>
  formatString: InputMaybe<Scalars['String']>
  fromNow: InputMaybe<Scalars['Boolean']>
  locale: InputMaybe<Scalars['String']>
}

export type StaticImageMtimeArgs = {
  difference: InputMaybe<Scalars['String']>
  formatString: InputMaybe<Scalars['String']>
  fromNow: InputMaybe<Scalars['Boolean']>
  locale: InputMaybe<Scalars['String']>
}

export type StaticImageConnection = {
  distinct: Array<Scalars['String']>
  edges: Array<StaticImageEdge>
  group: Array<StaticImageGroupConnection>
  max: Maybe<Scalars['Float']>
  min: Maybe<Scalars['Float']>
  nodes: Array<StaticImage>
  pageInfo: PageInfo
  sum: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type StaticImageConnectionDistinctArgs = {
  field: StaticImageFieldsEnum
}

export type StaticImageConnectionGroupArgs = {
  field: StaticImageFieldsEnum
  limit: InputMaybe<Scalars['Int']>
  skip: InputMaybe<Scalars['Int']>
}

export type StaticImageConnectionMaxArgs = {
  field: StaticImageFieldsEnum
}

export type StaticImageConnectionMinArgs = {
  field: StaticImageFieldsEnum
}

export type StaticImageConnectionSumArgs = {
  field: StaticImageFieldsEnum
}

export type StaticImageEdge = {
  next: Maybe<StaticImage>
  node: StaticImage
  previous: Maybe<StaticImage>
}

export type StaticImageFieldsEnum =
  | 'absolutePath'
  | 'accessTime'
  | 'atime'
  | 'atimeMs'
  | 'base'
  | 'birthTime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'changeTime'
  | 'children'
  | 'children___children'
  | 'children___children___children'
  | 'children___children___children___children'
  | 'children___children___children___id'
  | 'children___children___id'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___parent___children'
  | 'children___children___parent___id'
  | 'children___id'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___parent___children'
  | 'children___parent___children___children'
  | 'children___parent___children___id'
  | 'children___parent___id'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___parent___children'
  | 'children___parent___parent___id'
  | 'ctime'
  | 'ctimeMs'
  | 'dev'
  | 'dir'
  | 'ext'
  | 'extension'
  | 'id'
  | 'ino'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'mode'
  | 'modifiedTime'
  | 'mtime'
  | 'mtimeMs'
  | 'name'
  | 'nlink'
  | 'parent___children'
  | 'parent___children___children'
  | 'parent___children___children___children'
  | 'parent___children___children___id'
  | 'parent___children___id'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___parent___children'
  | 'parent___children___parent___id'
  | 'parent___id'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___parent___children'
  | 'parent___parent___children___children'
  | 'parent___parent___children___id'
  | 'parent___parent___id'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___parent___children'
  | 'parent___parent___parent___id'
  | 'prettySize'
  | 'rdev'
  | 'relativeDirectory'
  | 'relativePath'
  | 'root'
  | 'size'
  | 'sourceInstanceName'
  | 'uid'

export type StaticImageFilterInput = {
  absolutePath: InputMaybe<StringQueryOperatorInput>
  accessTime: InputMaybe<DateQueryOperatorInput>
  atime: InputMaybe<DateQueryOperatorInput>
  atimeMs: InputMaybe<FloatQueryOperatorInput>
  base: InputMaybe<StringQueryOperatorInput>
  birthTime: InputMaybe<DateQueryOperatorInput>
  birthtime: InputMaybe<DateQueryOperatorInput>
  birthtimeMs: InputMaybe<FloatQueryOperatorInput>
  blksize: InputMaybe<IntQueryOperatorInput>
  blocks: InputMaybe<IntQueryOperatorInput>
  changeTime: InputMaybe<DateQueryOperatorInput>
  children: InputMaybe<NodeFilterListInput>
  ctime: InputMaybe<DateQueryOperatorInput>
  ctimeMs: InputMaybe<FloatQueryOperatorInput>
  dev: InputMaybe<IntQueryOperatorInput>
  dir: InputMaybe<StringQueryOperatorInput>
  ext: InputMaybe<StringQueryOperatorInput>
  extension: InputMaybe<StringQueryOperatorInput>
  id: InputMaybe<StringQueryOperatorInput>
  ino: InputMaybe<IntQueryOperatorInput>
  internal: InputMaybe<InternalFilterInput>
  mode: InputMaybe<IntQueryOperatorInput>
  modifiedTime: InputMaybe<DateQueryOperatorInput>
  mtime: InputMaybe<DateQueryOperatorInput>
  mtimeMs: InputMaybe<FloatQueryOperatorInput>
  name: InputMaybe<StringQueryOperatorInput>
  nlink: InputMaybe<IntQueryOperatorInput>
  parent: InputMaybe<NodeFilterInput>
  prettySize: InputMaybe<StringQueryOperatorInput>
  rdev: InputMaybe<IntQueryOperatorInput>
  relativeDirectory: InputMaybe<StringQueryOperatorInput>
  relativePath: InputMaybe<StringQueryOperatorInput>
  root: InputMaybe<StringQueryOperatorInput>
  size: InputMaybe<IntQueryOperatorInput>
  sourceInstanceName: InputMaybe<StringQueryOperatorInput>
  uid: InputMaybe<IntQueryOperatorInput>
}

export type StaticImageGroupConnection = {
  distinct: Array<Scalars['String']>
  edges: Array<StaticImageEdge>
  field: Scalars['String']
  fieldValue: Maybe<Scalars['String']>
  group: Array<StaticImageGroupConnection>
  max: Maybe<Scalars['Float']>
  min: Maybe<Scalars['Float']>
  nodes: Array<StaticImage>
  pageInfo: PageInfo
  sum: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type StaticImageGroupConnectionDistinctArgs = {
  field: StaticImageFieldsEnum
}

export type StaticImageGroupConnectionGroupArgs = {
  field: StaticImageFieldsEnum
  limit: InputMaybe<Scalars['Int']>
  skip: InputMaybe<Scalars['Int']>
}

export type StaticImageGroupConnectionMaxArgs = {
  field: StaticImageFieldsEnum
}

export type StaticImageGroupConnectionMinArgs = {
  field: StaticImageFieldsEnum
}

export type StaticImageGroupConnectionSumArgs = {
  field: StaticImageFieldsEnum
}

export type StaticImageSortInput = {
  fields: InputMaybe<Array<InputMaybe<StaticImageFieldsEnum>>>
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

/** Aggregate offer information, for a given SKU that is available to be fulfilled by multiple sellers. */
export type StoreAggregateOffer = {
  /** Highest price among all sellers. */
  highPrice: Scalars['Float']
  /** Lowest price among all sellers. */
  lowPrice: Scalars['Float']
  /** Number of sellers selling this SKU. */
  offerCount: Scalars['Int']
  /** Array with information on each available offer. */
  offers: Array<StoreOffer>
  /** ISO code of the currency used for the offer prices. */
  priceCurrency: Scalars['String']
}

/** Average rating, based on multiple ratings or reviews. */
export type StoreAggregateRating = {
  /** Value of the aggregate rating. */
  ratingValue: Scalars['Float']
  /** Total number of ratings. */
  reviewCount: Scalars['Int']
}

/** information about the author of a product review or rating. */
export type StoreAuthor = {
  /** Author name. */
  name: Scalars['String']
}

/** Brand of a given product. */
export type StoreBrand = {
  /** Brand name. */
  name: Scalars['String']
}

/** List of items consisting of chain linked web pages, ending with the current page. */
export type StoreBreadcrumbList = {
  /** Array with breadcrumb elements. */
  itemListElement: Array<StoreListItem>
  /** Number of breadcrumbs in the list. */
  numberOfItems: Scalars['Int']
}

/** Shopping cart information. */
export type StoreCart = {
  /** List of shopping cart messages. */
  messages: Array<StoreCartMessage>
  /** Order information, including `orderNumber` and `acceptedOffer`. */
  order: StoreOrder
}

/** Shopping cart message. */
export type StoreCartMessage = {
  /** Shopping cart message status, which can be `INFO`, `WARNING` OR `ERROR`. */
  status: StoreStatus
  /** Shopping cart message text. */
  text: Scalars['String']
}

/** Product collection information. */
export type StoreCollection = {
  /** List of items consisting of chain linked web pages, ending with the current page. */
  breadcrumbList: StoreBreadcrumbList
  /** Collection ID. */
  id: Scalars['ID']
  /** Collection meta information. Used for search. */
  meta: StoreCollectionMeta
  /** Meta tag data. */
  seo: StoreSeo
  /** Corresponding collection URL slug, with which to retrieve this entity. */
  slug: Scalars['String']
  /** Collection type. */
  type: StoreCollectionType
}

/** Collection connection pagination information. */
export type StoreCollectionConnection = {
  /** Array with collection connection page edges. */
  edges: Array<StoreCollectionEdge>
  /** Collection connection page information. */
  pageInfo: StorePageInfo
}

/** Collection pagination edge. */
export type StoreCollectionEdge = {
  /** Collection pagination cursor. */
  cursor: Scalars['String']
  /** Collection pagination node. */
  node: StoreCollection
}

/** Product collection facet, used for search. */
export type StoreCollectionFacet = {
  /** Facet key. */
  key: Scalars['String']
  /** Facet value. */
  value: Scalars['String']
}

/** Collection meta information. Used for search. */
export type StoreCollectionMeta = {
  /** List of selected collection facets. */
  selectedFacets: Array<StoreCollectionFacet>
}

/** Product collection type. Possible values are `Department`, `Category`, `Brand` or `Cluster`. */
export type StoreCollectionType =
  | 'Brand'
  | 'Category'
  | 'Cluster'
  | 'Department'

/** Search facet information. */
export type StoreFacet = {
  /** Facet key. */
  key: Scalars['String']
  /** Facet label. */
  label: Scalars['String']
  /** Facet type. Possible values are `BOOLEAN` and `RANGE`. */
  type: StoreFacetType
  /** Array with information on each facet value. */
  values: Array<StoreFacetValue>
}

/** Search facet type. */
export type StoreFacetType = 'BOOLEAN' | 'RANGE'

/** Information of a specific facet value. */
export type StoreFacetValue = {
  /** Facet value label. */
  label: Scalars['String']
  /** Number of items with this facet. */
  quantity: Scalars['Int']
  /** Indicates whether facet is selected. */
  selected: Scalars['Boolean']
  /** Facet value. */
  value: Scalars['String']
}

/** Image. */
export type StoreImage = {
  /** Alias for the image. */
  alternateName: Scalars['String']
  /** Image URL. */
  url: Scalars['String']
}

/** Item of a list. */
export type StoreListItem = {
  /** List item value. */
  item: Scalars['String']
  /** Name of the list item. */
  name: Scalars['String']
  /** Position of the item in the list. */
  position: Scalars['Int']
}

/** Offer information. */
export type StoreOffer = {
  /** Offer item availability. */
  availability: Scalars['String']
  /** Offer item condition. */
  itemCondition: Scalars['String']
  /** Information on the item being offered. */
  itemOffered: StoreProduct
  /** This is displayed as the "from" price in the context of promotions' price comparison. This may change before it reaches the shelf. */
  listPrice: Scalars['Float']
  /** Also known as spot price. */
  price: Scalars['Float']
  /** ISO code of the currency used for the offer prices. */
  priceCurrency: Scalars['String']
  /** Next date in which price is scheduled to change. If there is no scheduled change, this will be set a year in the future from current time. */
  priceValidUntil: Scalars['String']
  /** Number of items offered. */
  quantity: Scalars['Int']
  /** Seller responsible for the offer. */
  seller: StoreOrganization
  /** Computed price before applying coupons, taxes or benefits. This may change before it reaches the shelf. */
  sellingPrice: Scalars['Float']
}

/** Information of a specific order. */
export type StoreOrder = {
  /** Array with information on each accepted offer. */
  acceptedOffer: Array<StoreOffer>
  /** ID of the order in [VTEX order management](https://help.vtex.com/en/tutorial/license-manager-resources-oms--60QcBsvWeum02cFi3GjBzg#). */
  orderNumber: Scalars['String']
}

/** Organization. */
export type StoreOrganization = {
  /** Organization ID. */
  identifier: Scalars['String']
}

/** Page information. */
export type StorePageInfo = {
  /** Page cursor end. */
  endCursor: Scalars['String']
  /** Indicates whether next page exists. */
  hasNextPage: Scalars['Boolean']
  /** Indicates whether previous page exists. */
  hasPreviousPage: Scalars['Boolean']
  /** Page cursor start. */
  startCursor: Scalars['String']
  /** Total number of items (products or collections), not pages. */
  totalCount: Scalars['Int']
}

/** Client profile data. */
export type StorePerson = {
  /** Client email. */
  email: Scalars['String']
  /** Client last name. */
  familyName: Scalars['String']
  /** Client first name. */
  givenName: Scalars['String']
  /** Client ID. */
  id: Scalars['String']
}

/** Product information. Products are variants within product groups, equivalent to VTEX [SKUs](https://help.vtex.com/en/tutorial/what-is-an-sku--1K75s4RXAQyOuGUYKMM68u#). For example, you may have a **Shirt** product group with associated products such as **Blue shirt size L**, **Green shirt size XL** and so on. */
export type StoreProduct = {
  /** Array of additional properties. */
  additionalProperty: Array<StorePropertyValue>
  /** Aggregate ratings data. */
  aggregateRating: StoreAggregateRating
  /** Product brand. */
  brand: StoreBrand
  /** List of items consisting of chain linked web pages, ending with the current page. */
  breadcrumbList: StoreBreadcrumbList
  /** Product description. */
  description: Scalars['String']
  /** Global Trade Item Number. */
  gtin: Scalars['String']
  /** Array of images. */
  image: Array<StoreImage>
  /** Indicates product group related to this product. */
  isVariantOf: StoreProductGroup
  /** Product name. */
  name: Scalars['String']
  /** Aggregate offer information. */
  offers: StoreAggregateOffer
  /** Product ID, such as [ISBN](https://www.isbn-international.org/content/what-isbn) or similar global IDs. */
  productID: Scalars['String']
  /** Array with review information. */
  review: Array<StoreReview>
  /** Meta tag data. */
  seo: StoreSeo
  /** Stock Keeping Unit. Merchant-specific ID for the product. */
  sku: Scalars['String']
  /** Corresponding collection URL slug, with which to retrieve this entity. */
  slug: Scalars['String']
}

/** Product connection pagination information. */
export type StoreProductConnection = {
  /** Array with product connection page edges. */
  edges: Array<StoreProductEdge>
  /** Product connection page information. */
  pageInfo: StorePageInfo
}

/** Product pagination edge. */
export type StoreProductEdge = {
  /** Product pagination cursor. */
  cursor: Scalars['String']
  /** Product pagination node. */
  node: StoreProduct
}

/** Product group information. Product groups are catalog entities that may contain variants. They are equivalent to VTEX [Products](https://help.vtex.com/en/tutorial/what-is-a-product--2zrB2gFCHyQokCKKE8kuAw#), whereas each variant is equivalent to a VTEX [SKU](https://help.vtex.com/en/tutorial/what-is-an-sku--1K75s4RXAQyOuGUYKMM68u#). For example, you may have a **Shirt** product group with associated products such as **Blue shirt size L**, **Green shirt size XL** and so on. */
export type StoreProductGroup = {
  /** Array of additional properties. */
  additionalProperty: Array<StorePropertyValue>
  /** Array of variants related to product group. Variants are equivalent to VTEX [SKUs](https://help.vtex.com/en/tutorial/what-is-an-sku--1K75s4RXAQyOuGUYKMM68u#). */
  hasVariant: Array<StoreProduct>
  /** Product group name. */
  name: Scalars['String']
  /** Product group ID. */
  productGroupID: Scalars['String']
}

/** Properties that can be associated with products and products groups. */
export type StorePropertyValue = {
  /** Property name. */
  name: Scalars['String']
  /** Property id. This propert changes according to the content of the object. */
  propertyID: Scalars['String']
  /** Property value. May hold a string or the string representation of an object. */
  value: Scalars['ObjectOrString']
  /** Specifies the nature of the value */
  valueReference: Scalars['String']
}

/** Information of a given review. */
export type StoreReview = {
  /** Review author. */
  author: StoreAuthor
  /** Review rating information. */
  reviewRating: StoreReviewRating
}

/** Information of a given review rating. */
export type StoreReviewRating = {
  /** Best rating value. */
  bestRating: Scalars['Float']
  /** Rating value. */
  ratingValue: Scalars['Float']
}

/** Search result. */
export type StoreSearchResult = {
  /** Array of search result facets. */
  facets: Array<StoreFacet>
  /** Search result products. */
  products: StoreProductConnection
  /** Search result suggestions. */
  suggestions: StoreSuggestions
}

/** Search Engine Optimization (SEO) tags data. */
export type StoreSeo = {
  /** Canonical tag. */
  canonical: Scalars['String']
  /** Description tag. */
  description: Scalars['String']
  /** Title tag. */
  title: Scalars['String']
  /** Title template tag. */
  titleTemplate: Scalars['String']
}

/** Session information. */
export type StoreSession = {
  /** Session channel. */
  channel: Maybe<Scalars['String']>
  /** Session country. */
  country: Maybe<Scalars['String']>
  /** Session postal code. */
  postalCode: Maybe<Scalars['String']>
}

/** Product sorting options used in search. */
export type StoreSort =
  | 'discount_desc'
  | 'name_asc'
  | 'name_desc'
  | 'orders_desc'
  | 'price_asc'
  | 'price_desc'
  | 'release_desc'
  | 'score_desc'

/** Status used to indicate type of message. For instance, in shopping cart messages. */
export type StoreStatus = 'ERROR' | 'INFO' | 'WARNING'

/** Suggestion term. */
export type StoreSuggestionTerm = {
  /** Its occurrences count. */
  count: Scalars['Int']
  /** The term. */
  value: Scalars['String']
}

/** Suggestions information. */
export type StoreSuggestions = {
  /** Array with suggestion products' information. */
  products: Array<StoreProduct>
  /** Array with suggestion terms. */
  terms: Array<StoreSuggestionTerm>
}

export type StringQueryOperatorInput = {
  eq: InputMaybe<Scalars['String']>
  glob: InputMaybe<Scalars['String']>
  in: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  ne: InputMaybe<Scalars['String']>
  nin: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  regex: InputMaybe<Scalars['String']>
}

export type ContentfulCommonQuestionsAnswerTextNode = Node & {
  answer: Maybe<Scalars['String']>
  children: Array<Node>
  id: Scalars['ID']
  internal: Internal
  parent: Maybe<Node>
  sys: Maybe<ContentfulCommonQuestionsAnswerTextNodeSys>
}

export type ContentfulCommonQuestionsAnswerTextNodeConnection = {
  distinct: Array<Scalars['String']>
  edges: Array<ContentfulCommonQuestionsAnswerTextNodeEdge>
  group: Array<ContentfulCommonQuestionsAnswerTextNodeGroupConnection>
  max: Maybe<Scalars['Float']>
  min: Maybe<Scalars['Float']>
  nodes: Array<ContentfulCommonQuestionsAnswerTextNode>
  pageInfo: PageInfo
  sum: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type ContentfulCommonQuestionsAnswerTextNodeConnectionDistinctArgs = {
  field: ContentfulCommonQuestionsAnswerTextNodeFieldsEnum
}

export type ContentfulCommonQuestionsAnswerTextNodeConnectionGroupArgs = {
  field: ContentfulCommonQuestionsAnswerTextNodeFieldsEnum
  limit: InputMaybe<Scalars['Int']>
  skip: InputMaybe<Scalars['Int']>
}

export type ContentfulCommonQuestionsAnswerTextNodeConnectionMaxArgs = {
  field: ContentfulCommonQuestionsAnswerTextNodeFieldsEnum
}

export type ContentfulCommonQuestionsAnswerTextNodeConnectionMinArgs = {
  field: ContentfulCommonQuestionsAnswerTextNodeFieldsEnum
}

export type ContentfulCommonQuestionsAnswerTextNodeConnectionSumArgs = {
  field: ContentfulCommonQuestionsAnswerTextNodeFieldsEnum
}

export type ContentfulCommonQuestionsAnswerTextNodeEdge = {
  next: Maybe<ContentfulCommonQuestionsAnswerTextNode>
  node: ContentfulCommonQuestionsAnswerTextNode
  previous: Maybe<ContentfulCommonQuestionsAnswerTextNode>
}

export type ContentfulCommonQuestionsAnswerTextNodeFieldsEnum =
  | 'answer'
  | 'children'
  | 'children___children'
  | 'children___children___children'
  | 'children___children___children___children'
  | 'children___children___children___id'
  | 'children___children___id'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___parent___children'
  | 'children___children___parent___id'
  | 'children___id'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___parent___children'
  | 'children___parent___children___children'
  | 'children___parent___children___id'
  | 'children___parent___id'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___parent___children'
  | 'children___parent___parent___id'
  | 'id'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'parent___children'
  | 'parent___children___children'
  | 'parent___children___children___children'
  | 'parent___children___children___id'
  | 'parent___children___id'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___parent___children'
  | 'parent___children___parent___id'
  | 'parent___id'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___parent___children'
  | 'parent___parent___children___children'
  | 'parent___parent___children___id'
  | 'parent___parent___id'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___parent___children'
  | 'parent___parent___parent___id'
  | 'sys___type'

export type ContentfulCommonQuestionsAnswerTextNodeFilterInput = {
  answer: InputMaybe<StringQueryOperatorInput>
  children: InputMaybe<NodeFilterListInput>
  id: InputMaybe<StringQueryOperatorInput>
  internal: InputMaybe<InternalFilterInput>
  parent: InputMaybe<NodeFilterInput>
  sys: InputMaybe<ContentfulCommonQuestionsAnswerTextNodeSysFilterInput>
}

export type ContentfulCommonQuestionsAnswerTextNodeFilterListInput = {
  elemMatch: InputMaybe<ContentfulCommonQuestionsAnswerTextNodeFilterInput>
}

export type ContentfulCommonQuestionsAnswerTextNodeGroupConnection = {
  distinct: Array<Scalars['String']>
  edges: Array<ContentfulCommonQuestionsAnswerTextNodeEdge>
  field: Scalars['String']
  fieldValue: Maybe<Scalars['String']>
  group: Array<ContentfulCommonQuestionsAnswerTextNodeGroupConnection>
  max: Maybe<Scalars['Float']>
  min: Maybe<Scalars['Float']>
  nodes: Array<ContentfulCommonQuestionsAnswerTextNode>
  pageInfo: PageInfo
  sum: Maybe<Scalars['Float']>
  totalCount: Scalars['Int']
}

export type ContentfulCommonQuestionsAnswerTextNodeGroupConnectionDistinctArgs =
  {
    field: ContentfulCommonQuestionsAnswerTextNodeFieldsEnum
  }

export type ContentfulCommonQuestionsAnswerTextNodeGroupConnectionGroupArgs = {
  field: ContentfulCommonQuestionsAnswerTextNodeFieldsEnum
  limit: InputMaybe<Scalars['Int']>
  skip: InputMaybe<Scalars['Int']>
}

export type ContentfulCommonQuestionsAnswerTextNodeGroupConnectionMaxArgs = {
  field: ContentfulCommonQuestionsAnswerTextNodeFieldsEnum
}

export type ContentfulCommonQuestionsAnswerTextNodeGroupConnectionMinArgs = {
  field: ContentfulCommonQuestionsAnswerTextNodeFieldsEnum
}

export type ContentfulCommonQuestionsAnswerTextNodeGroupConnectionSumArgs = {
  field: ContentfulCommonQuestionsAnswerTextNodeFieldsEnum
}

export type ContentfulCommonQuestionsAnswerTextNodeSortInput = {
  fields: InputMaybe<
    Array<InputMaybe<ContentfulCommonQuestionsAnswerTextNodeFieldsEnum>>
  >
  order: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type ContentfulCommonQuestionsAnswerTextNodeSys = {
  type: Maybe<Scalars['String']>
}

export type ContentfulCommonQuestionsAnswerTextNodeSysFilterInput = {
  type: InputMaybe<StringQueryOperatorInput>
}

export type ProductSummary_ProductFragment = {
  slug: string
  sku: string
  name: string
  gtin: string
  id: string
  brand: { name: string; brandName: string }
  isVariantOf: { productGroupID: string; name: string }
  image: Array<{ url: string; alternateName: string }>
  offers: {
    lowPrice: number
    offers: Array<{
      availability: string
      price: number
      listPrice: number
      quantity: number
      seller: { identifier: string }
    }>
  }
}

export type UpdateSessionMutationMutationVariables = Exact<{
  session: IStoreSession
}>

export type UpdateSessionMutationMutation = {
  updateSession: { channel: string | null }
}

export type Filter_FacetsFragment = {
  key: string
  label: string
  type: StoreFacetType
  values: Array<{
    label: string
    value: string
    selected: boolean
    quantity: number
  }>
}

export type ProductDetailsFragment_ProductFragment = {
  sku: string
  name: string
  gtin: string
  description: string
  id: string
  isVariantOf: { productGroupID: string; name: string }
  image: Array<{ url: string; alternateName: string }>
  brand: { name: string }
  offers: {
    lowPrice: number
    offers: Array<{
      availability: string
      price: number
      listPrice: number
      seller: { identifier: string }
    }>
  }
  breadcrumbList: {
    itemListElement: Array<{ item: string; name: string; position: number }>
  }
}

export type ProductGalleryQueryQueryVariables = Exact<{
  first: Scalars['Int']
  after: Scalars['String']
  sort: StoreSort
  term: Scalars['String']
  selectedFacets: Array<IStoreSelectedFacet> | IStoreSelectedFacet
}>

export type ProductGalleryQueryQuery = {
  search: {
    products: {
      pageInfo: { totalCount: number }
      edges: Array<{
        node: {
          slug: string
          sku: string
          name: string
          gtin: string
          id: string
          brand: { name: string; brandName: string }
          isVariantOf: { productGroupID: string; name: string }
          image: Array<{ url: string; alternateName: string }>
          offers: {
            lowPrice: number
            offers: Array<{
              availability: string
              price: number
              listPrice: number
              quantity: number
              seller: { identifier: string }
            }>
          }
        }
      }>
    }
    facets: Array<{
      key: string
      label: string
      type: StoreFacetType
      values: Array<{
        label: string
        value: string
        selected: boolean
        quantity: number
      }>
    }>
  }
}

export type CollectionPageQueryQueryVariables = Exact<{ [key: string]: never }>

export type CollectionPageQueryQuery = {
  site: {
    siteMetadata: {
      titleTemplate: string | null
      title: string | null
      description: string | null
    } | null
  } | null
}

export type ServerCollectionPageQueryQueryVariables = Exact<{
  slug: Scalars['String']
}>

export type ServerCollectionPageQueryQuery = {
  collection: {
    seo: { title: string; description: string }
    breadcrumbList: {
      itemListElement: Array<{ item: string; name: string; position: number }>
    }
    meta: { selectedFacets: Array<{ key: string; value: string }> }
  }
}

export type ProductPageQueryQueryVariables = Exact<{ [key: string]: never }>

export type ProductPageQueryQuery = {
  site: {
    siteMetadata: {
      title: string | null
      description: string | null
      titleTemplate: string | null
      siteUrl: string | null
    } | null
  } | null
}

export type ServerProductPageQueryQueryVariables = Exact<{
  id: Scalars['String']
}>

export type ServerProductPageQueryQuery = {
  product: {
    slug: string
    sku: string
    gtin: string
    name: string
    description: string
    id: string
    seo: { title: string; description: string }
    brand: { name: string }
    breadcrumbList: {
      itemListElement: Array<{ item: string; name: string; position: number }>
    }
    image: Array<{ url: string; alternateName: string }>
    offers: {
      lowPrice: number
      highPrice: number
      priceCurrency: string
      offers: Array<{
        availability: string
        price: number
        priceValidUntil: string
        priceCurrency: string
        itemCondition: string
        listPrice: number
        seller: { identifier: string }
      }>
    }
    isVariantOf: { productGroupID: string; name: string }
  }
}

export type HomePageQueryQueryVariables = Exact<{ [key: string]: never }>

export type HomePageQueryQuery = {
  site: {
    siteMetadata: {
      title: string | null
      description: string | null
      titleTemplate: string | null
    } | null
  } | null
  allContentfulCommonQuestions: {
    nodes: Array<{
      question: string | null
      answer: { answer: string | null } | null
    }>
  }
  allContentfulVideoSection: {
    nodes: Array<{
      buttonText: string | null
      buttonUrl: string | null
      content: string | null
      title: string | null
      video: {
        file: { fileName: string | null; url: string | null } | null
      } | null
    }>
  }
  allContentfulBannerMedium: {
    nodes: Array<{
      link: string | null
      imagemBannerMedium: { url: string | null } | null
    }>
  }
}

export type SearchPageQueryQueryVariables = Exact<{ [key: string]: never }>

export type SearchPageQueryQuery = {
  site: {
    siteMetadata: {
      titleTemplate: string | null
      title: string | null
      description: string | null
    } | null
  } | null
}

export type ValidateCartMutationMutationVariables = Exact<{
  cart: IStoreCart
}>

export type ValidateCartMutationMutation = {
  validateCart: {
    order: {
      orderNumber: string
      acceptedOffer: Array<{
        quantity: number
        price: number
        listPrice: number
        seller: { identifier: string }
        itemOffered: {
          sku: string
          name: string
          gtin: string
          image: Array<{ url: string; alternateName: string }>
          brand: { name: string }
          isVariantOf: { productGroupID: string; name: string }
        }
      }>
    }
    messages: Array<{ text: string; status: StoreStatus }>
  } | null
}

export type CartMessageFragment = { text: string; status: StoreStatus }

export type CartItemFragment = {
  quantity: number
  price: number
  listPrice: number
  seller: { identifier: string }
  itemOffered: {
    sku: string
    name: string
    gtin: string
    image: Array<{ url: string; alternateName: string }>
    brand: { name: string }
    isVariantOf: { productGroupID: string; name: string }
  }
}

export type PersonQueryQueryVariables = Exact<{ [key: string]: never }>

export type PersonQueryQuery = {
  person: {
    id: string
    email: string
    givenName: string
    familyName: string
  } | null
}

export type BrowserProductQueryQueryVariables = Exact<{
  locator: Array<IStoreSelectedFacet> | IStoreSelectedFacet
}>

export type BrowserProductQueryQuery = {
  product: {
    sku: string
    name: string
    gtin: string
    description: string
    id: string
    isVariantOf: { productGroupID: string; name: string }
    image: Array<{ url: string; alternateName: string }>
    brand: { name: string }
    offers: {
      lowPrice: number
      offers: Array<{
        availability: string
        price: number
        listPrice: number
        seller: { identifier: string }
      }>
    }
    breadcrumbList: {
      itemListElement: Array<{ item: string; name: string; position: number }>
    }
  }
}

export type ProductsQueryQueryVariables = Exact<{
  first: Scalars['Int']
  after: InputMaybe<Scalars['String']>
  sort: StoreSort
  term: Scalars['String']
  selectedFacets: Array<IStoreSelectedFacet> | IStoreSelectedFacet
}>

export type ProductsQueryQuery = {
  search: {
    products: {
      pageInfo: { totalCount: number }
      edges: Array<{
        node: {
          slug: string
          sku: string
          name: string
          gtin: string
          id: string
          brand: { name: string; brandName: string }
          isVariantOf: { productGroupID: string; name: string }
          image: Array<{ url: string; alternateName: string }>
          offers: {
            lowPrice: number
            offers: Array<{
              availability: string
              price: number
              listPrice: number
              quantity: number
              seller: { identifier: string }
            }>
          }
        }
      }>
    }
  }
}
