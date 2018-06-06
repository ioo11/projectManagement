package helloSpring.User;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class UserController {
    final private UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }


    @PutMapping("/user/{id}")
    public User updateUser(@PathVariable("id") Long id, @RequestBody UserModel userModel) {
        User user = userRepository.findUserById(id);
        user.setName(userModel.Name);
        userRepository.save(user);
        return user;
    }
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

    @GetMapping("/user/{id}")
    public User getUserById(@PathVariable("id") Long id){
        return userRepository.findUserById(id);
    }
}
