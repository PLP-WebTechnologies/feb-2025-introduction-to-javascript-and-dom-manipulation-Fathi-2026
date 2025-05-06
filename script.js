document.addEventListener("DOMContentLoaded", () => {
    const changeBtn = document.getElementById("change-btn");
    const infoText = document.getElementById("info-text");
    const addElementBtn = document.getElementById("add-element-btn");
    const removeElementBtn = document.getElementById("remove-element-btn");
    const dynamicContainer = document.getElementById("dynamic-container");
  
    changeBtn.addEventListener("click", () => {
      infoText.textContent = "The text and style have been changed!";
      infoText.style.color = "white";
      infoText.style.backgroundColor = "teal";
      infoText.style.padding = "10px";
      infoText.style.borderRadius = "5px";
    });
  
    addElementBtn.addEventListener("click", () => {
      const newDiv = document.createElement("div");
      newDiv.textContent = "I'm a new element!";
      newDiv.className = "dynamic-item";
      dynamicContainer.appendChild(newDiv);
    });
  
    removeElementBtn.addEventListener("click", () => {
      const lastChild = dynamicContainer.lastElementChild;
      if (lastChild) {
        dynamicContainer.removeChild(lastChild);
      }
    });
  });
  