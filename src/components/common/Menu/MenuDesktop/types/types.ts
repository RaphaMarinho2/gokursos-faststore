// eslint-disable-next-line @typescript-eslint/naming-convention
type linkItemType = {
  submenuItem: ObjectItem
}

type SubMenuItemType = ObjectItem[]

type ObjectItem = {
  label: string
  link: string
  submenu: SubMenuItemType
}

type LinkMenuType = {
  submenuItem: ObjectItem
}

type MenuItemType = {
  items: SubMenuItemType
}

type MenuItemProps = {
  item: ObjectItem
  indexRef: number
  value: boolean
  setValue: (value: boolean) => void
  popUpActual: number
  setPopUpActual: (popUpActual: number) => void
  isTopBarVisible: boolean
}

export {
  linkItemType,
  ObjectItem,
  MenuItemType,
  SubMenuItemType,
  LinkMenuType,
  MenuItemProps,
}
