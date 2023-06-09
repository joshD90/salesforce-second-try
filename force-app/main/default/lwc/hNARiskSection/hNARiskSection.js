import { LightningElement, api } from "lwc";
import { ShowToastEvent } from "lightning/platformShowToastEvent";

import getRiskAssessmentRecords from "@salesforce/apex/HNA.getRiskAssessmentRecords";
import getRiskSingleRecord from "@salesforce/apex/HNA.getRiskSingleRecord";

import { riskImports } from "./hnaRiskImports";

export default class HNA_Risk_Section extends LightningElement {
  records;
  allRiskFields = [
    ...riskImports.iterableFields,
    ...riskImports.prefilledFields
  ];
  iterableFields = riskImports.iterableFields;
  creatingOpen = false;
  sectionType;

  @api hnaId;
  @api serviceUser;
  @api currentSectionType;

  connectedCallback() {
    this.sectionType = riskImports.typeOfSection[this.currentSectionType].title;
    this.getRecordsId();
  }

  toggleCreatingForm() {
    if (this.creatingOpen) this.scrollToTop();
    this.creatingOpen = this.creatingOpen ? false : true;
  }

  handleRiskSaved(event) {
    this.updateRecordsList(event.detail.id);
    this.toggleCreatingForm();
    const toastEvent = new ShowToastEvent({
      title: "Success",
      message: "Record saved successfully",
      variant: "success"
    });
    this.dispatchEvent(toastEvent);
    this.scrollToTop();
  }

  scrollToTop() {
    console.log("SCROLLING");
    const element = this.template.querySelector(".top");
    console.log(element, "element");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  }

  async getRecordsId() {
    try {
      const result = await getRiskAssessmentRecords({
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
      const result = await getRiskSingleRecord({ recordId: recordId });
      console.log(result, "raw result");
      this.records = JSON.parse(JSON.stringify([...this.records, ...result]));
      console.log(this.records, "after refresh");
    } catch (error) {
      console.log(error, "error");
    }
  }
}
