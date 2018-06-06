$(document).ready(function () {

    $(".projects").append(CreationProjectComponent().toHTML())
    $(".tasks").append(CreationTaskComponent().toHTML())
    $(".users").append(CreationUserComponent().toHTML())

    // loadProjects();
    // loadTasks();
    // loadUsers();

    PageManager.reloadProjects()
    PageManager.reloadTasks()
    PageManager.reloadUsers()

})

// function loadTasks() {
//     $.ajax({
//         type: 'GET',
//         url: '../api/task',
//         success: function (data) {
//             console.log(data);
//             data.forEach(e => insertTask(Task(e.name, e.description, e.id, e.status)))
//         },
//         error: function (data) {
//             console.log(data);
//         }
//     })
// }

// function loadProjects() {
//     $.ajax({
//         type: 'GET',
//         url: '../api/project',
//         success: function (data) {
//             console.log(data);
//             data.forEach(e => insertProject(Project(e.name, e.description, e.owner, e.id, e.status)))
//         },
//         error: function (data) {
//             console.log(data);
//         }
//     })
// }

// function loadUsers() {
//     $.ajax({
//         type: 'GET',
//         url: '../api/user',
//         success: function (data) {
//             console.log(data);
//             data.forEach(element => insertUser(Owner(element.name, element.id)))

//         },
//         error: function (data) {
//             console.log(data);
//         }
//     })
// }