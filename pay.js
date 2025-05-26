const axios = require('axios');

// ADMIN API KEY OR RESTAPI TEST TOKEN
const API_KEY = "";
//SITEID
const SITE_ID = "";

const url = "https://www.wixapis.com/payment-links/v1/payment-links";

const headers = {
  "Authorization": API_KEY,
  "Content-Type": "application/json",
  "Accept": "application/json",
  "wix-site-id": SITE_ID,
};

const payload = {
    paymentLink: {
      title: "Test Item",
      description: "Test payment link",
      currency: "TRY",
      expirationDate: "2025-06-01T00:00:00Z",
      paymentsLimit: 1,
      type: "ECOM",
      note: {
        text: "This is for special site users."
      },
      ecomPaymentLink: {
        lineItems: [
          {
            type: "CUSTOM",
            customItem: {
              quantity: 1,
              name: "Test Item",
              description: "test description",
              price: "99.00"
            }
          }
        ]
      }
    }
  };
  

  axios.post(url, payload, { headers })
  .then(response => {
    console.log("✅ Success - ");
    console.log("🔹 Response:");
    console.log(JSON.stringify(response.data, null, 2));

    console.log("\n🔹  Header:");
    console.log(JSON.stringify(response.headers, null, 2));
  })
  .catch(error => {
    if (error.response) {
      console.error(`❌ Error :[${error.response.status}]:`);
      console.error("🔹 Error :");
      console.error(JSON.stringify(error.response.data, null, 2));

      console.error("\n🔹 Header Error:");
      console.error(JSON.stringify(error.response.headers, null, 2));
    } else {
      console.error("❌ Error :", error.message);
    }
  });

