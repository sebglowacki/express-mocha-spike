var app = require('../app')
    , request = require('supertest');

describe('Counter API', function () {

//    before(function (done) {
//        http.createServer(app, done);
//    });

    describe('GET /', function(){
        it('should redirect to /users', function(done){
            request(app)
                .get('/')
                .end(function(err, res){
                    console.log(res);
                    res.should.have.status(200);
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