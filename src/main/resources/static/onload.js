$(document).ready(function () {

    $(".projects").append(CreationProjectComponent().toHTML())
    $(".tasks").append(CreationTaskComponent().toHTML())
    $(".users").append(CreationUserComponent().toHTML())

    PageManager.reloadProjects()
    PageManager.reloadTasks()
    PageManager.reloadUsers()

})