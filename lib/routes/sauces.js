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
};
