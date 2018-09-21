package projectManagement.Models;


import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Entity;

@Entity
public class Visit {
    @Id
    @GeneratedValue
    public long id;

    public String description;
}
