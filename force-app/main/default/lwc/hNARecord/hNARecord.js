import { LightningElement } from "lwc";
import HNADrugAndAlcohol from "@salesforce/schema/HNA_Drug_and_Alcohol__c";
import CURRENT_SUPPORTS_FIELD from "@salesforce/schema/HNA_Drug_and_Alcohol__c.Current_Supports__c";
import DRUGS_USED_FIELD from "@salesforce/schema/HNA_Drug_and_Alcohol__c.Drugs_Used__c";
import FREQUENCY_USE_FIELD from "@salesforce/schema/HNA_Drug_and_Alcohol__c.Frequency_Use__c";
import HOLISTIC_NEEDS_ASSESSMENT_FIELD from "@salesforce/schema/HNA_Drug_and_Alcohol__c.Holistic_Needs_Assessment__c";
import SERVICE_USER_FIELD from "@salesforce/schema/HNA_Drug_and_Alcohol__c.Service_User__c";

const drugAndAlcoholFields = [
  CURRENT_SUPPORTS_FIELD,
  DRUGS_USED_FIELD,
  FREQUENCY_USE_FIELD,
  HOLISTIC_NEEDS_ASSESSMENT_FIELD,
  SERVICE_USER_FIELD
];

export default class HNARecord extends LightningElement {
  fields = drugAndAlcoholFields;
  objectApiName = HNADrugAndAlcohol.objectApiName;
}
