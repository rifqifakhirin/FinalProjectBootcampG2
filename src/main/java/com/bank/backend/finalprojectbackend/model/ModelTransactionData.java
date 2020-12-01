package com.bank.backend.finalprojectbackend.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "activeuser")
public class ModelTransactionData {

    @Id
    private int id;
    @Column(name = "active_un")
    private String activeUserName;
    @Column(name = "active_pass")
    private String activePassword;
    @Column(name = "active_passtrans")
    private String activePassTrans;

    public ModelTransactionData() {
    }

    public ModelTransactionData(String activePassTrans) {
        this.activePassTrans = activePassTrans;
    }

    public ModelTransactionData(int id, String activeUserName, String activePassTrans) {
        this.id = id;
        this.activeUserName = activeUserName;
        this.activePassTrans = activePassTrans;
    }

    public ModelTransactionData(int id, String activeUserName, String activePassword, String activePassTrans) {
        this.id = id;
        this.activeUserName = activeUserName;
        this.activePassword = activePassword;
        this.activePassTrans = activePassTrans;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getActiveUserName() {
        return activeUserName;
    }

    public void setActiveUserName(String activeUserName) {
        this.activeUserName = activeUserName;
    }

    public String getActivePassword() {
        return activePassword;
    }

    public void setActivePassword(String activePassword) {
        this.activePassword = activePassword;
    }

    public String getActivePassTrans() {
        return activePassTrans;
    }

    public void setActivePassTrans(String activePassTrans) {
        this.activePassTrans = activePassTrans;
    }
}
