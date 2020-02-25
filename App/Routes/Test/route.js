const Joi = require('joi');
const controller = require('./controller');

module.exports = [
    {
        method: 'GET',
        path: '/test',
        options: {
            tags: ['api'],
            description: 'Get all college codes',
            auth: {
                strategy: 'token'
            }
        },
        handler: controller.test
    }
];
