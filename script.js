let gross = false, indi = false, domestic = false, imported = false, grossIndi = true, capPage = false, rawPage = false, commonPage = false;

//FAQs Section 
$(".faq-div .add").click(function () {
    $(this).closest(".faq-div").find(".ans").slideToggle();
    const icon = $(this);
    if (icon.attr("src") === "img/plus.png") {
        icon.attr("src", "img/minus.png");
    } else {
        icon.attr("src", "img/plus.png");
    }
});

// Gross OR Individual 
$("#gross").click(() => {
    $("#gross").toggleClass('active')
    gross = !gross;
    $("#indi").removeClass('active')
    indi = !gross;
    console.log("gross", gross)
    console.log("indi", indi)
})
$("#indi").click(() => {
    $("#indi").toggleClass('active')
    indi = !indi;
    $("#gross").removeClass('active')
    gross = !indi;
    console.log("indi", indi)
    console.log("gross", gross)
})
$("#domestic").click(() => {
    $("#domestic").toggleClass('active')
    domestic = !domestic;
    $("#imported").removeClass('active')
    imported = !domestic;
    console.log("domestic", domestic)
    console.log("imported", imported)
})
$("#imported").click(() => {
    $("#imported").toggleClass('active')
    imported = !imported;
    $("#domestic").removeClass('active')
    domestic = !imported;
    console.log("imported", imported)
    console.log("domestic", domestic)
})

// Capital Goods Page
$("#Gross-Individual").click(() => {
    capPage = true;
    $("#gross-indi-box").removeClass('active-box')
    $("#first-nav-item").removeClass('active')
    $("#cap-good-que").addClass('active-box')
    $("#second-nav-item").addClass('active')
    if (gross && domestic) {
        $("#cap-good-que").addClass("active-box")
        $("#domestic-goods-title").addClass("active-box")
        $("#domestic-goods-box").css("display", "grid")
    } else if (gross && imported) {
        $("#cap-good-que").addClass("active-box")
    } else if (indi && domestic) {
        $("#cap-table-container").addClass("active-box")
        $("#main-section").addClass("active-table-layout")
        $("#FAQs").addClass("active-faq-layout")
        $("#cap-good-que").removeClass("active-box")
        $("#cap-good-table-title").removeClass("inactive-box")
        $("#capitalGoodsDomesticTable").removeClass("inactive-box")
    } else if (indi && imported) {
        $("#cap-table-container").addClass("active-box")
        $("#main-section").addClass("active-table-layout")
        $("#FAQs").addClass("active-faq-layout")
        $("#cap-good-que").removeClass("active-box")
    } else {
        alert("Choose Right Options")
    }
})

// Raw Materials Page 
$("#cap-que-good-next").click(() => {
    rawPage = true;
    $("#second-nav-item").removeClass('active')
    $("#third-nav-item").addClass('active')
    $("#raw-good-que").addClass('active-box')
    $("#cap-good-que").removeClass('active-box')
    if (gross && domestic) {
        $("#raw-domestic-box").removeClass("inactive-box")
        $("#domestic-raw-goods-title").removeClass("inactive-box")
    } else if (gross && imported) {
        $("#domestic-goods-title").addClass("inactive-box")
        $("#raw-domestic-box").addClass("inactive-box")
    } else {
        alert("Choose Right Options")
    }
})
$("#cap-table-good-next").click(() => {
    rawPage = true;
    $("#second-nav-item").removeClass('active')
    $("#third-nav-item").addClass('active')
    $("#cap-table-container").removeClass('active-box')
    $("#raw-table-container").addClass('active-box')
    if (indi && domestic) {
        $("#cap-table-container").addClass("inactive-box")
        $("#main-section").addClass("active-table-layout")
        $("#FAQs").addClass("active-faq-layout")
    } else if (indi && imported) {
        $("#raw-domestic-table-title").addClass("inactive-box")
        $("#rawmaterialDomesticTable").addClass("inactive-box")
    } else {
        alert("Choose Right Options")
    }
})

$("#raw-material-que-next").click(() => {
    commonPage = true;
    $("#third-nav-item").removeClass('active')
    $("#fourth-nav-item").addClass('active')
    $("#common-questions").addClass('active-box')
    $("#raw-good-que").removeClass('active-box')
})
$("#raw-material-table-next").click(() => {
    commonPage = true;
    $("#third-nav-item").removeClass('active')
    $("#fourth-nav-item").addClass('active')
    $("#common-questions").addClass('active-box')
    $("#raw-table-container").removeClass('active-box')
    $("#cap-table-container").addClass("inactive-box")
    $("#main-section").removeClass("active-table-layout")
    $("#FAQs").removeClass("active-faq-layout")

})

$("#first-nav-item").click(() => {
    if (capPage) {
        $("#first-nav-item").addClass('active');
        $("#second-nav-item").removeClass('active');
        $("#third-nav-item").removeClass('active');
        $("#fourth-nav-item").removeClass('active');
        $("#gross-indi-box").addClass('active-box');
        $("#raw-good-que").removeClass('active-box');
        $("#gross-indi-box").addClass('active-box');
        $("#raw-good-que").removeClass('active-box');
        $("#cap-good-que").removeClass('active-box');
        $("#cap-table-container").removeClass('active-box');
        $("#raw-table-container").removeClass('active-box');
        $("#common-questions").removeClass('active-box');
        $("#main-section").removeClass("active-table-layout")
        $("#FAQs").removeClass("active-faq-layout")
    } else {
        alert("Please complete the previous steps first.");
    }
});
$("#second-nav-item").click(() => {
    if (rawPage) {
        $("#first-nav-item").removeClass('active');
        $("#second-nav-item").addClass('active');
        $("#third-nav-item").removeClass('active');
        $("#fourth-nav-item").removeClass('active');
        $("#raw-good-que").addClass('active-box');
        $("#gross-indi-box").removeClass('active-box');
        $("#raw-good-que").removeClass('active-box');
        $("#common-questions").removeClass('active-box');
        $("#cap-table-container").removeClass('active-box');
        $("#raw-table-container").removeClass('active-box');
        $("#main-section").removeClass("active-table-layout")
        $("#FAQs").removeClass("active-faq-layout")
        if (gross && domestic) {
            $("#cap-good-que").addClass("active-box")
            $("#domestic-goods-title").addClass("active-box")
            $("#domestic-goods-box").css("display", "grid")
        } else if (gross && imported) {
            $("#cap-good-que").addClass("active-box")
        } else if (indi && domestic) {
            $("#cap-table-container").addClass("active-box")
            $("#main-section").addClass("active-table-layout")
            $("#FAQs").addClass("active-faq-layout")
            $("#cap-good-que").removeClass("active-box")
            $("#cap-good-table-title").removeClass("inactive-box")
            $("#capitalGoodsDomesticTable").removeClass("inactive-box")
        } else if (indi && imported) {
            $("#cap-table-container").addClass("active-box")
            $("#main-section").addClass("active-table-layout")
            $("#FAQs").addClass("active-faq-layout")
            $("#cap-good-que").removeClass("active-box")
        } else {
            alert("Choose Right Options")
        }
    } else {
        alert("Please complete the previous steps first.");
    }
});
$("#third-nav-item").click(() => {
    if (commonPage) {
        $("#first-nav-item").removeClass('active');
        $("#second-nav-item").removeClass('active');
        $("#third-nav-item").addClass('active');
        $("#fourth-nav-item").removeClass('active');
        $("#gross-indi-box").removeClass('active-box');
        $("#raw-good-que").removeClass('active-box');
        $("#cap-good-que").removeClass('active-box');
        $("#cap-table-container").removeClass('active-box');
        $("#raw-table-container").removeClass('active-box');
        $("#common-questions").removeClass('active-box');
        $("#main-section").removeClass("active-table-layout")
        $("#FAQs").removeClass("active-faq-layout")
        if (gross && domestic) {
            $("#raw-good-que").addClass("active-box")
            $("#domestic-raw-goods-title").addClass("active-box")
            $("#raw-domestic-box").css("display", "grid")
        } else if (gross && imported) {
            $("#raw-good-que").addClass("active-box")
        } else if (indi && domestic) {
            $("#raw-table-container").addClass("active-box")
            $("#main-section").addClass("active-table-layout")
            $("#FAQs").addClass("active-faq-layout")
            $("#cap-good-que").removeClass("active-box")
            $("#cap-good-table-title").removeClass("inactive-box")
            $("#capitalGoodsDomesticTable").removeClass("inactive-box")
        } else if (indi && imported) {
            $("#raw-table-container").addClass("active-box")
            $("#main-section").addClass("active-table-layout")
            $("#FAQs").addClass("active-faq-layout")
            $("#cap-table-container").removeClass("active-box")
        } else {
            alert("Choose Right Options")
        }
    } else {
        alert("Please complete the previous steps first.");
    }
});
$("#fourth-nav-item").click(() => {
    if (commonPage) {
        $("#fourth-nav-item").addClass('active');
        $("#third-nav-item").removeClass('active');
        $("#first-nav-item").removeClass('active');
        $("#gross-indi-box").removeClass('active-box');
        $("#raw-good-que").removeClass('active-box');
        $("#cap-good-que").removeClass('active-box');
        $("#cap-table-container").removeClass('active-box');
        $("#raw-table-container").removeClass('active-box');
        $("#common-questions").addClass('active-box');
        $("#main-section").removeClass("active-table-layout")
        $("#FAQs").removeClass("active-faq-layout")
    } else {
        alert("Please complete the previous steps first.");
    }
});
