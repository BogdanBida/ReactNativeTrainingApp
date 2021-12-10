import { Pages } from "../../../enums/pages.enum";
import IRoundedButtonProps from "../../../shared/interfaces/rounted-button-props";

export default interface IMenuItem {
    destination: Pages;
    btnOptions: IRoundedButtonProps;
}
