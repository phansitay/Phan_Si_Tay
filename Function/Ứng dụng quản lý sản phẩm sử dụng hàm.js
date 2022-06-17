var a=["Bánh ngọt","Kem","Phồng Tôm"];
function hienthi()
{
    document.getElementById("sp").innerText=a;
}
function add()
{
    var add=document.getElementById("add").value;
    a.push(add);
    hienthi();
}
function xoa()
{
    var dem=0
    var dlt=document.getElementById("delete").value;
    for(var i=0;i<a.length;i++)
    {
        if(a[i]==dlt)
        {
            a.splice()
            dem++;
        }
        dem++
    }
    if(dem==0)
    {
        alert("Không tìm thấy sản phẩm");
    }
}

