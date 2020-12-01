package com.bank.backend.finalprojectbackend.model;

import javax.persistence.*;

@Entity
@Table(name = "appuser")
public class UserApp {

//    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "user_name", length = 20)
    private String userName;
    @Column(name = "bank_account")
    private long bankAccount;
    @Column(name = "password")
    private String password;
    @Column(name = "password_transaction")
    private String passwordTransaction;

    public UserApp() {
    }

    public UserApp(String passwordTransaction) {
        this.passwordTransaction = passwordTransaction;
    }

    public UserApp(String userName, long bankAccount, String password, String passwordTransaction) {
        this.userName = userName;
        this.bankAccount = bankAccount;
        this.password = password;
        this.passwordTransaction = passwordTransaction;
    }

    public long getBankAccount() {
        return bankAccount;
    }

    public void setBankAccount(long bankAccount) {
        this.bankAccount = bankAccount;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPasswordTransaction() {
        return passwordTransaction;
    }

    public void setPasswordTransaction(String passwordTransaction) {
        this.passwordTransaction = passwordTransaction;
    }
}
