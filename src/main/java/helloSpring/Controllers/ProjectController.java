package helloSpring.Controllers;

import helloSpring.Models.Project;
import helloSpring.Models.ProjectModel;
import helloSpring.Models.ProjectRepository;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class ProjectController {
    final private ProjectRepository projectRepository;

    public ProjectController(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }


    @PostMapping("/project")
    public Project createProject(@RequestBody ProjectModel projectModel){
        Project project = new Project(projectModel.Name, projectModel.Description);
        projectRepository.save(project);
        return project;
    }

    @GetMapping("/project")
    public Iterable<Project> getProjects(){
        return projectRepository.findAll();
    }
    @GetMapping("/project/{id}")
    public Project getProject(@PathVariable("id")Long id ){
        return projectRepository.findProjectById(id);
    }
}
