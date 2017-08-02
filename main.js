// The Form Data
let formData = [
  // For demonstration purposes,
  // the first form element has been added to the HTML file as a comment
  // compare the input in the HTML file with the contents of this first object
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current Website URL",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

// HINTS:
// As you can see, we access the first element in the array
// with [0] and then grab the property "label" using the "." operator
( function(){
  // Select the first element from the array
  let first = formData[ 0 ];
  // Log the first object
  console.log( first );
  // Log the string "First Name"
  console.log( first.label );
} )();


// -------- Your Code Goes Below this Line --------
function createForm() {
  let formBody = document.getElementById('fields');


  for (let counter = 0; counter < formData.length; counter++) {
    if (formData[counter]["type"] === "select") {
      let select = document.createElement("select");
      formBody.appendChild(select);
      let optionDefault = document.createElement("option");
      optionDefault.innerHTML = "Select a language...";
      select.appendChild(optionDefault);
      for (let x = 0; x < formData[counter]["options"].length; x++) {
        let optionValue = document.createElement("option");
        optionValue.innerHTML = formData[counter]["options"][x]["label"];
        optionValue.setAttribute("value", formData[counter]["options"][x]["value"]);
        select.appendChild(optionValue);
      } // end of "for" loop for adding the option and its values
    }

    else if (formData[counter]["type"] === "textarea") {
      let textarea = document.createElement("textarea");
      formBody.appendChild(textarea);
      textarea.setAttribute("placeholder", formData[counter]["label"]);
    }

    else {
      let newLabel = document.createElement('input');
      formBody.appendChild(newLabel);

      for (let key in formData[counter]) {
        newLabel.setAttribute(key, formData[counter][key])
        newLabel.setAttribute('placeholder', formData[counter]["label"]);
      } // end of attribute assignment for loop

      let icon = document.createElement('i');
      newLabel.appendChild(icon);
      icon.setAttribute('class', formData[counter]["icon"]);
      icon.className = "fa " + icon.className;
    } // end of "else" statement
  } // end of main for loop

} // end of createForm function

createForm();
