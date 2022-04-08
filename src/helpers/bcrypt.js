const bcrypt =require( "bcrypt")

 const encrptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const pass = await bcrypt.hash(password, salt);
  return pass;
};

 const compararPassword = async (password, reveivedPassword) => {
  return await bcrypt.compare(password, reveivedPassword);
};

module.exports = {
  encrptPassword,
  compararPassword,
}