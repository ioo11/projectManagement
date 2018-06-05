function Owner(name, id) {
    let owner = {
        name: name,
        id: id
    }
    return owner
}

function Project(title, description, owner, id, status) {
    return {
        owner: owner,
        title: title,
        description: description,
        id: id,
        status: status
    }
}

function Task(title, description, id, status) {
    let card = {
        title: title,
        description: description,
        id: id,
        status: status
    }
    return card
}

