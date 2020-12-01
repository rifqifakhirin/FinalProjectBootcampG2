package com.bank.backend.finalprojectbackend.model;

import javax.persistence.*;

@Entity
@Table(name = "pdamuser")
public class UserPDAM {

    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long memberNumber;
    @Column(name = "company_name")
    private String companyName;
    @Column(name = "full_name")
    private String fullName;
    @Column(name = "bill")
    private double bill;

    public UserPDAM() {
    }

    public UserPDAM(long memberNumber, String companyName, String fullName, double bill) {
        this.memberNumber = memberNumber;
        this.companyName = companyName;
        this.fullName = fullName;
        this.bill = bill;
    }


    public long getMemberNumber() {
        return memberNumber;
    }

    public void setMemberNumber(long memberNumber) {
        this.memberNumber = memberNumber;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
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
