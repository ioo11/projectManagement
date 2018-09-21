package projectManagement.Task;

import org.springframework.data.repository.CrudRepository;

public interface TaskRepository extends CrudRepository<Task, Long> {
    public Task findTaskById(Long id);
}
