# inspect-andriod
Open Inspect Elements on Mobile Phone Browsers.

## Step 1: Create a New Bookmark
1. Open your mobile browser (e.g., Chrome, Safari).
2. Create a new bookmark. You can do this by visiting any web page and adding it to your bookmarks.

## Step 2: Edit the Bookmark’s URL
1. Open the bookmarks manager in your browser.
2. Find the newly created bookmark and edit it.
3. Replace the bookmark’s URL with the following JavaScript code.
4. Save the changes.

```javascript
javascript:(function() {
  var script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/eruda/2.4.1/eruda.min.js';
  document.body.appendChild(script);
  script.onload = function () { eruda.init(); }
})();
```

## Step 3: Use the Bookmarklet
1. Navigate to the web page you want to inspect.
2. Open your bookmarks and tap the “Inspect Element” bookmark.
3. The Eruda console will appear at the bottom of the screen, allowing you to inspect elements, view console logs, and more.


## Step Images

| ![Image 1](./images/image1.png) | ![Image 2](./images/image2.png) |
|---------------------------------|---------------------------------|
| ![Image 3](./images/image3.png) | ![Image 4](./images/image4.png) |
| ![Image 5](./images/image5.png) | ![Image 6](./images/image6.png) |
| ![Image 7](./images/image7.png) | ![Image 8](./images/image8.png) |


## Tutorial

[![Watch the tutorial]()]()

## 🌐 Socials:
[![Facebook](https://img.shields.io/badge/Facebook-%231877F2.svg?logo=Facebook&logoColor=white)](https://facebook.com/anbuinfosec) [![Instagram](https://img.shields.io/badge/Instagram-%23E4405F.svg?logo=Instagram&logoColor=white)](https://instagram.com/anbuinfosec) [![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white)](https://linkedin.com/in/anbuinfosec) [![YouTube](https://img.shields.io/badge/YouTube-%23FF0000.svg?logo=YouTube&logoColor=white)](https://youtube.com/@anbuinfosec) [![Codepen](https://img.shields.io/badge/Codepen-000000?style=for-the-badge&logo=codepen&logoColor=white)](https://codepen.io/anbuinfosec) 