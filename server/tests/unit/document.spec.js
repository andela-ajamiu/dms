const env = process.env.NODE_ENV = 'test';
import {expect} from 'chai';
import {Document} from '../../models'

describe('Document Creation', function() {
    it ('should not create doc', function(done) {
        Document.create({})
            .catch(err => {
                expect(err.errors[0].message).to.equal('creatorId cannot be null');
                expect(err.errors[1].message).to.equal('title cannot be null');
                done();                                
            });
    }); 
});