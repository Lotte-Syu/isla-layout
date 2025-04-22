// 引入 Header
fetch("./header-fooder/header.html")
  .then((res) => res.text())
  .then((html) => {
    document.querySelector("header").innerHTML = html;

    // 加入 header 的 CSS
    const headerStyle = document.createElement("link");
    headerStyle.rel = "stylesheet";
    headerStyle.href = "./header-fooder/header.css";
    document.head.append(headerStyle);
  });

// 引入 Footer
fetch("./header-fooder/footer.html")
  .then((res) => res.text())
  .then((html) => {
    document.querySelector("footer").innerHTML = html;

    // 加入 footer 的 CSS
    const footerStyle = document.createElement("link");
    footerStyle.rel = "stylesheet";
    footerStyle.href = "./header-fooder/footer.css";
    document.head.append(footerStyle);
  });
