package com.bank.backend.finalprojectbackend.util;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class CustomMessageError extends RuntimeException{

    private static final long serialVersionUID = 1L;

    public CustomMessageError(String message) {
        super(message);
    }
}
