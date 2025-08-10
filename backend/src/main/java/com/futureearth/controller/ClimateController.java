package com.futureearth.controller;

import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api")
public class ClimateController {

    @GetMapping("/climate")
    public List<Map<String, Object>> getClimateData(@RequestParam int year) {
        Map<String, Object> point = new HashMap<>();
        point.put("latitude", Optional.of(0.0));
        point.put("longitude", Optional.of(0.0));
        point.put("metricType", "temperature");
        point.put("value", Optional.of(25 + (year - 2023) * 0.2)); // fake temp rise
        return List.of(point);
    }

    @PostMapping("/actions")
    public Map<String, Object> performAction(@RequestBody Map<String, Object> payload) {
        String action = (String) payload.get("action");
        int year = (Integer) payload.get("year");

        Map<String, Object> response = new HashMap<>();
        response.put("status", "OK");
        response.put("nextStory", "You chose to " + action + ". Great job!");
        response.put("updatedData", getClimateData(year));
        return response;
    }
}
