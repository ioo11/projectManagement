package helloSpring.Task;

public class TaskModel {
    public String Name;
    public String Description;
    public TaskStatus Status;

    public TaskModel(String name, String description, TaskStatus status) {
        Name = name;
        Description = description;
        Status = status;
    }

    public TaskModel(){}
    public TaskModel(String name, String description) {
        Name = name;
        Description = description;
    }
}
