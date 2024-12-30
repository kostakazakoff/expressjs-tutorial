import { validationResult, matchedData } from 'express-validator';
import { mockUsers } from '../helpers/mockData.mjs';

export const addUser = (req, res) => {
    const errors = validationResult(req).errors;
    if (errors.length) {
        return res.status(400).send(errors);
    }
    const data = matchedData(req);
    const newUser = { 'id': mockUsers[mockUsers.length - 1].id + 1, ...data }
    mockUsers.push(newUser);
    return res.status(201).send({ 'success': true, 'data': newUser });
};

export const loginUser = (req, res) => {
    return res.status(200).send({ 'success': true, 'data': 'Logged in' });
};