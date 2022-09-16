const cats = [
    { name: 'garfield', fatness: '10' }
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
    put(req, res) {
        const updatedCat = cats[cats.findIndex((cat) => cat.fatness === req.body.fatness)];
        updatedCat.fatness = req.body.newfatness;
        res.write(JSON.stringify(cats));
        res.end();
    },
    delete(req, res) {
        cats.pop();
        res.statusCode = 200;
        res.end();
    },
};