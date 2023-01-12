
function cancellation() 
{
   
   document.getElementById("bookname").value="";
   document.getElementById("authormail").value="";
   document.getElementById("authorname").value="";
   document.getElementById("published").value="";
   document.getElementById("price").value="";
   
}
function store()
{
   var category=document.getElementById('dropdown').value 
   var bookname=document.getElementById('bookname').value;
   var authormail=document.getElementById('authormail').value;
   var authorname=document.getElementById('authorname').value;
   var published=document.getElementById('published').value;
   var price=document.getElementById('price').value;
   sessionStorage.setItem('bookname',bookname);
   sessionStorage.setItem('category',category);
   sessionStorage.setItem('authormail',authormail);
   sessionStorage.setItem('authorname',authorname);
   sessionStorage.setItem('published',published);
   sessionStorage.setItem('price',price);
} 
function Display()
{

    var id = document.getElementById('page2');
    let html = `
   <p style="font:bold 16px arial";>${sessionStorage.getItem('bookname')}Book Details</p>
   <table>
    <tr>
    <td><p class="category" style="font:bold 16px arial";>Category</p></td>
    <td><p class="option" style="font:lighter; 16px arial";>${sessionStorage.getItem('category')}</p></td>
    </tr>
    <tr>
    <td><p class="book" style="font:bold 16px arial";>Book Name</p></td>
    <td><p  style="font:lighter 16px arial";>${sessionStorage.getItem('bookname')}</p></td>
    </tr>
    <tr>
    <td><p class="author" style="font:bold 16px arial";>Author Mail</p></td>
    <td><p  style="font:lighter 16px arial";>${sessionStorage.getItem('authormail')}</p></td>
    </tr>
    <tr>
    <td><p class="authorname" style="font:bold 16px arial";>Author Name</p></td>
    <td><p  style="font:lighter 16px arial";>${sessionStorage.getItem('authorname')}</p></td>
    </tr>
    <tr>
    <td><p class="published" style="font:bold 16px arial";>Published</p></td>
    <td><p  style="font:lighter 16px arial";>${sessionStorage.getItem('published')}</p></td>
    </tr>
    <tr>
    <td><p class="price" style="font:bold 16px arial";>Price</p></td>
    <td><p  style="font:lighter 16px arial";>${sessionStorage.getItem('price')}</p></td>
    </tr>
    </table>
   <br>
   <br>
   <br>
   <hr></hr>
   <p style="font-weight: bold;" class="footer" >Copyrights@2019 - present Syncfusion</p>
   

   `;
    id.innerHTML = html;
}


function bookname()
{
    let user=document.getElementById('bookname').value;
    let box=document.getElementById('bookname');
    let rejex=/\d/;
    if(rejex.test(user))
    {
        box.style.border="red solid 1px";
        document.getElementById('bookname').value="Enter Valid Book Name";
        return false;
    }
    else if(user.length>50)
    {
        box.style.border="red solid 1px";
        document.getElementById('bookname').value="Enter Valid Book Name";
        return false;
    }
    else 
    {
        box.style.border="black solid 2px";
        return true;
    }
}
function clearbookname()
{
    if(document.getElementById('bookname').value=="Enter Valid Book Name")
    {
        document.getElementById('bookname').value="";
    }
}

function checkmail()
{
    let user=document.getElementById('authormail').value;
    let box=document.getElementById('authormail');
    let rejex=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    let result=user.match(rejex);
    if(result!=null)
    {
        box.style.border="black solid 1px";
        return true;
    }
    else 
    {
        box.style.border="red solid 2px";
        document.getElementById('authormail').value="Enter Valid Email ID";
        return false;
    }
}
function clearmail()
{
    if(document.getElementById('authormail').value=="Enter Valid Email ID")
    {
        document.getElementById('authormail').value="";
    }
}

function checkname()
{
    let user=document.getElementById('authorname').value;
    let box=document.getElementById('authorname');
    let rejex=/\d/;
    let rejex1=/[-/~!#*$@_%+=.,^&(){}[\]|;:"<>?\\]/;
    if(rejex.test(user))
    {
        box.style.border="red solid 1px";
        document.getElementById('authorname').value="Enter Valid Name";
        return false;
    }
    else if(user.length>50) 
    {
        box.style.border="red solid 1px";
        document.getElementById('authorname').value="Enter Valid Name";
        return false;
    }
    else if(rejex1.test(user))
    {
        box.style.border="red solid 1px";
        document.getElementById('authorname').value="Enter Valid Name";
        return false;
    }
    else 
    {
        box.style.border="black solid 2px";
        return true;
    }
}
function clearname()
{
    if(document.getElementById('authorname').value=="Enter Valid Name")
    {
        document.getElementById('authorname').value="";
    }
} 

function publish()
{
    let date=document.getElementById('published').value;
    let box= document.getElementById('published');
    if(isNaN(date)||date>2023)
    {
        box.style.border="red solid 1px";
        document.getElementById('published').value="Enter Valid Year Of Publish";
        return false;
    }
    else 
    {
        box.style.border="black solid 2px";
        return true;
    }
}
function clearyear()
{
    if(document.getElementById('published').value=="Enter Valid Year Of Publish")
    {
        document.getElementById('published')="";
    }
}
function price()
{
    var date=document.getElementById('price').value;
    var box=document.getElementById('price');
    if(isNaN(date))
    {
        box.style.border="red solid 1px";
        document.getElementById('price').value="Enter Valid Amount";
        return false;
    }
    else 
    {
        box.style.border="black solid 1px";
        return true;
    }
}
function clearprice()
{
    if(document.getElementById('price').value=="Enter Valid Amount")
    {
        document.getElementById('price').value=="";
    }
}


