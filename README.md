
<!doctype html>
<html lang="vi">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Én Việt Travel | Cổng thanh toán trực tuyến Én Việt</title>

<style>
:root{
  --blue:#1769e9;
  --red:#d62835;
  --green:#168448;
  --line:#dfe5eb;
}

*{
  box-sizing:border-box;
}

body{
  margin:0;
  background:#fff;
  font:14px/1.6 Arial,sans-serif;
  color:#222;
}

.wrap{
  max-width:820px;
  margin:24px auto;
  padding:0 12px;
}

.panel{
  background:white;
  border:1px solid #e3e7ed;
  border-radius:15px;
  overflow:hidden;
  box-shadow:0 10px 30px #123e5d14;
}

/* PHẦN 1 - TIÊU ĐỀ */

.header{
  padding:30px 20px 22px;
  text-align:center;
}

.header h1{
  margin:0 0 23px;
  color:#1569eb;
  font-size:26px;
  font-weight:800;
  line-height:1.4;
}

.payment-brands{
  display:flex;
  justify-content:center;
  align-items:center;
  gap:27px;
}

.vnpay{
  font-size:28px;
  font-weight:900;
  color:#e3263d;
  letter-spacing:-1px;
}

.vnpay small{
  display:block;
  color:#1475c7;
  font-size:11px;
  letter-spacing:0;
  font-weight:600;
}

.brand-divider{
  width:1px;
  height:48px;
  background:#d4d9df;
}

.vietqr-brand{
  font-size:29px;
  color:#19569a;
  font-weight:900;
}

.vietqr-brand span{
  color:#df263c;
}

/* NỘI DUNG CHUNG */

.body{
  padding:8px 28px 30px;
}

.hidden{
  display:none!important;
}

.summary{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:14px 20px;
  background:#fff;
  border:1px solid var(--line);
  border-radius:11px;
  padding:17px;
  margin:10px 0 24px;
}

.summary small{
  display:block;
  color:#707781;
  font-size:11px;
  margin-bottom:3px;
}

.summary b{
  display:block;
  color:#172f43;
  font-size:13px;
  overflow-wrap:anywhere;
}

.section-title{
  margin:18px 0 14px;
  color:#25384e;
  font-size:17px;
  font-weight:800;
}

/* PHẦN 2 - PHƯƠNG THỨC THANH TOÁN */

.option{
  display:flex;
  align-items:center;
  gap:13px;
  min-height:60px;
  padding:15px 17px;
  margin-bottom:11px;
  border:1px solid #dfe4ea;
  border-radius:10px;
  background:#fff;
  color:#30343a;
}

.option input{
  margin:0;
  width:17px;
  height:17px;
  accent-color:#1769e9;
  flex-shrink:0;
}

.option b{
  font-size:14px;
  font-weight:700;
}

.option.active{
  border:2px solid #dce5f3;
  color:#174b82;
}

.option.active input{
  accent-color:#1769e9;
}

.option.disabled{
  color:#78828d;
}

.option.disabled input{
  opacity:.55;
}

/* PHẦN 3 - CHUYỂN KHOẢN VÀ VIETQR */

.payment{
  margin-top:22px;
  background:#fff;
  border:1px solid #dfe4e9;
  border-radius:12px;
  padding:20px;
}

.payment-heading{
  display:flex;
  flex-wrap:wrap;
  align-items:center;
  gap:9px;
  font-size:18px;
  font-weight:800;
  color:#171717;
  margin:0 0 14px;
}

.payment-heading:before{
  content:"◉";
  color:#1769e9;
  font-size:18px;
}

.payment-heading em{
  color:#25864d;
  font-size:13px;
  font-weight:400;
}

.instruction{
  font-size:13px;
  line-height:1.75;
  color:#526374;
  margin:0 0 20px;
}

/* QR ĐẶT SÁT BÊN PHẢI */

.payrow{
  display:grid;
  grid-template-columns:minmax(0,1fr) 182px;
  gap:8px;
  width:100%;
  align-items:start;
}

/* 5 MỤC THÔNG TIN IN ĐẬM */

.data{
  margin:0;
  padding:0 10px 0 0;
}

.data-group{
  margin:0 0 18px;
}

.data-group:last-child{
  margin-bottom:0;
}

.data dt{
  font-size:15px;
  line-height:1.5;
  font-weight:800;
  color:#151515;
  margin-bottom:4px;
}

.data dd{
  margin:0;
  color:#222;
  font-size:14px;
  font-weight:600;
  min-height:12px;
  overflow-wrap:anywhere;
}

.data .amount{
  font-size:19px;
  font-weight:800;
  color:#1769e9;
}

.transfer-inline{
  display:flex;
  flex-wrap:wrap;
  align-items:center;
  gap:9px;
}

.copy-inline{
  border:0;
  background:transparent;
  color:#1769e9;
  font-size:14px;
  font-weight:800;
  cursor:pointer;
  padding:0;
}

.copy-inline:hover{
  text-decoration:underline;
}

.copy-inline:disabled{
  color:#a8b4c0;
  cursor:not-allowed;
}

/* QR VUÔNG, SÁT MÉP PHẢI */

.qrbox{
  width:100%;
  min-height:192px;
  aspect-ratio:1/1;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  gap:5px;
  border:1px solid #dae2ea;
  border-radius:9px;
  background:white;
  padding:9px;
  text-align:center;
}

.qrbox img{
  display:block;
  width:100%;
  height:auto;
  max-height:163px;
  object-fit:contain;
}

.qrbox .qr-title{
  font-size:16px;
  font-weight:900;
  color:#175397;
}

.qrbox .qr-title span{
  color:#e2253b;
}

.qrbox small{
  font-size:10px;
  line-height:1.5;
  color:#6b7785;
  overflow-wrap:anywhere;
}

/* TÀI KHOẢN NGÂN HÀNG KHÁC */

.other-bank{
  margin-top:18px;
}

.other-bank button{
  border:0;
  background:transparent;
  color:#1769e9;
  padding:0;
  font-size:13px;
  font-weight:700;
  text-decoration:underline;
  cursor:pointer;
}

.other-bank-list{
  margin-top:11px;
  padding:12px;
  border:1px solid #e0e7ed;
  border-radius:8px;
  background:white;
}

.other-bank-item{
  font-size:12px;
  line-height:1.7;
  padding:9px 0;
  border-bottom:1px solid #edf0f3;
}

.other-bank-item:last-child{
  border-bottom:0;
}

/* LƯU Ý */

.notice{
  margin-top:18px;
  padding:13px 15px;
  background:#f2f8ff;
  border-left:3px solid #1769e9;
  border-radius:4px;
  color:#355672;
  font-size:12px;
  line-height:1.8;
}

/* PHẦN 4 - BA NÚT CHỨC NĂNG */

.buttons{
  display:grid;
  grid-template-columns:repeat(3,minmax(0,1fr));
  gap:12px;
  margin:25px 0;
}

.buttons button{
  min-height:62px;
  border:0;
  border-radius:9px;
  color:#fff;
  font:700 14px Arial,sans-serif;
  padding:12px 7px;
  cursor:pointer;
}

.buttons button:hover{
  filter:brightness(.95);
}

#saveImage{
  background:#d62835;
}

#saveQr{
  background:#1769e9;
}

#copy{
  background:#168448;
}

.buttons button:disabled{
  opacity:.5;
  cursor:not-allowed;
}

/* PHẦN 5 - THÔNG TIN NGÂN HÀNG */

.fields{
  background:white;
  border:1px solid #e1e6ed;
  border-radius:11px;
  padding:20px;
}

.fields h2{
  margin:0 0 10px;
  color:#18496d;
  font-size:17px;
  font-weight:800;
}

.fields p{
  margin:0 0 17px;
  color:#6c7783;
  font-size:12px;
}

.field{
  margin-bottom:15px;
}

.field:last-child{
  margin-bottom:0;
}

.field label{
  display:block;
  color:#191919;
  font-size:14px;
  font-weight:800;
  margin-bottom:6px;
}

.field input{
  width:100%;
  min-height:43px;
  padding:10px 12px;
  border:1px solid #dce3ec;
  border-radius:8px;
  background:#fff;
  color:#242424;
  font:14px Arial,sans-serif;
}

.field input[readonly]{
  cursor:default;
}

#feedback{
  min-height:18px;
  margin:15px 0 0;
  color:#1569ac;
  font-size:12px;
}

.note{
  margin:15px 0;
  font-size:11px;
  line-height:1.8;
  color:#677786;
}

footer{
  text-align:center;
  padding:18px;
  border-top:1px solid #ececec;
  color:#737d88;
  font-size:11px;
}

/* KHI CHỤP ẢNH */

.capture-mode .summary,
.capture-mode .section-title,
.capture-mode .option,
.capture-mode .buttons,
.capture-mode .fields,
.capture-mode .note,
.capture-mode .notice,
.capture-mode #feedback,
.capture-mode footer{
  display:none!important;
}

/* ĐIỆN THOẠI */

@media(max-width:650px){

  .wrap{
    margin:9px auto;
    padding:0 7px;
  }

  .header{
    padding:23px 10px 18px;
  }

  .header h1{
    font-size:20px;
  }

  .body{
    padding:8px 12px 23px;
  }

  .summary{
    padding:12px;
    gap:12px;
  }

  .option{
    padding:12px;
  }

  .option b{
    font-size:12px;
  }

  .payment{
    padding:12px;
  }

  .payrow{
    grid-template-columns:minmax(0,1fr) 125px;
    gap:5px;
  }

  .data dt{
    font-size:12px;
  }

  .data dd{
    font-size:12px;
  }

  .data .amount{
    font-size:15px;
  }

  .qrbox{
    min-height:125px;
    padding:5px;
  }

  .qrbox .qr-title{
    font-size:13px;
  }

  .qrbox small{
    font-size:9px;
  }

  .buttons{
    gap:6px;
  }

  .buttons button{
    font-size:11px;
    padding:9px 4px;
    min-height:55px;
  }

  .fields{
    padding:13px;
  }
}

@media(max-width:360px){

  .payrow{
    grid-template-columns:minmax(0,1fr) 108px;
  }
}

@media print{

  .wrap{
    margin:0;
    padding:0;
    max-width:none;
  }

  .panel{
    border:0;
    box-shadow:none;
  }

  .buttons,
  .fields,
  #feedback{
    display:none!important;
  }
}
</style>

<script defer
src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js">
</script>

</head>

<body>

<div class="wrap">

<div class="panel" id="captureArea">

<!-- PHẦN 1 -->

<header class="header">

  <h1>
    CỔNG THANH TOÁN TRỰC TUYẾN ÉN VIỆT
  </h1>

  <div class="payment-brands">

    <div class="vnpay">
      VNPAY
      <small>Scan to Pay</small>
    </div>

    <span class="brand-divider"></span>

    <div class="vietqr-brand">
      Viet<span>QR</span>
    </div>

  </div>

</header>

<div class="body">

<p id="loading">
  Đang tải thông tin hóa đơn...
</p>

<section id="invoice" class="hidden">

<!-- THÔNG TIN HÓA ĐƠN -->

<div class="summary">

  <div>
    <small>Mã hóa đơn</small>
    <b id="code">—</b>
  </div>

  <div>
    <small>Mã đặt chỗ (PNR)</small>
    <b id="pnr">—</b>
  </div>

  <div>
    <small>Khách hàng</small>
    <b id="customer">—</b>
  </div>

  <div>
    <small>Hãng bay</small>
    <b id="airline">—</b>
  </div>

  <div style="grid-column:1/-1">
    <small>Hành trình</small>
    <b id="route">—</b>
  </div>

  <div>
    <small>Ngày bay</small>
    <b id="flightDate">—</b>
  </div>

  <div>
    <small>Trạng thái</small>
    <b id="status">—</b>
  </div>

</div>

<!-- PHẦN 2 -->

<div class="section-title">
  Phương thức thanh toán
</div>

<label class="option disabled">

  <input
    type="radio"
    name="method"
    disabled>

  <b>
    Thẻ ATM / Tài khoản ngân hàng
  </b>

</label>

<label class="option disabled">

  <input
    type="radio"
    name="method"
    disabled>

  <b>
    Thẻ ATM nội địa qua cổng thanh toán
  </b>

</label>

<label class="option disabled">

  <input
    type="radio"
    name="method"
    disabled>

  <b>
    Thẻ tín dụng quốc tế
  </b>

</label>

<label class="option active">

  <input
    type="radio"
    name="method"
    checked
    disabled>

  <b>
    Chuyển khoản ngân hàng bằng VietQR
  </b>

</label>

<!-- PHẦN 3 -->

<section class="payment">

  <h2 class="payment-heading">

    Chuyển khoản

    <em>
      (Miễn phí giao dịch)
    </em>

  </h2>

  <p class="instruction">

    Vui lòng kiểm tra đúng thông tin
    người nhận, số tiền và nội dung
    chuyển khoản trước khi thanh toán.

  </p>

  <div class="payrow">

    <!-- NĂM MỤC THÔNG TIN -->

    <div>

      <dl class="data">

        <div class="data-group">

          <dt>
            Tên tài khoản:
          </dt>

          <dd id="owner"></dd>

        </div>

        <div class="data-group">

          <dt>
            Số tiền:
          </dt>

          <dd
            id="amount"
            class="amount">
          </dd>

        </div>

        <div class="data-group">

          <dt>
            Nội dung chuyển khoản:
          </dt>

          <dd class="transfer-inline">

            <span id="content"></span>

            <button
              type="button"
              class="copy-inline"
              id="copyContent"
              disabled>
              Copy
            </button>

          </dd>

        </div>

        <div class="data-group">

          <dt>
            Ngân hàng nhận:
          </dt>

          <dd id="bank"></dd>

        </div>

        <div class="data-group">

          <dt>
            Số tài khoản:
          </dt>

          <dd id="account"></dd>

        </div>

      </dl>

    </div>

    <!-- MÃ VIETQR SÁT BÊN PHẢI -->

    <div
      class="qrbox"
      id="qrPanel">

      <div class="qr-title">
        Viet<span>QR</span>
      </div>

      <img
        id="qr"
        class="hidden"
        crossorigin="anonymous"
        alt="Mã chuyển khoản VietQR">

      <small id="qrNote">
        Mã QR sẽ hiển thị tại đây
      </small>

    </div>

  </div>

  <!-- CÁC TÀI KHOẢN NGÂN HÀNG KHÁC -->

  <div
    class="other-bank hidden"
    id="otherBankBox">

    <button
      type="button"
      id="toggleOtherBanks">

      Xem tài khoản ngân hàng khác

    </button>

    <div
      id="otherBankList"
      class="other-bank-list hidden">
    </div>

  </div>

  <div class="notice">

    Vui lòng kiểm tra đúng tên người nhận,
    số tài khoản và số tiền trên ứng dụng
    ngân hàng trước khi chuyển khoản.

    Mã VietQR không phải bằng chứng
    ngân hàng đã nhận tiền.

  </div>

</section>

<!-- PHẦN 4 - BA NÚT -->

<div class="buttons">

  <button
    type="button"
    id="saveImage">

    📷 Chụp ảnh màn hình

  </button>

  <button
    type="button"
    id="saveQr"
    disabled>

    ▦ Chụp ảnh QR

  </button>

  <button
    type="button"
    id="copy"
    disabled>

    ▣ Sao chép nội dung

  </button>

</div>

<!-- PHẦN 5 - THÔNG TIN NGÂN HÀNG -->

<div class="fields">

  <h2>
    THÔNG TIN TÀI KHOẢN NGÂN HÀNG
  </h2>

  <p>
    Thông tin lấy từ phiếu do
    nhân viên quản trị lưu.
    Khách hàng chỉ được xem.
  </p>

  <div class="field">

    <label for="fieldOwner">
      Tên tài khoản
    </label>

    <input
      id="fieldOwner"
      readonly>

  </div>

  <div class="field">

    <label for="fieldAmount">
      Số tiền (VNĐ)
    </label>

    <input
      id="fieldAmount"
      readonly>

  </div>

  <div class="field">

    <label for="fieldContent">
      Nội dung chuyển khoản
    </label>

    <input
      id="fieldContent"
      readonly>

  </div>

  <div class="field">

    <label for="fieldBank">
      Ngân hàng nhận
    </label>

    <input
      id="fieldBank"
      readonly>

  </div>

  <div class="field">

    <label for="fieldAccount">
      Số tài khoản
    </label>

    <input
      id="fieldAccount"
      readonly>

  </div>

</div>

<p id="feedback" role="status"></p>

<p class="note">

  Các thông tin thanh toán được
  lấy từ Firebase và chỉ được
  thay đổi bởi tài khoản quản trị
  có quyền truy cập.

  Những phương thức thanh toán bằng thẻ
  chưa được tích hợp.

  Trang này không phải cổng thanh toán
  chính thức của hãng hàng không.

</p>

</section>

</div>

<footer>

  © 2026 ÉN VIỆT TRAVEL —
  Phiếu yêu cầu thanh toán.

  Không thay thế hóa đơn VAT
  hoặc xác nhận giao dịch ngân hàng.

</footer>

</div>
</div>

<!-- JAVASCRIPT KẾT NỐI FIREBASE -->

<script type="module">

import {initializeApp}
from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";

import {getFirestore,doc,getDoc}
from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";

import {firebaseConfig}
from "./firebase-config.js";

const $ = id => document.getElementById(id);

const params = new URLSearchParams(location.search);

const money = value =>
  new Intl.NumberFormat("vi-VN",{
    style:"currency",
    currency:"VND",
    maximumFractionDigits:0
  }).format(Number(value)||0);

let qrReady = false;
let qrUrl = "";
let copyText = "";
let canPay = false;

function set(id,value){

  $(id).textContent =
    String(value??"").trim();

}

function setSummary(id,value){

  $(id).textContent =
    String(value??"").trim() || "—";

}

function notify(message){

  $("feedback").textContent = message;

}

function formatDate(value){

  const v=String(value||"");

  if(/^\d{4}-\d{2}-\d{2}$/.test(v)){

    return (
      v.slice(8)+"/"+
      v.slice(5,7)+"/"+
      v.slice(0,4)
    );

  }

  return v || "—";

}

/* SAO CHÉP VĂN BẢN */

async function copyValue(value,message){

  if(!value){
    return;
  }

  try{

    await navigator.clipboard.writeText(value);

    notify(message);

  }catch(error){

    window.prompt(
      "Sao chép nội dung:",
      value
    );

  }

}

/* TÀI KHOẢN KHÁC */

function renderOtherBanks(p){

  const root=$("otherBankList");
  const box=$("otherBankBox");

  root.replaceChildren();

  root.classList.add("hidden");
  box.classList.add("hidden");

  const others=Array.isArray(p.otherBankAccounts)
    ?p.otherBankAccounts
    :[];

  const valid=others.filter(b=>
    b &&
    typeof b.bankName==="string" &&
    typeof b.bankAccount==="string" &&
    typeof b.bankOwner==="string" &&
    b.bankName.trim() &&
    b.bankAccount.trim() &&
    b.bankOwner.trim()
  ).slice(0,9);

  if(!valid.length){
    return;
  }

  for(const bank of valid){

    const row=document.createElement("div");

    row.className="other-bank-item";

    const name=document.createElement("strong");

    name.textContent=bank.bankName;

    const detail=document.createElement("div");

    detail.textContent=
      bank.bankOwner+" · "+bank.bankAccount;

    row.append(name,detail);

    root.append(row);

  }

  $("toggleOtherBanks").textContent=
    "Xem tài khoản "+
    valid.length+
    " ngân hàng khác";

  box.classList.remove("hidden");

}

$("toggleOtherBanks").onclick=()=>{

  $("otherBankList").classList.toggle("hidden");

  const opened=
    !$("otherBankList").classList.contains("hidden");

  $("toggleOtherBanks").textContent=
    opened
      ?"Ẩn tài khoản ngân hàng khác"
      :"Xem tài khoản ngân hàng khác";

};

/* HIỂN THỊ DỮ LIỆU HÓA ĐƠN */

function render(p,isDemo=false){

  setSummary("code",p.code);
  setSummary("pnr",p.pnr);
  setSummary("customer",p.customer);
  setSummary("airline",p.airline);

  let route=p.route||"";

  if(Array.isArray(p.legs) && p.legs.length){

    route=p.legs.map(leg=>
      (leg.from||"")+" → "+(leg.to||"")
    ).join(" | ");

  }

  setSummary("route",route);

  setSummary(
    "flightDate",
    formatDate(p.flightDate||p.legs?.[0]?.date)
  );

  const status=String(p.status||"pending");

  const statusText=isDemo
    ?"BẢN MẪU"
    :({
      pending:"Chờ thanh toán",
      paid:"Đã đối soát nhận tiền",
      cancelled:"Đã hủy"
    }[status]||"Chờ thanh toán");

  setSummary("status",statusText);

  const bankCode=String(
    p.bankCode||p.bank?.code||""
  ).trim().toUpperCase();

  const bankName=String(
    p.bankName||p.bank?.name||""
  ).trim();

  const owner=String(
    p.bankOwner||p.bank?.owner||""
  ).trim();

  const account=String(
    p.bankAccount||p.bank?.account||""
  ).trim();

  const amount=Number(
    p.total??p.fare??0
  );

  const ref=String(
    p.transferContent||p.code||""
  ).trim().toUpperCase();

  const amountValue=
    Number.isSafeInteger(amount) && amount>0
      ?money(amount)
      :"";

  /* XÓA CHỮ CHƯA CUNG CẤP */

  set("owner",owner);
  set("amount",amountValue);
  set("content",ref);
  set("bank",bankName);
  set("account",account);

  /* 5 Ô CHỈ XEM */

  $("fieldOwner").value=owner;

  $("fieldAmount").value=amountValue;

  $("fieldContent").value=ref;

  $("fieldBank").value=bankName;

  $("fieldAccount").value=account;

  renderOtherBanks(p);

  qrUrl="";
  qrReady=false;
  canPay=false;
  copyText="";

  const img=$("qr");

  img.classList.add("hidden");

  img.removeAttribute("src");

  $("saveQr").disabled=true;
  $("copy").disabled=true;
  $("copyContent").disabled=true;
  $("saveImage").disabled=true;

  /* KIỂM TRA DỮ LIỆU VIETQR */

  const valid=
    /^[A-Z0-9]{2,15}$/.test(bankCode) &&
    /^[0-9]{5,20}$/.test(account) &&
    Boolean(bankName) &&
    Boolean(owner) &&
    Number.isSafeInteger(amount) &&
    amount>0 &&
    /^[A-Z0-9 ]{1,25}$/.test(ref);

  if(isDemo){

    set(
      "qrNote",
      "BẢN MẪU - Không dùng thanh toán"
    );

  }else if(status==="cancelled"){

    set("qrNote","Phiếu đã hủy");

  }else if(status==="paid"){

    set(
      "qrNote",
      "Phiếu đã đối soát nhận tiền"
    );

  }else if(!valid){

    set(
      "qrNote",
      "Chưa đủ dữ liệu để tạo VietQR"
    );

  }else{

    canPay=true;

    const ownerPlain=owner
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g,"")
      .replace(/đ/gi,"d")
      .toUpperCase();

    const query=new URLSearchParams({

      amount:String(amount),

      addInfo:ref,

      accountName:ownerPlain

    });

    qrUrl=
      "https://img.vietqr.io/image/"+
      encodeURIComponent(bankCode)+"-"+
      encodeURIComponent(account)+
      "-compact2.png?"+
      query.toString();

    img.crossOrigin="anonymous";

    img.onload=()=>{

      img.classList.remove("hidden");

      qrReady=true;

      $("saveQr").disabled=false;
      $("saveImage").disabled=false;

      set(
        "qrNote",
        "VietQR - Kiểm tra người nhận"
      );

    };

    img.onerror=()=>{

      qrReady=false;

      img.classList.add("hidden");

      $("saveQr").disabled=true;
      $("saveImage").disabled=true;

      set(
        "qrNote",
        "Không tải được VietQR"
      );

    };

    img.src=qrUrl;

    copyText=[

      "Tên tài khoản: "+owner,

      "Số tiền: "+money(amount),

      "Nội dung: "+ref,

      "Ngân hàng: "+bankName,

      "Số tài khoản: "+account

    ].join("\n");

    $("copy").disabled=false;

    $("copyContent").disabled=false;

  }

  $("loading").classList.add("hidden");

  $("invoice").classList.remove("hidden");

}

/* COPY HÌNH ẢNH */

async function canvasToClipboard(canvas){

  if(
    !window.isSecureContext ||
    !navigator.clipboard?.write ||
    !window.ClipboardItem
  ){

    throw Error(
      "Trình duyệt không hỗ trợ sao chép ảnh. "+
      "Hãy sử dụng HTTPS trên Chrome hoặc Edge."
    );

  }

  const blob=await new Promise(resolve=>
    canvas.toBlob(resolve,"image/png")
  );

  if(!blob){

    throw Error(
      "Không tạo được ảnh PNG."
    );

  }

  await navigator.clipboard.write([

    new ClipboardItem({
      "image/png":blob
    })

  ]);

}

/* NÚT CHỤP ẢNH MÀN HÌNH */

async function copyScreen(){

  notify("Đang tạo ảnh thanh toán...");

  try{

    if(!window.html2canvas){

      throw Error(
        "Chưa tải được thư viện chụp ảnh."
      );

    }

    if(qrUrl && !qrReady){

      throw Error(
        "Vui lòng đợi VietQR tải xong."
      );

    }

    const canvas=await window.html2canvas(
      $("captureArea"),
      {

        scale:2,

        backgroundColor:"#ffffff",

        useCORS:true,

        allowTaint:false,

        onclone:doc=>{

          const clone=doc.getElementById(
            "captureArea"
          );

          if(clone){

            clone.classList.add(
              "capture-mode"
            );

          }

        }

      }
    );

    await canvasToClipboard(canvas);

    notify(
      "Đã sao chép ảnh thanh toán. "+
      "Nhấn Ctrl + V để dán vào Messenger hoặc Zalo."
    );

  }catch(error){

    notify(
      "Không chụp được ảnh: "+
      error.message
    );

  }

}

/* NÚT CHỤP ẢNH QR */

async function copyQr(){

  if(!qrReady){

    notify("Mã VietQR chưa sẵn sàng.");

    return;

  }

  notify("Đang tạo ảnh QR...");

  try{

    const img=$("qr");

    if(
      !img.complete ||
      !img.naturalWidth ||
      !img.naturalHeight
    ){

      throw Error(
        "Ảnh QR chưa tải xong."
      );

    }

    const canvas=document.createElement(
      "canvas"
    );

    canvas.width=img.naturalWidth;

    canvas.height=img.naturalHeight;

    const ctx=canvas.getContext("2d");

    if(!ctx){

      throw Error(
        "Không tạo được ảnh QR."
      );

    }

    ctx.drawImage(img,0,0);

    await canvasToClipboard(canvas);

    notify(
      "Đã sao chép ảnh QR. "+
      "Nhấn Ctrl + V để dán."
    );

  }catch(error){

    notify(
      "Không sao chép được QR: "+
      error.message+
      ". Có thể do quyền Clipboard hoặc CORS."
    );

  }

}

/* GẮN SỰ KIỆN BA NÚT */

$("saveImage").addEventListener(
  "click",
  copyScreen
);

$("saveQr").addEventListener(
  "click",
  copyQr
);

$("copy").addEventListener(
  "click",
  ()=>{

    if(!canPay || !copyText){
      return;
    }

    copyValue(
      copyText,
      "Đã sao chép thông tin chuyển khoản."
    );

  }
);

/* COPY RIÊNG NỘI DUNG */

$("copyContent").addEventListener(
  "click",
  ()=>{

    if(!canPay){
      return;
    }

    copyValue(
      $("content").textContent.trim(),
      "Đã sao chép nội dung chuyển khoản."
    );

  }
);

/* KẾT NỐI FIREBASE */

async function init(){

  /* CHẾ ĐỘ XEM MẪU */

  if(params.get("demo")==="1"){

    render({

      code:"ENV-DEMO",

      pnr:"DEMO123",

      customer:"KHÁCH HÀNG MẪU",

      airline:"Vietnam Airlines",

      route:"Hà Nội (HAN) → Đài Bắc (TPE)",

      flightDate:"2026-12-13",

      status:"pending"

    },true);

    return;

  }

  const id=params.get("id");

  if(!id){

    $("loading").textContent=
      "Thiếu mã liên kết phiếu thanh toán.";

    return;

  }

  try{

    const app=initializeApp(firebaseConfig);

    const db=getFirestore(app);

    const snapshot=await getDoc(

      doc(
        db,
        "publicPaymentRequests",
        id
      )

    );

    if(!snapshot.exists()){

      throw Error(
        "Không tìm thấy phiếu thanh toán."
      );

    }

    render(snapshot.data());

  }catch(error){

    $("loading").textContent=
      "Không tải được phiếu thanh toán. "+
      "Vui lòng kiểm tra liên kết hoặc liên hệ đại lý.";

    console.error(error);

  }

}

init();

</script>

</body>
</html>
