package helloSpring.Controllers;

import helloSpring.Models.Visit;
import helloSpring.Models.VisitsRepository;
import org.springframework.web.bind.annotation.*;
import java.time.LocalDateTime;

@RestController
@RequestMapping("/")
public class IndexController {
    final VisitsRepository visitsRepository;

    public IndexController(VisitsRepository visitsRepository){
        this.visitsRepository = visitsRepository;
    }

    @GetMapping("/")
    public String index(){
        Visit visit = new Visit();
        visit.description = String.format("Visited at %s", LocalDateTime.now());
        visitsRepository.save(visit);

        return "Hello World";
    }

    @GetMapping("/visits")
    public Iterable<Visit> getVisits(){
        Visit visit = new Visit();
        visit.description = String.format("Visited at %s", LocalDateTime.now());
        visitsRepository.save(visit);
        return visitsRepository.findAll();
    }



}
