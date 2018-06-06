package helloSpring.Project;

import org.springframework.data.repository.CrudRepository;

public interface ProjectRepository extends CrudRepository<Project, Long> {
    public Project findProjectById(Long id);
}
