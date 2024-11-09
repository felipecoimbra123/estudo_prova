const express = require('express')
const cors = require('cors')
const connection = require('./db/connection')
const app = express()

app.use(cors())
app.use(express.json())

const port = 3000

app.listen(port, () => console.log(`Rodando na porta ${port}`))

app.post('/clients', (req, res) => {
    const {name, cellphone, adress} = req.body;
    const query = 'INSERT INTO clients (name, cellphone, adress) VALUES (?,?,?)';
    connection.query(query, [name, cellphone, adress], (err, result) => {
        if (err) {
            return res.status(500).json({success: false, messagge: 'Erro ao cadastrar cliente!'})
        }
        res.json({success: true, message: 'Cliente cadastrado com sucesso!', id: result.insertId})
    })
})

app.post('/animals', (req, res) => {
    const {name, age, type} = req.body;
    const query = 'INSERT INTO animals (name, age, type) VALUES (?,?,?)';
    connection.query(query, [name, age, type], (err, result) => {
        if (err) {
            return res.status(500).json({success: false, messagge: 'Erro ao cadastrar pet!'})
        }
        res.json({success: true, message: 'Pet cadastrado com sucesso!', id: result.insertId})
    })
})

app.get('/clients', (req, res) => {
    const query = 'SELECT * FROM clients'
    connection.query(query, [name, cellphone, adress], (err, result) => {
        if (err) {
            return res.status(500).json({success: false, messagge: 'Erro ao buscar cliente!'})
        }
        res.json({success: true, clients: results})
        })
    })
