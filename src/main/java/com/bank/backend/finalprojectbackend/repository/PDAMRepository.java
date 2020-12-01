package com.bank.backend.finalprojectbackend.repository;

import com.bank.backend.finalprojectbackend.model.UserPDAM;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PDAMRepository extends JpaRepository<UserPDAM, Long> {
}
