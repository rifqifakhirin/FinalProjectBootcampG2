package com.bank.backend.finalprojectbackend.repository;

import com.bank.backend.finalprojectbackend.model.ModelTransactionData;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TransactionRepository extends JpaRepository<ModelTransactionData, Integer> {
}
