package com.example.calculator;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class CalculatorControllerTest {
    @Autowired
    private TestRestTemplate restTemplate;

    @Test
    public void testAdd() {
        ResponseEntity<Calculator> response = restTemplate.getForEntity("/add?num1=1&num2=2", Calculator.class);
        System.out.println("Response Body: " + response.getBody());
        assertEquals(HttpStatus.OK, response.getStatusCode());
        // assertEquals("Result: 3.0", response.getBody().getResult()); new push for pr
    }

    @Test
    public void testSub() {
        ResponseEntity<Calculator> response = restTemplate.getForEntity("/sub?num1=1&num2=2", Calculator.class);
        System.out.println("Response Body: " + response.getBody());
        assertEquals(HttpStatus.OK, response.getStatusCode());
        // assertEquals("Result: 1.0", response.getBody().getResult()); new push for pr
    }
}