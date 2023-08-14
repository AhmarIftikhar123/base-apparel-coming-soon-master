window.addEventListener("DOMContentLoaded", () => {
  let mobile_img = () => {
    let window_width = window.innerWidth;
    let img_dp = document.querySelector("#right_side_img img");

    let bgi_url =
      window_width < 425 ? "images/hero-mobile.jpg" : "images/hero-desktop.jpg";

    img_dp.setAttribute("src", bgi_url);
  };
  window.addEventListener("resize", mobile_img);

  let form = document.querySelector("form");

  form.addEventListener("submit", (eve) => {
    let user_input = document.querySelector(".user_input_box input");
    let validator = true;
    if(user_input.value.trim() === ''){
      showerror("This field is required");
      validator = false;
    }
    else if (!isvalidemail(user_input.value.trim())) {
      showerror( "Please! provide a valid Email");
      validator = false;
    } else {
        hideerror();
    } 
    if (!validator) {
      eve.preventDefault();
    }
  });
  let showerror = ( errmsg) => {
 let error_output = document.getElementById('output');
    error_output.style.display = "block";
    error_output.textContent = errmsg;
    error_output.style.color = "red";
  };

  let hideerror = ()=>{
 let error_output = document.getElementById('output');
    error_output.style.display = "none";
  }
  let isvalidemail = (email)=>{
    let valiemailpattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return valiemailpattern.test(email);
  }
});
