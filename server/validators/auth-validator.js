const {z} = require("zod");

//  object schema
const signupschema = z.object ({
    email: z
    .string({required_error: "email is required"})
    .trim()
    .email({message: "invalid email address"})
    .min(4, {message: "email should have at least 4 chracters"})
    .max(255, {message: "email must not have more than 255 chraracters"}),
    password: z
    .string({required_error: "password is required"})
    .min(8, {message: "for password minimum 8 characters are required"})
    .max(16, {message: "for password maximum limit of characters is 16"})
    ,
    })

    const loginschema = z.object ({
        email: z
        .string({required_error: "email is required"})
        .trim()
        .email({message: "invalid email address"})
        .min(4, {message: "email should have at least 4 chracters"})
        .max(255, {message: "email must not have more than 255 chraracters"}),
        password: z
        .string({required_error: "password is required"})
        .min(8, {message: "for password minimum 8 characters are required"})
        .max(16, {message: "for password maximum limit of characters is 16"})
        ,
        })

module.exports = { signupschema, loginschema };