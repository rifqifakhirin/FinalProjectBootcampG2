package com.bank.backend.finalprojectbackend.service;

import com.bank.backend.finalprojectbackend.model.*;
import com.bank.backend.finalprojectbackend.repository.*;
import com.bank.backend.finalprojectbackend.util.CustomMessageError;
import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AppService {

    @Autowired
    private AppAccountRepository appAccountRepository;
    @Autowired
    private BankAccountRepository bankAccountRepository;
    @Autowired
    private BPJSRepository bpjsRepository;
    @Autowired
    private PDAMRepository pdamRepository;
    @Autowired
    private TransactionRepository transactionRepository;

    public String registerBank(String userNew) {
        ModelRegister userCandidate = new Gson().fromJson(userNew, ModelRegister.class);
        UserBank userBank = bankAccountRepository.findById(userCandidate.getBankAccount()).orElseThrow(() -> new CustomMessageError("Bank Account is not exist"));
        if ((userCandidate.getBankAccount() == userBank.getBankAccount()) &&
                (userCandidate.getDebetNum().equals(userBank.getDebetNum())) &&
                (userCandidate.getPinATM() == userBank.getPinATM())) {
            userBank.setUsername(userCandidate.getUsername());
            bankAccountRepository.save(userBank);
            UserApp appUser = new UserApp( userCandidate.getUsername(), userCandidate.getBankAccount(),
                    userCandidate.getPassword(), userCandidate.getPasswordTransaction());
            appAccountRepository.save(appUser);
            return "User has been successfully registered";
        } else {
            return "user registration failed";
        }
    }

    public String userLogin(String user) {
        ModelLogin userLog = new Gson().fromJson(user, ModelLogin.class);
        UserApp appUser = appAccountRepository.findById(userLog.getUserName())
                .orElseThrow(() -> new CustomMessageError("User name is not exist"));
        UserBank bankUser = bankAccountRepository.findById(appUser.getBankAccount())
                .orElseThrow(() -> new CustomMessageError("Bank account is not exist"));
        if (userLog.getPassword().equals(appUser.getPassword())) {
//            UserBank userLogged = new UserBank(bankUser.getBankAccount(), bankUser.getFullName(),
//                    bankUser.getBalance());
            Long bankAcc = bankUser.getBankAccount();
            String accountBank = bankAcc.toString();
            ModelTransactionData userActive = transactionRepository.findById(1)
                    .orElseThrow(() -> new CustomMessageError("id is not exist"));
            userActive.setActiveUserName(appUser.getUserName());
            userActive.setActivePassword(appUser.getPassword());
            userActive.setActivePassTrans(appUser.getPasswordTransaction());
            transactionRepository.save(userActive);
            System.out.println("Login " + userLog.getUserName() + " success....");
            return accountBank;
        } else {
            return "Login failed";
        }
    }

    public String pdamBill(String member) {
        Long memberNum = Long.parseLong(member);
        UserPDAM memberPDAM = pdamRepository.findById(memberNum)
                .orElseThrow(()-> new CustomMessageError("Member is not exist"));
        if (memberPDAM != null) {
            return new Gson().toJson(memberPDAM);
        } else {
            return "Member is not exist";
        }
    }

    public String pdamPay(String member) {
        Long memberNum = Long.parseLong(member);
        UserPDAM memberPay = pdamRepository.findById(memberNum)
                .orElseThrow(() -> new CustomMessageError("Member is not exist"));
        ModelTransactionData userActive = transactionRepository.findById(1)
                .orElseThrow(() -> new CustomMessageError("id is not exist"));
        UserApp userApp = appAccountRepository.findById(userActive.getActiveUserName())
                .orElseThrow(() -> new CustomMessageError("User name is not exist"));
        UserBank userBank = bankAccountRepository.findById(userApp.getBankAccount())
                .orElseThrow(() -> new CustomMessageError("Bank Account is not exist"));
        double cekBalance = userBank.getBalance() - memberPay.getBill();
        if ( cekBalance > 50000) {
            userBank.setBalance(cekBalance);
            bankAccountRepository.save(userBank);
            memberPay.setBill(0);
            pdamRepository.save(memberPay);
            return "PDAM payment success";
        } else {
            return "Remaining account balance must be above 50000";
        }
    }

    public String bpjsBill(String member) {
        Long idNumber = Long.parseLong(member);
        UserBPJS memberBPJS = bpjsRepository.findById(idNumber)
                .orElseThrow(()-> new CustomMessageError("Member is not exist"));
        if (memberBPJS != null) {
            return new Gson().toJson(memberBPJS);
        } else {
            return "Member is not exist";
        }
    }

    public String bpjsPay(String member) {
        Long idNumber = Long.parseLong(member);
        UserBPJS memberPay = bpjsRepository.findById(idNumber)
                .orElseThrow(() -> new CustomMessageError("Member is not exist"));
        ModelTransactionData userActive = transactionRepository.findById(1)
                .orElseThrow(() -> new CustomMessageError("id is not exist"));
        UserApp userApp = appAccountRepository.findById(userActive.getActiveUserName())
                .orElseThrow(() -> new CustomMessageError("User name is not exist"));
        UserBank userBank = bankAccountRepository.findById(userApp.getBankAccount())
                .orElseThrow(() -> new CustomMessageError("Bank Account is not exist"));
        double cekBalance = userBank.getBalance() - memberPay.getBill();
        if ( cekBalance > 50000) {
            userBank.setBalance(cekBalance);
            bankAccountRepository.save(userBank);
            memberPay.setBill(0);
            bpjsRepository.save(memberPay);
            return "BPJS payment success";
        } else {
            return "Remaining account balance must be above 50000";
        }
    }
}
