const cats = [
    { name: 'garfield', fatStatus: 10 }
];

export default {
    name: 'cats',
    get(req, res) {
        res.write(JSON.stringify(cats));
        res.end();
    },
    post(req, res) {
        cats.push(req.body);
        res.write(JSON.stringify(req.body));
        res.end();
    },
};