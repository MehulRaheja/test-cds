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
        "summary": "Suggest transplant referral",
        "detail": "The patient appears eligible for a transplant evaluation. Consider placing a referral order.",
        "indicator": "info",
        "source": {
          "label": "Transplant Eligibility Service",
          "url": "https://your-service.com"
        },
        "suggestions": [
          {
            "label": "Add transplant referral order",
            "uuid": "transplant-referral-001",
            "actions": [
              {
                "type": "create",
                "description": "Create a draft referral order for transplant evaluation.",
                "resource": {
                  "resourceType": "ServiceRequest",
                  "status": "draft",
                  "intent": "order",
                  "category": [
                    {
                      "coding": [
                        {
                          "system": "http://terminology.hl7.org/CodeSystem/service-category",
                          "code": "REF",
                          "display": "Referral"
                        }
                      ]
                    }
                  ],
                  "code": {
                    "coding": [
                      {
                        "system": "http://snomed.info/sct",
                        "code": "430193006",
                        "display": "Referral to transplant service"
                      }
                    ]
                  },
                  "subject": {
                    "reference": "Patient/{{context.patientId}}"
                  },
                  "authoredOn": "{{context.timestamp}}",
                  "requester": {
                    "reference": "Practitioner/{{context.userId}}"
                  },
                  "priority": "routine"
                }
              }
            ]
          }
        ]
      }
    ]
  })
})
app.post('/cds-services/transplant-order-create', (req, res) => {
  console.log(req.body);
const patientId = req.body.context.patientId;
  res.json(
    {
      "cards": [
        {
          "summary": "Suggest transplant referral",
          "detail": "The patient appears eligible for a transplant evaluation. Consider placing a referral order.",
          "indicator": "info",
          "source": {
            "label": "Transplant Eligibility Service",
            "url": "https://your-service.com"
          },
          "suggestions": [
            {
              "label": "Add transplant referral order",
              "uuid": "transplant-referral-001",
              "actions": [
                {
                  "type": "create",
                  "description": "Create a draft referral order for transplant evaluation.",
                  "resource": {
                    "resourceType": "ServiceRequest",
                    "status": "draft",
                    "intent": "order",
                    "category": [
                      {
                        "coding": [
                          {
                            "system": "http://terminology.hl7.org/CodeSystem/service-category",
                            "code": "REF",
                            "display": "Referral"
                          }
                        ]
                      }
                    ],
                    "code": {
                      "coding": [
                        {
                          "system": "http://snomed.info/sct",
                          "code": "430193006",
                          "display": "Referral to transplant service"
                        }
                      ]
                    },
                    "subject": {
                      "reference": "Patient/{{context.patientId}}"
                    },
                    "authoredOn": "{{context.timestamp}}",
                    "requester": {
                      "reference": "Practitioner/{{context.userId}}"
                    },
                    "priority": "routine"
                  }
                }
              ]
            }
          ]
        }
      ]
    }
    );
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 