// import { Sequelize } from "sequelize";
// import db from "../config/database";
//  const BO_LOCKER = db.define(
//   "BO_LOCKER",
//   {
//     COD_USER: {
//       type: Sequelize.BIGINT,
//       primaryKey: true,
//       autoIncrement: true,
//       allowNull: false,
//       comment: "COD OF THE PERSON",
//     },
//     NAME_LOCKER: {
//       type: Sequelize.STRING(120),
//       allowNull: false,
//       unique: true,
//       comment: "THE NAME OF THE LOCKER",
//     },
//     CLAVE: {
//       type: Sequelize.STRING(120),
//       allowNull: false,
//       comment: "THE PASSWORD OF THE USER",
//     },
//     IND_LOCK: {
//       type: Sequelize.BOOLEAN,
//       allowNull: false,
//       defaultValue: true,
//       comment: "THE NAME OF THE USER",
//     },
//     USR_ADD: {
//       type: Sequelize.STRING(30),
//       allowNull: false,
//       comment: "USER THAT ADDED THIS ROW	",
//     },
//     USR_UPD: {
//       type: Sequelize.STRING(30),
//       comment: "USER WHO MODIFIED THIS ROW	",
//     },
//     DAT_ADD: {
//       type: Sequelize.DATE,
//       defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
//       comment: "DATE THAT THIS ROW WERE ADDED	",
//     },
//     DAT_UPD: {
//       type: Sequelize.DATE,
//       comment: "DATE THIS ROW WAS MODIFIED	",
//     },
//   },
//   {
//     createdAt: false,
//     updatedAt: false,
//   }
// );
// export default BO_LOCKER;
"use strict";