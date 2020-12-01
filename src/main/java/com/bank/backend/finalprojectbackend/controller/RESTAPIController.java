package com.bank.backend.finalprojectbackend.controller;

import com.bank.backend.finalprojectbackend.model.*;
import com.bank.backend.finalprojectbackend.rabbitMQ.Consumer;
import com.bank.backend.finalprojectbackend.rabbitMQ.Producer;
import com.bank.backend.finalprojectbackend.repository.*;
import com.bank.backend.finalprojectbackend.service.CheckLoginService;
import com.bank.backend.finalprojectbackend.service.CheckSpellService;
import com.bank.backend.finalprojectbackend.util.CustomMessageError;
import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/app")
public class RESTAPIController {

    @Autowired
    CheckSpellService checkSpellService;
    @Autowired
    Producer producer;
    @Autowired
    Consumer consumer;
    @Autowired
    BankAccountRepository bankAccountRepository;
    @Autowired
    CheckLoginService checkLoginService;
    @Autowired
    TransactionRepository transactionRepository;
    @Autowired
    AppAccountRepository appAccountRepository;
    @Autowired
    PDAMRepository pdamRepository;
    @Autowired
    BPJSRepository bpjsRepository;

    //get
    @GetMapping("/userbank")
    public List<UserBank> getAllUser(){
        return bankAccountRepository.findAll();
    }

    //register
    @PutMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody ModelRegister userCandidate) {
        String userNew = new Gson().toJson(userCandidate);
        String result = "";
        //check the user name, password, and password transaction requirement
        String cek = checkSpellService.checkSpell(userNew);
        if (cek.equals("")) {

            return new ResponseEntity<>(cek, HttpStatus.NOT_MODIFIED);
        }

        try{
            Thread thread = new Thread(() -> producer.sendData(userNew));
            thread.start();
            consumer.receiveLog("registration");
            result = consumer.receive("registration");
        }catch (Exception e){}

        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    //login
    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody ModelLogin userLogin){
        String user = new Gson().toJson(userLogin);
        String result = "";
        String cek = checkLoginService.checkLogin(user);
        if (cek.equals("")) {

            return new ResponseEntity<>(cek, HttpStatus.NO_CONTENT);
        }
        try{
            Thread thread = new Thread(() -> producer.sendData(user));
            thread.start();
            consumer.receiveLog("login");
            result = consumer.receive("login");
        }catch (Exception e){}

        if (result.equals("Login failed")) {
            return new ResponseEntity<>(result, HttpStatus.NO_CONTENT);
        }
//        UserBank userBank = new Gson().fromJson(result, UserBank.class);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    //display
    @GetMapping("/displayhome/{bankAccount}")
    public ResponseEntity<UserBank> getBankUser(@PathVariable String bankAccount) {
        Long accountBank = Long.parseLong(bankAccount);
        UserBank bankUser = bankAccountRepository.findById(accountBank)
                .orElseThrow(() -> new CustomMessageError("Bank user is not exist"));

        return ResponseEntity.ok(bankUser);
    }

    //pdam bill
    @PostMapping("/pdambill")
    public ResponseEntity<?> getPDAMBill (@RequestBody ModelBill modelBill) {

        String member = modelBill.getMemberNum();
        String result = "";
        try{
            Thread thread = new Thread(() -> producer.sendData(member));
            thread.start();
            consumer.receiveLog("pdambill");
            result = consumer.receive("pdambill");
        }catch (Exception e){}
        if (result.equals("Member is not exist")) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        UserPDAM memberPDAM = new Gson().fromJson(result, UserPDAM.class);
        Long memberNum = memberPDAM.getMemberNumber();
        result = memberNum.toString();
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    //display PDAM bill
    @GetMapping("/pdambill/{memberNum}")
    public ResponseEntity<UserPDAM> getPDAMMember(@PathVariable String memberNum) {
        Long accountPDAM = Long.parseLong(memberNum);
        UserPDAM userPDAM = pdamRepository.findById(accountPDAM)
                .orElseThrow(() -> new CustomMessageError("Bank user is not exist"));

        return ResponseEntity.ok(userPDAM);
    }

    //pdam payment
    @PutMapping("/pdampayment/{membernumber}")
    public ResponseEntity<?> payPDAM(@PathVariable String membernumber, @RequestBody ModelTransactionData passTrans) {

        ModelTransactionData transactionData = transactionRepository.findById(1)
                .orElseThrow(() -> new CustomMessageError("id is not exist"));
        String cek = "Transaction password is wrong";
        if (!transactionData.getActivePassTrans().equals(passTrans.getActivePassTrans())) {
            return new ResponseEntity<>(cek, HttpStatus.NOT_FOUND);
        }
        String result = "";
        try{
            Thread thread = new Thread(() -> producer.sendData(membernumber));
            thread.start();
            consumer.receiveLog("pdampay");
            result = consumer.receive("pdampay");
        }catch (Exception e){}

        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    //bpjs bill
    @PostMapping("/bpjsbill")
    public ResponseEntity<?> getBPJSBill (@RequestBody ModelBill modelBill) {
        String member = modelBill.getMemberNum();
        String result = "";
        try{
            Thread thread = new Thread(() -> producer.sendData(member));
            thread.start();
            consumer.receiveLog("bpjsbill");
            result = consumer.receive("bpjsbill");
        }catch (Exception e){}
        if (result.equals("Member is not exist")) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        UserBPJS memberBPJS = new Gson().fromJson(result, UserBPJS.class);
        Long memberNum = memberBPJS.getIdCardNumber();
        result = memberNum.toString();
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    //display BPJS bill
    @GetMapping("/bpjsbill/{memberNum}")
    public ResponseEntity<UserBPJS> getBPJSMember(@PathVariable String memberNum) {
        Long accountBPJS = Long.parseLong(memberNum);
        UserBPJS userBPJS = bpjsRepository.findById(accountBPJS)
                .orElseThrow(() -> new CustomMessageError("Bank user is not exist"));

        return ResponseEntity.ok(userBPJS);
    }

    //bpjs payment
    @PutMapping("/bpjspayment/{idnumber}")
    public ResponseEntity<?> payBPJS(@PathVariable String idnumber, @RequestBody ModelTransactionData passTrans) {
        ModelTransactionData transactionData = transactionRepository.findById(1)
                .orElseThrow(() -> new CustomMessageError("id is not exist"));
        String cek = "Transaction password is wrong";
        if (!transactionData.getActivePassTrans().equals(passTrans.getActivePassTrans())) {
            return new ResponseEntity<>(cek, HttpStatus.NOT_FOUND);
        }
        String result = "";
        try{
            Thread thread = new Thread(() -> producer.sendData(idnumber));
            thread.start();
            consumer.receiveLog("bpjspay");
            result = consumer.receive("bpjspay");
        }catch (Exception e){}

        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    //delete user app
    @DeleteMapping("/deleteAllUserApp")
    public ResponseEntity<?> deleteAllUserApp(){
        appAccountRepository.deleteAll();
        return new ResponseEntity<>("deleted", HttpStatus.NO_CONTENT);
    }
}
