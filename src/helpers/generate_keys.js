import crypto from "crypto";

export const JwrSecret = crypto.randomBytes(32).toString("hex");
export const JwrSecret_PassReset = crypto.randomBytes(32).toString("hex");

console.log(JwrSecret);
console.log(JwrSecret_PassReset);
