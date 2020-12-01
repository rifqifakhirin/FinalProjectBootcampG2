package com.bank.backend.finalprojectbackend.model;
//jangan lupa tambahkan pin transaksi di frontend register

public class ModelRegister {
    long bankAccount;
    String debetNum;
    int pinATM;
    String username;
    String password;
    String passwordTransaction;

    public ModelRegister() {
    }

    public ModelRegister(long bankAccount, String debetNum, int pinATM, String username,
                         String password, String passwordTransaction) {
        this.bankAccount = bankAccount;
        this.debetNum = debetNum;
        this.pinATM = pinATM;
        this.username = username;
        this.password = password;
        this.passwordTransaction = passwordTransaction;
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

    public int getPinATM() {
        return pinATM;
    }

    public void setPinATM(int pinATM) {
        this.pinATM = pinATM;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
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
