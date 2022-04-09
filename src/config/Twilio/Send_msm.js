const accountSid = "AC9bddd5d23df762bdd707dd046693fc12"; // Your Account SID from www.twilio.com/console
const authToken = "97bd1318f79ec1e2280bdfd60dd30437"; // Your Auth Token from www.twilio.com/console

const twilio = require("twilio");
const client = new twilio(accountSid, authToken);

async function SendMessage(body, phone) {
  try {
    const message = await client.messages.create({
      body: body,
      to: phone, // Text this number+
      from: "+12052367152", // From a valid Twilio number
    });
    // console.log(message.sid);
    return message;
  } catch (erro) {
    console.log(erro);
  }
}
module.exports = SendMessage ;
