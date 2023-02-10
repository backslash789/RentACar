

function openNavup() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNavup() {
  document.getElementById("myNav").style.height = "0%";
}


/* Set the width of the side navigation to 250px */
function openNavside() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNavside() {
  document.getElementById("mySidenav").style.width = "0";
}




function result() {

  // console.log(myphone.value);
  // alert(myphone.value);
  // alert(typeof myphone.value);
  var myname = document.getElementById('myname');
  var myphone = document.getElementById('myphone');
  var myemail = document.getElementById('myemail');
  var mylocation = document.getElementById('location');
  var mystarttime = document.getElementById('starttime');
  var myendtime = document.getElementById('endtime');
  var subsmystarttime = new Date(mystarttime.value);
  var subsmyendtime = new Date(myendtime.value);
  var diff = Math.ceil((subsmyendtime - subsmystarttime) / 86400000);
  var mycar = document.getElementById("myselect");
  // alert(typeof mycar);



  if (myname.value == "") {
    alert("請輸入姓名");
  }
  else if (myphone.value.length != 10) {
    alert("手機號碼不符合格式");
  }
  else if (myphone.value.indexOf("0") != 0) {
    alert("手機號碼不符合格式");
  }
  else if (myphone.value.indexOf("9") != 1) {
    alert("手機號碼不符合格式");
  }
  else if (myemail.value.indexOf("@gmail.com") == -1) {
    alert("Email不符合格式");
  }
  else if (mystarttime.value.indexOf("2022") == -1) {
    alert("請輸入開始預約日期");
  }
  else if (myendtime.value.indexOf("2022") == -1) {
    alert("請輸入結束預約日期");
  }
  else {
    $("form").submit(function () {
      alert(`您預約的車款 : ${mycar.value}
取車地點 : ${mylocation.value}
預約開始時間 : ${mystarttime.value}
預約結束時間 : ${myendtime.value}
租借時間 : ${diff}天`);
      // alert("自動跳轉至首頁");
    })
    // document.location.href = "../HTML/homepage.html";
  }
  // var myname = document.getElementById('myname').value;
  // alert(myname);






  // if (myname === "text" | myphone === "text") {
  //   alert("您有欄位未輸入");
  // }
  // else {}
  //   alert(`您預約的車款2 : ${mycar.value}
  // 取車地點 : ${mylocation.value}
  // 預約開始時間 : ${mystarttime.value}
  // 預約結束時間 : ${myendtime.value}`);

  // alert("2秒後跳轉至首頁");

  // setTimeout(function () {
  //   alert("A");
  // }, 3000)


  // $(window).load(function () {
  //   var submit = false;
  //   $("form").submit(function (e) {
  //     setTimeout(function () {
  //       alert("me after 1000 mili seconds");
  //       submit = true;
  //       $("form").submit(); // if you want            
  //     }, 1000);
  //     if (!submit)
  //       e.preventDefault();
  //   });
  // });

}


