import { PA_CITIES } from "../../models/Pa_cities";
import { PA_COUNTRIES } from "../../models/Pa_countries";
import { PA_POEPLE } from "../../models/Pa_people";
import { PA_STATES } from "../../models/Pa_states";
import { PA_TypeUsers } from "../../models/Pa_typeUsers";
import { MODEL_HAS_PERMISOS } from "../../models/relations/MODEL_has_permisos";
import { MODEL_TYPEUSER_HAS_PERMISOS } from "../../models/relations/typeusers_has_permisos";
import { SE_PERMISOS } from "../../models/security/SE_permisos";
import { SE_SEGURIDAD } from "../../models/security/Se_seguridad";
import { USERS } from "../../models/Users";
export const CreateRole = async () => {
  const count = await PA_TypeUsers.count();
  if (count > 0) {
    return;
  } else {
    try {
      await Promise.all([
        await PA_TypeUsers.create({
          NOM_TYPE: "ADMIN",
          DES_TYPE: " Perfil administrador",
          USR_ADD: "admin",
        }),
        await PA_TypeUsers.create({
          NOM_TYPE: "CLIENTE",
          DES_TYPE: " Perfil cliente",
          USR_ADD: "admin",
        }),
        await PA_TypeUsers.create({
          NOM_TYPE: "EMPLEADO",
          DES_TYPE: " Perfil empleado",
          USR_ADD: "admin",
        }),
      ]);
    } catch (error) {
      console.log(error);
    }
  }
};
export const CreatePemisoHasRol = async () => {
  const count = await MODEL_TYPEUSER_HAS_PERMISOS.count();
  if (count > 0) {
    return;
  } else {
    try {
      const admin = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
        39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56,
        57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74,
        75, 76,
      ];
      const cliente = [
        2, 6, 10, 14, 18, 22, 26, 30, 34, 38, 42, 46, 50, 54, 58, 62, 68, 72,
        76,
      ];
      const empleado = [15, 22, 26, 27, 58, 66, 70, 71, 72, 73, 74, 75, 76];

      await Promise.all([
        admin.forEach(async (element) => {
          await MODEL_TYPEUSER_HAS_PERMISOS.create({
            COD_PERMISO: element,
            COD_TYPEUSERS: 1,
          });
        }),
        cliente.forEach(async (element) => {
          await MODEL_TYPEUSER_HAS_PERMISOS.create({
            COD_PERMISO: element,
            COD_TYPEUSERS: 2,
          });
        }),
        empleado.forEach(async (element) => {
          await MODEL_TYPEUSER_HAS_PERMISOS.create({
            COD_PERMISO: element,
            COD_TYPEUSERS: 3,
          });
        }),
      ]);
    } catch (error) {
      console.log(error);
    }
  }
};

export const CreatePermisos = async () => {
  const count = await SE_PERMISOS.count();
  if (count > 0) {
    return;
  } else {
    try {
      await Promise.all([
        await SE_PERMISOS.create({
          NAM_PERMISOS: "admin.crear",
          DES_PERMISOS: "Crear administrador",
        }),
        await SE_PERMISOS.create({
          NAM_PERMISOS: "admin.view",
          DES_PERMISOS: "Ver administrador",
        }),
        await SE_PERMISOS.create({
          NAM_PERMISOS: "admin.update",
          DES_PERMISOS: "Actualizar administrador",
        }),
        await SE_PERMISOS.create({
          NAM_PERMISOS: "admin.delete",
          DES_PERMISOS: "Eliminar administrador",
        }),
        await SE_PERMISOS.create({
          NAM_PERMISOS: "city.crear",
          DES_PERMISOS: "Crear ciudad",
        }),
        await SE_PERMISOS.create({
          NAM_PERMISOS: "city.view",
          DES_PERMISOS: "Ver ciudad",
        }),
        await SE_PERMISOS.create({
          NAM_PERMISOS: "city.update",
          DES_PERMISOS: "Actualizar ciudad",
        }),
        await SE_PERMISOS.create({
          NAM_PERMISOS: "city.delete",
          DES_PERMISOS: "Eliminar ciudad",
        }),
        await SE_PERMISOS.create({
          NAM_PERMISOS: "categoripaquete.crear",
          DES_PERMISOS: "Crear categoria de paquetes",
        }),
        await SE_PERMISOS.create({
          NAM_PERMISOS: "categoripaquete.view",
          DES_PERMISOS: "Ver categoria de paquetes",
        }),
        await SE_PERMISOS.create({
          NAM_PERMISOS: "categoripaquete.update",
          DES_PERMISOS: "Actualizar categoria de paquetes",
        }),
        await SE_PERMISOS.create({
          NAM_PERMISOS: "categoripaquete.delete",
          DES_PERMISOS: "Eliminar categoria de paquetes",
        }),
        await SE_PERMISOS.create({
          NAM_PERMISOS: "locker.crear",
          DES_PERMISOS: "Crear Locker",
        }),
        await SE_PERMISOS.create({
          NAM_PERMISOS: "locker.view",
          DES_PERMISOS: "Ver Locker",
        }),
        await SE_PERMISOS.create({
          NAM_PERMISOS: "locker.update",
          DES_PERMISOS: "Actualizar Locker",
        }),
        await SE_PERMISOS.create({
          NAM_PERMISOS: "locker.delete",
          DES_PERMISOS: "Eliminar Locker",
        }),
        await SE_PERMISOS.create({
          NAM_PERMISOS: "package.crear",
          DES_PERMISOS: "Crear Package",
        }),
        await SE_PERMISOS.create({
          NAM_PERMISOS: "package.view",
          DES_PERMISOS: "Ver Package",
        }),
        await SE_PERMISOS.create({
          NAM_PERMISOS: "package.update",
          DES_PERMISOS: "Actualizar Package",
        }),
        await SE_PERMISOS.create({
          NAM_PERMISOS: "package.delete",
          DES_PERMISOS: "Eliminar Package",
        }),
        await SE_PERMISOS.create({
          NAM_PERMISOS: "costodeenvio.crear",
          DES_PERMISOS: "Crear Costo de envio",
        }),
        await SE_PERMISOS.create({
          NAM_PERMISOS: "costodeenvio.view",
          DES_PERMISOS: "Ver Costo de envio",
        }),
        await SE_PERMISOS.create({
          NAM_PERMISOS: "costodeenvio.update",
          DES_PERMISOS: "Actualizar Costo de envio",
        }),
        await SE_PERMISOS.create({
          NAM_PERMISOS: "costodeenvio.delete",
          DES_PERMISOS: "Eliminar Costo de envio",
        }),
        await SE_PERMISOS.create({
          NAM_PERMISOS: "tracking.crear",
          DES_PERMISOS: "Crear tracking",
        }),
        await SE_PERMISOS.create({
          NAM_PERMISOS: "tracking.view",
          DES_PERMISOS: "Ver tracking",
        }),
        await SE_PERMISOS.create({
          NAM_PERMISOS: "tracking.update",
          DES_PERMISOS: "Actualizar tracking",
        }),
        await SE_PERMISOS.create({
          NAM_PERMISOS: "tracking.delete",
          DES_PERMISOS: "Eliminar tracking",
        }),
        await SE_PERMISOS.create({
          NAM_PERMISOS: "typepackage.crear",
          DES_PERMISOS: "Crear tipo de paquete",
        }),
        await SE_PERMISOS.create({
          NAM_PERMISOS: "typepackage.view",
          DES_PERMISOS: "Ver tipo de paquete",
        }),
        await SE_PERMISOS.create({
          NAM_PERMISOS: "typepackage.update",
          DES_PERMISOS: "Actualizar tipo de paquete",
        }),
        await SE_PERMISOS.create({
          NAM_PERMISOS: "typepackage.delete",
          DES_PERMISOS: "Eliminar tipo de paquete",
        }),
        await SE_PERMISOS.create({
          NAM_PERMISOS: "addres.crear",
          DES_PERMISOS: "Crear dirrección",
        }),
        await SE_PERMISOS.create({
          NAM_PERMISOS: "addres.view",
          DES_PERMISOS: "Ver dirrección",
        }),
        await SE_PERMISOS.create({
          NAM_PERMISOS: "addres.update",
          DES_PERMISOS: "Actualizar dirrección",
        }),
        await SE_PERMISOS.create({
          NAM_PERMISOS: "addres.delete",
          DES_PERMISOS: "Eliminar dirrección",
        }),
        await SE_PERMISOS.create({
          NAM_PERMISOS: "country.crear",
          DES_PERMISOS: "Crear país",
        }),
        await SE_PERMISOS.create({
          NAM_PERMISOS: "country.view",
          DES_PERMISOS: "Ver país",
        }),
        await SE_PERMISOS.create({
          NAM_PERMISOS: "country.update",
          DES_PERMISOS: "Actualizar país",
        }),
        await SE_PERMISOS.create({
          NAM_PERMISOS: "country.delete",
          DES_PERMISOS: "Eliminar país",
        }),
        await SE_PERMISOS.create({
          NAM_PERMISOS: "customes.crear",
          DES_PERMISOS: "Crear cliente",
        }),
        await SE_PERMISOS.create({
          NAM_PERMISOS: "customes.view",
          DES_PERMISOS: "Ver cliente",
        }),
        await SE_PERMISOS.create({
          NAM_PERMISOS: "customes.update",
          DES_PERMISOS: "Actualizar cliente",
        }),
        await SE_PERMISOS.create({
          NAM_PERMISOS: "customes.delete",
          DES_PERMISOS: "Eliminar cliente",
        }),
        await SE_PERMISOS.create({
          NAM_PERMISOS: "email.crear",
          DES_PERMISOS: "Crear email",
        }),
        await SE_PERMISOS.create({
          NAM_PERMISOS: "email.view",
          DES_PERMISOS: "Ver email",
        }),
        await SE_PERMISOS.create({
          NAM_PERMISOS: "email.update",
          DES_PERMISOS: "Actualizar email",
        }),
        await SE_PERMISOS.create({
          NAM_PERMISOS: "email.delete",
          DES_PERMISOS: "Eliminar email",
        }),
        await SE_PERMISOS.create({
          NAM_PERMISOS: "people.crear",
          DES_PERMISOS: "Crear personas",
        }),
        await SE_PERMISOS.create({
          NAM_PERMISOS: "people.view",
          DES_PERMISOS: "Ver personas",
        }),
        await SE_PERMISOS.create({
          NAM_PERMISOS: "people.update",
          DES_PERMISOS: "Actualizar personas",
        }),
        await SE_PERMISOS.create({
          NAM_PERMISOS: "people.delete",
          DES_PERMISOS: "Eliminar personas",
        }),
        await SE_PERMISOS.create({
          NAM_PERMISOS: "phone.crear",
          DES_PERMISOS: "Crear teléfono",
        }),
        await SE_PERMISOS.create({
          NAM_PERMISOS: "phone.view",
          DES_PERMISOS: "Ver teléfono",
        }),
        await SE_PERMISOS.create({
          NAM_PERMISOS: "phone.update",
          DES_PERMISOS: "Actualizar teléfono",
        }),
        await SE_PERMISOS.create({
          NAM_PERMISOS: "phone.delete",
          DES_PERMISOS: "Eliminar teléfono",
        }),
        await SE_PERMISOS.create({
          NAM_PERMISOS: "states.crear",
          DES_PERMISOS: "Crear departamento",
        }),
        await SE_PERMISOS.create({
          NAM_PERMISOS: "states.view",
          DES_PERMISOS: "Ver departamento",
        }),
        await SE_PERMISOS.create({
          NAM_PERMISOS: "states.update",
          DES_PERMISOS: "Actualizar departamento",
        }),
        await SE_PERMISOS.create({
          NAM_PERMISOS: "states.delete",
          DES_PERMISOS: "Eliminar departamento",
        }),
        await SE_PERMISOS.create({
          NAM_PERMISOS: "typeuser.crear",
          DES_PERMISOS: "Crear rol",
        }),
        await SE_PERMISOS.create({
          NAM_PERMISOS: "typeuser.view",
          DES_PERMISOS: "Ver rol",
        }),
        await SE_PERMISOS.create({
          NAM_PERMISOS: "typeuser.update",
          DES_PERMISOS: "Actualizar rol",
        }),
        await SE_PERMISOS.create({
          NAM_PERMISOS: "typeuser.delete",
          DES_PERMISOS: "Eliminar rol",
        }),
        await SE_PERMISOS.create({
          NAM_PERMISOS: "user.crear",
          DES_PERMISOS: "Crear usuario",
        }),
        await SE_PERMISOS.create({
          NAM_PERMISOS: "user.view",
          DES_PERMISOS: "Ver usuario",
        }),
        await SE_PERMISOS.create({
          NAM_PERMISOS: "user.update",
          DES_PERMISOS: "Actualizar usuario",
        }),
        await SE_PERMISOS.create({
          NAM_PERMISOS: "user.delete",
          DES_PERMISOS: "Eliminar usuario",
        }),
        await SE_PERMISOS.create({
          NAM_PERMISOS: "methopay.crear",
          DES_PERMISOS: "Crear metodo de pago",
        }),
        await SE_PERMISOS.create({
          NAM_PERMISOS: "methopay.view",
          DES_PERMISOS: "Ver metodo de pago",
        }),
        await SE_PERMISOS.create({
          NAM_PERMISOS: "methopay.update",
          DES_PERMISOS: "Actualizar metodo de pago",
        }),
        await SE_PERMISOS.create({
          NAM_PERMISOS: "methopay.delete",
          DES_PERMISOS: "Eliminar metodo de pago",
        }),
        await SE_PERMISOS.create({
          NAM_PERMISOS: "invoice.crear",
          DES_PERMISOS: "Crear factura",
        }),
        await SE_PERMISOS.create({
          NAM_PERMISOS: "invoice.view",
          DES_PERMISOS: "Ver factura",
        }),
        await SE_PERMISOS.create({
          NAM_PERMISOS: "invoice.update",
          DES_PERMISOS: "Actualizar factura",
        }),
        await SE_PERMISOS.create({
          NAM_PERMISOS: "invoice.delete",
          DES_PERMISOS: "Eliminar factura",
        }),
      ]);
    } catch (error) {
      console.log(error);
    }
  }
};
export const CreateContries = async () => {
  const count = await PA_COUNTRIES.count();
  if (count > 0) {
    return;
  } else {
    try {
      await Promise.all([
        await PA_COUNTRIES.create({
          NAM_COUNTRY: "Honduras",
          DES_COUNTRY: "Pais Centroamericano",
          AREA_COUNTRY: "504",
          USR_ADD: "admin",
        }),
        await PA_COUNTRIES.create({
          NAM_COUNTRY: "El Salvador",
          DES_COUNTRY: "Pais Centroamericano",
          AREA_COUNTRY: "503",
          USR_ADD: "admin",
        }),
      ]);
    } catch (error) {
      console.log(error);
    }
  }
};
export const CreateStates = async () => {
  const count = await PA_STATES.count();
  if (count > 0) {
    return;
  } else {
    try {
      await Promise.all([
        await PA_STATES.create({
          NAM_STATE: "Atlantida",
          DES_STATE: "Atlantida",
          USR_ADD: "admin",
          COD_COUNTRY: 1,
        }),
        await PA_STATES.create({
          NAM_STATE: "Colon",
          DES_STATE: "Colon",
          USR_ADD: "admin",
          COD_COUNTRY: 1,
        }),
        await PA_STATES.create({
          NAM_STATE: "Comayagua",
          DES_STATE: "Comayagua",
          USR_ADD: "admin",
          COD_COUNTRY: 1,
        }),
        await PA_STATES.create({
          NAM_STATE: "Copan",
          DES_STATE: "Copan",
          USR_ADD: "admin",
          COD_COUNTRY: 1,
        }),
        await PA_STATES.create({
          NAM_STATE: "Cortes",
          DES_STATE: "Cortes",
          USR_ADD: "admin",
          COD_COUNTRY: 1,
        }),
        await PA_STATES.create({
          NAM_STATE: "Choluteca",
          DES_STATE: "Choluteca",
          USR_ADD: "admin",
          COD_COUNTRY: 1,
        }),
        await PA_STATES.create({
          NAM_STATE: "El Paraiso",
          DES_STATE: "El Paraíso",
          USR_ADD: "admin",
          COD_COUNTRY: 1,
        }),
        await PA_STATES.create({
          NAM_STATE: "Francisco Morazan",
          DES_STATE: "Francisco Morazán",
          USR_ADD: "admin",
          COD_COUNTRY: 1,
        }),
        await PA_STATES.create({
          NAM_STATE: "Gracias a Dios",
          DES_STATE: "Gracias a Dios",
          USR_ADD: "admin",
          COD_COUNTRY: 1,
        }),
        await PA_STATES.create({
          NAM_STATE: "Intibuca",
          DES_STATE: "Intibucá",
          USR_ADD: "admin",
          COD_COUNTRY: 1,
        }),
        await PA_STATES.create({
          NAM_STATE: "La Paz",
          DES_STATE: "La Paz",
          USR_ADD: "admin",
          COD_COUNTRY: 1,
        }),
        await PA_STATES.create({
          NAM_STATE: "Lempira",
          DES_STATE: "Lempira",
          USR_ADD: "admin",
          COD_COUNTRY: 1,
        }),
        await PA_STATES.create({
          NAM_STATE: "Ocotepeque",
          DES_STATE: "Ocotepeque",
          USR_ADD: "admin",
          COD_COUNTRY: 1,
        }),
        await PA_STATES.create({
          NAM_STATE: "Olancho",
          DES_STATE: "Olancho",
          USR_ADD: "admin",
          COD_COUNTRY: 1,
        }),
        await PA_STATES.create({
          NAM_STATE: "Santa Barbara",
          DES_STATE: "Santa Barbara",
          USR_ADD: "admin",
          COD_COUNTRY: 1,
        }),
        await PA_STATES.create({
          NAM_STATE: "Valle",
          DES_STATE: "Valle",
          USR_ADD: "admin",
          COD_COUNTRY: 1,
        }),
        await PA_STATES.create({
          NAM_STATE: "Yoro",
          DES_STATE: "Yoro",
          USR_ADD: "admin",
          COD_COUNTRY: 1,
        }),
        await PA_STATES.create({
          NAM_STATE: " Islas de la Bahia",
          DES_STATE: "Islas de la Bahía",
          USR_ADD: "admin",
          COD_COUNTRY: 1,
        }),
        await PA_STATES.create({
          NAM_STATE: "Ahuachapan",
          DES_STATE: "Ahuachapán",
          USR_ADD: "admin",
          COD_COUNTRY: 2,
        }),
        await PA_STATES.create({
          NAM_STATE: "Cabanas",
          DES_STATE: "Cabañas",
          USR_ADD: "admin",
          COD_COUNTRY: 2,
        }),
        await PA_STATES.create({
          NAM_STATE: "Chalatenango",
          DES_STATE: "Chalatenango",
          USR_ADD: "admin",
          COD_COUNTRY: 2,
        }),
        await PA_STATES.create({
          NAM_STATE: "Cuscatlan",
          DES_STATE: "Cuscatlán",
          USR_ADD: "admin",
          COD_COUNTRY: 2,
        }),
        await PA_STATES.create({
          NAM_STATE: "La Libertad",
          DES_STATE: "La Libertad",
          USR_ADD: "admin",
          COD_COUNTRY: 2,
        }),
        await PA_STATES.create({
          NAM_STATE: "La Paz",
          DES_STATE: "La Paz",
          USR_ADD: "admin",
          COD_COUNTRY: 2,
        }),
        await PA_STATES.create({
          NAM_STATE: "La Union",
          DES_STATE: "La Unión",
          USR_ADD: "admin",
          COD_COUNTRY: 2,
        }),
        await PA_STATES.create({
          NAM_STATE: "Morazan",
          DES_STATE: "Morazán",
          USR_ADD: "admin",
          COD_COUNTRY: 2,
        }),
        await PA_STATES.create({
          NAM_STATE: "San Miguel",
          DES_STATE: "San Miguel",
          USR_ADD: "admin",
          COD_COUNTRY: 2,
        }),
        await PA_STATES.create({
          NAM_STATE: "San Salvador",
          DES_STATE: "San Salvador",
          USR_ADD: "admin",
          COD_COUNTRY: 2,
        }),
        await PA_STATES.create({
          NAM_STATE: "San Vicente",
          DES_STATE: "San Vicente",
          USR_ADD: "admin",
          COD_COUNTRY: 2,
        }),
        await PA_STATES.create({
          NAM_STATE: "Santa Ana",
          DES_STATE: "Santa Ana",
          USR_ADD: "admin",
          COD_COUNTRY: 2,
        }),
        await PA_STATES.create({
          NAM_STATE: "Sonsonate",
          DES_STATE: "Sonsonate",
          USR_ADD: "admin",
          COD_COUNTRY: 2,
        }),
        await PA_STATES.create({
          NAM_STATE: "Usulutan",
          DES_STATE: "Usulután",
          USR_ADD: "admin",
          COD_COUNTRY: 2,
        }),
      ]);
    } catch (error) {
      console.log(error);
    }
  }
};
export const CreateCities = async () => {
  const count = await PA_CITIES.count();
  if (count > 0) {
    return;
  } else {
    try {
      await Promise.all([
        await PA_CITIES.create({
          NAM_CITY: "La Ceiba",
          COD_STATE: 1,
          ZIP_CODE: 504,
          POS_CODE: 31101,
          POPULATION: 449882,
          CURRENCY: "LPS",
          TIMEZONE: "-6",
          DES_CITY: "8 Municipios",
          USR_ADD: "admin",
        }),
        await PA_CITIES.create({
          NAM_CITY: "Trujillo",
          COD_STATE: 2,
          ZIP_CODE: 504,
          POS_CODE: 32101,
          POPULATION: 319786,
          CURRENCY: "LPS",
          TIMEZONE: "-6",
          DES_CITY: "Tiene 10 Municipios",
          USR_ADD: "admin",
        }),
        await PA_CITIES.create({
          NAM_CITY: "Comayagua",
          COD_STATE: 3,
          ZIP_CODE: 504,
          POS_CODE: 1210,
          POPULATION: 38272,
          CURRENCY: "LPS ",
          TIMEZONE: "-6",
          DES_CITY: "Tiene 21 Municipios ",
          USR_ADD: "admin",
        }),

        await PA_CITIES.create({
          NAM_CITY: "Santa Rosa de Copan",
          COD_STATE: 4,
          ZIP_CODE: 504,
          POS_CODE: 41101,
          POPULATION: 382722,
          CURRENCY: "LPS",
          TIMEZONE: "-6",
          DES_CITY: "Tiene 23 Municipios",
          USR_ADD: "admin",
        }),
        await PA_CITIES.create({
          NAM_CITY: "San Pedro Sula",
          COD_STATE: 5,
          ZIP_CODE: 504,
          POS_CODE: 21101,
          POPULATION: 1621762,
          CURRENCY: "LPS",
          TIMEZONE: "-6",
          DES_CITY: "Tiene 12 Municipios",
          USR_ADD: "admin",
        }),
        await PA_CITIES.create({
          NAM_CITY: "Choluteca",
          COD_STATE: 6,
          ZIP_CODE: 504,
          POS_CODE: 51101,
          POPULATION: 447854,
          CURRENCY: "LPS",
          TIMEZONE: "-6",
          DES_CITY: "Tiene 16 municipios",
          USR_ADD: "admin",
        }),
        await PA_CITIES.create({
          NAM_CITY: "Yuscaran",
          COD_STATE: 7,
          ZIP_CODE: 504,
          POS_CODE: 13101,
          POPULATION: 458472,
          CURRENCY: "LPS",
          TIMEZONE: "-6",
          DES_CITY: "Tiene 19 Municipios",
          USR_ADD: "admin",
        }),
        await PA_CITIES.create({
          NAM_CITY: "Tegucigalpa",
          COD_STATE: 8,
          ZIP_CODE: 504,
          POS_CODE: 11101,
          POPULATION: 1553379,
          CURRENCY: "LPS",
          TIMEZONE: "-6",
          DES_CITY: "Tiene 28 Municipios",
          USR_ADD: "admin",
        }),
        await PA_CITIES.create({
          NAM_CITY: "Puerto Lempira",
          COD_STATE: 9,
          ZIP_CODE: 504,
          POS_CODE: 33101,
          POPULATION: 94450,
          CURRENCY: "LPS",
          TIMEZONE: "-6",
          DES_CITY: "Tiene 6 Municipios",
          USR_ADD: "admin",
        }),
        await PA_CITIES.create({
          NAM_CITY: "La Esperanza",
          COD_STATE: 10,
          ZIP_CODE: 504,
          POS_CODE: 14101,
          POPULATION: 241568,
          CURRENCY: "LPS",
          TIMEZONE: "-6",
          DES_CITY: "Tiene 17 Municipios",
          USR_ADD: "admin",
        }),
        await PA_CITIES.create({
          NAM_CITY: "La Paz",
          COD_STATE: 11,
          ZIP_CODE: 504,
          POS_CODE: 15101,
          POPULATION: 206065,
          CURRENCY: "LPS",
          TIMEZONE: "-6",
          DES_CITY: "Tiene 19 Municipios",
          USR_ADD: "admin",
        }),
        await PA_CITIES.create({
          NAM_CITY: "Gracias",
          COD_STATE: 12,
          ZIP_CODE: 504,
          POS_CODE: 42101,
          POPULATION: 333125,
          CURRENCY: "LPS",
          TIMEZONE: "-6",
          DES_CITY: "Tiene 28 Municipios",
          USR_ADD: "admin",
        }),
        await PA_CITIES.create({
          NAM_CITY: "Nueva Ocotepeque",
          COD_STATE: 13,
          ZIP_CODE: 504,
          POS_CODE: 43101,
          POPULATION: 151516,
          CURRENCY: "LPS",
          TIMEZONE: "-6",
          DES_CITY: "Tiene 16 Municipios",
          USR_ADD: "admin",
        }),
        await PA_CITIES.create({
          NAM_CITY: "Juticalpa",
          COD_STATE: 14,
          ZIP_CODE: 504,
          POS_CODE: 16101,
          POPULATION: 537306,
          CURRENCY: "LPS",
          TIMEZONE: "-6",
          DES_CITY: "Tiene 23 Municipios",
          USR_ADD: "admin",
        }),
        await PA_CITIES.create({
          NAM_CITY: "SantaBarbara",
          COD_STATE: 15,
          ZIP_CODE: 504,
          POS_CODE: 22101,
          POPULATION: 434896,
          CURRENCY: "LPS",
          TIMEZONE: "-6",
          DES_CITY: "Tiene 23 Municipios",
          USR_ADD: "admin",
        }),
        await PA_CITIES.create({
          NAM_CITY: "Nacaome",
          COD_STATE: 16,
          ZIP_CODE: 504,
          POS_CODE: 52101,
          POPULATION: 185227,
          CURRENCY: "LPS",
          TIMEZONE: "-6",
          DES_CITY: "Tiene 9 Municipios",
          USR_ADD: "admin",
        }),
        await PA_CITIES.create({
          NAM_CITY: "Yoro",
          COD_STATE: 17,
          ZIP_CODE: 504,
          POS_CODE: 53101,
          POPULATION: 613473,
          CURRENCY: "LPS",
          TIMEZONE: "-6",
          DES_CITY: "Tiene 11 Municipios",
          USR_ADD: "admin",
        }),
        await PA_CITIES.create({
          NAM_CITY: "Roatan",
          COD_STATE: 18,
          ZIP_CODE: 504,
          POS_CODE: 34101,
          POPULATION: 65932,
          CURRENCY: "LPS",
          TIMEZONE: "-6",
          DES_CITY: "Tiene 4 Municipios",
          USR_ADD: "admin",
        }),
        await PA_CITIES.create({
          NAM_CITY: "Ahuachapan",
          COD_STATE: 19,
          ZIP_CODE: 503,
          POS_CODE: 2101,
          POPULATION: 319503,
          CURRENCY: "$",
          TIMEZONE: "UTC-06:00",
          DES_CITY: "Ahuachapán",
          USR_ADD: "admin",
        }),
        await PA_CITIES.create({
          NAM_CITY: "Sensuntepeque",
          COD_STATE: 20,
          ZIP_CODE: 503,
          POS_CODE: 1201,
          POPULATION: 149326,
          CURRENCY: "$",
          TIMEZONE: "UTC-06:00",
          DES_CITY: "Sensuntepeque",
          USR_ADD: "admin",
        }),
        await PA_CITIES.create({
          NAM_CITY: "Chalatenango",
          COD_STATE: 21,
          ZIP_CODE: 503,
          POS_CODE: 1301,
          POPULATION: 192788,
          CURRENCY: "$",
          TIMEZONE: "UTC-06:00",
          DES_CITY: "Chalatenango",
          USR_ADD: "admin",
        }),
        await PA_CITIES.create({
          NAM_CITY: "Cojutepeque",
          COD_STATE: 22,
          ZIP_CODE: 503,
          POS_CODE: 1401,
          POPULATION: 231480,
          CURRENCY: "$",
          TIMEZONE: "UTC-06:00",
          DES_CITY: "Cojutepeque",
          USR_ADD: "admin",
        }),
        await PA_CITIES.create({
          NAM_CITY: "Santa Tecla",
          COD_STATE: 23,
          ZIP_CODE: 503,
          POS_CODE: 1501,
          POPULATION: 660652,
          CURRENCY: "$",
          TIMEZONE: "UTC-06:00",
          DES_CITY: "Santa Tecla",
          USR_ADD: "admin",
        }),
        await PA_CITIES.create({
          NAM_CITY: "Zacatecoluca",
          COD_STATE: 24,
          ZIP_CODE: 503,
          POS_CODE: 1601,
          POPULATION: 308087,
          CURRENCY: "$",
          TIMEZONE: "UTC-06:00",
          DES_CITY: "Zacatecoluca",
          USR_ADD: "admin",
        }),
        await PA_CITIES.create({
          NAM_CITY: "La Union",
          COD_STATE: 25,
          ZIP_CODE: 503,
          POS_CODE: 3101,
          POPULATION: 238217,
          CURRENCY: "$",
          TIMEZONE: "UTC-06:00",
          DES_CITY: "La Unión",
          USR_ADD: "admin",
        }),
        await PA_CITIES.create({
          COD_STATE: 26,
          NAM_CITY: "San Francisco",
          ZIP_CODE: 503,
          POPULATION: 174426,
          CURRENCY: "$",
          TIMEZONE: "UTC-06:00",
          DES_CITY: "San Francisco",
          USR_ADD: "admin",
        }),
        await PA_CITIES.create({
          NAM_CITY: "San Miguel",
          COD_STATE: 27,
          ZIP_CODE: 503,
          POS_CODE: 3301,
          POPULATION: 434003,
          CURRENCY: "$",
          TIMEZONE: "UTC-06:00",
          DES_CITY: "San Miguel",
          USR_ADD: "admin",
        }),
        await PA_CITIES.create({
          NAM_CITY: "San Salvador",
          COD_STATE: 28,
          ZIP_CODE: 503,
          POS_CODE: 1101,
          POPULATION: 1567156,
          CURRENCY: "$",
          TIMEZONE: "UTC-06:00",
          DES_CITY: "San Salvador",
          USR_ADD: "admin",
        }),
        await PA_CITIES.create({
          NAM_CITY: "San Vicente",
          COD_STATE: 29,
          ZIP_CODE: 503,
          POS_CODE: 1701,
          POPULATION: 161645,
          CURRENCY: "$",
          TIMEZONE: "UTC-06:00",
          DES_CITY: "San Vicente",
          USR_ADD: "admin",
        }),
        await PA_CITIES.create({
          NAM_CITY: "Santa Ana",
          COD_STATE: 30,
          ZIP_CODE: 503,
          POS_CODE: 2201,
          POPULATION: 523655,
          CURRENCY: "$",
          TIMEZONE: "UTC-06:00",
          DES_CITY: "Santa Ana",
          USR_ADD: "admin",
        }),
        await PA_CITIES.create({
          NAM_CITY: "Sonsonate",
          COD_STATE: 31,
          ZIP_CODE: 503,
          POS_CODE: 2301,
          POPULATION: 438960,
          CURRENCY: "$",
          TIMEZONE: "UTC-06:00",
          DES_CITY: "Sonsonate",
          USR_ADD: "admin",
        }),
        await PA_CITIES.create({
          NAM_CITY: "Usulutan",
          COD_STATE: 32,
          ZIP_CODE: 302,
          POS_CODE: 3401,
          POPULATION: 344235,
          CURRENCY: "$",
          TIMEZONE: "UTC-06:00",
          DES_CITY: "Usulután",
          USR_ADD: "admin",
        }),
      ]);
    } catch (error) {
      console.log(error);
    }
  }
};

export const CreateSeguri = async () => {
  const count = await SE_SEGURIDAD.count();
  if (count > 0) {
    return;
  } else {
    try {
      await Promise.all([
        SE_SEGURIDAD.create({
          NAM_SEGURIDAD: "tiempo de token",
          DATO_SEGURIDAD: "7200",
          DES_SEGURIDAD: "Tiempo de reset token",
        }),
        SE_SEGURIDAD.create({
          NAM_SEGURIDAD: "tiempo de reset password token",
          DATO_SEGURIDAD: "7200",
          DES_SEGURIDAD: "Tiempo de reset token para password",
        }),
      ]);
    } catch (erro) {
      console.log(erro);
    }
  }
};
export const CreateUser = async () => {
  const count = await USERS.count();
  if (count > 0) {
    return;
  } else {
    try {
      await Promise.all([ 
        PA_POEPLE.create({
          ID:"08011999813042",
          TIP_DOCUMENT:"PASSPORT",
          FRISTNAME:"Alejandro",
          MIDDLENAME:"Luis",
          LASTNAME:"Gonzalez",
          AGE:20,
          DAT_BIRTH:"1999-01-01",
          TIP_PERSON:"N",
          USR_ADD:"admin",
        }),
        USERS.create({
          COD_PEOPLE: 1,
          PROFILE_PHOTO_PATH: null,
          EMAIL:"lairias@unah.hn",
          EMAIL_VERIFIED: true,
          PAS_USER: "$2b$10$OMXC9dSjkSaNyF4PjQzPJObvw/SWnKlXCb7s2hlBzHhzTkk.gQzgm",
          IND_USR: true,
          IND_INS:true,
          USR_ADD:"admin"
         
        }),
        MODEL_HAS_PERMISOS.create({
          COD_TYPEUSERS : 1,
          COD_USER: 1,
           })
      ]);
    } catch (erro) {
      console.log(erro);
    }
  }
};
