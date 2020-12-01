package com.bank.backend.finalprojectbackend.model;

import javax.persistence.*;

@Entity
@Table(name = "bankuser")
public class UserBank {

    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long bankAccount;
    @Column(name = "debet_num")
    private String debetNum;
    @Column(name = "full_name")
    private String fullName;
    @Column(name = "phone_num")
    private String phoneNum;
    @Column(name = "email")
    private String email;
    @Column(name = "pin_atm")
    private int pinATM;
    @Column(name = "balance")
    private double balance;
    @Column(name = "user_name")
    private String username;
    @Column(name = "ref_num")
    private String refNum;

    public UserBank() {
    }

    public UserBank(long bankAccount, String fullName, double balance) {
        this.bankAccount = bankAccount;
        this.fullName = fullName;
        this.balance = balance;
    }

    public UserBank(long bankAccount, String debetNum, String fullName,
                    String phoneNum, String email, int pinATM, double balance, String username,
                    String refNum) {
        this.bankAccount = bankAccount;
        this.debetNum = debetNum;
        this.fullName = fullName;
        this.phoneNum = phoneNum;
        this.email = email;
        this.pinATM = pinATM;
        this.balance = balance;
        this.username = username;
        this.refNum = refNum;
    }


    public long getBankAccount() {
        return bankAccount;
    }

    public void setBankAccount(long bankAccount) {
        this.bankAccount = bankAccount;
    }

    public String getDebetNum() {
        return debetNum;
    }

    public void setDebetNum(String debetNum) {
        this.debetNum = debetNum;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getPhoneNum() {
        return phoneNum;
    }

    public void setPhoneNum(String phoneNum) {
        this.phoneNum = phoneNum;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getPinATM() {
        return pinATM;
    }

    public void setPinATM(int pinATM) {
        this.pinATM = pinATM;
    }

    public double getBalance() {
        return balance;
    }

    public void setBalance(double balance) {
        this.balance = balance;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getRefNum() {
        return refNum;
    }

    public void setRefNum(String refNum) {
        this.refNum = refNum;
    }
}
