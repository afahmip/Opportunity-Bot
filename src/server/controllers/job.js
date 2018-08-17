const Job = require('../models').Job;

module.exports = {
    create(req, res) {
        return Job
            .create({
                name: req.body.name,
                link: req.body.link,
                desc: req.body.desc,
                companyId: req.params.companyId
            })
            .then(job => res.status(201).send(job))
            .catch(error => res.status(400).send(error))
    },
};