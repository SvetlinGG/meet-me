import { Schema, Types, model } from "mongoose";

const personSchema = new Schema({
    name: String,
    age: Number,
    hobbies: String,
    status: String,
    interests: String,
    description: String,
    img: String,
    _ownerId: {
        type: Types.ObjectId,
        ref: 'User',
    }
});

const Person = model('Person', personSchema);

export default Person;