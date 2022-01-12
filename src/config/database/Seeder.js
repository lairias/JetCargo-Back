import { PA_CITIES } from "../../models/Pa_cities";
import { PA_COUNTRIES } from "../../models/Pa_countries";
import { PA_STATES } from "../../models/Pa_states";
import { PA_TypeUsers } from "../../models/Pa_typeUsers";
import { MODEL_TYPEUSER_HAS_PERMISOS } from "../../models/relations/typeusers_has_permisos";
import { SE_PERMISOS } from "../../models/security/SE_permisos";

export const CreateRole = async () => {
  const count = await PA_TypeUsers.count()
  if(count > 0 ){
return ;
  } else{
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
       await Promise.all([
         await MODEL_TYPEUSER_HAS_PERMISOS.create({
           COD_PERMISO: 1,
           COD_TYPEUSERS: 1,
         }),
         await MODEL_TYPEUSER_HAS_PERMISOS.create({
           COD_PERMISO: 2,
           COD_TYPEUSERS: 1,
         }),
         await MODEL_TYPEUSER_HAS_PERMISOS.create({
           COD_PERMISO: 3,
           COD_TYPEUSERS: 1,
         }),
         await MODEL_TYPEUSER_HAS_PERMISOS.create({
           COD_PERMISO: 4,
           COD_TYPEUSERS: 1,
         }),
         await MODEL_TYPEUSER_HAS_PERMISOS.create({
           COD_PERMISO: 5,
           COD_TYPEUSERS: 2,
         }),
         await MODEL_TYPEUSER_HAS_PERMISOS.create({
           COD_PERMISO: 6,
           COD_TYPEUSERS: 2,
         }),
         await MODEL_TYPEUSER_HAS_PERMISOS.create({
           COD_PERMISO: 7,
           COD_TYPEUSERS: 2,
         }),
         await MODEL_TYPEUSER_HAS_PERMISOS.create({
           COD_PERMISO: 8,
           COD_TYPEUSERS: 2,
         }),
         await MODEL_TYPEUSER_HAS_PERMISOS.create({
           COD_PERMISO: 9,
           COD_TYPEUSERS: 3,
         }),
         await MODEL_TYPEUSER_HAS_PERMISOS.create({
           COD_PERMISO: 10,
           COD_TYPEUSERS: 3,
         }),
         await MODEL_TYPEUSER_HAS_PERMISOS.create({
           COD_PERMISO: 11,
           COD_TYPEUSERS: 3,
         }),
         await MODEL_TYPEUSER_HAS_PERMISOS.create({
           COD_PERMISO: 12,
           COD_TYPEUSERS: 3,
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
 await  Promise.all([
 await SE_PERMISOS.create({
        NAM_PERMISOS: "admin.crear",
        USR_ADD: "admin",
      }),
      await SE_PERMISOS.create({
        NAM_PERMISOS: "admin.view",
        USR_ADD: "admin",
      }),
      await SE_PERMISOS.create({
        NAM_PERMISOS: "admin.update",
        USR_ADD: "admin",
      }),
      await SE_PERMISOS.create({
        NAM_PERMISOS: "admin.delete",
        USR_ADD: "admin",
      }),

      await SE_PERMISOS.create({
        NAM_PERMISOS: "empleado.crear",
        USR_ADD: "admin",
      }),
      await SE_PERMISOS.create({
        NAM_PERMISOS: "empleado.view",
        USR_ADD: "admin",
      }),
      await SE_PERMISOS.create({
        NAM_PERMISOS: "empleado.update",
        USR_ADD: "admin",
      }),
      await SE_PERMISOS.create({
        NAM_PERMISOS: "empleado.delete",
        USR_ADD: "admin",
      }),

      await SE_PERMISOS.create({
        NAM_PERMISOS: "cliente.crear",
        USR_ADD: "admin",
      }),
      await SE_PERMISOS.create({
        NAM_PERMISOS: "cliente.view",
        USR_ADD: "admin",
      }),
      await SE_PERMISOS.create({
        NAM_PERMISOS: "cliente.update",
        USR_ADD: "admin",
      }),
      await SE_PERMISOS.create({
        NAM_PERMISOS: "cliente.delete",
        USR_ADD: "admin",
      }),
  ])
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
        USR_ADD: "admin",
      }),
      await PA_COUNTRIES.create({
        NAM_COUNTRY: "El Salvador",
        DES_COUNTRY: "Pais Centroamericano",
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
        ZIP_CODE: 504,
        POS_CODE: 31101,
        POPULATION: 449882,
        CURRENCY: "LPS",
        TIMEZONE: "-6",
        DES_CITY: "8 Municipios",
        USR_ADD: "admin",
        PA_STATES: 1,
      }),
      await PA_CITIES.create({
        NAM_CITY: "Trujillo",
        ZIP_CODE: 504,
        POS_CODE: 32101,
        POPULATION: 319786,
        CURRENCY: "LPS",
        TIMEZONE: "-6",
        DES_CITY: "Tiene 10 Municipios",
        USR_ADD: "admin",
        PA_STATES: 2,
      }),
      await PA_CITIES.create({
        NAM_CITY: "Comayagua",
        ZIP_CODE: 504,
        POS_CODE: 1210,
        POPULATION: 38272,
        CURRENCY: "LPS ",
        TIMEZONE: "-6",
        DES_CITY: "Tiene 21 Municipios ",
        USR_ADD: "admin",
        PA_STATES: 3,
      }),

      await PA_CITIES.create({
        NAM_CITY: "Santa Rosa de Copan",
        ZIP_CODE: 504,
        POS_CODE: 41101,
        POPULATION: 382722,
        CURRENCY: "LPS",
        TIMEZONE: "-6",
        DES_CITY: "Tiene 23 Municipios",
        USR_ADD: "admin",
        PA_STATES: 4,
      }),
      await PA_CITIES.create({
        NAM_CITY: "San Pedro Sula",
        ZIP_CODE: 504,
        POS_CODE: 21101,
        POPULATION: 1621762,
        CURRENCY: "LPS",
        TIMEZONE: "-6",
        DES_CITY: "Tiene 12 Municipios",
        USR_ADD: "admin",
        PA_STATES: 5,
      }),
      await PA_CITIES.create({
        NAM_CITY: "Choluteca",
        ZIP_CODE: 504,
        POS_CODE: 51101,
        POPULATION: 447854,
        CURRENCY: "LPS",
        TIMEZONE: "-6",
        DES_CITY: "Tiene 16 municipios",
        USR_ADD: "admin",
        PA_STATES: 6,
      }),
      await PA_CITIES.create({
        NAM_CITY: "Yuscaran",
        ZIP_CODE: 504,
        POS_CODE: 13101,
        POPULATION: 458472,
        CURRENCY: "LPS",
        TIMEZONE: "-6",
        DES_CITY: "Tiene 19 Municipios",
        USR_ADD: "admin",
        PA_STATES: 7,
      }),
      await PA_CITIES.create({
        NAM_CITY: "Tegucigalpa",
        ZIP_CODE: 504,
        POS_CODE: 11101,
        POPULATION: 1553379,
        CURRENCY: "LPS",
        TIMEZONE: "-6",
        DES_CITY: "Tiene 28 Municipios",
        USR_ADD: "admin",
        PA_STATES: 8,
      }),
      await PA_CITIES.create({
        NAM_CITY: "Puerto Lempira",
        ZIP_CODE: 504,
        POS_CODE: 33101,
        POPULATION: 94450,
        CURRENCY: "LPS",
        TIMEZONE: "-6",
        DES_CITY: "Tiene 6 Municipios",
        USR_ADD: "admin",
        PA_STATES: 9,
      }),
      await PA_CITIES.create({
        NAM_CITY: "La Esperanza",
        ZIP_CODE: 504,
        POS_CODE: 14101,
        POPULATION: 241568,
        CURRENCY: "LPS",
        TIMEZONE: "-6",
        DES_CITY: "Tiene 17 Municipios",
        USR_ADD: "admin",
        PA_STATES: 10,
      }),
      await PA_CITIES.create({
        NAM_CITY: "La Paz",
        ZIP_CODE: 504,
        POS_CODE: 15101,
        POPULATION: 206065,
        CURRENCY: "LPS",
        TIMEZONE: "-6",
        DES_CITY: "Tiene 19 Municipios",
        USR_ADD: "admin",
        PA_STATES: 11,
      }),
      await PA_CITIES.create({
        NAM_CITY: "Gracias",
        ZIP_CODE: 504,
        POS_CODE: 42101,
        POPULATION: 333125,
        CURRENCY: "LPS",
        TIMEZONE: "-6",
        DES_CITY: "Tiene 28 Municipios",
        USR_ADD: "admin",
        PA_STATES: 12,
      }),
      await PA_CITIES.create({
        NAM_CITY: "Nueva Ocotepeque",
        ZIP_CODE: 504,
        POS_CODE: 43101,
        POPULATION: 151516,
        CURRENCY: "LPS",
        TIMEZONE: "-6",
        DES_CITY: "Tiene 16 Municipios",
        USR_ADD: "admin",
        PA_STATES: 13,
      }),
      await PA_CITIES.create({
        NAM_CITY: "Juticalpa",
        ZIP_CODE: 504,
        POS_CODE: 16101,
        POPULATION: 537306,
        CURRENCY: "LPS",
        TIMEZONE: "-6",
        DES_CITY: "Tiene 23 Municipios",
        USR_ADD: "admin",
        PA_STATES: 14,
      }),
      await PA_CITIES.create({
        NAM_CITY: "SantaBarbara",
        ZIP_CODE: 504,
        POS_CODE: 22101,
        POPULATION: 434896,
        CURRENCY: "LPS",
        TIMEZONE: "-6",
        DES_CITY: "Tiene 23 Municipios",
        USR_ADD: "admin",
        PA_STATES: 15,
      }),
      await PA_CITIES.create({
        NAM_CITY: "Nacaome",
        ZIP_CODE: 504,
        POS_CODE: 52101,
        POPULATION: 185227,
        CURRENCY: "LPS",
        TIMEZONE: "-6",
        DES_CITY: "Tiene 9 Municipios",
        USR_ADD: "admin",
        PA_STATES: 16,
      }),
      await PA_CITIES.create({
        NAM_CITY: "Yoro",
        ZIP_CODE: 504,
        POS_CODE: 53101,
        POPULATION: 613473,
        CURRENCY: "LPS",
        TIMEZONE: "-6",
        DES_CITY: "Tiene 11 Municipios",
        USR_ADD: "admin",
        PA_STATES: 17,
      }),
      await PA_CITIES.create({
        NAM_CITY: "Roatan",
        ZIP_CODE: 504,
        POS_CODE: 34101,
        POPULATION: 65932,
        CURRENCY: "LPS",
        TIMEZONE: "-6",
        DES_CITY: "Tiene 4 Municipios",
        USR_ADD: "admin",
        PA_STATES: 18,
      }),
      await PA_CITIES.create({
        NAM_CITY: "Ahuachapan",
        ZIP_CODE: 503,
        POS_CODE: 2101,
        POPULATION: 319503,
        CURRENCY: "$",
        TIMEZONE: "UTC-06:00",
        DES_CITY: "Ahuachapán",
        USR_ADD: "admin",
        PA_STATES: 19,
      }),
      await PA_CITIES.create({
        NAM_CITY: "Sensuntepeque",
        ZIP_CODE: 503,
        POS_CODE: 1201,
        POPULATION: 149326,
        CURRENCY: "$",
        TIMEZONE: "UTC-06:00",
        DES_CITY: "Sensuntepeque",
        USR_ADD: "admin",
        PA_STATES: 20,
      }),
      await PA_CITIES.create({
        NAM_CITY: "Chalatenango",
        ZIP_CODE: 503,
        POS_CODE: 1301,
        POPULATION: 192788,
        CURRENCY: "$",
        TIMEZONE: "UTC-06:00",
        DES_CITY: "Chalatenango",
        USR_ADD: "admin",
        PA_STATES: 21,
      }),
      await PA_CITIES.create({
        NAM_CITY: "Cojutepeque",
        ZIP_CODE: 503,
        POS_CODE: 1401,
        POPULATION: 231480,
        CURRENCY: "$",
        TIMEZONE: "UTC-06:00",
        DES_CITY: "Cojutepeque",
        USR_ADD: "admin",
        PA_STATES: 22,
      }),
      await PA_CITIES.create({
        NAM_CITY: "Santa Tecla",
        ZIP_CODE: 503,
        POS_CODE: 1501,
        POPULATION: 660652,
        CURRENCY: "$",
        TIMEZONE: "UTC-06:00",
        DES_CITY: "Santa Tecla",
        USR_ADD: "admin",
        PA_STATES: 23,
      }),
      await PA_CITIES.create({
        NAM_CITY: "Zacatecoluca",
        ZIP_CODE: 503,
        POS_CODE: 1601,
        POPULATION: 308087,
        CURRENCY: "$",
        TIMEZONE: "UTC-06:00",
        DES_CITY: "Zacatecoluca",
        USR_ADD: "admin",
        PA_STATES: 24,
      }),
      await PA_CITIES.create({
        NAM_CITY: "La Union",
        ZIP_CODE: 503,
        POS_CODE: 3101,
        POPULATION: 238217,
        CURRENCY: "$",
        TIMEZONE: "UTC-06:00",
        DES_CITY: "La Unión",
        USR_ADD: "admin",
        PA_STATES: 25,
      }),
      await PA_CITIES.create({
        NAM_CITY: "San Francisco",
        ZIP_CODE: 503,
        POPULATION: 174426,
        CURRENCY: "$",
        TIMEZONE: "UTC-06:00",
        DES_CITY: "San Francisco",
        USR_ADD: "admin",
        PA_STATES: 26,
      }),
      await PA_CITIES.create({
        NAM_CITY: "San Miguel",
        ZIP_CODE: 503,
        POS_CODE: 3301,
        POPULATION: 434003,
        CURRENCY: "$",
        TIMEZONE: "UTC-06:00",
        DES_CITY: "San Miguel",
        USR_ADD: "admin",
        PA_STATES: 27,
      }),
      await PA_CITIES.create({
        NAM_CITY: "San Salvador",
        ZIP_CODE: 503,
        POS_CODE: 1101,
        POPULATION: 1567156,
        CURRENCY: "$",
        TIMEZONE: "UTC-06:00",
        DES_CITY: "San Salvador",
        USR_ADD: "admin",
        PA_STATES: 28,
      }),
      await PA_CITIES.create({
        NAM_CITY: "San Vicente",
        ZIP_CODE: 503,
        POS_CODE: 1701,
        POPULATION: 161645,
        CURRENCY: "$",
        TIMEZONE: "UTC-06:00",
        DES_CITY: "San Vicente",
        USR_ADD: "admin",
        PA_STATES: 29,
      }),
      await PA_CITIES.create({
        NAM_CITY: "Santa Ana",
        ZIP_CODE: 503,
        POS_CODE: 2201,
        POPULATION: 523655,
        CURRENCY: "$",
        TIMEZONE: "UTC-06:00",
        DES_CITY: "Santa Ana",
        USR_ADD: "admin",
        PA_STATES: 30,
      }),
      await PA_CITIES.create({
        NAM_CITY: "Sonsonate",
        ZIP_CODE: 503,
        POS_CODE: 2301,
        POPULATION: 438960,
        CURRENCY: "$",
        TIMEZONE: "UTC-06:00",
        DES_CITY: "Sonsonate",
        USR_ADD: "admin",
        PA_STATES: 31,
      }),
      await PA_CITIES.create({
        NAM_CITY: "Usulutan",
        ZIP_CODE: 302,
        POS_CODE: 3401,
        POPULATION: 344235,
        CURRENCY: "$",
        TIMEZONE: "UTC-06:00",
        DES_CITY: "Usulután",
        USR_ADD: "admin",
        PA_STATES: 32,
      }),
    ]);
  } catch (error) {
    console.log(error);
  }
    }
};
