const operatorsList = [".","+","-","x","%"]
const buttons = document.querySelectorAll("button")
buttons.forEach(function(button){
    button.addEventListener("click",function(e){
        if(resultText.textContent.length >= 6){
            var textSizeControl = 60 - (resultText.textContent.length * 1.75)
            resultText.style.fontSize = `${textSizeControl}px`
        }
        if (!["C","="].includes(e.target.textContent)) {
            if(resultText.textContent === "0"){
                resultText.textContent = ""
            }
            if(resultText.textContent.length <= 15){
                if(!(operatorsList.filter(x => resultText.textContent.endsWith(x)).length > 0 && operatorsList.includes(e.target.textContent))){
                    if(!(resultText.textContent.length == 0 && operatorsList.includes(e.target.textContent))){              
                        resultText.textContent+=e.target.textContent
                    }
                }
            }
        }
        else if(e.target.textContent === "C"){
            resultText.textContent = "0"
            resultText.style.fontSize = "80px"
        }
        else if(e.target.textContent === "="){
            calcFunc(resultText.textContent)
        }
    })
})

const resultText = document.querySelector("#topContainer")
function calcFunc(calcInput){
    var result = eval(calcInput.replaceAll("x","*").replaceAll("%","/"))
    resultText.textContent = result.toString()
}