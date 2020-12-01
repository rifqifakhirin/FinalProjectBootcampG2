package com.bank.backend.finalprojectbackend.model;

public class ModelLogin {
    String userName;
    String password;

    public ModelLogin() {
    }

    public ModelLogin(String userName, String password) {
        this.userName = userName;
        this.password = password;
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
}
