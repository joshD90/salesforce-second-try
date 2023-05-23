public with sharing class Service_User {
  @auraEnabled(cacheable=true)
  public static List<Service_User__c> getServiceUserDetails(string id) {
    return [
      SELECT Date_Of_Birth__c, First_Name__c, Last_Name__c
      FROM Service_User__c
      WHERE Id = :id
    ];
  }
}
