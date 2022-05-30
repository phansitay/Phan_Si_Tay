function bmi()
{
    var height = parseFloat(document.getElementById("height").value);
    var weight = parseFloat(document.getElementById("weight").value);
    var bmi = weight/(height*height);
    if (bmi < 18)
    alert("bmi là : "+bmi+" Underweight");
    else if (bmi < 25.0)
        alert("bmi là : "+bmi+" Normal");
        else if (bmi < 30.0)
            alert("bmi là : "+bmi+" Overweight");
            else
                alert("bmi là : "+bmi+" Obese");
}