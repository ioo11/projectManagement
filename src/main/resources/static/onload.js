$(document).ready(function () {
    $(".projects").append(CreationProjectCard())
    $(".tasks").append(CreationTaskCard())
    $(".users").append(CreationUserCard())

    initProjects();
    initTasks();
    initUsers();
})

function initTasks() {
    $.ajax({
        type: 'GET',
        url: '../api/task',
        success: function (data) {
            console.log(data);
            data.forEach(element => insertTask(Task(element.name, element.description)))

        },
        error: function (data) {
            console.log(data);
        }
    })
}

function initProjects() {
    $.ajax({
        type: 'GET',
        url: '../api/project',
        success: function (data) {
            console.log(data);
            data.forEach(element => insertProject(Project(element.name, element.description, element.owner)))
        },
        error: function (data) {
            console.log(data);
        }
    })
}

function initUsers() {
    $.ajax({
        type: 'GET',
        url: '../api/user',
        success: function (data) {
            console.log(data);
            data.forEach(element => insertUser(Owner(element.name, element.id)))

        },
        error: function (data) {
            console.log(data);
        }
    })
}