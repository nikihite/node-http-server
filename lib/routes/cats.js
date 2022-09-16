const cats = [
    { name: 'garfield', fatStatus: 10 }
];

export default {
    name: 'cats',
    get(req, res) {
        res.write(JSON.stringify(cats));
        res.end();
    },
};