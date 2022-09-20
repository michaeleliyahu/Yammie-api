const chai = require('chai');
const expect = chai.expect;
const should = chai.should();
const chaiHttp = require('chai-http');
const app = require('../app');
const Order = require('../models/Order');
chai.use(chaiHttp);
const moment = require("moment");


describe("get all tests", () => {
    
        it('check get all request successful', (done) => {
            chai.request(app)
                .get("/api/order/getTodayOrder")
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                })
        })
        it('check that all order is from the last day', (done) => {
            chai.request(app)
                .get("/api/order/getTodayOrder")
                .end((err, res) => {
                    res.should.have.status(200);
                    const datetoday = new Date(moment().add(-1,"day"))
                    const orders = res.body;
                    orders.forEach(ordersdate => {
                        const orderd = new Date(ordersdate.createdAt);
                        expect(orderd)
                        .not.to.be.
                        lessThan(datetoday);
                    });               
                    done();
                })
        })
        it('check handle error (wrong address)', (done) => {
            chai.request(app)
                .get("/api/order")
                .end((err, res) => {
                    res.should.have.status(404);
                    done();
                })
        })
})