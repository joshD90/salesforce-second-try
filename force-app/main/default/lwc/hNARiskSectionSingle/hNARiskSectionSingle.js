import { LightningElement, api } from "lwc";

export default class HNA_Risk_Section_Single extends LightningElement {
  bodyToggled = false;

  @api record;
  @api allFields;
  @api hnaId;

  toggleBody() {
    this.bodyToggled = this.bodyToggled ? false : true;
  }
}
