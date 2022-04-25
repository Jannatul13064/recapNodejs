const express = require('express');
var cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

//Middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World! new World')
})


const users = [
    { id: '0', name: 'Shabana', email: 'shabana@gmail.com' },
    { id: '1', name: 'Tithi', email: 'tithi@gmail.com' },
    { id: '2', name: 'Bonna', email: 'bonna@gmail.com' },
    { id: '3', name: 'Pakhi', email: 'pakhi@gmail.com' },
    { id: '4', name: 'Shila', email: 'shila@gmail.com' },
    { id: '5', name: 'Moina', email: 'moina@gmail.com' },
    { id: '6', name: 'Rokhsana', email: 'rokhsana@gmail.com' },
]
app.get('/users', (req, res) => {
    const search = (req.query.search);
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);

    }
    else {
        res.send(users);
    }

})
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log("Hitting my post", req.body);
    res.json(newUser);
})
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})
const products = [
    { id: 0, name: 'Bag', price: '800 BDT', },
    { id: 1, name: 'Phone', price: '30200 BDT', },
    { id: 2, name: 'Bike', price: '150000 BDT', },
    { id: 3, name: 'TV', price: '20000 BDT', }
]
app.get('/products', (req, res) => {
    res.send(products);
})

app.get('/products/product/bag', (req, res) => {
    res.send('This is a Bag');
})

app.listen(port, () => {
    console.log('Listening from port', port);

})