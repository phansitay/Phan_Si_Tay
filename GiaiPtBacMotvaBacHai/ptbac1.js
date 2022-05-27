
function giaiPtbac1()
{
    var hsa = document.getElementById("hsa").value;
    var hsb = document.getElementById("hsb").value;
    alert(hsa)
    alert(hsb)
    if(isNaN(hsa)||isNaN(hsb))
    {
        alert("Bạn nhập số không hợp lệ mời bạn nhập lại");
    }
    else{
        if(hsa==0)
        {
            if(hsb==0)
            {
                alert("Phương trình có vô số nghiệm");
            }
            else{
                alert("Phương trình vô nghiệm");
            }
        }
        else
        {
            alert("Nghiệm của phương trình là x = "+(-hsb/hsa));
        }
    }
}