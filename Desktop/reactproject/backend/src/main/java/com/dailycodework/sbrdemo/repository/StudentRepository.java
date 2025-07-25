package com.dailycodework.sbrdemo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dailycodework.sbrdemo.model.Student;

/**
 * @author Simpson Alfred
 */

public interface StudentRepository extends JpaRepository<Student, Long> {
    Optional<Student> findByEmail(String email);
}
