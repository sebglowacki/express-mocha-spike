var request = require('./support/http')
    , app = require('../app');

describe('Counter API', function () {

    describe('GET /', function () {
        it('should redirect to /users', function (done) {
            request(app)
                .get('/')
                .end(function (err, res) {
//                    console.log(res);
                    res.should.have.status(200);
                    done();
                })
        })
    });

    describe('GET /users', function(){
        it('should display a list of users', function(done){
            request(app)
                .get('/users')
                .end(function(err, res){
//                    console.log(res.body);
                    res.text.should.include('foo');
//                    res.text.should.include('>TJ<');
//                    res.text.should.include('>Guillermo<');
//                    res.text.should.include('>Nathan<');
                    done();
                })
        })
    })

//    it('POST /users should return 200',function(done){
//        request()
//            .post('/users')
//            .set('Content-Type','application/json')
//            .write(JSON.stringify({ username: 'test', password: 'pass' }))
//            .expect(200,done);
//    });

});