import Validator from 'validator'
import isEmpty from 'lodash/isEmpty'
export default(model, key='')=>{

	const errors ={}

		
	if(!Validator.isEmail(model.email)){
		errors.email = true
	}

	if(isEmpty(model.password)){
		errors.password = true
	}

	if(key==="two"){
	if(isEmpty(model.repassword)){
		errors.repassword = true
	}

	if(model.password !== model.repassword){
		errors.another = true
	}
}

	return{
		errors,
		isValid: isEmpty(errors)
	}
}
