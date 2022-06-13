type SubMenuItemType = ObjectItem[]

type ObjectItem = {
  label: string
  link: string
  submenu: SubMenuItemType
  blueText: boolean
}

type MenuItemType = {
  items: SubMenuItemType
}

export { ObjectItem, MenuItemType, SubMenuItemType }
