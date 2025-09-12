const containerCV = document.querySelector(".portfolio__cv--body");
let iframe = null;
HandlerInsertIframe();

window.addEventListener("resize", HandlerInsertIframe);

function HandlerInsertIframe() {
  const windowInnerWidth = document.documentElement.clientWidth;

  console.log(windowInnerWidth, iframe === null);

  if (windowInnerWidth > 768 && iframe === null) {
    iframe = document.createElement("iframe");
    iframe.src = "CV.pdf";
    iframe.allow = "web-share";
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.title = "cv.pdf";
    iframe.style.border = "none";

    containerCV.prepend(iframe);
  } else if (windowInnerWidth <= 768 && iframe) {
    iframe.remove();
    iframe = null;
  }
}
