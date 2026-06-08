package taskmanager.repository;

import taskmanager.entity.Task;
import taskmanager.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TaskRepository extends JpaRepository<Task, Long> {

    List<Task> findByCreatedBy(User user);
}