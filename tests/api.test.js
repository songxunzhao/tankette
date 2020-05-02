const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('Barrel API', function () {
    it('Should be able to get barrels', function () {
        chai.get('api/v1/barrels')
        .then((response) => {
            console.log(response);
        })
    });
});