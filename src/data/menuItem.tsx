import { MenuItemInterface } from "../interfaces/interfaces";

export const menuItems: MenuItemInterface[] = [
    {
        name: 'Animation 101',
        icon: 'cube-outline',
        component: 'Animation101Screen'
    },
    {
        name: 'Animation 102',
        icon: 'albums-outline',
        component: 'Animation102Screen'
    },
    {
        name: 'Switches',
        icon: 'toggle-outline',
        component: 'SwitchScreen'
    },
    {
        name: 'Alerts',
        icon: 'alert-circle-outline',
        component: 'AlertScreen'
    },
    {
        name: 'Text Input',
        icon: 'text-outline',
        component: 'TextInputScreen'
    },
    {
        name: 'Pull to Refresh',
        icon: 'refresh-outline',
        component: 'PullToRefreshScreen'
    },
]