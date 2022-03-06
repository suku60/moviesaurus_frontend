
export const validations = (type,value) => {


    switch(type) {

        case 'email' :

            if (! /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value) ) {
                
                return "Invalid email";
            }else{
                return "valid";
            };
            
        
        case 'name': 

            if (! /[a-z]/gi.test(value) ) {
                return "Invalid name";
            }else{
                return "valid";
            };

        case 'username':  

            if (! /[a-z]/gi.test(value) ) {
                return "Invalid username";
            }else{
                return "valid";
            };

        // We're not using a phone yet. 

        // case 'phone':

        //     if (! /[\d()+-]/g.test(value) ) {
        //         return "Invalid phone";
        //     }else{
        //         return "valid";
        //     };

        // Add a case that returns an error message if a field is empty.

        default:
            return "valid";
        

    }
};


