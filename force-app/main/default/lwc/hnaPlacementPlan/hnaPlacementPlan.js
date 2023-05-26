import { LightningElement, api } from "lwc";

import getPlacementPlanId from "@salesforce/apex/Service_User.getPlacementPlanForHNA";

import DATE_OF_PLAN_FIELD from "@salesforce/schema/Placement_Plan__c.Date_of_Plan__c";
import HNA_SECTION_TYPE_FIELD from "@salesforce/schema/Placement_Plan__c.HNA_Section_Type__c";
import HOLISTIC_NEEDS_ASSESSMENT_FIELD from "@salesforce/schema/Placement_Plan__c.Holistic_Needs_Assessment__c";
import OUTCOME_FIELD from "@salesforce/schema/Placement_Plan__c.Outcome__c";
import NAME_FIELD from "@salesforce/schema/Placement_Plan__c.Name";
import PLAN_DETAIL_FIELD from "@salesforce/schema/Placement_Plan__c.Plan_Detail__c";
import SERVICE_USER_FIELD from "@salesforce/schema/Placement_Plan__c.Service_User__c";

const iterableFields = [
  DATE_OF_PLAN_FIELD,
  NAME_FIELD,
  PLAN_DETAIL_FIELD,
  OUTCOME_FIELD
];
const prefilledFields = [
  HNA_SECTION_TYPE_FIELD,
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

export default class HnaPlacementPlan extends LightningElement {
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
      const result = await getPlacementPlanId({
        hnaId: this.hnaId,
        sectionType: this.sectionType
      });
      if (result[0]) this.recordId = result[0].Id;
    } catch (error) {
      console.log(error, "error");
    }
  }
}
