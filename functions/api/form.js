/**
 * Respond with hello worker text
 * @param {Request} request
 */

require("dotenv").config();

addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});

const FORM_URL = "https://product-knowledge-base.pages.dev";

// initialize the Post request that sends the form data

const createAirtableRecord = (body) => {
  return fetch(
    `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(
      AIRTABLE_TABLE_NAME
    )}`,
    {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        Authorization: `Bearer ${AIRTABLE_API_KEY}`,
        "Content-type": `application/json`,
      },
    }
  );
};

const submitHandler = async (request) => {
  if (request.method !== "POST") {
    return new Response("Method Not Allowed", {
      status: 405,
    });
  }

  const body = await request.formData();
  // console.log(body)
  const { first_name, last_name, email, phone, subject, message } =
    Object.fromEntries(body); // make an object from the formdata

  const reqBody = {
    fields: {
      "First Name": first_name,
      "Last Name": last_name,
      Email: email,
      "Phone number": phone,
      Subject: subject,
      Message: message,
    },
  };

  // if (reqBody.fields["Phone Number"] != ){
  //   throw new Error ("check field")
  // }

  // if(Object.keys(reqBody.fields) != request.body.response ){
  //   throw new Error ("check field")
  // }

  return createAirtableRecord(reqBody);
  // return Response.redirect(FORM_URL)
};

async function handleRequest(request) {
  const url = new URL(request.url);

  if (url.pathname === "/submit") {
    return submitHandler(request);
  }

  return new Response.redirect(FORM_URL);
}
