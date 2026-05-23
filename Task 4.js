const content = {
  title: "The Ultimate Guide to Mastering Modern JavaScript Frameworks",
  description: "In this comprehensive tutorial, we will explore the core concepts of asynchronous programming, closures, and the event loop in deep detail."
};

const simpleTitle = content.title.slice(0, 20);
const simpleDescription = content.description.slice(0, 50);

console.log("Simple Title:", simpleTitle);

console.log("Simple Desc:", simpleDescription);



const truncate = (text, limit) => {
  return text.length > limit ? text.slice(0, limit) + "..." : text;
};

const cleanTitle = truncate(content.title, 20);
const cleanDescription = truncate(content.description, 50);

console.log("Clean Title:", cleanTitle);


console.log("Clean Desc:", cleanDescription);