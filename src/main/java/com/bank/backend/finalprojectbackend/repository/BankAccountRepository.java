package com.bank.backend.finalprojectbackend.repository;

import com.bank.backend.finalprojectbackend.model.UserBank;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BankAccountRepository extends JpaRepository<UserBank, Long> {
}
