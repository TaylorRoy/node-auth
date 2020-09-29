//provides general config infomation about server

export const {
    NODE_ENV = 'development',
    APP_PORT = 3000
} = process.env;

//check if NODE_ENV is production or development and export boolean
export const IN_PROD = NODE_ENV === "prduction"