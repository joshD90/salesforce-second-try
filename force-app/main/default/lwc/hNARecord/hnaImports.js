//drug and alcohol
import CURRENT_SUPPORTS_FIELD from "@salesforce/schema/HNA_Drug_and_Alcohol__c.Current_Supports__c";
import DRUGS_USED_FIELD from "@salesforce/schema/HNA_Drug_and_Alcohol__c.Drugs_Used__c";
import FREQUENCY_USE_FIELD from "@salesforce/schema/HNA_Drug_and_Alcohol__c.Frequency_Use__c";
import HOLISTIC_NEEDS_ASSESSMENT_FIELD from "@salesforce/schema/HNA_Drug_and_Alcohol__c.Holistic_Needs_Assessment__c";
import SERVICE_USER_FIELD from "@salesforce/schema/HNA_Drug_and_Alcohol__c.Service_User__c";

// housing
import HOLISTIC_NEEDS_ASSESSMENT_FIELD_HOUSING from "@salesforce/schema/HNA_Housing__c.Holistic_Needs_Assessment__c";
import SERVICE_USER_FIELD_HOUSING from "@salesforce/schema/HNA_Housing__c.Service_User__c";
import NAME_FIELD_HOUSING from "@salesforce/schema/HNA_Housing__c.Name";

//Health
import CURRENT_HEALTH_ISSUES_FIELD from "@salesforce/schema/HNA_Health__c.Current_Health_Issues__c";
import GENERAL_PRACTITIONER_FIELD from "@salesforce/schema/HNA_Health__c.General_Practitioner__c";
import HNA_SECTION_TYPE_FIELD from "@salesforce/schema/HNA_Health__c.HNA_Section_Type__c";
import NAME_HEALTH_FIELD from "@salesforce/schema/HNA_Health__c.Name";
import HOLISTIC_NEEDS_ASSESSMENT_HEALTH_FIELD from "@salesforce/schema/HNA_Health__c.Holistic_Needs_Assessment__c";
import MEDICAL_CARD_FIELD from "@salesforce/schema/HNA_Health__c.Medical_Card__c";
import SERVICE_USER_HEALTH_FIELD from "@salesforce/schema/HNA_Health__c.Service_User__c";

//emotional
import HOLISTIC_NEEDS_ASSESSMENT_EMOTIONAL_FIELD from "@salesforce/schema/HNA_Emotional__c.Holistic_Needs_Assessment__c";
import CURRENT_SUPPORTS_EMOTIONAL_FIELD from "@salesforce/schema/HNA_Emotional__c.Current_Supports__c";
import DATE_OF_ASSESSMENT_FIELD from "@salesforce/schema/HNA_Emotional__c.Date_of_Assessment__c";
import EMOTIONAL_NEEDS_FIELD from "@salesforce/schema/HNA_Emotional__c.Emotional_Needs__C";
import NAME_EMOTIONAL_FIELD from "@salesforce/schema/HNA_Emotional__c.Name";
import SERVICE_USER_EMOTIONAL_FIELD from "@salesforce/schema/HNA_Emotional__c.Service_User__c";

// Social
import DATE_OF_ASSESSMENT_SOCIAL_FIELD from "@salesforce/schema/HNA_Social__c.Date_of_Assessment__c";
import NAME_SOCIAL_FIELD from "@salesforce/schema/HNA_Social__c.Name";
import HOLISTIC_NEEDS_ASSESSMENT_SOCIAL_FIELD from "@salesforce/schema/HNA_Social__c.Holistic_Needs_Assessment__c";
import SERVICE_USER_SOCIAL_FIELD from "@salesforce/schema/HNA_Social__c.Service_User__c";
import SOCIAL_GOALS_FIELD from "@salesforce/schema/HNA_Social__c.Social_Goals__c";
import SOCIAL_NEEDS_FIELD from "@salesforce/schema/HNA_Social__c.Social_Needs__c";
import SOCIAL_SUPPORTS_FIELD from "@salesforce/schema/HNA_Social__c.Social_Supports__c";

//education
import HOLISTIC_NEEDS_ASSESSMENT_EDUCATION_FIELD from "@salesforce/schema/HNA_Education__c.Holistic_Needs_Assessment__c";
import SERVICE_USER_EDUCATION_FIELD from "@salesforce/schema/HNA_Education__c.Service_User__c";
import DATE_OF_ASSESSMENT_EDUCATION from "@salesforce/schema/HNA_Education__c.Date_of_Assessment__c";
import EDUCATION_GOALS_FIELD from "@salesforce/schema/HNA_Education__c.Education_Goals__c";
import EMPLOYMENT_FIELD from "@salesforce/schema/HNA_Education__c.Employment__c";
import EDUCATION_NAME_FIELD from "@salesforce/schema/HNA_Education__c.Name";
import LEVEL_OF_EDUCATION_FIELD from "@salesforce/schema/HNA_Education__c.Level_of_Education__c";
import LITERATE_FIELD from "@salesforce/schema/HNA_Education__c.Literate__c";

//education arrays
const educationFields = [
  HOLISTIC_NEEDS_ASSESSMENT_EDUCATION_FIELD,
  SERVICE_USER_EDUCATION_FIELD,
  DATE_OF_ASSESSMENT_EDUCATION,
  EDUCATION_GOALS_FIELD,
  EMPLOYMENT_FIELD,
  EDUCATION_NAME_FIELD,
  LEVEL_OF_EDUCATION_FIELD,
  LITERATE_FIELD
];

const uniqueEducationFields = [
  DATE_OF_ASSESSMENT_EDUCATION,
  EDUCATION_GOALS_FIELD,
  EDUCATION_NAME_FIELD,
  EMPLOYMENT_FIELD,
  LEVEL_OF_EDUCATION_FIELD,
  LITERATE_FIELD
];

//social Arrays
const socialFields = [
  DATE_OF_ASSESSMENT_SOCIAL_FIELD,
  NAME_SOCIAL_FIELD,
  HOLISTIC_NEEDS_ASSESSMENT_SOCIAL_FIELD,
  SERVICE_USER_SOCIAL_FIELD,
  SOCIAL_NEEDS_FIELD,
  SOCIAL_GOALS_FIELD,
  SOCIAL_SUPPORTS_FIELD
];

const uniqueSocialFields = [
  DATE_OF_ASSESSMENT_FIELD,
  NAME_SOCIAL_FIELD,
  SOCIAL_GOALS_FIELD,
  SOCIAL_NEEDS_FIELD,
  SOCIAL_SUPPORTS_FIELD
];

//drug and alcohol arrays
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
//housing arrays
const housingFields = [
  HOLISTIC_NEEDS_ASSESSMENT_FIELD_HOUSING,
  SERVICE_USER_FIELD_HOUSING,
  NAME_FIELD_HOUSING
];
const uniqueHousingFields = [NAME_FIELD_HOUSING];

//Health Arrays
const healthFields = [
  HOLISTIC_NEEDS_ASSESSMENT_HEALTH_FIELD,
  SERVICE_USER_HEALTH_FIELD,
  NAME_HEALTH_FIELD,
  MEDICAL_CARD_FIELD,
  HNA_SECTION_TYPE_FIELD,
  GENERAL_PRACTITIONER_FIELD,
  CURRENT_HEALTH_ISSUES_FIELD
];
const uniqueHealthFields = [
  NAME_HEALTH_FIELD,
  MEDICAL_CARD_FIELD,
  HNA_SECTION_TYPE_FIELD,
  GENERAL_PRACTITIONER_FIELD,
  CURRENT_HEALTH_ISSUES_FIELD
];

//emotional arrays
const emotionalFields = [
  HOLISTIC_NEEDS_ASSESSMENT_EMOTIONAL_FIELD,
  CURRENT_SUPPORTS_EMOTIONAL_FIELD,
  DATE_OF_ASSESSMENT_FIELD,
  EMOTIONAL_NEEDS_FIELD,
  NAME_EMOTIONAL_FIELD,
  SERVICE_USER_EMOTIONAL_FIELD
];

const uniqueEmotionalFields = [
  NAME_EMOTIONAL_FIELD,
  DATE_OF_ASSESSMENT_FIELD,
  EMOTIONAL_NEEDS_FIELD,
  CURRENT_SUPPORTS_EMOTIONAL_FIELD
];

export const imports = {
  drugAndAlcohol: {
    fields: drugAndAlcoholFields,
    uniqueFields: uniqueDrugAndAlcoholFields
  },
  housing: {
    fields: housingFields,
    uniqueFields: uniqueHousingFields
  },
  health: { fields: healthFields, uniqueFields: uniqueHealthFields },
  emotional: { fields: emotionalFields, uniqueFields: uniqueEmotionalFields },
  social: { fields: socialFields, uniqueFields: uniqueSocialFields },
  education: { fields: educationFields, uniqueFields: uniqueEducationFields }
};

export const myImportVar = "This is a var that I imported";
