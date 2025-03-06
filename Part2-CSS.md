# 🔥 Styling the Page (Cascading Style Sheets)

In this second part of the session, you will add _style_ to your app by using CSS (Cascading Style Sheets).

---

## 🎯 **Objective**

By the end of this session, you will:

✅ Understand the basic structure of the CSS language  
✅ Use a CSS _grid_ to better organise the sections
✅ Add new styles to the app's body, headings and images

---

## 📱 **Step 1: Organise sections into a grid (15 mins)**

Notice that our sections have `id`'s (e.g. `id='section-1'`), and our main `<div>` also has an `id`:

```html
<div id="grid">
    <div id="section-1" class="section">...</div>
</div>
```

In the file `app.css` we can organise these `div`'s into a **grid**!

```css
#grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
        "section-1 section-2"
        "section-3 section-4";
    grid-gap: 10px;
}
```

and we can give each `section` some style as follows:

```css
.section {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
}
```

Note that `#grid` refers to the element of the page with `id='grid'` and `.section` refers to all the elements with `class='section'`. So we use `id` (unique elements) and `class` (collection of elements) to decide which elements to style.

## 💋 **Step 2: Style the `body`, `headings`, and `img` (30 mins)**

We can also add style to the whole body of the app

```css
body {
    font-family: Arial, sans-serif;
    background-color: rgb(255, 255, 255);
    padding: 20px;
}
```

to some of the headings

```css
h1 {
    color: red;
    margin: 0 0 20px 0;
}

h2 {
    color: blue;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
```

or even to a table, if we have one:

```css
table {
    width: 100%;
    border-collapse: collapse;
    text-align: left;
}

td,
th {
    padding: 10px;
    border-bottom: 1px solid black;
}
```

Take your time to add some style to the elements of your app.
