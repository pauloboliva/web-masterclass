# 🔥 Styling the Page (Cascading Style Sheets)

In this final part, you will add some _dynamics_ to our application, by making things move 🕺.

---

## 🎯 **Objective**

By the end of this session, you will:

✅ Understand the purpose of the JavaScript language, and how it can be included in an application  
✅ Use a button to hide a section of the page
✅ Make an image move by clicking on it

---

## 📱 **Step 1: Hidding sections with a button (15 mins)**

In the `<h2>` heading of each section, add a `<button>` with an `onclick` event:

```html
<div id="section-1" class="section">
    <h2>
        About Luna
        <button onclick="toggleSection('section-1', event)">Hide</button>
    </h2>
    ...
</div>
```

Then, in your JavaScript file `app.js`, add the following JavaScript function:

```js
function toggleSection(sectionId, event) {
    // Find the section corresponding to this sectionId
    const section = document.getElementById(sectionId);

    // Find the text div inside the section
    const text = section.querySelector("div");

    // Toggle the display of the text div
    if (text.style.display === "none") text.style.display = "block";
    else text.style.display = "none";

    // Find the button inside the section
    const button = event.target;

    // Change the text of the button
    if (button.innerText === "Show") button.innerText = "Hide";
    else button.innerText = "Show";
}
```

Then test your app: Reload the page, and click on each of the button to make sure the corresponding sections are hidden.

## 🌠 **Step 2: Make an image move upon clicking on it (15 mins)**

As another example of a _dynamic application_, let us make the image `<img>` move once we click on it. The JavaScript code that we will need is as follows (and goes in the `app.js` file):

```js
function toggleImage() {
    // Find the image
    const image = document.getElementById("image");
    // Check class of image
    if (image.className === "image-left") image.className = "image-right";
    else image.className = "image-left";
}
```

We will need to add the following to our `app.css`

```css
#image {
    display: inline-block;
    position: absolute;
    border-radius: 10px;
    transition: right 0.5s ease-in-out, left 0.5s ease-in-out;
}

.image-left {
    left: 0px;
}

.image-right {
    left: 200px;
}
```

Take your time to test your app and make sure all is working as it should!
