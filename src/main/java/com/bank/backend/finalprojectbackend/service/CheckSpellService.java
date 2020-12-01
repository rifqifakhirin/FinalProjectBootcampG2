package com.bank.backend.finalprojectbackend.service;

import com.bank.backend.finalprojectbackend.model.ModelRegister;
import com.google.gson.Gson;
import org.springframework.stereotype.Service;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Service
public class CheckSpellService {

    public String checkSpell(String dataString) {
        ModelRegister userCandidate = new Gson().fromJson(dataString, ModelRegister.class);
        String username = userCandidate.getUsername();
        String pass = userCandidate.getPassword();
        String passTrans = userCandidate.getPasswordTransaction();
        String cekUser="";
        String cekPass="";
        String cekPassTrans="";

        //min 6 chars, at least one uppercase, one lowercase and one number
        Pattern pUser = Pattern.compile("(?=.*[a-z])(?=.*[A-Z])(?=.*\\\\d).{5,}$");
        Matcher mUser = pUser.matcher(username);
        boolean bUser = mUser.matches();

        //must have 6 chars, all numbers
        Pattern pPass = Pattern.compile("[0-9]{6}");
        Matcher mPass = pPass.matcher(pass);
        boolean bPass = mPass.matches();

        //min 6 chars, at least one letter and one number
        Pattern pPassTrans = Pattern.compile("(?=.*[A-Za-z])(?=.*\\\\d).{5,}$");
        Matcher mPassTrans = pPassTrans.matcher(passTrans);
        boolean bPassTrans = mPassTrans.matches();

        if (bUser == false) {
            cekUser = "user name must have min 6 chars, at least one uppercase, " +
                    "one lowercase and one number \n";
        }
        if (bPass == false) {
            cekPass = "password must have 6 chars with all numbers \n";
        }
        if (bPassTrans == false) {
            cekPassTrans = "password transaction must have min 6 chars, at least one letter " +
                    "and one number \n";
        }

        return (cekUser+cekPass+cekPassTrans);
    }
}
