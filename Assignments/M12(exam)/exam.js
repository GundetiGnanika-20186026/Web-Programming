
var data = {



	"results":[{
        "secretkey":"hat",



	},

	]
};

function check()
    {
    	if(document.getElementById('name').value==""){
    		alert ("Please Enter your name");
            return false;

    	}

        if (document.getElementById('btn_move').value==""
         || document.getElementById('btn_move').value==undefined)
        {
            alert ("Please Enter Comment");
            return false;
        }
        if(document.getElementById('pass1').value == ""){
        	alert ("Please Enter password");
            return false;
        }

        else if (document.getElementById('pass1').value !== data.results[0].secretkey){
        	alert ("Incorrect Password");
        	return false;

        }
        return true;
    }






