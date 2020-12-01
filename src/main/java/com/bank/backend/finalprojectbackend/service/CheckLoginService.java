package com.bank.backend.finalprojectbackend.service;

import com.bank.backend.finalprojectbackend.model.ModelLogin;
import com.google.gson.Gson;
import org.springframework.stereotype.Service;

@Service
public class CheckLoginService {
    public String checkLogin(String dataString) {
        ModelLogin userLog = new Gson().fromJson(dataString, ModelLogin.class);
        if ((userLog.getUserName() != null) && (userLog.getPassword() != null)) {
            return "normal";
        }
        return "empty";
    }
}
