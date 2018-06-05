package helloSpring.Controllers;

import helloSpring.Models.Task;
import helloSpring.Models.TaskModel;
import helloSpring.Models.TaskRepository;
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

    @GetMapping("/task")
    public Iterable<Task> getProjects(){
        return taskRepository.findAll();
    }
    @GetMapping("/task/{id}")
    public Task getProject(@PathVariable("id")Long id ){
        return taskRepository.findTaskById(id);
    }

}
