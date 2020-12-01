package com.bank.backend.finalprojectbackend.model;

public class ModelBill {
    String memberNum;

    public ModelBill() {
    }

    public ModelBill(String memberNum) {
        this.memberNum = memberNum;
    }

    public String getMemberNum() {
        return memberNum;
    }

    public void setMemberNum(String memberNum) {
        this.memberNum = memberNum;
    }
}
