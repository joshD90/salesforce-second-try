import { getRecord } from "lightning/uiRecordApi";
import { LightningElement, api, wire } from "lwc";

// eslint-disable-next-line no-unused-vars
import hNARecord from "c/hNARecord";

import DATE_OF_BIRTH_FIELD from "@salesforce/schema/Service_User__c.Date_Of_Birth__c";
import FIRST_NAME_FIELD from "@salesforce/schema/Service_User__c.First_Name__c";
import LAST_NAME_FIELD from "@salesforce/schema/Service_User__c.Last_Name__c";

const fields = [DATE_OF_BIRTH_FIELD, FIRST_NAME_FIELD, LAST_NAME_FIELD];

export default class MyComponent extends LightningElement {
  serviceUserDetailsError;
  serviceUserDetailsData;

  serviceUser = {};

  @api recordId;

  @wire(getRecord, { recordId: "$recordId", fields })
  wireRecords({ error, data }) {
    if (error) this.serviceUserDetailsError = JSON.stringify(error);
    if (data) {
      console.log(data, "data");
      this.serviceUserDetailsData = JSON.stringify(data);
      this.serviceUser.id = data.id;
      this.serviceUser.fName = data.fields.First_Name__c.value;
      this.serviceUser.lName = data.fields.Last_Name__c.value;
      this.serviceUser.dob = data.fields.Date_of_Birth__c?.displayValue;
    }
  }
}
