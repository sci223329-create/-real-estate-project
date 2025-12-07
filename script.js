document.addEventListener("DOMContentLoaded", function() {

    
    const form = document.querySelector("#contact form");
    form.addEventListener("submit", function(e) {
        e.preventDefault(); // منع إعادة تحميل الصفحة
        alert("تم إرسال رسالتك بنجاح! سنقوم بالتواصل معك قريباً.");
    });

    
    const images = document.querySelectorAll("#listings img, #gallery img");

    images.forEach(function(img) {
        img.addEventListener("click", function() {
            const propertyName = img.alt || "العقار"; // اسم العقار من alt
            const confirmPurchase = confirm(`هل تريد شراء ${propertyName}؟`);
            if(confirmPurchase) {
                alert(`تم تسجيل رغبتك في شراء ${propertyName}. سنتواصل معك قريباً!`);
            }
        });
    });
ض
    const offers = document.querySelectorAll("#offers li");
    const messages = [
        "فيلا أحلامك — خصم 10%",
        "شقة عائلية — سعر خاص 300 د.ل / شهر",
        "محل تجاري — فرصة استثمارية مع استشارة مجانية"
    ];

    offers.forEach((offer, index) => {
        offer.addEventListener("click", () => {
            alert("تم  اخترت العرض سنقوم بالتواصل معك قريبا : " + messages[index]);
        });
    });

});
