// ================================
// 河北嘉扬净居环保科技有限公司
// 官网主JS文件
// js/main.js
// ================================

// 页面加载完成
document.addEventListener("DOMContentLoaded", function () {

    console.log("官网加载成功");

    // 初始化动画
    initScrollAnimation();

    // 初始化返回顶部
    initBackTop();

    // 初始化数字滚动
    initCounter();

    // 初始化导航高亮
    initNavActive();

    // 初始化客服按钮
    initFloatService();

});


// ================================
// 页面滚动动画
// ================================
function initScrollAnimation() {

    const elements = document.querySelectorAll(".card, .adv-box, .case-grid img");

    function checkScroll() {

        const triggerBottom = window.innerHeight * 0.9;

        elements.forEach(el => {

            const boxTop = el.getBoundingClientRect().top;

            if (boxTop < triggerBottom) {

                el.classList.add("show");

            }

        });

    }

    window.addEventListener("scroll", checkScroll);

    checkScroll();

}


// ================================
// 返回顶部按钮
// ================================
function initBackTop() {

    const backTop = document.createElement("div");

    backTop.innerHTML = "↑";

    backTop.id = "backTop";

    document.body.appendChild(backTop);

    Object.assign(backTop.style, {

        position: "fixed",
        right: "20px",
        bottom: "90px",
        width: "50px",
        height: "50px",
        background: "#0f766e",
        color: "#fff",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        fontSize: "24px",
        boxShadow: "0 5px 15px rgba(0,0,0,.3)",
        opacity: "0",
        transition: ".3s",
        zIndex: "9999"

    });

    window.addEventListener("scroll", function () {

        if (window.scrollY > 400) {

            backTop.style.opacity = "1";

        } else {

            backTop.style.opacity = "0";

        }

    });

    backTop.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


// ================================
// 数据统计滚动动画
// ================================
function initCounter() {

    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {

        counter.innerText = "0";

        const updateCounter = () => {

            const target = +counter.getAttribute("data-target");

            const c = +counter.innerText;

            const increment = target / 100;

            if (c < target) {

                counter.innerText = `${Math.ceil(c + increment)}`;

                setTimeout(updateCounter, 20);

            } else {

                counter.innerText = target;

            }

        };

        updateCounter();

    });

}


// ================================
// 导航高亮
// ================================
function initNavActive() {

    const links = document.querySelectorAll("nav a");

    const current = location.pathname.split("/").pop();

    links.forEach(link => {

        const href = link.getAttribute("href");

        if (href === current) {

            link.style.color = "#22c55e";
            link.style.fontWeight = "bold";

        }

    });

}


// ================================
// 悬浮客服按钮
// ================================
function initFloatService() {

    const serviceBtn = document.createElement("a");

    serviceBtn.href = "tel:13800000000";

    serviceBtn.innerHTML = "电话咨询";

    document.body.appendChild(serviceBtn);

    Object.assign(serviceBtn.style, {

        position: "fixed",
        right: "20px",
        bottom: "20px",
        background: "#22c55e",
        color: "#fff",
        padding: "14px 20px",
        borderRadius: "50px",
        textDecoration: "none",
        fontSize: "16px",
        boxShadow: "0 5px 15px rgba(0,0,0,.3)",
        zIndex: "9999",
        transition: ".3s"

    });

    serviceBtn.addEventListener("mouseenter", function () {

        serviceBtn.style.transform = "scale(1.08)";

    });

    serviceBtn.addEventListener("mouseleave", function () {

        serviceBtn.style.transform = "scale(1)";

    });

}


// ================================
// 页面平滑滚动
// ================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// ================================
// 图片点击放大预览
// ================================
const caseImages = document.querySelectorAll(".case-grid img");

caseImages.forEach(img => {

    img.addEventListener("click", function () {

        const overlay = document.createElement("div");

        overlay.style.position = "fixed";
        overlay.style.left = "0";
        overlay.style.top = "0";
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.background = "rgba(0,0,0,.8)";
        overlay.style.display = "flex";
        overlay.style.justifyContent = "center";
        overlay.style.alignItems = "center";
        overlay.style.zIndex = "99999";

        const bigImg = document.createElement("img");

        bigImg.src = this.src;

        bigImg.style.maxWidth = "90%";
        bigImg.style.maxHeight = "90%";
        bigImg.style.borderRadius = "10px";

        overlay.appendChild(bigImg);

        document.body.appendChild(overlay);

        overlay.addEventListener("click", function () {

            overlay.remove();

        });

    });

});


// ================================
// 页面进入动画
// ================================
window.addEventListener("load", function () {

    document.body.style.opacity = "1";

});

document.body.style.opacity = "0";

document.body.style.transition = "opacity .5s ease";


// ================================
// 控制台品牌信息
// ================================
console.log(`
==========================================
河北嘉扬净居环保科技有限公司
专业消毒消杀 / 除甲醛 / 空气治理
官网系统运行正常
==========================================
`);