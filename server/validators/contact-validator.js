const {z} = require("zod");

//  object schema
const contactschema = z.object ({
    mobileNumber: z
    .string({required_error: "number is required"})
    .trim()
    .min(10, {message: "number should have at least 10 chracters"})
    .max(20, {message: "number must not have more than 20 chraracters"}),
    email: z
    .string({required_error: "email is required"})
    .trim()
    .email({message: "invalid email address"})
    .min(4, {message: "email should have at least 4 chracters"})
    .max(255, {message: "email must not have more than 255 chraracters"}),
    subject: z
    .string({required_error: "subject is required"})
    .trim()
    .max(400, {message: "subject must not have more than 400 chraracters"}),
    details: z
    .string({required_error: "details are required"})
    .trim()
    .max(1000, {message: "dtails must not have more than 1000 chraracters"}),
    })

module.exports = contactschema;