export const logger = (req, res, next) =>{
    const date = new Date().toISOString();
    console.log(`this req was performed on ${date} and the method is ${req.method},
    the url is ${req.url}`);
     next();
}