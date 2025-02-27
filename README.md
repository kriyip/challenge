# Spring '23 Challenge
> If you feel more comfortable working with React, check out [this other repo](https://github.com/dailypenn/challenge-react).

Hey there! Welcome to the DP's tech challenge~

The goal of this challenge is for you to demonstrate the ability to:

1. Build polished, production grade websites
2. Build products with minimal direction
3. Work within a set timeline

Remeber that at DP, we do not judge anyone by his/ her initial performances. Instead, what we value is the progress you made from the moment you received your challenge to the moment your turned in your code. So put efforts into the challenge and good luck.

In this challenge, you'll be building something you may have seen before:
a quiz for [Under the Button](https://www.underthebutton.com/article/2020/01/parents-obligated-talk). We'll be providing you with the quiz's content in `index.js`, but building out the website is completely up to you!

---

### Getting Started
- Make a copy of this repository by either running `git clone https://github.com/dailypenn/challenge.git` on your local computer or simply click on the Green **Code** button and then click on **Download ZIP**.
- Open `index.html` in a web browser to view the page.
- If you made any changes to your code, just reload `index.html` in your browser to see the updates.

---

### General Structure

```
index.html          Root HTML file
index.css           Root CSS file
index.js            Root JS file
Submissions.txt     Text file used for submission
```

---

### General Requirements
- We want you to duplicate the functionality of this [quiz](https://www.underthebutton.com/article/2020/01/parents-obligated-talk). This means showing each question with its options as a form that people can fill out and submit for a response.
- Your code should use the variable `data` in `index.js` as the content to show in the form.
- Do not **hardcode** anything as we will edit `data` and do some simple tests. Any edit to `data` takes the following forms: 1) changing the number of questions 2) changing the number of options to each question 3) changing the number of results 4) changing the text of any question, option, or result. You can assume that `data` will be well-formatted.
- Your quiz should be functional. The response shown doesn't have to match UTB's actual form, but it should at least be reproducible. Selecting answers and submitting should show one of the responses. Reloading the page and selecting the same answers should show the same response. 

---

### Required Features
- For each question, there should be at most 1 option that is chosen at the same time.
- When the user clicks on **show me my results** button, he/she should not be able to modify the form.
- There should be a **retake quiz** button after the result is shown that allows the user to take the quiz again.
- The user has to give an option to each question before he/she is able to click on **show me my results** button and see the results to the quiz.
- If the majority of responses to the form is A, the first element in `results` should be returned. And if the majority responses is B, the second element in `results` is returned, and so on. Therefore, if you have k options, you should also have k elements in `results`.

---

### Tools
- You can use whatever packages you want. In the provided sample code, we included [jQuery](https://jquery.com/) which makes it easier to change the DOM tree and manipulate HTML elements. We have also included [Bootstrap](https://getbootstrap.com/) for styling purpose. But feel free to delete them if you find any other better substitutes.

---

### Getting Help
If you have any questions about the challenge or need some help, send an email to **Bach Tran** (engineeringmanager@dailypennsylvanian.com)

---

### Submission
Either **ONE** of the following will work:
- Fork this repository and commit your changes to your fork, and submit the **GitHub link** to your fork (please make the repo **public** so we can have access to your code)
- Zip your code and submit the compressed package

Besides your working code, please also take some time to complete `Submissions.txt` so we can have a better understanding of how you feel about the challenge.

After that, you should make your submission [HERE](https://developers.thedp.com/apply). Congratulations, you have finished the challenge!
