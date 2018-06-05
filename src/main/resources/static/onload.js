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
            data.forEach(e => insertTask(Task(e.name, e.description, e.id, e.status)))
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
            data.forEach(e => insertProject(Project(e.name, e.description, e.owner, e.id, e.status)))
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