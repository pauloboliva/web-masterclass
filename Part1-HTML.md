# 🔥 Introduction to HTML!

Welcome to your first step in **web development**! 🚀 In this session, you will explore an HTML template and modify it to understand how web pages are structured.

---

## 🎯 **Objective**

By the end of this exercise, you will:

✅ Understand the basic structure of an HTML document  
✅ Add new content to personalize your page  
✅ Modify headings, paragraphs, and sections

---

## 🏗 **Step 1: Understand the Template (5 mins)**

Download the given [template zip folders](/src/app-template.zip). In it you will find three files: `app.html`, `app.css`, and `app.js`. In this section we will work on `app.html`. Open the file on VS Code, and take a look at the contents of the HTML template file. You'll find a document with the following structure:

```html
<!DOCTYPE html>
<html>
    <head>
        ...
    </head>
    <body>
        ...
    </body>
</html>
```

That's your starter template. Each of `<html>`, `<head>`, and `<body>` are called **tags**. These tags are used to struture the document.

We'll be mainly working inside the `<body>` tag of the document, but let's start giving our page a `<title>`. In the `<head>` section, include a title as follows:

```html
<!DOCTYPE html>
<html>
    <head>
        <title>..Choose your Title..</title>
    </head>
    ...
</html>
```

Load the page on the web browser and make sure the title appers on the top of the browsers navigation bar.

## 📃 **Step 2: Add Your Content (15 mins)**

What's your app about? Mine is about my pet Luna. Choose a topic, and then include details about your on the four different sections of the page:

```html
<div id="section-1" class="section">
    <h2>Section 1</h2>
    <div>Paragraph 1</div>
</div>
```

The title of each section should go inside the `<h2>` tag (_heading size 2_), while the content goes into the `<div>` tag (which stands for _division_).

## 🎆 **Step 3: Adding Images and Links (10 mins)**

A app would not be complete with a few images and hyperlinks. You can add an image by finding its URL and then including the `<img>` tag in one of your sections. For instance, in my case I did:

```html
<img
    width="200"
    src="https://cdn05.zipify.com/ncIhijRpIAr4_sSv1Ua5nb1XI6Y=/fit-in/3840x0/7066c6b08ea94801b47f43b44e7560a3/15.jpeg"
    alt="Luna the dog"
    title="Luna the dog"
/>
```

Adjust the `width` of the image if necessary.

The `title` is what appears on the user hovers the mouse over the image, while `alt` is the _alternative text_ (alt text) that is used for accessibility, e.g. visually impared users an listen to the description of the image.

Use the `<a>` tag to add a link (also called a _hyperlink_). For instance, in my case I did:

```html
<a href="https://en.wikipedia.org/wiki/Maltese_dog" target="_blank">
    Maltese dogs
</a>
are the best...
```

Use `<table>` to add a table in one of the sections. Note that `<tr>` stands for _table row_, `<th>` for _table heading_, and `<td>` for _table data_:

```html
<table>
    <thead>
        <tr>
            <th>Time</th>
            <th>Activity</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>8:00 AM</td>
            <td>Breakfast</td>
        </tr>
        <tr>
            <td>12:00 PM</td>
            <td>Lunch</td>
        </tr>
        <tr>
            <td>6:00 PM</td>
            <td>Dinner</td>
        </tr>
    </tbody>
</table>
```

Make sure that after each step you reload the page on the web browser to test your application.
