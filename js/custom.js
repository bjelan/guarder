//navbar
let ul = document.querySelector("#navbarSupportedContent ul");
let links = ["Home", "About", "Services", "Guards", "Contact", "Author"];
let linksHref = ["index.html", "index.html#about", "index.html#services", "index.html#guards", "index.html#contact", "author.html"];
links.forEach((link, index) => {
  let li = document.createElement("li");
  li.classList.add("nav-item");
  if(index == 0){
    li.classList.add("active");
  }
  let a = document.createElement("a");
  a.classList.add("nav-link");
  a.href = linksHref[index];
  a.innerHTML = link;
  li.appendChild(a);
  ul.appendChild(li);
});

if(window.location.href.includes("index.html")){
//carousel
let carouselInner = document.querySelector(".slider_section .carousel-inner");
let carouselTextH1 = ["Safety Sentinel", "Guarder Secure", "Uncompromised Safety"];
let carouselTextP = [
  "Experience unparalleled peace of mind with our professional security services, ensuring a safe haven for your tranquil lifestyle.",
  "Guarder Secure stands as your dedicated security partner, committed to putting safety at the forefront of your priorities.",
  "Embrace uncompromised safety with our round-the-clock security solutions, providing you with continuous peace of mind in every aspect of your life.",
];
carouselTextH1.forEach((text, index) => {
  let carouselItem = document.createElement("div");
  carouselItem.classList.add("carousel-item");
  if (index == 0) {
    carouselItem.classList.add("active");
  }
  let container = document.createElement("div");
  container.classList.add("container");
  let row = document.createElement("div");
  row.classList.add("row");
  let col = document.createElement("div");
  col.classList.add("col-md-7");
  let detailBox = document.createElement("div");
  detailBox.classList.add("detail-box");
  let h1 = document.createElement("h1");
  let span = document.createElement("span");
  span.innerHTML = text;
  h1.appendChild(span);
  let p = document.createElement("p");
  p.innerHTML = carouselTextP[index];
  let btnBox = document.createElement("div");
  btnBox.classList.add("btn-box");
  let btn1 = document.createElement("a");
  btn1.classList.add("btn-1");
  btn1.href = "index.html#about";
  btn1.innerHTML = "Read more";
  let btn2 = document.createElement("a");
  btn2.classList.add("btn-2");
  btn2.href = "index.html#contact";
  btn2.innerHTML = "Get A Quote";
  btnBox.appendChild(btn1);
  btnBox.appendChild(btn2);
  detailBox.appendChild(h1);
  detailBox.appendChild(p);
  detailBox.appendChild(btnBox);
  col.appendChild(detailBox);
  row.appendChild(col);
  container.appendChild(row);
  carouselItem.appendChild(container);
  carouselInner.appendChild(carouselItem);
});
//services
let serviceRow = document.querySelector("#services .row");
let serviceNames = ["Home Security", "Office Security", "Bodyguard"];
let serviceDetails = [
  "Safeguard your home with our advanced security systems and vigilant personnel, ensuring a protective shield around your loved ones and cherished possessions.",
  "Guarder provides comprehensive office security solutions, integrating advanced technology and expert personnel to create a secure workspace.",
  "Experience discreet and reliable personal protection with Guarder's bodyguard services, where our highly trained professionals prioritize your safety.",
];
let serviceIcons = ["homesecurity", "officesecurity", "bodyguard"];
serviceNames.forEach((name, index) => {
  serviceRow.innerHTML += `
  <div class="col-md-4 singleService">
  <div class="box ">
    <div class="img-box">
      <img src="images/${serviceIcons[index]}.png" alt="${serviceIcons[index]}" />
    </div>
    <div class="detail-box">
      <h6>
        ${name}
      </h6>
      <p>
        ${serviceDetails[index]}
      </p>
    </div>
  </div>
  </div>
  `;
});
//guards
let guardsSectionRow = document.querySelector("#guards .row");
let guardNames = ["Martin Anderson", "Denny Butler", "Nathan Mcpherson"];
let guardDesignations = ["SUPERVISOR", "SUPERVISOR", "SUPERVISOR"];
let guardImages = ["t1.jpg", "t2.jpg", "t3.jpg"];
guardNames.forEach((name, index) => {
  guardsSectionRow.innerHTML += `
  <div class="col-md-4 col-sm-6 mx-auto ">
    <div class="box">
      <div class="img-box">
        <img src="images/${guardImages[index]}" alt="${name}">
      </div>
      <div class="detail-box">
        <h5>
          ${name}
        </h5>
        <h6 class="">
          ${guardDesignations[index]}
        </h6>
      </div>
    </div>
  </div>
  `;
});
let guardBoxes = document.querySelectorAll("#guards .box");
guardBoxes.forEach((box) => {
  box.addEventListener("mouseover", () => {
    let textBox = box.querySelector(".detail-box");
    textBox.classList.add("active");
  });
  box.addEventListener("mouseout", () => {
    let textBox = box.querySelector(".detail-box");
    textBox.classList.remove("active");
  });
});
//testimonials
let testimonialCarouselInner = document.querySelector("#testimonials .carousel-inner");
let testimonialNames = ["Hakim Jabil", "Anna Rose", "Marc Jacobs"];
let testimonialTexts = [
  "I travel frequently for business, and having Guarder\'s bodyguard services has been a game-changer for my personal security. Their team is not only highly skilled but also discreet, providing me with a level of confidence and peace of mind during my travels that is truly invaluable.",
  "Guarder exceeded my expectations with their impeccable security services. As a woman living alone, their team provided a sense of safety and assurance that I hadn't experienced before. I can now confidently say that Guarder is my trusted partner in ensuring my home is secure.",
  "Choosing Guarder for my office security was a game-changer. Their professionalism and attention to detail are unparalleled. With their advanced systems and proactive personnel, I've witnessed a significant improvement in the overall safety of our workplace."
];
let testimonialImages = ["client.png", "client2.png", "client3.png"];
testimonialNames.forEach((name, index) => {
  testimonialCarouselInner.innerHTML += `
    <div class="carousel-item ${index == 0 ? "active" : ""}">
      <div class="box">
        <div class="img-box">
          <img src="images/${testimonialImages[index]}" alt="${name}">
        </div>
        <div class="detail-box">
          <h4>
            ${name}
          </h4>
          <p>
            ${testimonialTexts[index]}
          </p>
        </div>
      </div>
    </div>
  `;
});
//form validation
let form = document.querySelector("#contactForm");  
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let fullName = document.querySelector("#fullName");
  let email = document.querySelector("#email");
  let phone = document.querySelector("#phone");
  let service = document.querySelector("#selectService");
  let guard = document.querySelector("#selectGuard");
  let requestedDate = document.querySelector("#requestedDate");
  let contactMethod = document.querySelector(".contactMethodRadio:checked");
  let methodDiv = document.querySelector("#secondContactMethod");
  let message = document.querySelector("#message");
  let fullNameRegex = /^[A-Z][a-z]+\s[A-Z][a-z]+$/;
  let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  let phoneRegex = /^[0-9]{10}$/;
  if(!fullNameRegex.test(fullName.value)){
    writeOrRemoveParagraph(fullName, "write", "fullName");
  }
  else{
    writeOrRemoveParagraph(fullName, "remove");
  }
  if(!emailRegex.test(email.value)){
    writeOrRemoveParagraph(email, "write", "email");
  }
  else{
    writeOrRemoveParagraph(email, "remove");
  }
  if(!phoneRegex.test(phone.value)){
    writeOrRemoveParagraph(phone, "write", "phone");
  }
  else{
    writeOrRemoveParagraph(phone, "remove");
  }
  if(service.value == "0"){
    writeOrRemoveParagraph(service, "write", "service");
  }
  else{
    writeOrRemoveParagraph(service, "remove");
  }
  if(guard.value == "0"){
    writeOrRemoveParagraph(guard, "write", "guard");
  }
  else{
    writeOrRemoveParagraph(guard, "remove");
  }
  if(requestedDate.value == ""){
    writeOrRemoveParagraph(requestedDate, "write", "requestedDate");
  }
  else if (new Date(requestedDate.value) < new Date()) {  
    writeOrRemoveParagraph(requestedDate, "write", "requestedDate");
  }
  else{
    writeOrRemoveParagraph(requestedDate, "remove");
  }
  if(!contactMethod){
    writeOrRemoveParagraph(methodDiv, "write", "contactMethod");
  }
  else{
    writeOrRemoveParagraph(methodDiv, "remove");
  }
  if(message.value.length < 5){
    writeOrRemoveParagraph(message, "write", "message");
  }
  else{
    writeOrRemoveParagraph(message, "remove");
  }

  let errors = document.querySelectorAll(".error");
  if(errors.length == 0){
    $(".modal").modal("show");
    $(".modal-footer button").click(function(){
        $(".modal").modal("hide");
        setTimeout(function(){
            window.location.href = "index.html";
        }, 1000);
    });
  }
  
});
writeOrRemoveParagraph = (element, operation, elName) => {
  if(!element.nextElementSibling && operation == "write"){
    let p = document.createElement("p");
    p.classList.add("error");
    switch(elName){
      case "fullName":
        p.innerHTML = "Please enter a valid name! Example: John Doe";
        break;
      case "email":
        p.innerHTML = "Please enter a valid email address! Example: jhondoe@gmail.com";
        break;
      case "phone":
        p.innerHTML = "Please enter a valid phone number! Example: 0603456789";
        break;
      case "service":
        p.innerHTML = "Please select a service!";
        break;
      case "guard":
        p.innerHTML = "Please select a guard!";
        break;
      case "contactMethod":
        p.innerHTML = "Please select a contact method!";
        break;
      case "requestedDate":
        p.innerHTML = "Date cannot be in the past or cannot be an empty field!";
        break;
      case "message":
        p.innerHTML = "Message must be at least 5 characters long!";
        break;
    }
    element.after(p);
  }
  else if (element.nextElementSibling && operation == "remove") {
    if(element.nextElementSibling){
      element.nextElementSibling.remove();
    }
  }
  else{
    return;
  }
};
//page animations
window.addEventListener("scroll", () => {
  let aboutSection = document.querySelector("#about");
  let aboutSectionPostion = aboutSection.getBoundingClientRect().top;
  let windowPosition = window.innerHeight;
  let abooutImage = document.querySelector("#about img");  
  if (aboutSectionPostion < windowPosition - 300) {
    abooutImage.classList.add("active");
    $("#about .detail-box p").addClass("active");
  }
  let servicesSection = document.querySelector("#services");
  let servicesSectionPostion = servicesSection.getBoundingClientRect().top;
  let serviceSingle = document.querySelectorAll("#services .row .singleService");
  if (servicesSectionPostion < windowPosition - 400) {
    serviceSingle.forEach((service) => {
      service.classList.add("active");
    });
  }
});
}

//newsletter validation
$("#newsletterForm button").click((e) => {
  e.preventDefault();
  let email = $("#newsletterForm input").val();
  let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailRegex.test(email)) {
    $("#newsletterForm input").css("border", "1px solid red")
    if(!document.querySelector("#newsletterForm .error")){
      let p = document.createElement("p");
      p.classList.add("error");
      p.innerHTML = "Please enter a valid email address! Example:jhondoe@gmail.com";
      $("#newsletterForm button").before(p);
    }
    
  } else {
    $("#newsletterForm input").css("border", "1px solid green")
    let pExists = document.querySelector("#newsletterForm .error");
    if (pExists) {
      pExists.remove(); 
    }
    let p = document.createElement("p");
    p.classList.add("success");
    p.innerHTML = "Thank you for subscribing to our newsletter!";
    $("#newsletterForm button").before(p);
    setTimeout(() => {
      $("#newsletterForm input").val("");
      p.remove();
      $("#newsletterForm input").css("border", "none")
    }, 2000);
  }
});
//write current year
$("#currentYear").html(new Date().getFullYear());

