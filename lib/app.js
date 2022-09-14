import candies from './routes/candies.js';
import notFound from './not-found.js';

const routes = {
    candies,
};

export default async function(req, res) {
    const parts = req.url.split('/');
    console.log('whooo', parts);
    if (parts.length && parts[1] === 'api') {
        `resolve(body == '' ? undefined : JSON.parse(body))`;
        const resourceName = parts[parts.length - 1];
        const resource = routes[resourceName];

        const route = resource[req.method.toLowerCase()];

        route(req, res);
        return;
    }

    notFound(req, res);
}
