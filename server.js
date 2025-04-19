const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Sample data
let items ={
      "services": [
        {
          "hook": "order-select",
          "id": "transplant-order-create",
          "title": "Transplant Order Create",
          "description": "Generates a ServiceRequest for selected orders.",
          "prefetch": {
            "patient": "Patient/{{context.patientId}}"
          }
    //     },
    // {
    //   "hook": "patient-view",
    //   "title": "Static CDS Service Example",
    //   "description": "An example of a CDS Service that returns a static set of cards",
    //   "id": "transplant-order-create",
    //   "prefetch": {
    //     "patientToGreet": "Patient/{{context.patientId}}",
    //     "practitioner": "Practitioner/{{context.practitionerId}}"
    //   }
    // },
    // {
    //   "hook": "medication-prescribe",
    //   "title": "Medication Echo CDS Service",
    //   "description": "An example of a CDS Service that simply echos the medication being prescribed",
    //   "id": "medication-echo",
    //   "prefetch": {
    //     "patient": "Patient/{{context.patientId}}",
    //     "medications": "MedicationRequest?patient={{context.patientId}}"
    //   }
    }
  ]
}

// Routes
app.get('/cds-services' , (req, res) => {
  console.log('cds-services',res)
  res.json(items);
});

app.get('/cds-services/transplant-order-create', (req, res) => {
  res.json( {
  "cards": [
    {
      "summary": "Testing Informational Card",
      "detail": "* Suspected colorectal cancer. \n\n* Please add to patient's diagnoses.\n\nSuspected Bladder cancer. Please add to patient's diagnoses.",
	  "indicator": "critical",
      "source": {
        "topic": {
          "code": "examplecode1"
        }
      },	  
    },]

      // "cards":[  
      //  {  
      //       "summary":"Example",
      //       "indicator":"info",
      //       "extension":{  
      //          "com.epic.cdshooks.card.detail.content-type":"text/html"
      //       },
      //       "detail":"Another card to test suggestions",
      //   "source": {
      //    "label": "Clinical Inferences",
      //    "url": "https://www.example.com/",
      //    "icon": "file://example/CDSHooks/images/example.png",
      //    "topic": {
      //      "code": "BCSCard2",
      //      "system": "card-system",
      //      "display": "BCS Card 2"
      //    }
      //    },
      //    "links": [
      //    {
      //      "label": "Github",
      //      "url": "https://github.com",
      //      "type": "absolute"
      //    },
      //    {
      //      "label": "R4 SMART Example App",
      //      "url": "https://example.com/EpicSMARTApp/Default.aspx?appFhirVersion=R4",
      //      "type": "smart",
      //      "appContext": "%FNAME%-%EXTENSION;74901%-420fe522-193c-11eb-9552-460231621f93~!@#$%^&*()-+{}[]|\\"
      //    },
      //    ],
      //    "overrideReasons":[
      //    {
      //      "code":"patrefused",
      //      "system":"http://example.org/cds-services/fhir/CodeSystem/override-reasons",
      //      "display":"Patient refused"
      //    },
      //    {
      //      "code":"seecomment",
      //      "system":"http://example123.org/cds-services/fhir/CodeSystem/override-reasons",
      //    }
      //   ],
      //         "suggestions":[
      //     {  
      //             "label":"Arthritis",
      //       "uuid": "cf72fe83-1eb9-410c-94aa-04ec98736388",
      //             "actions":[  
      //                {  
      //                   "type":"create",
      //         "description":"Arthritis",
      //                   "resource": {
      //          "resourceType": "Condition",
      //          "category": [
      //            {
      //            "coding": [
      //              {
      //              "system": "http://terminology.hl7.org/CodeSystem/condition-category",
      //              "code": "encounter-diagnosis",
      //              "display": "Encounter diagnosis"								
      //              }
      //            ],
      //            "text": "Encounter diagnosis"
      //            }
      //          ],
      //          "code": {
      //            "coding": [
      //            {
      //              "system": "urn:com.epic.cdshooks.action.code.system.cms-hcc",
      //              "code": "40",
      //              "display": "Arthritis"
      //            }
      //            ],
      //            "text": "Stomach ache"
      //          }
      //          },
      //                }
      //             ]
      //          },
      //    {  
      //             "label":"Stroke",
      //       "uuid": "12035ae1-5d60-4f58-b922-882140b98283",
      //             "actions":[  
      //                {  
      //                   "type":"create",
      //         "description":"Stroke",
      //                   "resource": {
      //          "resourceType": "Condition",
      //          "category": [
      //            {
      //            "coding": [
      //              {
      //              "system": "http://terminology.hl7.org/CodeSystem/condition-category",
      //              "code": "encounter-diagnosis",
      //              "display": "Encounter diagnosis"								
      //              }
      //            ],
      //            "text": "Encounter diagnosis"
      //            }
      //          ],
      //          "code": {
      //            "coding": [
      //            {
      //              "system": "urn:com.epic.cdshooks.action.code.system.cms-hcc",
      //              "code": "100",
      //              "display": "Stroke"
      //            }
      //            ],
      //            "text": "Stroke"
      //          }
      //          },
      //                }
      //             ]
      //          },
      //    {  
      //             "label":"Stroke",
      //       "uuid": "1a53ba14-a06b-4e82-bbb0-09ae01a75515",
      //             "actions":[  
      //                {  
      //                   "type":"create",
      //                   "description":"Stroke prognosis",
      //                   "resource": {
      //          "resourceType": "Condition",
      //          "category": [
      //            {
      //            "coding": [
      //              {
      //              "system": "http://terminology.hl7.org/CodeSystem/condition-category",
      //              "code": "problem-list-item",
      //              "display": "Problem List"
      //              }
      //            ],
      //            "text": "Problem list"
      //            }
      //          ],
      //          "code": {
      //            "coding": [
      //            {
      //              "system": "urn:oid:2.16.840.1.113883.6.90",
      //              "code": "R10.9"
                   
      //            },
      //            {
      //              "system": "urn:oid:2.16.840.1.113883.6.96",
      //              "code": "271681002"
                   
      //            }
      //            ],
      //            "text": "Stomach ache"
      //          }
      //          },
      //                }
      //             ]
      //          },
      //    {
      //    "label":"Diabetes",
      //    "uuid": "85126ce5-b0a7-4a54-86f4-d7b52426cc58",
      //          "actions":[  
      //             {  
      //                "type":"create",
      //                "description":"Diabetes Order Set from CDS Hooks",
      //                "resource": {
      //        "resourceType": "ServiceRequest",
      //        "status": "draft",
      //        "intent": "proposal",
      //        "category": [
      //          {
      //          "coding": [
      //          {
      //            "system": "http://terminology.hl7.org/CodeSystem/medicationrequest-category",
      //            "code": "outpatient",
      //            "display": "Outpatient"
      //          }]
      //        }],
      //        "code": {
      //          "coding": [
      //            {
      //            "system": "urn:com.epic.cdshooks.action.code.system.orderset-item",
      //            "code": "DIABETES"
      //          }
      //          ]
      //        }
      //        },
      //             },
      //          ]
      //       },
      //     {  
      //      "label":"Test IP Medication Order",
      //      "uuid": "b1e0575b-2381-4625-b687-2def804d7c79",
      //      "actions":[  
      //         {  
      //          "type":"create",
      //          "description":"Test Medication IP Order",
      //          "resource": {
      //          "resourceType": "MedicationRequest",
      //          "status": "draft",
      //          "intent": "proposal",
      //          "category": [
      //          {
      //            "coding": [
      //            {
      //              "system": "http://terminology.hl7.org/CodeSystem/medicationrequest-category",
      //              "code": "inpatient",
      //              "display": "Inpatient"
      //            }
      //            ],
      //            "text": "Inpatient"
      //          }
      //          ],
      //          "medicationCodeableConcept": {
      //            "coding": [
      //            {
      //              "system": "urn:oid:2.16.840.1.113883.6.69",
      //              "code": "55111-682-01"
      //            }
      //            ],
      //            "text": "Test Med Display name"
      //          }
      //          },
      //         },
      //      ]
      //     },
      //     {  
      //      "label":"Test Medication Order from Pref",
      //      "uuid": "5e0ce5e2-d33a-467c-bfc6-cde8d304e73d",
      //      "actions":[  
      //         {  
      //          "type":"create",
      //          "description":"Test Medication Order from Pref",
      //          "resource": {
      //          "resourceType": "MedicationRequest",
      //          "status": "draft",
      //          "intent": "proposal",
      //          "category": [ 
      //          {
      //            "coding": [
      //            {
      //              "system": "http://terminology.hl7.org/CodeSystem/medicationrequest-category",
      //              "code": "inpatient",
      //              "display": "Inpatient"
      //            }
      //            ],
      //            "text": "Inpatient"
      //          }
      //          ],
      //          "medicationCodeableConcept": {
      //            "coding": [
      //            {
      //              "system": "urn:com.epic.cdshooks.action.code.system.preference-list-item",
      //              "code": "BENAD25"
      //            }
      //            ],
      //            "text": "Test Proc Display name"
      //          }
      //          },
      //         },
      //      ]
      //     },
      //   {  
      //          "label":"CBC",
      //    "uuid": "613b0192-4243-4384-8294-4316dfb726bb",
      //          "actions":[  
      //             {  
      //                "type":"create",
      //                "description":"CBC from CDS Hooks",
      //                "resource": {
      //        "resourceType": "ServiceRequest",
      //        "status": "draft",
      //        "intent": "proposal",
      //        "category": [
      //          {
      //          "coding": [
      //          {
      //            "system": "http://terminology.hl7.org/CodeSystem/medicationrequest-category",
      //            "code": "outpatient",
      //            "display": "Outpatient"
      //          }]
      //        }],
      //        "code": {
      //          "coding": [
      //            {
      //            "system": "urn:com.epic.cdshooks.action.code.system.preference-list-item",
      //            "code": "CBC_IP"
      //          }
      //          ],
      //          "text": "Test Proc Display name"
      //        }
      //        },
      //             },
      //          ]}            
      //  ]
      //    },
  //  ]
   
  })
})
app.post('/cds-services/transplant-order-create', (req, res) => {
  console.log(req.body);
const patientId = req.body.context.patientId;
  res.json(
    {
      "cards": [
        {
          "summary": "Example",
          "indicator": "info",
          // "extension": {
          //   "com.epic.cdshooks.card.detail.content-type": "text/html"
          // },
          "detail": "Another card to test suggestions",
          // "source": {
          //   "label": "Clinical Inferences",
          //   "url": "https://www.example.com/",
          //   "icon": "file://example/CDSHooks/images/example.png",
          //   "topic": {
          //     "code": "BCSCard2",
          //     "system": "card-system",
          //     "display": "BCS Card 2"
          //   }
          // },
          // "links": [
          //   {
          //     "label": "Github",
          //     "url": "https://github.com",
          //     "type": "absolute"
          //   },
          //   {
          //     "label": "R4 SMART Example App",
          //     "url": "https://example.com/EpicSMARTApp/Default.aspx?appFhirVersion=R4",
          //     "type": "smart",
          //     "appContext": "%FNAME%-%EXTENSION;74901%-420fe522-193c-11eb-9552-460231621f93~!@#$%^&*()-+{}[]|\\"
          //   }
          // ],
          // "overrideReasons": [
          //   {
          //     "code": "patrefused",
          //     "system": "http://example.org/cds-services/fhir/CodeSystem/override-reasons",
          //     "display": "Patient refused"
          //   },
          //   {
          //     "code": "seecomment",
          //     "system": "http://example123.org/cds-services/fhir/CodeSystem/override-reasons"
          //   }
          // ],
          "suggestions": [
            {
              "label": "CBC",
              "uuid": "613b0192-4243-4384-8294-4316dfb726bb",
              "actions": [
                {
                  "type": "create",
                  "description": "CBC from CDS Hooks",
                  "resource": {
                    "resourceType": "ServiceRequest",
                    "status": "draft",
                    "intent": "order",
                    "category": [
                      {
                        "coding": [
                          {
                            "system": "http://terminology.hl7.org/CodeSystem/medicationrequest-category",
                            "code": "outpatient",
                            "display": "Outpatient"
                          }
                        ]
                      }
                    ],
                    "code": {
                      "coding": [
                        {
                          "system": "urn:com.epic.cdshooks.action.code.system.preference-list-item",
                          "code": "CBC_IP"
                        }
                      ],
                      "text": "Test Proc Display name"
                    }
                  }
                }
              ]
            }
          ]
        }
      ]
    

      // "cards": [
      //   {
      //     "summary": "Suggest transplant referral",
      //     "detail": "The patient appears eligible for a transplant evaluation. Consider placing a referral order.",
      //     "indicator": "info",
      //     "source": {
      //       "label": "Transplant Eligibility Service",
      //       "url": "https://your-service.com"
      //     },
      //     "suggestions": [
      //       {
      //         "label": "Add transplant referral order",
      //         "uuid": "transplant-referral-001",
      //         "actions": [
      //           {
      //             "type": "create",
      //             "description": "Create a draft referral order for transplant evaluation.",
      //             "resource": {
      //               "resourceType": "ServiceRequest",
      //               "status": "draft",
      //               "intent": "order",
      //               "category": [
      //                 {
      //                   "coding": [
      //                     {
      //                       "system": "http://terminology.hl7.org/CodeSystem/service-category",
      //                       "code": "REF",
      //                       "display": "Referral"
      //                     }
      //                   ]
      //                 }
      //               ],
      //               "code": {
      //                 "coding": [
      //                   {
      //                     "system": "http://snomed.info/sct",
      //                     "code": "430193006",
      //                     "display": "Referral to transplant service"
      //                   }
      //                 ]
      //               },
      //               "subject": {
      //                 "reference": "Patient/{{context.patientId}}"
      //               },
      //               "authoredOn": "{{context.timestamp}}",
      //               "requester": {
      //                 "reference": "Practitioner/{{context.userId}}"
      //               },
      //               "priority": "routine"
      //             }
      //           }
      //         ]
      //       }
      //     ]
      //   }
      // ]
    }
    );
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 