let cart_data= JSON.parse(localStorage.getItem("course_cart"))
    console.log(cart_data)
      var total=0;
      cart_data.forEach(function(course){
          
        let div= document.createElement("div")
       let course_name=document.createElement("p")
      course_name.innerText=course.name;
      let course_price=document.createElement("p");
      course_price.innerText=course.price;
       let image = document.createElement("img");
       image.src=course.image;
       image.style.width="150px";
       div.append(image ,course_name,course_price);



      document.getElementById("cart").append(div);
      
      total= total+ Number(course.price);
      
    
      });
     document.getElementById("amountvalue").append(total)
      

     var  cgst =Math.ceil((total*0.09));
       document.getElementById("cgstvalue").innerHTML=cgst;
       var sgst=Math.ceil(total*0.09);
        document.getElementById("sgstvalue").innerHTML=sgst;
        var final = Math.ceil(total+(cgst+sgst));

        var finalvalue=document.createElement("p")
         console.log(finalvalue)

        finalvalue.innerHTML=final;
        document.getElementById("total").append(finalvalue)
   
        var final_object = localStorage.setItem("final_cost", JSON.stringify(final));