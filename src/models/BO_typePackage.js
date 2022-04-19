const {Sequelize} = require("sequelize")
const db =require( "../config/database/index")

 const BO_TYPEPACKAGE = db.define(
  "BO_TypePackage",
  {
    COD_TYPEPACKAGE: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      comment: "COD OF THE TYPE OF PACKAGE",
    },
    COD_SHIPPINGCOST: {
      type: Sequelize.BIGINT,
      comment: "COD OF THE TYPE OF PACKAGE",
    },
    NAM_TYPEPACKAGE: {
      type: Sequelize.STRING(120),
      allowNull: false,
      comment: "NAME OF THE TYPE OF PACKAGE",
    },
    ABBRE_TYPEPACKAGE: {
      type: Sequelize.STRING(120),
      allowNull: false,
      comment: "NAME OF THE TYPE OF PACKAGE",
    },
    
    DES_TYPEPACKAGE: {
      type: Sequelize.STRING(120),
      allowNull: false,
      comment: "VALIDACION DE TOKEN PARA RESETEO",
    },
    IMG_TYPEPACKAGE: {
      type: Sequelize.STRING(255),
      comment: "IMAGEN DE TOKEN PARA RESETEO",
    },
    IND_TYPEPACKAGE: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true,
      comment: "STATUS OF TYPE PACKAGE ",
    },
    PREC_TYPEPACKAGE: {
      type: Sequelize.STRING(120),
      allowNull: false,
      comment: "STATUS OF TYPE PACKAGE ",
    },
    USR_ADD: {
      type: Sequelize.STRING(30),
      allowNull: false,
      comment: "USER THAT ADDED THIS ROW	",
    },
    USR_UPD: {
      type: Sequelize.STRING(30),
      comment: "USER WHO MODIFIED THIS ROW	",
    },
    DAT_ADD_TYPEPACKAGE: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      comment: "DATE THAT THIS ROW WERE ADDED	",
    },
    DAT_UPD_TYPEPACKAGE: {
      type: Sequelize.DATE,
      comment: "DATE THIS ROW WAS MODIFIED	",
    },
  },
  {
    createdAt: false,
    updatedAt: false,
  }
);
module.exports = BO_TYPEPACKAGE