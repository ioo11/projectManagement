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

    manager.showProject = function (projectComponent) {
        manager.projectList.items.push(projectComponent)
        $(".projects").prepend(projectComponent.toHTML())
    }
    manager.showUser = function (userComponent) {
        manager.userList.items.push(userComponent)
        $(".users").prepend(userComponent.toHTML())
    }
    manager.showTask = function (taskComponent) {
        manager.taskList.items.push(taskComponent)
        $(".tasks").prepend(taskComponent.toHTML())
    }

    manager.editProject = function (component) {
        console.log("editing project")
        console.log(component)
        updatingComponent = UpdatingProjectComponent()
        updatingComponent.model = component.model
        $("#project" + component.model.id).replaceWith(updatingComponent.toHTML())
    }
    manager.editTask = function (component) {
        console.log("editing task")
        console.log(component)
        updatingComponent = UpdatingTaskComponent()
        updatingComponent.model = component.model
        $("#task" + component.model.id).replaceWith(updatingComponent.toHTML())
    }
    manager.editUser = function (component) {
        console.log("editing user")
        console.log(component)
        updatingComponent = UpdatingUserComponent()
        updatingComponent.model = component.model
        $("#user" + component.model.id).replaceWith(updatingComponent.toHTML())
    }

    manager.editProjectConfirm = function (component) {
        let root = $("#project" + component.model.id)
        let title = root.find(".project-updating-title")[0].value
        if (title == "") {
            root.find(".project-updating-title")[0].focus()
        }
        else {
            let newComponent = ProjectComponent()
            newComponent.model.description = root.find(".project-updating-description")[0].value
            newComponent.model.id = component.model.id
            newComponent.model.owner = component.model.owner
            newComponent.model.status = root.find(".project-updating-status")[0].value
            newComponent.model.title = title
            t = manager.projectList.items.filter(function(e){
                return e.model.id !== component.model.id
            })
            manager.projectList.items = t
            console.log(newComponent)
            manager.sendProject(newComponent)
            root.remove()
        }
    }

    manager.editTaskConfirm = function (component) {
        let root = $("#task" + component.model.id)
        let title = root.find(".task-updating-title")[0].value
        if (title == "") {
            root.find(".task-updating-title")[0].focus()
        }
        else {
            let newComponent = TaskComponent()
            newComponent.model.description = root.find(".task-updating-description")[0].value
            newComponent.model.id = component.model.id
            newComponent.model.status = root.find(".task-updating-status")[0].value
            newComponent.model.title = title
            t = manager.taskList.items.filter(function(e){
                return e.model.id !== component.model.id
            })
            manager.taskList.items = t
            console.log(newComponent)
            manager.sendTask(newComponent)
            root.remove()
        }
    }

    manager.editUserConfirm = function (component) {
        let root = $("#user" + component.model.id)
        let title = root.find(".user-updating-title")[0].value
        if (title == "") {
            root.find(".user-updating-title")[0].focus()
        }
        else {
            let newComponent = UserComponent()
            // newComponent.model.description = root.find(".user-updating-description")[0].value
            newComponent.model.id = component.model.id
            newComponent.model.name = title
            t = manager.userList.items.filter(function(e){
                return e.model.id !== component.model.id
            })
            manager.userList.items = t
            console.log(newComponent)
            manager.sendUser(newComponent)
            root.remove()
        }
    }

    manager.sendProject = function(component){
        console.log('../api/project/'+component.model.id)
        $.ajax({
            type: 'PUT',
            url: '../api/project/'+component.model.id,
            data: JSON.stringify({ 
                "Name": component.model.title,
                "Description": component.model.description,
                "id:": component.model.id,
                "Status": component.model.status
            }),
            dataType: "json",
            contentType: 'application/json; charset=utf-8',
            success: function (data) {
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

    manager.sendTask = function(component){
        console.log('../api/task/'+component.model.id)
        $.ajax({
            type: 'PUT',
            url: '../api/task/'+component.model.id,
            data: JSON.stringify({ 
                "Name": component.model.title,
                "Description": component.model.description,
                "id:": component.model.id,
                "Status": component.model.status
            }),
            dataType: "json",
            contentType: 'application/json; charset=utf-8',
            success: function (data) {
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

    manager.sendUser = function(component){
        console.log('../api/user/'+component.model.id)
        $.ajax({
            type: 'PUT',
            url: '../api/user/'+component.model.id,
            data: JSON.stringify({ 
                "Name": component.model.name,
                "id:": component.model.id
            }),
            dataType: "json",
            contentType: 'application/json; charset=utf-8',
            success: function (data) {
                let user = UserComponent()
                user.model.name = data.name
                user.model.id = data.id
                manager.showUser(user)
            },
            error: function (data) {
                console.log(data);
            }
        })
    }

    return manager
}()