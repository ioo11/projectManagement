function ProjectComponent() {
    let component = {}
    component.model = {
        owner: "", // TODO something 
        title: "",
        description: "",
        id: "",
        status: ""
    }
    component.toHTML = function () {
        let card = $("<div>", {
            "class": "card project-card",
            id: "project" + this.model.id
        })
        let cardBody = $("<div>", {
            "class": "card-body"
        })
        let cardTitle = $("<h3>", {
            text: this.model.title,
            "class": "card-title"
        })
        let cardText = $("<p>", {
            text: this.model.description,
            "class": "card-text"
        })
        let cardOwnerLink = $("<button>", {
            type: "button",
            "class": "btn btn-primary btn-sm",
            text: this.model.owner != null ? this.model.owner.name: ""
        })
        let select = $("<p>", {
            "class": "card-text",
            text: "Статус: " + (this.model.status == "OPEN" ? "Открыт" : "Закрыт")
        })
        let changeButton = $("<button>", {
            type: "button",
            "class": "btn btn-secondary btn-sm",
            text: "Редактировать"
        }).click(function () { PageManager.editProject(component) })
        // let select = $("<select>", {
        //     "class": "custom-select"
        // })
        //     .append($("<option>", { value: "OPEN", text: "Открыт" }))
        //     .append($("<option>", { value: "CLOSED", text: "Закрыт" }))
        //     .val(this.model.status)
        return card.append(cardBody.append(cardTitle, cardText, cardOwnerLink, select, changeButton))
    }
    return component
}

function UserComponent() {
    let component = {}
    component.model = {
        name: "",
        id: ""
    }
    component.toHTML = function () {
        let card = $("<div>", {
            "class": "card user-card",
            id: "user" + this.model.id
        })
        let cardBody = $("<div>", {
            "class": "card-body"
        })
        let cardTitle = $("<h3>", {
            text: this.model.name,
            "class": "card-title"
        })
        let cardText = $("<p>", {
            text: "id: " + this.model.id,
            "class": "card-text"
        })
        let changeButton = $("<button>", {
            type: "button",
            "class": "btn btn-secondary btn-sm",
            text: "Редактировать"
        }).click(function () { PageManager.editUser(component) })
        return card.append(cardBody.append(cardTitle, cardText, changeButton))
    }
    return component
}

function TaskComponent() {
    let component = {}
    component.model = {
        title: "",
        description: "",
        id: "",
        status: ""
    }
    component.toHTML = function () {
        let card = $("<div>", {
            "class": "card task-card",
            id: "task" + this.model.id
        })
        let cardBody = $("<div>", {
            "class": "card-body"
        })
        let cardTitle = $("<h3>", {
            text: this.model.title,
            "class": "card-title"
        })
        let cardText = $("<p>", {
            text: this.model.description,
            "class": "card-text"
        })
        let select = $("<p>", {
            "class": "card-text",
            text: "Статус: " + (this.model.status == "OPEN" ? "Открыт" : "Закрыт")
        })
        let changeButton = $("<button>", {
            type: "button",
            "class": "btn btn-secondary btn-sm",
            text: "Редактировать"
        }).click(function () { PageManager.editTask(component) })
        // let select = $("<select>", {
        //     "class": "custom-select"
        // })
        //     .append($("<option>", { value: "OPEN", text: "Открыт" }))
        //     .append($("<option>", { value: "CLOSED", text: "Закрыт" }))
        //     .val(this.model.status)
        return card.append(cardBody.append(cardTitle, cardText, select, changeButton))
    }
    return component
}

function UpdatingProjectComponent() {
    let component = {}
    component.model = {
        owner: "", // TODO something 
        title: "",
        description: "",
        id: "",
        status: ""
    }
    component.toHTML = function () {
        let card = $("<div>", {
            "class": "card project-card project-updating-card",
            id: "project" + this.model.id
        })
        let cardBody = $("<div>", {
            "class": "card-body"
        })
        let cardTitle = $("<input>", {
            type: "text",
            value: this.model.title,
            "class": "card-title project-updating-title"
        })
        let cardText = $("<input>", {
            type: "text",
            value: this.model.description,
            "class": "card-text project-updating-description"
        })
        let cardOwnerLink = $("<button>", {
            type: "button",
            "class": "btn btn-primary btn-sm",
            text: this.model.owner !== null? this.model.owner.name : ""
        })
        let select = $("<select>", {
            "class": "custom-select project-updating-status"
        })
            .append($("<option>", { value: "OPEN", text: "Открыт" }))
            .append($("<option>", { value: "CLOSED", text: "Закрыт" }))
            .val(this.model.status)
        let changeButton = $("<button>", {
            type: "button",
            "class": "btn btn-secondary btn-sm",
            text: "Применить"
        }).click(function () { PageManager.editProjectConfirm(component)})

        return card.append(cardBody.append(cardTitle, cardText, cardOwnerLink, select, changeButton))
    }
    return component
}

function UpdatingTaskComponent() {
    let component = {}
    component.model = {
        title: "",
        description: "",
        id: "",
        status: ""
    }
    component.toHTML = function () {
        let card = $("<div>", {
            "class": "card task-card task-updating-card",
            id: "task" + this.model.id
        })
        let cardBody = $("<div>", {
            "class": "card-body"
        })
        let cardTitle = $("<input>", {
            type: "text",
            value: this.model.title,
            "class": "card-title task-updating-title"
        })
        let cardText = $("<input>", {
            type: "text",
            value: this.model.description,
            "class": "card-text task-updating-description"
        })
        let select = $("<select>", {
            "class": "custom-select task-updating-status"
        })
            .append($("<option>", { value: "OPEN", text: "Открыт" }))
            .append($("<option>", { value: "CLOSED", text: "Закрыт" }))
            .val(this.model.status)
        let changeButton = $("<button>", {
            type: "button",
            "class": "btn btn-secondary btn-sm",
            text: "Применить"
        }).click(function () { PageManager.editTaskConfirm(component)})

        return card.append(cardBody.append(cardTitle, cardText, select, changeButton))
    }
    return component
}

function UpdatingUserComponent() {
    let component = {}
    component.model = {
        name: "",
        id: ""
    }
    component.toHTML = function () {
        let card = $("<div>", {
            "class": "card user-card user-updating-card",
            id: "user" + this.model.id
        })
        let cardBody = $("<div>", {
            "class": "card-body"
        })
        let cardTitle = $("<input>", {
            type: "text",
            value: this.model.name,
            "class": "card-title user-updating-title"
        })
        // let cardText = $("<input>", {
        //     type: "text",
        //     value: this.model.description,
        //     "class": "card-text user-updating-description"
        // })
        let changeButton = $("<button>", {
            type: "button",
            "class": "btn btn-secondary btn-sm",
            text: "Применить"
        }).click(function () { PageManager.editUserConfirm(component)})

        return card.append(cardBody.append(cardTitle, /*cardText,*/ changeButton))
    }
    return component
}

function CreationProjectComponent() {
    let component = {}
    component.click = function (e) {
        console.log("creation project clicked")
    }
    component.toHTML = function () {
        let card = $("<div>", { "class": "card creation-project-card" })
        let cardBody = $("<div>", { "class": "card-body" }).click(
            function () { component.click() }
        )
        let title = $("<input>", {
            type: "text",
            "class": "creation-project-card-title form-control",
            placeholder: "Название",
        })
        let description = $("<input>", {
            type: "text",
            "class": "creation-project-card-description  form-control",
            placeholder: "Описание",
            css: { margin: "5px 0px" }
        })
        let createButton = $("<button>", {
            type: "button",
            "class": "add-project btn btn-success btn-sm",
            text: "Добавить проект"
        }).click(function () { PageManager.createProject() })
        return card.append(cardBody.append(title, description, createButton))
    }
    return component
}

function CreationTaskComponent() {
    let component = {}
    component.toHTML = function () {
        let card = $("<div>", { "class": "card creation-task-card" })
        let cardBody = $("<div>", { "class": "card-body" })
        let title = $("<input>", {
            type: "text",
            "class": "creation-task-card-title form-control",
            placeholder: "Название",
        })
        let description = $("<input>", {
            type: "text",
            "class": "creation-task-card-description form-control",
            placeholder: "Описание",
            css: { margin: "5px 0px" }
        })
        let createButton = $("<button>", {
            type: "button",
            "class": "add-task btn btn-success btn-sm",
            text: "Добавить задачу"
        }).click(function () { PageManager.createTask() })
        return card.append(cardBody.append(title, description, createButton))
    }
    return component
}

function CreationUserComponent() {
    let component = {}
    component.toHTML = function () {
        let card = $("<div>", { "class": "card creation-user-card" })
        let cardBody = $("<div>", { "class": "card-body" })
        let title = $("<input>", {
            type: "text",
            "class": "creation-user-card-title form-control",
            placeholder: "Имя пользователя",
            css: {
                margin: "5px 0px"
            }
        })
        let createButton = $("<button>", {
            type: "button",
            "class": "add-user btn btn-success btn-sm",
            text: "Добавить пользователя"
        }).click(function () { PageManager.createUser() })
        return card.append(cardBody.append(title, createButton))
    }
    return component
}

function CardListComponent() {
    let component = {}
    component.items = []
    component.toHTML = function () {
        let wrap = []
        this.items.forEach(e => wrap.push(e.toHTML()))
        return wrap
    }
    return component
}