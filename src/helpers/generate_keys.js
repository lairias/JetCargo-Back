const crypto =require( "crypto")
 const JwrSecret = crypto.randomBytes(32).toString("hex");
 const JwrSecret_PassReset = crypto.randomBytes(32).toString("hex");

module.exports = {
    JwrSecret,
    JwrSecret_PassReset
}