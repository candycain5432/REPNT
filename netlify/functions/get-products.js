const fetch = require('node-fetch');

exports.handler = async function (event, context) {
  const token = process.env.PRINTIFY_TOKEN;
  const shopId = process.env.SHOP_ID;

  const res = await fetch(`https://api.printify.com/v1/shops/${shopId}/products.json`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });

  const data = await res.json();

  return {
    statusCode: 200,
    body: JSON.stringify(data)
  };
};

