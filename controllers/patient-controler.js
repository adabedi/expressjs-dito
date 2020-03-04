const Patient = require('../models/patient-model')

createPatient = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a movie',
        })
    }

    const patient = new Patient(body)

    if (!patient) {
        return res.status(400).json({ success: false, error: err })
    }

    patient
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: patient._id,
                message: 'Movie created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Movie not created!',
            })
        })
}

// updateMovie = async (req, res) => {
//     const body = req.body

//     if (!body) {
//         return res.status(400).json({
//             success: false,
//             error: 'You must provide a body to update',
//         })
//     }

//     Movie.findOne({ _id: req.params.id }, (err, movie) => {
//         if (err) {
//             return res.status(404).json({
//                 err,
//                 message: 'Movie not found!',
//             })
//         }
//         movie.name = body.name
//         movie.time = body.time
//         movie.rating = body.rating
//         movie
//             .save()
//             .then(() => {
//                 return res.status(200).json({
//                     success: true,
//                     id: movie._id,
//                     message: 'Movie updated!',
//                 })
//             })
//             .catch(error => {
//                 return res.status(404).json({
//                     error,
//                     message: 'Movie not updated!',
//                 })
//             })
//     })
// }

// deleteMovie = async (req, res) => {
//     await Movie.findOneAndDelete({ _id: req.params.id }, (err, movie) => {
//         if (err) {
//             return res.status(400).json({ success: false, error: err })
//         }

//         if (!movie) {
//             return res
//                 .status(404)
//                 .json({ success: false, error: `Movie not found` })
//         }

//         return res.status(200).json({ success: true, data: movie })
//     }).catch(err => console.log(err))
// }

getPatientById = async (req, res) => {
    await Patient.findOne({ _id: req.params.id }, (err, patient) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!patient) {
            return res
                .status(404)
                .json({ success: false, error: `Patient not found` })
        }
        return res.status(200).json({ success: true, data: patient })
    }).catch(err => console.log(err))
}

getPatients = async (req, res) => {
    await Patient.find({}, (err, patient) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!patient.length) {
            return res
                .status(404)
                .json({ success: false, error: `Patients not found` })
        }
        return res.status(200).json({ success: true, data: movies })
    }).catch(err => console.log(err))
}

module.exports = {
    createPatient,
    // updateMovie,
    // deleteMovie,
    getPatients,
    getPatientById
}
