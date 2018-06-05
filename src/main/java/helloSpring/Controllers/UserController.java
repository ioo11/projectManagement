package helloSpring.Controllers;

import helloSpring.Models.*;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class UserController {
    final private UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }


//    @PostMapping("/user")
//    public void createUser(@RequestBody User user){
//        userRepository.save(user);
//    }

    @PostMapping("/user")
    public User createUser(@RequestBody UserModel userModel){
        User user = new User(userModel.Name);
        userRepository.save(user);
        return user;
    }

    @GetMapping("/user")
    public Iterable<User> getUsers(){
        return userRepository.findAll();
    }

//    @GetMapping("/user/{name}")
//    public User getUserByName(@PathVariable("name") String name){
//        return userRepository.findUserByName(name);
//    }

    @GetMapping("/user/{id}")
    public User getUserById(@PathVariable("id") Long id){
        return userRepository.findUserById(id);
    }
}
