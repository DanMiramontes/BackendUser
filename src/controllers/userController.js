module.exports = {
    show : async(req,res) =>{
        res.status(200).json({status:'OK',message: 'prueba'});
    }
}