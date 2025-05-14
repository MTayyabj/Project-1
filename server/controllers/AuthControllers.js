import bcrypt from 'bcryptjs';
import Jwt from 'jsonwebtoken';
import userModel from '../models/UserModel.js';
import transporter from '../config/Nodemailer.js'
import nodemailer from 'nodemailer';

//REGISTER
export const register = async (req,res) => {
const {name,email, password} = req.body ;

if (!name || !email || !password) {
    return res.json({success: false , message:"Missing details"})
}

try {
const existingUser = await userModel.findOne({email})

if(existingUser){
    return res.json({success: false , message:"User already exist"})
}

const hashedPassword = await bcrypt.hash(password,2);
const user = new userModel({name, email, password: hashedPassword})
// const user = new userModel({name, email, password})
await user.save();

//GENERATING TOKEN
const token = Jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: '7d'});

res.cookie('token', token, {
    httpOnly:true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: "none",
    maxAge: 7 * 24 * 60 * 60 * 1000
});

    //SENDING MAIL
// const mailOptions = {
//     from: "tayyabarshad91018@gmail.com",
//     to: "dedicatedsapien7@gmail.com",
//     subject: 'WELCOME TO BETTER CHOICE',
//     text: 'Welcome to Better Choice your account has been created'
// }

//   await transporter.sendMail(mailOptions);

const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: "8a2a23002@smtp-brevo.com",
    pass: "HEfgRxVZ0k1v5D6C",
  },
});
async function main() {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: 'tayyabarshad91018@gmail.com', // sender address
      to: user.email, // list of receivers
      subject: "WELCOME", // Subject line
      text: "Welcome to our website", // plain text body
      //html: "<b>Hello world?</b>", // html body
    });
  
    console.log("Message sent: %s", info.messageId);
    // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
  }
  
  main().catch(console.error);
  console.log('SMTP_USER:', process.env.SMTP_USER);
  console.log('SMTP_PASS:', process.env.SMTP_PASS ? 'Loaded ✅' : 'Missing ❌');

return res.json({success:true})

}catch  (error){
    res.json({success:false,message:"Something went wrong"})
}
}
//LOGIN
export const login = async (req,res) => {
    const {email, password} = req.body ;

    if (!email || !password) {
        return res.json({success: false, message: 'Email and password are required' })
    }

    try {
        const user = await userModel.findOne({email});

        if (!user){
            return res.json({success: false, message: 'Invalid email' })
        } 
        const isMatch = await bcrypt.compare(password, user.password);
        // const isMatch = user.password;
        if (!isMatch){
            return res.json({success: false, message: 'Password incorrect' })
        }

        const token = Jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: '7d'});

        res.cookie('token', token, {
            httpOnly:true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict' ,
            maxAge: 7*24*60 *60 *1000
        });
        return res.json ({success: true});

    }
    catch (error) {
        res.json({success:false,message:error.message})
    }
}

export const logout = async (req,res)=> {
    try {
        res.clearCookie('token', {
            httpOnly:true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
        })
        return res.json ({success: true, message: "logged out"});
    }
    
    catch (error) {
        return res.json({success:false,message:error.message})
    }

}
//GENERATING AND SENDING OTP
export const sendVerifyOtp = async (req,res)=> {
    try {
        //WE NEED FOLLOWING DATA
        const {userId} = req.body ; 
        const user = await userModel.findById(userId);

        //IF USER IS ALREADY VERIFIED
        if (user.isAccountVerified){
            return res.json({success:false, message: "Account already verified"})
        }

        //IF USER IS NOT VERIFIED

        //*GENERATING OTP
       const otp = String(Math.floor (100000 + Math.random() * 900000));
        //*ASSIGNING
       user.verifyOtp = otp;
       //*EXPIRE AT
       user.verifyOtpExpireAt = Date.now() +24*60*60*1000
       
       await user.save();

        //SENDING MAIL
        // const mailOptions = {
        // from: process.env.SENDER_EMAIL,
        // to: email,
        // subject: 'Account varification OTP',
        // text: `Your otp is ${otp}. Verify your account`
        // }   
        // await transporter.sendMail(mailOptions);
        //     res.send({ success: true, message: 'Verification OTP sent in e-mail'});


            const transporter = nodemailer.createTransport({
                host: "smtp-relay.brevo.com",
                port: 587,
                secure: false, // true for port 465, false for other ports
                auth: {
                  user: "8a2a23002@smtp-brevo.com",
                  pass: "HEfgRxVZ0k1v5D6C",
                },
              });
              async function main() {
                  // send mail with defined transport object
                  const info = await transporter.sendMail({
                    from: 'tayyabarshad91018@gmail.com', // sender address
                    to: user.email, // list of receivers
                    subject: "Account varification OTP", // Subject line
                    text: `Your otp is ${otp}. Verify your account`, // plain text body
                    //html: "<b>Hello world?</b>", // html body
                  });
                
                  console.log("Message sent: %s", info.messageId);
                  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
                }
                
                main().catch(console.error);
        res.send({ success: true, message: 'Verification OTP sent in e-mail'});

    }

    catch (error) {
            res.json({success:false, message:error.message})
    }

}
//VERIFYING ACCOUNT
export const verifyEmail = async (req,res) => {

    //WE NEED FOLLOWING DATA
    // const {userId, otp} = req.body; //(we are getting userId from req.body , userId is stores in token, we can recieve that data from cookie, for that we need middleware function )
    const { otp } = req.body;
    const userId = req.body.userId; // userAuth middleware injects this
    //IF FORM IS EMPTY
    if (!userId || !otp) {
        return res.json({success: false, message: 'Missing details'});
    }

    //IF FORM IS FILLED
    try{

        const user = await userModel.findById(userId);

        console.log("Stored OTP:", user.verifyOtp);
        console.log("Entered OTP:", otp);

        //IF USER IS NOT FOUND
        if(!user) {
            return res.json({success: false, message:'User not found'})
        }

        //IF OTP IS INCORRECT
        if (  user.verifyOtp === ''|| user.verifyOtp !== otp) {
            return res.json ({success: false, message: 'Incorrect OTP '});
        }
        
        //IF OTP IS CORRECT BUT EXPIRED
        if (  user.verifyOtpExpireAt < Date.now()) {
            return res.json ({success: false, message: 'OTP expired'});
        }

        //IF OTP IS CORRECT
        user.isAccountVerified = true;

        //RE ASSIGNING DEFAULT VALUES
        user.verifyOtp = '';
        user.verifyOtpExpireAt  = 0;

        await user.save();

        return res.json({success: true, message:'Email verified successfully' })

    }
    catch(error){
       return res.json({success:false , message:error.message})
    }


}

export const isAuthenticated = async (req,res) => {
    try{
        return res.json ({success: true , })
    }
    catch (error) {
        res.json({success: false , message:error.message})
    }
}
// //SEND PASSWORD RESET OTP
export const sendResetOtp = async (req,res) => {
    //WE NEED FOLLOWING DATA
    const {email} = req.body;

    //IF FORM IS EMPTY
    if (!email) {
        return res.json ({success: false, messge: 'Email is required'})
    }

    //IF FORM IS FILLED
    try{
        const user = await userModel.findOne({email});

        //IF USER IS NOT FOUND
        if (!user) {
            return res.json({ success: false, message: 'User no found'});
        }

        //GENERATING NEW OTP
        const otp = String(math.floor (100000 + Math.random() * 900000));
    
        user.resetOtp = otp;
        user.resetOtpExpireAt = Date.now() +15*60*1000
        
        await user.save();
 
        // //SENDING MAIL
        // const mailOptions = {
        // from: process.env.SENDER_EMAIL,
        // to: user.email,
        // subject: 'Password reset OTP',
        // text: `Your otp is ${otp}. Verify your account`
        // }  
        // await transporter.sendMail(mailOptions);

        // res.json({ success: true, message: 'OTP sent to your e-mail'});

        const transporter = nodemailer.createTransport({
            host: "smtp-relay.brevo.com",
            port: 587,
            secure: false, // true for port 465, false for other ports
            auth: {
              user: "8a2a23002@smtp-brevo.com",
              pass: "HEfgRxVZ0k1v5D6C",
            },
          });
          async function main() {
              // send mail with defined transport object
              const info = await transporter.sendMail({
                from: 'tayyabarshad91018@gmail.com', // sender address
                to: user.email, // list of receivers
                subject: "Password reset OTP", // Subject line
                text: "Your otp is ${otp}. Verify your account", // plain text body
                //html: "<b>Hello world?</b>", // html body
              });
            
              console.log("Message sent: %s", info.messageId);
              // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
            }
            
            main().catch(console.error);


    }
    
    catch(error ) {
        res.json({success:false , message: message.error})
    }
}

// //RESET USER PASSWORD
// export const resetPassword = async (req,res) => {
//     //WE NEED FOLLOWING DATA
//     const {email, otp, newPassword} = req.body;

//     //IF FORM IS EMPTY
//     if (!email || !otp || !password) {
//         return res.json({success: false, message: 'Missing details'})
//     }

//     //IF FORM IS FILLED
//     try {
//         const user = await userModel.findOne({email});

//         //IF USER IS NOT FOUND
//         if (!user){
//             return res.json({success: false , message: 'User not found'})
//         }

//         //IF OTP IS NOT CORRECT
//         if (user.resetOtp ==="" || user.resetOtp !== otp) {
//             return res.json ({success:false, message: 'Invalid OTP'})
//         }

//         //IF OTP IS EXPIRED
//         if (user.resetOtpExpireAt < Date.now()) {
//             return res.json ({success:false, message: 'OTP Expired'})
//         }

//         //IF THE OTP IS CORRECT (CHANGING PASSWORD)
//             const hashedPassword = await bcrypt.hash(newPassword, 2);
            
//             user.password = hashedPassword;
//             user.resetOtp = '';
//             user.resetOtpExpireAt = 0 ;

//             await user.save();
//             return res.json ({success: true, message: 'Password changed successfully'})
    

//     }
//     catch(error) {
//         return res.json ({success:false , message: error.message});
//     }
// }


// RESET USER PASSWORD
export const resetPassword = async (req, res) => {
    // WE NEED FOLLOWING DATA
    const { email, otp, newPassword } = req.body;

    // IF FORM IS EMPTY
    if (!email || !otp || !newPassword) {
        return res.json({ success: false, message: 'Missing details' });
    }

    // IF FORM IS FILLED
    try {
        const user = await userModel.findOne({ email });

        // IF USER IS NOT FOUND
        if (!user) {
            return res.json({ success: false, message: 'User not found' });
        }

        // IF OTP IS NOT CORRECT
        if (user.resetOtp === '' || user.resetOtp !== otp) {
            return res.json({ success: false, message: 'Invalid OTP' });
        }

        // IF OTP IS EXPIRED
        if (user.resetOtpExpireAt < Date.now()) {
            return res.json({ success: false, message: 'OTP Expired' });
        }

        // IF THE OTP IS CORRECT (CHANGING PASSWORD)
        const hashedPassword = await bcrypt.hash(newPassword, 10);

        user.password = hashedPassword;
        user.resetOtp = '';
        user.resetOtpExpireAt = 0;

        await user.save();

        return res.json({ success: true, message: 'Password changed successfully' });
    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
};
