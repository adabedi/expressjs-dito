const express = require('express');

const PatientCtrl = require('../controllers/patient-controler')

const router = express.Router()

router.post('/patient', PatientCtrl.createPatient)
router.get('/patient/:id', PatientCtrl.getPatientById)
router.get('/patient', PatientCtrl.getPatients)

module.exports = router
