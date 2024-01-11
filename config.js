const mode = "PROD"

const URL_API = mode == 'PROD' 
? 'https://backendutn-2023-1.onrender.com' 
: 'http://localhost:8080'

export{URL_API}