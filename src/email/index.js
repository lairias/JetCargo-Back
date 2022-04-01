import nodemailer from "nodemailer";
import "dotenv/config";
import { DatosInicioCoreo } from "../utils/Index";

// export const transport = nodemailer.createTransport({
//   host: "smtp.mailtrap.io",
//   port: 2525,
//   auth: {
//     user: "d6e18533cfdad8",
//     pass: "d5ac5f34a0bc2e"
//   }

// });

export const transport = nodemailer.createTransport({
  host: "mail.jetcargo.vip",
  port: 465,
  secure: true,
  pool: true,
  auth: {
    user: "info@jetcargo.vip",
    pass: "Jetcargo##8976",
  },
});

const Fecha = new Date().getFullYear();
export const configTransportVery = (
  nombre,
  apellido,
  email,
  token,
  host,
  id
) => {
  return {
    from: `<${process.env.MAIL_FROM_ADDRESS}>`,
    to: `<${email.replace("%40", "@")}>`,
    subject: "Confirmar correo electrónico",
    html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml"><head><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta name="color-scheme" content="light"><meta name="supported-color-schemes" content="light"><style>@media  only screen and (max-width: 600px) {.inner-body {width: 100% !important;}.footer{width: 100% !important;}}@media  only screen and (max-width: 500px) {.button {width: 100% !important;}}</style></head><body style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; -webkit-text-size-adjust: none; background-color: #ffffff; color: #718096; height: 100%; line-height: 1.4; margin: 0; padding: 0; width: 100% !important;"><table class="wrapper" width="100%" cellpadding="0" cellspacing="0" role="presentation" style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; -premailer-cellpadding: 0; -premailer-cellspacing: 0; -premailer-width: 100%; background-color: #edf2f7; margin: 0; padding: 0; width: 100%;"><tr><td align="center" style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative;"><table class="content" width="100%" cellpadding="0" cellspacing="0" role="presentation" style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; -premailer-cellpadding: 0; -premailer-cellspacing: 0; -premailer-width: 100%; margin: 0; padding: 0; width: 100%;"><tr><td class="header" style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; padding: 25px 0; text-align: center;"><a href="http://${host}" style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; color: #3d4852; font-size: 19px; font-weight: bold; text-decoration: none; display: inline-block;"><img src="https://jetcargo.vip/wp-content/uploads/2021/11/cropped-JetCargo-png-file-e1637610869136.png"></a></td></tr><tr><td class="body" width="100%" cellpadding="0" cellspacing="0" style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; -premailer-cellpadding: 0; -premailer-cellspacing: 0; -premailer-width: 100%; background-color: #edf2f7; border-bottom: 1px solid #edf2f7; border-top: 1px solid #edf2f7; margin: 0; padding: 0; width: 100%;"><table class="inner-body" align="center" width="570" cellpadding="0" cellspacing="0" role="presentation" style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; -premailer-cellpadding: 0; -premailer-cellspacing: 0; -premailer-width: 570px; background-color: #ffffff; border-color: #e8e5ef; border-radius: 2px; border-width: 1px; box-shadow: 0 2px 0 rgba(0, 0, 150, 0.025), 2px 4px 0 rgba(0, 0, 150, 0.015); margin: 0 auto; padding: 0; width: 570px;"><tr><td class="content-cell" style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; max-width: 100vw; padding: 32px;"><h1 style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; color: #3d4852; font-size: 18px; font-weight: bold; margin-top: 0; text-align: left;">${nombre} ${apellido} </h1><p style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; font-size: 16px; line-height: 1.5em; margin-top: 0; text-align: left;">Por favor pulsa el siguiente botón para confirmar tu correo electrónico.</p><table class="action" align="center" width="100%" cellpadding="0" cellspacing="0" role="presentation" style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; -premailer-cellpadding: 0; -premailer-cellspacing: 0; -premailer-width: 100%; margin: 30px auto; padding: 0; text-align: center; width: 100%;"><tr><td align="center" style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative;"><table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative;"><tr><td align="center" style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative;"><tr><td style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative;"><a href="${host}/api/email/very/${id}/${email}/${token}/" class="button button-primary" target="_blank" rel="noopener" style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; -webkit-text-size-adjust: none; border-radius: 4px; color: #fff; display: inline-block; overflow: hidden; text-decoration: none; background-color: #2d3748; border-bottom: 8px solid #2d3748; border-left: 18px solid #2d3748; border-right: 18px solid #2d3748; border-top: 8px solid #2d3748;">Confirmar correo electrónico</a></td></tr></table></td></tr></table></td></tr></table><p style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; font-size: 16px; line-height: 1.5em; margin-top: 0; text-align: left;">Si no has creado ninguna cuenta, puedes ignorar o eliminar este e-mail.</p><p style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; font-size: 16px; line-height: 1.5em; margin-top: 0; text-align: left;">Saludos,<br> ${process.env.NAME}  </p><table class="subcopy" width="100%" cellpadding="0" cellspacing="0" role="presentation" style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; border-top: 1px solid #e8e5ef; margin-top: 25px; padding-top: 25px;"><tr><td style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative;"><p style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; line-height: 1.5em; margin-top: 0; text-align: left; font-size: 14px;">Si tienes problemas haciendo click en el botón "Confirmar correo electrónico", copia y pega el siguiente enlace en tu navegador: <span class="break-all" style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; word-break: break-all;"><a href="${host}/api/email/very/${id}/${email}/${token}/" style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; color: #3869d4;">${host}/api/email/very/${id}/${email}/${token}/</a></span></p></td></tr></table></td></tr></table></td></tr><tr><td style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative;"><table class="footer" align="center" width="570" cellpadding="0" cellspacing="0" role="presentation" style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; -premailer-cellpadding: 0; -premailer-cellspacing: 0; -premailer-width: 570px; margin: 0 auto; padding: 0; text-align: center; width: 570px;"><tr><td class="content-cell" align="center" style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; max-width: 100vw; padding: 32px;"><p style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; line-height: 1.5em; margin-top: 0; color: #b0adc5; font-size: 12px; text-align: center;">© ${Fecha} ${process.env.NAME}. Todos los derechos reservados.</p></td></tr></table></td></tr></table></td></tr></table></body></html>`,
  };
};

export const PagoPaypal = (
  nombre,
  apellido,
  email,
  token,
  host,
  time
) => {
  return {
    from: `<${process.env.MAIL_FROM_ADDRESS}>`,
    to: `<${email.replace("%40", "@")}>`,
    subject: "Pago Paypal",
    html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml"><head><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta name="color-scheme" content="light"><meta name="supported-color-schemes" content="light"><style>@media  only screen and (max-width: 600px) {.inner-body {width: 100% !important;}.footer{width: 100% !important;}}@media  only screen and (max-width: 500px) {.button {width: 100% !important;}}</style></head><body style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; -webkit-text-size-adjust: none; background-color: #ffffff; color: #718096; height: 100%; line-height: 1.4; margin: 0; padding: 0; width: 100% !important;">
    
    <div style="font-family:'Roboto',Sans-Serif;height:100%!important;width:100%!important;font-size:16px;text-align:center;margin:0 auto;padding:0" width="100%" bgcolor="#fafafa">
    <center style="background-color:#fafafa;width:100%">
        
        
        <div style="display:none;font-size:1px;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;font-family:'Roboto',Sans-Serif"></div>
        
        
        
        <div style="display:none;font-size:1px;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;font-family:'Roboto',Sans-Serif"></div>
        
        
        <div class="m_-585868136474212146email-container" style="max-width:600px;margin:0 auto">
            
            
            <table role="presentation" style="font-family:Roboto,Sans-Serif;color:white;border-radius:0px;text-align:center;border-spacing:0!important;border-collapse:collapse!important;table-layout:fixed!important;margin:0 auto" width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="#fafafa" align="center">
                
                
                
                
                
                
                
                
                
                <tbody>
                    
                    
                    
                    
                    
                    
                    <tr bgcolor="#fafafa">
                        <td style="background-color:#fafafa">
                            <table role="presentation" style="border-radius:0px 0px 10px 10px;border-spacing:0!important;border-collapse:collapse!important;table-layout:fixed!important;margin:0 auto;padding:0" width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="#00377d" align="center">
                                <tbody>
                                    <tr>
                                        <td>
                                            
                                            
                                            <table style="border-spacing:0!important;border-collapse:collapse!important;table-layout:fixed!important;margin:0 auto" width="80%" cellspacing="0" cellpadding="0" border="0">
                                                <tbody>
                                                    <tr>
                                                        <td aria-hidden="true" style="height:36px" width="30%" height="36px"></td>
                                                        <td aria-hidden="true" style="height:36px" width="70%" height="36px"></td>
                                                    </tr>
                                                    <tr>
                                                        <td width="30%">
                                                            <table style="border-spacing:0!important;border-collapse:collapse!important;table-layout:fixed!important;margin:0 auto" width="90%" cellspacing="0" cellpadding="0" border="0" align="center">
                                                                <tbody>
                                                                    <tr>
                                                                        <td style="width:90%" align="left"><img src="https://ci5.googleusercontent.com/proxy/xDb4gTF7Crk73X8n5OgrNs0oWvwL9HAG4VL_dmyDQX5nbl6iPRSLI6pPPhKJbO_Nqug7llJTldns08tH2iHeAnizaEOWvjx5v3AEgfvzbs8-9s5i3kco6SReEg1f5w5Sm-8vIrS9rhAUZ3WsF8l4f1FGpJGOTAi2qoqTQr-mlkr87XpoP6lckougQFt8=s0-d-e1-ft#https://appboy-images.com/appboy/communication/assets/image_assets/images/5c82c684d5b6822b793536b2/original.png?1552074372" alt="Logo'Tigo" style="width:80px" class="CToWUd" width="80"></td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                        <td width="70%">
                                                            <table style="border-spacing:0!important;border-collapse:collapse!important;table-layout:fixed!important;margin:0 auto" width="100%" cellspacing="0" cellpadding="0" border="0" align="right">
                                                                <tbody>
                                                                    <tr>
                                                                        <td align="right">
                                                                            <p style="color:#ffffff;font-family:'Roboto',Sans-Serif;font-size:25px;letter-spacing:0;line-height:27px" align="right">
                                                              
                                                              ¡Hola <img data-emoji="👋" class="an1" alt="👋" aria-label="👋" src="https://fonts.gstatic.com/s/e/notoemoji/14.0/1f44b/32.png" loading="lazy">!
                                                              </p>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td aria-hidden="true" style="height:36px" width="30%" height="36px"></td>
                                                        <td aria-hidden="true" style="height:36px" width="70%" height="36px"></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            
                                            
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td aria-hidden="true" style="height:30px" height="30px"></td>
                    </tr>
                    <tr>
                        <td align="center">
                            <table style="text-align:center;border-spacing:0!important;border-collapse:collapse!important;table-layout:fixed!important;margin:0 auto" width="90%" cellspacing="0" cellpadding="0" border="0" align="center">
                                <tbody>
                                    <tr>
                                        <td style="padding:0">
                                            <p class="m_-585868136474212146p23-mobile" style="color:#00377d;font-family:Roboto,sans-serif;font-size:24px;font-weight:bold;text-transform:uppercase;margin:0 auto" align="center">mas para hacer mas<br></p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td aria-hidden="true" style="height:30px" height="30px"></td>
                    </tr>
                    <tr style="margin-bottom:0!important;padding-bottom:0!important">
                        <td style="margin-bottom:0!important;padding-bottom:0!important">
                            <table style="max-width:520px;border-radius:20px 20px 20px 20px;border-spacing:0!important;border-collapse:collapse!important;table-layout:fixed!important;margin:0 auto;padding:0" width="95%" cellspacing="0" cellpadding="0" border="0" bgcolor="#ffffff" align="center">
                                <tbody style="margin-bottom:0!important;padding-bottom:0!important">
                                    
                                    <tr>
                                        <td>
                                            <table style="border-radius:20px 20px 0px 0px;border-spacing:0!important;border-collapse:collapse!important;table-layout:fixed!important;margin:0 auto" cellspacing="0" cellpadding="0" border="0" align="center">
                                                <tbody>
                                                    
                                                    
                                                    
                                                    
                                                    <tr style="margin:0;padding:0">
                                                        <td style="margin:0;padding:0" align="center"><img alt="Mi Tigo App" src="https://ci3.googleusercontent.com/proxy/nMPUd-U3uSU8uTQ39P_TEbXAJK9sh_GjBrkv0xuIEmZ3WnJoqjkW_rrnmDXsIxKGK6IK8mn7Cj9wyKvOVklSG3sweKmcKB3EpkKBPI5AmDy33L8KFlCEp1Pnh3E8nomSHqRo19ihRODZvkBg-Y6asfXneBWmeASPsFy-vXYH6__NX2OWyG6RjSItf39o=s0-d-e1-ft#https://braze-images.com/appboy/communication/assets/image_assets/images/618049c2f5bb685d079e0854/original.jpeg?1635797441" style="min-width:180px;max-width:520px;text-align:center;width:100%;height:auto;border-radius:20px 20px 0px 0px;margin:0 auto;border:none" class="CToWUd a6T" tabindex="0"><div class="a6S" dir="ltr" style="opacity: 0.01; left: 621.5px; top: 481.9px;"><div id=":b7" class="T-I J-J5-Ji aQv T-I-ax7 L3 a5q" title="Descargar" role="button" tabindex="0" aria-label="Descargar el archivo adjunto " data-tooltip-class="a1V"><div class="akn"><div class="aSK J-J5-Ji aYr"></div></div></div></div></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td>
                                            <table style="border-right-width:1px;border-right-color:#ebebec;border-left-width:1px;border-left-color:#ebebec;border-spacing:0!important;border-collapse:collapse!important;table-layout:fixed!important;margin:0 auto;border-style:none solid" width="100%" cellspacing="0" cellpadding="0" border="0" align="center">
                                                <tbody>
                                                    
                                                    <tr>
                                                        <td aria-hidden="true" style="height:20px" height="20px"></td>
                                                    </tr>
                                                    <tr>
                                                        <td align="center">
                                                            <table style="text-align:center;border-spacing:0!important;border-collapse:collapse!important;table-layout:fixed!important;margin:0 auto" width="90%" cellspacing="0" cellpadding="0" border="0" align="center">
                                                                <tbody>
                                                                    <tr>
                                                                        <td style="padding:0">
                                                                            <p class="m_-585868136474212146p23-mobile" style="color:#00377d;font-family:Roboto,sans-serif;font-size:20px;margin:0 auto" align="center">Ahora puedes incrementar tu <b>plan residencial</b> desde tu Smartphone de forma fácil y segura con:
                                                                                <br></p>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td aria-hidden="true" style="height:20px" height="20px"></td>
                                                    </tr>
                                                    
                                                    <tr>
                                                        <td style="line-height:20px;padding:0" align="center">
                                                            <table width="50%">
                                                                <tbody>
                                                                    <tr>
                                                                        <td style="width:28%" align="center"><img src="https://ci4.googleusercontent.com/proxy/E7APbYb2nP27f6hg4DKZS_EdunhWhoHPMwh1vgdOVuw4TmNkoscUELdkFIeAS0gBzYlxZLZ0GBj_hshV-Jdp0aY-UQwbs05HYKxKjh8EIIz0uy_uDdD9KjHWYWqwSCRSotvajlcmhQcA2glJkmgsOGkqlsO-L0fZ3l77GKEDPkmUHe6IzZccQhTnLE3R=s0-d-e1-ft#https://appboy-images.com/appboy/communication/assets/image_assets/images/5cd08793a12f74335c3fe5ab/original.png?1557170067" alt="Mi Tigo" style="width:80px" class="CToWUd" width="80"></td>
                                                                        <td style="line-height:1.2em;padding:0 10px" align="left">
                                                                            <h2 style="color:#00377d;font-family:'Roboto',Sans-Serif;font-size:24px;letter-spacing:0;line-height:26px;font-weight:initial;padding-left:16px;margin:10px auto" align="left">Mi Tigo App<br>
</h2>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td aria-hidden="true" style="height:20px" height="20px"></td>
                                                    </tr>
                                                    
                                                    <tr>
                                                        <td>
                                                            <table style="border-spacing:0!important;border-collapse:collapse!important;table-layout:fixed!important;text-align:center;border-radius:50px;margin:0 auto" border="0" align="center">
                                                                <tbody>
                                                                    <tr>
                                                                        <td style="box-sizing:border-box;border-radius:50px" width="1%" align="center">
                                                                            
                                                                        </td>
                                                                        <td style="box-sizing:border-box;border-radius:50px" width="90%" align="center">
                                                                            <table style="border-spacing:0!important;border-collapse:collapse!important;table-layout:fixed!important;border-radius:50px;text-align:center;margin:0 auto" width="100%" cellspacing="0" cellpadding="0" border="0">
                                                                                <tbody>
                                                                                    
                                                                                    
                                                                                    <tr>
                                                                                        <td style="font-family:'Roboto',Sans-Serif">
                                                                                            <table style="text-align:center;border-spacing:0!important;border-collapse:collapse!important;table-layout:fixed!important;margin:0 auto" align="center">
                                                                                                <tbody>
                                                                                                    <tr align="center">
                                                                                                        <td>
                                                                                                            <table style="text-align:center;border-spacing:0!important;border-collapse:collapse!important;table-layout:fixed!important;margin:0 auto" cellspacing="0" cellpadding="10" align="center">
                                                                                                                <tbody>
                                                                                                                    <tr>
                                                                                                                        <td style="font-family:'Roboto',Sans-Serif;font-weight:700;text-transform:uppercase;display:inline-block;border-radius:26px;text-decoration:none;line-height:20px;padding:10px" width="220" bgcolor="#00C8FF" align="center">
<span style="display:none">
</span><a style="color:#ffffff;font-family:'Roboto',Sans-Serif;font-size:14px;font-weight:bold;text-align:center;text-decoration:none!important;display:inline-block"><span style="display:inline-block;text-decoration:none;text-decoration-color:#00c8ff">ACTÍVALO AQUÍ</span> </a>
</td>
                                                                                                                    </tr>
                                                                                                                </tbody>
                                                                                                            </table>
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                </tbody>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                    
                                                                                    
                                                                                    
                                                                                    <tr>
                                                                                        <td aria-hidden="true" style="height:26px" height="26px"></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td aria-hidden="true" style="height:26px" height="26px"></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td aria-hidden="true" style="height:26px;border-top-width:1px;border-top-color:#d3d3d3;border-top-style:solid" height="26px"></td>
                                                                                    </tr>

                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                        <td style="box-sizing:border-box;border-radius:50px" width="1%" align="center">
                                                                            
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <table style="border-spacing:0!important;border-collapse:collapse!important;table-layout:fixed!important;margin:0 auto" width="90%">
                                                                <tbody>
                                                                    <tr>
                                                                        <td align="center">
                                                                            <p style="color:#00377d;font-family:'Roboto',Arial,Helvetica,Sans-Serif;font-size:20px;letter-spacing:0px;line-height:26px;margin:0" align="center">Al obtener tu Plan Residencial obtendrás más Internet y así estar siempre conectado con un solo pago al mes.<br><br></p>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    
                                                    
                                                    
                                                    
                                                    <tr>
                                                        <td>
                                                            <table style="border-spacing:0!important;border-collapse:collapse!important;table-layout:fixed!important;text-align:center;border-radius:50px;margin:0 auto" border="0" align="center">
                                                                <tbody>
                                                                    <tr>
                                                                        <td style="box-sizing:border-box;border-radius:50px" width="1%" align="center">
                                                                            
                                                                        </td>
                                                                        <td style="box-sizing:border-box;border-radius:50px" width="90%" align="center">
                                                                            <table style="border-spacing:0!important;border-collapse:collapse!important;table-layout:fixed!important;border-radius:50px;text-align:center;margin:0 auto" width="100%" cellspacing="0" cellpadding="0" border="0">
                                                                                <tbody>
                                                                                    
                                                                                    
                                                                                    <tr>
                                                                                        <td style="font-family:'Roboto',Sans-Serif">
                                                                                            <table style="text-align:center;border-spacing:0!important;border-collapse:collapse!important;table-layout:fixed!important;margin:0 auto" align="center">
                                                                                                <tbody>
                                                                                                    <tr align="center">
                                                                                                        <td>
                                                                                                            <table style="text-align:center;border-spacing:0!important;border-collapse:collapse!important;table-layout:fixed!important;margin:0 auto" cellspacing="0" cellpadding="10" align="center">
                                                                                                                <tbody>
                                                                                                                    <tr>
                                                                                                                         <td style="font-family:'Roboto',Sans-Serif;font-weight:700;text-transform:uppercase;display:inline-block;border-radius:26px;text-decoration:none;line-height:20px;padding:10px" width="220" bgcolor="#00C8FF" align="center">
<span style="display:none">
</span><a style="color:#ffffff;font-family:'Roboto',Sans-Serif;font-size:14px;font-weight:bold;text-align:center;text-decoration:none!important;display:inline-block"><span style="display:inline-block;text-decoration:none;text-decoration-color:#00c8ff">Más información</span> </a>
</td>
                                                                                                                    </tr>
                                                                                                                </tbody>
                                                                                                            </table>
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                </tbody>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td aria-hidden="true" style="height:26px" height="26px"></td>
                                                                                    </tr>
                                                                                    
                                                                                    
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                        <td style="box-sizing:border-box;border-radius:50px" width="1%" align="center">
                                                                            
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    
                                                    
                                                </tbody>
                                            </table>
                                            <table role="presentation" style="max-width:520px;border-radius:0px 0px 20px 20px;border-spacing:0!important;border-collapse:collapse!important;table-layout:fixed!important;margin:0 auto;padding:0" cellspacing="0" cellpadding="0" border="0" bgcolor="#ffffff" align="center">
                                                <tbody>
                                                    
                                                    <tr>
                                                        <td style="height:20px" height="22px"></td>
                                                    </tr>
                                                    
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table role="presentation" style="max-width:520px;border-spacing:0!important;border-collapse:collapse!important;table-layout:fixed!important;margin:0 auto" width="95%" cellspacing="0" cellpadding="0" border="0" align="center">
                                <tbody>
                                    
                                    <tr>
                                        <td style="height:71px" height="71px"></td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    
                    
                    
                    
                    <tr>
                        <td>
                            <table role="presentation" style="max-width:520px;border-spacing:0!important;border-collapse:collapse!important;table-layout:fixed!important;margin:0 auto" width="95%" cellspacing="0" cellpadding="0" border="0" align="center">
                                <tbody>
                                    
                                    <tr>
                                        <td style="font-family:'Roboto',Sans-Serif;font-size:10px;line-height:1.2em;color:white;padding:0 46px 46px" valign="middle" align="center">
                                            <table style="border-spacing:0!important;border-collapse:collapse!important;table-layout:fixed!important;margin:0 auto">
                                                <tbody>
                                                    <tr>
                                                        <td width="30" align="right">
                                                            
                                                            <p style="margin:0;border:none" align="right"><a href="http://ablink.info.tigo.com.hn/ls/click?upn=0jrccbXq7233B-2BtKfK2OuVfwjsd9ONOXIu6HvTYAzRA-3DQ8WB_ALMD4JJ5dp-2FjrfPN14N4N-2FtihFVpbGkYv3-2FFRL37TU8RR8Veb1DgnDxQoM51c4ZUZ5IAjMk8QZinsbCcsY-2FPI31wySc39zK7sOkrbCmUl1lp5S-2Fo-2FNtt5783z2zlUvkCMyjcRNXDkpqe55gaf9W8Nw0KtOBlK8wlLGazi3wDYZ7gryJnwMuTrRrZ8X46m4d74r-2FU9Oe-2F3zlqxtOSDB-2F36WthBKNk0IrztrdpcdWwTJmQtsQISMT-2Be-2BfW-2FPPIBAs-2BRalCGnNcfzBKFzNLB3ziUev1Olljw05UrdF5QhieHtLkURIY6gUVhZEut70mMwON-2BfUwpKOW9UfSN7XfL7QwQ2tRqy4jNTEyObRM8IRSuI96-2B6EEG6I9fpoHWfmNFbpj2JYjUaSgqHL07Y7QaUdgMFoTWS-2FLzVX-2FN0GGAaqpb5ea-2F4wLjpYnBUKgHlDsTZjBvRPlwXpz7dgf9lIhcKaIrSXUUd-2F44ZDEJj9pyOSB5dqhakZhdanJomUHqO9j1aLSMn9xp3M2Iv4jeV-2BskqJa6Dffo04Y7AIKNEfpPYNqPIpAXAXVClgDCK46zn2jwGimEsU2ICBoJOgb8HA7bQsYvY5sRZsOvVBXCtGCEQEm3GIBYbO4v9d23M-2F8c-2BU2Kaest8mZPK6PuOSpH3MIitGCsmyl9L5irzmXaEWvci95MXo-3D" style="text-align:right;color:#00c8ff;text-decoration:none!important;font-weight:700" target="_blank" data-saferedirecturl="https://www.google.com/url?q=http://ablink.info.tigo.com.hn/ls/click?upn%3D0jrccbXq7233B-2BtKfK2OuVfwjsd9ONOXIu6HvTYAzRA-3DQ8WB_ALMD4JJ5dp-2FjrfPN14N4N-2FtihFVpbGkYv3-2FFRL37TU8RR8Veb1DgnDxQoM51c4ZUZ5IAjMk8QZinsbCcsY-2FPI31wySc39zK7sOkrbCmUl1lp5S-2Fo-2FNtt5783z2zlUvkCMyjcRNXDkpqe55gaf9W8Nw0KtOBlK8wlLGazi3wDYZ7gryJnwMuTrRrZ8X46m4d74r-2FU9Oe-2F3zlqxtOSDB-2F36WthBKNk0IrztrdpcdWwTJmQtsQISMT-2Be-2BfW-2FPPIBAs-2BRalCGnNcfzBKFzNLB3ziUev1Olljw05UrdF5QhieHtLkURIY6gUVhZEut70mMwON-2BfUwpKOW9UfSN7XfL7QwQ2tRqy4jNTEyObRM8IRSuI96-2B6EEG6I9fpoHWfmNFbpj2JYjUaSgqHL07Y7QaUdgMFoTWS-2FLzVX-2FN0GGAaqpb5ea-2F4wLjpYnBUKgHlDsTZjBvRPlwXpz7dgf9lIhcKaIrSXUUd-2F44ZDEJj9pyOSB5dqhakZhdanJomUHqO9j1aLSMn9xp3M2Iv4jeV-2BskqJa6Dffo04Y7AIKNEfpPYNqPIpAXAXVClgDCK46zn2jwGimEsU2ICBoJOgb8HA7bQsYvY5sRZsOvVBXCtGCEQEm3GIBYbO4v9d23M-2F8c-2BU2Kaest8mZPK6PuOSpH3MIitGCsmyl9L5irzmXaEWvci95MXo-3D&amp;source=gmail&amp;ust=1648927870373000&amp;usg=AOvVaw2cMLouGX2NkVjW--RvXka0"><img src="https://ci6.googleusercontent.com/proxy/7sZrGrnDH5CDh2k-qKlacq-TnC2Fe8DGUk8DlVV9ChWO1klNwl9xq0PkUt6OkUAOeFI67RxO3KomZ9yCfAjDPlOrN8e_3g9yFK2UAuvS6KCb5DGluyOmYN9PeRAZXvLIDtNwojGLX0kcKCR6TIjhuyReUF8E0IBFy4xeflomdOIJ7uSwFzCH19N-rCCidA=s0-d-e1-ft#https://appboy-images.com/appboy/communication/assets/image_assets/images/5c82c549d5b6823de4352d8e/original.png?1552074057g" style="display:inline-block;text-align:right;border:none" alt="Mi Cuenta Tigo" class="CToWUd" width="20"></a></p>
                                                        </td>
                                                        <td>
                                                            <p></p>
                                                        </td>
                                                        <td width="30" align="center">
                                                            
                                                            <p style="margin:0;border:none" align="center"><a href="http://ablink.info.tigo.com.hn/ls/click?upn=qDkwP3VxH2n0Z3ZmlPDj5jiKUmeo61UUPxfZpfn4awuvxxscLCyLLcDEBYQotOCbT2ea_ALMD4JJ5dp-2FjrfPN14N4N-2FtihFVpbGkYv3-2FFRL37TU8RR8Veb1DgnDxQoM51c4ZUZ5IAjMk8QZinsbCcsY-2FPI31wySc39zK7sOkrbCmUl1lp5S-2Fo-2FNtt5783z2zlUvkCMyjcRNXDkpqe55gaf9W8Nw0KtOBlK8wlLGazi3wDYZ7gryJnwMuTrRrZ8X46m4d74r-2FU9Oe-2F3zlqxtOSDB-2F36WthBKNk0IrztrdpcdWwTJmQtsQISMT-2Be-2BfW-2FPPIBAs-2BRalCGnNcfzBKFzNLB3ziUev1Olljw05UrdF5QhieHtLkURIY6gUVhZEut70mMwON-2BfUwpKOW9UfSN7XfL7QwQ2tRqy4jNTEyObRM8IRSuI96-2B6EEG6I9fpoHWfmNFbpj2JYjUaSgqHL07Y7QaUdgMFoTWS-2FLzVX-2FN0GGAaqpb5ea-2F4wLjpYnBUKgHlDsTZjBvRPlwXpz7dgf9lIhcKaIrSXUUd-2F44ZDEJj9pyOSB5dqhakZhdanJomUHqO9j1aLSMn9xp3M2Iv4jeV-2BskqJa6InfHN4NMTcK1-2BU44S2htHHI1d-2BmkZia-2BEjtemL0dzWM3Md0d36-2FJPeLAs9Z1LUoo20qevCFvIstH2hms323DUN-2FQK-2Fg5ZIMt1Ur-2B1LnU1JiQNupG05Oqf3S-2Fyb-2BFXwYK7vW67khgE-2B1GUMoMEArTtU-3D" style="text-align:center;color:#00c8ff;text-decoration:none!important;font-weight:700" target="_blank" data-saferedirecturl="https://www.google.com/url?q=http://ablink.info.tigo.com.hn/ls/click?upn%3DqDkwP3VxH2n0Z3ZmlPDj5jiKUmeo61UUPxfZpfn4awuvxxscLCyLLcDEBYQotOCbT2ea_ALMD4JJ5dp-2FjrfPN14N4N-2FtihFVpbGkYv3-2FFRL37TU8RR8Veb1DgnDxQoM51c4ZUZ5IAjMk8QZinsbCcsY-2FPI31wySc39zK7sOkrbCmUl1lp5S-2Fo-2FNtt5783z2zlUvkCMyjcRNXDkpqe55gaf9W8Nw0KtOBlK8wlLGazi3wDYZ7gryJnwMuTrRrZ8X46m4d74r-2FU9Oe-2F3zlqxtOSDB-2F36WthBKNk0IrztrdpcdWwTJmQtsQISMT-2Be-2BfW-2FPPIBAs-2BRalCGnNcfzBKFzNLB3ziUev1Olljw05UrdF5QhieHtLkURIY6gUVhZEut70mMwON-2BfUwpKOW9UfSN7XfL7QwQ2tRqy4jNTEyObRM8IRSuI96-2B6EEG6I9fpoHWfmNFbpj2JYjUaSgqHL07Y7QaUdgMFoTWS-2FLzVX-2FN0GGAaqpb5ea-2F4wLjpYnBUKgHlDsTZjBvRPlwXpz7dgf9lIhcKaIrSXUUd-2F44ZDEJj9pyOSB5dqhakZhdanJomUHqO9j1aLSMn9xp3M2Iv4jeV-2BskqJa6InfHN4NMTcK1-2BU44S2htHHI1d-2BmkZia-2BEjtemL0dzWM3Md0d36-2FJPeLAs9Z1LUoo20qevCFvIstH2hms323DUN-2FQK-2Fg5ZIMt1Ur-2B1LnU1JiQNupG05Oqf3S-2Fyb-2BFXwYK7vW67khgE-2B1GUMoMEArTtU-3D&amp;source=gmail&amp;ust=1648927870373000&amp;usg=AOvVaw3amHfqCLeZ0B7FyPuzooUm"><img src="https://ci6.googleusercontent.com/proxy/AM9BMB_Cb5g_ma7kTcjaYkz5yDSJiM54dQnuaFFhPOhGEj3BcFIQlNFMUlvw0jKphHQGJQ1sHOkaJWo88_arjR8V-Rqou4zt2df4r6LoaNjyuQlVjmQnaN2nbTN4crykvyvQ22D8fbqid0VF0ZaLV5XswC5p7ds-LybGYwFigfwb6zVGsScBWRMDRz1f=s0-d-e1-ft#https://appboy-images.com/appboy/communication/assets/image_assets/images/5c82c549a12f740c56d95cbf/original.png?1552074057" style="display:inline-block;text-align:center;border:none" alt="FACEBOOK" class="CToWUd" width="20"></a></p>
                                                        </td>
                                                        <td>
                                                            <p></p>
                                                        </td>
                                                        <td width="30" align="left">
                                                            
                                                            <p style="margin:0;border:none" align="left"><a href="http://ablink.info.tigo.com.hn/ls/click?upn=qDkwP3VxH2n0Z3ZmlPDj5kSZKxiKWh3hGZ5aepSo8XT2OSJuW5nFSytPnCsW7hHXCzNY_ALMD4JJ5dp-2FjrfPN14N4N-2FtihFVpbGkYv3-2FFRL37TU8RR8Veb1DgnDxQoM51c4ZUZ5IAjMk8QZinsbCcsY-2FPI31wySc39zK7sOkrbCmUl1lp5S-2Fo-2FNtt5783z2zlUvkCMyjcRNXDkpqe55gaf9W8Nw0KtOBlK8wlLGazi3wDYZ7gryJnwMuTrRrZ8X46m4d74r-2FU9Oe-2F3zlqxtOSDB-2F36WthBKNk0IrztrdpcdWwTJmQtsQISMT-2Be-2BfW-2FPPIBAs-2BRalCGnNcfzBKFzNLB3ziUev1Olljw05UrdF5QhieHtLkURIY6gUVhZEut70mMwON-2BfUwpKOW9UfSN7XfL7QwQ2tRqy4jNTEyObRM8IRSuI96-2B6EEG6I9fpoHWfmNFbpj2JYjUaSgqHL07Y7QaUdgMFoTWS-2FLzVX-2FN0GGAaqpb5ea-2F4wLjpYnBUKgHlDsTZjBvRPlwXpz7dgf9lIhcKaIrSXUUd-2F44ZDEJj9pyOSB5dqhakZhdanJomUHqO9j1aLSMn9xp3M2Iv4jeV-2BskqJa6CAaGecxVkGIyUNQM01zxdkxr6pQTuFjvN240Ay7UnZ-2Bpd0j28SnwwzDFk3ePWZ7le8pxD-2FSz3fzDOEII-2BDEGEthqjLvAEZ7Cp1tgWULv82mi87k8I3pvF97Yaz3c92FTUTl3Looa1leKsENkiqEpyo-3D" style="text-align:left;color:#00c8ff;text-decoration:none!important;font-weight:700" target="_blank" data-saferedirecturl="https://www.google.com/url?q=http://ablink.info.tigo.com.hn/ls/click?upn%3DqDkwP3VxH2n0Z3ZmlPDj5kSZKxiKWh3hGZ5aepSo8XT2OSJuW5nFSytPnCsW7hHXCzNY_ALMD4JJ5dp-2FjrfPN14N4N-2FtihFVpbGkYv3-2FFRL37TU8RR8Veb1DgnDxQoM51c4ZUZ5IAjMk8QZinsbCcsY-2FPI31wySc39zK7sOkrbCmUl1lp5S-2Fo-2FNtt5783z2zlUvkCMyjcRNXDkpqe55gaf9W8Nw0KtOBlK8wlLGazi3wDYZ7gryJnwMuTrRrZ8X46m4d74r-2FU9Oe-2F3zlqxtOSDB-2F36WthBKNk0IrztrdpcdWwTJmQtsQISMT-2Be-2BfW-2FPPIBAs-2BRalCGnNcfzBKFzNLB3ziUev1Olljw05UrdF5QhieHtLkURIY6gUVhZEut70mMwON-2BfUwpKOW9UfSN7XfL7QwQ2tRqy4jNTEyObRM8IRSuI96-2B6EEG6I9fpoHWfmNFbpj2JYjUaSgqHL07Y7QaUdgMFoTWS-2FLzVX-2FN0GGAaqpb5ea-2F4wLjpYnBUKgHlDsTZjBvRPlwXpz7dgf9lIhcKaIrSXUUd-2F44ZDEJj9pyOSB5dqhakZhdanJomUHqO9j1aLSMn9xp3M2Iv4jeV-2BskqJa6CAaGecxVkGIyUNQM01zxdkxr6pQTuFjvN240Ay7UnZ-2Bpd0j28SnwwzDFk3ePWZ7le8pxD-2FSz3fzDOEII-2BDEGEthqjLvAEZ7Cp1tgWULv82mi87k8I3pvF97Yaz3c92FTUTl3Looa1leKsENkiqEpyo-3D&amp;source=gmail&amp;ust=1648927870373000&amp;usg=AOvVaw3R9FrCRfmHtBECWRR968d7"><img src="https://ci3.googleusercontent.com/proxy/UME4xhTWKwGlt-SJ4HkEHbXAg3hRjDAmuGWm7njb8A8sJ7gwWTF3r9nFEZQReaaKTB6tOTdxM23CKZM9_cg-v0s7njmBhbVnObO8Yf-y58s1r1-J0AzUXv30mCoFQsMJLNvK9HX4PlGkORj5PQ668klPHsdWrPfhmUbOOSCihp5T64nMUvbJhWSJtnNC=s0-d-e1-ft#https://appboy-images.com/appboy/communication/assets/image_assets/images/5c82c5497dea0d3584a03ae0/original.png?1552074057" style="display:inline-block;text-align:left;border:none" alt="TWITTER" class="CToWUd" width="20"></a></p>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            
                                            <p style="color:#00377d;font-family:'Roboto',Sans-Serif;font-size:10px;font-weight:bold;letter-spacing:0;line-height:13px;margin:10px auto 0" align="center">
                                                TIGO - EN TODO LO QUE TE MUEVE</p>
                                            <p style="color:#00377d;font-family:'Roboto',Sans-Serif;font-size:10px;letter-spacing:0;line-height:12px;margin:0px auto" align="center"><a href="http://ablink.info.tigo.com.hn/ls/click?upn=qDkwP3VxH2n0Z3ZmlPDj5mrXKsuGV8V2pKKRda1TSBGOWaG6OvCMXdE9rU8n-2BJjdRsTxuxUdMksAHPtEjhqhOSWHNuYg3zcTS00rv63IlTNLkmBlAkKVq7PkVy2C6qd2UMumVGSrZMsKPx8oCl9cv7GUiBjVkQhPuIJz8EkF1LUAOPIMLcfZgSf86HDZHQeHYnJmcDvz7QcdCC0KGrPFzoimugG9lU29z6ne0AeVe3IVnJzTQ-2FtQFRZ4ZAcKGhM4ynLmVkuEGk-2BagwPbYpLb3wSVFTfx9BSg3qdAuNonaJ8KpzuZspzFIvgBQ-2FjbXlsdptX0u1EMTzCC1E3alRSf4WkI69ZCw9UBVXppiLWUvn2OamaPzs0TDc-2F8OkqzzWC9hjNisoDq9IU0WBJMKO8wcREdFLd-2FgQoh-2B6irplq7YX92IyO2pQhDAzS5Xt-2BnWhvxD5josdcbAg2Tv8bEyGAyp1qV5qGKvT-2Fnr33kxAC28lAAmerJfY79OJcb2ZATmLm0-2BfV0d5VuDfQ-2FZ3m0EYwIr-2FdAFZuJYSB8WvHZuXv1SqecUuun42nEpUOPmoF8irUJ7K0KNBJiKWfZuJhMvXu5zVH7IPrWPJuVT2S8OO0Y7ms-3DYG2I_ALMD4JJ5dp-2FjrfPN14N4N-2FtihFVpbGkYv3-2FFRL37TU8RR8Veb1DgnDxQoM51c4ZUZ5IAjMk8QZinsbCcsY-2FPI31wySc39zK7sOkrbCmUl1lp5S-2Fo-2FNtt5783z2zlUvkCMyjcRNXDkpqe55gaf9W8Nw0KtOBlK8wlLGazi3wDYZ7gryJnwMuTrRrZ8X46m4d74r-2FU9Oe-2F3zlqxtOSDB-2F36WthBKNk0IrztrdpcdWwTJmQtsQISMT-2Be-2BfW-2FPPIBAs-2BRalCGnNcfzBKFzNLB3ziUev1Olljw05UrdF5QhieHtLkURIY6gUVhZEut70mMwON-2BfUwpKOW9UfSN7XfL7QwQ2tRqy4jNTEyObRM8IRSuI96-2B6EEG6I9fpoHWfmNFbpj2JYjUaSgqHL07Y7QaUdgMFoTWS-2FLzVX-2FN0GGAaqpb5ea-2F4wLjpYnBUKgHlDsTZjBvRPlwXpz7dgf9lIhcKaIrSXUUd-2F44ZDEJj9pyOSB5dqhakZhdanJomUHqO9j1aLSMn9xp3M2Iv4jeV-2BskqJa6MopqFxvvZGdvjrHanwPXl2WdUHn2cjhy4VxWXU0csmtzps6pB5-2Bd5k5Ilfj4JXmpOnPqzTwYpk703-2FC-2B3u1yTKSUjAB-2B6-2FBSp-2FzZMunLVF2GjqJwqEaRTTggIz8dGbStjnkvYBz3yFoVh01oHNTr-2Fc-3D" style="text-decoration:none!important;color:#00c8ff;font-weight:700" target="_blank" data-saferedirecturl="https://www.google.com/url?q=http://ablink.info.tigo.com.hn/ls/click?upn%3DqDkwP3VxH2n0Z3ZmlPDj5mrXKsuGV8V2pKKRda1TSBGOWaG6OvCMXdE9rU8n-2BJjdRsTxuxUdMksAHPtEjhqhOSWHNuYg3zcTS00rv63IlTNLkmBlAkKVq7PkVy2C6qd2UMumVGSrZMsKPx8oCl9cv7GUiBjVkQhPuIJz8EkF1LUAOPIMLcfZgSf86HDZHQeHYnJmcDvz7QcdCC0KGrPFzoimugG9lU29z6ne0AeVe3IVnJzTQ-2FtQFRZ4ZAcKGhM4ynLmVkuEGk-2BagwPbYpLb3wSVFTfx9BSg3qdAuNonaJ8KpzuZspzFIvgBQ-2FjbXlsdptX0u1EMTzCC1E3alRSf4WkI69ZCw9UBVXppiLWUvn2OamaPzs0TDc-2F8OkqzzWC9hjNisoDq9IU0WBJMKO8wcREdFLd-2FgQoh-2B6irplq7YX92IyO2pQhDAzS5Xt-2BnWhvxD5josdcbAg2Tv8bEyGAyp1qV5qGKvT-2Fnr33kxAC28lAAmerJfY79OJcb2ZATmLm0-2BfV0d5VuDfQ-2FZ3m0EYwIr-2FdAFZuJYSB8WvHZuXv1SqecUuun42nEpUOPmoF8irUJ7K0KNBJiKWfZuJhMvXu5zVH7IPrWPJuVT2S8OO0Y7ms-3DYG2I_ALMD4JJ5dp-2FjrfPN14N4N-2FtihFVpbGkYv3-2FFRL37TU8RR8Veb1DgnDxQoM51c4ZUZ5IAjMk8QZinsbCcsY-2FPI31wySc39zK7sOkrbCmUl1lp5S-2Fo-2FNtt5783z2zlUvkCMyjcRNXDkpqe55gaf9W8Nw0KtOBlK8wlLGazi3wDYZ7gryJnwMuTrRrZ8X46m4d74r-2FU9Oe-2F3zlqxtOSDB-2F36WthBKNk0IrztrdpcdWwTJmQtsQISMT-2Be-2BfW-2FPPIBAs-2BRalCGnNcfzBKFzNLB3ziUev1Olljw05UrdF5QhieHtLkURIY6gUVhZEut70mMwON-2BfUwpKOW9UfSN7XfL7QwQ2tRqy4jNTEyObRM8IRSuI96-2B6EEG6I9fpoHWfmNFbpj2JYjUaSgqHL07Y7QaUdgMFoTWS-2FLzVX-2FN0GGAaqpb5ea-2F4wLjpYnBUKgHlDsTZjBvRPlwXpz7dgf9lIhcKaIrSXUUd-2F44ZDEJj9pyOSB5dqhakZhdanJomUHqO9j1aLSMn9xp3M2Iv4jeV-2BskqJa6MopqFxvvZGdvjrHanwPXl2WdUHn2cjhy4VxWXU0csmtzps6pB5-2Bd5k5Ilfj4JXmpOnPqzTwYpk703-2FC-2B3u1yTKSUjAB-2B6-2FBSp-2FzZMunLVF2GjqJwqEaRTTggIz8dGbStjnkvYBz3yFoVh01oHNTr-2Fc-3D&amp;source=gmail&amp;ust=1648927870374000&amp;usg=AOvVaw06VNgw3o79NQMQ3M2BvY_G"><span style="text-decoration:none">Haz click aqui</span> </a> para desuscribirte</p>
                                            <p style="color:#00377d;font-family:'Roboto',Sans-Serif;font-size:10px;letter-spacing:0;line-height:12px;margin:0 auto" align="center">
                                                Tigo Copyright © 2021. Tigo Honduras.</p>
                                            <p style="color:#00c8ff;font-family:'Roboto',Sans-Serif;font-size:10px;letter-spacing:0;line-height:12px;margin:0 auto" align="center"><a href="http://ablink.info.tigo.com.hn/ls/click?upn=qDkwP3VxH2n0Z3ZmlPDj5txvZVvZGfs8vJkFRblQtAioH77DENPaGjl-2F4Xwj9k-2FsPFUN1MqJbC-2BwhZU4XthtH8V6xYZCSM2QITU2ACM57-2B2K2F4p-2BGsn-2F7glJBxs-2FQavaHs4myg-2BQ-2ByOFFKhNOAQa8tvMnDEsLIR2ecn2NO16YK9Ue4HlHfJvcytHEPdvF7DPes3_ALMD4JJ5dp-2FjrfPN14N4N-2FtihFVpbGkYv3-2FFRL37TU8RR8Veb1DgnDxQoM51c4ZUZ5IAjMk8QZinsbCcsY-2FPI31wySc39zK7sOkrbCmUl1lp5S-2Fo-2FNtt5783z2zlUvkCMyjcRNXDkpqe55gaf9W8Nw0KtOBlK8wlLGazi3wDYZ7gryJnwMuTrRrZ8X46m4d74r-2FU9Oe-2F3zlqxtOSDB-2F36WthBKNk0IrztrdpcdWwTJmQtsQISMT-2Be-2BfW-2FPPIBAs-2BRalCGnNcfzBKFzNLB3ziUev1Olljw05UrdF5QhieHtLkURIY6gUVhZEut70mMwON-2BfUwpKOW9UfSN7XfL7QwQ2tRqy4jNTEyObRM8IRSuI96-2B6EEG6I9fpoHWfmNFbpj2JYjUaSgqHL07Y7QaUdgMFoTWS-2FLzVX-2FN0GGAaqpb5ea-2F4wLjpYnBUKgHlDsTZjBvRPlwXpz7dgf9lIhcKaIrSXUUd-2F44ZDEJj9pyOSB5dqhakZhdanJomUHqO9j1aLSMn9xp3M2Iv4jeV-2BskqJa6AjmDdIk2sGsob2PltFDYaEirBAnUFggBN35Cq9O0iB69RJHwTvd-2BHcvfDmh2BNhrQNc1zhTqnK6uTZF9797sR44oxhA4KsRmif5qafEtwHyuag7QYDci2jxaQRJc23wWtq48xsEHj4tUu1PFbMD9-2FI-3D" style="text-decoration:none!important;color:#00c8ff;font-weight:700" target="_blank" data-saferedirecturl="https://www.google.com/url?q=http://ablink.info.tigo.com.hn/ls/click?upn%3DqDkwP3VxH2n0Z3ZmlPDj5txvZVvZGfs8vJkFRblQtAioH77DENPaGjl-2F4Xwj9k-2FsPFUN1MqJbC-2BwhZU4XthtH8V6xYZCSM2QITU2ACM57-2B2K2F4p-2BGsn-2F7glJBxs-2FQavaHs4myg-2BQ-2ByOFFKhNOAQa8tvMnDEsLIR2ecn2NO16YK9Ue4HlHfJvcytHEPdvF7DPes3_ALMD4JJ5dp-2FjrfPN14N4N-2FtihFVpbGkYv3-2FFRL37TU8RR8Veb1DgnDxQoM51c4ZUZ5IAjMk8QZinsbCcsY-2FPI31wySc39zK7sOkrbCmUl1lp5S-2Fo-2FNtt5783z2zlUvkCMyjcRNXDkpqe55gaf9W8Nw0KtOBlK8wlLGazi3wDYZ7gryJnwMuTrRrZ8X46m4d74r-2FU9Oe-2F3zlqxtOSDB-2F36WthBKNk0IrztrdpcdWwTJmQtsQISMT-2Be-2BfW-2FPPIBAs-2BRalCGnNcfzBKFzNLB3ziUev1Olljw05UrdF5QhieHtLkURIY6gUVhZEut70mMwON-2BfUwpKOW9UfSN7XfL7QwQ2tRqy4jNTEyObRM8IRSuI96-2B6EEG6I9fpoHWfmNFbpj2JYjUaSgqHL07Y7QaUdgMFoTWS-2FLzVX-2FN0GGAaqpb5ea-2F4wLjpYnBUKgHlDsTZjBvRPlwXpz7dgf9lIhcKaIrSXUUd-2F44ZDEJj9pyOSB5dqhakZhdanJomUHqO9j1aLSMn9xp3M2Iv4jeV-2BskqJa6AjmDdIk2sGsob2PltFDYaEirBAnUFggBN35Cq9O0iB69RJHwTvd-2BHcvfDmh2BNhrQNc1zhTqnK6uTZF9797sR44oxhA4KsRmif5qafEtwHyuag7QYDci2jxaQRJc23wWtq48xsEHj4tUu1PFbMD9-2FI-3D&amp;source=gmail&amp;ust=1648927870374000&amp;usg=AOvVaw1PB59IJsKaAF6JxpF03r5l"><span style="text-decoration:none">Términos y condiciones de uso.</span></a></p>
                                            <p style="color:#00377d;font-family:'Roboto',Sans-Serif;font-size:10px;letter-spacing:0;line-height:12px;margin:0 auto" align="center">
                                                Todos los derechos reservados.</p>
                                        </td>
                                    </tr>
                                    
                                    
                                    <tr>
                                        <td style="height:5px" height="5px"></td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    
                    
                </tbody>
            </table>
            
            
            
            
        </div>
        
    </center>
<img src="https://ci4.googleusercontent.com/proxy/PkoORDnVJttlr-LWI5KbzK5ptn_8yiM6GesVtGUG-TDa_Xwz_lD57zpb30tYB3disMcKwdwwcKtcDUlozBGEPcgFWkARL_PWS5-1LtHZGxNLLJlCeiIruGWNE81fRHKvZ3KfLLJXeTMJT-iIABRP26C20bOn2sJaHdq2Ts6-sq7zuQgnp_8DaNWBL1LpvKhZcrbtJaiVAFDXUB6I0VN0y9tgTiSptA9z8hIIUb7JKsN3S8R887oT4Q-RG7_WXdlcc8Cbn1dti3N8ZuDbmK3JU2E1oSNB0oXKtLub33dyeevWPq-XnV57HTzcre3xoRiG_21AW42J82vOraNhjQq22iqUW1xnTTkev_doe6cZb4frOXkTY5HA5lreE6IVcJgAtoXnsW7eMtPR6IKvB-cX2p9HK78qYfC_l9_6O9WT-tKNkjKV3MkxbRhmVfGSKrsd2PcHmjwIqYnwRKBBwp5xtIwO8jiK-h49ozE0h9hJXktFg_N_ODxbrBol2aGsKDhQJHRWmamtraf-95fYqCdm6iqC4f0CULW5dy2MMG1uvoHskep2OENCKxWL2Icx87iqkz3xOsKJfgArBALHIPu6jT20nENHrOrIreNqZxQydmbTKAL-JAW1NiXcw8NEOrmfKkdy60zE8yCK5TielpmQ4xNt4frEnGhaDj0w3yeLYZcsZzMSQh2NMrgWRkcrP5WsZrVQSDqBOvd2tHRwyylx2fXuiNKJTawIr3dYfC8Xf2VKCBmNZGmasF2RqzatBuz9OAP0XwJCEhwzYE73pPBZ1x1Q8iWoECskHyR4rGOlqNs7XHrCaySM9BIre-nq5_F8plvq6aZVciL2ZXn6E3-NRmFDA1PZT8l1BKsPUSAKbag1e40dUfh9sClBwz-eT319X6rQ7mG-kX7KhrVsRx_Ugz4LRG_u7cNAknYvQAGky2UcPzIheX83C-QBKR8z3qERkjW8GUVK8FSgYWNJlbTkhH-KLrBneC8pNLy-GuCtjNQHyxCh6q24bsUfXJM_RgpmLjyh781qXMfF_wWcjgeJ2ULWdV489k-jj3pXIYI=s0-d-e1-ft#http://ablink.info.tigo.com.hn/wf/open?upn=1iG2FpY9pECEF3NJsGGuyb1qBbthILn5nrq8-2FWjxc0l0pk3yP2wFwrIuG7-2FfhdZzi1nCom-2FQvjVWYMvbvfks-2BIgmqW8PFLucfgtDq0PRHF2QsjHs04uIHO-2BC4jAeP-2BNuNSrkzgtLDSOVdRAUZC5sDMkX2Jp01kThUn60i3knj8LzV5EFzecD65JbLzYSuSVJR8eDL49I33Jf1TD9rKNqI88LiV83PFWdOAD33r0WvI4oqpW9nlpRx5sr0UMnX-2BidnMoOeNZnNEDE56ij-2BF2d8m2SomAoorIb026KcOLbgR-2BEUpvKJRKvD4YYEUmiSMfi-2FHA4VCwYAoBYOo3DM9psaQMdDaTsGk3dy4Y-2BhAeHlag3qTEHnR5UuX9VWo-2BBrieueFYzkFMQJWOhh4KqqEQh0MzffzK6MS6pO-2BbNKznqh0KJvGd2xVdeINLArjt5ASk-2Fd2-2FYEzKV3Tgq5aw9X4jiAPIWlohyAhIKefrbtttyHhqP9UNAE8JgGJ5z1IqH-2Bi5Kj28PquMI-2BOlaZo9bQyY-2BXz-2BpUAdLrlrxAmB8XXhzT68g90WlV3-2FIfipY-2F651cEoM5WYK8A7NxdtU-2FMkk7MBRSxb0GT03LLt6RaxDZnWHEvDvad-2BQq-2B8wPGmKoUeTfkgQQcIkQsVbbHC7E4G3tirYUcEc6vtQgIsj2TDWWqAJYgk-3D" alt="" style="height:1px!important;width:1px!important;border-width:0!important;margin-top:0!important;margin-bottom:0!important;margin-right:0!important;margin-left:0!important;padding-top:0!important;padding-bottom:0!important;padding-right:0!important;padding-left:0!important" class="CToWUd" width="1" height="1" border="0"></div>
    
    </body></html>`,
  };
};
export const configTransportResetPass = (
  nombre,
  apellido,
  email,
  token,
  host,
  time
) => {
  return {
    from: `<${process.env.MAIL_FROM_ADDRESS}>`,
    to: `<${email.replace("%40", "@")}>`,
    subject: "Notificación de restablecimiento de contraseña",
    html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml"><head><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta name="color-scheme" content="light"><meta name="supported-color-schemes" content="light"><style>@media  only screen and (max-width: 600px) {.inner-body {width: 100% !important;}.footer{width: 100% !important;}}@media  only screen and (max-width: 500px) {.button {width: 100% !important;}}</style></head><body style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; -webkit-text-size-adjust: none; background-color: #ffffff; color: #718096; height: 100%; line-height: 1.4; margin: 0; padding: 0; width: 100% !important;"><table class="wrapper" width="100%" cellpadding="0" cellspacing="0" role="presentation" style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; -premailer-cellpadding: 0; -premailer-cellspacing: 0; -premailer-width: 100%; background-color: #edf2f7; margin: 0; padding: 0; width: 100%;"><tr><td align="center" style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative;"><table class="content" width="100%" cellpadding="0" cellspacing="0" role="presentation" style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; -premailer-cellpadding: 0; -premailer-cellspacing: 0; -premailer-width: 100%; margin: 0; padding: 0; width: 100%;"><tr><td class="header" style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; padding: 25px 0; text-align: center;"><a href="http://${host}" style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; color: #3d4852; font-size: 19px; font-weight: bold; text-decoration: none; display: inline-block;"><img src="https://jetcargo.vip/wp-content/uploads/2021/11/cropped-JetCargo-png-file-e1637610869136.png"></a></td></tr><tr><td class="body" width="100%" cellpadding="0" cellspacing="0" style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; -premailer-cellpadding: 0; -premailer-cellspacing: 0; -premailer-width: 100%; background-color: #edf2f7; border-bottom: 1px solid #edf2f7; border-top: 1px solid #edf2f7; margin: 0; padding: 0; width: 100%;"><table class="inner-body" align="center" width="570" cellpadding="0" cellspacing="0" role="presentation" style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; -premailer-cellpadding: 0; -premailer-cellspacing: 0; -premailer-width: 570px; background-color: #ffffff; border-color: #e8e5ef; border-radius: 2px; border-width: 1px; box-shadow: 0 2px 0 rgba(0, 0, 150, 0.025), 2px 4px 0 rgba(0, 0, 150, 0.015); margin: 0 auto; padding: 0; width: 570px;"><tr><td class="content-cell" style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; max-width: 100vw; padding: 32px;"><h1 style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; color: #3d4852; font-size: 18px; font-weight: bold; margin-top: 0; text-align: left;">Restablecer tu contraseña de Get Cargo</h1><h1 style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; color: #3d4852; font-size: 18px; font-weight: bold; margin-top: 0; text-align: left;"> ${nombre} ${apellido} </h1><p style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; font-size: 16px; line-height: 1.5em; margin-top: 0; text-align: left;">Escuchamos que perdiste tu contraseña de Get Cargo. ¡Lo siento!¡Pero no te preocupes! Puede utilizar el siguiente botón para restablecer su contraseña:</p><table class="action" align="center" width="100%" cellpadding="0" cellspacing="0" role="presentation" style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; -premailer-cellpadding: 0; -premailer-cellspacing: 0; -premailer-width: 100%; margin: 30px auto; padding: 0; text-align: center; width: 100%;"><tr><td align="center" style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative;"><table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative;"><tr><td align="center" style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative;"><tr><td style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative;"><a href="${process.env.API_FROND}:${process.env.PORT_FROND}/forget-password/${token}/${email}/" class="button button-primary" target="_blank" rel="noopener" style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; -webkit-text-size-adjust: none; border-radius: 4px; color: #fff; display: inline-block; overflow: hidden; text-decoration: none; background-color: #2d3748; border-bottom: 8px solid #2d3748; border-left: 18px solid #2d3748; border-right: 18px solid #2d3748; border-top: 8px solid #2d3748;">Restablecer la contraseña</a></td></tr></table></td></tr></table></td></tr></table><p style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; font-size: 16px; line-height: 1.5em; margin-top: 0; text-align: left;">Si no usas este enlace dentro de ${time} horas, caducará. Para obtener un nuevo enlace de restablecimiento de contraseña, visite: <span > <a href="http://${host}" > ${host} </a> </span> </p></p><p style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; font-size: 16px; line-height: 1.5em; margin-top: 0; text-align: left;">Si no solicitó un restablecimiento de contraseña, no es necesario realizar ninguna otra acción.</p><p style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; font-size: 16px; line-height: 1.5em; margin-top: 0; text-align: left;">Saludos,<br>Jet-Cargo</p><table class="subcopy" width="100%" cellpadding="0" cellspacing="0" role="presentation" style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; border-top: 1px solid #e8e5ef; margin-top: 25px; padding-top: 25px;"><tr><td style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative;"><p style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; line-height: 1.5em; margin-top: 0; text-align: left; font-size: 14px;">Si tiene problemas para hacer clic en el boton "Restablecer la contraseña", copie y pegue la URL de abajo en su navegador: <span class="break-all" style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; word-break: break-all;"><a href="href="http://${process.env.API_FROND}:${process.env.PORT_FROND}/forget-password/${token}/${email}/" style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; color: #3869d4;">href="href="http://${process.env.API_FROND}:${process.env.PORT_FROND}/${token}/${email}/"</a></span></p></td></tr></table></td></tr></table></td></tr><tr><td style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative;"><table class="footer" align="center" width="570" cellpadding="0" cellspacing="0" role="presentation" style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; -premailer-cellpadding: 0; -premailer-cellspacing: 0; -premailer-width: 570px; margin: 0 auto; padding: 0; text-align: center; width: 570px;"><tr><td class="content-cell" align="center" style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; max-width: 100vw; padding: 32px;"><p style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; line-height: 1.5em; margin-top: 0; color: #b0adc5; font-size: 12px; text-align: center;">© ${Fecha} SI-SecSystem. All rights reserved.</p></td></tr></table></td></tr></table></td></tr></table></body></html>`,
  };
};

export const AsignacionLokerCustomers = (
  nombre,
  apellido,
  numero_casillero,
  email
) => {
  return {
    from: `<${process.env.MAIL_FROM_ADDRESS}>`,
    to: `<${email}>`,
    subject: "Notificación de restablecimiento de contraseña",
    html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml"><head><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta name="color-scheme" content="light"><meta name="supported-color-schemes" content="light"><style>@media  only screen and (max-width: 600px) {.inner-body {width: 100% !important;}.footer{width: 100% !important;}}@media  only screen and (max-width: 500px) {.button {width: 100% !important;}}</style></head><body style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; -webkit-text-size-adjust: none; background-color: #ffffff; color: #718096; height: 100%; line-height: 1.4; margin: 0; padding: 0; width: 100% !important;"><table class="wrapper" width="100%" cellpadding="0" cellspacing="0" role="presentation" style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; -premailer-cellpadding: 0; -premailer-cellspacing: 0; -premailer-width: 100%; background-color: #edf2f7; margin: 0; padding: 0; width: 100%;"><tr><td align="center" style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative;"><table class="content" width="100%" cellpadding="0" cellspacing="0" role="presentation" style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; -premailer-cellpadding: 0; -premailer-cellspacing: 0; -premailer-width: 100%; margin: 0; padding: 0; width: 100%;"><tr><td class="header" style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; padding: 25px 0; text-align: center;"><a href="#" style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; color: #3d4852; font-size: 19px; font-weight: bold; text-decoration: none; display: inline-block;"><img src="https://jetcargo.vip/wp-content/uploads/2021/11/cropped-JetCargo-png-file-e1637610869136.png"></a></td></tr><tr><td class="body" width="100%" cellpadding="0" cellspacing="0" style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; -premailer-cellpadding: 0; -premailer-cellspacing: 0; -premailer-width: 100%; background-color: #edf2f7; border-bottom: 1px solid #edf2f7; border-top: 1px solid #edf2f7; margin: 0; padding: 0; width: 100%;"><table class="inner-body" align="center" width="570" cellpadding="0" cellspacing="0"    role="presentation" style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; -premailer-cellpadding: 0; -premailer-cellspacing: 0; -premailer-width: 570px; background-color: #ffffff; border-color: #e8e5ef; border-radius: 2px; border-width: 1px; box-shadow: 0 2px 0 rgba(0, 0, 150, 0.025), 2px 4px 0 rgba(0, 0, 150, 0.015); margin: 0 auto; padding: 0; width: 570px;"><tr><td class="content-cell" style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; max-width: 100vw; padding: 32px;"><h1 style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; color: #3d4852; font-size: 18px; font-weight: bold; margin-top: 0; text-align: left;"></h1><h1 style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; color: #3d4852; font-size: 18px; font-weight: bold; margin-top: 0; text-align: left;"> Estimado(a) ${nombre} ${apellido} </h1> <p style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; font-size: 16px; line-height: 1.5em; margin-top: 0; text-align: left;"> Jetcargo le notifica que su pedido ha de creación de su casillero se realizo con exito. su numero de casillero es: ${numero_casillero}.</p>
    <p   style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; font-size: 16px; line-height: 1.5em; margin-top: 0; text-align: left;"> Si no solicitó un casillero virtual, le comunicamos que se ponga en contrando con los agentes, que con gusto lo etenderemos.</p>
    
    </td></tr></table></td></tr></table><pstyle="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; font-size: 16px; line-height: 1.5em; margin-top: 0; text-align: left;"> Saludos,<br>Jet-Cargo</pstyle=></td></tr></table></td></tr><tr><td style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative;"><table class="footer" align="center" width="570" cellpadding="0" cellspacing="0" role="presentation" style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; -premailer-cellpadding: 0; -premailer-cellspacing: 0; -premailer-width: 570px; margin: 0 auto; padding: 0; text-align: center; width: 570px;"><tr><td class="content-cell" align="center"style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; max-width: 100vw; padding: 32px;"><p style="box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; position: relative; line-height: 1.5em; margin-top: 0; color: #b0adc5; font-size: 12px; text-align: center;">© ${Fecha} SI-SecSystem. All rights reserved.</p></td></tr></table></td></tr></table></td></tr></table></body></html>`,
  };
};
