package com.bank.backend.finalprojectbackend.repository;

import com.bank.backend.finalprojectbackend.model.UserApp;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AppAccountRepository extends JpaRepository<UserApp, String> {
}
