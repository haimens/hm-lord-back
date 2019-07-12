const express = require('express');
const router = express.Router();
const cors = require("cors");

const {
    router_checker,
    token_machine,
    loginRoute,
    signupRoute,
    logoutRoute,
    forgetRoute
} = require("@odinternational/exodus_v2_qa");

router.use(cors());

router.use(
    "/",
    router_checker({
        token_type_zero: [],
        token_type_one: [],
        token_type_two: [],
        token_type_three: [
            'quote', 'driver', 'customer', 'car', 'trip', 'order',
            'address', 'alert', 'realm', 'wage', 'salary', 'note', 'order', 'flight'
        ]
    })
);

router.use(
    token_machine(
        {
            allowSignup: false,
            havana_url: process.env.HAVANA_URL,
            instance_link: `${process.env.INSTANCE_LINK}/api/v0`,
            instance_name: process.env.INSTANCE_NAME
        },
        process.env.APP_TOKEN,
        process.env.APP_KEY
    )
);

// Exodus routes
router.use("/login", loginRoute);
router.use("/signup", signupRoute);
router.use("/logout", logoutRoute);
router.use("/forget", forgetRoute);


const quoteRoute = require('./quote.route');

const driverRoute = require('./driver.route');
const customerRoute = require('./customer.route');
const carRoute = require('./car.route');
const addressRoute = require('./address.route');

const tripRoute = require('./trip.route');
const alertRoute = require('./alert.route');
const realmRoute = require('./realm.route');

const wageRoute = require('./wage.route');
const salaryRoute = require('./salary.route');

const noteRoute = require('./note.route');
const orderRoute = require('./order.route');

const flightRoute = require('./flight.route');


router.use('/quote', quoteRoute);
router.use('/driver', driverRoute);
router.use('/customer', customerRoute);
router.use('/car', carRoute);
router.use('/address', addressRoute);
router.use('/trip', tripRoute);
router.use('/alert', alertRoute);
router.use('/realm', realmRoute);
router.use('/wage', wageRoute);
router.use('/salary', salaryRoute);
router.use('/note', noteRoute);
router.use('/order', orderRoute);
router.use('/flight', flightRoute);


// App routes

router.use('/', async (req, res, next) => {
    res.json({status: false, message: 'LORD V0 INDEX REACHED'});
});

module.exports = router;
