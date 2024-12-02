import querystring from 'querystring';
import Person from "../models/Person.js";

const personService = {
    getAll(filter = {}){
        const query = Person.find();
        
        if ( filter.where){
            const qs = querystring.parse('_ownerId=" "')
            query.find(qs);
        }


        return query;
    },
    create(personData, userId){
        return Person.create({...personData, _ownerId: userId});
    },
    getOne(personId){
        return Person.findById(personId)
    },
    delete(personId){
        return Person.findByIdAndDelete(personId);
    },
    update(personId, personData){
        return Person.findByIdAndUpdate(personId, personData)
    }
}

export default personService;