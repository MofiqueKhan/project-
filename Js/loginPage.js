const userName = document.querySelector(".UserName").value;
const password = document.querySelector(".password").value;
const submitButton = document.querySelector("#Submit-button");

// ----- Occur Click Event ------
submitButton.addEventListener("click", (page) => {
  page.preventDefault();

  if (userName.trim() === '' && password.trim() === '') {
   return alert("Please Fill all Details");
  }

  const redirect = confirm("Login Successful");
  // ----- Redirect on next page -----
  if(redirect){
    window.location.href = '../html/quizPage.html';
  }else{
    window.location.href = '../html/quizPage.html';
  }
  
});