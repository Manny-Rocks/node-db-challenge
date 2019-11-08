const db = require("../data/dbconfig.js");

const getProjects = () => {
    return db("projects");
}

const addProject = (project) => {
    return db("projects").insert(project)
}

const getProjectById = (id) => {
    return db("projects").where({id}).first()
}

const addTask = (task) => {
    return db("tasks").insert(task)
}
const getTasks = (id) => {
    return db("tasks").where("project_id", "=", id)
}


module.exports = {
    getProjects,
    addProject,
    getProjectById,
    addTask, 
    getTasks
}