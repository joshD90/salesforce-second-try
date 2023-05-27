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

export const imports = { iterableFields, prefilledFields, typeOfSection };
