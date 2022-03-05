function errorHandler(err, req, res, next){
    console.log(err);

    if (err.name === "SequelizeValidationError"){
        const message = err.errors.map(el =>{
        return el.message
    })
    res.status(400).json({message})
    }

    else if (err.name == 'Must be Admin') {
        res.status(400).json({message : 'Must be Admin'})
    }

    else if (err.name == 'invalid email or password') {
        res.status(401).json({message : 'invalid email or password'})
    }

    else if (err.name == 'belum login') {
        res.status(401).json({message : 'Unauthorized'})
    }

    else if (err.name == 'LOGIN GAGAL') {
        res.status(401).json({message : 'Login Gagal!'})
    }
    
    else if (err.name == 'forbidden'){
        res.status(403).json({message : "forbidden"})
    }

    else if (err.name === 'id not found'){
        res.status(404).json({"message" : "Not Found"})
    }

    else {
        res.status(500).json({message : "Server Disable"})
    }
}

module.exports = {errorHandler}