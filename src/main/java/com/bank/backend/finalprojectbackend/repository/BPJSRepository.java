package com.bank.backend.finalprojectbackend.repository;

import com.bank.backend.finalprojectbackend.model.UserBPJS;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BPJSRepository extends JpaRepository<UserBPJS, Long> {
}
