package com.yahoo.krimselis.budget.exception;

public class UserNotFoundException extends RuntimeException{
    public UserNotFoundException (String message) {
       super(message);
    }
}
