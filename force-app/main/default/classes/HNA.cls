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
}
