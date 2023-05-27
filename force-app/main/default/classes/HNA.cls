public with sharing class HNA {
  @AuraEnabled(cacheable=true)
  public static List<SObject> getRecordByHNASection(
    string sObjectType,
    string hnaId
  ) {
    try {
      string query =
        'SELECT Id FROM  ' +
        sObjectType +
        ' WHERE Holistic_Needs_Assessment__c = :hnaId';
      return Database.query(query);
    } catch (Exception e) {
      throw new AuraHandledException(e.getMessage());
    }
  }
  //get all risk records associated with HNA sub section
  @AuraEnabled(cacheable=true)
  public static List<Risk_Assessment__c> getRiskAssessmentRecords(
    string hnaId,
    string sectionType
  ) {
    try {
      return [
        SELECT Id, Cause_For_Concern__c
        FROM Risk_Assessment__c
        WHERE
          Holistic_Needs_Assessment__c = :hnaId
          AND HNA_Type__c = :sectionType
      ];
    } catch (Exception e) {
      throw new AuraHandledException(e.getMessage());
    }
  }
  // get all plans assocated with HNA sub section
  @AuraEnabled(cacheable=true)
  public static List<Placement_Plan__c> getPlanRecords(
    string hnaId,
    string sectionType
  ) {
    try {
      return [
        SELECT Id, Plan_Detail__c
        FROM Placement_Plan__c
        WHERE
          Holistic_Needs_Assessment__c = :hnaId
          AND HNA_Section_Type__c = :sectionType
      ];
    } catch (Exception e) {
      throw new AuraHandledException(e.getMessage());
    }
  }
  //get placement plan by id
  @AuraEnabled(cacheable=true)
  public static List<Placement_Plan__c> getPlanSingleRecord(string recordId) {
    try {
      return [
        SELECT Id, Plan_Detail__c
        FROM Placement_Plan__c
        WHERE Id = :recordId
      ];
    } catch (Exception e) {
      throw new AuraHandledException(e.getMessage());
    }
  }

    //get risk assessment by id
    @AuraEnabled(cacheable=true)
    public static List<Risk_Assessment__c> getRiskSingleRecord(string recordId) {
      try {
        return [
          SELECT Id, Cause_For_Concern__c
          FROM Risk_Assessment__c
          WHERE Id = :recordId
        ];
      } catch (Exception e) {
        throw new AuraHandledException(e.getMessage());
      }
    }
}
