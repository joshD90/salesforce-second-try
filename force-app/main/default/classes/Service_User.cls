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

  @AuraEnabled(cacheable=true)
  public static List<Risk_Assessment__c> getRiskAssessmentForHNA(
    string hnaId,
    string sectionType
  ) {
    try {
      return [
        SELECT Id
        FROM Risk_Assessment__c
        WHERE
          Holistic_Needs_Assessment__c = :hnaId
          AND HNA_Type__c = :sectionType
      ];
    } catch (Exception e) {
      throw new AuraHandledException(e.getMessage());
    }
  }

  @AuraEnabled(cacheable=true)
  public static List<Placement_Plan__c> getPlacementPlanForHNA(
    string hnaId,
    string sectionType
  ) {
    try {
      return [
        SELECT Id
        FROM Placement_Plan__c
        WHERE
          Holistic_Needs_Assessment__c = :hnaId
          AND HNA_Section_Type__c = :sectionType
      ];
    } catch (Exception e) {
      throw new AuraHandledException(e.getMessage());
    }
  }
}
