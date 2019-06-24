
const expect = require("expect");
const request = require("supertest");
const server = require("./index");

describe("PUT /api/v1/put/1", ()=>{
    it("should create new key 1 with value 400", (done)=> {
        request(server)
        .put("/api/v1/put/1")
        .send({value: 400})
        .expect(200)
        .end((err, res)=> {
            if(err){
                return done(err);
            }
            done();
        })
    });
});

describe("PUT /api/v1/put/2", ()=>{
    it("should create new key 2 with value 800", (done)=> {
        request(server)
        .put("/api/v1/put/2")
        .send({value: 800})
        .expect(200)
        .end((err, res)=> {
            if(err){
                return done(err);
            }
            done();
        })
    });
});

describe("GET /api/v1/put/1", ()=>{
    it("should return key 1 with value 400", (done)=> {
        request(server)
        .get("/api/v1/get/1")
        .expect(200)
        .expect((res) => {
            expect(res.body).toEqual({
                key: "1",
                value: 400
            });
        })
        .end((err, res)=> {
            if(err){
                return done(err);
            }
            done();
        })
    });
});

describe("PUT /api/v1/put/3", ()=>{
    it("should create new key 3 with value 1200 and envict and return key 2 with value 800", (done)=> {
        request(server)
        .put("/api/v1/put/3")
        .send({
            value: 1200
        })
        .expect(200)
        .expect((res) => {
            expect(res.body).toEqual({
                key: "2",
                value: 800
            });
        })
        .end((err, res)=> {
            if(err){
                return done(err);
            }
            done();
        })
    });
});

describe("GET /api/v1/get/2", ()=>{
    it("should return 404 since key 2 was removed", (done)=> {
        request(server)
        .get("/api/v1/get/2")
        .expect(404)
        .end((err, res)=> {
            if(err){
                return done(err);
            }
            done();
        })
    });
});

describe("PUT /api/v1/put/4", ()=>{
    it("should create new key 4 with value 1600 and envict and return key 1 with value 400", (done)=> {
        request(server)
        .put("/api/v1/put/4")
        .send({
            value: 1600
        })
        .expect(200)
        .expect((res) => {
            expect(res.body).toEqual({
                key: "1",
                value: 400
            });
        })
        .end((err, res)=> {
            if(err){
                return done(err);
            }
            done();
        })
    });
});

describe("GET /api/v1/get/1", ()=>{
    it("should return 404 since key 1 was removed", (done)=> {
        request(server)
        .get("/api/v1/get/1")
        .expect(404)
        .end((err, res)=> {
            if(err){
                return done(err);
            }
            done();
        })
    });
});

describe("GET /api/v1/get/3", ()=>{
    it("should return key 3 with value 1200", (done)=> {
        request(server)
        .get("/api/v1/get/3")
        .expect(200)
        .expect(res => {
            expect(res.body).toEqual({
                key: "3",
                value: 1200
            });
        })
        .end((err, res)=> {
            if(err){
                return done(err);
            }
            done();
        })
    });
});

describe("GET /api/v1/get/4", ()=>{
    it("should return key 4 with value 1600", (done)=> {
        request(server)
        .get("/api/v1/get/4")
        .expect(200)
        .expect(res => {
            expect(res.body).toEqual({
                key: "4",
                value: 1600
            });
        })
        .end((err, res)=> {
            if(err){
                return done(err);
            }
            done();
        })
    });
});