function convert()
{
    var input = document.getElementById("money").value;
    var from = document.getElementById("from").value;
    var to = document.getElementById("to").value;
    if(input<=0||isNaN(input))
    {
        alert("Bạn nhập không hợp lệ mời bạn nhập lại");
    }
    else
    {
        if(from =="VND"&& to=="USD")
        {
            alert("Số tiền là : "+input/23000);
        }
        else
        {
            if(from=="USD"&& to=="VND")
            {
                alert("Số tiền là: "+input*23000);
            }
            else{
                if((from=="USD"&& to=="USD")||(from=="VND"&& to=="VND"))
                {
                    alert("Bạn đã chuyển cùng loại tiền")
                }
            }
        }
    }
}