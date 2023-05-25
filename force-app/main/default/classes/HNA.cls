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
}
