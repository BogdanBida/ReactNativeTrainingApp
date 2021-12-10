import IMenuItem from '../interfaces/menu-items';
import { Pages } from './../../../enums/pages.enum';

export const MENU_NAVIGATION_ITEMS: IMenuItem[] = [
    {
        destination: Pages.Profile,
        btnOptions: {
            iconName: "user",
            containerPadding: 2.5,
            size: "sm"
        }
    },
    {
        destination: Pages.Settings,
        btnOptions: {
            iconName: "settings",
            containerPadding: 1.5
        }
    }
];