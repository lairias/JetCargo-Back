import twilio from "twilio"
import { HttpError } from "../../helpers/handleError"
 
const cliente = new twilio("AC9bddd5d23df762bdd707dd046693fc12","5f3512b32bb4f51ac635cd9be4f4c6c3")


export const CreateSms = async(body,to)=>{
    try{
        const mensaje = await  cliente.messages.create({
              body,
              to,
              "from":"+12052367152"})
              console.log(mensaje)

    }catch(error){
        const res={
            req:{
                method:{
                    'POST':'POST',
                }
            }
        }
        HttpError(res, error);
    }
}

