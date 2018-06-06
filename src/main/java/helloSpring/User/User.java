package helloSpring.User;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import helloSpring.Project.Project;
import helloSpring.Task.Task;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.HashSet;
import java.util.Set;
import javax.persistence.*;

@JsonIdentityInfo(generator=ObjectIdGenerators.IntSequenceGenerator.class, property="name")
@Entity
public class User {
    @Id
    @GeneratedValue
    public Long id;
    @Column
    private String Name;
    @OneToMany
    private Set<Project> Projects;
    @ManyToMany
    private Set<Task> Tasks;

//    constructors
    @Autowired
    public User(){
        Projects = new HashSet<Project>();
        Tasks = new HashSet<Task>();
    }
    @Autowired
    public User(String name) {
        Name = name;
        Projects = new HashSet<Project>();
        Tasks = new HashSet<Task>();
    }

    @Autowired
    public User(Long id, String name) {
        this.id = id;
        Name = name;
        Projects = new HashSet<Project>();
        Tasks = new HashSet<Task>();
    }

//    getters & setters
    public String getName() {
        return Name;
    }
    public void setName(String name) {
        Name = name;
    }
    public Set<Project> getProjects() {
        return Projects;
    }
    public Set<Task> getTasks() {
        return Tasks;
    }
}
