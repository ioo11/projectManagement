function getData(dataType) {
    var xhr = new XMLHttpRequest()
    xhr.open("GET", "../api/" + dataType, false)
    xhr.send()
    return xhr.responseText
}

// function getTasks() {
//     // return getData("task")
//     return JSON.stringify(testTask)
// }

// function getProjects() {
//     // return getData("project")
//     return JSON.stringify(testProject)
// }

// function getUsers() {
//     // return getData("user")
//     return JSON.stringify(testUser)
// }

function projectSelected(card) {
    console.log(card)
}

function insertProject(project){
    let card = ProjectCard(project)
    $(".projects").prepend(card)
}

function insertTask(task){
    let card = TaskCard(task)
    $(".tasks").prepend(card)
}

function insertUser(user){
    let card = OwnerCard(user)
    $(".users").prepend(card)
}

function addUser() {
    let userName = $(".creation-user-card-title")[0].value
    if (userName == "") {
        $(".creation-user-card-title")[0].focus()
    }
    else {
        $.ajax({
            type: 'POST',
            url: '../api/user',
            // data: '{"Name":"'+ userName + '"}',
            data: JSON.stringify({"Name": userName}),
            dataType:"json",
            contentType: 'application/json; charset=utf-8',
            success: function (data) {
                console.log(data);
                let owner = new Owner(data.name, data.id)
                insertUser(owner)
            },
            error: function(data){
                console.log(data);
            }
        })
    }
}

function addProject(){
    let projectName = $(".creation-project-card-title")[0].value
    let projectDescription = $(".creation-project-card-description")[0].value
    if (projectName == "") {
        $(".creation-project-card-title")[0].focus()
    }
    else {
        $.ajax({
            type: 'POST',
            url: '../api/project',
            data: JSON.stringify({"Name": projectName, "Description": projectDescription}),
            dataType:"json",
            contentType: 'application/json; charset=utf-8',
            success: function (data) {
                console.log(data);
                let project = new Project(data.name, data.description, data.owner)
                insertProject(project)
            },
            error: function(data){
                console.log(data);
            }
        })
    }
}

function addTask(){
    let taskName = $(".creation-task-card-title")[0].value
    let taskDescription = $(".creation-task-card-description")[0].value
    if (taskName == "") {
        $(".creation-task-card-title")[0].focus()
    }
    else {
        $.ajax({
            type: 'POST',
            url: '../api/task',
            data: JSON.stringify({"Name": taskName, "Description": taskDescription}),
            dataType:"json",
            contentType: 'application/json; charset=utf-8',
            success: function (data) {
                console.log(data);
                let task = new Task(data.name, data.description)
                insertTask(task)
            },
            error: function(data){
                console.log(data);
            }
        })
    }
}