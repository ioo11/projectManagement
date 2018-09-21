package projectManagement.Project;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@ComponentScan
public class ProjectController {
    final private ProjectRepository projectRepository;

    public ProjectController(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }


    @PutMapping("/project/{id}")
    public Project updateProject(@PathVariable("id") Long id, @RequestBody ProjectModel projectModel){
        Project project = projectRepository.findProjectById(id);
        project.setName(projectModel.Name);
        project.setDescription(projectModel.Description);
        project.setStatus(projectModel.Status);
//        Project project = new Project(projectModel.Name, projectModel.Description);
        projectRepository.save(project);
        return project;
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
    public Project getProject(@PathVariable("id")Long id){
        return projectRepository.findProjectById(id);
    }

}
