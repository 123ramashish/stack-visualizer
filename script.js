// Selecting the input element with class "text"
const text = document.querySelector(".text");

// Selecting the button element with class "push"
const push = document.querySelector(".push");

// Selecting the button element with class "pop"
const pop = document.querySelector(".pop");

// Selecting the button element with class "reset"
const reset = document.querySelector(".reset");

// Initializing an empty array to serve as a stack
const bucket = [];

// Selecting the element representing the top of the stack
const stack_top = document.querySelector(".stack-top");

// Selecting the element representing the last pushed item
const last_pushed = document.querySelector(".last-pushed");

// Selecting the element representing the last popped item
const last_popped = document.querySelector(".last-poped");

// Selecting the element representing the size of the stack
const stack_size = document.querySelector(".stack-size");

// Selecting the element representing the message box
const message = document.querySelector(".massage-box");

// Selecting the element representing the main stack bucket
const stack_bucket = document.querySelector(".main-stack-bucket");

// Event listener for the push button
push.addEventListener("click", function () {
  // Check if the input field is empty
  if (text.value === "") {
    // Display message if input is empty
    message.textContent = "Input is NULL";
    message.style.backgroundColor = "red";
    message.style.transition = "all 1s ease-in-out";
    message.style.textAlign = "center";
    message.style.fontSize = "30px";
  } else {
    // Push the input value into the stack
    bucket.push(text.value);

    // Clear the stack_bucket HTML content
    stack_bucket.innerHTML = "";

    // Loop through the bucket array to recreate stack elements
    bucket.forEach(function (item) {
      const p = document.createElement("p");
      p.textContent = item;
      p.style.width = "90%";
      p.style.padding = "6px";
      p.style.backgroundColor = "rgb(179, 176, 176)";
      p.style.boxShadow =
        "1px 1px rgb(109, 108, 108),0 0 1px 1px rgb(109, 108, 108)";
      p.style.textAlign = "center";
      p.style.margin = "2px";
      p.style.fontSize = "30px";
      stack_bucket.appendChild(p);
    });

    // Update the last pushed item and stack top
    last_popped.textContent = "";
    last_pushed.textContent = bucket[bucket.length - 2];
    stack_top.textContent = bucket[bucket.length - 1];

    // Update the stack size and display success message
    stack_size.textContent = bucket.length;
    message.textContent = "Item pushed";
    message.style.backgroundColor = "green";

    // Clear the input field
    text.value = "";
  }

  // Set timeout to reset message background color
  setTimeout(function () {
    message.style.backgroundColor = "bisque";
  }, 1000);
});

// Event listener for the pop button
pop.addEventListener("click", function () {
  // Check if the stack is empty
  if (bucket.length === 0) {
    // Display message if stack is empty
    message.textContent = "No item left to pop";
    message.style.backgroundColor = "red";
    message.style.transition = "all 1s ease-in-out";
    message.style.textAlign = "center";
    message.style.fontSize = "30px";
  } else {
    // Remove the last item from the stack
    last_popped.textContent = bucket[bucket.length - 1];
    bucket.pop();

    // Clear the stack_bucket HTML content
    stack_bucket.innerHTML = "";

    // Loop through the bucket array to recreate stack elements
    bucket.forEach(function (item) {
      const p = document.createElement("p");
      p.textContent = item;
      p.style.width = "90%";
      p.style.padding = "6px";
      p.style.backgroundColor = "rgb(179, 176, 176)";
      p.style.boxShadow =
        "1px 1px rgb(109, 108, 108),0 0 1px 1px rgb(109, 108, 108)";
      p.style.textAlign = "center";
      p.style.margin = "2px";
      p.style.fontSize = "30px";
      stack_bucket.appendChild(p);
    });

    // Display success message and update stack information
    message.textContent = "Item popped";
    message.style.backgroundColor = "green";
    stack_top.textContent = bucket.length > 0 ? bucket[bucket.length - 1] : "";
    last_pushed.textContent = "";
    stack_size.textContent = bucket.length;
  }

  // Set timeout to reset message background color
  setTimeout(function () {
    message.style.backgroundColor = "bisque";
  }, 1000);
});

// Event listener for the reset button
reset.addEventListener("click", function () {
  // Clear the bucket array
  bucket.splice(0);

  // Clear the stack_bucket HTML content
  stack_bucket.innerHTML = "";

  // Display message for resetting the bucket
  message.textContent = "Bucket reset";
  message.style.backgroundColor = "green";
  message.style.transition = "all 1s ease-in-out";
  message.style.textAlign = "center";
  message.style.fontSize = "30px";

  // Reset stack information to empty values
  last_pushed.textContent = "";
  last_popped.textContent = "";
  stack_top.textContent = "";
  stack_size.textContent = bucket.length;

  // Set timeout to reset message background color
  setTimeout(function () {
    message.style.backgroundColor = "bisque";
  }, 1000);
});
