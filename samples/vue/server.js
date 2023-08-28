require('dotenv').config({
  path: '.env.local',
});

const express = require('express');
const chargebee = require('chargebee');
// CORS is enabled only for demo. Please dont use this in production unless you know about CORS
const cors = require('cors');
const bodyParser = require('body-parser');
chargebee.configure({
  site: process.env.VITE_CB_SITE,
  api_key: process.env.VITE_CB_ADMIN_KEY,
});

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get('/api/checkout', async (req, res) => {
  try {
    const { customer } = await chargebee.customer.create().request();

    const { hosted_page } = await chargebee.hosted_page
      .checkout_new_for_items({
        subscription_items: [
          {
            item_price_id: process.env.VITE_PLAN_ITEM_PRICE_ID,
            quantity: 1,
          },
        ],
        customer,
      })
      .request();
    res.json(hosted_page);
  } catch (e) {
    res.status(400);
    res.json({
      success: false,
      error_message: e.message,
    });
  }
});

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(8000, () => console.log('Example app listening on port 8000!'));
