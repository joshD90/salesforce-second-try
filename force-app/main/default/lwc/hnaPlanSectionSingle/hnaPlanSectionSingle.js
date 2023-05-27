import { LightningElement, api } from "lwc";
import { NavigationMixin } from "lightning/navigation";

export default class HNA_Risk_Section_Single extends NavigationMixin(
  LightningElement
) {
  bodyToggled = false;

  @api record;
  @api allFields;
  @api hnaId;

  toggleBody() {
    this.bodyToggled = this.bodyToggled ? false : true;
  }

  goToRecord() {
    console.log("ABOUT TO NAVIGATE");
    this[NavigationMixin.Navigate]({
      type: "standard__recordPage",
      attributes: {
        objectApiName: "Placement_Plan__c",
        actionName: "view",
        recordId: this.record.Id
      }
    });
  }
}
