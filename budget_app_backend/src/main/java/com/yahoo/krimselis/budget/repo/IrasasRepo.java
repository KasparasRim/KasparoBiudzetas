package com.yahoo.krimselis.budget.repo;
import com.yahoo.krimselis.budget.model.Irasas;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface IrasasRepo extends JpaRepository <Irasas, Long> {
    void deleteIrasasById(Long id);

    Optional<Irasas> findIrasasById(Long id);
}
