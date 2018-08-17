const companyController = require('../controllers').company;
const jobController = require('../controllers').job;

module.exports = (app) => {

    // Default route
    app.get('/api', (req, res) => res.status(200).send({
        message: 'Welcome',
    }));

    // Companies API
    app.post('/api/companies', companyController.create);
    app.get('/api/companies', companyController.list);
    app.get('/api/companies/:companyId', companyController.retrieve);

    // Jobs API
    app.post('/api/companies/:companyId/jobs', jobController.create);
};