let PageManager = function () {
    let manager = {}

    manager.projectList = CardListComponent()
    manager.taskList = CardListComponent()
    manager.userList = CardListComponent()

    manager.loadProjects = function () {
        $.ajax({
            type: 'GET',
            url: '../api/project',
            success: function (data) {
                console.log(data);
                data.forEach(function (e) {
                    console.log(e)
                    let component = ProjectComponent()
                    component.model.id = e.id
                    component.model.title = e.name
                    component.model.status = e.status
                    component.model.description = e.description
                    component.model.owner = e.owner
                    PageManager.showProject(component)
                })
            },
            error: function (data) {
                console.log(data);
            }
        })
    }
    manager.loadTasks = function () {
        $.ajax({
            type: 'GET',
            url: '../api/task',
            success: function (data) {
                console.log(data);
                data.forEach(function (e) {
                    console.log(e)
                    let component = TaskComponent()
                    component.model.id = e.id
                    component.model.title = e.name
                    component.model.status = e.status
                    component.model.description = e.description
                    PageManager.showTask(component)
                })
            },
            error: function (data) {
                console.log(data);
            }
        })
    }
    manager.loadUsers = function () {
        $.ajax({
            type: 'GET',
            url: '../api/user',
            success: function (data) {
                console.log(data);
                data.forEach(function (e) {
                    console.log(e)
                    let component = UserComponent()
                    component.model.id = e.id
                    component.model.name = e.name
                    PageManager.showUser(component)
                })
            },
            error: function (data) {
                console.log(data);
            }
        })
    }

    manager.showAllProjects = function () {
        $(".projects").prepend(this.projectList.toHTML())
    }
    manager.removeProjects = function () {
        $(".project-card").remove()
    }
    manager.reloadProjects = function () {
        this.removeProjects()
        this.projectList.items = []
        this.loadProjects()
    }

    manager.showAllTasks = function () {
        $(".tasks").prepend(this.taskList.toHTML())
    }
    manager.removeTasks = function () {
        $(".task-card").remove()
    }
    manager.reloadTasks = function () {
        this.removeTasks()
        this.taskList.items = []
        this.loadTasks()
    }

    manager.showAllUsers = function () {
        $(".users").prepend(this.userList.toHTML())
    }
    manager.removeUsers = function () {
        $(".user-card").remove()
    }
    manager.reloadUsers = function () {
        this.removeUsers()
        this.userList.items = []
        this.loadUsers()
    }

    manager.createUser = function () {
        let userName = $(".creation-user-card-title")[0].value
        if (userName == "") {
            $(".creation-user-card-title")[0].focus()
        }
        else {
            $.ajax({
                type: 'POST',
                url: '../api/user',
                data: JSON.stringify({ "Name": userName }),
                dataType: "json",
                contentType: 'application/json; charset=utf-8',
                success: function (data) {
                    console.log(data);
                    let user = new UserComponent()
                    user.model.name = data.name
                    user.model.id = data.id
                    manager.showUser(user)
                },
                error: function (data) {
                    console.log(data);
                }
            })
        }
    }
    manager.createProject = function () {
        let projectName = $(".creation-project-card-title")[0].value
        let projectDescription = $(".creation-project-card-description")[0].value
        if (projectName == "") {
            $(".creation-project-card-title")[0].focus()
        }
        else {
            $.ajax({
                type: 'POST',
                url: '../api/project',
                data: JSON.stringify({
                    "Name": projectName,
                    "Description": projectDescription
                }),
                dataType: "json",
                contentType: 'application/json; charset=utf-8',
                success: function (data) {
                    console.log(data);
                    let project = ProjectComponent()
                    project.model.title = data.name
                    project.model.id = data.id
                    project.model.description = data.description
                    project.model.owner = data.owner
                    project.model.status = data.status
                    manager.showProject(project)
                },
                error: function (data) {
                    console.log(data);
                }
            })
        }
    }
    manager.createTask = function () {
        let taskName = $(".creation-task-card-title")[0].value
        let taskDescription = $(".creation-task-card-description")[0].value
        if (taskName == "") {
            $(".creation-task-card-title")[0].focus()
        }
        else {
            $.ajax({
                type: 'POST',
                url: '../api/task',
                data: JSON.stringify({ "Name": taskName, "Description": taskDescription }),
                dataType: "json",
                contentType: 'application/json; charset=utf-8',
                success: function (data) {
                    console.log(data);
                    let task = TaskComponent()
                    task.model.title = data.name
                    task.model.id = data.id
                    task.model.description = data.description
                    task.model.status = data.status
                    manager.showTask(task)
                },
                error: function (data) {
                    console.log(data);
                }
            })
        }
    }

    manager.showProject = function(projectComponent){
        manager.projectList.items.push(projectComponent)
        $(".projects").prepend(projectComponent.toHTML())
    }
    manager.showUser = function(userComponent){
        manager.userList.items.push(userComponent)
        $(".users").prepend(userComponent.toHTML())
    }
    manager.showTask = function(taskComponent){
        manager.taskList.items.push(taskComponent)
        $(".tasks").prepend(taskComponent.toHTML())
    }
    
    return manager
}()