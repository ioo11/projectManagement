package projectManagement.Project;

public class ProjectModel {
    public String Name;
    public String Description;
    public ProjectStatus Status;
    public ProjectModel(){}

    public ProjectModel(String name, String description, ProjectStatus status) {
        Name = name;
        Description = description;
        Status = status;
    }

    public ProjectModel(String name, String description) {
        Name = name;
        Description = description;
    }
}
