package com.yahoo.krimselis.budget.controller;

import com.yahoo.krimselis.budget.model.Irasas;
import com.yahoo.krimselis.budget.service.IrasasService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/irasas")

public class IrasasResursas {
    private final IrasasService irasasService;

    public IrasasResursas(IrasasService irasasService) {
        this.irasasService = irasasService;
    }

//    @Transactional
//    @GetMapping("/balance")
//    public ResponseEntity <Double> getBalansas () {
//        Double balansas = irasasService.balansas();
//        return new ResponseEntity<>(balansas, HttpStatus.OK);
//    }

    @GetMapping("/all")
    public ResponseEntity<List<Irasas>> getIrasai () {
        List<Irasas> irasai = irasasService.findAllIrasai();
        return new ResponseEntity<>(irasai, HttpStatus.OK);
    }

    @Transactional
    @GetMapping("/find/{id}")
    public ResponseEntity<Irasas> findIrasasById (@PathVariable("id") Long id) {
        Irasas irasas = irasasService.findIrasasById(id);
        return new ResponseEntity<>(irasas, HttpStatus.OK);
    }

    @Transactional
    @PostMapping("/add")
    public ResponseEntity<Irasas> addIrasas(@RequestBody Irasas irasas) {
        Irasas newIrasas = irasasService.addIrasas(irasas);
        return new ResponseEntity<>(newIrasas, HttpStatus.CREATED);
    }
    @Transactional
    @PutMapping("/update")
    public ResponseEntity<Irasas> updateIrasas(@RequestBody Irasas irasas) {
        Irasas updateIrasas = irasasService.updateIrasas(irasas);
        return new ResponseEntity<>(updateIrasas, HttpStatus.OK);
    }
    @Transactional
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteIrasas(@PathVariable("id") Long id) {
        irasasService.deleteIrasas(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}



