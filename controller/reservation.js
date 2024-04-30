import { Errorhandler } from "../error/error.js";
import { Reservation } from "../models/reservationSchema.js";

export const sendReservation=async(req,res,next)=>{
    const {firstName,LastName,email,phone,date,time}=req.body;

    if (!firstName || !LastName || !email || !phone || !date || !time) {
        return next(new Errorhandler("Please fill all fields in the reservation form!", 400));
    }
    
    try {
        await Reservation.create({ firstName, LastName, email, phone, date, time });
     
        res.status(201).json({
            success:true,
            message:"Reservation successfully!",
        });
    } catch (error) {
        if(error.name==="ValidationError"){
            const ValidationErrors=Object.values(error.errors).map(
                (err)=>err.message);
                return next(new Errorhandler(ValidationErrors.join(','),400));
        };
        return next(error);
    }
};