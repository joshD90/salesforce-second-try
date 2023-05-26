import { LightningElement, api } from "lwc";
import getRiskRecordId from "@salesforce/apex/Service_User.getRiskAssessmentForHNA";

//field imports
import DATE_OF_ASSESSMENT_FIELD from "@salesforce/schema/Risk_Assessment__c.Date_of_Assessment__c";
import CAUSE_FOR_CONCERN_FIELD from "@salesforce/schema/Risk_Assessment__c.Cause_for_Concern__c";
import FREQUENCY_OF_RISK_FIELD from "@salesforce/schema/Risk_Assessment__c.Frequency_of_Risk__c";
import HNA_TYPE_FIELD from "@salesforce/schema/Risk_Assessment__c.HNA_Type__c";
import HOLISTIC_NEEDS_ASSESSMENT_FIELD from "@salesforce/schema/Risk_Assessment__c.Holistic_Needs_Assessment__c";
import LEVEL_OF_RISK_FIELD from "@salesforce/schema/Risk_Assessment__c.Level_of_Risk__c";
import MITIGATION_FIELD from "@salesforce/schema/Risk_Assessment__c.Mitigation__c";
import SERVICE_USER_FIELD from "@salesforce/schema/Risk_Assessment__c.Service_User__c";

const iterableFields = [
  DATE_OF_ASSESSMENT_FIELD,
  CAUSE_FOR_CONCERN_FIELD,
  FREQUENCY_OF_RISK_FIELD,
  LEVEL_OF_RISK_FIELD,
  MITIGATION_FIELD
];

const prefilledFields = [
  HNA_TYPE_FIELD,
  HOLISTIC_NEEDS_ASSESSMENT_FIELD,
  SERVICE_USER_FIELD
];

const typeOfSection = {
  house: "Housing",
  drugAndAlcohol: "Drug and Alcohol",
  health: "Health",
  emotional: "Emotional",
  social: "Social",
  education: "Education",
  lifeSkills: "Life Skills"
};

export default class HnaRiskRecord extends LightningElement {
  allFields = [...iterableFields, ...prefilledFields];
  autoFields = iterableFields;
  accessibleServiceUser;
  recordId;
  sectionType;

  @api type;
  @api serviceUser;
  @api hnaId;

  connectedCallback() {
    this.accessibleServiceUser = JSON.parse(JSON.stringify(this.serviceUser));
    this.sectionType = typeOfSection[this.type];
    this.getRecordId();
  }

  handleRecordSave(e) {
    this.recordId = e.detail.id;
  }

  async getRecordId() {
    try {
      const result = await getRiskRecordId({
        hnaId: this.hnaId,
        sectionType: this.sectionType
      });
      if (result[0]) this.recordId = result[0].Id;
    } catch (error) {
      console.log(error, "error");
    }
  }
}
