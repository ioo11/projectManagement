function Owner(name, id) {
    let owner = {
        name: name,
        id: id
    }
    return owner
}

function Project(title, description, owner) {
    let card = {
        owner: owner,
        title: title,
        description: description
    }
    return card
}

function Task(title, description) {
    let card = {
        title: title,
        description: description
    }
    return card
}

