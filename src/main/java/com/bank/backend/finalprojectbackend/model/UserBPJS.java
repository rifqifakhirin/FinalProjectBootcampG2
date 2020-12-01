package com.bank.backend.finalprojectbackend.model;

import javax.persistence.*;

@Entity
@Table(name = "bpjsuser")
public class UserBPJS {

    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idCardNumber;
    @Column(name = "bpjs_type")
    private String bpjsType;
    @Column(name = "full_name")
    private String fullName;
    @Column(name = "bill")
    private double bill;

    public UserBPJS() {
    }

    public UserBPJS(long idCardNumber, String bpjsType, String fullName, double bill) {
        this.bpjsType = bpjsType;
        this.idCardNumber = idCardNumber;
        this.fullName = fullName;
        this.bill = bill;
    }

    public long getIdCardNumber() {
        return idCardNumber;
    }

    public void setIdCardNumber(long idCardNumber) {
        this.idCardNumber = idCardNumber;
    }

    public String getBpjsType() {
        return bpjsType;
    }

    public void setBpjsType(String bpjsType) {
        this.bpjsType = bpjsType;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public double getBill() {
        return bill;
    }

    public void setBill(double bill) {
        this.bill = bill;
    }
}
