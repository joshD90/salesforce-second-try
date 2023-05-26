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
  housing: { title: "Housing", object: "HNA_Housing__c" },
  drugAndAlcohol: {
    title: "Drug and Alcohol",
    object: "HNA_Drug_and_Alcohol__c"
  },
  health: { title: "Health", object: "HNA_Health__c" },
  emotional: { title: "Emotional", object: "HNA_Emotional__c" },
  social: { title: "Social", object: "HNA_Social__c" },
  education: { title: "Education", object: "HNA_Education__c" },
  lifeSkills: { title: "Life Skills", object: "HNA_Life_Skills__c" }
};

export const riskImports = { iterableFields, prefilledFields, typeOfSection };
