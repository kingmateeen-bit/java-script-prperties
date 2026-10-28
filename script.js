
"use strict";

// ==================================================
// TASK 05: COMMON PROPERTIES TO GET VALUES FROM HTML
// ==================================================


// 1. .value
// Kaam: Input field ke andar likhi hui value hasil karna.
// Example: Agar input mein Mateen likha hai to output Mateen hoga.

const nameInput = document.getElementById("nameInput");

document.getElementById("valueBtn").addEventListener("click", function () {
    document.getElementById("valueOutput").textContent =
        "Value: " + nameInput.value;
});


// 2. .innerText
// Kaam: Element ka visible text hasil karna.
// HTML tags output mein nahi aate.
// Example: <strong>JavaScript</strong> se JavaScript milega.

document.getElementById("innerTextBtn").addEventListener("click", function () {
    const element = document.getElementById("innerTextExample");

    document.getElementById("innerTextOutput").textContent =
        element.innerText;
});


// 3. .textContent
// Kaam: Element ke andar ka tamam text hasil karna.
// Hidden text bhi mil sakta hai.
// HTML tags output mein shamil nahi hote.

document.getElementById("textContentBtn").addEventListener("click", function () {
    const element = document.getElementById("textContentExample");

    document.getElementById("textContentOutput").textContent =
        element.textContent.trim();
});


// 4. .innerHTML
// Kaam: Element ke andar ka HTML markup hasil karna.
// Example: <b>Hello</b> mein <b> tag bhi output hoga.

document.getElementById("innerHTMLBtn").addEventListener("click", function () {
    const element = document.getElementById("innerHTMLExample");

    document.getElementById("innerHTMLOutput").textContent =
        element.innerHTML;
});


// 5. .outerHTML
// Kaam: Poora element hasil karna.
// Is mein opening tag, attributes, andar ka content
// aur closing tag shamil hote hain.

document.getElementById("outerHTMLBtn").addEventListener("click", function () {
    const element = document.getElementById("outerHTMLExample");

    document.getElementById("outerHTMLOutput").textContent =
        element.outerHTML;
});


// 6. .checked
// Kaam: Check karna ke checkbox ya radio select hai ya nahi.
// true = selected
// false = not selected

document.getElementById("checkedBtn").addEventListener("click", function () {
    const checkbox = document.getElementById("agreeCheckbox");

    document.getElementById("checkedOutput").textContent =
        checkbox.checked ? "Checked: true" : "Checked: false";
});


// 7. .selectedIndex
// Kaam: Dropdown mein selected option ka index hasil karna.
// Index zero se shuru hota hai.
// Red = 0, Blue = 1, Green = 2

document.getElementById("selectedIndexBtn").addEventListener("click", function () {
    const select = document.getElementById("colorSelect");

    document.getElementById("selectedIndexOutput").textContent =
        "Index: " + select.selectedIndex +
        " | Value: " + select.value;
});


// 8. .files
// Kaam: File input se select ki gayi files hasil karna.
// files[0] pehli file hai.
// files[0].name se file ka naam milta hai.

document.getElementById("filesBtn").addEventListener("click", function () {
    const fileInput = document.getElementById("fileInput");

    document.getElementById("filesOutput").textContent =
        fileInput.files.length > 0
            ? "File: " + fileInput.files[0].name
            : "Please select a file first.";
});


// 9. .className
// Kaam: HTML element ki class ka naam hasil karna.
// Example: class="highlight" ka output highlight hoga.

document.getElementById("classNameBtn").addEventListener("click", function () {
    const element = document.getElementById("classExample");

    document.getElementById("classNameOutput").textContent =
        "Class: " + element.className;
});


// 10. .id
// Kaam: HTML element ki ID hasil karna.
// Example: id="idExample" ka output idExample hoga.

document.getElementById("idBtn").addEventListener("click", function () {
    const element = document.getElementById("idExample");

    document.getElementById("idOutput").textContent =
        "ID: " + element.id;
});


// 11. .attributes
// Kaam: Element ke tamam HTML attributes hasil karna.
// Example: id, class, title aur data-topic.
// Loop har attribute ka naam aur value read karta hai.

document.getElementById("attributesBtn").addEventListener("click", function () {
    const element = document.getElementById("attributesExample");
    const attributes = element.attributes;

    let result = "";

    for (let i = 0; i < attributes.length; i++) {
        result += attributes[i].name + " = " +
                  attributes[i].value + "\n";
    }

    document.getElementById("attributesOutput").textContent = result;
});
