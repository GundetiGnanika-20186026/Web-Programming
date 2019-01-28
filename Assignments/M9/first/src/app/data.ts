export class storage{
     datajs = [{

		"question": " 1) What is your name ?",
		"hint":["your name is your identity","your name is unique"],
        "options":["gnanika","khyathi","rishi"],
		"answer":"gnanika" ,


	},
	{
		"question": " 2) What is your name ?",
		"hint":["your name is your identity2","your name is unique"],
        "options":["gnanika","khyathi","rishi"],
		"answer":"True" ,


	},

	{
		"question": " 3) What is your name ?",
		"hint":["your name is your identity3","your name is unique"],
        "options":["gnanika","khyathi","rishi"],
		"answer":"True" ,


	},

	{
		"question": " 4) What is your name ?",
		"hint":["your name is your identity4","your name is unique"],
        "options":["gnanika","khyathi","rishi"],
		"answer":"gnanika" ,


	},
	{
		"question": " 5) What is your name ?",
		"hint":["your name is your identity","your name is unique"],
        "options":["gnanika","khyathi","rishi"],
		"answer":"True" ,


	}
	];



	getquestions(){
		return this.datajs;
	}
}

