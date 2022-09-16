const sauces = [
    { name: 'Ranch', rating: '10' }
];

export default {
    name: 'sauces',
    get(req, res) {
        res.write(JSON.stringify(sauces));
        res.end();
    },
    post(req, res) {
        sauces.push(req.body);
        res.write(JSON.stringify(req.body));
        res.end();
    },
    put(req, res) {
        const updatedSauce = sauces[sauces.findIndex((sauce) => sauce.name === req.body.name)];
        updatedSauce.name = req.body.newName;
        res.write(JSON.stringify(sauces));
        res.end();
    },
    delete(req, res) {
        sauces.pop();
        res.statusCode = 200;
        res.end();
    },
};
