function cal() {
    let weight = +document.getElementById("weight").value;
    let height = +document.getElementById("height").value / 100;
    let bmi = weight / ( height * height ) ;
    let result = "";

    if (bmi < 18.5)
        result = "Under weight"
    else if (bmi < 25)
        result = "Normal"
    else if (bmi < 30)
        result = "Over weight"
    else
        result = "Obese"

    document.getElementById("result").innerHTML
        = "Chỉ số BMI là: " + bmi + "<br>" + ". Bạn đang " + result;
}