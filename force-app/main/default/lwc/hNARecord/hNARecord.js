import { LightningElement, api } from "lwc";
//Drug and Alcohol imports
import HNADrugAndAlcohol from "@salesforce/schema/HNA_Drug_and_Alcohol__c";
import CURRENT_SUPPORTS_FIELD from "@salesforce/schema/HNA_Drug_and_Alcohol__c.Current_Supports__c";
import DRUGS_USED_FIELD from "@salesforce/schema/HNA_Drug_and_Alcohol__c.Drugs_Used__c";
import FREQUENCY_USE_FIELD from "@salesforce/schema/HNA_Drug_and_Alcohol__c.Frequency_Use__c";
import HOLISTIC_NEEDS_ASSESSMENT_FIELD from "@salesforce/schema/HNA_Drug_and_Alcohol__c.Holistic_Needs_Assessment__c";
import SERVICE_USER_FIELD from "@salesforce/schema/HNA_Drug_and_Alcohol__c.Service_User__c";

//housing imports
import HNAHousing from "@salesforce/schema/HNA_Housing__c";
import HOLISTIC_NEEDS_ASSESSMENT_FIELD_HOUSING from "@salesforce/schema/HNA_Housing__c.Holistic_Needs_Assessment__c";
import SERVICE_USER_FIELD_HOUSING from "@salesforce/schema/HNA_Housing__c.Service_User__c";
import NAME_FIELD_HOUSING from "@salesforce/schema/HNA_Housing__c.Name";

const drugAndAlcoholFields = [
  CURRENT_SUPPORTS_FIELD,
  DRUGS_USED_FIELD,
  FREQUENCY_USE_FIELD,
  HOLISTIC_NEEDS_ASSESSMENT_FIELD,
  SERVICE_USER_FIELD
];
const uniqueDrugAndAlcoholFields = [
  CURRENT_SUPPORTS_FIELD,
  DRUGS_USED_FIELD,
  FREQUENCY_USE_FIELD
];

const housingFields = [
  HOLISTIC_NEEDS_ASSESSMENT_FIELD_HOUSING,
  SERVICE_USER_FIELD_HOUSING,
  NAME_FIELD_HOUSING
];
const uniqueHousingFields = [NAME_FIELD_HOUSING];

export default class HNARecord extends LightningElement {
  fields;
  uniqueFields;
  objectApiName;
  myTypeThing;
  recordPresent = false;
  accessibleServiceUser;

  @api type;
  @api serviceUser;
  @api hnaId;

  connectedCallback() {
    this.setFieldsAndApiName();
    this.accessibleServiceUser = JSON.parse(JSON.stringify(this.serviceUser));
  }

  setFieldsAndApiName() {
    switch (this.type) {
      case "drugAndAlcohol":
        this.fields = drugAndAlcoholFields;
        this.objectApiName = HNADrugAndAlcohol.objectApiName;
        this.myTypeThing = this.type;
        this.uniqueFields = uniqueDrugAndAlcoholFields;

        break;
      case "house":
        this.fields = housingFields;
        this.objectApiName = HNAHousing.objectApiName;
        this.myTypeThing = this.type;
        this.uniqueFields = uniqueHousingFields;
        break;
      default:
        break;
    }
  }
}
