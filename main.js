document.addEventListener("DOMContentLoaded", ()=>{

  const seal = document.getElementById("seal");

  if(seal){
    seal.addEventListener("click", ()=>{
      document.body.classList.add("opening");
      setTimeout(()=>{
        window.location.href = "invitation.html";
      }, 1200);
    });
  }

  const yes = document.getElementById("yes");
  const no = document.getElementById("no");
  const message = document.getElementById("message");

  if(yes){
    yes.addEventListener("click", ()=>{
      message.style.opacity = 0;
      setTimeout(()=>{
        message.innerHTML = "Wonderful — we can't wait to celebrate with you!";
        message.style.opacity = 1;
      }, 200);
    });
  }

  if(no){
    no.addEventListener("click", ()=>{
      message.style.opacity = 0;
      setTimeout(()=>{
        message.innerHTML = "We'll miss you — thank you for letting us know.";
        message.style.opacity = 1;
      }, 200);
    });
  }

});
