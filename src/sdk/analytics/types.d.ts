type AdditionalItemProperties = {
  product_reference_id: string | null
  item_variant_name: string | null
}

export type AnalyticsItem = Item & AdditionalItemProperties

export interface SearchSelectItemParams {
  url: string
  items: Array<{
    item_id?: string
    item_variant?: string
    index: number
  }>
}

export interface SearchSelectItemEvent {
  name: 'search_select_item'
  params: SearchSelectItemParams
}

export interface ItemId {
  item_id: string
}

export interface ItemName {
  item_name: string
}

export type ItemUniqueIdentifier = ItemId | ItemName

export interface ItemWithoutIdentifier {
  affiliation?: string
  coupon?: string
  currency?: CurrencyCode
  discount?: number
  index?: number
  item_brand?: string
  item_category?: string
  item_category2?: string
  item_category3?: string
  item_category4?: string
  item_category5?: string
  item_list_id?: string
  item_list_name?: string
  item_variant?: string
  location_id?: string
  price?: number
  quantity?: number
}

export type Item = ItemUniqueIdentifier & ItemWithoutIdentifier

export interface PromotionParams {
  creative_name?: string
  creative_slot?: string
  location_id?: string
  promotion_id?: string
  promotion_name?: string
}

export type PromotionItem = Item & PromotionParams

export interface AddToCartParams<T extends Item = Item> {
  currency?: CurrencyCode
  value?: number
  items?: T[]
}

export interface AddToCartEvent<T extends Item = Item> {
  name: 'add_to_cart'
  params: AddToCartParams<T>
}

export interface RemoveFromCartParams<T extends Item = Item> {
  currency?: CurrencyCode
  value?: number
  items?: T[]
}

export interface RemoveFromCartEvent<T extends Item = Item> {
  name: 'remove_from_cart'
  params: RemoveFromCartParams<T>
}

export interface SearchParams {
  search_term: string
}

export interface SearchEvent {
  name: 'search'
  params: SearchParams
}

export interface SelectItemParams<T extends Item = Item> {
  item_list_id?: string
  item_list_name?: string
  shelf_name?: string
  items?: T[]
}

export interface SelectItemEvent<T extends Item = Item> {
  name: 'select_item'
  params: SelectItemParams<T>
}

export interface SelectPromotionItems<T extends PromotionItem = PromotionItem> {
  items?: T[]
}

export type SelectPromotionParams<T extends PromotionItem = PromotionItem> =
  PromotionParams & SelectPromotionItems<T>

export interface SelectPromotionEvent<T extends PromotionItem = PromotionItem> {
  name: 'select_promotion'
  params: SelectPromotionParams<T>
}

export interface ViewItemListParams<T extends Item = Item> {
  item_list_id?: string
  item_list_name?: string
  items?: T[]
}

export interface ViewItemListEvent<T extends Item = Item> {
  name: 'view_item_list'
  params: ViewItemListParams<T>
}

export interface ViewItemParams<T extends Item = Item> {
  currency?: CurrencyCode
  value?: number
  items?: T[]
}

export interface ViewItemEvent<T extends Item = Item> {
  name: 'view_item'
  params: ViewItemParams<T>
}

export interface ViewPromotionItems<T extends PromotionItem = PromotionItem> {
  items?: T[]
}

export type ViewPromotionParams<T extends PromotionItem = PromotionItem> =
  PromotionParams & ViewPromotionItems<T>

export interface ViewPromotionEvent<T extends PromotionItem = PromotionItem> {
  name: 'view_promotion'
  params: ViewPromotionParams<T>
}

/**
 * The values for this type were taken from https://github.com/freeall/currency-codes/blob/master/iso-4217-list-one.xml
 */
export type CurrencyCode =
  | 'AFN'
  | 'EUR'
  | 'ALL'
  | 'DZD'
  | 'USD'
  | 'EUR'
  | 'AOA'
  | 'XCD'
  | 'XCD'
  | 'ARS'
  | 'AMD'
  | 'AWG'
  | 'AUD'
  | 'EUR'
  | 'AZN'
  | 'BSD'
  | 'BHD'
  | 'BDT'
  | 'BBD'
  | 'BYN'
  | 'EUR'
  | 'BZD'
  | 'XOF'
  | 'BMD'
  | 'INR'
  | 'BTN'
  | 'BOB'
  | 'BOV'
  | 'USD'
  | 'BAM'
  | 'BWP'
  | 'NOK'
  | 'BRL'
  | 'USD'
  | 'BND'
  | 'BGN'
  | 'XOF'
  | 'BIF'
  | 'CVE'
  | 'KHR'
  | 'XAF'
  | 'CAD'
  | 'KYD'
  | 'XAF'
  | 'XAF'
  | 'CLP'
  | 'CLF'
  | 'CNY'
  | 'AUD'
  | 'AUD'
  | 'COP'
  | 'COU'
  | 'KMF'
  | 'CDF'
  | 'XAF'
  | 'NZD'
  | 'CRC'
  | 'XOF'
  | 'HRK'
  | 'CUP'
  | 'CUC'
  | 'ANG'
  | 'EUR'
  | 'CZK'
  | 'DKK'
  | 'DJF'
  | 'XCD'
  | 'DOP'
  | 'USD'
  | 'EGP'
  | 'SVC'
  | 'USD'
  | 'XAF'
  | 'ERN'
  | 'EUR'
  | 'ETB'
  | 'EUR'
  | 'FKP'
  | 'DKK'
  | 'FJD'
  | 'EUR'
  | 'EUR'
  | 'EUR'
  | 'XPF'
  | 'EUR'
  | 'XAF'
  | 'GMD'
  | 'GEL'
  | 'EUR'
  | 'GHS'
  | 'GIP'
  | 'EUR'
  | 'DKK'
  | 'XCD'
  | 'EUR'
  | 'USD'
  | 'GTQ'
  | 'GBP'
  | 'GNF'
  | 'XOF'
  | 'GYD'
  | 'HTG'
  | 'USD'
  | 'AUD'
  | 'EUR'
  | 'HNL'
  | 'HKD'
  | 'HUF'
  | 'ISK'
  | 'INR'
  | 'IDR'
  | 'XDR'
  | 'IRR'
  | 'IQD'
  | 'EUR'
  | 'GBP'
  | 'ILS'
  | 'EUR'
  | 'JMD'
  | 'JPY'
  | 'GBP'
  | 'JOD'
  | 'KZT'
  | 'KES'
  | 'AUD'
  | 'KPW'
  | 'KRW'
  | 'KWD'
  | 'KGS'
  | 'LAK'
  | 'EUR'
  | 'LBP'
  | 'LSL'
  | 'ZAR'
  | 'LRD'
  | 'LYD'
  | 'CHF'
  | 'EUR'
  | 'EUR'
  | 'MOP'
  | 'MKD'
  | 'MGA'
  | 'MWK'
  | 'MYR'
  | 'MVR'
  | 'XOF'
  | 'EUR'
  | 'USD'
  | 'EUR'
  | 'MRU'
  | 'MUR'
  | 'EUR'
  | 'XUA'
  | 'MXN'
  | 'MXV'
  | 'USD'
  | 'MDL'
  | 'EUR'
  | 'MNT'
  | 'EUR'
  | 'XCD'
  | 'MAD'
  | 'MZN'
  | 'MMK'
  | 'NAD'
  | 'ZAR'
  | 'AUD'
  | 'NPR'
  | 'EUR'
  | 'XPF'
  | 'NZD'
  | 'NIO'
  | 'XOF'
  | 'NGN'
  | 'NZD'
  | 'AUD'
  | 'USD'
  | 'NOK'
  | 'OMR'
  | 'PKR'
  | 'USD'
  | 'PAB'
  | 'USD'
  | 'PGK'
  | 'PYG'
  | 'PEN'
  | 'PHP'
  | 'NZD'
  | 'PLN'
  | 'EUR'
  | 'USD'
  | 'QAR'
  | 'EUR'
  | 'RON'
  | 'RUB'
  | 'RWF'
  | 'EUR'
  | 'SHP'
  | 'XCD'
  | 'XCD'
  | 'EUR'
  | 'EUR'
  | 'XCD'
  | 'WST'
  | 'EUR'
  | 'STN'
  | 'SAR'
  | 'XOF'
  | 'RSD'
  | 'SCR'
  | 'SLL'
  | 'SGD'
  | 'ANG'
  | 'XSU'
  | 'EUR'
  | 'EUR'
  | 'SBD'
  | 'SOS'
  | 'ZAR'
  | 'SSP'
  | 'EUR'
  | 'LKR'
  | 'SDG'
  | 'SRD'
  | 'NOK'
  | 'SZL'
  | 'SEK'
  | 'CHF'
  | 'CHE'
  | 'CHW'
  | 'SYP'
  | 'TWD'
  | 'TJS'
  | 'TZS'
  | 'THB'
  | 'USD'
  | 'XOF'
  | 'NZD'
  | 'TOP'
  | 'TTD'
  | 'TND'
  | 'TRY'
  | 'TMT'
  | 'USD'
  | 'AUD'
  | 'UGX'
  | 'UAH'
  | 'AED'
  | 'GBP'
  | 'USD'
  | 'USD'
  | 'USN'
  | 'UYU'
  | 'UYI'
  | 'UYW'
  | 'UZS'
  | 'VUV'
  | 'VES'
  | 'VND'
  | 'USD'
  | 'USD'
  | 'XPF'
  | 'MAD'
  | 'YER'
  | 'ZMW'
  | 'ZWL'
  | 'XBA'
  | 'XBB'
  | 'XBC'
  | 'XBD'
  | 'XTS'
  | 'XXX'
  | 'XAU'
  | 'XPD'
  | 'XPT'
  | 'XAG'
