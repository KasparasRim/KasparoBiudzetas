package com.yahoo.krimselis.budget.service;

import com.yahoo.krimselis.budget.exception.UserNotFoundException;
import com.yahoo.krimselis.budget.model.Irasas;
import com.yahoo.krimselis.budget.repo.IrasasRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
public class IrasasService {
    private final IrasasRepo irasasRepo;

    @Autowired
    public IrasasService(IrasasRepo irasasRepo) {
        this.irasasRepo = irasasRepo;
    }

    public Irasas addIrasas(Irasas irasas) {
       irasas.setData(LocalDateTime.now());
       return irasasRepo.save(irasas);
    }
    public List<Irasas> findAllIrasai() {
        return irasasRepo.findAll();
    }

    public double balansas() {
        List <Irasas> irasuSarasas = new ArrayList<>(irasasRepo.findAll());

        double balansas = 0;
        for (Irasas irasas : irasuSarasas) {
            if (irasas.getTipas().equalsIgnoreCase("pajamos")) {
                balansas += irasas.getSuma();
            } else  {
                balansas -= irasas.getSuma();
            }
        }
        return balansas;
    }

    @Transactional
    public Irasas updateIrasas(Irasas irasas) {
        return irasasRepo.save(irasas);
    }
    public Irasas findIrasasById (Long id)  {
        return irasasRepo.findIrasasById(id)
                .orElseThrow(() -> new UserNotFoundException("Irasas pagal id " + id + " nerastas"));
    }
    public void deleteIrasas (Long id) {
        irasasRepo.deleteIrasasById(id);
    }

}
