import { getRecord } from "lightning/uiRecordApi";
import { LightningElement, api, wire } from "lwc";

import getServiceUsersHNA from "@salesforce/apex/Service_User.getServiceUsersHNA";

import DATE_OF_BIRTH_FIELD from "@salesforce/schema/Service_User__c.Date_Of_Birth__c";
import FIRST_NAME_FIELD from "@salesforce/schema/Service_User__c.First_Name__c";
import LAST_NAME_FIELD from "@salesforce/schema/Service_User__c.Last_Name__c";

const fields = [DATE_OF_BIRTH_FIELD, FIRST_NAME_FIELD, LAST_NAME_FIELD];

export default class MyComponent extends LightningElement {
  serviceUserDetailsError;
  serviceUser;
  hnaId;
  hnaName;
  activeSection = [];

  @api recordId;

  @wire(getRecord, { recordId: "$recordId", fields })
  wireRecords({ error, data }) {
    if (error) this.serviceUserDetailsError = JSON.stringify(error);
    if (data) {
      this.serviceUser = {};
      this.serviceUser.id = data.id;
      this.serviceUser.fName = data.fields.First_Name__c.value;
      this.serviceUser.lName = data.fields.Last_Name__c.value;
      this.serviceUser.dob = data.fields.Date_of_Birth__c?.displayValue;
      this.getServiceUserHNAMethod(data.id);
    }
  }
  async getServiceUserHNAMethod(id) {
    try {
      const HNA = await getServiceUsersHNA({
        serviceUsersId: id
      });

      this.hnaId = HNA[0].Id;
      this.hnaName = HNA[0].Name;
    } catch (e) {
      console.log(e, "My Lovely Error");
    }
  }
  handleHNASuccess(e) {
    console.log("handling success, you cant handle the truth");
    this.hnaId = e.detail.id;
  }
}
