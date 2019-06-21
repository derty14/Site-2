
//modal
 $(".but").on("click",function(){
  $("#modal, #modalarea").fadeIn(500);

});
window.onclick=function(event){
  if (event.target.getAttribute("class")=='modal'){
    $("#modal, #modalarea").fadeOut();
  }
}
document.getElementById("close").onclick=function(){
  $("#modal, #modalarea").fadeOut();
}
function send (){
  $("#error").hide();
  $("#success").hide();
($("#name").val()=="")? document.getElementById("error").style.display="block" : (!$("#tel").val())? document.getElementById("error").style.display="block" : (!$("#message").val())? document.getElementById("error").style.display="block" :(!$("#politics").is(":checked"))? $("#error").show()  :
$.ajax ({
    url: "mail.php",
    type: "POST",
    data: ({name: $("#name").val(), tel: $("#tel").val(), usluga: $("#usluga").val(),message: $("#message").val() }),
    dataType: "html",
    beforeSend: function (){
      $("#success").show();
    },
  });
}
