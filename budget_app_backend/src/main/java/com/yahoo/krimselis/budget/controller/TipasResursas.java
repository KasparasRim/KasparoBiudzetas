package com.yahoo.krimselis.budget.controller;

import com.yahoo.krimselis.budget.model.Irasas;
import com.yahoo.krimselis.budget.model.Tipas;
import com.yahoo.krimselis.budget.service.TipasService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/tipas")

public class TipasResursas {

    private final TipasService tipasService;

    public TipasResursas(TipasService irasasService) {
        this.tipasService = irasasService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Tipas>> getTipai () {
        List<Tipas> tipai = tipasService.findAllTipai();
        return new ResponseEntity<>(tipai, HttpStatus.OK);
    }

    @Transactional
    @GetMapping("/find/{id}")
    public ResponseEntity<Tipas> findTipasById (@PathVariable("id") Long id) {
        Tipas tipas = tipasService.findTipasById(id);
        return new ResponseEntity<>(tipas, HttpStatus.OK);
    }

    @Transactional
    @PostMapping("/add")
    public ResponseEntity<Tipas> addTipas(@RequestBody Tipas tipas) {
        Tipas newTipas = tipasService.addTipas(tipas);
        return new ResponseEntity<>(newTipas, HttpStatus.CREATED);
    }

    @Transactional
    @PutMapping("/update")
    public ResponseEntity<Tipas> updateIrasas(@RequestBody Tipas tipas) {
        Tipas updateTipas = tipasService.updateTipas(tipas);
        return new ResponseEntity<>(updateTipas, HttpStatus.OK);
    }
    @Transactional
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteTipas(@PathVariable("id") Long id) {
        tipasService.deleteTipas(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
