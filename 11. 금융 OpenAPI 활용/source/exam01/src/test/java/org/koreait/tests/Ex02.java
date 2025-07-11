package org.koreait.tests;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.web.client.RestTemplate;

import java.net.URI;

@SpringBootTest
public class Ex02 {

    @Autowired
    private RestTemplate restTemplate;

    @Test
    void test() {
        String url  = "https://pokeapi.co/api/v2/pokemon";
        String response = restTemplate.getForObject(URI.create(url), String.class);
        System.out.println(response);
    }
}
