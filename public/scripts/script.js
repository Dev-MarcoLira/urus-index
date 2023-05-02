const pwdField = document.querySelector('input[name="password"]')
pwdField.addEventListener('blur', (event)=>{
    stylisePasswordField(verifyPasswordStrength())
})


function styliseCpfField(){

    const botaoCpf = document.querySelector('input[name=cpf]')

    if(validateCpf(botaoCpf.value)){
      botaoCpf.classList.add("right")
      botaoCpf.classList.remove("wrong")
      
    }else{
      botaoCpf.classList.add("wrong")
      botaoCpf.classList.remove("right")
      
    }
}

function validateCpf(cpf){

    var numeros, digitos, soma, i, resultado, digitos_iguais
    digitos_iguais = 1

    if (cpf.length < 11)
        return false

    for (i = 0; i < cpf.length - 1; i++){

        if (cpf.charAt(i) != cpf.charAt(i + 1))
        {
            digitos_iguais = 0
            break

        }
    }

    if (!digitos_iguais)
    {
        numeros = cpf.substring(0,9)
        digitos = cpf.substring(9)
        soma = 0

        for (i = 10; i > 1; i--)
            soma += numeros.charAt(10 - i) * i

        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11

        if (resultado != digitos.charAt(0))
            return false

        numeros = cpf.substring(0,10)
        soma = 0

        for (i = 11; i > 1; i--)
            soma += numeros.charAt(11 - i) * i

        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11

        if (resultado != digitos.charAt(1))
            return false
        
        return true

    }else
        return false

}


function verifyPasswordStrength() 
{
	var numbers = /([0-9])/
	var alphabet = /([a-zA-Z])/
	var specialChars = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])/

    const password = document.querySelector("input[name=password]").value
	if(password.length<6) 
	{
        return 'short'
	} else {  	
		if(password.match(numbers) && password.match(alphabet) && password.match(specialChars))
		{            
			return 'strong'
		} else {
            return 'weak'
		}
	}
}


function stylisePasswordField(pwdState){

    if(pwdState === 'short'){

        setCustomization('wrong', 'This password is too short!')
        pwdField.classList.remove('right')
        pwdField.classList.remove('intermediate')

    }else if(pwdState === 'strong'){

        setCustomization('right', 'This password satisfies our requirements.')
        pwdField.classList.remove('wrong')
        pwdField.classList.remove('intermediate')


    }else if(pwdState === 'weak'){

        setCustomization('intermediate', 'This password is weak!!')
        pwdField.classList.remove('wrong')
        pwdField.classList.remove('right')
    }

}

function setCustomization(fieldClass, msg){

    const span = document.createElement('span')
    span.innerText = msg
    pwdField.classList.add(fieldClass)
    document.querySelector('form > .useless').appendChild(span)

}







function matchTwoPasswords()
{
    const v1=document.querySelector('input[id=password]')
    const v2=document.querySelector('input[id=senha]')

    if (v2.value === v1.value)
    {
        v2.setCustomValidity('')
        stylisePasswordField(true)
    } else 
    {
        v2.setCustomValidity('Two different passwords!')
        stylisePasswordField(false)
    }

}