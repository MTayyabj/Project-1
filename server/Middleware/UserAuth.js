    import jwt from "jsonwebtoken";

    const userAuth = async (req, res, next) => {
        //GETTING TOKEN FROM COOKIE
        const {token} = req.cookies;

        //IF TOKEN IS NOT AVAILABLE
        if (!token) {
            return res.json({success: false, message: 'Not Authorized. Login again' })
        }

        //IF TOKEN IS AVAILABLE
        try {
            //DECODING TOKEN
            const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
            
            req.body = req.body || {};

            //ASSIGNNIG VALUE TO userId 
            if (tokenDecode.id) {
                req.body.userId = tokenDecode.id
            }else{
                return res.json({
                    success: false, message: 'Not Authorized login again.'
                });

            }
            //CONTROLLER FUNCTION TAKE OVER
            next();


        } catch (error) {
            res.json({success:false, message:error.message})
        }
    }
    export default userAuth;