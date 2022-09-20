const chai = require('chai');
const expect = chai.expect;
const should = chai.should();
const chaiHttp = require('chai-http');
const app = require('../app');
const Order = require('../models/Order');
chai.use(chaiHttp);

describe("check post request. save new order", () => {

    let order = {
        username:"test",
        address: "test",
        phoneNumber: "test",
        product:[],
        note:"test"
    }

    it("check if post request successful", (done) => {
        
        chai.request(app)
            .post("/api/order/saveOrder")
            .send(order)
            .end((rerr, res) => {
                res.should.have.status(200);
                done();
            });
    })

    it('check handle error (wrong address)', (done) => {

        chai.request(app)
            .post("/api/order")
            .send(order)
            .end((err, res) => {
                res.should.have.status(404);
                done();
            })
    })

    it('check handle error (miss required field)', (done) => {

        let order = {
            username:"test",
            address: "",
            phoneNumber: "test",
            product:[],
            note:"test"
        }

        chai.request(app)
            .post("/api/order")
            .send(order)
            .end((err, res) => {
                res.should.have.status(404);
                done();
            })
    })
})