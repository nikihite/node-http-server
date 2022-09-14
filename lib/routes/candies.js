const candies = [
    { name: 'snickers', rating: 10 }
];

export default {
    name: 'candies',
    get(req, res) {
        res.write(JSON.stringify(candies));
        res.end();
    },
    post(req, res) {},
};
