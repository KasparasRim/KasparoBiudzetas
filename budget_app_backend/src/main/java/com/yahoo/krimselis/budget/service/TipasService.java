package com.yahoo.krimselis.budget.service;

import com.yahoo.krimselis.budget.exception.UserNotFoundException;
import com.yahoo.krimselis.budget.model.Tipas;
import com.yahoo.krimselis.budget.repo.TipasRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
public class TipasService {
    private final TipasRepo tipasRepo;

    @Autowired
    public TipasService(TipasRepo tipasRepo) {
        this.tipasRepo = tipasRepo;
    }

    public Tipas addTipas(Tipas tipas) {
       return tipasRepo.save(tipas);
    };
    public List<Tipas> findAllTipai() {
        return tipasRepo.findAll();
    }

    @Transactional
    public Tipas updateTipas(Tipas tipas) {
        return tipasRepo.save(tipas);
    }
    public Tipas findTipasById (Long id)  {
        return tipasRepo.findTipasById(id)
                .orElseThrow(() -> new UserNotFoundException("Tipas pagal id " + id + " nerastas"));
    }
    public void deleteTipas (Long id) {
        tipasRepo.deleteById(id);
        tipasRepo.deleteTipasById(id);
    }

}
