import { LightningElement, api } from "lwc";
//apex methods
import getRecordByHNASection from "@salesforce/apex/HNA.getRecordByHNASection";

//HNA objects
import HNADrugAndAlcohol from "@salesforce/schema/HNA_Drug_and_Alcohol__c";
import HNAHousing from "@salesforce/schema/HNA_Housing__c";
import HNAHealth from "@salesforce/schema/HNA_Health__c";
import HNAEmotional from "@salesforce/schema/HNA_Emotional__c";
import HNASocial from "@salesforce/schema/HNA_Social__c";
import HNAEducation from "@salesforce/schema/HNA_Education__c";

import { imports } from "./hnaImports";

export default class HNARecord extends LightningElement {
  fields;
  uniqueFields;
  objectApiName;
  myTypeThing;
  recordId;
  accessibleServiceUser;

  @api type;
  @api serviceUser;
  @api hnaId;

  connectedCallback() {
    this.setFieldsAndApiName();
    this.accessibleServiceUser = JSON.parse(JSON.stringify(this.serviceUser));
    this.getRecordForSection();
  }

  handleRecordSave(e) {
    console.log(e.detail.id, "detail id in handleRecordsave - hna record");
    this.recordId = e.detail.id;
  }

  async getRecordForSection() {
    const result = await getRecordByHNASection({
      sObjectType: this.objectApiName,
      hnaId: this.hnaId
    });

    if (result.length === 0) return;
    this.recordId = result[0].Id;
  }

  setFieldsAndApiName() {
    switch (this.type) {
      case "drugAndAlcohol":
        this.fields = [
          ...imports.drugAndAlcohol.fields,
          ...imports.drugAndAlcohol.uniqueFields
        ];
        this.objectApiName = HNADrugAndAlcohol.objectApiName;
        this.myTypeThing = this.type;
        this.uniqueFields = imports.drugAndAlcohol.uniqueFields;

        break;
      case "house":
        this.fields = [
          ...imports.housing.fields,
          ...imports.housing.uniqueFields
        ];
        this.objectApiName = HNAHousing.objectApiName;
        this.myTypeThing = this.type;
        this.uniqueFields = imports.housing.uniqueFields;
        break;
      case "health":
        this.fields = [
          ...imports.health.fields,
          ...imports.health.uniqueFields
        ];
        this.objectApiName = HNAHealth.objectApiName;
        this.myTypeThing = this.type;
        this.uniqueFields = imports.health.uniqueFields;
        break;
      case "emotional":
        this.fields = [
          ...imports.emotional.fields,
          ...imports.emotional.uniqueFields
        ];
        this.objectApiName = HNAEmotional.objectApiName;
        this.myTypeThing = this.type;
        this.uniqueFields = imports.emotional.uniqueFields;
        break;
      case "social":
        this.fields = [
          ...imports.social.fields,
          ...imports.social.uniqueFields
        ];
        this.objectApiName = HNASocial.objectApiName;
        this.myTypeThing = this.type;
        this.uniqueFields = imports.social.uniqueFields;
        break;
      case "education":
        this.fields = [
          ...imports.education.fields,
          ...imports.education.uniqueFields
        ];
        this.objectApiName = HNAEducation.objectApiName;
        this.myTypeThing = this.type;
        this.uniqueFields = imports.education.uniqueFields;
        break;
      default:
        break;
    }
  }
}
