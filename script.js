"use strict";

const contacts = [
  {
    fullName: "Leon Cuckovich",
    phone: "248-248-2488",
  },
  {
    fullName: "Lisa Cuckovich",
    phone: "248-248-2489",
  },
];

const showBtn = document.querySelector(".show");
const modal = document.querySelector(".modal");
const contactsContainer = document.querySelector(".contacts-container");
const contactsForm = document.querySelector("form");

const createContacts = () => {
  contactsContainer.innerHTML = "";
  contacts.forEach((contact, i) => {
    const newContact = document.createElement("li");
    newContact.classList.add("contact");
    const fullNameParagraph = document.createElement("p");
    const phoneParagraph = document.createElement("p");
    const trash = document.createElement("i");
    trash.classList.add("fa-solid", "fa-trash");
    trash.setAttribute("data-index", i);
    fullNameParagraph.textContent = contact.fullName;
    phoneParagraph.textContent = contact.phone;
    newContact.append(fullNameParagraph, phoneParagraph, trash);
    contactsContainer.append(newContact);
  });
  contactsForm.reset();
};

const toggleHide = () => {
  modal.classList.toggle("hide");
};

showBtn.addEventListener("click", toggleHide);

contactsForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const fullName = document.querySelector("#fullName").value;
  const phone = document.querySelector("#phone").value;
  const newContact = {
    fullName: fullName,
    phone: phone,
  };
  contacts.push(newContact);
  toggleHide();
  createContacts();
});

contactsContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-trash")) {
    const index = e.target.getAttribute("data-index");
    contacts.splice(index, 1);
    createContacts();
  }
});

createContacts();
