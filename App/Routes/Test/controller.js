const testService = require('../../Services/Test/index');

module.exports = {
    test: async function(request, h) {
        try {
            const test = await testService.getTest();
        } catch (err) {
            return err.toHapiResponse(h);
        }
    }
};