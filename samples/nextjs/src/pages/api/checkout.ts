// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import chargebee from 'chargebee';

chargebee.configure({
  site: process.env.NEXT_PUBLIC_CB_SITE!,
  api_key: process.env.CB_ADMIN_KEY!,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const { customer } = await chargebee.customer
    .create()
    .request();

  const result = await chargebee.hosted_page
    .checkout_new_for_items({
      subscription_items: [
        {
          item_price_id: 'cbdemo_basic-INR-monthly',
          quantity: 1
        }
      ],
      customer
    })
    .request();

  res.status(200).json(result.hosted_page)
}
