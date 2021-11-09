function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }

  //to open form

  function openForm() {
    document.getElementById("myForm").style.display = "block";
  }

  //to close form
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }