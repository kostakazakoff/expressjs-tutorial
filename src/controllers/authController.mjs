import { validationResult, matchedData } from 'express-validator';
import { mockUsers } from '../helpers/mockData.mjs';


export const addUser = (req, res) => {
    const errors = validationResult(req).errors;

    if (errors.length) {
        return res.status(400).send(errors);
    }
    const data = matchedData(req);
    const newUser = { id: mockUsers[mockUsers.length - 1].id + 1, ...data }
    if (Object.values(mockUsers).filter(u => u.username === data.username).length > 0) {
        return res.status(409).send({ 'success': false, 'error': 'Username already exists' });
    }

    mockUsers.push(newUser);

    return res.status(201).send({ 'success': true, 'data': newUser });
};


export const loginUser = (req, res) => {
    const errors = validationResult(req).errors;

    if (errors.length) {
        return res.status(400).send(errors);
    }

    const data = matchedData(req);
    const user = mockUsers.find(u => u.username === data.username && u.password === data.password);

    if (!user) {
        return res.status(401).send({ 'success': false, 'error': 'Invalid credentials' });
    }

    return res.status(200).send({ 'success': true, 'data': 'Logged in' });
};

export const getUser = (req, res) => {};