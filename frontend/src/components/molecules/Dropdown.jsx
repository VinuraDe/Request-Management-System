import { Menu } from '@headlessui/react'

function Dropdown() {
  return (
    <Menu>
      <MenuButton>Settings</MenuButton>
      <MenuItems>
        <MenuItem>
          {({ active }) => (
            <a
              className={`${active && 'bg-white'}`}
              href="#"
            >
              Settings
            </a>
          )}
        </MenuItem>
        <MenuItem>
          {({ active }) => (
            <a
              className={`${active && 'bg-white'}`}
              href="3"
            >
              Account
            </a>
          )}
        </MenuItem>
      </MenuItems>
    </Menu>
  )
}
export default Dropdown