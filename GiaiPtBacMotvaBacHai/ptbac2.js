
function giaiptbac2()
{
    var hsa = parseInt(document.getElementById("hsa").value);
    var hsb = parseInt(document.getElementById("hsb").value);
    var hsc = parseInt(document.getElementById("hsc").value);
    if(isNaN(hsa)||isNaN(hsb)||isNaN(hsc))
    {
        alert("Bạn nhập số không hợp lệ mời bạn nhập lại");
    }
    else
    {
        if(hsa==0)
        {
            if(hsb==0)
            {
                if(hsc==0)
                {
                    alert("Phương trình có vô số nghiệm");
                }
                else{
                    alert("Phương trình vô nghiệm");
                }
            }
            else
            {
                alert("Nghiệm của phương trình là x = "+(-hsc/hsb));
            }
        }
        else{
            var denta;
            denta = (hsb*hsb)-(4*hsa*hsc);
            if(denta>0)
            {
                alert("Nghiệm thứ nhất là : x1=  "+((-hsb+Math.sqrt(denta))/(2*hsa)));
                alert("Nghiệm thứ hai là : x2 = "+((-hsb-Math.sqrt(denta))/(2*hsa)));
            }
            else{
                if(denta==0)
                {
                    alert("Phương trình có nghiệm kép x = "+(-((hsb)/(2*hsa))));
                }
                else{
                    alert("Phương trình vô nghiệm");
                }
            }
        }
    }
}