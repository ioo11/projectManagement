function ProjectCard(project) {
//   <select class="custom-select" id="inputGroupSelect01">
//     <option selected>Choose...</option>
//     <option value="1">One</option>
//     <option value="2">Two</option>
//     <option value="3">Three</option>
//   </select>
    let card = $("<div>", {
        "class": "card project-card"
    }).click(function(){
        projectSelected(card)
    })
    let cardBody = $("<div>", {
        "class": "card-body"
    })
    let cardTitle = $("<h3>", {
        text: project.title,
        "class": "card-title"
    })
    let cardText = $("<p>", {
        text: project.description,
        "class": "card-text"
    })
    let cardOwnerLink = $("<button>", {
        type: "button",
        "class": "btn btn-primary btn-sm",
        text: project.owner
    })
    let select = $("<select>", {
        "class":"custom-select"
    })
    .append($("<option>",{value:"OPEN", text:"Открыт"}))
    .append($("<option>",{value:"CLOSED", text:"Закрыт"}))
    .val(project.status)
    return card.append(cardBody.append(cardTitle, cardText, cardOwnerLink, select))
}

function TaskCard(task) {
    let card = $("<div>", {
        "class": "card task-card"
    })
    let cardBody = $("<div>", {
        "class": "card-body"
    })
    let cardTitle = $("<h3>", {
        text: task.title,
        "class": "card-title"
    })
    let cardText = $("<p>", {
        text: task.description,
        "class": "card-text"
    })
    let select = $("<select>", {
        "class":"custom-select"
    })
    .append($("<option>",{value:"OPEN", text:"Открыт"}))
    .append($("<option>",{value:"CLOSED", text:"Закрыт"}))
    .val(task.status)
    console.log(task)
    return card.append(cardBody.append(cardTitle, cardText, select))
}

function OwnerCard(owner) {
    let card = $("<div>", {
        "class": "card owner-card"
    })
    let cardBody = $("<div>", {
        "class": "card-body"
    })
    let cardTitle = $("<h3>", {
        text: owner.name,
        "class": "card-title"
    })
    let cardText = $("<p>", {
        text: "id: " + owner.id,
        "class": "card-text"
    })
    return card.append(cardBody.append(cardTitle, cardText))
}

function CreationProjectCard() {
    let card = $("<div>", {
        "class": "card creation-project-card"
    })
    let cardBody = $("<div>", {
        "class": "card-body"
    })
    let title = $("<input>", {
        type: "text",
        "class": "creation-project-card-title form-control",
        placeholder: "Название",

    })
    let description = $("<input>", {
        type: "text",
        "class": "creation-project-card-description  form-control",
        placeholder: "Описание",
        css:{
            margin:"5px 0px"
        }
    })
    let createButton = $("<button>", {
        type: "button",
        "class": "add-project btn btn-success btn-sm",
        text: "Добавить проект"
    }).click(function(){addProject()})
    return card.append(cardBody.append(title, description, createButton))
}

function CreationTaskCard() {
    let card = $("<div>", {
        "class": "card creation-task-card"
    })
    let cardBody = $("<div>", {
        "class": "card-body"
    })
    let title = $("<input>", {
        type: "text",
        "class": "creation-task-card-title form-control",
        placeholder: "Название",

    })
    let description = $("<input>", {
        type: "text",
        "class": "creation-task-card-description form-control",
        placeholder: "Описание",
        css:{
            margin:"5px 0px"
        }
    })
    let createButton = $("<button>", {
        type: "button",
        "class": "add-task btn btn-success btn-sm",
        text: "Добавить задачу"
    }).click(function(){addTask()})
    return card.append(cardBody.append(title, description, createButton))
}

function CreationUserCard() {
    let card = $("<div>", {
        "class": "card creation-user-card"
    })
    let cardBody = $("<div>", {
        "class": "card-body"
    })
    let title = $("<input>", {
        type: "text",
        "class": "creation-user-card-title form-control",
        placeholder: "Имя пользователя",
        css:{
            margin:"5px 0px"
        }

    })
    let createButton = $("<button>", {
        type: "button",
        "class": "add-task btn btn-success btn-sm",
        text: "Добавить пользователя"
    }).click(function(){addUser()})
    return card.append(cardBody.append(title, createButton))
}