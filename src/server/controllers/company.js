const Company = require('../models').Company;
const Job = require('../models').Job;

module.exports = {
    create(req, res) {
        return Company
            .create({
                name: req.body.name,
                key: req.body.key
            })
            .then(company => res.status(201).send(company))
            .catch(error => res.status(400).send(error));
    },

    list(req, res) {
        return Company
            .all()
            .then(companys => res.status(200).send(companys))
            .catch(error => res.status(400).send(error));
    },

    retrieve(req, res) {
        return Company
            .findById(req.params.companyId, {
                include: [{
                    model: Job,
                    as: 'jobs',
                }],
            })
            .then(company => {
                if(!company) {
                    return res.status(404).send({
                        message: 'Company not found',
                    });
                }
                return res.status(200).send(company);
            })
            .catch(error => res.status(400).send(error));
    }
}