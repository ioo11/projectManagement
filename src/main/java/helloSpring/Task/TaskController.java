package helloSpring.Task;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class TaskController {
    final private TaskRepository taskRepository;

    public TaskController(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    @PostMapping("/task")
    public Task createTask(@RequestBody TaskModel taskModel){
        Task task = new Task(taskModel.Name, taskModel.Description);
        taskRepository.save(task);
        return task;
    }

    @PutMapping("/task/{id}")
    public Task updateTask(@PathVariable("id") Long id, @RequestBody TaskModel taskModel) {
        Task task = taskRepository.findTaskById(id);
        task.setName(taskModel.Name);
        task.setDescription(taskModel.Description);
        task.setStatus(taskModel.Status);
//        Project project = new Project(projectModel.Name, projectModel.Description);
        taskRepository.save(task);
        return task;
    }

    @GetMapping("/task")
    public Iterable<Task> getProjects(){
        return taskRepository.findAll();
    }
    @GetMapping("/task/{id}")
    public Task getProject(@PathVariable("id")Long id ){
        return taskRepository.findTaskById(id);
    }

}
