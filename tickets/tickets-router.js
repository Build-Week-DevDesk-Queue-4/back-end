const express = require('express');
const router = express.Router();
const db = require('./tickets-model');
const restricted  = require('../auth/auth-middleware')

// GET ALL
router.get('/', restricted, async (req, res) => {
    try {
        const tickets = await db.find();
        res.status(200).json({ tickets })
    } catch (error) {
        res.status(500).json({ error });
    }
})

// CREATE
router.post('/', restricted, async (req, res) => {
    try {
        const ticket = req.body;
        const [ newTicket ] = await db.add(ticket);
        res.status(201).json({ newTicket, ticket });
    } catch (error) {
        res.status(500).json({ error });
    }
})

// DELETE
router.delete('/:id', restricted, async (req, res) => {
    try {
        const ticketId = req.params.id;
        const deletedTickets = await db.removeTicket(ticketId);
        if(deletedTickets > 0){
            res.status(204).send();
        } else {
            console.log(deletedTickets)
            res.status(404).json({ message: "Ticket cannot be found." });
        }
    } catch (error) {
        res.status(500).json({ error });
    }
})

// UPDATE
router.put('/:id', restricted, async (req, res) => {
    try {
        const id = req.params.id;
        const ticket = req.body;
        const updatedTicket = await db.update(ticket, id);
        res.status(201).json({ updatedTicket, ticket });
    } catch (error) {
        res.status(500).json({ error });
    }
})

module.exports = router;