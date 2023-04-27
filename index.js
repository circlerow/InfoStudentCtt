let student={
    fullname: "Hoàng Đức Thành",
    gender: "Nam",
    start_year:"2020",
    classs: "Khoa học máy tính 05",
    tertiary_education: "Đại học đại trà",
    program: "Khoa học máy tính",
    course: "65",
    school:"Trường công nghệ thông tin và truyền thông",
    email:"thanh.hd204689@sis.hust.edu.vn",
    status:"Học",
    url_avt:"avt.png"
}

var info={...student};
var infott={...student};
            
function edit(){
  var editForm=document.getElementById("editForm");
  editForm.style.zIndex="10";
  editForm.style.display="";

  document.getElementById("fullname").value=info.fullname;
  document.getElementById("admission-year").value=info.start_year;
  document.getElementById("tertiary-education").value=info.tertiary_education;
  document.getElementById("study-status").value=info.program;
  document.getElementById("study-status-school").value=info.school;
  document.getElementById("learn-status").value=info.status;
  document.getElementById("class").value=info.classs;
  document.getElementById("course").value=info.course;
  document.getElementById("email").value=info.email;
  document.getElementById("gender").value=info.gender;
  document.getElementById("avt_edit").src=info.url_avt;
  document.getElementById("url_avt").value="";
}

function luu(){
  var editForm=document.getElementById("editForm");
  editForm.style.zIndex="-10";
  editForm.style.display="none";

  console.log(info);
  document.getElementById("ttfullname").innerText=info.fullname;
  document.getElementById("ttadmission-year").innerText=info.start_year;
  document.getElementById("tttertiary-education").innerText=info.tertiary_education;
  document.getElementById("ttstudy-status").innerText=info.program;
  document.getElementById("ttstudy-status-school").innerText=info.school;
  document.getElementById("ttlearn-status").innerText=info.status;
  document.getElementById("ttclass").innerText=info.classs;
  document.getElementById("ttcourse").innerText=info.course;
  document.getElementById("ttemail").innerText=info.email;
  document.getElementById("ttgender").innerText=info.gender;
  document.getElementById("ttavt").src=info.url_avt;
  console.log(document.getElementById("ttavt").src);
  infott={ ...info};
}

function ok(){
  info.fullname=document.getElementById("fullname").value;
  info.start_year=document.getElementById("admission-year").value;
  info.tertiary_education=document.getElementById("tertiary-education").value;
  info.program=document.getElementById("study-status").value;
  info.school=document.getElementById("study-status-school").value;
  info.status=document.getElementById("learn-status").value;
  info.classs=document.getElementById("class").value;
  info.course=document.getElementById("course").value;
  info.email=document.getElementById("email").value;
  info.gender=document.getElementById("gender").value;
  info.url_avt=document.getElementById("avt_edit").src;
}


function cancel(){
  info={ ...infott};
  luu();
}

function reset(){
  info={ ...student};
  luu();
}