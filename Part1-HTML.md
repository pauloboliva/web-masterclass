# 🔥 Introduction to HTML!

Welcome to your first step in **web development**! 🚀 In this session, you will explore an HTML template and modify it to understand how web pages are structured.

---

## 🎯 **Objective**

By the end of this exercise, you will:

✅ Understand the basic structure of an HTML document  
✅ Add new content to personalize your page  
✅ Modify headings, paragraphs, and sections

---

## 🏗 **Step 1: Understand the Template**

Open the given **HTML template** and take a look at the structure. You'll find a document with the following content:

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

That's your starter template. We'll be mainly working on the `<body>` of the document, but let's start giving our page a TITLE. In the `<head>` section, include a title as follows:

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Choose your Title</title>
    </head>
    <body>
        ...
    </body>
</html>
```

Load the page on the web browser and make sure the title appers on the top of the browsers navigation bar.

## 📃 **Step 2: Add Your Content**

What's your app about? Mine is about my pet Luna. Choose a topic, and then include details about your on the four different sections of the page:

```
    <div id="section-1" class="section">
        <h2>Section 1</h2>
        <div>Paragraph 1</div>
    </div>
```

The title of each section should go inside the `<h2>` tag (_heading size 2_), while the content goes into the `<div>` tag (which stands for _division_).

## 🎆 Step 3: Adding Images and Links\*\*

A app would not be complete with a few images and hyperlinks. You can add an image by finding its URL and then including the `<img>` tag in one of your sections. For instance, in my case I did:

```
<img
    id="image"
    class="image-left"
    width="200"
    src="https://cdn05.zipify.com/ncIhijRpIAr4_sSv1Ua5nb1XI6Y=/fit-in/3840x0/7066c6b08ea94801b47f43b44e7560a3/15.jpeg"
    alt="Luna the dog"
    title="Luna the dog"
/>
```

The `title` is what appears on the user hovers the mouse over the image, while `alt` is the _alternative text_ (alt text) that is used for accessibility, e.g. visually impared users an listen to the description of the image.

Use the `<a>` tag to add a link (also called a _hyperlink_). For instance, in my case I did:

```
    <a
        href="https://en.wikipedia.org/wiki/Maltese_dog"
        target="_blank"
    >
        Maltese dogs
    </a> are the best...
```

Make sure that after each step you reload the page on the web browser to test your application.
