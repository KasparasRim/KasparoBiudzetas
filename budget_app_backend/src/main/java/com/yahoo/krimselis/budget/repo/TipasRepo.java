package com.yahoo.krimselis.budget.repo;
import com.yahoo.krimselis.budget.model.Tipas;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TipasRepo extends JpaRepository <Tipas, Long> {
    void deleteTipasById(Long id);

    Optional<Tipas> findTipasById(Long id);
}
