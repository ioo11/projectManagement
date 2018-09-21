package projectManagement.Task;

import projectManagement.User.User;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.HashSet;
import java.util.Set;
import javax.persistence.*;

@Entity
public class Task {
    @Id
    @GeneratedValue
    public Long id;
    @Column
    private String Name;
    @Column
    private String Description;

    @ManyToMany
    private Set<User> Workers;
    @Column
    private TaskStatus Status;

//    constructors
    @Autowired
    public Task() {
        Status = TaskStatus.OPEN;
        Workers = new HashSet<>();
    }

    @Autowired
    public Task(String name) {
        Name = name;
        Status = TaskStatus.OPEN;
        Workers = new HashSet<>();
    }
    @Autowired
    public Task(String name, String description) {
        Name = name;
        Description = description;
        Status = TaskStatus.OPEN;
        Workers = new HashSet<>();
    }

//    getters & setters
    public void setName(String name) {
        Name = name;
    }
    public void setDescription(String description) {
        Description = description;
    }
    public void setWorkers(HashSet<User> workers) {
        Workers = workers;
    }
    public void setStatus(TaskStatus status) {
        Status = status;
    }
    public String getName() {
        return Name;
    }
    public String getDescription() {
        return Description;
    }
    public Set<User> getWorkers() {
        return Workers;
    }
    public TaskStatus getStatus() {
        return Status;
    }

    public void addWorker(User worker){
        Workers.add(worker);
    }
    public void deleteWorker(User worker){
        Workers.remove(worker);
    }


}
