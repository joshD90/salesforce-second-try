public with sharing class Service_User {
  @auraEnabled(cacheable=true)
  public static List<Service_User__c> getServiceUserDetails(string id) {
    return [
      SELECT Date_Of_Birth__c, First_Name__c, Last_Name__c
      FROM Service_User__c
      WHERE Id = :id
    ];
  }

  @AuraEnabled(cacheable=true)
  public static List<Holistic_Needs_Assessment__c> getServiceUsersHNA(
    string serviceUsersId
  ) {
    return [
      SELECT Id, Name, Service_User__c
      FROM Holistic_Needs_Assessment__c
      WHERE Service_User__c = :serviceUsersId
    ];
  }
}
