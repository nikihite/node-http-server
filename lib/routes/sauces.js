const sauces = [
    { name: 'Ranch', rating: '10' }
];

export default {
    name: 'sauces',
    get(req, res) {
        res.write(JSON.stringify(sauces));
        res.end();
    },
};
