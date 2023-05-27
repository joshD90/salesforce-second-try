import { LightningElement, api } from "lwc";
import { ShowToastEvent } from "lightning/platformShowToastEvent";

import getPlanRecords from "@salesforce/apex/HNA.getPlanRecords";
import getPlanSingleRecord from "@salesforce/apex/HNA.getPlanSingleRecord";

import { imports } from "./hnaPlanImports";

export default class HNA_Risk_Section extends LightningElement {
  records;
  allPlanFields = [...imports.iterableFields, ...imports.prefilledFields];
  iterableFields = imports.iterableFields;
  creatingOpen = false;
  sectionType;

  @api hnaId;
  @api serviceUser;
  @api currentSectionType;

  connectedCallback() {
    this.sectionType = imports.typeOfSection[this.currentSectionType].title;
    this.getRecordsId();
  }

  toggleCreatingForm() {
    if (this.creatingOpen) this.scrollToTop();
    this.creatingOpen = this.creatingOpen ? false : true;
  }

  handlePlanSaved(event) {
    this.toggleCreatingForm();
    const toastEvent = new ShowToastEvent({
      title: "Success",
      message: "Record saved successfully",
      variant: "success"
    });
    this.dispatchEvent(toastEvent);
    this.scrollToTop();
    //there is an issue with this as it does not seem to be working with the most recent data  - could do a seperate api call with just the id and push this onto the end of our records array
    this.updateRecordsList(event.detail.id);
  }

  scrollToTop() {
    const element = this.template.querySelector(".top");

    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  }

  async getRecordsId() {
    try {
      const result = await getPlanRecords({
        hnaId: this.hnaId,
        sectionType: this.sectionType
      });
      this.records = result;
    } catch (error) {
      console.log(error, "error");
    }
  }

  async updateRecordsList(recordId) {
    try {
      const result = await getPlanSingleRecord({ recordId: recordId });
      console.log(result, "raw result");
      this.records = JSON.parse(JSON.stringify([...this.records, ...result]));
      console.log(this.records, "after refresh");
    } catch (error) {
      console.log(error, "error");
    }
  }
}
