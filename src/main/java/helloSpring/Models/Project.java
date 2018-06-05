package helloSpring.Models;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.HashSet;
import java.util.Set;
import javax.persistence.*;

@Entity
@JsonIdentityInfo(generator=ObjectIdGenerators.IntSequenceGenerator.class, property="id")
public class Project {
    @Id
    @GeneratedValue
    public Long id;

    @Column
    private String Name;
    @Column
    private String Description;

    @ManyToOne
    private User Owner;
    @ManyToMany
    private Set<User> Workers;
    @OneToMany
    private Set<Task> Tasks;
    @Column
    private ProjectStatus Status;

//    constructors
    @Autowired
    public Project() {
        Status = ProjectStatus.OPEN;
        Workers = new HashSet<User>();
        Tasks = new HashSet<Task>();
    }
    @Autowired
    public Project(String name, String description) {
        Name = name;
        Description = description;
        Status = ProjectStatus.OPEN;
        Workers = new HashSet<User>();
        Tasks = new HashSet<Task>();
    }
    @Autowired
    public Project(String name, User owner) {
        Name = name;
        Owner = owner;
        Status = ProjectStatus.OPEN;
        Workers = new HashSet<User>();
        Tasks = new HashSet<Task>();
    }
    @Autowired
    public Project(String name, String description, User owner) {
        Name = name;
        Description = description;
        Owner = owner;
        Status = ProjectStatus.OPEN;
        Workers = new HashSet<User>();
        Tasks = new HashSet<Task>();
    }

//    getters & setters
    public String getName() {
        return Name;
    }
    public String getDescription() {
        return Description;
    }

    public User getOwner() {
        return Owner;
    }
    public Set<User> getWorkers() {
        return Workers;
    }
    public Set<Task> getTasks() {
        return Tasks;
    }
    public ProjectStatus getStatus() {
        return Status;
    }
    public void setName(String name) {
        Name = name;
    }
    public void setDescription(String description) {
        Description = description;
    }
    public void setStatus(ProjectStatus status) {
        Status = status;
    }

    public void addTasks(Task task) {
        Tasks.add(task);
    }
    public void deleteTasks(Task task) {
        Tasks.remove(task);
    }
}
